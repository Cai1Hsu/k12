function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{U7lX:function(e,t,n){"use strict";n.r(t);var i,r,o=n("ofXK"),a=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),u=n("mrSG"),l=n("qXBG"),d=n("fXoL"),f=n("mnim"),h=[{path:"",component:(i=function(){function e(t,n,i){var r=this;_classCallCheck(this,e),this.route=t,this.router=n,this.auth=i,this.isStudent=!0,this.route.params.subscribe((function(e){r.the_date=new Date,r.the_teacherid=e.id}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.is_student();case 2:this.isStudent=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"gotoAssessment",value:function(){this.router.navigate(["/features/teacher-assessment/create-assessment",{id:this.the_teacherid}])}}]),e}(),i.\u0275fac=function(e){return new(e||i)(d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](c.g),d["\u0275\u0275directiveInject"](l.a))},i.\u0275cmp=d["\u0275\u0275defineComponent"]({type:i,selectors:[["app-display-teacher"]],decls:8,vars:2,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","tabs"],[3,"teacherid","date"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header",0),d["\u0275\u0275elementStart"](1,"ion-toolbar"),d["\u0275\u0275elementStart"](2,"ion-buttons",1),d["\u0275\u0275element"](3,"ion-back-button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-title"),d["\u0275\u0275text"](5,"\u6559\u5e08\u8be6\u60c5"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-content"),d["\u0275\u0275element"](7,"app-teacher-detail",3),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("teacherid",t.the_teacherid)("date",t.the_date))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonTitle,s.IonContent,f.a],styles:[""]}),i)}],m=((r=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[c.i.forChild(h)],c.i]}),r),p=n("Ql/B");n.d(t,"DisplayTeacherPageModule",(function(){return b}));var v,b=((v=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[o.CommonModule,a.FormsModule,s.IonicModule,m,p.a]]}),v)}}]);