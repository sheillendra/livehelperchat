(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a.n(c),r=a(1),i=a.n(r),s=a(0),u=a.n(s),l=(a(28),a(48));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){switch(t.type){case"attr":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=d({},e.chats[c],{},t.value),e=d({},e));case"attr_remove":return-1===(c=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[c]=d({},e.chats[c],{},t.value),e=d({},e));case"update":return d({},e,{},t.value);case"add":return-1===(c=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1),d({},e);case"remove":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(c,1),d({},e));case"update_chat":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=d({},e.chats[c],{},t.value),d({},e));case"msg_received":if(-1===(c=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[c].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[c].active=!0:e.chats[c].active=!1,e.chats[c].mn=0==e.chats[c].active?e.chats[c].mn?e.chats[c].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(c,1)[0]),d({},e);case"refocus":var c;if(-1!==(c=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[c].id)return e;e.chats[c].active=!1}return-1!==(c=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1),d({},e);case"group_offline":return e.group_offline=t.value,d({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(s.useReducer)(f,{chats:[],id:null,hash:null}),a=n()(t,2),c=a[0],r=(a[1],Object(s.useRef)(c));Object(s.useEffect)((function(){r.current=c}),[c]),Object(s.useEffect)((function(){return console.log(e.initParams),function(){}}),[]);var i=Object(l.a)("voice_call"),o=i.t;i.i18n;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mx-auto"},u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"d-block"},u.a.createElement("input",{type:"radio",defaultChecked:!0,value:"audio",name:"callType"}),"Audio & Video call")),u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"d-block"},u.a.createElement("input",{type:"radio",value:"audiovideo",name:"callType"}),"Only Audio call"))),u.a.createElement("button",{className:"btn btn-primary"},o("voice_call.join_call"))))}}}]);
//# sourceMappingURL=2.bccd93c2c071d14a81c4.js.map