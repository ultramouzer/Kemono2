// import { createComponent } from "@wp/components";

/**
 * @param {HTMLElement} section 
 */
export async function importerStatusPage(section) {
  /**
   * @type {string}
   */
  const importID = document.head.querySelector("meta[name='import_id']").content;
  var logs = [];

  await fetchAndShowLogs();

  async function fetchAndShowLogs() {
    logs = await fetchNewLogs(importID, logs);
    var logContainer = document.getElementById('logs');
    var lastChild = logContainer.lastChild;
    let shouldScrollToBottom = true;
    if (lastChild) {
      shouldScrollToBottom = isScrolledIntoView(logContainer.lastChild);
    }

    var currentChildCount = logContainer.childElementCount;
    var newLastChild;
    logs.forEach((message, index) => {
      if (index < currentChildCount) { return; }

      const paragraph = document.createElement('p');
      paragraph.appendChild(document.createTextNode(message));
      logContainer.appendChild(paragraph);
      newLastChild = paragraph;
    });

    if (newLastChild && shouldScrollToBottom) {
      newLastChild.scrollIntoView();
    }

    setTimeout(async () => {
      await fetchAndShowLogs();
    }, 5000);
  }
}

/**
 * @param {string} importID 
 * @param {string[]} logs 
 */
async function fetchNewLogs(importID, logs) {
  try {
    const response = await fetch(`/api/logs/${importID}`);
    logs = await response.json();

    return logs;

  } catch (error) {
    logs.push(`Error fetching logs. We'll keep trying. Your log id is ${importID}.`);
    return logs;
  }
}

/**
 * @param {HTMLElement} element 
 * @returns {boolean}
 */
function isScrolledIntoView(element) {
  var parent = document.getElementsByClassName('info')[0];
  var height = parent.scrollTop;
  const isScrolled = element.offsetTop >= height 
    && (element.offsetTop <= height + parent.offsetHeight + 10 + element.offsetHeight)
  return isScrolled;
}
