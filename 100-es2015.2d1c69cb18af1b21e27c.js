(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{GA8Z:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("AH5l"),l=n("26ZW"),d=n("LWQN"),p=n("fXoL"),h=n("e8h1");function u(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"span"),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&t){const t=p["\u0275\u0275nextContext"](2).$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](t.tips)}}const f=function(t){return{lineDefaule:t}};function m(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"div",8),p["\u0275\u0275template"](1,u,2,1,"span",9),p["\u0275\u0275elementEnd"]()),2&t){const t=p["\u0275\u0275nextContext"](),e=t.index,n=t.$implicit,i=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction1"](2,f,e+2>i.active)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!!n.tips)}}const g=function(t){return{liWidth:t}},v=function(t){return{radioSelectDisabled:t}};function S(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"li",4),p["\u0275\u0275elementStart"](1,"div",5),p["\u0275\u0275element"](2,"div",6),p["\u0275\u0275template"](3,m,2,4,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t){const t=e.index,n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction1"](3,g,t+1==n.stepsData.length)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction1"](5,v,t+1>n.active)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t+1!=n.stepsData.length)}}function b(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&t){const t=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](t.title)}}function x(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"div",13),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&t){const t=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](t.description)}}const z=function(t){return{limaxWidth:t}};function I(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"li",4),p["\u0275\u0275template"](1,b,2,1,"div",10),p["\u0275\u0275template"](2,x,2,1,"div",11),p["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit,n=e.index,i=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction1"](3,z,n+1==i.stepsData.length)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!!t.title),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!!t.description)}}let y=(()=>{class t{constructor(){this.activeNumber=1,this.activeNumber=parseInt(this.active)}ngOnInit(){this.active||(this.active="1",this.activeNumber=parseInt(this.active))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["app-steps"]],inputs:{stepsData:"stepsData",active:"active"},decls:5,vars:2,consts:[[1,"steps"],[1,"lineUl"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"text"],[3,"ngClass"],[1,"stepsIcon"],[1,"radioSelect","radioSelectDisabled",3,"ngClass"],["class","line",3,"ngClass",4,"ngIf"],[1,"line",3,"ngClass"],[4,"ngIf"],["class","title",4,"ngIf"],["class","description",4,"ngIf"],[1,"title"],[1,"description"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"ul",1),p["\u0275\u0275template"](2,S,4,7,"li",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"ul",3),p["\u0275\u0275template"](4,I,3,5,"li",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.stepsData),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.stepsData))},directives:[i.NgForOf,i.NgClass,i.NgIf],styles:['.steps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}li[_ngcontent-%COMP%]{width:100%;list-style-type:none}.lineUl[_ngcontent-%COMP%]{padding:0 10%;margin-bottom:5px}.liWidth[_ngcontent-%COMP%]{width:20px}.stepsIcon[_ngcontent-%COMP%]{display:flex}.radioSelect[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;border-radius:100%;border:1px solid #26a2ff;position:relative;width:20px;height:20px;vertical-align:middle;background-color:#26a2ff}.radioSelect[_ngcontent-%COMP%]:after{border-left:0;border-top:0;content:" ";top:3px;left:6px;position:absolute;width:4px;height:8px;border-left-color:#fff;border-bottom:2px solid #fff;border-right:2px solid #fff;border-top-color:#fff;transform:rotate(45deg) scale(1);transition:transform .2s}.radioSelectDisabled[_ngcontent-%COMP%]{background-color:#d9d9d9;border-color:#ccc}.line[_ngcontent-%COMP%]{display:block;flex:1;height:16px;border-bottom:1px solid #26a2ff;margin-top:-5px;font-size:12px;color:#26a2ff}.lineDefaule[_ngcontent-%COMP%]{border-bottom:1px solid #d9d9d9}.title[_ngcontent-%COMP%]{font-size:14px}.description[_ngcontent-%COMP%]{font-size:12px}.text[_ngcontent-%COMP%]{margin-top:0!important}.limaxWidth[_ngcontent-%COMP%]{width:155px}']}),t})();const C=function(t,e){return{enabled:t,active:e}};function k(t,e){if(1&t){const t=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-col",7),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](t);const n=e.$implicit;return p["\u0275\u0275nextContext"]().ClickOption(n)})),p["\u0275\u0275elementStart"](1,"div",8),p["\u0275\u0275elementStart"](2,"div",9),p["\u0275\u0275element"](3,"img",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"div",11),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction2"](3,C,!t.enable,t.checked)),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate1"]("src","assets/images/",t.icon,".png",p["\u0275\u0275sanitizeUrl"]),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](t.name)}}const O=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o){this.route=t,this.orsv=e,this.router=n,this.storage=i,this.comm=o,this.taskId="",this.wishCount="0",this.taskName="\u9009\u79d1\u4efb\u52a1",this.stepsData=[],this.wish=["\u4e00","\u4e8c","\u4e09"],this.subjectList=[],this.activeStep=1,this.activeNext="\u4e0b\u4e00\u6b65",this.route.paramMap.subscribe(t=>{this.wishCount=t.get("wishCount"),this.taskId=t.get("taskId"),this.taskName=t.get("taskName"),this.remove()})}ngOnInit(){let t=parseInt(this.wishCount),e=[];for(let n=0;n<t;n++)e.push({title:`\u7b2c${this.wish[n]}\u5fd7\u613f`});this.stepsData=e,this.loadData()}loadData(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.orsv.get_kemu_new(this.taskId,parseInt(this.wishCount)),yield this.stepData()}))}stepData(){return Object(a.a)(this,void 0,void 0,(function*(){this.subjectList=[],yield this.storage.get(`volunteer_${this.activeStep}`).then(t=>{this.subjectList=t}),this.currSelected()}))}currSelected(){return Object(a.a)(this,void 0,void 0,(function*(){let t=new c.c;t=yield this.orsv.get_kemu_curr_selected(this.taskId,this.activeStep);let e=t.options;e&&(this.subjectList.forEach(t=>{t.enable=!1}),e.forEach(t=>{this.subjectList.forEach(e=>{e.id==t.optionId&&(e.enable=!0,t.selected&&(e.checked=!0))})}),this.refreshStorage())}))}prev(t){return Object(a.a)(this,void 0,void 0,(function*(){let e=parseInt(this.wishCount);t==e&&(this.activeNext="\u4e0b\u4e00\u6b65"),this.activeStep=t-1,this.stepData(),0==this.activeStep&&(this.remove(),this.router.navigate(["/features/new-select-kemu"]))}))}next(t){return Object(a.a)(this,void 0,void 0,(function*(){let e=parseInt(this.wishCount);if(t==e){var n=!1;let t="";for(let s=1;s<=e;s++){let e=[];yield this.storage.get(`volunteer_${s}`).then(i=>{e=i;let o=e.filter(t=>t.checked).length;console.log(o),o<3&&(t=`\u7b2c${this.wish[s-1]}\u5fd7\u613f\uff0c\u672a\u9009\u62e9\u6ee13\u79d1`,n=!0)})}if(n)return this.comm.presentToast(t),!1;let i=yield this.comm.loadingPresent(),o=yield this.orsv.save_kemu_request(this.taskId);return i.dismiss(),0==o?(this.remove(),this.router.navigate(["/features/new-select-kemu/end",{taskId:this.taskId}],{replaceUrl:!0})):this.comm.presentToast("\u4fdd\u5b58\u5931\u8d25!"),!1}let i=[];if(yield this.storage.get(`volunteer_${this.activeStep}`).then(t=>{i=t}),i.filter(t=>t.checked).length<3)return this.comm.presentToast("\u8bf7\u9009\u6ee13\u95e8\u5b66\u79d1!"),!1;this.activeStep=t+1,t+1==e&&(this.activeNext="\u5b8c\u6210\u9009\u79d1"),this.stepData()}))}ClickOption(t){return Object(a.a)(this,void 0,void 0,(function*(){if(!t.enable)return!1;if(t.checked)t.checked=!1;else{if(3==this.subjectList.filter(t=>t.checked).length)return yield this.comm.presentToast("\u5f53\u524d\u5fd7\u613f\u6700\u5927\u53ea\u80fd\u9009\u62e93\u4e2a\u5fd7\u613f!"),!1;t.checked=!0}let e=new c.a;e.fxTaskId=this.taskId,e.optionId=t.id,e.times=this.activeStep;let n=new c.b;this.comm.loadingPresent(),n=yield this.orsv.set_kemu_clickOtion(e),this.comm.loadingDismiss(),this.setOption(n)}))}setOption(t){return Object(a.a)(this,void 0,void 0,(function*(){let e=t.options;this.subjectList.forEach(t=>{if(!t.checked){let n=e.findIndex(e=>e==t.id);t.enable=!(n<0)}}),this.refreshStorage()}))}remove(){for(let t=1;t<=parseInt(this.wishCount);t++)this.storage.remove(`volunteer_${t}`)}refreshStorage(){this.storage.set(`volunteer_${this.activeStep}`,this.subjectList)}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](r.a),p["\u0275\u0275directiveInject"](l.a),p["\u0275\u0275directiveInject"](r.g),p["\u0275\u0275directiveInject"](h.b),p["\u0275\u0275directiveInject"](d.a))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["app-select"]],decls:20,vars:5,consts:[["slot","start"],["defaultHref","tabs"],[2,"--background","#F6F6F6"],[3,"stepsData","active"],["size","6",3,"click",4,"ngFor","ngForOf"],["color","white","expand","block",3,"click"],["expand","block",3,"click"],["size","6",3,"click"],[1,"normal",3,"ngClass"],[2,"text-align","center"],[2,"width","80%",3,"src"],[2,"font-size","16px","font-weight","600"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",0),p["\u0275\u0275element"](3,"ion-back-button",1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-title"),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-content",2),p["\u0275\u0275element"](7,"app-steps",3),p["\u0275\u0275elementStart"](8,"ion-grid"),p["\u0275\u0275elementStart"](9,"ion-row"),p["\u0275\u0275template"](10,k,6,6,"ion-col",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-footer"),p["\u0275\u0275elementStart"](12,"ion-grid"),p["\u0275\u0275elementStart"](13,"ion-row"),p["\u0275\u0275elementStart"](14,"ion-col"),p["\u0275\u0275elementStart"](15,"ion-button",5),p["\u0275\u0275listener"]("click",(function(){return e.prev(e.activeStep)})),p["\u0275\u0275text"](16,"\u4e0a\u4e00\u6b65"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"ion-col"),p["\u0275\u0275elementStart"](18,"ion-button",6),p["\u0275\u0275listener"]("click",(function(){return e.next(e.activeStep)})),p["\u0275\u0275text"](19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate"](e.taskName),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("stepsData",e.stepsData)("active",e.activeStep),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngForOf",e.subjectList),p["\u0275\u0275advance"](9),p["\u0275\u0275textInterpolate"](e.activeNext))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonTitle,s.IonContent,y,s.IonGrid,s.IonRow,i.NgForOf,s.IonFooter,s.IonCol,s.IonButton,i.NgClass],styles:[".normal[_ngcontent-%COMP%]{padding:10px;background:#fff;border-radius:10px;color:#000}.active[_ngcontent-%COMP%]{background:#7bd721!important;color:#fff}.enabled[_ngcontent-%COMP%]{background:#e7eaf3!important;color:#ccc}.ion-color-white[_ngcontent-%COMP%]{--ion-color-base:#fff!important;--ion-color-base-rgb:var(--ion-color-light-rgb,244,245,248)!important;--ion-color-contrast:var(--ion-color-light-contrast,#000)!important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb,0,0,0)!important;--ion-color-shade:var(--ion-color-light-shade,#fff)!important;--ion-color-tint:var(--ion-color-light-tint,#fff)!important}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.i.forChild(O)],r.i]}),t})();var E=n("Ql/B");n.d(e,"SelectPageModule",(function(){return j}));let j=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,o.FormsModule,s.IonicModule,w,E.a]]}),t})()},"Ql/B":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("ofXK"),o=n("TEn/"),s=n("3Pt+"),r=n("UMfn"),a=n("xiOZ"),c=n("/l6y"),l=n("L1u3"),d=n("8pq7"),p=n("ZE2D"),h=n("DKVz"),u=n("DXzV"),f=n("fXoL");let m=(()=>{class t{}return t.\u0275mod=f["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,o.IonicModule,s.FormsModule,r.a,a.b,c.d,d.c,d.b,d.e,d.a,d.f,l.b,h.a,p.b,u.b],r.a,l.b,d.c,d.b,d.e,d.a,d.f,p.b,u.b]}),t})()},ZE2D:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return v}));var i=n("207e"),o=n("JMSK"),s=n("fXoL"),r=n("2Suw"),a=n("/KA4"),c=n("IjuJ"),l=n("ofXK"),d=n("FwiY");const p=["textEl"];function h(t,e){if(1&t&&s["\u0275\u0275element"](0,"i",3),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("nzType",t.nzIcon)}}function u(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"img",4),s["\u0275\u0275listener"]("error",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().imgError(e)})),s["\u0275\u0275elementEnd"]()}if(2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("src",t.nzSrc,s["\u0275\u0275sanitizeUrl"]),s["\u0275\u0275attribute"]("srcset",t.nzSrcSet,s["\u0275\u0275sanitizeUrl"])("alt",t.nzAlt)}}function f(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"span",5,6),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("ngStyle",t.textStyles),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.nzText)}}const m=["*"];let g=(()=>{class t{constructor(t,e,n,i){this.nzConfigService=t,this.elementRef=e,this.cdr=n,this.platform=i,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new s.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(t){this.nzError.emit(t),t.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const t=this.textEl.nativeElement.offsetWidth,e=this.el.getBoundingClientRect().width,n=2*this.nzGap<e?2*this.nzGap:8;this.textStyles={transform:`scale(${e-n<t?(e-n)/t:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](s.ElementRef),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef),s["\u0275\u0275directiveInject"](o.a))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar"]],viewQuery:function(t,e){var n;1&t&&s["\u0275\u0275viewQuery"](p,!0),2&t&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(e.textEl=n.first)},hostVars:20,hostBindings:function(t,e){2&t&&(s["\u0275\u0275styleProp"]("width",e.customSize)("height",e.customSize)("line-height",e.customSize)("font-size",e.hasIcon&&e.customSize?e.nzSize/2:null,"px"),s["\u0275\u0275classProp"]("ant-avatar-lg","large"===e.nzSize)("ant-avatar-sm","small"===e.nzSize)("ant-avatar-square","square"===e.nzShape)("ant-avatar-circle","circle"===e.nzShape)("ant-avatar-icon",e.nzIcon)("ant-avatar-image",e.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[s["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(t,e){1&t&&(s["\u0275\u0275template"](0,h,1,1,"i",0),s["\u0275\u0275template"](1,u,1,3,"img",1),s["\u0275\u0275template"](2,f,3,2,"span",2)),2&t&&(s["\u0275\u0275property"]("ngIf",e.nzIcon&&e.hasIcon),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.nzSrc&&e.hasSrc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.nzText&&e.hasText))},directives:[l.NgIf,d.a,l.NgStyle],encapsulation:2,changeDetection:0}),Object(i.a)([Object(r.b)(),Object(i.b)("design:type",String)],t.prototype,"nzShape",void 0),Object(i.a)([Object(r.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzSize",void 0),Object(i.a)([Object(r.b)(),Object(a.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzGap",void 0),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:m,decls:1,vars:0,template:function(t,e){1&t&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),t})(),S=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[c.a,l.CommonModule,d.b,o.b]]}),t})()}}]);