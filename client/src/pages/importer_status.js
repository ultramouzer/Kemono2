import { kemonoAPI } from "@wp/api";
import { createComponent } from "@wp/components";
import { waitAsync } from "@wp/utils";

/**
 * @typedef Stats
 * @property {string} importID
 * @property {HTMLSpanElement} status
 * @property {HTMLSpanElement} count
 * @property {number} cooldown
 */



/**
 * TODOs: 
 * - service heuristics
 * - error handling
 * @param {HTMLElement} section 
 */
export async function importerStatusPage(section) {
  /**
   * @type {HTMLDivElement}
   */
  const importStats = section.querySelector(".import__stats");
  const [status, count] = importStats.children;
  /**
   * @type {Stats}
   */
   const stats = {
    importID: document.head.querySelector("meta[name='import_id']").content,
    status: status.children[0],
    count: count.children[0],
    cooldown: 5000
  }
  /**
   * @type {HTMLParagraphElement}
   */
  const loadingPlaceholder = section.querySelector(".loading-placeholder");
  /**
   * @type {HTMLUListElement}
   */
  const logList = section.querySelector(".log-list");

  const logs = await kemonoAPI.api.logs(stats.importID);

  if (logs) {
    populateLogList(logs, logList, loadingPlaceholder);
    stats.status.textContent = "In Progress";
    stats.count.textContent = logs.length;
    count.classList.remove("import__count--invisible");

    await waitAsync(stats.cooldown);
    await updateLogList(logs, logList, stats);
  } else {
    loadingPlaceholder.classList.add("loading-placeholder--complete")
    alert("Failed to fetch the logs, try to reload the page.")
  }
}

/**
 * @param {string[]} logs 
 * @param {HTMLUListElement} logList 
 * @param {HTMLParagraphElement} loadingItem
 */
function populateLogList(logs, logList, loadingItem){
  const fragment = document.createDocumentFragment();

  logs.forEach((log) => {
    const logItem = LogItem(log);
    fragment.appendChild(logItem);
  });

  loadingItem.classList.add("loading-placeholder--complete")
  logList.appendChild(fragment);
  logList.classList.add("log-list--loaded");
}

/**
 * TODO: finishing condition.
 * @param {string[]} logs 
 * @param {HTMLUListElement} logList 
 * @param {Stats} stats
 */
async function updateLogList(logs, logList, stats) {
  const newLogs = await kemonoAPI.api.logs(stats.importID);
  const diff = newLogs.length - logs.length;

  if (diff === 0) {
    stats.cooldown = stats.cooldown * 2;
    await waitAsync(stats.cooldown);
    return await updateLogList(logs, logList, stats.importID);
  }

  const diffLogs = newLogs.slice(newLogs.length - diff);
  const fragment = document.createDocumentFragment();
  diffLogs.forEach((log) => {
    const logItem = LogItem(log);
    fragment.appendChild(logItem);
  });
  logs.push(diffLogs);
  logList.appendChild(fragment);
  stats.count.textContent = logs.length;

  await waitAsync(stats.cooldown);
  return await updateLogList(logs, logList, stats.importID);
}

/**
 * @param {string} message 
 */
function LogItem(message) {
  /**
   * @type {HTMLLIElement}
   */
  const item = createComponent("log-list__item");
  
  item.textContent = message;

  return item;
}
