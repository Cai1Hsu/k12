(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{GIaD:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),l=n("H6xx"),s=n("26ZW"),d=n("LWQN"),h=n("fXoL"),u=n("ZRqC");function f(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-content"),h["\u0275\u0275element"](1,"app-teacher-archives-list",3),h["\u0275\u0275elementStart"](2,"ion-infinite-scroll",4),h["\u0275\u0275listener"]("ionInfinite",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().loadData(t)})),h["\u0275\u0275element"](3,"ion-infinite-scroll-content",5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("the_collection",e.collection)("data",e.the_records)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,n){this.osrv=e,this.route=t,this.comm=n,this.the_filter=new l.d,this.the_filter.PageIndex=1,this.the_filter.PageSize=10}ngOnInit(){this.route.paramMap.subscribe(e=>{this.the_filter.teacherid=e.get("id"),this.init()})}init(){return Object(c.a)(this,void 0,void 0,(function*(){var e=yield this.comm.loadingPresent();this.the_records=yield this.getdata(),yield this.load(),e.dismiss()}))}getdata(){return Object(c.a)(this,void 0,void 0,(function*(){return(yield this.osrv.get_teacher_archive_traning(this.the_filter)).data}))}load(){return Object(c.a)(this,void 0,void 0,(function*(){this.collection=new l.b;let e,t=new Array;this.collection.header="sponsorUnit",e=new l.c,e.code="trainAddress",e.icon="eye-outline",t.push(e),e=new l.c,e.code="startDateText",e.icon="calendar-outline",e.merge="endDateText",t.push(e),this.collection.content="trainContent",this.collection.items=t}))}loadData(e){return Object(c.a)(this,void 0,void 0,(function*(){this.the_filter.PageIndex+=1;var t=yield this.getdata();0==t.length?e.target.disabled=!0:this.the_records=this.the_records.concat(t),e.target.complete()}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](a.a),h["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-teacher-archives-training"]],decls:7,vars:1,consts:[["slot","start"],["defaultHref","tabs"],[4,"ngIf"],[3,"the_collection","data"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u6b63\u5728\u52a0\u8f7d\u6570\u636e"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar"),h["\u0275\u0275elementStart"](2,"ion-buttons",0),h["\u0275\u0275element"](3,"ion-back-button",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-title"),h["\u0275\u0275text"](5,"\u6559\u5e08\u53d1\u5c55\u6863\u6848-\u57f9\u8bad\u8fdb\u4fee"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](6,f,4,2,"ion-content",2)),2&e&&(h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("ngIf",t.the_records&&t.collection))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,i.NgIf,r.IonContent,u.a,r.IonInfiniteScroll,r.IonInfiniteScrollContent],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(m)],a.i]}),e})();var g=n("Ql/B");n.d(t,"TeacherArchivesTrainingPageModule",(function(){return I}));let I=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,p,g.a]]}),e})()}}]);