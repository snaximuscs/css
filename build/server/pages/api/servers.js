"use strict";(()=>{var e={};e.id=4452,e.ids=[4452],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},37701:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>d,default:()=>u,routeModule:()=>m});var s=r(88667),n=r(25828),i=r(38051),l=r(62161),o=e([l]);l=(o.then?(await o)():o)[0];let u=(0,i.l)(l,"default"),d=(0,i.l)(l,"config"),m=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/servers",pathname:"/api/servers",bundlePath:"",filename:""},userland:l});a()}catch(e){a(e)}})},62161:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>o});var s=r(224),n=r(6995),i=r(74186),l=e([s,n,i]);[s,n,i]=l.then?(await l)():l;let o=async(e,t)=>{await i.Z.run(e,t);let{method:r}=e;if(!n.Z)return t.status(500).json({message:"Database not connected"});if("GET"===r){let r=await n.Z.servers.getAll(),a=!!e.user?.id&&!!await n.Z.admins.getBySteam64(e.user?.id),i=(await Promise.all(r.map(async e=>{let{id:t}=e;return await (0,s.Z)(t,a).catch(e=>{error(`Error while querying server: ${t}, error: ${e}`)})||null}))).filter(e=>null!==e);return t.status(200).json(i)}};a()}catch(e){a(e)}})},59788:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>i});var s=r(2782),n=e([s]);s=(n.then?(await n)():n)[0];let i=async e=>{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));return t.length&&await (0,s.From64ToUser)(t)||[]};a()}catch(e){a(e)}})},77219:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(43582);let s="0.9.7",n=e=>e.replace(/[^\x20-\x7E]/g," "),i=async(e,t,r)=>{try{let i=await (0,a.RCON)({ip:e,port:t,password:r,enableWarns:!0,retries:2,timeout:2e3});i.authenticate();let l=await i.exec("css_query");if(!l)return null;let o=n(l),u=JSON.parse(o),{pluginVersion:d}=u.server;return d!==s&&warn(`[PluginStatus] The plugin version (${d}) for ${e}:${t} is outdated, the latest version is: ${s}
-> Download the latest version from: https://github.com/ShiNxz/CSS-Plugin`),u}catch(r){return r?.message?.includes("Connection timeout")?warn(`getting Plugin RCON status: ${e}:${t}: ${r}
Make sure that the server is running and the RCON is enabled.`):warn(`getting Plugin RCON status: ${e}:${t}: ${r}
Make sure that the plugin is installed and the RCON is enabled.
-> Download: https://github.com/ShiNxz/CSS-Plugin`),null}}},224:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>u});var s=r(77219),n=r(6995),i=r(92875),l=r(59788),o=e([n,l]);[n,l]=o.then?(await o)():o;let u=async(e,t)=>{if(!n.Z)throw Error("Database not connected");let r=await n.Z.servers.getById(e);if(!r)throw Error("Server not found");let{hostname:a,address:o,rcon:u}=r,[d,m]=o.split(":");if(u){let{server:r,players:i}=await (0,s.Z)(d,Number(m),u)||{};if(!r||!i)throw Error("Server not found");let c=t?await n.Z.chatLogs.getAllByServerAndMinutes(Number(e),5):[],p=await (0,l.Z)(i.map(e=>e.steam64)),h=await Promise.all(i.map(async r=>{if(!n.Z)throw Error("Database not connected");let{userId:a,playerName:s,steam64:i,score:l,ping:o,kills:u,deaths:d,mvps:m}=r,c=await n.Z.admins.getBySteam64AndServerId(i,e),h=p.find(e=>e.steamid===i);return{userId:a,playerName:h?h.personaname:s,avatar:h?h.avatar:"",steam64:i,score:l,ping:o,admin:t?c:null,kills:u,deaths:d,mvps:m}}));return{id:e,hostname:a,address:o,map:r.map,players:h,maxPlayers:r.maxPlayers,playersPercentage:Math.round(i.length/r.maxPlayers*100),vac:null,game:"Counter-Strike 2",chat:{messages:c}}}{let r=await (0,i.Z)(d,Number(m),u);if(!r)throw Error("Server not found");let s=t?await n.Z.chatLogs.getAllByServerAndMinutes(Number(e),5):[],c=await (0,l.Z)(r.serverPlayers?.map(e=>e.steamId64)||[]),p=r.serverPlayers?await Promise.all(r.serverPlayers?.map(async r=>{if(!n.Z)throw Error("Database not connected");let{id:a,name:s,steamId64:i}=r,l=await n.Z.admins.getBySteam64AndServerId(i,Number(e)),o=c.find(e=>e.steamid===i);return{userId:a,steam64:i,playerName:o?o.personaname:s,avatar:o?o.avatar:"",ping:0,admin:t?l:null}})):r.players;return{id:e,hostname:a,address:o,playersPercentage:Math.round(r.players/r.maxPlayers*100),map:r.map,players:p,maxPlayers:r.maxPlayers,vac:r.VAC,game:r.game,chat:{messages:s}}}};a()}catch(e){a(e)}})},92875:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(43582);let s=async(e,t,r)=>{try{let s=await (0,a.RCON)({ip:e,port:t,password:r});s.authenticate();let n=(await s.exec("css_players")).split("\n"),i=/\[#(\d+)\] "(.*?)" \(IP Address: "(.*?)" SteamID64: "(.*?)"\)/,l=[];for(let e of n){let t=e.match(i);if(t){let[,e,r,a,s]=t;s&&l.push({id:parseInt(e),name:r,ipAddress:a,steamId64:s})}}return s.destroy(),l}catch(r){return error(`Error getting RCON status: ${e}:${t}`,r),null}},n=async(e,t,r)=>{try{let n=await (0,a.Server)({ip:e,port:t,timeout:2e3}),i=await n.getInfo();n.disconnect();let{name:l,map:o,game:u,players:d,VAC:m,version:c}=i;r?debug(`RCON Found for server ${e}:${t}, the server info will be pulled with RCON.
Note that you can should consider using our official plugin to get more information and features.
https://github.com/ShiNxz/CSS-Plugin`):log(`RCON not found for server ${e}:${t}, the server info will be pulled without RCON, this means that players and advanced information modal will not be shown.
Consider using our official plugin to get more information and features.
https://github.com/ShiNxz/CSS-Plugin`);let p=r?await s(e,t,r):null,h=p?p?.map(e=>{let{ipAddress:t,...r}=e;return r}):null;return{name:l,map:o,players:d.online,serverPlayers:h,maxPlayers:d.max,VAC:m,version:c,game:u}}catch(r){return error(`[Error] getting server info: ${e}:${t}: ${r}`),null}}},74186:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>d});var s=r(15313),n=r(45616),i=r(429),l=r.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let u=(0,n.default)();u.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(s.Z.initialize()),u.use(s.Z.session());let d=u;a()}catch(e){a(e)}})},15313:(e,t,r)=>{r.d(t,{Z:()=>l});let a=require("passport");var s=r.n(a);let n=require("passport-steam");s().serializeUser(async(e,t)=>{t(null,e)}),s().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),s().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,r)=>(t.identifier=e,r(null,t))));let l=s()}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[6037],()=>r(37701));module.exports=a})();