(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{U7Fg:function(t,e,n){"use strict";n.r(e);var a=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),i=n("tyNb"),l=n("mrSG"),s=n("ZuI5"),d=n("26ZW"),u=n("qXBG"),m=n("AytR"),c=n("fXoL"),h=n("zxQZ");function p(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"ion-item"),c["\u0275\u0275elementStart"](1,"ion-thumbnail",5),c["\u0275\u0275element"](2,"img",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"p"),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("src",t.avatar,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" \xa0 ",t.name," "),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" \xa0 ",t.registerid," ")}}function f(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"ion-list"),c["\u0275\u0275elementStart"](1,"ion-item"),c["\u0275\u0275elementStart"](2,"ion-thumbnail",5),c["\u0275\u0275element"](3,"img",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-label",7),c["\u0275\u0275elementStart"](5,"h3"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"p",8),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-item-divider"),c["\u0275\u0275text"](10," \u5bfc\u5e08\u73ed\u5b66\u751f "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](11,p,8,3,"ion-item",9),c["\u0275\u0275elementEnd"]()),2&t){const t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("src",t.the_tutor.avatar_url,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",t.the_tutor.name," "),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",t.the_tutor.description," "),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",t.the_tutor.students)}}function v(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"p",10),c["\u0275\u0275text"](1,"---\u6211\u662f\u6709\u5e95\u7ebf\u7684---"),c["\u0275\u0275elementEnd"]())}const g=[{path:"",component:(()=>{class t{constructor(t,e,n){this.osrv=t,this.route=e,this.auth=n,this.loading=!1,e.params.subscribe(t=>{this.the_filter=new s.c,this.the_filter.taskId=t.taskid,this.the_filter.SelectionClassId=t.classid,this.init()})}ngOnInit(){}init(){return Object(l.a)(this,void 0,void 0,(function*(){this.user=yield this.auth.get_user(),this.the_filter.userType=this.user.roles[0].userType,this.the_filter.userCode=this.user.userCode,this.load()}))}load(){return Object(l.a)(this,void 0,void 0,(function*(){this.loading=!0,this.the_tutor=(yield this.osrv.get_select_tutor_students(this.the_filter)).data,""!=this.the_tutor.avatar_url&&null!=this.the_tutor.avatar_url||(this.the_tutor.avatar_url=m.a.default_avatar),this.the_tutor.students.filter(t=>{""!=t.avatar&&null!=t.avatar||(t.avatar=m.a.default_avatar)}),this.loading=!1}))}}return t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](u.a))},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["app-select-tutor-students"]],decls:10,vars:4,consts:[["slot","start"],["defaultHref","tabs"],[3,"show","loading"],[4,"ngIf"],["style","font-size: x-small; text-align: center;",4,"ngIf"],[1,"avatar"],[1,"avatar-image",3,"src"],[1,"ion-padding"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],[2,"font-size","x-small","text-align","center"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-title"),c["\u0275\u0275text"](5,"\u5bfc\u5e08\u5b66\u751f"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-content"),c["\u0275\u0275element"](7,"app-loading-process",2),c["\u0275\u0275template"](8,f,12,4,"ion-list",3),c["\u0275\u0275template"](9,v,2,0,"p",4),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("show",!e.the_tutor||0==(null==e.the_tutor.students?null:e.the_tutor.students.length))("loading",e.loading),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.the_tutor),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",0==e.loading))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonTitle,o.IonContent,h.a,a.NgIf,o.IonList,o.IonItem,o.IonThumbnail,o.IonLabel,o.IonItemDivider,a.NgForOf],styles:[""]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.i.forChild(g)],i.i]}),t})();var _=n("Ql/B");n.d(e,"SelectTutorStudentsPageModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.CommonModule,r.FormsModule,o.IonicModule,I,_.a]]}),t})()}}]);