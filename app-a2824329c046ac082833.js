webpackJsonp([0xd2a57dc1d883],{83:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(373),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:t(375),options:{plugins:[]}},{plugin:t(372),options:{plugins:[]}}]},216:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(340),"component---src-templates-page-template-jsx":t(347),"component---src-templates-post-template-jsx":t(348),"component---src-templates-category-template-jsx":t(346),"component---src-templates-tag-template-jsx":t(349),"component---src-pages-404-jsx":t(342),"component---src-pages-categories-jsx":t(343),"component---src-pages-index-jsx":t(344),"component---src-pages-tags-jsx":t(345)},e.json=(o={"layout-index.json":t(7),"offline-plugin-app-shell-fallback.json":t(358)},o["layout-index.json"]=t(7),o["about.json"]=t(352),o["layout-index.json"]=t(7),o["contact.json"]=t(356),o["layout-index.json"]=t(7),o["posts-what-i-wish-someone-had-said.json"]=t(365),o["layout-index.json"]=t(7),o["categories-programming.json"]=t(355),o["layout-index.json"]=t(7),o["posts-rogue-one.json"]=t(364),o["layout-index.json"]=t(7),o["tags-rant.json"]=t(368),o["layout-index.json"]=t(7),o["categories-pop-culture.json"]=t(354),o["layout-index.json"]=t(7),o["posts-eurovision-app-part-one.json"]=t(361),o["layout-index.json"]=t(7),o["tags-web-development.json"]=t(370),o["layout-index.json"]=t(7),o["posts-disney-princesses.json"]=t(360),o["layout-index.json"]=t(7),o["tags-humor.json"]=t(367),o["layout-index.json"]=t(7),o["posts-last-jedi.json"]=t(363),o["layout-index.json"]=t(7),o["posts-eurovision-app-part-two.json"]=t(362),o["layout-index.json"]=t(7),o["posts-altered-carbon.json"]=t(359),o["layout-index.json"]=t(7),o["tags-sci-fi-tv.json"]=t(369),o["layout-index.json"]=t(7),o["404.json"]=t(350),o["layout-index.json"]=t(7),o["categories.json"]=t(353),o["layout-index.json"]=t(7),o["index.json"]=t(357),o["layout-index.json"]=t(7),o["tags.json"]=t(366),o["layout-index.json"]=t(7),o["404-html.json"]=t(351),o),e.layouts={"layout---index":t(341)}},217:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(9),p=o(l),f=t(147),d=o(f),m=t(60),h=o(m),g=t(83),y=t(555),x=o(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},60:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(445),a=o(r),u=(0,a.default)();n.exports=u},218:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(82),a=t(148),u=o(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},219:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(109),a=o(r),u=t(83),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},351:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(381)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(382)})})}},352:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(383)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb3f14ddc227b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(384)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd658c5b4852b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(385)})})}},353:function(n,e,t){t(3),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(386)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(387)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},7:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(112)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(59897475693264,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbde316e42683,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(50655900786643,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbc9a0d07adb5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(7731417331911,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(24489592165617,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(0x5bd5d08908e8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(18563680977275,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},368:function(n,e,t){t(3),n.exports=function(n){return t.e(0x73948759831a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(0x5b4aa4a166d7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe04e745676b4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},341:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(220)})})}},147:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(218)),u=o(a),s=t(60),i=o(s),c=t(148),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],j={},v="",R=[],b={},w=function(n){return n&&n.default||n},N=void 0,C=!0,k=[],_={},P={},E=5;N=t(221)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){R=R.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var L=function(n,e){return b[n]>b[e]?1:b[n]<b[e]?-1:0},O=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=w(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){x=[],j={},b={},R=[],y=[],v=""},addPagesArray:function(n){y=n,v="/the-blog",p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||x.unshift(e),x.sort(O);var o=p(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(L),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:b}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(127))},402:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-what-i-wish-someone-had-said.json",path:"/posts/What-I-Wish-Someone-Had-Said/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-programming.json",path:"/categories/programming/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-rogue-one.json",path:"/posts/rogue-one/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-rant.json",path:"/tags/rant/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-pop-culture.json",path:"/categories/pop-culture/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-eurovision-app-part-one.json",path:"/posts/eurovision-app-part-one"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-web-development.json",path:"/tags/web-development/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-disney-princesses.json",path:"/posts/disney-princesses/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-humor.json",path:"/tags/humor/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-last-jedi.json",path:"/posts/last-jedi/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-eurovision-app-part-two.json",path:"/posts/eurovision-app-part-two"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-altered-carbon.json",path:"/posts/altered-carbon/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-sci-fi-tv.json",path:"/tags/sci-fi-tv/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},221:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(83),u=t(1),s=o(u),i=t(185),c=o(i),l=t(82),p=t(379),f=t(325),d=o(f),m=t(111),h=t(219),g=o(h),y=t(60),x=o(y),j=t(402),v=o(j),R=t(403),b=o(R),w=t(217),N=o(w),C=t(216),k=o(C),_=t(147),P=o(_);t(248),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};L(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(222);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,r=E[o];if(r&&(o=r.toPath),window.location.pathname!==o){var a=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},403:function(n,e){n.exports=[]},222:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(60),a=o(r),u="/";u="/the-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},148:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},325:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},371:function(n,e,t){"use strict";var o=t(16);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+a.host+a.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},372:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(16),a=t(371),u=o(a);(0,u.default)(window,function(n){(0,r.navigateTo)(n)})},373:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},340:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(374)})})}},375:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},445:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},127:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},555:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},342:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(231)})})}},343:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}},344:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},345:function(n,e,t){t(3),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(234)})})}},346:function(n,e,t){t(3),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},347:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},348:function(n,e,t){t(3),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}}});
//# sourceMappingURL=app-a2824329c046ac082833.js.map