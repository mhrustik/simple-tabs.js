/**
 * SimpleTabs.js
 * @description "The simple javascrpit library for active links and tabs"
 * @author "Михаил Хрусталев [Full stack web deveoper]"
 * @contacts "Telegram: @m_hrustalev"
 * @Git_repository "..."
 * @Github_profile "..."
 */

export default class SimpleTabs {
  #tabsLinks;
  #tabsLinksClassName;
  #tabsLinksContainer;
  #tabsLinksActiveClassName;
  #tabsContentActiveClassName;
  #typeOfEvent;
  #animationLinksClassName;
  #animationTabsContentClassName;
  #targetTabsLink;
  #indexTabsLink;
  #targetTab;
  #indexTab;
  #tabsContent;
  customAfterEventInsideEvent;
  constructor(data = "") {
    this.#tabsLinksContainer = document.querySelector(`.${data.tabsLinksContainerClassName}`);
    this.#tabsLinks = this.#tabsLinksContainer.querySelectorAll(`.${data.tabsLinksClassName}`);
    this.#tabsLinksActiveClassName = data.tabsLinksActiveClassName || "--active";
    this.#tabsContentActiveClassName = data.tabsContentActiveClassName || "--active";
    this.#typeOfEvent = data.typeOfEvent || "click";
    this.#animationLinksClassName = data.animationLinksClassName || false;
    this.#animationTabsContentClassName = data.animationTabsContentClassName || false;
    this.#tabsContent = document.querySelectorAll(`.${data.tabsContentClassName}`) || false;
    this.#tabsLinksClassName = data.tabsLinksClassName;
    this.#actionFactory();
  }

  /**
    * @description "The function of events"
    * @status "#Private"
    */

  #actionFactory() {
    this.#tabsLinksContainer.addEventListener(this.#typeOfEvent, (e) => {
      e.preventDefault();
      if (e.target && e.target.matches(`.${this.#tabsLinksClassName}`)) {
        this.#targetTabsLink = e.target;
        this.#indexTabsLink = this.#activeNavs(this.#targetTabsLink);
        if (this.#tabsContent !== false) {
          this.#activeContent(this.#indexTabsLink);
        }
        if (this.customAfterEventInsideEvent) {
          this.customAfterEventInsideEvent();
        }
      }
    });
  }

  /**
    * @description "The function for active links"
    * @status "#Private"
    * @returns index active links
    */


  #activeNavs(target) {
    this.#tabsLinks.forEach((item) => {
      if (item.classList.contains(this.#tabsLinksActiveClassName)) {
        item.classList.remove(this.#tabsLinksActiveClassName)
        if (this.#animationLinksClassName !== false) {
          item.classList.remove(this.#animationLinksClassName)
        }
      }
    });
    target.classList.add(this.#tabsLinksActiveClassName)
    if (this.#animationLinksClassName !== false) {
      target.classList.add(this.#animationLinksClassName)
    }
    return [].indexOf.call(this.#tabsLinks, target);
  }

  /**
    * @description "The function for active tabs"
    * @status "#Private"
    */

  #activeContent(indexActiveNavsElement) {
    this.#tabsContent.forEach((item, i) => {
      if (item.classList.contains(this.#tabsContentActiveClassName)) {
        item.classList.remove(this.#tabsContentActiveClassName)
        if (this.#animationTabsContentClassName !== false) {
          item.classList.remove(this.#animationTabsContentClassName)
        }
      }
      if (i === indexActiveNavsElement) {
        item.classList.add(this.#tabsContentActiveClassName)
        item.classList.add(this.#animationTabsContentClassName)
        this.#targetTab = item;
        this.#indexTab = i;
      }
    })
  }

  /**
   * @description "tabsLinksContainer getter"
   * @status "#Public"
   */

  getTabsLinksContainer() {
    return this.#tabsLinksContainer;
  }

  /**
   * @description "targetTabsLink getter"
   * @status "#Public"
   */

  getTargetTabsLink() {
    return this.#targetTabsLink;
  }

  /**
   * @description "indexTabsLink getter"
   * @status "#Public"
   */

  getIndexTabsLink() {
    return this.#indexTabsLink;
  }

  /**
   * @description "targetTab getter"
   * @status "#Public"
   */

  getTargetTab() {
    return this.#targetTab;
  }

  /**
  * @description "indexTab getter"
  * @status "#Private"
  */

  getIndexTab() {
    return this.#indexTab;
  }

}

