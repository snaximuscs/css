"use strict";(()=>{var e={};e.id=4354,e.ids=[4354],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},66912:e=>{e.exports=import("zustand")},64352:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>l,default:()=>u,routeModule:()=>d});var a=s(88667),n=s(25828),i=s(38051),o=s(835),c=e([o]);o=(c.then?(await c)():c)[0];let u=(0,i.l)(o,"default"),l=(0,i.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/servers/[serverId]/action",pathname:"/api/servers/[serverId]/action",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},14928:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Ae:()=>l,ZT:()=>p,f$:()=>u,nm:()=>c});var a=s(54144),n=s(66912),i=s(9926),o=e([a,n,i]);[a,n,i]=o.then?(await o)():o,(0,n.create)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));let c=i.z.string(),u=i.z.object({duration:i.z.number(),reason:i.z.string()}),l=i.z.object({duration:i.z.number(),reason:i.z.string(),type:a.P}),d=i.z.enum(["kick","ban","mute"]),p=i.z.object({action:d,userId:i.z.number()});r()}catch(e){r(e)}})},835:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>d});var a=s(43582),n=s(73153),i=s(6995),o=s(74186),c=s(14928),u=s(46634),l=e([n,i,o,c,u]);[n,i,o,c,u]=l.then?(await l)():l;let d=async(e,t)=>{await o.Z.run(e,t);let{method:s}=e;if(await (0,n.Z)(e,t)){if(!i.Z)return t.status(500).json({message:"Database not connected"});if("POST"===s)try{let{serverId:s}=e.query,r=await i.Z.servers.getById(Number(s));if(!r)return t.status(404).json({error:"Server not found"});let{address:n,rcon:o}=r,{action:l,userId:d}=c.ZT.parse(e.body),p=e.body.details;if(!p)return t.status(400).json({error:"Details not set"});if(!o)return t.status(500).json({error:"RCON not set"});let[m,y]=n.split(":"),f=await (0,a.RCON)({ip:m,port:Number(y),password:o});switch(f.authenticate(),l){case"kick":{let e=c.nm.parse(p);await f.exec(`css_kick #${d} ${e}`);break}case"ban":{let{reason:e,duration:t}=c.f$.parse(p);await f.exec(`css_ban #${d} ${t} ${e}`);break}case"mute":{let{reason:e,duration:t,type:s}=c.Ae.parse(p),r=`css_${s.toLowerCase()}`;await f.exec(`${r} #${d} ${t} ${e}`)}}return(0,u.Z)("Server Action",`Admin ${e.user?.displayName} (${e.user?.id}) performed action '${l}' on player ${d} on server #${s}`,e.user?.id),t.status(200).send("Message sent")}catch(e){return t.status(500).json({error:e})}}};r()}catch(e){r(e)}})},46634:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>o});var a=s(6995),n=s(899),i=e([a,n]);[a,n]=i.then?(await i)():i;let o=async(e,t,s)=>{if(a.Z)try{a.Z.logs.create(e,t,s);let r=await a.Z.settings.getByKey("discordWebhook",!1);r&&(0,n.Z)({url:r,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){error(`Failed to log: ${e}`)}};r()}catch(e){r(e)}})},74186:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>l});var a=s(15313),n=s(45616),i=s(429),o=s.n(i),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;r()}catch(e){r(e)}})},15313:(e,t,s)=>{s.d(t,{Z:()=>o});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()},73153:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(6995),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,s,r="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,c=await a.Z.admins.getBySteam64(o);if(!c)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return n(c);let u=null;if("object"==typeof c.flags)u=c.flags;else{let e=await a.Z.adminGroups.getById(c.flags);e&&(u=e.flags)}if(null===u||!("AND"===r?s.every(e=>u.includes(e)):s.some(e=>u.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(c)});r()}catch(e){r(e)}})},54144:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{P:()=>i,Z:()=>o});var a=s(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).z.enum(["GAG","MUTE","SILENCE"]),o=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:i});r()}catch(e){r(e)}})}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2939],()=>s(64352));module.exports=r})();