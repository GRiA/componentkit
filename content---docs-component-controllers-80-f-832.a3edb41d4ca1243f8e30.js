(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{71:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",function(){return c}),o.d(n,"rightToc",function(){return s}),o.d(n,"default",function(){return b});o(0);var t=o(133),a=o(134),r=o.n(a);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c={title:"Component Controllers"},s=[{value:"Creating Controllers",id:"creating-controllers",children:[]},{value:"Controller Flow",id:"controller-flow",children:[]},{value:"Communication between Component and Component Controller",id:"communication-between-component-and-component-controller",children:[]}],p={rightToc:s},m="wrapper";function b(e){var n=e.components,o=i(e,["components"]);return Object(t.b)(m,l({},p,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Remember the analogy made in ",Object(t.b)("a",l({parentName:"p"},{href:"/docs/philosophy"}),"Philosophy"),": components are like a stencil. They are an immutable snapshot of how a view should be configured at a given moment in time."),Object(t.b)("p",null,"Every time something changes, an entirely new component is created and the old one is thrown away. This means components are ",Object(t.b)("strong",{parentName:"p"},"short-lived"),", and their lifecycle is not under your control."),Object(t.b)("p",null,"But sometimes, you do need an object with a longer lifecycle. ",Object(t.b)("em",{parentName:"p"},"Component controllers")," fill that role:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",l({parentName:"li"},{href:"/docs/components-cant-be-delegates"}),"Components can't be delegates")," because they are short-lived, but component controllers can be delegates."),Object(t.b)("li",{parentName:"ul"},"Network downloads take time to complete; the component may have been recreated by the time the download completes. The controller can handle the callback."),Object(t.b)("li",{parentName:"ul"},"You may need an object to own some other object that should have a long lifetime.")),Object(t.b)("h2",null,Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"creating-controllers"})),Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#creating-controllers"}),"#"),"Creating Controllers"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Controllers are instantiated automatically by ComponentKit. Don't try to create them manually."),Object(t.b)("li",{parentName:"ul"},"Define a controller by simply creating a subclass of ",Object(t.b)("inlineCode",{parentName:"li"},"CKComponentController"),'; the naming convention is your component name plus "Controller". However, you can choose a different name or reuse an existing controller.'),Object(t.b)("li",{parentName:"ul"},"Your component must have a ",Object(t.b)("a",l({parentName:"li"},{href:"/docs/scopes"}),Object(t.b)("inlineCode",{parentName:"a"},"CKComponentScope"))," to have a controller. (If you forget, you will get an assertion failure.)"),Object(t.b)("li",{parentName:"ul"},"Your component must override ",Object(t.b)("inlineCode",{parentName:"li"},"+ (Class<CKComponentControllerProtocol>)controllerClass")," to indicate which class is its controller."),Object(t.b)("li",{parentName:"ul"},"Any ",Object(t.b)("inlineCode",{parentName:"li"},"CKComponentAction")," methods handled by your component can also be handled by the controller.")),Object(t.b)("h2",null,Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"controller-flow"})),Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#controller-flow"}),"#"),"Controller Flow"),Object(t.b)("image",{src:r()("assets/component-controllers.png"),alt:"Component Controller Flow",width:"338",height:"242"}),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"The component controller is ",Object(t.b)("strong",{parentName:"li"},"created")," with the first component."),Object(t.b)("li",{parentName:"ol"},"When the component is updated, a new instance is generated…"),Object(t.b)("li",{parentName:"ol"},"But the component controller stays the same.")),Object(t.b)("h2",null,Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"communication-between-component-and-component-controller"})),Object(t.b)("a",l({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#communication-between-component-and-component-controller"}),"#"),"Communication between Component and Component Controller"),Object(t.b)("p",null,"There is a only a one-way communication channel between the component and its component controller - you can only pass data off of a component to a component controller. A component has no reference its corresponding component controller. This is by design."),Object(t.b)("p",null,"To pass data from a component to its controller, expose a ",Object(t.b)("inlineCode",{parentName:"p"},"@property")," on the component in a class extension. The controller can initialize itself with the properties in ",Object(t.b)("inlineCode",{parentName:"p"},"initWithComponent:"),". If these properties will be changing in subsequent state changes (i.e. a new component is being created with different values for these properties), keep them up to date in ",Object(t.b)("inlineCode",{parentName:"p"},"didUpdateComponent"),"."),Object(t.b)("pre",null,Object(t.b)("code",l({parentName:"pre"},{className:"language-objectivec"}),"@interface MySongComponent()\n@property (nonatomic, strong, readonly) MySong *song;     // All components for a controller share the same value\n@property (nonatomic, assign, readonly) BOOL isPlaying;   // Different components may have different values (part of component state)\n@end\n\n// In order to provide the component controller class in the `+ (Class<CKComponentControllerProtocol>)controllerClass`\n// method, we have to declare the controller before the component's implementation.\n@interface MySongComponentController : CKComponentController\n@end\n\n@implementation MySongComponent : CKCompositeComponent\n+ (instancetype)newWithSong:(MySong *)song\n{\n  CKComponentScope scope(self, song.unique_id);\n  const BOOL isPlaying = [scope.state() boolValue];\n  MySongComponent *const c =\n  [MySongComponent\n   newWithComponent:[SongUIComponent\n                     newWithIsPlaying:isPlaying]];\n  if (c) {\n    c->_song = song;\n    c->_isPlaying = isPlaying;\n  }\n  return c;\n}\n\n+ (Class<CKComponentControllerProtocol>)controllerClass\n{\n  return [MySongComponentController class];\n}\n@end\n\n@implementation MySongComponentController\n{\n  MySong *_song;\n}\n\n- (instancetype)initWithComponent:(MySongComponent *)component\n{\n  if (self = [super initWithComponent:component]) {\n    _song = component.song;\n    [_song.setDelegate:self];\n  }\n  return self;\n}\n\n- (void)songStateDidChange:(BOOL)isPlaying\n{\n  [self.component updateState:^{\n    return @(isPlaying);\n  } mode:CKUpdateModeAsynchronous];\n}\n\n- (void)didUpdateComponent\n{\n  // This only fires on a state *change* (i.e. not through the initializer path).\n}\n@end\n")))}b.isMDXComponent=!0}}]);