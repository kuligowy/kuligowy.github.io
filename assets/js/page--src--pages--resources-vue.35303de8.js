(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+fKo":function(t,e,a){"use strict";var r={props:{cardSize:{type:String,default:"sm:w-1/2 lg:w-1/3"},record:{type:Object,default:function(){return{}}}}},n=a("KHd+"),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-4 w-full",class:t.cardSize},[a("div",{staticClass:"h-full border-2 border-gray-200 rounded-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60"},[a("div",{staticClass:"p-6"},[a("h1",{staticClass:"title-font text-2xl font-medium text-gray-900 mb-3",class:{"mb-12":!t.record.excerpt}},[t._v("\n        "+t._s(t.record.title)+"\n      ")]),t.record.excerpt?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-relaxed mb-12 text-gray-800 text-left",domProps:{innerHTML:t._s(t.record.excerpt)}}):t._e(),a("div",{staticClass:"flex items-center flex-wrap absolute bottom-0 -ml-6 p-6 w-full"},[a("div",{staticClass:"w-2/3 text-left"},[t._t("link",[a("g-link",{staticClass:"text-smalt-blue-500 hover:text-black inline-flex items-center",attrs:{to:t.record.path}},[t._v("\n              Continue reading\n              "),a("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M5 12h14"}}),a("path",{attrs:{d:"M12 5l7 7-7 7"}})])])])],2),t.record.timeToRead?a("div",{staticClass:"w-1/3 text-right pt-2"},[a("span",{staticClass:"text-gray-600 inline-flex items-center leading-none text-sm"},[a("svg",{staticClass:"w-4 h-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "+t._s(t.record.timeToRead)+" min\n          ")])]):t._e()])])])])}),[],!1,null,null,null);e.a=s.exports},F5n6:function(t,e,a){"use strict";a("ma9I"),a("qePV");var r={props:{baseUrl:{type:String,default:"/"},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},maxVisibleButtons:{type:Number,required:!1,default:5}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e+=1)t.push({name:e,isDisabled:e===this.currentPage,link:1===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e)});return t}},methods:{isFirstPage:function(t,e){return 1===t},isLastPage:function(t,e){return t===e},isCurrentPage:function(t,e){return t===e},nextPage:function(t,e){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,e){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}}},n=a("KHd+"),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"relative z-0 inline-flex shadow-sm text-sm leading-5 font-medium"},[t.isFirstPage(t.currentPage,t.totalPages)?t._e():a("g-link",{staticClass:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none",attrs:{to:t.previousPage(t.currentPage,t.totalPages),"aria-label":"Previous"}},[a("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),t._l(t.pages,(function(e){return a("g-link",{key:e.name,staticClass:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium hover:text-smalt-blue-500 focus:outline-none",class:{"bg-gray-200 text-gray-700":e.isDisabled,"text-gray-600 hover:bg-gray-100":!e.isDisabled,"rounded-l-md":t.isFirstPage(t.currentPage,t.totalPages)&&1===e.name,"rounded-r-md":t.isLastPage(t.currentPage,t.totalPages)&&e.name===t.totalPages},attrs:{to:e.link}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t.isLastPage(t.currentPage,t.totalPages)?t._e():a("g-link",{staticClass:"-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none",attrs:{to:t.nextPage(t.currentPage,t.totalPages),"aria-label":"Next"}},[a("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])],2)])}),[],!1,null,null,null);e.a=s.exports},N1Ji:function(t,e,a){"use strict";a.r(e);var r=a("Nq0A"),n=a("mg7e"),s=a("+fKo"),i=a("F5n6"),o={metaInfo:{title:"Browse Resources"},components:{PageHeader:r.a,ResourceSidebar:n.a,Pagination:i.a,RecordCard:s.a}},l=a("KHd+"),c=null,d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{scopedSlots:t._u([{key:"content",fn:function(){return[a("p",{staticClass:"text-4xl md:text-6xl"},[t._v("\n        Resources\n      ")]),a("p",{staticClass:"text-lg md:text-2xl"},[t._v("\n        Free stuff which helps you to make the world better\n      ")])]},proxy:!0}])}),a("div",{staticClass:"container px-5 py-12 mx-auto"},[a("div",{staticClass:"flex flex-wrap -m-4"},[a("div",{staticClass:"md:w-1/4 w-full px-5"},[a("ResourceSidebar",{attrs:{types:t.$page.types.edges,tags:t.$page.tags.edges}})],1),a("div",{staticClass:"md:w-3/4 w-full px-5"},[a("section",[a("div",{staticClass:"flex flex-wrap -mx-4"},t._l(t.$page.records.edges,(function(e){return a("RecordCard",{key:e.node.id,attrs:{record:e.node,"card-size":"sm:w-1/2 lg:w-1/2"},scopedSlots:t._u([{key:"link",fn:function(){return[a("g-link",{staticClass:"text-smalt-blue-500 hover:text-black inline-flex items-center",attrs:{to:e.node.link}},[t._v("\n                  Go to website\n                  "),a("svg",{staticClass:"external-link w-4 h-4",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}}),a("path",{attrs:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}})])])]},proxy:!0}],null,!0)})})),1)]),t.$page.records.pageInfo.totalPages>1?a("div",{staticClass:"mt-12 flex justify-center"},[a("Pagination",{attrs:{"base-url":"/resources","current-page":t.$page.records.pageInfo.currentPage,"total-pages":t.$page.records.pageInfo.totalPages}})],1):t._e()])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(d);e.default=d.exports},Nq0A:function(t,e,a){"use strict";var r={data:function(){return{hasSlot:!1}},computed:{hasImage:function(){return!!this.$slots.image||!!this.$scopedSlots.image}}},n=a("KHd+"),s=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"relative z-0 h-100 flex flex-wrap content-center page-header",class:{"bg-shark-700 text-white":this.hasImage,"bg-gray-200 border-b border-gray-400":!this.hasImage}},[this._t("image",[e("div",{staticClass:"bg-pattern"})]),e("div",{staticClass:"flex z-10 w-full"},[e("div",{staticClass:"container text-center mx-auto"},[e("div",[this._t("content")],2)])])],2)}),[],!1,null,null,null);e.a=s.exports},cRs8:function(t,e,a){"use strict";var r=a("wouM"),n={directives:{clickOutside:a.n(r).a.directive},data:function(){return{showOptions:!1}},methods:{onClickOutside:function(t){this.showOptions=!1}}},s=a("KHd+"),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative inline-block text-left ml-2 block lg:hidden"},[a("div",[a("span",{staticClass:"rounded-md shadow-sm"},[a("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true"},on:{click:function(e){t.showOptions=!t.showOptions}}},[t._t("title",[t._v("\n          Button Title\n        ")]),a("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],2)])]),!0===t.showOptions?a("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg z-1000"},[a("div",{staticClass:"rounded-md bg-white shadow-xs"},[a("div",{staticClass:"py-1",attrs:{role:"menu","aria-orientation":"vertical"}},[t._t("options",[a("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 1")]),a("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 2")]),a("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Option 3")])])],2)])]):t._e()])}),[],!1,null,null,null);e.a=i.exports},mg7e:function(t,e,a){"use strict";a("ma9I");var r={components:{FilterDropdown:a("cRs8").a},props:{removeFilter:{type:Boolean,default:!1},types:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}}},methods:{filterUrl:function(t,e){return"/resources/filter/".concat(t,"/").concat(e,"#content")}}},n=a("KHd+"),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md:sticky md:top-0 md:pt-5"},[a("a",{attrs:{name:"content"}}),a("div",{staticClass:"hidden md:block"},[t.removeFilter?a("div",{staticClass:"mb-4"},[a("span",{staticClass:"rounded-md shadow-sm"},[a("g-link",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150",attrs:{to:"/resources"}},[t._v("\n          Clear\n        ")])],1)]):t._e(),a("div",[a("h3",{staticClass:"border-b-4 pb-3 mb-3 border-gray-200 text-xl"},[t._v("\n        Filter by type\n      ")]),a("ul",{staticClass:"pl-0"},t._l(t.types,(function(e){return a("li",{key:e.node.id,staticClass:"py-1"},[a("g-link",{staticClass:"hover:text-smalt-blue-700",attrs:{to:t.filterUrl("type",e.node.title)}},[t._v("\n            "+t._s(e.node.title)+"\n          ")])],1)})),0)]),a("div",[a("h3",{staticClass:"border-b-4 pb-3 mt-6 border-gray-200 text-xl"},[t._v("\n        Filter by tag\n      ")]),a("ul",{staticClass:"pl-0"},t._l(t.tags,(function(e){return a("li",{key:e.node.id,staticClass:"py-1"},[a("g-link",{staticClass:"hover:text-smalt-blue-700",attrs:{to:t.filterUrl("tag",e.node.title)}},[t._v("\n            "+t._s(e.node.title)+"\n          ")])],1)})),0)])]),a("div",{staticClass:"block md:hidden text-right mb-6"},[t.removeFilter?a("div",{staticClass:"relative inline-block text-left ml-2"},[a("div",[a("span",{staticClass:"rounded-md shadow-sm"},[a("g-link",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150",attrs:{to:"/resources"}},[t._v("\n            Clear\n          ")])],1)])]):t._e(),a("FilterDropdown",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Filter by type\n      ")]},proxy:!0},{key:"options",fn:function(){return t._l(t.types,(function(e){return a("g-link",{key:e.node.id,staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{to:t.filterUrl("type",e.node.title)}},[t._v("\n          "+t._s(e.node.title)+"\n        ")])}))},proxy:!0}])}),a("FilterDropdown",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Filter by tag\n      ")]},proxy:!0},{key:"options",fn:function(){return t._l(t.tags,(function(e){return a("g-link",{key:e.node.id,staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{to:t.filterUrl("tag",e.node.title)}},[t._v("\n          "+t._s(e.node.title)+"\n        ")])}))},proxy:!0}])})],1)])}),[],!1,null,null,null);e.a=s.exports},wouM:function(t,e,a){t.exports=function(){var t="undefined"!=typeof window,e="undefined"!=typeof navigator,a=t&&("ontouchstart"in window||e&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function r(t){var e=t.event,a=t.handler;(0,t.middleware)(e)&&a(e)}function n(t,e){var n=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||a,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe)}}(e.value),s=n.handler,i=n.middleware,o=n.detectIframe;if(n.isActive){if(t["__v-click-outside"]=n.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(t){var e=t.el,a=t.event,n=t.handler,s=t.middleware,i=a.path||a.composedPath&&a.composedPath();(i?i.indexOf(e)<0:!e.contains(a.target))&&r({event:a,handler:n,middleware:s})}({el:t,event:e,handler:s,middleware:i})}}})),o){var l={event:"blur",srcTarget:window,handler:function(e){return function(t){var e=t.el,a=t.event,n=t.handler,s=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&r({event:a,handler:n,middleware:s})}),0)}({el:t,event:e,handler:s,middleware:i})}};t["__v-click-outside"]=[].concat(t["__v-click-outside"],[l])}t["__v-click-outside"].forEach((function(e){var a=e.event,r=e.srcTarget,n=e.handler;return setTimeout((function(){t["__v-click-outside"]&&r.addEventListener(a,n,!1)}),0)}))}}function s(t){(t["__v-click-outside"]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,!1)})),delete t["__v-click-outside"]}var i=t?{bind:n,update:function(t,e){var a=e.value,r=e.oldValue;JSON.stringify(a)!==JSON.stringify(r)&&(s(t),n(t,{value:a}))},unbind:s}:{};return{install:function(t){t.directive("click-outside",i)},directive:i}}()}}]);