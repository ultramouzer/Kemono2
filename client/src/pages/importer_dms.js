/**
 * @param {HTMLElement} section 
 */
export function importerDMSPage(section) {
  /**
   * @type {HTMLFormElement}
   */
  const form = document.forms["dm-approval"];

  form.addEventListener("submit", handleDMApproval);
}

/**
 * @param {Event} event 
 */
function handleDMApproval(event) {

}
