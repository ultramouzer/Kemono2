import { kemonoAPI } from "@wp/api";
import { createComponent } from "@wp/components";

/**
 * @param {HTMLElement} section 
 */
export async function importerStatusPage(section) {
  /**
   * @type {string}
   */
  const importID = document.head.querySelector("meta[name='import_id']").content;
  /**
   * @type {HTMLUListElement}
   */
  const logList = section.querySelector(".log-list");
  const logs = await kemonoAPI.api.logs(importID);
  let cooldown = 5000;

  if (!logs) {
    logs.push(`Error fetching logs. We'll keep trying. Your log id is ${ImportID}.`);
  }

  await fetchAndShowLogs(logs);

  /**
   * @param {KemonoAPI.API.LogItem[]} logs 
   */
  async function fetchAndShowLogs(logs) {
    logs = await fetchNewLogs(importID, logs);
    let currentChildCount = logList.childElementCount;
    let lastChild = logList.lastChild;
    let shouldScrollToBottom = true;
    let newLastChild;

    if (lastChild) {
        shouldScrollToBottom = isScrolledIntoView(logList.lastChild);
    }

    logs.forEach((message, index) => {
      if (index < currentChildCount) { return; }

      const logItem = LogItem(message);
      logList.appendChild(logItem);
      newLastChild = logItem;
    });

    if (newLastChild && shouldScrollToBottom) {
        newLastChild.scrollIntoView();
    }

    setTimeout(async () => {
      await fetchAndShowLogs();
    }, cooldown);
  }
}

/**
 * @param {string} importID 
 * @param {KemonoAPI.API.LogItem[]} logs 
 */
async function fetchNewLogs(importID, logs) {
  try {
    logs = await kemonoAPI.api.logs(importID);

    return logs;
  } catch (error) {
    logs.push(`Error fetching logs. We'll keep trying. Your log id is ${importID}.`);
    return logs;
  }
}

function isScrolledIntoView(el) {
    var parent = document.getElementsByClassName('info')[0];
    var height = parent.scrollTop;
    return el.offsetTop >= height && (el.offsetTop <= height + parent.offsetHeight + 10 + el.offsetHeight)
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
