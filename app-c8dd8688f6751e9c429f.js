webpackJsonp([0xd2a57dc1d883],{83:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(369),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:t(371),options:{plugins:[]}},{plugin:t(368),options:{plugins:[]}}]},216:function(e,n,t){"use strict";var o;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(340),"component---src-templates-page-template-jsx":t(347),"component---src-templates-post-template-jsx":t(348),"component---src-templates-category-template-jsx":t(346),"component---src-templates-tag-template-jsx":t(349),"component---src-pages-404-jsx":t(342),"component---src-pages-categories-jsx":t(343),"component---src-pages-index-jsx":t(344),"component---src-pages-tags-jsx":t(345)},n.json=(o={"layout-index.json":t(9),"offline-plugin-app-shell-fallback.json":t(358)},o["layout-index.json"]=t(9),o["about.json"]=t(352),o["layout-index.json"]=t(9),o["contact.json"]=t(356),o["layout-index.json"]=t(9),o["posts-what-i-wish-someone-had-said.json"]=t(362),o["layout-index.json"]=t(9),o["categories-programming.json"]=t(355),o["layout-index.json"]=t(9),o["posts-rogue-one.json"]=t(361),o["layout-index.json"]=t(9),o["tags-rant.json"]=t(365),o["layout-index.json"]=t(9),o["categories-pop-culture.json"]=t(354),o["layout-index.json"]=t(9),o["posts-eurovision-app-part-one.json"]=t(360),o["layout-index.json"]=t(9),o["tags-web-development.json"]=t(366),o["layout-index.json"]=t(9),o["posts-disney-princesses.json"]=t(359),o["layout-index.json"]=t(9),o["tags-humor.json"]=t(364),o["layout-index.json"]=t(9),o["404.json"]=t(350),o["layout-index.json"]=t(9),o["categories.json"]=t(353),o["layout-index.json"]=t(9),o["index.json"]=t(357),o["layout-index.json"]=t(9),o["tags.json"]=t(363),o["layout-index.json"]=t(9),o["404-html.json"]=t(351),o),n.layouts={"layout---index":t(341)}},217:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(8),p=o(l),f=t(147),d=o(f),m=t(60),h=o(m),g=t(83),y=t(547),x=o(y),v=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,x.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=j,e.exports=n.default},60:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(437),a=o(r),u=(0,a.default)();e.exports=u},218:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(82),a=t(148),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,i[a]=e,!0}return!1}),s}}},219:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(109),a=o(r),u=t(83),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();e.exports=c},351:function(e,n,t){t(5),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(377)})})}},350:function(e,n,t){t(5),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(378)})})}},352:function(e,n,t){t(5),e.exports=function(e){return t.e(0xf927f8900006,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(379)})})}},354:function(e,n,t){t(5),e.exports=function(e){return t.e(0xb3f14ddc227b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(380)})})}},355:function(e,n,t){t(5),e.exports=function(e){return t.e(0xd658c5b4852b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(381)})})}},353:function(e,n,t){t(5),e.exports=function(e){return t.e(30875753179511,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(382)})})}},356:function(e,n,t){t(5),e.exports=function(e){return t.e(0xa7f31e1aeaea,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(383)})})}},357:function(e,n,t){t(5),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(384)})})}},9:function(e,n,t){t(5),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(112)})})}},358:function(e,n,t){t(5),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(385)})})}},359:function(e,n,t){t(5),e.exports=function(e){return t.e(0xbde316e42683,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(386)})})}},360:function(e,n,t){t(5),e.exports=function(e){return t.e(50655900786643,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(387)})})}},361:function(e,n,t){t(5),e.exports=function(e){return t.e(24489592165617,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(388)})})}},362:function(e,n,t){t(5),e.exports=function(e){return t.e(0x5bd5d08908e8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(389)})})}},364:function(e,n,t){t(5),e.exports=function(e){return t.e(18563680977275,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(390)})})}},365:function(e,n,t){t(5),e.exports=function(e){return t.e(0x73948759831a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(391)})})}},366:function(e,n,t){t(5),e.exports=function(e){return t.e(0xe04e745676b4,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(392)})})}},363:function(e,n,t){t(5),e.exports=function(e){return t.e(55702396619907,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(393)})})}},341:function(e,n,t){t(5),e.exports=function(e){return t.e(79611799117203,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(220)})})}},147:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(218)),u=o(a),i=t(60),s=o(i),c=t(148),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],v={},j="",R=[],b={},w=function(e){return e&&e.default||e},N=void 0,C=!0,_=[],k={},P={},E=5;N=t(221)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){R=R.filter(function(n){return n!==e}),N.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){N.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){N.onPostLoadPageResources(e)});var L=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},O=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},T=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,_.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),_=_.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):P[n]?e.nextTick(function(){t(P[n])}):T(n,function(e,o){if(e)t(e);else{var r=w(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=_.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),k[e]||(k[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){x=[],v={},b={},R=[],y=[],j=""},addPagesArray:function(e){y=e,j="/the-blog",p=(0,u.default)(e,j)},addDevRequires:function(e){f=e},addProdRequires:function(e){d=e},dequeue:function(){return x.pop()},enqueue:function(e){var n=(0,l.default)(e,j);if(!y.some(function(e){return e.path===n}))return!1;var t=1/U;U+=1,v[n]?v[n]+=1:v[n]=1,M.has(n)||x.unshift(n),x.sort(O);var o=p(n);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(L),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:b}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(e){return p(e)},has:function(e){return x.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(k[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=p(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(e){return x.length-x.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(127))},394:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-what-i-wish-someone-had-said.json",path:"/posts/What-I-Wish-Someone-Had-Said/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-programming.json",path:"/categories/programming/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-rogue-one.json",path:"/posts/rogue-one/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-rant.json",path:"/tags/rant/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-pop-culture.json",path:"/categories/pop-culture/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-eurovision-app-part-one.json",path:"/posts/eurovision-app-part-one"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-web-development.json",path:"/tags/web-development/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-disney-princesses.json",path:"/posts/disney-princesses/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-humor.json",path:"/tags/humor/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},221:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(83),u=t(1),i=o(u),s=t(185),c=o(s),l=t(82),p=t(375),f=t(325),d=o(f),m=t(111),h=t(219),g=o(h),y=t(60),x=o(y),v=t(394),j=o(v),R=t(395),b=o(R),w=t(217),N=o(w),C=t(216),_=o(C),k=t(147),P=o(k);t(248),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),L=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};L(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){L(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(222);var o=function(e){function n(e){e.page.path===P.default.getPage(o).path&&(x.default.off("onPostLoadPageResources",n),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(e,null,null,g.default.location),o=t.pathname,r=E[o];if(r&&(o=r.toPath),window.location.pathname!==o){var a=setTimeout(function(){x.default.off("onPostLoadPageResources",n),x.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):x.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},395:function(e,n){e.exports=[]},222:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(60),a=o(r),u="/";u="/the-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},148:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},325:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},5:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},367:function(e,n,t){"use strict";var o=t(16);e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,r=e.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!i.test(""+a.host+a.pathname)||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},368:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(16),a=t(367),u=o(a);(0,u.default)(window,function(e){(0,r.navigateTo)(e)})},369:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},340:function(e,n,t){t(5),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(370)})})}},371:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},437:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},127:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(n){try{return p.call(null,e)}catch(n){return p.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function c(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new s(e,n)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},547:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},342:function(e,n,t){t(5),e.exports=function(e){return t.e(0xa6bc690a59e9,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(231)})})}},343:function(e,n,t){t(5),e.exports=function(e){return t.e(0x81a450a7cd7a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(232)})})}},344:function(e,n,t){t(5),e.exports=function(e){return t.e(0xc23565d713b7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(233)})})}},345:function(e,n,t){t(5),e.exports=function(e){return t.e(36530248567819,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(234)})})}},346:function(e,n,t){t(5),e.exports=function(e){return t.e(90179704293519,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(235)})})}},347:function(e,n,t){t(5),e.exports=function(e){return t.e(0xa485d5bf544,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(236)})})}},348:function(e,n,t){t(5),e.exports=function(e){return t.e(0x623bdfc73907,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(237)})})}},349:function(e,n,t){t(5),e.exports=function(e){return t.e(2638498282051,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(238)})})}}});
//# sourceMappingURL=app-c8dd8688f6751e9c429f.js.map