"use strict";(self.webpackChunkntd_wiki=self.webpackChunkntd_wiki||[]).push([[662],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return p}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=s(r),p=i,d=u["".concat(c,".").concat(p)]||u[p]||k[p]||o;return r?t.createElement(d,l(l({ref:n},m),{},{components:r})):t.createElement(d,l({ref:n},m))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8953:function(e,n,r){r.r(n),r.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return k}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],a={},c="Permissions",s={unversionedId:"luckyblock/permissions",id:"luckyblock/permissions",title:"Permissions",description:"For breaking, getting LuckyBlocks or some commands it's required a permission",source:"@site/docs/luckyblock/permissions.md",sourceDirName:"luckyblock",slug:"/luckyblock/permissions",permalink:"/ntd-wiki/docs/luckyblock/permissions",draft:!1,editUrl:"https://github.com/danirod12/ntd-wiki/blob/master/docs/luckyblock/permissions.md",tags:[],version:"current",frontMatter:{}},m={},k=[{value:"LuckyBlock Permissions",id:"luckyblock-permissions",level:3},{value:"LuckyBlock (Premium) Permissions",id:"luckyblock-premium-permissions",level:3},{value:"Commands Permissions",id:"commands-permissions",level:3}],u={toc:k};function p(e){var n=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"For breaking, getting LuckyBlocks or some commands it's required a permission"),(0,o.kt)("p",null,"You need a permissions manager like ",(0,o.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/permissionsex"},"PermissionsEx")," or ",(0,o.kt)("a",{parentName:"p",href:"https://luckperms.net/download"},"LuckPerms")),(0,o.kt)("p",null,"You can read about granting permissions nodes on plugin's wikis"),(0,o.kt)("h3",{id:"luckyblock-permissions"},"LuckyBlock Permissions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.break.color")," - Break LuckyBlocks permission (example: ",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.break.red"),") or ",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.break.*")," for all colors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.craft.color")," - Craft LuckyBlocks permission (example: ",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.craft.red"),") or ",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.craft.*")," for all colors")),(0,o.kt)("h3",{id:"luckyblock-premium-permissions"},"LuckyBlock (Premium) Permissions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.breakget.*")," - Permission for all blocks in Mineable addon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.breakget.material")," - Permission for Mineable addon splitted material (material name)")),(0,o.kt)("h3",{id:"commands-permissions"},"Commands Permissions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.*")," - all commands"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.checkforupdates")," - check for updates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.support")," - support"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.get")," - get (",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.get.color"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.reload")," - reload"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.give")," - give (",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.give.color"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.list")," - list"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.gui")," - gui (",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.get"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"luckyblock.command.edit"),")")),(0,o.kt)("p",null,"LuckPerms permission granting example for breaking pink luckyblock: /lp group default permission set luckyblock.break.pink"))}p.isMDXComponent=!0}}]);