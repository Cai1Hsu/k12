(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"6/gD":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("mrSG"),i=n("AytR"),o=n("a/9d"),a=n("fXoL");let s=(()=>{class e{constructor(e){this.camera=e,this.photos=[],this.photo_info=[]}add_new(){return Object(r.a)(this,void 0,void 0,(function*(){const e={quality:i.a.quality,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA,correctOrientation:!1,saveToPhotoAlbum:!1,targetWidth:i.a.image_width,targetHeight:i.a.image_height};var t=yield this.camera.getPicture(e);this.photo_info.push({base64:"data:image/jpeg;base64,"+t,ext:".jpg",name:"",url:""})}))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](o.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"CJQ+":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("qXBG"),l=n("cq/f"),u=n("26ZW"),d=n("LWQN");class h{}var m=n("fXoL");function p(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-content"),m["\u0275\u0275elementStart"](1,"form",3,4),m["\u0275\u0275listener"]("ngSubmit",(function(){m["\u0275\u0275restoreView"](e);const t=m["\u0275\u0275reference"](2);return m["\u0275\u0275nextContext"]().submit(t)})),m["\u0275\u0275elementStart"](3,"ion-list"),m["\u0275\u0275elementStart"](4,"ion-item"),m["\u0275\u0275elementStart"](5,"ion-thumbnail",5),m["\u0275\u0275element"](6,"img",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"ion-label"),m["\u0275\u0275elementStart"](8,"h2"),m["\u0275\u0275text"](9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"p"),m["\u0275\u0275text"](11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"ion-item"),m["\u0275\u0275elementStart"](13,"ion-label"),m["\u0275\u0275text"](14,"\u8054\u7cfb\u65b9\u5f0f"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"ion-input",7),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().the_model.ContactPhone=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"ion-item"),m["\u0275\u0275elementStart"](17,"ion-textarea",8),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().the_model.Comment=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](18,"app-upload-picture"),m["\u0275\u0275elementStart"](19,"ion-button",9),m["\u0275\u0275text"](20,"\u63d0\u4ea4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275reference"](2),t=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("src",t.user.avatarUrl,m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate2"](" \xa0 ",t.user.accountName," / ",t.user.userName," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" \xa0\xa0",t.user.mobileNo," "),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngModel",t.the_model.ContactPhone),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngModel",t.the_model.Comment),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("disabled",e.invalid)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n){this.auth=e,this.osrv=t,this.comm=n,this.the_model=new h}ngOnInit(){this.init()}init(){return Object(s.a)(this,void 0,void 0,(function*(){this.user=yield this.auth.get_user(),this.the_model.UserId=this.user.userID,this.the_model.SchoolId=this.user.serialNo}))}submit(e){return Object(s.a)(this,void 0,void 0,(function*(){var e=[];this.uploader.the_records.forEach(t=>{e.push(t.url)}),this.the_model.photos=e;var t=yield this.osrv.send_feedback(this.the_model);0==t.code?(this.comm.presentToast("\u63d0\u4ea4\u6210\u529f\uff0c\u611f\u8c22\u60a8\u7684\u53cd\u9988\u548c\u5efa\u8bae\uff01","success"),setTimeout(()=>{history.back()},500)):this.comm.presentToast(t.msg)}))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](c.a),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-feedback"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](l.a,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.uploader=n.first)},decls:7,vars:1,consts:[["slot","start"],["defaultHref","tabs"],[4,"ngIf"],[3,"ngSubmit"],["form","ngForm"],[1,"avatar"],[1,"avatar-image",3,"src"],["name","phone","type","text","placeholder","QQ\u3001\u90ae\u7bb1\u3001\u624b\u673a","clearInput","true","required","","required","",3,"ngModel","ngModelChange"],["clearOnEdit","true","name","intro","placeholder","\u8bf7\u8f93\u5165\u53cd\u9988\u610f\u89c1\uff0c\u6700\u591a500\u5b57","required","","rows","5",2,"font-size","14px",3,"ngModel","ngModelChange"],["type","submit","expand","block",3,"disabled"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar"),m["\u0275\u0275elementStart"](2,"ion-buttons",0),m["\u0275\u0275element"](3,"ion-back-button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-title"),m["\u0275\u0275text"](5," \u610f\u89c1\u53cd\u9988 "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,p,21,7,"ion-content",2)),2&e&&(m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("ngIf",t.user))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonTitle,r.NgIf,o.IonContent,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.NgForm,o.IonList,o.IonItem,o.IonThumbnail,o.IonLabel,o.IonInput,o.TextValueAccessor,i.RequiredValidator,i.NgControlStatus,i.NgModel,o.IonTextarea,l.a,o.IonButton],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(f)],a.i]}),e})();var S=n("Ql/B");n.d(t,"FeedbackPageModule",(function(){return z}));let z=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,i.FormsModule,o.IonicModule,g,S.a]]}),e})()},"Ql/B":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ofXK"),i=n("TEn/"),o=n("3Pt+"),a=n("UMfn"),s=n("xiOZ"),c=n("/l6y"),l=n("L1u3"),u=n("8pq7"),d=n("ZE2D"),h=n("DKVz"),m=n("DXzV"),p=n("fXoL");let f=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,i.IonicModule,o.FormsModule,a.a,s.b,c.d,u.c,u.b,u.e,u.a,u.f,l.b,h.a,d.b,m.b],a.a,l.b,u.c,u.b,u.e,u.a,u.f,d.b,m.b]}),e})()},ZE2D:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return S}));var r=n("207e"),i=n("JMSK"),o=n("fXoL"),a=n("2Suw"),s=n("/KA4"),c=n("IjuJ"),l=n("ofXK"),u=n("FwiY");const d=["textEl"];function h(e,t){if(1&e&&o["\u0275\u0275element"](0,"i",3),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("nzType",e.nzIcon)}}function m(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"img",4),o["\u0275\u0275listener"]("error",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().imgError(t)})),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("src",e.nzSrc,o["\u0275\u0275sanitizeUrl"]),o["\u0275\u0275attribute"]("srcset",e.nzSrcSet,o["\u0275\u0275sanitizeUrl"])("alt",e.nzAlt)}}function p(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"span",5,6),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("ngStyle",e.textStyles),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.nzText)}}const f=["*"];let g=(()=>{class e{constructor(e,t,n,r){this.nzConfigService=e,this.elementRef=t,this.cdr=n,this.platform=r,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new o.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(e){this.nzError.emit(e),e.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const e=this.textEl.nativeElement.offsetWidth,t=this.el.getBoundingClientRect().width,n=2*this.nzGap<t?2*this.nzGap:8;this.textStyles={transform:`scale(${t-n<e?(t-n)/e:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["nz-avatar"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](d,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.textEl=n.first)},hostVars:20,hostBindings:function(e,t){2&e&&(o["\u0275\u0275styleProp"]("width",t.customSize)("height",t.customSize)("line-height",t.customSize)("font-size",t.hasIcon&&t.customSize?t.nzSize/2:null,"px"),o["\u0275\u0275classProp"]("ant-avatar-lg","large"===t.nzSize)("ant-avatar-sm","small"===t.nzSize)("ant-avatar-square","square"===t.nzShape)("ant-avatar-circle","circle"===t.nzShape)("ant-avatar-icon",t.nzIcon)("ant-avatar-image",t.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[o["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,h,1,1,"i",0),o["\u0275\u0275template"](1,m,1,3,"img",1),o["\u0275\u0275template"](2,p,3,2,"span",2)),2&e&&(o["\u0275\u0275property"]("ngIf",t.nzIcon&&t.hasIcon),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.nzSrc&&t.hasSrc),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.nzText&&t.hasText))},directives:[l.NgIf,u.a,l.NgStyle],encapsulation:2,changeDetection:0}),Object(r.a)([Object(a.b)(),Object(r.b)("design:type",String)],e.prototype,"nzShape",void 0),Object(r.a)([Object(a.b)(),Object(r.b)("design:type",Object)],e.prototype,"nzSize",void 0),Object(r.a)([Object(a.b)(),Object(s.b)(),Object(r.b)("design:type",Object)],e.prototype,"nzGap",void 0),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:f,decls:1,vars:0,template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.a,l.CommonModule,u.b,i.b]]}),e})()}}]);