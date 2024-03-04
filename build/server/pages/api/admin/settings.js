"use strict";(()=>{var e={};e.id=411,e.ids=[411],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},18390:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var r=s(88667),i=s(25828),n=s(38051),o=s(48932),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,n.l)(o,"default"),c=(0,n.l)(o,"config"),d=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/settings",pathname:"/api/admin/settings",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},48932:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>c});var r=s(6995),i=s(74186),n=s(73153),o=s(10143),u=s(46634),l=e([r,i,n,o,u]);[r,i,n,o,u]=l.then?(await l)():l;let c=async(e,t)=>{if(await i.Z.run(e,t),!await (0,n.Z)(e,t,["@web/root","@css/root"],"OR"))return;let{method:s}=e;if(!r.Z)return t.status(500).json({message:"Database not connected"});switch(s){case"GET":{let e=await r.Z.settings.getAll(!1);return t.status(200).json(e)}case"POST":{let s=o.Z.parse(e.body);return await r.Z.settings.update(s),(0,u.Z)("Settings update",`Admin ${e.user?.displayName} (${e.user?.id}) updated the panel settings`,e.user?.id),t.status(200).json({message:"Settings updated"})}}};a()}catch(e){a(e)}})},46634:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>o});var r=s(6995),i=s(899),n=e([r,i]);[r,i]=n.then?(await n)():n;let o=async(e,t,s)=>{if(r.Z)try{r.Z.logs.create(e,t,s);let a=await r.Z.settings.getByKey("discordWebhook",!1);a&&(0,i.Z)({url:a,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};a()}catch(e){a(e)}})},74186:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>c});var r=s(15313),i=s(45616),n=s(429),o=s.n(n),u=e([i]);i=(u.then?(await u)():u)[0];let l=(0,i.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(r.Z.initialize()),l.use(r.Z.session());let c=l;a()}catch(e){a(e)}})},15313:(e,t,s)=>{s.d(t,{Z:()=>o});let a=require("passport");var r=s.n(a);let i=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),r().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,s)=>(t.identifier=e,s(null,t))));let o=r()},73153:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var r=s(6995),i=e([r]);r=(i.then?(await i)():i)[0];let n=(e,t,s,a="AND")=>new Promise(async(i,n)=>{if(!r.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return n(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await r.Z.admins.getBySteam64(o);if(!u)return n(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return i(u);let l=null;if("object"==typeof u.flags)l=u.flags;else{let e=await r.Z.adminGroups.getById(u.flags);e&&(l=e.flags)}if(null===l||!("AND"===a?s.every(e=>l.includes(e)):s.some(e=>l.includes(e))))return n(t.status(403).json({success:!1,error:"Protected Route"}));i(u)});a()}catch(e){a(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[6037],()=>s(18390));module.exports=a})();