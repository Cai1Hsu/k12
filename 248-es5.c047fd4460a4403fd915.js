function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{hO9l:function(e,t,n){"use strict";n.r(t);var a=n("TEn/"),i=n("ofXK"),r=n("3Pt+"),o=n("tyNb"),l=n("mrSG"),s=n("yjup"),c=n("qXBG"),u=n("fXoL");function d(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",8),u["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",9),u["\u0275\u0275elementEnd"]())}function m(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",10),u["\u0275\u0275elementEnd"]())}function f(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",11),u["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",12),u["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",13),u["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",14),u["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(u["\u0275\u0275namespaceSVG"](),u["\u0275\u0275elementStart"](0,"svg",7),u["\u0275\u0275element"](1,"use",15),u["\u0275\u0275elementEnd"]())}var w,S,y=[{path:"tabs",component:(w=function(){function e(t,n,a,i){_classCallCheck(this,e),this.router=t,this.route=n,this.badge=a,this.auth=i,this.isStudent=!0,this.the_tab="activities"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.init()}},{key:"init",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.is_student();case 2:this.isStudent=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"ionTabsWillChange",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.the_tab=e.tab;case 1:case"end":return t.stop()}}),t,this)})))}},{key:"setWindmillAnimate",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.currentTarget.getAttribute("tab"),a=document.getElementById("windmill"),i=document.getElementById("school"),"activities"==n?(a.classList.add("windmill"),i.classList.remove("school")):"features"==n?(i.classList.add("school"),a.classList.remove("windmill")):(a.classList.remove("windmill"),i.classList.remove("school"));case 2:case"end":return t.stop()}}),t)})))}}]),e}(),w.\u0275fac=function(e){return new(e||w)(u["\u0275\u0275directiveInject"](o.g),u["\u0275\u0275directiveInject"](o.a),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](c.a))},w.\u0275cmp=u["\u0275\u0275defineComponent"]({type:w,selectors:[["app-tabs"]],decls:22,vars:8,consts:[[3,"ionTabsWillChange"],["slot","bottom",2,"height","64px"],["tab","activities"],["class","icon","aria-hidden","true",4,"ngIf"],["tab","course-plan"],["tab","features"],["tab","me"],["aria-hidden","true",1,"icon"],[0,"xlink","href","#icondongtai-weixuanzhong"],[0,"xlink","href","#icondongtai"],[0,"xlink","href","#iconkanke-weixuanzhong"],[0,"xlink","href","#iconkanke"],[0,"xlink","href","#iconxiaoyuan-weixuanzhong"],[0,"xlink","href","#iconxiaoyuan"],[0,"xlink","href","#iconwo-weixuanzhong"],[0,"xlink","href","#iconwo"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-tabs",0),u["\u0275\u0275listener"]("ionTabsWillChange",(function(e){return t.ionTabsWillChange(e)})),u["\u0275\u0275elementStart"](1,"ion-tab-bar",1),u["\u0275\u0275elementStart"](2,"ion-tab-button",2),u["\u0275\u0275template"](3,d,2,0,"svg",3),u["\u0275\u0275template"](4,h,2,0,"svg",3),u["\u0275\u0275elementStart"](5,"ion-label"),u["\u0275\u0275text"](6,"\u6d88\u606f"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"ion-tab-button",4),u["\u0275\u0275template"](8,m,2,0,"svg",3),u["\u0275\u0275template"](9,f,2,0,"svg",3),u["\u0275\u0275elementStart"](10,"ion-label"),u["\u0275\u0275text"](11,"\u8bfe\u7a0b\u8ba1\u5212"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"ion-tab-button",5),u["\u0275\u0275template"](13,p,2,0,"svg",3),u["\u0275\u0275template"](14,b,2,0,"svg",3),u["\u0275\u0275elementStart"](15,"ion-label"),u["\u0275\u0275text"](16,"\u6821\u56ed"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"ion-tab-button",6),u["\u0275\u0275template"](18,g,2,0,"svg",3),u["\u0275\u0275template"](19,v,2,0,"svg",3),u["\u0275\u0275elementStart"](20,"ion-label"),u["\u0275\u0275text"](21,"\u6211"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngIf","activities"!=t.the_tab),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","activities"==t.the_tab),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf","course-plan"!=t.the_tab),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","course-plan"==t.the_tab),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf","features"!=t.the_tab),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","features"==t.the_tab),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf","me"!=t.the_tab),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","me"==t.the_tab))},directives:[a.IonTabs,a.IonTabBar,a.IonTabButton,i.NgIf,a.IonLabel],styles:["ion-tab-bar[_ngcontent-%COMP%]{--border:#e6e8e6!important}.icon[_ngcontent-%COMP%]{width:3em;height:3em;vertical-align:-.15em;fill:currentColor;overflow:hidden}"]}),w),children:[{path:"activities",children:[{path:"",loadChildren:function(){return Promise.all([n.e(1),n.e(0),n.e(44)]).then(n.bind(null,"kQbx")).then((function(e){return e.ActivitiesPageModule}))}}]},{path:"features",children:[{path:"",loadChildren:function(){return Promise.all([n.e(0),n.e(142)]).then(n.bind(null,"hB0V")).then((function(e){return e.FeaturesPageModule}))}}]},{path:"me",children:[{path:"",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(80)]).then(n.bind(null,"deo1")).then((function(e){return e.MePageModule}))}}]},{path:"mvideo",children:[{path:"",loadChildren:function(){return Promise.all([n.e(0),n.e(99)]).then(n.bind(null,"hOSV")).then((function(e){return e.MVideoPageModule}))}}]},{path:"resource",children:[{path:"",loadChildren:function(){return n.e(9).then(n.bind(null,"eZnK")).then((function(e){return e.ResourcePageRoutingModule}))}}]},{path:"course-plan",children:[{path:"",loadChildren:function(){return Promise.all([n.e(1),n.e(4),n.e(11)]).then(n.bind(null,"Z9pS")).then((function(e){return e.CoursePlanPageModule}))}}]},{path:"",redirectTo:"/tabs/activities",pathMatch:"full"}]}],k=((S=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[o.i.forChild(y)],o.i]}),S);n.d(t,"TabsPageModule",(function(){return x}));var C,x=((C=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[a.IonicModule,i.CommonModule,r.FormsModule,k]]}),C)}}]);