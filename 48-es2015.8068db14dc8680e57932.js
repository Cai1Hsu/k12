(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"6/gD":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("mrSG"),o=n("AytR"),r=n("a/9d"),a=n("fXoL");let s=(()=>{class t{constructor(t){this.camera=t,this.photos=[],this.photo_info=[]}add_new(){return Object(i.a)(this,void 0,void 0,(function*(){const t={quality:o.a.quality,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA,correctOrientation:!1,saveToPhotoAlbum:!1,targetWidth:o.a.image_width,targetHeight:o.a.image_height};var e=yield this.camera.getPicture(t);this.photo_info.push({base64:"data:image/jpeg;base64,"+e,ext:".jpg",name:"",url:""})}))}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](r.a))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Ql/B":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("ofXK"),o=n("TEn/"),r=n("3Pt+"),a=n("UMfn"),s=n("xiOZ"),c=n("/l6y"),l=n("L1u3"),d=n("8pq7"),h=n("ZE2D"),u=n("DKVz"),m=n("DXzV"),f=n("fXoL");let p=(()=>{class t{}return t.\u0275mod=f["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,o.IonicModule,r.FormsModule,a.a,s.b,c.d,d.c,d.b,d.e,d.a,d.f,l.b,u.a,h.b,m.b],a.a,l.b,d.c,d.b,d.e,d.a,d.f,h.b,m.b]}),t})()},ZE2D:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return z}));var i=n("207e"),o=n("JMSK"),r=n("fXoL"),a=n("2Suw"),s=n("/KA4"),c=n("IjuJ"),l=n("ofXK"),d=n("FwiY");const h=["textEl"];function u(t,e){if(1&t&&r["\u0275\u0275element"](0,"i",3),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("nzType",t.nzIcon)}}function m(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"img",4),r["\u0275\u0275listener"]("error",(function(e){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().imgError(e)})),r["\u0275\u0275elementEnd"]()}if(2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("src",t.nzSrc,r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275attribute"]("srcset",t.nzSrcSet,r["\u0275\u0275sanitizeUrl"])("alt",t.nzAlt)}}function f(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"span",5,6),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngStyle",t.textStyles),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.nzText)}}const p=["*"];let g=(()=>{class t{constructor(t,e,n,i){this.nzConfigService=t,this.elementRef=e,this.cdr=n,this.platform=i,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new r.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(t){this.nzError.emit(t),t.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const t=this.textEl.nativeElement.offsetWidth,e=this.el.getBoundingClientRect().width,n=2*this.nzGap<e?2*this.nzGap:8;this.textStyles={transform:`scale(${e-n<t?(e-n)/t:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](o.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar"]],viewQuery:function(t,e){var n;1&t&&r["\u0275\u0275viewQuery"](h,!0),2&t&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(e.textEl=n.first)},hostVars:20,hostBindings:function(t,e){2&t&&(r["\u0275\u0275styleProp"]("width",e.customSize)("height",e.customSize)("line-height",e.customSize)("font-size",e.hasIcon&&e.customSize?e.nzSize/2:null,"px"),r["\u0275\u0275classProp"]("ant-avatar-lg","large"===e.nzSize)("ant-avatar-sm","small"===e.nzSize)("ant-avatar-square","square"===e.nzShape)("ant-avatar-circle","circle"===e.nzShape)("ant-avatar-icon",e.nzIcon)("ant-avatar-image",e.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[r["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(t,e){1&t&&(r["\u0275\u0275template"](0,u,1,1,"i",0),r["\u0275\u0275template"](1,m,1,3,"img",1),r["\u0275\u0275template"](2,f,3,2,"span",2)),2&t&&(r["\u0275\u0275property"]("ngIf",e.nzIcon&&e.hasIcon),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.nzSrc&&e.hasSrc),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.nzText&&e.hasText))},directives:[l.NgIf,d.a,l.NgStyle],encapsulation:2,changeDetection:0}),Object(i.a)([Object(a.b)(),Object(i.b)("design:type",String)],t.prototype,"nzShape",void 0),Object(i.a)([Object(a.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzSize",void 0),Object(i.a)([Object(a.b)(),Object(s.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzGap",void 0),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:p,decls:1,vars:0,template:function(t,e){1&t&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),t})(),S=(()=>{class t{}return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[c.a,l.CommonModule,d.b,o.b]]}),t})()},cPDo:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=(n("gYr8"),n("26ZW")),l=n("LWQN"),d=n("6/gD"),h=n("fXoL");function u(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-item",10),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](t);const n=e.$implicit;return h["\u0275\u0275nextContext"](2).pick(n)})),h["\u0275\u0275elementStart"](1,"ion-thumbnail",11),h["\u0275\u0275element"](2,"img",12),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"ion-label"),h["\u0275\u0275elementStart"](4,"h3"),h["\u0275\u0275text"](5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"h4"),h["\u0275\u0275text"](7),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("src",t.avatar,h["\u0275\u0275sanitizeUrl"]),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" \xa0 ",t.name," "),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate1"]("\xa0 ",t.studentNo,"")}}function m(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275elementStart"](1,"ion-radio-group",8),h["\u0275\u0275template"](2,u,8,3,"ion-item",9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&t){const t=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngForOf",t.list)}}function f(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"div",13),h["\u0275\u0275element"](1,"img",14),h["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.router=t,this.photosrv=e,this.orsv=n,this.comm=i,this.keyword="",this.list=[]}ngOnInit(){this.search(null)}pick(t){this.router.navigate(["/features/dormitory-evaluation/list/student",{id:t.serialNo}])}search(t){return Object(s.a)(this,void 0,void 0,(function*(){let t=yield this.comm.loadingPresent("\u6b63\u5728\u5904\u7406...");this.orsv.appDormitoryStudentList(this.keyword).then(t=>{this.list=t.data}),t.dismiss()}))}recognitionImg(){return Object(s.a)(this,void 0,void 0,(function*(){try{if(this.photosrv.photo_info=[],yield this.photosrv.add_new(),this.photosrv.photo_info.length>0){this.comm.loadingPresent();let t={image:this.photosrv.photo_info[0].base64},e="",n=yield this.orsv.recognition_face(t);if(0!=n.code)return this.comm.presentToast("\u672a\u80fd\u627e\u5230\u8be5\u5b66\u751f"),void(yield this.comm.loadingDismiss());if(this.the_FaceDataInfo=n.data,this.the_FaceDataInfo.length<=0||this.the_FaceDataInfo[0].candidates.length<=0)return this.comm.presentToast("\u672a\u80fd\u627e\u5230\u8be5\u5b66\u751f"),void this.comm.loadingDismiss();e=this.the_FaceDataInfo[0].candidates[0].faceId;let i=yield this.orsv.get_studentId_faceid(e);if(0!=i.code)return this.comm.presentToast("\u672a\u80fd\u627e\u5230\u8be5\u5b66\u751f"),void this.comm.loadingDismiss();this.comm.loadingDismiss(),this.router.navigate(["/features/dormitory-evaluation/list/student",{id:i.data}])}else this.comm.presentToast("\u6ca1\u6709\u6536\u5230\u62cd\u7167\u4fe1\u606f\uff01")}catch(t){this.comm.presentToast(t)}}))}}return t.\u0275fac=function(e){return new(e||t)(h["\u0275\u0275directiveInject"](a.g),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](c.a),h["\u0275\u0275directiveInject"](l.a))},t.\u0275cmp=h["\u0275\u0275defineComponent"]({type:t,selectors:[["app-by-student"]],decls:13,vars:4,consts:[["slot","start"],["defaultHref","tabs"],["debounce","500","placeholder","\u5b66\u751f\u59d3\u540d/\u5b66\u53f7",3,"animated","ngModel","ngModelChange","ionChange"],[4,"ngIf"],["slot","fixed","style","text-align: center;",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","Success",2,"color","#3880ff"],["name","camera-outline","size","large"],["value",""],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"avatar"],[1,"avatar-image",3,"src"],["slot","fixed",2,"text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"]],template:function(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar"),h["\u0275\u0275elementStart"](2,"ion-buttons",0),h["\u0275\u0275element"](3,"ion-back-button",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-title"),h["\u0275\u0275text"](5,"\u9009\u62e9\u5b66\u751f"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-content"),h["\u0275\u0275elementStart"](7,"ion-searchbar",2),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.keyword=t}))("ionChange",(function(t){return e.search(t)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](8,m,3,1,"ion-list",3),h["\u0275\u0275template"](9,f,2,0,"div",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"ion-fab",5),h["\u0275\u0275listener"]("click",(function(){return e.recognitionImg()})),h["\u0275\u0275elementStart"](11,"ion-fab-button",6),h["\u0275\u0275element"](12,"ion-icon",7),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&t&&(h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("animated",!0)("ngModel",e.keyword),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",e.list),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",0==e.list.length))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,r.IonSearchbar,r.TextValueAccessor,o.NgControlStatus,o.NgModel,i.NgIf,r.IonFab,r.IonFabButton,r.IonIcon,r.IonList,r.IonRadioGroup,r.SelectValueAccessor,i.NgForOf,r.IonItem,r.IonThumbnail,r.IonLabel],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.i.forChild(p)],a.i]}),t})();var z=n("Ql/B");n.d(e,"ByStudentPageModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,g,z.a]]}),t})()},gYr8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return c}));var i=n("PyTI");class o{constructor(){this.famlies=[],this.gradeid=this.grade?this.grade.serialNo:""}}class r extends i.a{constructor(){super(...arguments),this.avatarsize="120"}}class a{constructor(){this.dszybz=!1}}class s{}class c{}}}]);