function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{Sd9a:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),r=n("3Pt+"),l=n("TEn/"),o=n("tyNb"),i=n("mrSG"),s=n("p+Vk"),d=n("IYK9"),c=n("LWQN"),m=n("AytR"),u=n("fXoL");function p(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-text",6),u["\u0275\u0275elementStart"](1,"h3"),u["\u0275\u0275text"](2,"\u6682\u65e0\u8003\u52a1\u5b89\u6392"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ion-col",8),u["\u0275\u0275elementStart"](1,"div"),u["\u0275\u0275elementStart"](2,"div",9),u["\u0275\u0275elementStart"](3,"label"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"div",10),u["\u0275\u0275elementStart"](6,"label",11),u["\u0275\u0275text"](7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](8,"\u5206 "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]().$implicit;u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate1"]("",n.subject2,"\uff1a"),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate"](n.score2)}}function v(e,t){1&e&&u["\u0275\u0275element"](0,"ion-col",8)}function h(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ion-row",7),u["\u0275\u0275elementStart"](1,"ion-col",8),u["\u0275\u0275elementStart"](2,"div"),u["\u0275\u0275elementStart"](3,"div",9),u["\u0275\u0275elementStart"](4,"label"),u["\u0275\u0275text"](5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"div",10),u["\u0275\u0275elementStart"](7,"label",11),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](9,"\u5206 "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](10,f,9,2,"ion-col",13),u["\u0275\u0275template"](11,v,1,0,"ion-col",13),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",n.subject1,"\uff1a"),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate"](n.score1),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",null!=n.subject2),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.subject2)}}function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ion-grid"),u["\u0275\u0275elementStart"](1,"ion-row",7),u["\u0275\u0275elementStart"](2,"ion-col",8),u["\u0275\u0275elementStart"](3,"div"),u["\u0275\u0275elementStart"](4,"div",9),u["\u0275\u0275elementStart"](5,"label"),u["\u0275\u0275text"](6,"\u603b\u5206\uff1a"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",10),u["\u0275\u0275elementStart"](8,"label",11),u["\u0275\u0275text"](9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](10,"\u5206 "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](11,"ion-col",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](12,h,12,4,"ion-row",12),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](9),u["\u0275\u0275textInterpolate"](n.student.totalScore),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngForOf",n.scores)}}var E,I,x=[{path:"",component:(E=function(){function e(t,n,a){_classCallCheck(this,e),this.activeRouter=t,this.esr=n,this.comm=a,this.student=new s.c,this.scores=new Array(0)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activeRouter.params.subscribe((function(t){e.load(t.studentId,t.studentNo,t.examId)}))}},{key:"load",value:function(e,t,n){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var r,l,o,i,d,c,u,p,f,v;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.comm.loadingPresent();case 2:return r=a.sent,a.next=5,this.esr.getExamStudent(n,e,t);case 5:for(l=a.sent,this.student=Array.isArray(l)?l[0]:l,this.student&&(""!=this.student.avatar&&null!=this.student.avatar||(this.student.avatar=m.a.default_avatar)),o=0;o<this.student.scoreList.length;o++)i=this.student.scoreList[o],d=i.name,""!=i.paper&&(d+="("+i.paper+")"),c=i.score,u=null,p=null,o+1<this.student.scoreList.length&&(o++,f=this.student.scoreList[o],u=f.name,""!=f.paper&&(u+="("+f.paper+")"),p=f.score),(v=new s.d).subject1=d,v.score1=c,v.subject2=u,v.score2=p,this.scores.push(v);r.dismiss();case 9:case"end":return a.stop()}}),a,this)})))}}]),e}(),E.\u0275fac=function(e){return new(e||E)(u["\u0275\u0275directiveInject"](o.a),u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](c.a))},E.\u0275cmp=u["\u0275\u0275defineComponent"]({type:E,selectors:[["app-exam-student-detail"]],decls:29,vars:8,consts:[["slot","start"],["defaultHref","tabs"],[3,"src"],[2,"white-space","normal"],["class","text-center","color","medium",4,"ngIf"],[4,"ngIf"],["color","medium",1,"text-center"],[1,"ion-justify-content-around"],["size","5"],[2,"float","left"],[2,"float","right"],[2,"color","red"],["class","ion-justify-content-around",4,"ngFor","ngForOf"],["size","5",4,"ngIf"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-header"),u["\u0275\u0275elementStart"](1,"ion-toolbar"),u["\u0275\u0275elementStart"](2,"ion-buttons",0),u["\u0275\u0275element"](3,"ion-back-button",1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"ion-title"),u["\u0275\u0275text"](5,"\u5b66\u751f\u8003\u8bd5\u8be6\u60c5"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"ion-content"),u["\u0275\u0275elementStart"](7,"ion-item-divider"),u["\u0275\u0275elementStart"](8,"h6"),u["\u0275\u0275text"](9,"\u5b66\u751f\u8d44\u6599"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"ion-item"),u["\u0275\u0275elementStart"](11,"ion-avatar",0),u["\u0275\u0275element"](12,"img",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"ion-label"),u["\u0275\u0275text"](14),u["\u0275\u0275elementStart"](15,"p"),u["\u0275\u0275text"](16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"p"),u["\u0275\u0275text"](18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"ion-list"),u["\u0275\u0275elementStart"](20,"ion-item"),u["\u0275\u0275elementStart"](21,"ion-label"),u["\u0275\u0275elementStart"](22,"h3"),u["\u0275\u0275text"](23,"\u8003\u8bd5\u540d\u79f0"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"ion-label"),u["\u0275\u0275elementStart"](25,"h3",3),u["\u0275\u0275text"](26),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](27,p,3,0,"ion-text",4),u["\u0275\u0275template"](28,S,13,2,"ion-grid",5),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](12),u["\u0275\u0275property"]("src",t.student.avatar,u["\u0275\u0275sanitizeUrl"]),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",t.student.studentName," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](t.student.studentNo),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate2"]("",t.student.gradeName,"/",t.student.className,""),u["\u0275\u0275advance"](8),u["\u0275\u0275textInterpolate"](t.student.examName),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",0==(null==t.student.scoreList?null:t.student.scoreList.length)),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",(null==t.student.scoreList?null:t.student.scoreList.length)>0))},directives:[l.IonHeader,l.IonToolbar,l.IonButtons,l.IonBackButton,l.IonBackButtonDelegate,l.IonTitle,l.IonContent,l.IonItemDivider,l.IonItem,l.IonAvatar,l.IonLabel,l.IonList,a.NgIf,l.IonText,l.IonGrid,l.IonRow,l.IonCol,a.NgForOf],styles:[""]}),E)}],b=((I=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[o.i.forChild(x)],o.i]}),I);n.d(t,"ExamStudentDetailPageModule",(function(){return y}));var g,y=((g=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[a.CommonModule,r.FormsModule,l.IonicModule,b]]}),g)}}]);