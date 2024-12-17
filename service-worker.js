/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-2oqoxdQM.js",[],["A5SCimyrjAE"]],["q-5LYs85Rf.js",[15],["Qv1H07X2UkA"]],["q-9z6Kw2B0.js",[34],["K4gvalEGCME"]],["q-B474gfMZ.js",[5],["EWIT9ENzUX0"]],["q-BA9ItI6F.js",[25],["hkT84xKSMLE"]],["q-BAM4atS8.js",[13],["c7rS2sNMucA"]],["q-BAso-htA.js",[13],["5KMht12WLTc"]],["q-BEdPdt7r.js",[31],["1raneLGffO8"]],["q-BF-phWtz.js",[51],["LX0fA0Ra81c"]],["q-BG-nUpsL.js",[1],["N26RLdG0oBg"]],["q-BORl9OLf.js",[25],["0vphQYqOdZI"]],["q-BRBr7aun.js",[],["9KRx0IOCHt8"]],["q-BRx9qDcX.js",[51],["Upcbnd5lshc"]],["q-BT5aweR-.js",[15],["VOf6VlaQpcg"]],["q-BUDJGtX6.js",[5,51],["q6zBMpv0kW0"]],["q-BZgMgOkD.js",[5],["zH94hIe0Ick"]],["q-BZmh-KGh.js",[25]],["q-Bvug00LU.js",[22],["dd1cEJtaV0c"]],["q-Bw7rJBSg.js",[13],["ONEvG4bR78s"]],["q-C94Xq2JO.js",[19],["pGRNMwvNec0"]],["q-CBqelCyR.js",[15],["Mn1EOk6GzxQ"]],["q-CCx4l9oU.js",[5,51],["4R1GS2GBHWo"]],["q-CGiBkJYD.js",[22],["Qzj16hnJOc8"]],["q-CJD1zP8y.js",[25],["ScE8eseirUA"]],["q-CL022aCJ.js",[1],["pWsmcogutG8"]],["q-CL8SFpjc.js",[1],["6LYztwGzxAA"]],["q-CNbMmxwb.js",[51],["0NxGJbJwb50"]],["q-CXrYMUQc.js",[22],["Sle22dFmGKQ"]],["q-CaQm572P.js",[13],["ZtP1H9mj4Mo"]],["q-CaYPvaBd.js",[34],["qGVD1Sz413o"]],["q-Cb2KHiaC.js",[25],["zPJUEsxZLIA"]],["q-CbavYbOu.js",[13],["nrMmt09dcdw"]],["q-Ce2U2TH6.js",[34],["Ysfvd0zsHZc"]],["q-Ct-XLlOh.js",[25],["p1yCGpFL1xE"]],["q-Ct_YNCml.js",[49,21,22,27],["tntnak2DhJ8"]],["q-CyQbfR48.js",[25],["xe8duyQ5aaU"]],["q-Cz7-QVQ7.js",[25],["zpHcJzYZ88E"]],["q-D7FphuX_.js",[25],["PmWjL2RrvZM"]],["q-DBRsimQU.js",[31],["FdQ8zERN4uM"]],["q-DNFJlORa.js",[34],["aww2BzpANGM"]],["q-DgnZKJGI.js",[25]],["q-DkdAfGtm.js",[25]],["q-DppEBMor.js",[22]],["q-DsSfb7Wr.js",[5,27],["keOluDl0a7Y"]],["q-DyJ9Py3o.js",[1],["B0lqk5IDDy4"]],["q-GHR73uv_.js",[51],["Ajz2wqFc4xQ"]],["q-IjsxiwGg.js",[38],["MiPVFWJLcMo"]],["q-Ilww0LH1.js",[1],["26Zk9LevwR4"]],["q-_b9KZALx.js",[25],["wERVsl0ZmT4"]],["q-eoV49sKx.js",[35],["x201FNbKvdw"]],["q-jWj9ZDZx.js",[25],["LcWEhDSWIhI"]],["q-wG7cud19.js",[7],["ffQinjNAq2g"]],["q-wcCawJRW.js",[1],["VKFlAWJuVm8"]],["q-xX1bxarl.js",[25],["WfTOxT4IrdA"]]];
const libraryBundleIds=[34];
const linkBundles=[[/^\/$/,[41,53,42,45]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
