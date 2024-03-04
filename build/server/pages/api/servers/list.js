"use strict";(()=>{var e={};e.id=9008,e.ids=[9008],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},76150:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>u,default:()=>p,routeModule:()=>c});var a=s(88667),i=s(25828),n=s(38051),o=s(64682),l=e([o]);o=(l.then?(await l)():l)[0];let p=(0,n.l)(o,"default"),u=(0,n.l)(o,"config"),c=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/servers/list",pathname:"/api/servers/list",bundlePath:"",filename:""},userland:o});r()}catch(e){r(e)}})},64682:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>o});var a=s(6995),i=s(74186),n=e([a,i]);[a,i]=n.then?(await n)():n;let o=async(e,t)=>{await i.Z.run(e,t);let{method:s}=e;if(!a.Z)return t.status(500).json({message:"Database not connected"});if("GET"===s){let e=await a.Z.servers.getAll();return t.status(200).json(e)}};r()}catch(e){r(e)}})},74186:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u});var a=s(15313),i=s(45616),n=s(429),o=s.n(n),l=e([i]);i=(l.then?(await l)():l)[0];let p=(0,i.default)();p.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),p.use(a.Z.initialize()),p.use(a.Z.session());let u=p;r()}catch(e){r(e)}})},15313:(e,t,s)=>{s.d(t,{Z:()=>o});let r=require("passport");var a=s.n(r);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),a().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2939],()=>s(76150));module.exports=r})();