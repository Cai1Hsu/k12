(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{jFlG:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),l=n("mrSG"),d=n("LWQN"),m=n("26ZW"),c=n("OKzL"),s=n("AytR"),h=n("fXoL");function p(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-content"),h["\u0275\u0275elementStart"](1,"ion-grid",3),h["\u0275\u0275elementStart"](2,"ion-row"),h["\u0275\u0275elementStart"](3,"ion-col",4),h["\u0275\u0275elementStart"](4,"img",5),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().showAvatar()})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"ion-col",6),h["\u0275\u0275elementStart"](6,"ion-grid",7),h["\u0275\u0275elementStart"](7,"ion-row"),h["\u0275\u0275elementStart"](8,"ion-col",8),h["\u0275\u0275elementStart"](9,"p",9),h["\u0275\u0275elementStart"](10,"span",10),h["\u0275\u0275text"](11),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](12,"span"),h["\u0275\u0275text"](13),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"p"),h["\u0275\u0275text"](15),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](16,"p"),h["\u0275\u0275text"](17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"p"),h["\u0275\u0275text"](19),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"p",11),h["\u0275\u0275text"](21),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](22,"ion-grid",12),h["\u0275\u0275elementStart"](23,"ion-row"),h["\u0275\u0275elementStart"](24,"ion-col",13),h["\u0275\u0275text"](25,"\u5f00\u59cb\u65f6\u95f4"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](26,"ion-col",14),h["\u0275\u0275text"](27),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](28,"ion-row"),h["\u0275\u0275elementStart"](29,"ion-col",13),h["\u0275\u0275text"](30,"\u7ed3\u675f\u65f6\u95f4"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](31,"ion-col",14),h["\u0275\u0275text"](32),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("src",e.the_detail.avatar,h["\u0275\u0275sanitizeUrl"]),h["\u0275\u0275advance"](7),h["\u0275\u0275textInterpolate1"](" ",e.the_detail.studentName," "),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate1"]("/ ",e.the_detail.studentNo,""),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate2"](" ",e.the_detail.className,"\xa0/\xa0",e.the_detail.teacherName," "),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate3"](" ",e.the_detail.buildingName," / ",e.the_detail.roomNo," / ",e.the_detail.bedNo,"\u53f7\u5e8a "),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](e.the_detail.typeName),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate1"]("\u5206\u503c\uff1a",e.the_detail.score,""),h["\u0275\u0275advance"](6),h["\u0275\u0275textInterpolate"](e.the_detail.startDate),h["\u0275\u0275advance"](5),h["\u0275\u0275textInterpolate"](e.the_detail.endDate)}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n){this.osrv=e,this.route=t,this.comm=n}ngOnInit(){this.route.paramMap.subscribe(e=>{this.init(e.get("id"))})}init(e){return Object(l.a)(this,void 0,void 0,(function*(){this.comm.loadingPresent();let t=yield this.osrv.get_dormitory_culture_model(e);this.comm.loadingDismiss(),0==t.code?(this.the_detail=t.data,this.the_detail.avatar&&""!=this.the_detail.avatar||(this.the_detail.avatar=s.a.default_avatar)):this.comm.presentToast(t.msg)}))}showAvatar(){return Object(l.a)(this,void 0,void 0,(function*(){this.comm.presentModal(c.a,"",{Images:[this.the_detail.avatar],index:0})}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](r.a),h["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-detail"]],decls:7,vars:1,consts:[["slot","start"],["defaultHref","tabs"],[4,"ngIf"],[1,"base-grid","bgfff"],["size","4"],[3,"src","click"],["size","8"],[1,"chlid-grid"],["size","12"],[2,"overflow","hidden","white-space","nowrap"],[1,"b","student-name"],[1,"yellow"],[1,"info-grid","bgfff"],["size","3",1,"row-title"],["size","9",1,"row-content"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar"),h["\u0275\u0275elementStart"](2,"ion-buttons",0),h["\u0275\u0275element"](3,"ion-back-button",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-title"),h["\u0275\u0275text"](5,"\u6587\u660e\u5bdd\u5ba4\u660e\u7ec6"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](6,p,33,12,"ion-content",2)),2&e&&(h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("ngIf",t.the_detail))},directives:[a.IonHeader,a.IonToolbar,a.IonButtons,a.IonBackButton,a.IonBackButtonDelegate,a.IonTitle,o.NgIf,a.IonContent,a.IonGrid,a.IonRow,a.IonCol],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-padding:0}ion-row[_ngcontent-%COMP%]{padding:.25rem 0}.info-grid[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:1rem}.sub-title[_ngcontent-%COMP%]{font-size:.9rem}.row-title[_ngcontent-%COMP%]{font-size:.7rem;color:#666}.row-content[_ngcontent-%COMP%]{font-size:.7rem;color:#1d1d1f}img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:5px}p[_ngcontent-%COMP%]{margin:0;padding:0;line-height:1.5rem;font-size:.9rem;color:#000}.student-name[_ngcontent-%COMP%]{font-size:1.4rem;color:#000}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.i.forChild(u)],r.i]}),e})();var f=n("Ql/B");n.d(t,"DetailPageModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,i.FormsModule,a.IonicModule,g,f.a]]}),e})()}}]);