(function(e){function t(t){for(var r,u,a=t[0],l=t[1],c=t[2],s=0,p=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-right-menu/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3d93":function(e,t,n){var r=n("fcc0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("f5f43700",r,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2909"),i=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("d3b7"),n("99af"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"menu",rawName:"v-menu",value:e.options,expression:"options"}],staticStyle:{height:"50vh","background-color":"#ccc"}},[n("p",{directives:[{name:"menu",rawName:"v-menu",value:[{type:"li",text:"这是一个p标签"}],expression:"[{ type: 'li', text: '这是一个p标签' }]"}]},[e._v("这是一个p标签")]),n("div",{directives:[{name:"menu",rawName:"v-menu",value:[{type:"li",text:"这是一个div标签"}],expression:"[{ type: 'li', text: '这是一个div标签' }]"}]},[e._v("这是一个div标签")]),n("span",[e._v("span")]),n("input",{directives:[{name:"menu",rawName:"v-menu",value:[{type:"li",text:"这是一个input输入框"}],expression:"[{ type: 'li', text: '这是一个input输入框' }]"}],attrs:{type:"text"}})])},a=[],l={data:function(){return{options:[{type:"li",text:"返回",disabled:!0},{type:"li",text:"前进",disabled:!0},{type:"li",text:"重新加载"}]}}},c=l,d=n("2877"),s=Object(d["a"])(c,u,a,!1,null,null,null),p=s.exports,f=(n("159b"),n("b64b"),function(e){return e.getBoundingClientRect().width}),h=function(e){return e.getBoundingClientRect().height},v=function(e){return e.getBoundingClientRect().bottom},m=function(e){return e.getBoundingClientRect().x},b=function(e){return e.getBoundingClientRect().y},g={menu:null,el:null},x=function(e){window.event?window.event.cancelBubble=!0:e.stopPropagation(),e.preventDefault?e.preventDefault():window.event.returnValue=!1},w=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,r){var i,o,u,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(t);case 2:i=e.sent,k(),o=E(i),g.menu=o,g.el=n,document.body.appendChild(o),u=r.clientX,a=r.clientY,window.innerWidth-u<o.offsetWidth&&(u-=o.offsetWidth),window.innerHeight-a<o.offsetHeight&&(a-=o.offsetHeight),o.style.left=u+"px",o.style.top=a+"px",window.addEventListener("blur",k),window.addEventListener("resize",k),document.addEventListener("click",y),o.addEventListener("contextmenu",x);case 18:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),y=function(e){var t,n=null===e||void 0===e||null===(t=e.path)||void 0===t?void 0:t.some((function(e){return e===g.menu}));n||k()},k=function e(){var t=document.querySelectorAll(".vue-right-menu");t&&t.forEach((function(e){e.parentNode.removeChild(e)})),g.menu&&(window.removeEventListener("blur",e),window.removeEventListener("resize",e),document.removeEventListener("click",y)),g.el=null,g.menu=null},E=function(e){var t=[];return e.forEach((function(e){switch(e.type){case"hr":t.push(_(e));break;case"li":t.push(M(e));break;case"ul":t.push(j(e));break;default:return console.error("未知的 type 类型: "+e.type)}})),O("ul",{class:"vue-right-menu"},t)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ul",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=document.createElement(e);return Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),n.forEach((function(e){"string"===typeof e?r.innerHTML=e:r.appendChild(e)})),r},_=function(e){return O("li",{class:"menu-hr"})},M=function(e){var t=O("span",{},[e.text]),n=O("li",{class:e.disabled?"menu-disabled":""},[t]);return!e.disabled&&e.callback&&n.addEventListener("mousedown",(function(t){e.callback(t,g.el),k()})),n},j=function(e){var t=O("span",{},[e.text]),n=O("li",{class:"menu-list"+(e.disabled?" menu-disabled":"")},[t]);if(!e.disabled&&e.children){var r=E(e.children);n.addEventListener("mouseover",(function(e){n.appendChild(r),r.style.position="fixed";var t=m(g.menu)+f(g.menu)-5,i=b(n);window.innerWidth-t<r.offsetWidth&&(t-=f(g.menu)+f(r)-10),window.innerHeight-i<r.offsetHeight?r.style.top=v(n)-h(r)+5+"px":r.style.top=b(n)-5+"px",r.style.left=t+"px"})),n.addEventListener("mouseout",(function(e){if(e.toElement){var t=[],i=e.toElement;while(i){if(i===r)return;t.push(i),i=i.parentNode}n.removeChild(r)}}))}return n},L=(n("cd22"),n("3d93"),"Win32"===navigator.platform||"Windows"===navigator.platform);function C(e,t,n){e.addEventListener("contextmenu",(function(r){x(r);var i=[];i="function"===typeof n?n(r,t.value):t.value,w(i,e,r)}))}n(L?"f4f1":"3d93");var R=function(e,t){e.directive("menu",{bind:function(e,n,r){return C(e,n,t)},beforeMounted:function(e,n,r){return C(e,n,t)}})};"undefined"!==typeof window&&window.Vue&&R(window.Vue);var P={install:R},S=n("9224"),z=function(e){return new Promise((function(t){return setTimeout(t,e)}))};z(),o["a"].config.productionTip=!1,o["a"].use(P,function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z(50);case 2:return e.abrupt("return",[].concat(Object(r["a"])(n),[{type:"hr"},{type:"ul",text:"关于 ".concat(S["a"]),children:[{type:"li",text:"version ".concat(S["b"]),disabled:!0},{type:"hr"},{type:"li",text:"Github 仓库",callback:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",window.open("https://github.com/buuing/vue-right-menu"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{type:"li",text:"Bug 反馈",callback:function(){return window.open("https://github.com/buuing/vue-right-menu/issues/new")}},{type:"hr"},{type:"li",text:"入门教程",disabled:!0},{type:"li",text:"高级配置",disabled:!0},{type:"hr"},{type:"li",text:"查看历史更新",disabled:!0},{type:"hr"},{type:"li",text:"📋 开源协议 License MIT",callback:function(){return window.open("https://github.com/buuing/vue-right-menu/blob/master/LICENSE")}}]}]));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),new o["a"]({render:function(e){return e(p)}}).$mount("#app")},5978:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vue-right-menu{min-width:260px;max-width:500px;color:#202124;font-size:14px;margin:0;padding:5px 0;border:.5px solid #dadce0;border-radius:0;background-color:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);letter-spacing:.5px}.vue-right-menu li{line-height:18px;padding:7px 40px;border-radius:0}.vue-right-menu li:hover{color:#202124;background-color:#e8e8e9}.vue-right-menu li.menu-hr{border-bottom:1px solid #dadce0;padding:0;margin:5px 0}.vue-right-menu li.menu-disabled{color:#ccc}.vue-right-menu li.menu-disabled:hover{color:#ccc;background-color:#fff}.vue-right-menu li.menu-list:after{color:#626365;font-size:20px;position:absolute;right:15px}",""]),e.exports=t},9224:function(e){e.exports=JSON.parse('{"a":"vue-right-menu","b":"2.0.2"}')},cd22:function(e,t,n){var r=n("fdb5");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("d4046d40",r,!0,{sourceMap:!1,shadowMode:!1})},f4f1:function(e,t,n){var r=n("5978");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("34efe4c0",r,!0,{sourceMap:!1,shadowMode:!1})},fcc0:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vue-right-menu{min-width:180px;color:#222;font-size:13px;margin:0;padding:5px 4px;border:.5px solid #cdcdcd;border-radius:5px;background-color:#eae8e9;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.vue-right-menu li{line-height:18px;padding:2.5px 8px;border-radius:3px}.vue-right-menu li:hover{color:#fff;background-color:#68a1f9}.vue-right-menu li.menu-hr{border-bottom:1px solid #d0cecf;padding:0;margin:5px 8px}.vue-right-menu li.menu-disabled{color:#a8a8a8}.vue-right-menu li.menu-disabled:hover{color:#a8a8a8;background-color:#eae8e9}",""]),e.exports=t},fdb5:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'.vue-right-menu{width:auto;min-width:0;max-width:300px;z-index:9999999;position:fixed;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-right-menu li{display:block;list-style:none;cursor:default;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vue-right-menu li.menu-hr{height:0;border-bottom:1px solid #ccc}.vue-right-menu li.menu-hr:hover{background-color:transparent!important}.vue-right-menu li.menu-list:after{content:"▸";font-weight:600;float:right;margin-left:10px;margin-right:-8px;width:15px;height:15px}',""]),e.exports=t}});
//# sourceMappingURL=app.c5be578d.js.map