function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{OHZo:function(e,t,n){"use strict";n.r(t);var o,r,i=n("ofXK"),a=n("3Pt+"),c=n("TEn/"),l=n("tyNb"),s=n("mrSG"),u=n("AytR"),d=n("fXoL"),m=[{path:"",component:(o=function(){function e(t,n){var o=this;_classCallCheck(this,e),this.router=t,this.route=n,this.image=u.a.gou,this.route.paramMap.subscribe((function(e){o.taskId=e.get("taskId")}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"back",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["/features/questionnaire/teacher",{id:this.taskId}],{replaceUrl:!0});case 1:case"end":return e.stop()}}),e,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(d["\u0275\u0275directiveInject"](l.g),d["\u0275\u0275directiveInject"](l.a))},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["app-success"]],decls:20,vars:1,consts:[["slot","start"],["defaultHref","tabs"],[2,"text-align","center","margin","0 auto"],[3,"src"],[1,"ion-text-center","success"],[1,"btn",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header"),d["\u0275\u0275elementStart"](1,"ion-toolbar"),d["\u0275\u0275elementStart"](2,"ion-buttons",0),d["\u0275\u0275element"](3,"ion-back-button",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-title"),d["\u0275\u0275text"](5,"\u6559\u5e08\u8bc4\u6d4b"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-content"),d["\u0275\u0275elementStart"](7,"ion-list"),d["\u0275\u0275elementStart"](8,"ion-card"),d["\u0275\u0275elementStart"](9,"div",2),d["\u0275\u0275element"](10,"img",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"ion-card-content"),d["\u0275\u0275elementStart"](12,"div",4),d["\u0275\u0275text"](13," \u611f\u8c22\u53c2\u4e0e\u6b64\u6b21\u6559\u5e08\u8bc4\u6d4b\uff01 "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"ion-footer"),d["\u0275\u0275elementStart"](15,"ion-grid"),d["\u0275\u0275elementStart"](16,"ion-row"),d["\u0275\u0275elementStart"](17,"ion-col"),d["\u0275\u0275elementStart"](18,"div",5),d["\u0275\u0275listener"]("click",(function(){return t.back()})),d["\u0275\u0275text"](19,"\u8fd4\u56de\u6559\u5e08\u5217\u8868"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](10),d["\u0275\u0275propertyInterpolate"]("src",t.image,d["\u0275\u0275sanitizeUrl"]))},directives:[c.IonHeader,c.IonToolbar,c.IonButtons,c.IonBackButton,c.IonBackButtonDelegate,c.IonTitle,c.IonContent,c.IonList,c.IonCard,c.IonCardContent,c.IonFooter,c.IonGrid,c.IonRow,c.IonCol],styles:[".success[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1982ff}.btn[_ngcontent-%COMP%]{background:#4bb2ff;color:#fff;text-align:center;padding:10px;width:90%;border-radius:10px;margin:0 auto;cursor:pointer}"]}),o)}],f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[l.i.forChild(m)],l.i]}),r);n.d(t,"SuccessPageModule",(function(){return g}));var p,g=((p=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[i.CommonModule,a.FormsModule,c.IonicModule,f]]}),p)}}]);