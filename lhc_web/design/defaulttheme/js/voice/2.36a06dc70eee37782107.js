(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),i=a(1),r=a.n(i),l=a(0),u=a.n(l),o=a(28),s=a.n(o),d=a(48);var m=function(e,t){var a=Object(l.useRef)();Object(l.useEffect)((function(){a.current=e}),[e]),Object(l.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t){switch(t.type){case"attr":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=h({},e.chats[n],{},t.value),e=h({},e));case"attr_remove":return-1===(n=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[n]=h({},e.chats[n],{},t.value),e=h({},e));case"update":return h({},e,{},t.value);case"add":return-1===(n=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),h({},e);case"remove":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(n,1),h({},e));case"update_chat":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=h({},e.chats[n],{},t.value),h({},e));case"msg_received":if(-1===(n=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[n].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[n].active=!0:e.chats[n].active=!1,e.chats[n].mn=0==e.chats[n].active?e.chats[n].mn?e.chats[n].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(n,1)[0]),h({},e);case"refocus":var n;if(-1!==(n=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[n].id)return e;e.chats[n].active=!1}return-1!==(n=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),h({},e);case"group_offline":return e.group_offline=t.value,h({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(l.useReducer)(v,{chats:[],call:{},inCall:!1}),a=c()(t,2),n=a[0],i=a[1],r=Object(l.useRef)(n);Object(l.useEffect)((function(){r.current=n}),[n]);Object(l.useEffect)((function(){return s.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash).then((function(e){i({type:"update",value:{call:e.data}})})),function(){}}),[]);var o=Object(d.a)("voice_call"),f=o.t;o.i18n;m((function(){s.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash).then((function(e){i({type:"update",value:{call:e.data}})}))}),1==n.call.vi_status?2e3:null);return u.a.createElement(u.a.Fragment,null,1==n.call.vi_status&&u.a.createElement("div",{className:"mx-auto pt-4"},u.a.createElement("p",null,"Please wait untill operator let's you join a room"),u.a.createElement("div",{className:"mx-auto"},u.a.createElement("button",{className:"btn btn-primary w-100",onClick:function(){s.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/cancel").then((function(e){i({type:"update",value:{call:e.data}})}))}},f("voice_call.cancel_join")))),0==n.call.vi_status&&u.a.createElement("div",{className:"mx-auto pt-4"},u.a.createElement("div",{className:"form-group"},u.a.createElement("h5",null,"Choose call type"),u.a.createElement("input",{type:"radio",className:"form-check-input",defaultChecked:!0,value:"audio",name:"callType",id:"inlineFormCheck1"}),u.a.createElement("label",{className:"form-check-label",htmlFor:"inlineFormCheck1"},"Audio & Video call"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",className:"form-check-input",value:"audio",name:"callType",id:"inlineFormCheck2"}),u.a.createElement("label",{className:"form-check-label",htmlFor:"inlineFormCheck2"},"Only Audio call")),u.a.createElement("div",{className:"mx-auto"},u.a.createElement("button",{onClick:function(){s.a.post(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/request",{type:document.getElementById("inlineFormCheck1").checked?"audiovideo":"audio"}).then((function(e){i({type:"update",value:{call:e.data}})}))},className:"btn btn-primary w-100"},f("voice_call.join_call")))))}}}]);
//# sourceMappingURL=2.36a06dc70eee37782107.js.map