(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{q14d:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("mrSG"),l=n("IYK9"),d=n("qXBG"),c=n("fXoL"),m=n("zxQZ");function h(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-item",9),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](2).kick(n)})),c["\u0275\u0275elementStart"](1,"ion-avatar",0),c["\u0275\u0275element"](2,"img",10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-note",11),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("src",e.avatar,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",e.student_name," "),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",e.exam_course," ")}}function u(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ion-item-group"),c["\u0275\u0275elementStart"](1,"ion-item-divider"),c["\u0275\u0275elementStart"](2,"h6"),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](4,h,9,3,"ion-item",8),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](e.class_name),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.student_list)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.examService=e,this.activeRouter=t,this.router=n,this.auth=i,this.pageIndex=1,this.pageSize=3,this.search_word="",this.loading=!1}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.activeRouter.params.subscribe(e=>{this.examId=e.id}),this.user=yield this.auth.get_user(),this.isTeacher=yield this.auth.is_teacher(),this.load()}))}load(){return Object(s.a)(this,void 0,void 0,(function*(){this.pageSize=this.search_word.length>0?10:3,this.loading=!0,this.theGroupList=yield this.examService.getStudentList(this.examId,this.search_word,this.pageIndex,this.pageSize),this.loading=!1}))}doRefresh(e){return Object(s.a)(this,void 0,void 0,(function*(){setTimeout(()=>{this.ngOnInit(),e.target.complete()},2e3)}))}loadData(e){return Object(s.a)(this,void 0,void 0,(function*(){this.pageIndex+=1,this.loading=!0;var t=yield this.examService.getStudentList(this.examId,this.search_word,this.pageIndex,this.pageSize);0==t.length?e.target.disabled=!0:this.theGroupList=this.theGroupList.concat(t),e.target.complete(),this.loading=!1}))}kick(e){return Object(s.a)(this,void 0,void 0,(function*(){this.router.navigate(["/features/exams/exam-student-detail",{studentId:"",studentNo:e.student_No,examId:this.examId}])}))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](a.g),c["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-exam-detail"]],decls:15,vars:5,consts:[["slot","start"],["defaultHref","tabs"],["placeholder","\u5b66\u751f\u59d3\u540d/\u5b66\u53f7","debounce","500",3,"animated","ngModel","ionChange","ngModelChange"],[3,"show","loading"],[4,"ngFor","ngForOf"],["slot","fixed",3,"ionRefresh"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u6b63\u5728\u52a0\u8f7d\u6570\u636e"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[3,"src"],[2,"font-size","x-small"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-title"),c["\u0275\u0275text"](5,"\u8003\u8bd5\u8be6\u60c5"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-content"),c["\u0275\u0275elementStart"](7,"ion-searchbar",2),c["\u0275\u0275listener"]("ionChange",(function(){return t.load()}))("ngModelChange",(function(e){return t.search_word=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](8,"app-loading-process",3),c["\u0275\u0275elementStart"](9,"ion-list"),c["\u0275\u0275template"](10,u,5,2,"ion-item-group",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-refresher",5),c["\u0275\u0275listener"]("ionRefresh",(function(e){return t.doRefresh(e)})),c["\u0275\u0275element"](12,"ion-refresher-content"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"ion-infinite-scroll",6),c["\u0275\u0275listener"]("ionInfinite",(function(e){return t.loadData(e)})),c["\u0275\u0275element"](14,"ion-infinite-scroll-content",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("animated",!0)("ngModel",t.search_word),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("show",!t.theGroupList||0==t.theGroupList.length)("loading",t.loading),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.theGroupList))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,r.IonSearchbar,r.TextValueAccessor,o.NgControlStatus,o.NgModel,m.a,r.IonList,i.NgForOf,r.IonRefresher,r.IonRefresherContent,r.IonInfiniteScroll,r.IonInfiniteScrollContent,r.IonItemGroup,r.IonItemDivider,r.IonItem,r.IonAvatar,r.IonLabel,r.IonNote],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(p)],a.i]}),e})();var f=n("Ql/B");n.d(t,"ExamDetailPageModule",(function(){return I}));let I=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,g,f.a]]}),e})()}}]);