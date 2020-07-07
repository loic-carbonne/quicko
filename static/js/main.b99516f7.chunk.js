(this["webpackJsonpquicko-webapp"]=this["webpackJsonpquicko-webapp"]||[]).push([[0],{103:function(e,t,n){e.exports=n(117)},108:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o);n(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(14),u=n(65),i=n(8),d=n(13),f=n(85),s=n(151);function m(){var e=Object(i.a)(["\n    && {\n      ","\n    }\n  "]);return m=function(){return e},e}var b=function(e){return function(t){return Object(d.a)(e)(m(),t)}};function p(){var e=Object(i.a)(["\n  text-align: center;\n  width: 100%;\n"]);return p=function(){return e},e}function v(){var e=Object(i.a)(["\n  border: 2px dashed black;\n  border-radius: 5px;\n  height: calc(100% - 23px);\n  text-align: center;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n"]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\n  width: 400px;\n  margin: 16px;\n"]);return E=function(){return e},e}var y=Object(d.a)(s.a)(E()),k=d.a.div(v()),O=d.a.p(p()),j=function(e){var t=e.loadFile,n=Object(a.useCallback)((function(e){e.forEach((function(e){var n=new FileReader;n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e,a=n.result,r=(e=a,JSON.parse(e));t(r)},n.readAsText(e)}))}),[t]),o=Object(f.a)({onDrop:n}),l=o.getRootProps,c=o.getInputProps;return r.a.createElement(y,null,r.a.createElement(k,l(),r.a.createElement("input",c()),r.a.createElement(O,null,"Drag 'n' drop your quicko file here,",r.a.createElement("br",null),"or click to upload it")))},g=n(16),h=n(15),C=n(118),x=n(155),F=n(119),T=n(156),w=n(171),P=n(157);function I(){var e=Object(i.a)(["\n  width: 100%;\n"]);return I=function(){return e},e}function A(){var e=Object(i.a)(["\n  width: 400px;\n  margin: 16px;\n"]);return A=function(){return e},e}var D={"477749ad-99f2-4aaf-bdd6-e39da2e568ae":{id:"477749ad-99f2-4aaf-bdd6-e39da2e568ae",name:"New playbook",description:"",parameters:[],tasks:[]}},S=Object(d.a)(s.a)(A()),R=Object(d.a)(C.a)(I()),_=function(e){var t=e.loadFile,n=Object(a.useState)([]),o=Object(h.a)(n,2),l=o[0],c=o[1];return r.a.createElement(S,null,r.a.createElement(x.a,{dense:!0,component:"div",role:"list"},["Angular","ReactJS","Symfony","NestJS"].map((function(e){var t="transfer-list-item-".concat(e,"-label");return r.a.createElement(F.a,{key:e,role:"listitem",button:!0,onClick:function(){return function(e){var t=l.includes(e)?Object(g.a)(l.filter((function(t){return t!==e}))):[].concat(Object(g.a)(l),[e]);c(t)}(e)}},r.a.createElement(T.a,null,r.a.createElement(w.a,{checked:-1!==l.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})),r.a.createElement(P.a,{id:t,primary:e}))})),r.a.createElement(F.a,null)),r.a.createElement(R,{variant:"contained",color:"primary",onClick:function(){return t({tasks:{},playbooks:D})}},"Create new quicko file"))},U=n(19);function L(){var e=Object(i.a)(["\n  max-width: 850px;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n"]);return L=function(){return e},e}var N=d.a.div(L()),V=Object(c.b)((function(){return{}}),(function(e){return{loadFile:function(t){return document.getElementById("page-wrapper").style.display="none",document.getElementById("editor").style.display="block",e(Object(U.g)(t))}}}))((function(e){var t=e.loadFile;return r.a.createElement(N,null,r.a.createElement(j,{loadFile:t}),r.a.createElement(_,{loadFile:t}))})),B=n(158),K=n(159),M=n(160),q=n(161),J=n(83),Y=n.n(J),W=n(82),X=n.n(W),z=n(81),H=n.n(z),Q=Object(c.b)((function(e){return{store:e}}))((function(e){var t=e.store;return r.a.createElement(F.a,{button:!0,onClick:function(){var e;!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("quicko.json",(e=t,JSON.stringify(e,null,2)))}},r.a.createElement(T.a,null,r.a.createElement(H.a,null)),r.a.createElement(P.a,{primary:"Download quicko.json"}))}));function $(){var e=Object(i.a)(["\n  margin: 16px;\n"]);return $=function(){return e},e}function G(){var e=Object(i.a)(["\n  overflow: auto;\n"]);return G=function(){return e},e}function Z(){var e=Object(i.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return Z=function(){return e},e}function ee(){var e=Object(i.a)(["\n  padding: 20px;\n  margin-bottom:10px;\n"]);return ee=function(){return e},e}function te(){var e=Object(i.a)(["\n  height: 100%;\n  width: 260px;\n  min-width: 260px;\n  overflow: auto;\n  padding: 0;\n  background-color: white;\n"]);return te=function(){return e},e}function ne(){var e=Object(i.a)(["\n  position: initial;\n"]);return ne=function(){return e},e}function ae(){var e=Object(i.a)(["\n  height: 100%;\n  overflow: auto;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return ae=function(){return e},e}var re,oe,le,ce,ue=b(x.a)(ae()),ie=b(B.a)(ne()),de=d.a.div(te()),fe=d.a.h1(ee()),se=d.a.div(Z()),me=d.a.div(G()),be=b(K.a)($()),pe=Object(c.b)((function(e){return{playbooks:Object.values(e.playbooks)}}),(function(e){return{addPlaybook:function(){return e(Object(U.e)())}}}))((function(e){var t=e.playbooks,n=e.selectedPlaybookId,o=e.setSelectedPlaybookId,l=e.addPlaybook,c=Object(a.useState)(t),u=Object(h.a)(c,2),i=u[0],d=u[1];return r.a.createElement(de,null,r.a.createElement(ue,{component:"nav"},r.a.createElement(se,null,r.a.createElement(fe,null,"Quicko"),r.a.createElement(ie,null),r.a.createElement(be,null,r.a.createElement(M.a,{onChange:function(e){d(t.filter((function(t){return t.name.toLowerCase().includes(e.target.value)})))},autoComplete:"off",placeholder:"Filter",id:"filter",startAdornment:r.a.createElement(q.a,{position:"start"},r.a.createElement(X.a,null))})),r.a.createElement(me,null,i.map((function(e){return r.a.createElement(F.a,{key:e.id,button:!0,selected:e.id===n,onClick:function(){return o(e.id)}},e.name?r.a.createElement(P.a,{primary:e.name}):r.a.createElement(P.a,{secondary:"UNNAMED"}))})))),r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement(F.a,{button:!0,onClick:l},r.a.createElement(T.a,null,r.a.createElement(Y.a,null)),r.a.createElement(P.a,{primary:"Add playbook"})),r.a.createElement(Q,null))))})),ve=n(10),Ee=n(43),ye=n(172),ke=n(168);!function(e){e.CreateFile="CREATE_FILE",e.ExecuteCommand="EXECUTE_COMMAND",e.ExecutePlaybook="EXECUTE_PLAYBOOK",e.ExecuteCodemod="EXECUTE_CODEMOD",e.TypescriptTransformationOnFile="TYPESCRIPT_TRANSFORMATION_ON_FILE"}(oe||(oe={})),function(e){e.Root="ROOT",e.UserInput="USER_INPUT",e.Value="VALUE"}(le||(le={})),function(e){e.UserInput="USER_INPUT",e.Value="VALUE"}(ce||(ce={}));var Oe="TEXT",je="FOLDER_PATH",ge="FILE_PATH",he="CODE",Ce="PLAYBOOK",xe=(re={},Object(ve.a)(re,oe.CreateFile,{key:oe.CreateFile,label:"File creation",fields:[{name:"parentFolderPath",label:"Parent folder path",type:je},{name:"fileName",label:"File name",type:Oe},{name:"fileContent",label:"File content",type:he}]}),Object(ve.a)(re,oe.ExecuteCommand,{key:oe.ExecuteCommand,label:"Command execution",fields:[{name:"command",label:"Command",type:he}]}),Object(ve.a)(re,oe.ExecuteCodemod,{key:oe.ExecuteCodemod,label:"Codemod execution",fields:[{name:"codemod",label:"Codemod",type:he}]}),Object(ve.a)(re,oe.ExecutePlaybook,{key:oe.ExecutePlaybook,label:"Playbook execution",fields:[{name:"playbookId",label:"Playbook",type:Ce}]}),Object(ve.a)(re,oe.TypescriptTransformationOnFile,{key:oe.TypescriptTransformationOnFile,label:"Typescript ts-morph transformation on file",fields:[{name:"filePath",label:"File to edit",type:ge},{name:"transformationCode",label:"Ts-morph transformation code",type:he}]}),re),Fe=n(22),Te=n(173),we=n(166),Pe=n(165),Ie=n(167),Ae=n(84),De=n.n(Ae),Se=n(66),Re=n.n(Se),_e=(n(114),n(115),n(116),function(e){var t=e.value,n=void 0===t?"":t,o=e.onChange;return r.a.createElement(a.Fragment,null,r.a.createElement(De.a,{value:n,onValueChange:function(e){return o(e)},highlight:function(e){return Re.a.highlight(e,Re.a.languages.javascript,"javascript")},padding:10,style:{backgroundColor:"rgb(250, 250, 250)",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}))}),Ue=function(e){var t=e.value,n=void 0===t?"":t,a=e.onChange;return r.a.createElement(ye.a,{autoComplete:"off",value:n,onChange:function(e){return a(e.target.value)}})},Le=n(169),Ne=n(163),Ve=function(e){return Object.values(e.playbooks)},Be=Object(c.b)((function(e){return{playbooks:Ve(e)}}))((function(e){var t=e.playbooks,n=e.value,a=void 0===n?"":n,o=e.onChange;return r.a.createElement(Le.a,{value:a,onChange:function(e){return o(e.target.value)}},t.map((function(e){return r.a.createElement(Ne.a,{key:e.id,value:e.id},e.name)})))})),Ke=n(164),Me=n(170),qe=n(175);function Je(){var e=Object(i.a)(["\n  flex-direction: row;\n"]);return Je=function(){return e},e}var Ye=b(qe.a)(Je()),We=function(e){var t=e.value,n=void 0===t?{type:null}:t,o=e.onChange,l=n.type,c=n.value,u=l===le.Value;return r.a.createElement(a.Fragment,null,r.a.createElement(Ye,{onChange:function(e,t){return o({type:t})}},r.a.createElement(Ke.a,{control:r.a.createElement(Me.a,null),label:"Root",value:le.Root}),r.a.createElement(Ke.a,{control:r.a.createElement(Me.a,null),label:"From user input",value:le.UserInput}),r.a.createElement(Ke.a,{control:r.a.createElement(Me.a,null),label:"At specific location",value:le.Value})),u&&r.a.createElement(a.Fragment,null,r.a.createElement(Ee.a,null,"File location"),r.a.createElement(ye.a,{autoComplete:"off",value:c,onChange:function(e){return o({type:le.Value,value:e.target.value})}})))};function Xe(){var e=Object(i.a)(["\n  flex-direction: row;\n"]);return Xe=function(){return e},e}var ze=b(qe.a)(Xe()),He=function(e){var t=e.value,n=void 0===t?{type:null}:t,o=e.onChange,l=n.type,c=n.value,u=l===ce.Value;return r.a.createElement(a.Fragment,null,r.a.createElement(ze,{onChange:function(e,t){return o({type:t})}},r.a.createElement(Ke.a,{control:r.a.createElement(Me.a,null),label:"From user input",value:ce.UserInput}),r.a.createElement(Ke.a,{control:r.a.createElement(Me.a,null),label:"At specific location",value:ce.Value})),u&&r.a.createElement(a.Fragment,null,r.a.createElement(Ee.a,null,"File location"),r.a.createElement(ye.a,{autoComplete:"off",value:c,onChange:function(e){return o({type:ce.Value,value:e.target.value})}})))},Qe=function(e){var t,n=e.task,o=e.field,l=e.updateTaskFields,c=o.name,u=o.type,i=o.label,d=n[c];switch(u){case he:t=_e;break;case Oe:t=Ue;break;case Ce:t=Be;break;case je:t=We;break;case ge:t=He;break;default:t=a.Fragment}return r.a.createElement(a.Fragment,null,r.a.createElement(Ee.a,null,i),r.a.createElement(t,{value:d,onChange:function(e){return l(Object(ve.a)({},c,e))}}))};function $e(){var e=Object(i.a)(["\n  position: static\n"]);return $e=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  flex-direction: column;\n"]);return Ge=function(){return e},e}var Ze=b(Pe.a)(Ge()),et=b(B.a)($e()),tt=Object(c.b)((function(e,t){var n=e.tasks[t.taskId];return{task:n,taskType:xe[n.type]}}),(function(e,t){return{updateTaskFields:function(n){return e(Object(Fe.f)(t.taskId,n))}}}))((function(e){var t=e.task,n=e.taskType,a=e.updateTaskFields,o=e.deleteTask,l=t.id;return r.a.createElement(Te.a,{defaultExpanded:!0},r.a.createElement(we.a,null,r.a.createElement(Ee.a,null,n.label)),r.a.createElement(et,null),r.a.createElement(Ze,null,n.fields.map((function(e){return r.a.createElement(Qe,{key:e.name,task:t,field:e,updateTaskFields:a})}))),r.a.createElement(et,null),r.a.createElement(Ie.a,null,r.a.createElement(C.a,{size:"small",onClick:function(){return o(l)}},"Delete")))})),nt=n(176);function at(){var e=Object(i.a)(["\n  && {\n    width: 200px;\n  }\n"]);return at=function(){return e},e}var rt=d.a.input(at()),ot=function(e){var t=e.parameters,n=void 0===t?[]:t,o=e.onChange,l=Object(a.useState)(""),c=Object(h.a)(l,2),u=c[0],i=c[1],d=Object(a.useState)(""),f=Object(h.a)(d,2),s=f[0],m=f[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.includes(u)?m("Variable already exists"):0!==u.length?(o([].concat(Object(g.a)(n),[u])),i(""),m("")):m("Variable is empty")}},n.map((function(e){return r.a.createElement(nt.a,{key:e,label:e,onDelete:function(){return function(e){var t=n.indexOf(e),a=Object(g.a)(n);a.splice(t,1),o(a)}(e)}})})),r.a.createElement(rt,{autoComplete:"off",value:u,type:"text",placeholder:"Add variable",id:"description",onChange:function(e){return i(e.target.value)}}),s)};function lt(){var e=Object(i.a)(["\n  margin: 1em;\n"]);return lt=function(){return e},e}function ct(){var e=Object(i.a)(["\n  margin: 1em;\n  display: block;\n"]);return ct=function(){return e},e}function ut(){var e=Object(i.a)(["\n  display: block;\n  flex: 1;\n  margin: 1em;\n  text-align: left;\n"]);return ut=function(){return e},e}function it(){var e=Object(i.a)(["\n  margin: auto;\n  text-align: center;\n"]);return it=function(){return e},e}function dt(){var e=Object(i.a)(["\n  display: flex;\n  height: 100%;\n  flex: auto;\n  overflow: auto;\n"]);return dt=function(){return e},e}var ft=d.a.div(dt()),st=b(Ee.a)(it()),mt=d.a.div(ut()),bt=b(ye.a)(ct()),pt=b(ke.a)(lt()),vt=Object(c.b)((function(e,t){return{playbook:e.playbooks[t.selectedPlaybookId]}}),(function(e,t){return{updatePlaybookFields:function(n){return e(Object(U.h)(t.selectedPlaybookId,n))},addTask:function(n){return e(Object(Fe.d)(t.selectedPlaybookId,n))},deleteTask:function(n){return e(Object(Fe.e)(t.selectedPlaybookId,n))},deletePlaybook:function(){return e(Object(U.f)(t.selectedPlaybookId))}}}))((function(e){var t=e.playbook,n=e.updatePlaybookFields,o=e.addTask,l=e.deleteTask,c=e.deletePlaybook;Object(a.useEffect)((function(){var e=document.getElementById("playbook-editor-panel");e&&(e.scrollTop=0)}),[t]);var u=function(e){return function(t){n(Object(ve.a)({},e,t.target.value))}};if(!t)return r.a.createElement(ft,null,r.a.createElement(st,null,"Select a playbook to edit, or create a new one."));var i=t.name,d=void 0===i?"":i,f=t.description,s=void 0===f?"":f,m=t.parameters,b=void 0===m?[]:m,p=t.tasks,v=void 0===p?[]:p;return r.a.createElement(ft,{id:"playbook-editor-panel"},r.a.createElement(mt,null,r.a.createElement(bt,{autoComplete:"off",value:d,label:"Name",id:"name",onChange:u("name")}),r.a.createElement(bt,{autoComplete:"off",value:s,label:"Description",multiline:!0,rowsMax:"4",id:"description",onChange:u("description")}),r.a.createElement(ot,{onChange:function(e){return n({parameters:e})},parameters:b}),v.map((function(e){return r.a.createElement(tt,{key:e,taskId:e,deleteTask:l})})),r.a.createElement(pt,{color:"primary",variant:"contained",fullWidth:!0},Object.values(xe).map((function(e){var t=e.key,n=e.label;return r.a.createElement(C.a,{onClick:function(){return o(t)},key:t},"Add ",n)}))),r.a.createElement(C.a,{onClick:c},"Delete playbook")))}));function Et(){var e=Object(i.a)(["\n  height: 100%;\n  display: flex;\n"]);return Et=function(){return e},e}var yt=d.a.div(Et()),kt=function(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],o=t[1];return r.a.createElement(a.Fragment,null,r.a.createElement(yt,null,r.a.createElement(pe,{selectedPlaybookId:n,setSelectedPlaybookId:o}),r.a.createElement(vt,{selectedPlaybookId:n})))},Ot=Object(c.b)((function(e){return{editorOpen:Object.keys(e.playbooks).length}}))((function(e){return e.editorOpen?r.a.createElement(kt,null):null}));l.a.render(r.a.createElement(c.a,{store:u.a},r.a.createElement(V,null)),document.getElementById("file-loader")),l.a.render(r.a.createElement(c.a,{store:u.a},r.a.createElement(Ot,null)),document.getElementById("editor")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return f}));var a=n(88),r="UPDATE_PLAYBOOK",o="DELETE_PLAYBOOK",l="ADD_PLAYBOOK",c="LOAD_FILE",u=function(e,t){return{type:r,id:e,fields:t}},i=function(){var e={id:Object(a.a)(),name:"",description:"",parameters:[],tasks:[]};return{type:l,playbook:e}},d=function(e){return{type:o,id:e}},f=function(e){var t=e.playbooks,n=e.tasks;return{type:c,playbooks:t,tasks:n}}},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i}));var a=n(88),r="UPDATE_TASK",o="ADD_TASK",l="DELETE_TASK",c=function(e,t){return{type:r,id:e,fields:t}},u=function(e,t){var n={id:Object(a.a)(),type:t};return{type:o,task:n,playbookId:e}},i=function(e,t){return{type:l,playbookId:e,id:t}}},65:function(e,t,n){"use strict";(function(e){var a=n(28),r=n(76),o=n(67),l=function(e){var t=Object(r.composeWithDevTools)(a.applyMiddleware.apply(void 0,[]));return Object(a.createStore)(o.a,e,t)}();"undefined"!==typeof e.hot&&e.hot.accept("./reducers",(function(){return l.replaceReducer(o.a)})),t.a=l}).call(this,n(73)(e))},67:function(e,t,n){"use strict";var a=n(28),r=n(16),o=n(2),l=n(57),c=n(10),u=n(33),i=n(19),d=n(22),f={},s=function(e,t,n){var a=Object(u.a)({},e[t],{},n);return Object(u.a)({},e,Object(c.a)({},t,a))},m=function(e,t){e[t];return Object(o.a)(e,[t].map(l.a))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a:return Object(u.a)({},e,Object(c.a)({},t.playbook.id,t.playbook));case i.d:var n=t.id,a=t.fields;return s(e,n,a);case d.a:var o=t.playbookId,l=e[o],b=l.tasks,p=void 0===b?[]:b,v={tasks:[].concat(Object(r.a)(p),[t.task.id])};return s(e,o,v);case i.b:return m(e,t.id);case i.c:return t.playbooks;case d.b:var E=t.id,y=t.playbookId,k=e[y],O=k.tasks.filter((function(e){return E!==e})),j={tasks:O};return s(e,y,j);default:return e}},p=function(e,t,n){var a=Object(u.a)({},e[t],{},n);return Object(u.a)({},e,Object(c.a)({},t,a))},v=function(e,t){e[t];return Object(o.a)(e,[t].map(l.a))},E={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:var n=t.id,a=t.fields;return p(e,n,a);case d.a:return Object(u.a)({},e,Object(c.a)({},t.task.id,t.task));case d.b:return v(e,t.id);case i.c:return t.tasks;default:return e}};t.a=Object(a.combineReducers)({playbooks:b,tasks:y})}},[[103,1,2]]]);
//# sourceMappingURL=main.b99516f7.chunk.js.map