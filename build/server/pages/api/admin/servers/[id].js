"use strict";(()=>{var e={};e.id=788,e.ids=[788],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},19737:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>l,default:()=>d,routeModule:()=>c});var a=t(88667),n=t(25828),i=t(38051),o=t(5245),u=e([o]);o=(u.then?(await u)():u)[0];let d=(0,i.l)(o,"default"),l=(0,i.l)(o,"config"),c=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/servers/[id]",pathname:"/api/admin/servers/[id]",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},5245:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>c});var a=t(6995),n=t(74186),i=t(36219),o=t(73153),u=t(15892),d=t(46634),l=e([a,n,i,o,u,d]);[a,n,i,o,u,d]=l.then?(await l)():l;let c=async(e,r)=>{await n.Z.run(e,r);let{method:t}=e;if(!await (0,o.Z)(e,r,["@web/root","@web/servers","@css/root"],"OR"))return;let{id:s}=e.query;if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!await a.Z.servers.getById(Number(s)))return r.status(404).json({message:"Server not found"});switch(t){case"PUT":{let{hostname:t,address:n}=i.Z.parse(e.body),o=await a.Z.servers.update(Number(s),{hostname:t,address:n});return(0,d.Z)("Server Edit",`Admin ${e.user?.displayName} (${e.user?.id}) edited server "${t}" (ip: ${n})`,e.user?.id),r.status(201).json(o)}case"POST":try{let{message:t}=e.body,a=await (0,u.Z)(Number(s),t);return(0,d.Z)("Server Rcon",`Admin ${e.user?.displayName} (${e.user?.id}) send a rcon command to server #${s} (command: ${t})`,e.user?.id),r.status(200).json({response:a})}catch(e){return r.status(500).json(e)}case"DELETE":try{if((await a.Z.admins.getByServerId(s)).length>0)return r.status(403).send("Please remove all admins from this server first");return await a.Z.servers.delete(Number(s)),(0,d.Z)("Server Delete",`Admin ${e.user?.displayName} (${e.user?.id}) deleted server #${s}`,e.user?.id),r.status(200).send("Server deleted")}catch(e){return r.status(500).json({message:"Error while deleting server",error:e})}default:return r.status(405).json({message:"Method not allowed"})}};s()}catch(e){s(e)}})},15892:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>d,x:()=>u});var a=t(43582),n=t(6995),i=e([n]);n=(i.then?(await i)():i)[0];let o=async(e,r)=>{if(!n.Z)throw Error("Database not connected");try{let t=await n.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:i}=t,[o,u]=s.split(":");if(!i)throw Error("Server has no rcon password");let d=await (0,a.RCON)({ip:o,port:Number(u),password:i,enableWarns:!0,retries:2,timeout:2e3});d.authenticate();let l=await d.exec(r);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},u=async e=>{if(!n.Z)throw Error("Database not connected");let r=await n.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await o(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},d=o;s()}catch(e){s(e)}})},46634:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(6995),n=t(899),i=e([a,n]);[a,n]=i.then?(await i)():i;let o=async(e,r,t)=>{if(a.Z)try{a.Z.logs.create(e,r,t);let s=await a.Z.settings.getByKey("discordWebhook",!1);s&&(0,n.Z)({url:s,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:r,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},74186:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>l});var a=t(15313),n=t(45616),i=t(429),o=t.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let d=(0,n.default)();d.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),d.use(a.Z.initialize()),d.use(a.Z.session());let l=d;s()}catch(e){s(e)}})},15313:(e,r,t)=>{t.d(r,{Z:()=>o});let s=require("passport");var a=t.n(s);let n=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,r,t)=>(r.identifier=e,t(null,r))));let o=a()},73153:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(6995),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,r,t,s="AND")=>new Promise(async(n,i)=>{if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!e.user)return i(r.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await a.Z.admins.getBySteam64(o);if(!u)return i(r.status(401).json({success:!1,error:"Protected Route"}));if(!t)return n(u);let d=null;if("object"==typeof u.flags)d=u.flags;else{let e=await a.Z.adminGroups.getById(u.flags);e&&(d=e.flags)}if(null===d||!("AND"===s?t.every(e=>d.includes(e)):t.some(e=>d.includes(e))))return i(r.status(403).json({success:!1,error:"Protected Route"}));n(u)});s()}catch(e){s(e)}})},36219:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).z.object({address:a.z.string().refine(e=>e.includes(":"),{message:"IP Address must include a port number"}),hostname:a.z.string().min(3),rcon:a.z.string().min(0).optional()});s()}catch(e){s(e)}})}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[6037],()=>t(19737));module.exports=s})();