(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"10i6":function(e,t,n){"use strict";n("NGB6")},AwY4:function(e,t,n){"use strict";n("w70t")},BNZ3:function(e,t,n){"use strict";n.r(t);var i=n("NHAs"),r=n("uBA0"),s=n("Nq0A"),a={metaInfo:function(){return{title:this.$page.gallery.title}},created:function(){this.$root.$on("modal-close",this.hideModal)},components:{PictureModal:r.a,PageHeader:s.a},methods:{renderHtmlMethod:function(e){return Object(i.b)(e)},renderThumbnail:function(e){return Object(i.c)({src:e,fit:"fill",w:300,h:300})},openPicture:function(e){this.currentIndex=e,this.showModal()},showModal:function(){this.modalIsOpen=!0},hideModal:function(){this.modalIsOpen=!1}},data:function(){return{currentIndex:0,modalIsOpen:!1}}},o=(n("AwY4"),n("KHd+")),c=null,u=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("PageHeader",{scopedSlots:e._u([{key:"image",fn:function(){},proxy:!0},{key:"content",fn:function(){return[n("p",{staticClass:"text-4xl md:text-6xl uppercase"},[e._v(e._s(e.$page.gallery.title))]),n("p",{staticClass:"text-lg md:text-2xl"},[e._v(e._s(e.$page.gallery.simpleDescription))])]},proxy:!0}])}),n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex flex-wrap justify-content py-12"},[e._l(e.$page.gallery.photos,(function(t,i){return n("g-image",{key:i,staticClass:"m-1 cursor-pointer",attrs:{src:e.renderThumbnail(t.file.url),alt:t.title},on:{click:function(t){return e.openPicture(i)}}})})),n("transition",{attrs:{name:"fade"}},[e.modalIsOpen?n("PictureModal",{attrs:{pictures:e.$page.gallery.photos,index:e.currentIndex},on:{close:e.hideModal}}):e._e()],1)],2)])],1)}),[],!1,null,"8618de62",null);"function"==typeof c&&c(u);t.default=u.exports},NGB6:function(e,t,n){},NHAs:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));n("ma9I"),n("rB9j"),n("UxlC");var i=n("rePB"),r=n("vbKG"),s=n("/Yn+"),a=function(e){return Object(s.documentToHtmlString)(e,{renderNode:Object(i.a)({},r.BLOCKS.EMBEDDED_ASSET,(function(e){return'<img src="'.concat(e.data.target.fields.file.url,'" alt="').concat(e.data.target.fields.title,'" />')}))})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.src,n=void 0===t?"":t,i=e.fit,r=void 0===i?"":i,s=e.w,a=void 0===s?100:s,o=e.h,c=void 0===o?100:o;return"".concat(n.replace(/downloads./g,"images."),"?fit=").concat(r,"&w=").concat(a,"&h=").concat(c,"&fm=webp")},c=function(e){return e.heroImage?e.heroImage.file:e.media.length>0?e.media[0].file:null}},NmYn:function(e,t,n){var i;i=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function n(n,i){if("string"!=typeof n)throw new Error("slugify: string argument expected");var r=t[(i="string"==typeof i?{replacement:i}:i||{}).locale]||{},s=void 0===i.replacement?"-":i.replacement,a=n.split("").reduce((function(t,n){return t+(r[n]||e[n]||n).replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+s+"]+","g"),s);return i.lower&&(a=a.toLowerCase()),i.strict&&(a=a.replace(new RegExp("[^a-zA-Z0-9"+s+"]","g"),"").replace(new RegExp("[\\s"+s+"]+","g"),s)),a}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=i(),e.exports.default=i()},Nq0A:function(e,t,n){"use strict";var i={props:{border:{type:String,default:"true"}},data:function(){return{hasSlot:!1}},computed:{useBorder:function(){return"true"===this.border},hasImage:function(){return!!this.$slots.image||!!this.$scopedSlots.image}}},r=n("KHd+"),s=Object(r.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"relative z-0 h-96 flex flex-wrap content-center page-header justify-center",class:{"bg-shark-700 text-white":this.hasImage,"bg-gray-200 border-b border-gray-400":!this.hasImage}},[this._t("image",[t("div",{staticClass:"bg-pattern"})]),t("div",{staticClass:"flex z-10 w-1/2"},[t("div",{staticClass:"container text-center mx-auto text-shark-100",class:{"border-2 py-8":this.useBorder}},[t("div",[this._t("content")],2)])])],2)}),[],!1,null,null,null);t.a=s.exports},W4PI:function(e,t,n){"use strict";n("e0jO")},e0jO:function(e,t,n){},uBA0:function(e,t,n){"use strict";n("qePV");var i=n("NmYn"),r=n.n(i),s=n("NHAs"),a=n("KHd+"),o={components:{Loader:Object(a.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loader"},[this._v("Loading…")])}),[],!1,null,null,null).exports},props:{picture:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},methods:{renderpicture:function(e){return Object(s.c)({src:e,w:1200,h:1200})}}},c=(n("10i6"),{components:{PictureContainer:Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"picture-container"},[e.isLoading?n("Loader"):e._e(),e.isLoading?e._e():n("g-image",{staticClass:"picture",attrs:{src:e.renderpicture(e.picture.file.url),alt:e.picture.title}}),n("div",{staticClass:"picture-properties"},[n("h2",[e._v("\n      "+e._s(e.picture.title)+"\n    ")]),e.picture.description?n("div",{staticClass:"picture-description"},[e._v("\n      "+e._s(e.picture.description)+"\n    ")]):e._e()])],1)}),[],!1,null,"e84ab440",null).exports},props:{pictures:{type:Array,required:!0},index:{type:Number,default:0}},data:function(){return{currentIndex:0,isLoading:!1}},created:function(){this.currentIndex=this.index},mounted:function(){window&&window.addEventListener("keyup",this.onKeyUp)},beforeDestroy:function(){window&&window.removeEventListener("keyup",this.onKeyUp)},methods:{track:function(){this.$ga.page("/images/".concat(r()(this.pictures[currentIndex].title)))},onKeyUp:function(e){39===e.which&&this.next(),37===e.which&&this.previous(),27===e.which&&this.close()},previous:function(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.pictures.length-1)},next:function(){this.currentIndex++,this.currentIndex>this.pictures.length-1&&(this.currentIndex=0)},close:function(){this.$emit("close")}},watch:{currentIndex:function(){var e=this;this.isLoading=!0;var t=new Image;t.onload=function(){e.isLoading=!1},t.src=this.pictures[this.currentIndex].file.url}}}),u=(n("W4PI"),Object(a.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{name:"modal"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.previous(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&2!==t.button?null:e.next(t)}]}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"closer",on:{click:function(t){return t.preventDefault(),e.close(t)}}}),n("div",{staticClass:"view"},[n("button",{staticClass:"btn close",on:{click:e.close}},[e._v("☓")]),n("div",{staticClass:"controls"},[n("button",{staticClass:"btn previous",on:{click:e.previous}},[e._v("←")]),n("button",{staticClass:"btn next",on:{click:e.next}},[e._v("→")])]),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("PictureContainer",{key:e.currentIndex,attrs:{picture:e.pictures[e.currentIndex],"is-loading":e.isLoading}})],1)],1)])])}),[],!1,null,"2cd45564",null));t.a=u.exports},w70t:function(e,t,n){}}]);