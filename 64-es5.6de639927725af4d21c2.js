function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"Ql/B":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("ofXK"),r=n("TEn/"),a=n("3Pt+"),o=n("UMfn"),s=n("xiOZ"),c=n("/l6y"),l=n("L1u3"),u=n("8pq7"),h=n("ZE2D"),f=n("DKVz"),p=n("DXzV"),z=n("fXoL"),d=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=z["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=z["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,r.IonicModule,a.FormsModule,o.a,s.b,c.d,u.c,u.b,u.e,u.a,u.f,l.b,f.a,h.b,p.b],o.a,l.b,u.c,u.b,u.e,u.a,u.f,h.b,p.b]}),t}()},ZE2D:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return m}));var i=n("207e"),r=n("JMSK"),a=n("fXoL"),o=n("2Suw"),s=n("/KA4"),c=n("IjuJ"),l=n("ofXK"),u=n("FwiY"),h=["textEl"];function f(t,e){if(1&t&&a["\u0275\u0275element"](0,"i",3),2&t){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("nzType",n.nzIcon)}}function p(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"img",4),a["\u0275\u0275listener"]("error",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().imgError(t)})),a["\u0275\u0275elementEnd"]()}if(2&t){var i=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("src",i.nzSrc,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275attribute"]("srcset",i.nzSrcSet,a["\u0275\u0275sanitizeUrl"])("alt",i.nzAlt)}}function z(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"span",5,6),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"]()),2&t){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngStyle",n.textStyles),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n.nzText)}}var d=["*"],S=function(){var t=function(){function t(e,n,i,r){_classCallCheck(this,t),this.nzConfigService=e,this.elementRef=n,this.cdr=i,this.platform=r,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new a.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}return _createClass(t,[{key:"imgError",value:function(t){this.nzError.emit(t),t.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}},{key:"ngOnChanges",value:function(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}},{key:"calcStringSize",value:function(){if(this.hasText){var t=this.textEl.nativeElement.offsetWidth,e=this.el.getBoundingClientRect().width,n=2*this.nzGap<e?2*this.nzGap:8;this.textStyles={transform:"scale(".concat(e-n<t?(e-n)/t:1,") translateX(-50%)")},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}}},{key:"notifyCalc",value:function(){var t=this;this.platform.isBrowser&&setTimeout((function(){t.calcStringSize()}))}},{key:"setSizeStyle",value:function(){this.customSize="number"==typeof this.nzSize?"".concat(this.nzSize,"px"):null,this.cdr.markForCheck()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](a.ChangeDetectorRef),a["\u0275\u0275directiveInject"](r.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar"]],viewQuery:function(t,e){var n;1&t&&a["\u0275\u0275viewQuery"](h,!0),2&t&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(e.textEl=n.first)},hostVars:20,hostBindings:function(t,e){2&t&&(a["\u0275\u0275styleProp"]("width",e.customSize)("height",e.customSize)("line-height",e.customSize)("font-size",e.hasIcon&&e.customSize?e.nzSize/2:null,"px"),a["\u0275\u0275classProp"]("ant-avatar-lg","large"===e.nzSize)("ant-avatar-sm","small"===e.nzSize)("ant-avatar-square","square"===e.nzShape)("ant-avatar-circle","circle"===e.nzShape)("ant-avatar-icon",e.nzIcon)("ant-avatar-image",e.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[a["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(t,e){1&t&&(a["\u0275\u0275template"](0,f,1,1,"i",0),a["\u0275\u0275template"](1,p,1,3,"img",1),a["\u0275\u0275template"](2,z,3,2,"span",2)),2&t&&(a["\u0275\u0275property"]("ngIf",e.nzIcon&&e.hasIcon),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.nzSrc&&e.hasSrc),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.nzText&&e.hasText))},directives:[l.NgIf,u.a,l.NgStyle],encapsulation:2,changeDetection:0}),Object(i.a)([Object(o.b)(),Object(i.b)("design:type",String)],t.prototype,"nzShape",void 0),Object(i.a)([Object(o.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzSize",void 0),Object(i.a)([Object(o.b)(),Object(s.b)(),Object(i.b)("design:type",Object)],t.prototype,"nzGap",void 0),t}(),m=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:d,decls:1,vars:0,template:function(t,e){1&t&&(a["\u0275\u0275projectionDef"](),a["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),t}(),v=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[c.a,l.CommonModule,u.b,r.b]]}),t}()},qtVX:function(t,e,n){"use strict";n.r(e);var i,r=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("Tnp2"),l=n("fXoL"),u=[{path:"",component:c.a}],h=((i=function t(){_classCallCheck(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||i)},imports:[[s.i.forChild(u)],s.i]}),i),f=n("Ql/B");n.d(e,"AutoUpdatePageModule",(function(){return z}));var p,z=((p=function t(){_classCallCheck(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||p)},imports:[[r.CommonModule,a.FormsModule,o.IonicModule,h,f.a]]}),p)}}]);