import './styles/simpleTabs.scss'
import SimpleTabs from './js/simpleTabs.js'

const st = new SimpleTabs({
    tabsLinksClassName: "--tabs-link",
    tabsLinksContainerClassName: "--tabs-links",
    tabsLinksActiveClassName: "--active", //default: "active"
    animationLinksClassName: "--tabs-link-fade", //default: without animation
    typeOfEvent: "click", //default: "click"
    tabsContentClassName: "--tabs-content",
    tabsContentActiveClassName: "--active", //default: "active"
    animationTabsContentClassName: "--tabs-content-fade", //default: without animation
});



