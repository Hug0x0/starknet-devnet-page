"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[38],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:11},o="Advancing time",c={unversionedId:"guide/advancing-time",id:"guide/advancing-time",title:"Advancing time",description:"Block timestamp can be manipulated by seting the exact time or seting the time offset. Timestamps methods won't generate a new block, but they will modify the time of the following blocks. All values should be set in Unix time and seconds.",source:"@site/docs/guide/advancing-time.md",sourceDirName:"guide",slug:"/guide/advancing-time",permalink:"/starknet-devnet-page/docs/guide/advancing-time",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/docs/guide/advancing-time.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Restart",permalink:"/starknet-devnet-page/docs/guide/restart"},next:{title:"Contract debugging",permalink:"/starknet-devnet-page/docs/guide/contract-debugging"}},l={},s=[{value:"Set time",id:"set-time",level:2},{value:"Increase time",id:"increase-time",level:2},{value:"Start time arg",id:"start-time-arg",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advancing-time"},"Advancing time"),(0,i.kt)("p",null,"Block timestamp can be manipulated by seting the exact time or seting the time offset. Timestamps methods won't generate a new block, but they will modify the time of the following blocks. All values should be set in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},(0,i.kt)("strong",{parentName:"a"},"Unix time"))," and seconds."),(0,i.kt)("h2",{id:"set-time"},"Set time"),(0,i.kt)("p",null,"Sets the exact time of the next generated block. All subsequent blocks will keep the set offset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /set_time\n{\n    "time": TIME_IN_SECONDS\n}\n')),(0,i.kt)("p",null,"Warning: block time can be set in the past and lead to unexpected behaviour!"),(0,i.kt)("h2",{id:"increase-time"},"Increase time"),(0,i.kt)("p",null,"Increases the time offset for each generated block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /increase_time\n{\n    "time": TIME_IN_SECONDS\n}\n')),(0,i.kt)("h2",{id:"start-time-arg"},"Start time arg"),(0,i.kt)("p",null,"Devnet can be started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--start-time")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"starknet-devnet --start-time START_TIME_IN_SECONDS\n")))}d.isMDXComponent=!0}}]);