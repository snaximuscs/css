(()=>{var e={};e.id=5463,e.ids=[5463],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},19768:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>l});var r=s(8605),i=s(1403),n=s(49663),a=s.n(n),o=s(66381),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);s.d(t,u);let l=["",{children:["admin",{children:["mutes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,77462)),"C:\\Projects\\CSS-Panel\\app\\admin\\mutes\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,48814)),"C:\\Projects\\CSS-Panel\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,91090)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,89672,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Projects\\CSS-Panel\\app\\admin\\mutes\\page.tsx"],c="/admin/mutes/page",d={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/mutes/page",pathname:"/admin/mutes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},61889:(e,t,s)=>{Promise.resolve().then(s.bind(s,92350)),Promise.resolve().then(s.bind(s,44101))},81353:(e,t,s)=>{Promise.resolve().then(s.bind(s,70079))},92350:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(98284),i=s(37297),n=s(36065),a=s(22173),o=s(46705);let u=({children:e,flags:t})=>{let{admin:s,isLoading:u}=(0,o.ZP)(),l=(0,n.useRouter)();return(0,a.useEffect)(()=>{if(!u){if(!s)return l.push("/");if(t.length>0&&!t.some(e=>s.flags?.includes(e)))return l.push("/admin")}},[s,u,l,t]),u?r.jsx(i.c,{}):s?r.jsx(r.Fragment,{children:e}):r.jsx(r.Fragment,{children:"No Access"})}},44101:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ADMIN_TABS:()=>u,default:()=>o});var r=s(98284),i=s(36065),n=s(85265),a=s(77003);let o=()=>{let e=(0,i.usePathname)(),t=(0,i.useRouter)();return r.jsx(n.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:u,children:e=>r.jsx(a.r,{title:e.title},e.path)})},u=[{path:"/admin",title:"Statistics",permissions:[]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},70079:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(98284),i=s(36065),n=s(44101),a=s(92350),o=s(251);let u=()=>{let e=(0,i.usePathname)(),t=n.ADMIN_TABS.find(t=>t.path===e);return r.jsx(a.default,{flags:t?.permissions||[],children:r.jsx(o.default,{type:"MANAGE"})})}},48814:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>m});var r=s(88640),i=s(11728);let n=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\admin\UI\Tabs.tsx`),{__esModule:a,$$typeof:o}=n,u=n.default;(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\admin\UI\Tabs.tsx#ADMIN_TABS`);let l=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\admin\UI\AdminCheck.tsx`),{__esModule:p,$$typeof:c}=l,d=l.default,m={title:"Admin Panel"},x=({children:e})=>(0,r.jsxs)(d,{flags:[],children:[r.jsx(u,{}),e]})},77462:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(11728).createProxy)(String.raw`C:\Projects\CSS-Panel\app\admin\mutes\page.tsx`),{__esModule:i,$$typeof:n}=r,a=r.default}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2573,9489,8638,5394,7530,6276,7438,5822,251],()=>s(19768));module.exports=r})();