globalThis.__timing__.logStart("Load chunks/build/privacy-styles-1-B53mV2Zw.mjs");import{useSSRContext as e,defineComponent as t,defineAsyncComponent as r,unref as a,mergeProps as i,createVNode as o,resolveDynamicComponent as s}from"vue";import{ssrRenderAttrs as n,ssrRenderComponent as l,ssrInterpolate as d,ssrRenderList as c,ssrRenderAttr as p,ssrRenderClass as g,ssrRenderVNode as m}from"vue/server-renderer";import{u,d as v,W as x,f}from"./server.mjs";import"../nitro/nitro.mjs";import"node:http";import"node:https";import"node:fs";import"node:path";import"node:async_hooks";import"node:url";import"ipx";import"vue-router";import"unhead";import"node:zlib";import"node:stream";import"node:buffer";import"node:util";import"node:net";const w=".scroll-mt-24{scroll-margin-top:6rem}@media (prefers-color-scheme:dark){.prose{--tw-prose-body:#d1d5db;--tw-prose-headings:#fff;--tw-prose-links:#818cf8;--tw-prose-bold:#fff;--tw-prose-counters:#9ca3af;--tw-prose-bullets:#9ca3af;--tw-prose-quotes:#d1d5db;--tw-prose-quote-borders:#374151;--tw-prose-captions:#9ca3af;--tw-prose-code:#fff;--tw-prose-pre-code:#d1d5db;--tw-prose-pre-bg:#1f2937;--tw-prose-hr:#374151}}",h=".scroll-mt-24{scroll-margin-top:6rem}@media (prefers-color-scheme:dark){.prose{--tw-prose-body:#d1d5db;--tw-prose-headings:#fff;--tw-prose-links:#818cf8;--tw-prose-bold:#fff;--tw-prose-counters:#9ca3af;--tw-prose-bullets:#9ca3af;--tw-prose-quotes:#d1d5db;--tw-prose-quote-borders:#374151;--tw-prose-captions:#9ca3af;--tw-prose-code:#fff;--tw-prose-pre-code:#d1d5db;--tw-prose-pre-bg:#1f2937;--tw-prose-hr:#374151}}",y=".perspective{perspective:1000px}@keyframes scroll{0%{transform:translateY(0)}50%{transform:translateY(6px)}to{transform:translateY(0)}}.animate-scroll{animation:scroll 2s ease-in-out infinite}.bg-grid-pattern{background-image:linear-gradient(90deg,hsla(0,0%,50%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,50%,.1) 1px,transparent 0);background-size:24px 24px}.animate-fade-in{animation:fadeIn .8s ease-out forwards}@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.btn-primary{align-items:center;background-image:linear-gradient(to right,var(--tw-gradient-stops));border-radius:.5rem;display:inline-flex;justify-content:center;--tw-gradient-from:#22c55e var(--tw-gradient-from-position);--tw-gradient-to:rgba(34,197,94,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#059669 var(--tw-gradient-to-position);font-size:1rem;font-weight:500;line-height:1.5rem;padding:.75rem 1.5rem;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-primary:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.btn-primary:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(34 197 94/var(--tw-ring-opacity,1));--tw-ring-offset-width:2px}.btn-primary:focus:is(.dark *){--tw-ring-offset-color:#111827}.btn-secondary{align-items:center;border-color:#22c55e33;border-radius:.5rem;border-width:2px;display:inline-flex;font-size:1rem;font-weight:500;justify-content:center;line-height:1.5rem;padding:.75rem 1.5rem;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-secondary:hover{border-color:#22c55e66}.btn-secondary:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(34 197 94/var(--tw-ring-opacity,1));--tw-ring-offset-width:2px}.btn-secondary:focus:is(.dark *){--tw-ring-offset-color:#111827}",b=t({__name:"index",__ssrInlineRender:!0,setup(e){const t=r((()=>import("./server.mjs").then((function(e){return e.h})).then((function(e){return e.d})))),i=r((()=>import("./server.mjs").then((function(e){return e.h})).then((function(e){return e.e})))),o=r((()=>import("./server.mjs").then((function(e){return e.h})).then((function(e){return e.f})))),s=r((()=>import("./server.mjs").then((function(e){return e.h})).then((function(e){return e.g})))),{t:g}=u(),m=[g("about.features.professionalTeam"),g("about.features.qualityMaterials"),g("about.features.sustainablePractices"),g("about.features.customSolutions"),g("about.features.timelyDelivery"),g("about.features.ongoingSupport")];return(e,r,u,f)=>{r(`<main${n(f)}>`),r(l(a(i),null,null,u)),r('<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">'),r(l(a(o),null,null,u)),r(`<section id="about" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50"></div><div class="relative max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">${d(a(g)("about.title"))}</h2><p class="text-gray-600 dark:text-gray-400 mb-8">${d(a(g)("about.description"))}</p><ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">\x3c!--[--\x3e`),c(m,(e=>{r(`<li class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"><svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span class="text-gray-700 dark:text-gray-300">${d(e)}</span></li>`)})),r(`\x3c!--]--\x3e</ul></div><div class="relative group"><div class="absolute -inset-4"><div class="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 group-hover:opacity-40 transition-opacity duration-300"></div></div><div class="relative rounded-2xl overflow-hidden shadow-2xl"><img${p("src",v)}${p("alt",e.$t("about.teamImageAlt"))} class="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy"></div></div></div></div></section>`),r(l(x,null,null,u)),r(l(a(s),null,null,u)),r(l(a(t),null,null,u)),r("</div></main>")}}}),k=b.setup;b.setup=(t,r)=>{const a=e();return(a.modules||(a.modules=new Set)).add("pages/index.vue"),k?k(t,r):void 0};const $=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),_={__name:"privacy",__ssrInlineRender:!0,setup(e){const{t:r}=u(),l=[{id:"collect",title:"Information We Collect",description:"At M.V Landscaping, we collect the following types of information:",items:["Contact information (name, email address, phone number, address)","Property details relevant to landscaping services","Service preferences and requirements","Photos of your property (with your permission)"],hasBackground:!1},{id:"use",title:"How We Use Your Information",description:"We use the collected information to:",items:["Provide and improve our landscaping services","Communicate about appointments and service updates","Send quotes and invoices","Respond to your inquiries and requests","Maintain and improve our services"],hasBackground:!1},{id:"share",title:"Information Sharing",description:"We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our business, such as:",items:["Payment processing services","Communication tools","Business management software"],hasBackground:!1},{id:"security",title:"Data Security",description:"We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.",hasBackground:!1},{id:"contact",title:"Contact Information",description:"For any questions about this Privacy Policy, please contact us at:",isContact:!0,hasBackground:!0}],v=[{icon:"svg-email",text:"mvlandscaping7@gmail.com"},{icon:"svg-phone",text:"(401) 644-0452"},{icon:"svg-location",text:"Rhode Island Area"}],x={"svg-email":{name:"svg-email",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\n  </svg>'},"svg-phone":{name:"svg-phone",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\n  </svg>'},"svg-location":{name:"svg-location",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />\n  </svg>'}};for(const[e,r]of Object.entries(x))t(r);return f({title:"Privacy Policy - M.V Landscaping",meta:[{name:"description",content:"Privacy Policy for M.V Landscaping services - Learn how we collect, use, and protect your personal information."}]}),(e,t,u,x)=>{t(`<div${n(i({class:"min-h-screen bg-gray-50 dark:bg-gray-900"},x))}><div class="bg-gray-900 dark:bg-gray-800 text-white py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold mb-4 text-white">${d(a(r)("privacy.title"))}</h1><p class="text-gray-400">${d(a(r)("privacy.lastUpdated"))}: ${d((new Date).toLocaleDateString())}</p></div></div><div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8"><div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"><div class="prose prose-lg dark:prose-invert max-w-none"><div class="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4"> Table of Contents </h2><ul class="space-y-2">\x3c!--[--\x3e`),c(l,((e,r)=>{t(`<li><a${p("href",`#${e.id}`)} class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">${d(r+1)}. ${d(e.title)}</a></li>`)})),t("\x3c!--]--\x3e</ul></div>\x3c!--[--\x3e"),c(l,((e,r)=>{t(`<section${p("id",e.id)} class="mb-12 scroll-mt-24"><h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">${d(r+1)}. ${d(e.title)}</h2>`),e.description?t(`<p class="text-gray-600 dark:text-gray-300 mb-4">${d(e.description)}</p>`):t("\x3c!----\x3e"),e.content?(t(`<div class="${g({"bg-gray-50 dark:bg-gray-700 p-6 rounded-lg":e.hasBackground})}"><ul class="${g([[e.isContact?"list-none":"list-disc pl-6",{"text-gray-600 dark:text-gray-300":!e.isContact}],"space-y-2"])}">`),e.isContact?(t("\x3c!--[--\x3e"),c(v,((e,r)=>{t('<li class="flex items-center">'),m(t,o(s(e.icon),{class:"h-6 w-6 mr-3 text-gray-400 dark:text-gray-500"},null),u),t(`<span class="text-gray-600 dark:text-gray-300">${d(e.text)}</span></li>`)})),t("\x3c!--]--\x3e")):(t("\x3c!--[--\x3e"),c(e.items,((e,r)=>{t(`<li>${d(e)}</li>`)})),t("\x3c!--]--\x3e")),t("</ul></div>")):t("\x3c!----\x3e"),t("</section>")})),t("\x3c!--]--\x3e</div></div></div></div>")}}},j=_.setup;_.setup=(t,r)=>{const a=e();return(a.modules||(a.modules=new Set)).add("pages/privacy.vue"),j?j(t,r):void 0};const S=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),C={__name:"terms",__ssrInlineRender:!0,setup(e){const{t:r}=u(),l=[{id:"services",title:"Services",description:"M.V Landscaping provides professional landscaping services including but not limited to:",items:["Lawn maintenance and care","Landscape design and installation","Hardscape construction","Tree and shrub care","Seasonal clean-up","Snow removal (seasonal)"]},{id:"agreements",title:"Service Agreements",items:["All services are subject to availability and weather conditions","Service schedules may be adjusted due to inclement weather","Quotes are valid for 30 days from the date of issue","Additional services not included in the original quote will be charged separately","Emergency services may incur additional charges"]},{id:"responsibilities",title:"Customer Responsibilities",items:["Provide accurate property information and access","Mark or identify underground utilities or irrigation systems","Secure pets during service visits","Remove personal items from service areas","Promptly communicate any service concerns or special requirements"]},{id:"payment",title:"Payment Terms",items:["Payment is due upon completion of service unless otherwise agreed","Recurring services may require advance payment or deposits","Late payments may incur additional fees","Accepted payment methods will be specified on invoices"]},{id:"cancellation",title:"Cancellation Policy",items:["24-hour notice required for service cancellation","Late cancellations may incur a fee","Weather-related cancellations will be rescheduled at no additional cost"]},{id:"liability",title:"Liability",description:"M.V Landscaping maintains appropriate insurance coverage for our services. However:",items:["We are not liable for damage caused by unmarked utilities or irrigation systems","Pre-existing property conditions are not our responsibility","Force majeure events may affect service delivery"]},{id:"contact",title:"Contact Information",description:"For questions about these Terms of Service, please contact us at:",isContact:!0}],g=[{icon:"svg-email",text:"mvlandscaping7@gmail.com"},{icon:"svg-phone",text:"(401) 644-0452"},{icon:"svg-location",text:"Rhode Island Area"}],v={"svg-email":{name:"svg-email",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\n  </svg>'},"svg-phone":{name:"svg-phone",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\n  </svg>'},"svg-location":{name:"svg-location",template:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />\n  </svg>'}};for(const[e,r]of Object.entries(v))t(r);return f({title:"Terms of Service - M.V Landscaping",meta:[{name:"description",content:"Terms of Service for M.V Landscaping - Understanding our service agreements, policies, and customer responsibilities."}]}),(e,t,u,v)=>{t(`<div${n(i({class:"min-h-screen bg-gray-50 dark:bg-gray-900"},v))}><div class="bg-gray-900 dark:bg-gray-800 text-white py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold mb-4 text-white">${d(a(r)("terms.title"))}</h1><p class="text-gray-400">${d(a(r)("terms.lastUpdated"))}: ${d((new Date).toLocaleDateString())}</p></div></div><div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8"><div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"><div class="prose prose-lg dark:prose-invert max-w-none"><div class="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4"> Table of Contents </h2><ul class="space-y-2">\x3c!--[--\x3e`),c(l,((e,r)=>{t(`<li><a${p("href",`#${e.id}`)} class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">${d(r+1)}. ${d(e.title)}</a></li>`)})),t("\x3c!--]--\x3e</ul></div>\x3c!--[--\x3e"),c(l,((e,r)=>{t(`<section${p("id",e.id)} class="mb-12 scroll-mt-24"><h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">${d(r+1)}. ${d(e.title)}</h2>`),e.description?t(`<p class="text-gray-600 dark:text-gray-300 mb-4">${d(e.description)}</p>`):t("\x3c!----\x3e"),"services"===e.id?(t('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">\x3c!--[--\x3e'),c(e.items.slice(0,3),((e,r)=>{t(`<li>${d(e)}</li>`)})),t('\x3c!--]--\x3e</ul><ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">\x3c!--[--\x3e'),c(e.items.slice(3),((e,r)=>{t(`<li>${d(e)}</li>`)})),t("\x3c!--]--\x3e</ul></div>")):e.isContact?(t('<div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"><ul class="space-y-3">\x3c!--[--\x3e'),c(g,((e,r)=>{t('<li class="flex items-center">'),m(t,o(s(e.icon),{class:"h-6 w-6 mr-3 text-gray-400 dark:text-gray-500"},null),u),t(`<span class="text-gray-600 dark:text-gray-300">${d(e.text)}</span></li>`)})),t("\x3c!--]--\x3e</ul></div>")):e.items?(t('<div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"><ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">\x3c!--[--\x3e'),c(e.items,((e,r)=>{t(`<li>${d(e)}</li>`)})),t("\x3c!--]--\x3e</ul></div>")):t("\x3c!----\x3e"),t("</section>")})),t("\x3c!--]--\x3e</div></div></div></div>")}}},M=C.setup;C.setup=(t,r)=>{const a=e();return(a.modules||(a.modules=new Set)).add("pages/terms.vue"),M?M(t,r):void 0};const L=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{$ as a,L as b,w as default,y as i,S as p,h as t};globalThis.__timing__.logEnd("Load chunks/build/privacy-styles-1-B53mV2Zw.mjs");
//# sourceMappingURL=privacy-styles-1.mjs-B53mV2Zw.mjs.map
