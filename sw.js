if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let o={};const t=e=>i(e,d),c={module:{uri:d},exports:o,require:t};s[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-041f3694"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ico-1.png",revision:"d80a181a5d18413838523d5879d08782"},{url:"assets/ico-384.png",revision:"cd70de3ebe8694d95f0b1855472d9ad4"},{url:"assets/ico-512.png",revision:"1bdc3c42e42046b0a5501706f687c1dd"},{url:"assets/ico.png",revision:"16e7d03ec7e18d6e04d1097277c72cde"},{url:"index.css",revision:"bf2b852ad0f67d25a427ae807f1507ea"},{url:"index.html",revision:"9bccf722c9e7673f0ab39362355bb183"},{url:"index.js",revision:"b9fae620923c6f29bf49538ad605d505"},{url:"manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
