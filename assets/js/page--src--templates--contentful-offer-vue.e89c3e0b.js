(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NHAs:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n("ma9I"),n("rB9j"),n("UxlC");var r=n("rePB"),a=n("vbKG"),i=n("/Yn+"),s=function(t){return Object(i.documentToHtmlString)(t,{renderNode:Object(r.a)({},a.BLOCKS.EMBEDDED_ASSET,(function(t){return'<img src="'.concat(t.data.target.fields.file.url,'" alt="').concat(t.data.target.fields.title,'" />')}))})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.src,n=void 0===e?"":e,r=t.fit,a=void 0===r?"":r,i=t.w,s=void 0===i?100:i,o=t.h,l=void 0===o?100:o;return"".concat(n.replace(/downloads./g,"images."),"?fit=").concat(a,"&w=").concat(s,"&h=").concat(l,"&fm=webp")},l=function(t){return t.heroImage?t.heroImage.file:t.media.length>0?t.media[0].file:null}},Nq0A:function(t,e,n){"use strict";var r={props:{border:{type:String,default:"true"}},data:function(){return{hasSlot:!1}},computed:{useBorder:function(){return"true"===this.border},hasImage:function(){return!!this.$slots.image||!!this.$scopedSlots.image}}},a=n("KHd+"),i=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"relative z-0 h-96 flex flex-wrap content-center page-header justify-center",class:{"bg-shark-700 text-white":this.hasImage,"bg-gray-200 border-b border-gray-400":!this.hasImage}},[this._t("image",[e("div",{staticClass:"bg-pattern"})]),e("div",{staticClass:"flex z-10 w-1/2"},[e("div",{staticClass:"container text-center mx-auto text-shark-100",class:{"border-2 py-8":this.useBorder}},[e("div",[this._t("content")],2)])])],2)}),[],!1,null,null,null);e.a=i.exports},PyGo:function(t,e,n){"use strict";n("TeQF"),n("yq1k");var r={components:{FilterDropdown:n("cRs8").a},props:{record:{type:Object,default:function(){return{}}}},computed:{subtitles:function(){console.log(this.record.tags);var t=(this.record.headings||[]).filter((function(t,e,n){return[2,3].includes(t.depth)}));return t}}},a=n("KHd+"),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:sticky top-0 pt-5 -mt-5"},[t.subtitles.length>0?n("div",{staticClass:"toc hidden lg:block"},[n("h3",{staticClass:"border-b-4 pb-3 mb-3 border-gray-200 text-xl"},[t._v("\n      On this page\n    ")]),n("ul",{staticClass:"pl-0"},t._l(t.subtitles,(function(e){return n("li",{key:e.value,staticClass:"py-1",class:{"ml-4":3==e.depth}},[n("a",{staticClass:"hover:text-smalt-blue-700",class:{"text-shark-400":3==e.depth},attrs:{href:e.anchor}},[t._v(t._s(e.value))])])})),0)]):t._e(),t.record.tags&&t.record.tags.length>0?n("div",{staticClass:"tags d-lg-block d-none hidden lg:block",class:[t.subtitles.length>0?"mt-4":""]},[n("h3",{staticClass:"border-b-4 pb-3 mb-3 border-gray-200 text-xl"},[t._v("\n      Tags\n    ")]),n("div",{staticClass:"tags-items break-words"},t._l(t.record.tags,(function(e){return n("span",{key:e.id,staticClass:"mr-2 my-4 hover:bg-gray-200 p-1 rounded",attrs:{to:e.path}},[t._v("\n          #"+t._s(e.title)+"\n          ")])})),0)]):t._e(),t.subtitles.length>0||t.record.tags&&t.record.tags.length>0?n("div",{staticClass:"text-right mb-12"},[t.subtitles.length>0?n("FilterDropdown",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        On this site\n      ")]},proxy:!0},{key:"options",fn:function(){return[n("ul",{staticClass:"p-4"},t._l(t.subtitles,(function(e){return n("li",{key:e.value,staticClass:"py-1",class:{"ml-4":3==e.depth}},[n("a",{staticClass:"hover:text-smalt-blue-700",class:{"text-shark-400":3==e.depth},attrs:{href:e.anchor}},[t._v(t._s(e.value))])])})),0)]},proxy:!0}],null,!1,2126255520)}):t._e(),t.record.tags&&t.record.tags.length>0?n("FilterDropdown",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Tags\n      ")]},proxy:!0},{key:"options",fn:function(){return t._l(t.record.tags,(function(e){return n("span",{key:e.id,staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{to:e.path}},[t._v("\n          "+t._s(e.title)+"\n          ")])}))},proxy:!0}],null,!1,3754105536)}):t._e()],1):t._e()])}),[],!1,null,null,null);e.a=i.exports},TeQF:function(t,e,n){"use strict";var r=n("I+eb"),a=n("tycR").filter,i=n("Hd5f"),s=n("rkAj"),o=i("filter"),l=s("filter");r({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ZtMw:function(t,e,n){"use strict";n.r(e);var r=n("NHAs"),a=n("Nq0A"),i=n("PyGo"),s={components:{PageHeader:a.a,PageSidebar:i.a},methods:{renderHtmlMethod:function(t){return Object(r.b)(t)}},metaInfo:function(){return{title:this.$page.entry.title}}},o=n("KHd+"),l=null,c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("PageHeader",{scopedSlots:t._u([{key:"content",fn:function(){return[n("h1",{staticClass:"text-4xl lg:text-6xl"},[t._v("\n        "+t._s(t.$page.entry.title)+"\n      ")])]},proxy:!0}])}),n("div",{staticClass:"container text-left mx-auto"},[n("div",{staticClass:"flex flex-wrap lg:flex-row-reverse py-12"},[n("div",{staticClass:"w-full lg:w-1/4 px-5"},[n("PageSidebar",{attrs:{record:t.$page.entry}})],1),n("div",{staticClass:"w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none"},[n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.renderHtmlMethod(t.$page.entry.details))}})])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},cRs8:function(t,e,n){"use strict";var r=n("wouM"),a={directives:{clickOutside:n.n(r).a.directive},data:function(){return{showOptions:!1}},methods:{onClickOutside:function(t){this.showOptions=!1}}},i=n("KHd+"),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative inline-block text-left ml-2 block lg:hidden"},[n("div",[n("span",{staticClass:"rounded-md shadow-sm"},[n("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true"},on:{click:function(e){t.showOptions=!t.showOptions}}},[t._t("title",[t._v("\n          Button Title\n        ")]),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],2)])]),!0===t.showOptions?n("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg z-1000"},[n("div",{staticClass:"rounded-md bg-white shadow-xs"},[n("div",{staticClass:"py-1",attrs:{role:"menu","aria-orientation":"vertical"}},[t._t("options",[n("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 1")]),n("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 2")]),n("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 3")])])],2)])]):t._e()])}),[],!1,null,null,null);e.a=s.exports},wouM:function(t,e,n){t.exports=function(){var t="undefined"!=typeof window,e="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||e&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function r(t){var e=t.event,n=t.handler;(0,t.middleware)(e)&&n(e)}function a(t,e){var a=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||n,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe)}}(e.value),i=a.handler,s=a.middleware,o=a.detectIframe;if(a.isActive){if(t["__v-click-outside"]=a.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(t){var e=t.el,n=t.event,a=t.handler,i=t.middleware,s=n.path||n.composedPath&&n.composedPath();(s?s.indexOf(e)<0:!e.contains(n.target))&&r({event:n,handler:a,middleware:i})}({el:t,event:e,handler:i,middleware:s})}}})),o){var l={event:"blur",srcTarget:window,handler:function(e){return function(t){var e=t.el,n=t.event,a=t.handler,i=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&r({event:n,handler:a,middleware:i})}),0)}({el:t,event:e,handler:i,middleware:s})}};t["__v-click-outside"]=[].concat(t["__v-click-outside"],[l])}t["__v-click-outside"].forEach((function(e){var n=e.event,r=e.srcTarget,a=e.handler;return setTimeout((function(){t["__v-click-outside"]&&r.addEventListener(n,a,!1)}),0)}))}}function i(t){(t["__v-click-outside"]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,!1)})),delete t["__v-click-outside"]}var s=t?{bind:a,update:function(t,e){var n=e.value,r=e.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(i(t),a(t,{value:n}))},unbind:i}:{};return{install:function(t){t.directive("click-outside",s)},directive:s}}()},yq1k:function(t,e,n){"use strict";var r=n("I+eb"),a=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);