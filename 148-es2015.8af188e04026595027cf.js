(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{qXzE:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),l=n("mrSG"),m=n("amuj"),d=n("cq/f"),s=n("LWQN"),c=n("+71z"),u=n("fXoL");function h(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-grid"),u["\u0275\u0275elementStart"](1,"ion-row"),u["\u0275\u0275elementStart"](2,"ion-col"),u["\u0275\u0275elementStart"](3,"div"),u["\u0275\u0275elementStart"](4,"ion-label"),u["\u0275\u0275element"](5,"h3"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"div"),u["\u0275\u0275elementStart"](7,"ion-label"),u["\u0275\u0275element"](8,"p"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"ion-row"),u["\u0275\u0275elementStart"](10,"ion-col"),u["\u0275\u0275elementStart"](11,"ion-item",6),u["\u0275\u0275elementStart"](12,"ion-label",7),u["\u0275\u0275elementStart"](13,"h3"),u["\u0275\u0275text"](14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"p",8),u["\u0275\u0275text"](16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"ion-textarea",9),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().the_model.comment=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](14),u["\u0275\u0275textInterpolate2"](" ",e.the_model.categoryName,"/ ",e.the_model.subCategoryName," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",e.the_model.studentName," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngModel",e.the_model.comment)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,o){this.ic=e,this.router=t,this.route=n,this.comm=o,this.the_model=new m.c}ngOnInit(){this.route.paramMap.subscribe(e=>{this.the_model.categoryName=e.get("categoryName"),this.the_model.categoryId=e.get("categoryId"),this.the_model.subCategoryId=e.get("subCategoryId"),this.the_model.subCategoryName=e.get("subCategoryName"),this.the_model.studentName=e.get("studentName"),this.the_model.StudentId=e.get("studentId"),this.init()})}init(){return Object(l.a)(this,void 0,void 0,(function*(){}))}submit(e){return Object(l.a)(this,void 0,void 0,(function*(){var e=yield this.comm.loadingPresent("\u52a0\u8f7d\u4e2d...\uff01");if(""==this.the_model.comment||null==this.the_model.comment||null==this.the_model.comment)return e.dismiss(),void this.comm.presentToast("\u8bf7\u8f93\u5165\u63cf\u8ff0");let t=new Array;this.uploader.the_records.forEach(e=>{t.push({url:e.url,thumbnail:e.thumbnail})}),this.the_model.photos=t;var n=yield this.ic.publish(this.the_model);0==n.code?this.comm.presentAlert("\u53d1\u5e03\u6210\u529f\uff01",null,"\u7efc\u5408\u7d20\u8d28\u53d1\u5e03\u6210\u529f\uff0c\u8bf7\u95ee\u60a8\u8981\u7ee7\u7eed\u64cd\u4f5c\u5417\uff1f",[{text:"\u505c\u7559\u5728\u5f53\u524d\u9875\u9762",handler:e=>{this.the_model.photos=[],this.the_model.comment=void 0,this.uploader.the_records=[]}},{text:"\u8fd4\u56de\u81f3\u5217\u8868",handler:e=>{this.router.navigate(["/features/integrated-capability/integrated-capability-list"],{replaceUrl:!0,skipLocationChange:!0})}},{text:"\u7ee7\u7eed\u53d1\u5e03\u7efc\u5408\u7d20\u8d28",handler:e=>{history.back()}}]):this.comm.presentToast(n.msg),e.dismiss()}))}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](a.g),u["\u0275\u0275directiveInject"](a.a),u["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-integrated-capability-publish"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](d.a,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.uploader=n.first)},decls:13,vars:2,consts:[["slot","start"],["defaultHref","tabs"],[3,"ngSubmit"],["form","ngForm"],[4,"ngIf"],["expand","block","type","submit",3,"disabled"],[1,"ion-no-padding","ion-no-border"],["position","stacked"],["color","primary"],["rows","6","cols","20","placeholder","\u8bf7\u586b\u5199\u6d3b\u52a8\u5185\u5bb9","name","comment","required","",2,"font-size","small",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-header"),u["\u0275\u0275elementStart"](1,"ion-toolbar"),u["\u0275\u0275elementStart"](2,"ion-buttons",0),u["\u0275\u0275element"](3,"ion-back-button",1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"ion-title"),u["\u0275\u0275text"](5,"\u7efc\u5408\u7d20\u8d28\u53d1\u5e03"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"ion-content"),u["\u0275\u0275elementStart"](7,"form",2,3),u["\u0275\u0275listener"]("ngSubmit",(function(){u["\u0275\u0275restoreView"](e);const n=u["\u0275\u0275reference"](8);return t.submit(n)})),u["\u0275\u0275template"](9,h,18,4,"ion-grid",4),u["\u0275\u0275element"](10,"app-upload-picture"),u["\u0275\u0275elementStart"](11,"ion-button",5),u["\u0275\u0275text"](12,"\u63d0\u4ea4"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275reference"](8);u["\u0275\u0275advance"](9),u["\u0275\u0275property"]("ngIf",t.the_model),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("disabled",e.invalid)}},directives:[i.IonHeader,i.IonToolbar,i.IonButtons,i.IonBackButton,i.IonBackButtonDelegate,i.IonTitle,i.IonContent,r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.NgForm,o.NgIf,d.a,i.IonButton,i.IonGrid,i.IonRow,i.IonCol,i.IonLabel,i.IonItem,i.IonTextarea,i.TextValueAccessor,r.RequiredValidator,r.NgControlStatus,r.NgModel],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(p)],a.i]}),e})();var f=n("Ql/B");n.d(t,"IntegratedCapabilityPublishPageModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,r.FormsModule,i.IonicModule,g,f.a]]}),e})()}}]);