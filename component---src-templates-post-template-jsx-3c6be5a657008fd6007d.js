webpackJsonp([0x623bdfc73907],{457:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){var n=t.onNewComment,r=t.language,o=l(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),m=n(9),h=r(m),y=["shortname","identifier","title","url","category_id","onNewComment","language"],b=!1,g=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return y.some(function(e){return e===n})?t:f({},t,o({},n,e.props[n]))},{});return d.default.createElement("div",t,d.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!b){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),b=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};y.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(d.default.Component);g.displayName="DisqusThread",g.propTypes={id:h.default.string,shortname:h.default.string.isRequired,identifier:h.default.string,title:h.default.string,url:h.default.string,category_id:h.default.string,onNewComment:h.default.func,language:h.default.string},g.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=g},458:function(e,t,n){"use strict";e.exports=n(457)},224:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=r(s),u=n(458),f=r(u),c=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={toasts:[]},r.notifyAboutComment=r.notifyAboutComment.bind(r),r.onSnackbarDismiss=r.onSnackbarDismiss.bind(r),r}return i(t,e),t.prototype.onSnackbarDismiss=function(){var e=this.state.toasts,t=e.slice(1);this.setState({toasts:t})},t.prototype.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var r=t.frontmatter,o=n.url+t.fields.slug;return l.default.createElement(f.default,{shortname:n.disqusShortname,identifier:r.title,title:r.title,url:o,category_id:r.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.default=c,e.exports=t.default},228:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=r(s),u=n(16),f=r(u),c=n(76),p=r(c),d=n(224),m=r(d);n(450);var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,r=this.props.data.markdownRemark,o=r.fields.tagSlugs,a=l.default.createElement("div",null,l.default.createElement(f.default,{className:"post-single__home-button",to:"/"},"All Articles")),i=l.default.createElement("div",{className:"post-single__tags"},l.default.createElement("ul",{className:"post-single__tags-list"},o&&o.map(function(e,t){return l.default.createElement("li",{className:"post-single__tags-list-item",key:e},l.default.createElement(f.default,{to:e,className:"post-single__tags-list-item-link"},r.frontmatter.tags[t]))}))),s=l.default.createElement("div",null,l.default.createElement(m.default,{postNode:r,siteMetadata:this.props.data.site.siteMetadata}));return l.default.createElement("div",null,a,l.default.createElement("div",{className:"post-single"},l.default.createElement("div",{className:"post-single__inner"},l.default.createElement("h1",{className:"post-single__title"},r.frontmatter.title),l.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:r.html}}),l.default.createElement("div",{className:"post-single__date"},l.default.createElement("em",null,"Published ",(0,p.default)(r.frontmatter.date).format("D MMM YYYY")))),l.default.createElement("div",{className:"post-single__footer"},i,l.default.createElement("hr",null),l.default.createElement("p",{className:"post-single__footer-text"},t,l.default.createElement("a",{href:"http://matthaws.com",target:"_blank",rel:"noopener noreferrer"},l.default.createElement("br",null)," ",l.default.createElement("strong",null,n.name))),s)))},t}(l.default.Component);t.default=h,e.exports=t.default},450:function(e,t){},237:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(1),l=r(s),u=n(23),f=r(u),c=n(228),p=r(c),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,r=this.props.data.markdownRemark,o=r.frontmatter,a=o.title,i=o.description,s=null!==i?i:n;return l.default.createElement("div",null,l.default.createElement(f.default,null,l.default.createElement("title",null,a+" - "+t),l.default.createElement("meta",{name:"description",content:s})),l.default.createElement(p.default,this.props))},t}(l.default.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-jsx-3c6be5a657008fd6007d.js.map