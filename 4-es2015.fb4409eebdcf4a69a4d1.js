(window.webpackJsonp=window.webpackJsonp||[]).push([[4,261],{"Ql/B":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("ofXK"),r=n("TEn/"),a=n("3Pt+"),s=n("UMfn"),o=n("xiOZ"),c=n("/l6y"),u=n("L1u3"),h=n("8pq7"),l=n("ZE2D"),d=n("DKVz"),p=n("DXzV"),g=n("fXoL");let f=(()=>{class e{}return e.\u0275mod=g["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,r.IonicModule,a.FormsModule,s.a,o.b,c.d,h.c,h.b,h.e,h.a,h.f,u.b,d.a,l.b,p.b],s.a,u.b,h.c,h.b,h.e,h.a,h.f,l.b,p.b]}),e})()},ZE2D:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return b}));var i=n("207e"),r=n("JMSK"),a=n("fXoL"),s=n("2Suw"),o=n("/KA4"),c=n("IjuJ"),u=n("ofXK"),h=n("FwiY");const l=["textEl"];function d(e,t){if(1&e&&a["\u0275\u0275element"](0,"i",3),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("nzType",e.nzIcon)}}function p(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"img",4),a["\u0275\u0275listener"]("error",(function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().imgError(t)})),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("src",e.nzSrc,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275attribute"]("srcset",e.nzSrcSet,a["\u0275\u0275sanitizeUrl"])("alt",e.nzAlt)}}function g(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"span",5,6),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngStyle",e.textStyles),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.nzText)}}const f=["*"];let _=(()=>{class e{constructor(e,t,n,i){this.nzConfigService=e,this.elementRef=t,this.cdr=n,this.platform=i,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new a.EventEmitter,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(e){this.nzError.emit(e),e.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const e=this.textEl.nativeElement.offsetWidth,t=this.el.getBoundingClientRect().width,n=2*this.nzGap<t?2*this.nzGap:8;this.textStyles={transform:`scale(${t-n<e?(t-n)/e:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](a.ChangeDetectorRef),a["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["nz-avatar"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](l,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.textEl=n.first)},hostVars:20,hostBindings:function(e,t){2&e&&(a["\u0275\u0275styleProp"]("width",t.customSize)("height",t.customSize)("line-height",t.customSize)("font-size",t.hasIcon&&t.customSize?t.nzSize/2:null,"px"),a["\u0275\u0275classProp"]("ant-avatar-lg","large"===t.nzSize)("ant-avatar-sm","small"===t.nzSize)("ant-avatar-square","square"===t.nzShape)("ant-avatar-circle","circle"===t.nzShape)("ant-avatar-icon",t.nzIcon)("ant-avatar-image",t.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[a["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(e,t){1&e&&(a["\u0275\u0275template"](0,d,1,1,"i",0),a["\u0275\u0275template"](1,p,1,3,"img",1),a["\u0275\u0275template"](2,g,3,2,"span",2)),2&e&&(a["\u0275\u0275property"]("ngIf",t.nzIcon&&t.hasIcon),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.nzSrc&&t.hasSrc),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.nzText&&t.hasText))},directives:[u.NgIf,h.a,u.NgStyle],encapsulation:2,changeDetection:0}),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",String)],e.prototype,"nzShape",void 0),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",Object)],e.prototype,"nzSize",void 0),Object(i.a)([Object(s.b)(),Object(o.b)(),Object(i.b)("design:type",Object)],e.prototype,"nzGap",void 0),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["nz-avatar-group"]],hostAttrs:[1,"ant-avatar-group"],exportAs:["nzAvatarGroup"],ngContentSelectors:f,decls:1,vars:0,template:function(e,t){1&e&&(a["\u0275\u0275projectionDef"](),a["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),e})(),m=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.a,u.CommonModule,h.b,r.b]]}),e})()},h2Q0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("mrSG"),r=n("B7Rs"),a=n("FAH8"),s=n("LWQN"),o=n("AytR"),c=n("WOgW"),u=n("vZKB"),h=n("fXoL"),l=n("TEn/");let d=(()=>{class e{constructor(e,t,n,i,r,a){this.transfer=e,this.file=t,this.platform=n,this.comm=i,this.androidPermissions=r,this.openNativeSettings=a,this.fileTransfer=this.transfer.create()}getCover(e){let t="yuwen";switch(e){case"\u8bed\u6587":t="yuwen";break;case"\u6570\u5b66":t="shuxue";break;case"\u73ed\u4f1a":t="banhui";break;case"\u521b\u65b0":t="chuangxin";break;case"\u9053\u5fb7\u4e0e\u6cd5\u5236":t="daodeyufazhi";break;case"\u5bfc\u5e08\u73ed":t="daoshiban";break;case"\u5bfc\u5e08\u8bfe":t="daoshike";break;case"\u5bfc\u5e08\u81ea\u4e60\u8bfe":t="daoshizixike";break;case"\u5730\u7406":t="dili";break;case"\u5316\u5b66":t="huaxue";break;case"\u6280\u672f":t="jishu";break;case"\u79d1\u521b/\u52b3\u6280":t="kechuanglaoji";break;case"\u5386\u53f2":t="lishi";break;case"\u793c\u4eea":t="liyi";break;case"\u7f8e\u672f":t="meishu";break;case"\u751f\u7269":t="shengwu";break;case"\u751f\u6daf\u6559\u80b2\u804c\u4e1a\u4f53\u9a8c\u5355\u4f4d":t="shengyajiaoyuzhiyetiyandanwei";break;case"\u793e\u56e2":t="shetuan";break;case"\u4e66\u6cd5":t="shufa";break;case"\u601d\u54c1":case"\u601d\u60f3\u54c1\u5fb7":t="sipin";break;case"\u4f53\u953b":t="tiduan";break;case"\u4f53\u80b2":t="tiyu";break;case"\u901a\u7528\u6280\u672f":t="tongyongjishu";break;case"\u5916\u6559":t="waijiao";break;case"\u665a\u81ea\u4e60":t="wanzixi";break;case"\u7269\u7406":t="wuli";break;case"\u6821\u672c":t="xiaoben";break;case"\u6821\u672c\u9009\u4fee":t="xiaobenxuanxiu";break;case"\u5fc3\u7406":t="xinli";break;case"\u4fe1\u606f\u6280\u672f":t="xinxijishu";break;case"\u9009\u4fee\uff08\u8bed\uff09":t="xuanxiuyu";break;case"\u7814\u7a76\u6027\u5b66\u4e60":t="yanjiuxingxuexi";break;case"\u82f1\u8bed":t="yingyu";break;case"\u97f3\u4e50":t="yinyue";break;case"\u827a\u672f":t="yishu";break;case"\u8bed\u6587\uff08\u9009\uff09":t="yuwenxuan";break;case"\u653f\u6cbb":t="zhengzhi";break;case"\u81ea\u4e60":t="zixi"}return"assets/images/subject/"+t+".png"}getYear(e=!1){return Object(i.a)(this,void 0,void 0,(function*(){let t=(new Date).getFullYear();var n=[];for(let i=t-9;i<=t+1;i++)n.push({id:i.toString(),name:i+"\u5e74",selected:t==i&&e,hasChild:!1,child:null,catalogs:null,level:0});return n}))}downLoad(e,t,n="szymr",r,a,s=null,c=null,u=null){return Object(i.a)(this,void 0,void 0,(function*(){let i="";n||(n=o.a.root_directory),i=1!=this.platform.is("ios")?(yield this.file.createDir(this.file.dataDirectory,n,!0)).toURL()+t:this.file.documentsDirectory+t,a&&a(),this.fileTransfer=this.transfer.create(),u&&(this.fileTransfer.onProgress=e=>{u(e)}),this.fileTransfer.download(e,i,!1,{headers:{Authorization:"Bearer "+r}}).then(e=>{s&&s(e)}).catch(e=>{switch(e.code){case 1:this.comm.presentToast("\u6587\u4ef6\u4e0d\u5b58\u5728\uff01");break;case 2:this.comm.presentToast("\u4e0b\u8f7d\u5730\u5740\u9519\u8bef\uff01");break;case 3:this.comm.presentToast("\u7f51\u7edc\u8fde\u63a5\u9519\u8bef\uff01");break;case 4:this.comm.presentToast("\u624b\u52a8\u7ec8\u6b62\u4e86\u4e0b\u8f7d\uff01");break;case 5:this.comm.presentToast("\u6ca1\u6709\u6743\u9650\uff01")}c&&c(e)})}))}checkPermission(){return Object(i.a)(this,void 0,void 0,(function*(){try{let e=yield this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);return 1!=e.hasPermission&&this.comm.presentAlertConfirm("\u6743\u9650\u63d0\u793a","\u7cfb\u7edf\u8bbe\u7f6e\u4e2d\u4e0d\u5141\u8bb8\u5b58\u50a8\u4e0e\u8bbf\u95ee\u6240\u6709\u7c7b\u578b\u6587\u4ef6\uff0c\u8bf7\u8fdb\u5165\u7cfb\u7edf\u8bbe\u7f6e\u4e2d\uff0c\u5f00\u542f\u5b58\u50a8\u7a7a\u95f4\uff01",[{text:"\u4e0b\u6b21\u8bbe\u7f6e"},{text:"\u597d\u7684\uff0c\u53bb\u8bbe\u7f6e",handler:e=>Object(i.a)(this,void 0,void 0,(function*(){yield this.openNativeSettings.open("application_details")}))}]),e.hasPermission}catch(e){return!1}}))}getMessageFrom(e){var t=[];return"notice"==e&&(t.push({edit:!1,id:"1",value:1,name:"\u5fb7\u80b2",selected:!1}),t.push({edit:!1,id:"2",value:2,name:"\u8bf7\u5047",selected:!1}),t.push({edit:!1,id:"3",value:3,name:"\u7efc\u5408\u7d20\u8d28",selected:!1}),t.push({edit:!1,id:"4",value:4,name:"\u5bbf\u820d\u8003\u8bc4",selected:!1}),t.push({edit:!1,id:"5",value:5,name:"\u8c03\u8bfe",selected:!1}),t.push({edit:!1,id:"6",value:6,name:"\u7814\u7a76\u6027\u5b66\u4e60",selected:!1}),t.push({edit:!1,id:"8",value:7,name:"\u529f\u80fd\u5ba4",selected:!1}),t.push({edit:!1,id:"8",value:8,name:"\u5f02\u5e38\u5f52\u5bdd",selected:!1})),"todo"==e&&(t.push({edit:!1,id:"2",value:2,name:"\u8bf7\u5047",selected:!1}),t.push({edit:!1,id:"3",value:3,name:"\u7efc\u5408\u7d20\u8d28",selected:!1}),t.push({edit:!1,id:"8",value:7,name:"\u529f\u80fd\u5ba4",selected:!1})),t}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275inject"](r.a),h["\u0275\u0275inject"](a.a),h["\u0275\u0275inject"](l.Platform),h["\u0275\u0275inject"](s.a),h["\u0275\u0275inject"](c.a),h["\u0275\u0275inject"](u.a))},e.\u0275prov=h["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},rttL:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("mrSG"),r=n("uwyt"),a=n("D+jN"),s=n("fXoL");let o=(()=>{class e{constructor(e,t){this.cache=e,this.lpsrv=t}Auth(){return Object(i.a)(this,void 0,void 0,(function*(){let e=yield this.cache.get("ACCESS_TOKEN"),t=yield this.cache.get("USER_ROLE");if(!e||""==e||!t||null==t)return!1;let n=yield this.lpsrv.thirdLogin({access_token:e,roleId:t.roleID});return 0==n.code&&(this.cache.set("learningspace_token",n.data.access_token),!0)}))}Token(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.cache.get("learningspace_token")}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](a.a),s["\u0275\u0275inject"](r.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},uwyt:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("mrSG"),r=n("tk/3"),a=n("AytR"),s=n("0yPt"),o=n("fXoL");let c=(()=>{class e{constructor(e){this.http=e}thirdLogin(e){return Object(i.a)(this,void 0,void 0,(function*(){return this.http.generic_get(a.a.learning_space+"/Login/OAuth",e)}))}get_public_course_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/course/public/list",e,n)}))}get_segment_list(e){return Object(i.a)(this,void 0,void 0,(function*(){let t=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(a.a.learning_space+"/Base/Segment",{},t)}))}get_grade_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Base/Segment/Grade/"+e,{},n)}))}get_subject_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Base/Segment/Subject/"+e,{},n)}))}get_course_view(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/course/"+e,{},n)}))}get_course_teacher_view(e,t="",n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_get_byheader(a.a.learning_space+"/course/teacher/"+e,{teacherId:t},i)}))}get_course_teacher_syllabus(e,t="",n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_get_byheader(a.a.learning_space+"/course/teacher/syllabus/list/"+e,{teacherId:t},i)}))}get_syllabus_view(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_get_byheader(a.a.learning_space+"/course/content/"+e,{teacherId:t},i)}))}get_syllabus_video_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/course/video/list/"+e,{},n)}))}get_syllabus_doc_list(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_get_byheader(a.a.learning_space+"/course/doc/list",{contentId:e,resourceId:t},i)}))}get_resource_view(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Doc/detail/"+e,{},n)}))}get_ondemand_data(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Doc/QueryVideoUrl/"+e,{},n)}))}get_syllabus_comment_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/course/comment/list",e,n)}))}create_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/course/comment/create",e,n)}))}delete_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/course/comment/delete",{id:e},n)}))}get_course_resource_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/course/resourse/list",e,n)}))}get_dictionary_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Doc/ClassType/"+e,{},n)}))}get_version_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Base/Subject/Version/"+e,{},n)}))}get_textbook_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_get_byheader(a.a.learning_space+"/Base/Version/TextBook/"+e,{},n)}))}get_live_recorded_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/Base/video/QueryPlan",e,n)}))}get_syllabus_bydate(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_get_byheader(a.a.learning_space+"/course/syllabus/list",{startDate:e,endDate:t},i)}))}get_course_plan_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/Video/comment/page",e,n)}))}create_course_plan_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/Video/comment/commit",e,n)}))}reply_course_plan_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/Video/comment/reply",e,n)}))}delete_course_plan_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+t);return this.http.generic_post_byheader(a.a.learning_space+"/Video/comment/delete",e,n)}))}get_course_plan_shared_teacher_list(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+n);return this.http.generic_post_byheader(a.a.learning_space+"/Course/share/teacher",{datetime:e,keyword:t},i)}))}get_course_plan_shared_student_list(e,t,n,s){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+s);return this.http.generic_post_byheader(a.a.learning_space+"/Course/share/student/teacher",{datetime:t,studentId:e,keyword:n},i)}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](s.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},zxQZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("fXoL"),r=n("ofXK"),a=n("TEn/");function s(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",2),i["\u0275\u0275element"](1,"ion-spinner",3),i["\u0275\u0275elementEnd"]())}function o(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",4),i["\u0275\u0275element"](1,"img",5),i["\u0275\u0275elementEnd"]())}let c=(()=>{class e{constructor(){this.loading=!1}ngOnChanges(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading-process"]],inputs:{show:"show",loading:"loading"},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["style","text-align: center;",4,"ngIf"],["slot","fixed","style","text-align: center;",4,"ngIf"],[2,"text-align","center"],["name","dots"],["slot","fixed",2,"text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,s,2,0,"div",0),i["\u0275\u0275template"](1,o,2,0,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf",1==t.loading),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.show&&1==t.show&&0==t.loading))},directives:[r.NgIf,a.IonSpinner],styles:[""]}),e})()}}]);