(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"Ql/B":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("ofXK"),r=n("TEn/"),s=n("3Pt+"),a=n("UMfn"),o=n("xiOZ"),c=n("/l6y"),l=n("L1u3"),h=n("8pq7"),u=n("ZE2D"),z=n("DKVz"),p=n("DXzV"),f=n("fXoL");let d=(()=>{class t{}return t.\u0275mod=f["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,r.IonicModule,s.FormsModule,a.a,o.b,c.d,h.c,h.b,h.e,h.a,h.f,l.b,z.a,u.b,p.b],a.a,l.b,h.c,h.b,h.e,h.a,h.f,u.b,p.b]}),t})()},ZE2D:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return m}));var i=n("207e"),r=n("JMSK"),s=n("fXoL"),a=n("2Suw"),o=n("/KA4"),c=n("IjuJ"),l=n("ofXK"),h=n("FwiY");const u=["textEl"];function z(t,e){if(1&t&&s["\u0275\u0275element"](0,"i",3),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("nzType",t.nzIcon)}}function p(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"img",4),s["\u0275\u0275listener"]("error",(function(e){return s["\u0275\u0275restoreView"](t),s["\u0275\u0275nextContext"]().imgError(e)})),s["\u0275\u0275elementEnd"]()}if(2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("src",t.nzSrc,s["\u0275\u0275sanitizeUrl"]),s["\u0275\u0275attribute"]("srcset",t.nzSrcSet,s["\u0275\u0275sanitizeUrl"])("alt",t.nzAlt)}}function f(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"span",5,6),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("ngStyle",t.textStyles),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.nzText)}}const d=["*"];let S=(()=>{class t{constructor(t,e,n,i){this.nzConfigService=t,this.elementRef=e,this.cdr=n,this.platform=i,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new s.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(t){this.nzError.emit(t),t.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const t=this.textEl.nativeElement.offsetWidth,e=this.el.getBoundingClientRect().width,n=2*this.nzGap<e?2*this.nzGap:8;this.textStyles={transform:`scale(${e-n<t?(e-n)/t:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](s.ElementRef),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef),s["\u0275\u0275directiveInject"](r.a))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar"]],viewQuery:function(t,e){var n;1&t&&s["\u0275\u0275viewQuery"](u,!0),2&t&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(e.textEl=n.first)},hostVars:20,hostBindings:function(t,e){2&t&&(s["\u0275\u0275styleProp"]("width",e.customSize)("height",e.customSize)("line-height",e.customSize)("font-size",e.hasIcon&&e.customSize?e.nzSize/2:null,"px"),s["\u0275\u0275classProp"]("ant-avatar-lg","large"===e.nzSize)("ant-avatar-sm","small"===e.nzSize)("ant-avatar-square","square"===e.nzShape)("ant-avatar-circle","circle"===e.nzShape)("ant-avatar-icon",e.nzIcon)("ant-avatar-image",e.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[s["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(t,e){1&t&&(s["\u0275\u0275template"](0,z,1,1,"i",0),s["\u0275\u0275template"](1,p,1,3,"img",1),s["\u0275\u0275template"](2,f,3,2,"span",2)),2&t&&(s["\u0275\u0275property"]("ngIf",e.nzIcon&&e.hasIcon),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.nzSrc&&e.hasSrc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.nzText&&e.hasText))},directives:[l.NgIf,h.a,l.NgStyle],encapsulation:2,changeDetection:0}),Object(i.a)([Object(a.b)(),Object(i.b)("design:type",String)],t.prototype,"nzShape",void 0),Object(i.a)([Object(a.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzSize",void 0),Object(i.a)([Object(a.b)(),Object(o.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzGap",void 0),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:d,decls:1,vars:0,template:function(t,e){1&t&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),t})(),g=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[c.a,l.CommonModule,h.b,r.b]]}),t})()},qtVX:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),r=n("3Pt+"),s=n("TEn/"),a=n("tyNb"),o=n("Tnp2"),c=n("fXoL");const l=[{path:"",component:o.a}];let h=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.i.forChild(l)],a.i]}),t})();var u=n("Ql/B");n.d(e,"AutoUpdatePageModule",(function(){return z}));let z=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,r.FormsModule,s.IonicModule,h,u.a]]}),t})()}}]);