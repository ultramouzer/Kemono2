/**
 * @param {HTMLElement} section 
 */
export function importerPage(section) {
  /**
   * @type {HTMLFormElement}
   */
  const form = section.querySelector(".form");
  const discordSection = form.querySelector("#discord-section");
  const dmConsentSection = form.querySelector("#dm-consent");

  form.addEventListener("change", switchDiscordSection(discordSection));
  form.addEventListener("change", switchConsentSection(dmConsentSection));
}

/**
 * @param {HTMLElement} discordSection
 * @returns {(event: Event) => void}
 */
function switchDiscordSection(discordSection) {
  return (event) => {
    if (event.target.id === "service") {
      event.stopPropagation();
  
      /**
       * @type {HTMLSelectElement}
       */
      const select = event.target;
  
      if (select.value === "discord") {
        discordSection.classList.remove("form__section--hidden");
      } else {
        discordSection.classList.add("form__section--hidden");
      }
    }
  }
  
}

/**
 * @param {HTMLElement} dmConsentSection
 * @returns {(event: Event) => void}
 */
 function switchConsentSection(dmConsentSection) {
  return (event) => {
    if (event.target.id === "service") {
      event.stopPropagation();
  
      /**
       * @type {HTMLSelectElement}
       */
      const select = event.target;
  
      // the dm importer is currently patreon only
      if (select.value === "patreon") {
        dmConsentSection.classList.remove("form__section--hidden");
      } else {
        dmConsentSection.classList.add("form__section--hidden");
      }
    }
  }
  
}
