function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{GPTS:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),o=n("tyNb"),s=n("mrSG"),l=n("26ZW"),c=n("9JJm"),u=n("qXBG"),h=n("AytR"),d=n("D+jN"),p=n("fXoL"),f=n("zxQZ");function m(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-item",18),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=t.$implicit;return p["\u0275\u0275nextContext"](2).kick(e)})),p["\u0275\u0275elementStart"](1,"ion-avatar",1),p["\u0275\u0275element"](2,"img",19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"ion-label"),p["\u0275\u0275elementStart"](4,"h3"),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"p"),p["\u0275\u0275text"](7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-note",20),p["\u0275\u0275elementStart"](9,"p"),p["\u0275\u0275text"](10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("src",r.avatar,p["\u0275\u0275sanitizeUrl"]),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",r.student_name," "),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](r.student_no),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",r.state_text," ")}}function v(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p",21),p["\u0275\u0275text"](1,"---\u6211\u662f\u6709\u5e95\u7ebf\u7684---"),p["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ion-list",15),p["\u0275\u0275template"](1,m,11,4,"ion-item",16),p["\u0275\u0275template"](2,v,2,0,"p",17),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",n.theGroupList),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!n.hasMore)}}var x,I,b=[{path:"",component:(x=function(){function e(t,n,r,i,a,o){_classCallCheck(this,e),this.orsv=t,this.activeRouter=n,this.router=r,this.auth=i,this.pickerController=a,this.cache=o,this.theFilter=new c.b,this.loading=!1,this.hasMore=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.theFilter.TaskId=this.activeRouter.snapshot.paramMap.get("taskId"),this.the_type=this.activeRouter.snapshot.paramMap.get("type"),this.theFilter.Type=1,this.theFilter.PageIndex=1,this.theFilter.PageSize=10,"1"==this.the_type?this.theFilter.StatusType=6:"2"==this.the_type&&(this.theFilter.StatusType=2),this.init()}},{key:"openFilter",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],"1"==this.the_type?(n.push({text:"\u5f85\u786e\u8ba4",value:"6"}),n.push({text:"\u5df2\u786e\u8ba4",value:"7"})):(n.push({text:"\u5f85\u5ba1\u6838",value:"2"}),n.push({text:"\u5ba1\u6838\u901a\u8fc7",value:"4"}),n.push({text:"\u5ba1\u6838\u4e0d\u901a\u8fc7",value:"3"})),r=n.findIndex((function(e){return e.value==i.theFilter.StatusType})),t.push({name:"1",selectedIndex:r,options:n}),e.next=7,this.pickerController.create({buttons:[{role:"cancel",text:"\u53d6\u6d88",handler:function(){}},{text:"\u786e\u5b9a",handler:function(e){i.theFilter.PageIndex=1,i.theFilter.StatusType=e[1].value,i.hasMore=!0,i.init()}}],columns:t});case 7:e.sent.present();case 8:case"end":return e.stop()}}),e,this)})))}},{key:"init",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.get_user();case 2:return this.user=e.sent,e.next=5,this.auth.is_admin();case 5:if(e.t0=e.sent,e.t1=1!=e.t0,!e.t1){e.next=9;break}this.theFilter.UserCode=this.user.userCode;case 9:return e.next=11,this.cache.get("USER_ROLE");case 11:t=e.sent,this.theFilter.UserType=t.userType,null!=this.the_event&&(this.the_event.target.disabled=!1,this.the_event.target.complete()),this.load();case 13:case"end":return e.stop()}}),e,this)})))}},{key:"load",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:this.theGroupList=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"getData",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.orsv.enrollstudent_list(this.theFilter);case 3:return t=e.sent.data,e.abrupt("return",(t.filter((function(e){null!=e.avatar&&""!=e.avatar||(e.avatar=h.a.default_avatar)})),this.loading=!1,t));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"search",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.load();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.the_event=e,this.theFilter.PageIndex+=1,t.next=3,this.getData();case 3:0==(n=t.sent).length?(e.target.disabled=!0,this.hasMore=!1):this.theGroupList=this.theGroupList.concat(n),e.target.complete();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"kick",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.router.navigate(["/features/enroll/enroll-audit",{studentId:e.id}]);case 1:case"end":return t.stop()}}),t,this)})))}}]),e}(),x.\u0275fac=function(e){return new(e||x)(p["\u0275\u0275directiveInject"](l.a),p["\u0275\u0275directiveInject"](o.a),p["\u0275\u0275directiveInject"](o.g),p["\u0275\u0275directiveInject"](u.a),p["\u0275\u0275directiveInject"](a.PickerController),p["\u0275\u0275directiveInject"](d.a))},x.\u0275cmp=p["\u0275\u0275defineComponent"]({type:x,selectors:[["app-enroll-list"]],decls:19,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","tabs"],[1,"bgfff"],[1,"display-table","bgfff"],[1,"table-cell"],["placeholder","\u59d3\u540d/\u8eab\u4efd\u8bc1\u53f7","debounce","500",3,"animated","ngModel","ionChange","ngModelChange"],[1,"table-cell",2,"width","3rem"],[3,"click"],["aria-hidden","true",1,"icon"],[0,"xlink","href","#iconInterface58-24px"],[3,"show","loading"],["class","mt20 bgfff",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u6b63\u5728\u52a0\u8f7d\u6570\u636e...."],[1,"mt20","bgfff"],["button","",3,"click",4,"ngFor","ngForOf"],["style","font-size: x-small; text-align: center;",4,"ngIf"],["button","",3,"click"],[3,"src"],[2,"font-size","x-small"],[2,"font-size","x-small","text-align","center"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header",0),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",1),p["\u0275\u0275element"](3,"ion-back-button",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-title"),p["\u0275\u0275text"](5,"\u62a5\u5230\u8be6\u60c5"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-content"),p["\u0275\u0275elementStart"](7,"div",3),p["\u0275\u0275elementStart"](8,"div",4),p["\u0275\u0275elementStart"](9,"div",5),p["\u0275\u0275elementStart"](10,"ion-searchbar",6),p["\u0275\u0275listener"]("ionChange",(function(e){return t.search(e)}))("ngModelChange",(function(e){return t.theFilter.SearchKeyword=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"div",7),p["\u0275\u0275elementStart"](12,"a",8),p["\u0275\u0275listener"]("click",(function(){return t.openFilter()})),p["\u0275\u0275namespaceSVG"](),p["\u0275\u0275elementStart"](13,"svg",9),p["\u0275\u0275element"](14,"use",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275namespaceHTML"](),p["\u0275\u0275element"](15,"app-loading-process",11),p["\u0275\u0275template"](16,g,3,2,"ion-list",12),p["\u0275\u0275elementStart"](17,"ion-infinite-scroll",13),p["\u0275\u0275listener"]("ionInfinite",(function(e){return t.loadData(e)})),p["\u0275\u0275element"](18,"ion-infinite-scroll-content",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](10),p["\u0275\u0275property"]("animated",!0)("ngModel",t.theFilter.SearchKeyword),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("show",(!t.theGroupList||0==t.theGroupList.length)&&0==t.loading)("loading",t.loading),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.theGroupList))},directives:[a.IonHeader,a.IonToolbar,a.IonButtons,a.IonBackButton,a.IonBackButtonDelegate,a.IonTitle,a.IonContent,a.IonSearchbar,a.TextValueAccessor,i.NgControlStatus,i.NgModel,f.a,r.NgIf,a.IonInfiniteScroll,a.IonInfiniteScrollContent,a.IonList,r.NgForOf,a.IonItem,a.IonAvatar,a.IonLabel,a.IonNote],styles:[".icon[_ngcontent-%COMP%]{width:2em;height:2em;vertical-align:-.5em;fill:currentColor;overflow:hidden}"]}),x)}],y=((I=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[o.i.forChild(b)],o.i]}),I),k=n("Ql/B");n.d(t,"EnrollListPageModule",(function(){return w}));var S,w=((S=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[r.CommonModule,i.FormsModule,a.IonicModule,y,k.a]]}),S)}}]);