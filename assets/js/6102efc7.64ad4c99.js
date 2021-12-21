"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9417],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={id:"molecule.model.IStatusBar",title:"Interface: IStatusBar",sidebar_label:"IStatusBar",custom_edit_url:null},u=void 0,c={unversionedId:"api/interfaces/molecule.model.IStatusBar",id:"api/interfaces/molecule.model.IStatusBar",title:"Interface: IStatusBar",description:"molecule.model.IStatusBar",source:"@site/docs/api/interfaces/molecule.model.IStatusBar.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.IStatusBar",permalink:"/molecule/docs/api/interfaces/molecule.model.IStatusBar",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.IStatusBar",title:"Interface: IStatusBar",sidebar_label:"IStatusBar",custom_edit_url:null},sidebar:"api",previous:{title:"ISidebarPane",permalink:"/molecule/docs/api/interfaces/molecule.model.ISidebarPane"},next:{title:"IStatusBarItem",permalink:"/molecule/docs/api/interfaces/molecule.model.IStatusBarItem"}},m=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"contextMenu",id:"contextmenu",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"leftItems",id:"leftitems",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"rightItems",id:"rightitems",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],s={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".IStatusBar"),(0,l.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/molecule.model.StatusBarModel"},(0,l.kt)("inlineCode",{parentName:"a"},"StatusBarModel")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"contextmenu"},"contextMenu"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"contextMenu"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.component.IMenuItemProps"},(0,l.kt)("inlineCode",{parentName:"a"},"IMenuItemProps")),"[]"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/0e81ece3/src/model/workbench/statusBar.tsx#L22"},"src/model/workbench/statusBar.tsx:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"leftitems"},"leftItems"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"leftItems"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.model.IStatusBarItem"},(0,l.kt)("inlineCode",{parentName:"a"},"IStatusBarItem")),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/0e81ece3/src/model/workbench/statusBar.tsx#L21"},"src/model/workbench/statusBar.tsx:21")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rightitems"},"rightItems"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rightItems"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.model.IStatusBarItem"},(0,l.kt)("inlineCode",{parentName:"a"},"IStatusBarItem")),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/0e81ece3/src/model/workbench/statusBar.tsx#L20"},"src/model/workbench/statusBar.tsx:20")))}p.isMDXComponent=!0}}]);