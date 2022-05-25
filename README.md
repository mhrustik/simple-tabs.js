# simpleTabs.js

The simple ES5* javascrpit library for active links and tabs

# install:

```
   import './styles/simpleTabs.scss'
   import SimpleTabs from './js/simpleTabs.js'
```

```
   <div class="--tabs-links">
        <a class="--tabs-link --active" href="">one</a>
        <a class="--tabs-link" href="">two</a>
        <a class="--tabs-link" href="">three</a>
    </div>

    <div class="--tabs-wrap-content">
        <div class="--tabs-content --active">
            <img class="--tabs-img" src="https://place-hold.it/1280x720" alt="img">
        </div>
        <div class="--tabs-content">
            <img class="--tabs-img" src="https://place-hold.it/512x512" alt="img">
        </div>
        <div class="--tabs-content">
            <img class="--tabs-img" src="https://place-hold.it/1280x720" alt="img">
        </div>
    </div>
```

```
   
const st = new SimpleTabs({
    tabsLinksClassName: "--tabs-link",
    tabsLinksContainerClassName: "--tabs-links",
    tabsLinksActiveClassName: "--active", //default: "--active"
    animationLinksClassName: "--tabs-link-fade", //default: without animation
    typeOfEvent: "click", //default: "click"
    tabsContentClassName: "--tabs-content",
    tabsContentActiveClassName: "--active", //default: "--active"
    animationTabsContentClassName: "--tabs-content-fade", //default: without animation
   });
   
```

# Propreties:

| Property   |      Required     |  Default |
|----------|:-------------:|------:|
| tabsLinksClassName: |  yes |  |
| tabsLinksContainerClassName: |    yes   |   |
| tabsLinksActiveClassName: | no |   "--active" |
| animationLinksClassName: | no |   without animation |
| typeOfEvent: | no |   "click" |
| tabsContentClassName: | yes and no |     |
| tabsContentActiveClassName: | no |  "--active" |
| animationTabsContentClassName: | no |   without animation |

# other call methods:

```
 
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
  st.getTargetTabsLink(); //return current target link
  st.getIndexTabsLink();  //return current target link index
  st.getIndexTab();       //return current target tab index
  st.getTargetTab();      //return current target tab

```

# Example use without tabs (Only active links):

```
   <div class="--tabs-links">
        <a class="--tabs-link --active" href="">one</a>
        <a class="--tabs-link" href="">two</a>
        <a class="--tabs-link" href="">three</a>
    </div>

```

```
 const st = new SimpleTabs({
       tabsLinksClassName: "--tabs-link",
       tabsLinksContainerClassName: "--tabs-links",
       tabsLinksActiveClassName: "--active", //default: "active"
       animationLinksClassName: "--tabs-link-fade", //default: without animation
       typeOfEvent: "click", //default: "click"
   });

```

# Example use without tabs (Only active links) with additional callback method:

```
   <div class="--tabs-links">
        <a class="--tabs-link --active" href="">one</a>
        <a class="--tabs-link" href="">two</a>
        <a class="--tabs-link" href="">three</a>
    </div>

```

```

const st = new SimpleTabs({
      tabsLinksClassName: "--tabs-link",
      tabsLinksContainerClassName: "--tabs-links",
      tabsLinksActiveClassName: "--active", //default: "active"
      animationLinksClassName: "--tabs-link-fade", //default: without animation
      typeOfEvent: "click", //default: "click"
  });
 
  st.customAfterEventInsideEvent = function () {
      console.log(st.getTargetTabsLink());   //return current target link
      console.log(st.getIndexTabsLink());    //return current target link index
  }

```

> **⚠ ATTENTION:**  
> Callback function customAfterEventInsideEvent called in the same event and used to optimize and embed further logic into existing event.


# Exapmple callback function: customAfterEventInsideEvent

```
   <div class="--tabs-links">
        <a class="--tabs-link --active" href="">one</a>
        <a class="--tabs-link" href="">two</a>
        <a class="--tabs-link" href="">three</a>
    </div>

    <div class="--tabs-wrap-content">
        <div class="--tabs-content --active">
            <img class="--tabs-img" src="https://place-hold.it/1280x720" alt="img">
        </div>
        <div class="--tabs-content">
            <img class="--tabs-img" src="https://place-hold.it/512x512" alt="img">
        </div>
        <div class="--tabs-content">
            <img class="--tabs-img" src="https://place-hold.it/1280x720" alt="img">
        </div>
    </div>
```

```

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
 
  st.customAfterEventInsideEvent = function () {
      console.log("Hello!");
      const targetTab = st.getTargetTab();
      targetTab.innerHTML = "<h1>Hello!!!</h1>";
  }

```