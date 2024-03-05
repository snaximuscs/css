(()=>{var e={};e.id=7413,e.ids=[7413],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},11967:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>b,tree:()=>d});var s=t(8605),a=t(1403),i=t(49663),o=t.n(i),n=t(66381),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["setup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,21575)),"C:\\Projects\\CSS-Panel\\app\\setup\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,51866)),"C:\\Projects\\CSS-Panel\\app\\setup\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,91090)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,89672,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Projects\\CSS-Panel\\app\\setup\\page.tsx"],c="/setup/page",p={require:t,loadChunk:()=>Promise.resolve()},b=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/setup/page",pathname:"/setup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},80479:(e,r,t)=>{Promise.resolve().then(t.bind(t,25965))},78010:()=>{},25965:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>P});var s=t(98284),a=t(85733),i=t(74591),o=t(61756),n=t(22173),l=t(68290),d=t(11076),u=t(53167),c=t(12141),p=t(58510),b=t(72150),m=t(4570);let x=m.z.object({STEAM_API_KEY:m.z.string().min(1),SESSION_SECRET:m.z.string().min(1).optional(),DOMAIN:m.z.string().min(1),DB_HOST:m.z.string().min(1),DB_USER:m.z.string().min(1),DB_PASSWORD:m.z.string().min(1),DB_DATABASE:m.z.string().min(1),DB_PORT:m.z.string().min(1),MASTER_ADMIN:m.z.string().min(1)}),g=m.z.object({DB_HOST:m.z.string().min(1),DB_USER:m.z.string().min(1),DB_PASSWORD:m.z.string().min(1),DB_DATABASE:m.z.string().min(1),DB_PORT:m.z.string().min(1)});var h=t(41278),f=t(11168),v=t(80823);let P=()=>{let[e,r]=(0,n.useState)(0),[t,m]=(0,n.useState)(!1),P=(0,a.c)({initialValues:{STEAM_API_KEY:"",DOMAIN:"",DB_HOST:"",DB_USER:"",DB_PASSWORD:"",DB_DATABASE:"",DB_PORT:"3306",MASTER_ADMIN:""},validate:(0,i.F)(x)}),S=async()=>{m(!0);try{await f.Z.post("/api/admin/db",P.values),h.ZP.success("Database connection is valid!"),r(2)}catch(e){console.error(e),h.ZP.error("Failed to connect to the database!")}m(!1)},D=async()=>{if(!t){m(!0);try{await f.Z.post("/api/admin/setup",P.values),h.ZP.success("Succesfully setup the panel!"),r(3)}catch(e){console.error(e),h.ZP.error("Failed to setup the panel!")}m(!1)}},A=s.jsx(s.Fragment,{children:(0,s.jsxs)("p",{children:["Please fill in the following settings to setup the panel.",s.jsx("br",{}),"Make sure to have your database ready and a Steam API key. ",s.jsx("br",{}),"The following setting will be saved under the ",s.jsx("code",{children:".env"})," file in your website folder.",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Important note: "}),"If you are using Easypanel or Vercel, or not self hosting your website, you will need to"," ",(0,s.jsxs)(v.default,{href:"https://csspanel.dev/docs/quickstart",target:"_blank",className:"underline",children:["manually add the settings to your ",s.jsx("code",{children:".env"})," file."]})]})}),_=async()=>{switch(e){case 0:r(1);break;case 1:try{g.parse(P.values),await S()}catch(e){console.error(e),h.ZP.error("Invalid database settings!")}break;case 2:await D()}};switch(e){case 1:A=(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.Y,{label:"Database URL",placeholder:"1.1.1.1",errorMessage:P.errors.DB_HOST,type:"text",variant:"bordered",disabled:t,...P.getInputProps("DB_HOST")}),s.jsx(o.Y,{label:"Database User",placeholder:"root",errorMessage:P.errors.DB_USER,type:"text",variant:"bordered",disabled:t,autoComplete:"off",...P.getInputProps("DB_USER")}),s.jsx(o.Y,{label:"Database Password",placeholder:"111111",errorMessage:P.errors.DB_PASSWORD,type:"password",variant:"bordered",autoComplete:"off",disabled:t,...P.getInputProps("DB_PASSWORD")}),s.jsx(o.Y,{label:"Database Name",placeholder:"DB_NAME",errorMessage:P.errors.DB_DATABASE,type:"text",variant:"bordered",disabled:t,...P.getInputProps("DB_DATABASE")}),s.jsx(o.Y,{label:"Database Port",placeholder:"DB_PORT",errorMessage:P.errors.DB_PORT,type:"number",variant:"bordered",disabled:t,...P.getInputProps("DB_PORT")})]});break;case 2:A=(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.Y,{label:"Website Domain",description:"The url of your website, e.g. https://example.com",placeholder:"https://example.com",errorMessage:P.errors.DOMAIN,type:"text",variant:"bordered",disabled:t,...P.getInputProps("DOMAIN")}),s.jsx(o.Y,{label:"Steam API Key",description:(0,s.jsxs)(s.Fragment,{children:["Get your Steam API key from"," ",s.jsx(v.default,{href:"https://steamcommunity.com/dev/apikey",target:"_blank",children:"https://steamcommunity.com/dev/apikey"})]}),placeholder:"eg, 74B762FA601616732",errorMessage:P.errors.STEAM_API_KEY,type:"text",variant:"bordered",disabled:t,...P.getInputProps("STEAM_API_KEY")}),s.jsx(o.Y,{label:"Master Admin",description:"Steam 64",placeholder:"eg, 76561198000000000",errorMessage:P.errors.MASTER_ADMIN,type:"text",variant:"bordered",disabled:t,...P.getInputProps("MASTER_ADMIN")})]});break;case 3:A=(0,s.jsxs)(s.Fragment,{children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Setup complete!"}),s.jsx("p",{children:"Please restart the panel for the changes to take effect."})]})}return(0,s.jsxs)(l.w,{className:"container mx-auto my-auto",children:[s.jsx(d.u,{className:"flex flex-col items-start gap-2",children:s.jsx("h1",{className:"text-2xl font-bold",children:"Setup CSS-Panel"})}),s.jsx(u.G,{className:"flex flex-col gap-4 p-6",children:A}),(0,s.jsxs)(c.i,{className:"border-t relative flex items-center py-4 pt-6",children:[s.jsx(p.W,{value:e/3*100,className:"absolute top-0 w-full right-0 left-0 h-1.5",classNames:{track:"rounded-none"},color:"primary",size:"sm",isStriped:!0}),s.jsx(b.A,{onClick:_,size:"lg",isLoading:t,color:"primary",className:"min-w-[200px] mx-auto",isDisabled:3===e,children:"Continue"})]})]})}},51866:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>i});var s=t(17179),a=t(6569);let i={title:"Setup",description:"Setup the application."},o=({children:e})=>a.Z.safeParse(process.env).success?(debug("Env already set, redirecting to main page."),(0,s.redirect)("/")):e},21575:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let s=(0,t(11728).createProxy)(String.raw`C:\Projects\CSS-Panel\app\setup\page.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default},6569:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(19457);let a=s.z.object({STEAM_API_KEY:s.z.string().min(1),SESSION_SECRET:s.z.string().min(1).optional(),DOMAIN:s.z.string().min(1),DB_HOST:s.z.string().min(1),DB_USER:s.z.string().min(1),DB_PASSWORD:s.z.string().min(1),DB_DATABASE:s.z.string().min(1),DB_PORT:s.z.string().min(1),MASTER_ADMIN:s.z.string().min(1)});s.z.object({DB_HOST:s.z.string().min(1),DB_USER:s.z.string().min(1),DB_PASSWORD:s.z.string().min(1),DB_DATABASE:s.z.string().min(1),DB_PORT:s.z.string().min(1)});let i=a},53167:(e,r,t)=>{"use strict";t.d(r,{G:()=>d});var s=t(80854),a=t(29853),i=t(71711),o=t(3411),n=t(98284),l=(0,a.Gp)((e,r)=>{var t;let{as:a,className:l,children:d,...u}=e,c=(0,i.gy)(r),{slots:p,classNames:b}=(0,s.R)(),m=(0,o.W)(null==b?void 0:b.body,l);return(0,n.jsx)(a||"div",{ref:c,className:null==(t=p.body)?void 0:t.call(p,{class:m}),...u,children:d})});l.displayName="NextUI.CardBody";var d=l},68290:(e,r,t)=>{"use strict";t.d(r,{w:()=>S});var s=t(80854),a=t(14090),i=t(33244),o=(0,a.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),n=t(22173),l=t(76729),d=t(73530),u=t(28397),c=t(5058),p=t(29853),b=t(3411),m=t(31865),x=t(15546),g=t(71711),h=t(71921),f=t(88431),v=t(98284),P=(0,p.Gp)((e,r)=>{let{children:t,context:a,Component:i,isPressable:P,disableAnimation:S,disableRipple:D,getCardProps:A,getRippleProps:_}=function(e){let[r,t]=(0,p.oe)(e,o.variantKeys),{ref:s,as:a,children:i,disableRipple:f=!1,onClick:v,onPress:P,autoFocus:S,className:D,classNames:A,allowTextSelectionOnPress:_=!0,...y}=r,B=(0,g.gy)(s),j=a||(e.isPressable?"button":"div"),E="string"==typeof j,w=(0,b.W)(null==A?void 0:A.base,D),{onClick:M,onClear:z,ripples:T}=(0,h.i)(),k=r=>{e.disableAnimation||f||!B.current||M(r)},{buttonProps:I,isPressed:N}=(0,c.j)({onPress:P,elementType:a,isDisabled:!e.isPressable,onClick:(0,l.tS)(v,k),allowTextSelectionOnPress:_,...y},B),{hoverProps:R,isHovered:q}=(0,u.XI)({isDisabled:!e.isHoverable,...y}),{isFocusVisible:C,isFocused:O,focusProps:W}=(0,d.Fx)({autoFocus:S}),F=(0,n.useMemo)(()=>o({...t}),[...Object.values(t)]),H=(0,n.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:F,classNames:A}),[F,A,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),U=(0,n.useCallback)((r={})=>({ref:B,className:F.base({class:w}),tabIndex:e.isPressable?0:-1,"data-hover":(0,m.PB)(q),"data-pressed":(0,m.PB)(N),"data-focus":(0,m.PB)(O),"data-focus-visible":(0,m.PB)(C),"data-disabled":(0,m.PB)(e.isDisabled),...(0,l.dG)(e.isPressable?{...I,...W,role:"button"}:{},e.isHoverable?R:{},(0,x.z)(y,{enabled:E}),(0,x.z)(r))}),[B,F,w,E,e.isPressable,e.isHoverable,e.isDisabled,q,N,C,I,W,R,y]),Y=(0,n.useCallback)(()=>({ripples:T,onClear:z}),[T,z]);return{context:H,domRef:B,Component:j,classNames:A,children:i,isHovered:q,isPressed:N,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:f,handleClick:k,isFocusVisible:C,getCardProps:U,getRippleProps:Y}}({...e,ref:r});return(0,v.jsxs)(i,{...A(),children:[(0,v.jsx)(s.k,{value:a,children:t}),P&&!S&&!D&&(0,v.jsx)(f.L,{..._()})]})});P.displayName="NextUI.Card";var S=P},11076:(e,r,t)=>{"use strict";t.d(r,{u:()=>d});var s=t(80854),a=t(29853),i=t(71711),o=t(3411),n=t(98284),l=(0,a.Gp)((e,r)=>{var t;let{as:a,className:l,children:d,...u}=e,c=(0,i.gy)(r),{slots:p,classNames:b}=(0,s.R)(),m=(0,o.W)(null==b?void 0:b.header,l);return(0,n.jsx)(a||"div",{ref:c,className:null==(t=p.header)?void 0:t.call(p,{class:m}),...u,children:d})});l.displayName="NextUI.CardHeader";var d=l},12141:(e,r,t)=>{"use strict";t.d(r,{i:()=>d});var s=t(80854),a=t(29853),i=t(71711),o=t(3411),n=t(98284),l=(0,a.Gp)((e,r)=>{var t;let{as:a,className:l,children:d,...u}=e,c=(0,i.gy)(r),{slots:p,classNames:b}=(0,s.R)(),m=(0,o.W)(null==b?void 0:b.footer,l);return(0,n.jsx)(a||"div",{ref:c,className:null==(t=p.footer)?void 0:t.call(p,{class:m}),...u,children:d})});l.displayName="NextUI.CardFooter";var d=l},80854:(e,r,t)=>{"use strict";t.d(r,{R:()=>a,k:()=>s});var[s,a]=(0,t(62432).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},86038:(e,r,t)=>{"use strict";function s(e,r){return Array.from({length:r-e+1},(r,t)=>t+e)}function a(e,r=100){return Math.min(Math.max(e,0),r)}t.d(r,{E:()=>a,w:()=>s})}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[4525,7206,4517,1325,5822],()=>t(11967));module.exports=s})();