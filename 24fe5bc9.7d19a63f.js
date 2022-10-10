(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(11),o=(n(0),n(231)),a={title:"Why not SwiftUI?"},s={id:"ckswift-why-not-swiftui",title:"Why not SwiftUI?",description:"No doubt since its release you\u2019ve come across some lovely code samples, or even had the luxury to experiment with SwiftUI: Apple\u2019s new Swift only declarative framework to build user interfaces.",source:"@site/docs/ckswift-why-not-swiftui.md",permalink:"/docs/ckswift-why-not-swiftui"},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No doubt since its release you\u2019ve come across some lovely code samples, or even had the luxury to experiment with SwiftUI: Apple\u2019s new Swift only declarative framework to build user interfaces."),Object(o.b)("p",null,"Besides the different choice of language, SwiftUI and ComponentKit have a very common goal borrowed from React: simplify UI code through a declarative API. You can read more about the benefits in our previous article Why ComponentKit."),Object(o.b)("p",null,"We are very excited about SwiftUI. Such an initiative originating from Apple validates what the company has been preaching for over the past 6 years on iOS. Even if Wilde could never adopt and benefit from Apple\u2019s first-party solution, the industry switch to a declarative paradigm will have ramifications on FACEBOOK as more and more n00bs will join with first-hand experience of using a declarative UI framework. Last but not least, ComponentKit having been a source of inspiration for SwiftUI - it\u2019s now our turn to analyse, learn and get inspired from their work. We welcome competition."),Object(o.b)("p",null,"In 2020 we\u2019ve spent a decent amount of time assessing the feasibility of SwiftUI in Wilde and concluded that whilst we hope in the mid-long term SwiftUI will eventually become the primary framework to build new UI at Facebook, it's not feasible right now with the main reasons being:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deployment version: SwiftUI\u2019s first iteration requires an iOS13 min deployment target. Wilde just deprecated iOS 10 support in October so that would be at best 2 years down the line."),Object(o.b)("li",{parentName:"ul"},"Maturity: Browsing the web is sufficient to realise that SwiftUI (specifically in its initial release) doesn\u2019t have CK\u2019s maturity. It, as any new framework, has its own sets of quirks and bugs which quickly becomes a deal breaker when working at our scale. Realistically SwiftUI V2 released this year is more promising on this front - but unless Apple decides to finally release support libraries for previous OS versions, this further delays our min deployment target to iOS 14, 3 years down the line."),Object(o.b)("li",{parentName:"ul"},"Performance: SwiftUI is very promising on that front as it leverages core features of the language (such as stack allocated value types for its Views and a richer type system for diffing between tree generations). However, given its current implementation it is very unlikely to surpass CK on deep surfaces like News Feed as it still performs build, diffing and layout on the main thread where we\u2019re able to offload these on a background queue, in most cases.")),Object(o.b)("p",null,"It\u2019s worth noting that even though adopting SwiftUI as our main UI framework in Wilde will take some time, some parts of the app will inevitable be exposed to it earlier such as widgets given that these are only available on iOS 14+ and require to be built with SwiftUI."),Object(o.b)("p",null,"Finally, even if hypothetically all the above mentioned points were to be resolved sooner than anticipated, the reality is that we\u2019ve got more than 8000 existing components in Wilde. Whilst a new surface could be built with SwiftUI, a Swift compatible solution for ComponentKit would still be necessary to provide the benefits of Swift to a large proportion of FB engineers."),Object(o.b)("p",null,"We\u2019ve thus opted for the following plan:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Build a transitive, idiomatic Swift compatible layer on top of ComponentKit not just unblocking Swift across the existing codebase but also providing a first-class Swift experience to UI engineers."),Object(o.b)("li",{parentName:"ol"},"Closely keep an eye on and assess SwiftUI as it keeps evolving (performance, reliability, feature set), with the aim to eventually also make it our framework of choice.")))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},f=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||o;return n?r.a.createElement(m,s({ref:t},c,{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);