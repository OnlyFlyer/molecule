"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4004],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return s}});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),s=l,f=m["".concat(c,".").concat(s)]||m[s]||p[s]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function s(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9229:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=t(3117),l=t(102),i=(t(7294),t(3905)),a=["components"],o={id:"molecule.model.ISidebar",title:"Interface: ISidebar",sidebar_label:"ISidebar",custom_edit_url:null},c=void 0,d={unversionedId:"api/interfaces/molecule.model.ISidebar",id:"api/interfaces/molecule.model.ISidebar",title:"Interface: ISidebar",description:"molecule.model.ISidebar",source:"@site/docs/api/interfaces/molecule.model.ISidebar.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.ISidebar",permalink:"/molecule/docs/api/interfaces/molecule.model.ISidebar",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.ISidebar",title:"Interface: ISidebar",sidebar_label:"ISidebar",custom_edit_url:null},sidebar:"api",previous:{title:"ISettings",permalink:"/molecule/docs/api/interfaces/molecule.model.ISettings"},next:{title:"ISidebarPane",permalink:"/molecule/docs/api/interfaces/molecule.model.ISidebarPane"}},u=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"current",id:"current",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"panes",id:"panes",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],p={toc:u};function m(e){var r=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".ISidebar"),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/molecule.model.SidebarModel"},(0,i.kt)("inlineCode",{parentName:"a"},"SidebarModel")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"current"},"current"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"current"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueId")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/0e81ece3/src/model/workbench/sidebar.ts#L10"},"src/model/workbench/sidebar.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"panes"},"panes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"panes"),": ",(0,i.kt)("a",{parentName:"p",href:"molecule.model.ISidebarPane"},(0,i.kt)("inlineCode",{parentName:"a"},"ISidebarPane")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/0e81ece3/src/model/workbench/sidebar.ts#L11"},"src/model/workbench/sidebar.ts:11")))}m.isMDXComponent=!0}}]);