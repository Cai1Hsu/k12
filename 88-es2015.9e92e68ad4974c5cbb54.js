(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"6/gD":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("mrSG"),n=i("AytR"),a=i("a/9d"),o=i("fXoL");let r=(()=>{class t{constructor(t){this.camera=t,this.photos=[],this.photo_info=[]}add_new(){return Object(s.a)(this,void 0,void 0,(function*(){const t={quality:n.a.quality,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA,correctOrientation:!1,saveToPhotoAlbum:!1,targetWidth:n.a.image_width,targetHeight:n.a.image_height};var e=yield this.camera.getPicture(t);this.photo_info.push({base64:"data:image/jpeg;base64,"+e,ext:".jpg",name:"",url:""})}))}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](a.a))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Uwo+":function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),n=i("3Pt+"),a=i("TEn/"),o=i("tyNb"),r=i("mrSG"),l=(i("xR2p"),i("26ZW")),h=i("m6cF"),d=i("KCVp"),c=i("qXBG"),m=i("AytR"),_=i("cq/f"),u=i("LWQN"),p=i("D+jN"),f=i("Z7kU"),y=i("fXoL"),v=i("j/sa"),g=i("DL8m");function b(t,e){1&t&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275text"](1,"\u540d\u79f0\u89c6\u56fe"),y["\u0275\u0275elementContainerEnd"]())}function w(t,e){1&t&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275text"](1,"\u5934\u50cf\u89c6\u56fe"),y["\u0275\u0275elementContainerEnd"]())}function x(t,e){1&t&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275text"](1,"\u5ea7\u4f4d\u89c6\u56fe"),y["\u0275\u0275elementContainerEnd"]())}function C(t,e){if(1&t){const t=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"ion-col",13),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](t),y["\u0275\u0275nextContext"]().swipe_class("prev")})),y["\u0275\u0275element"](1,"ion-icon",14),y["\u0275\u0275elementEnd"]()}}function I(t,e){if(1&t){const t=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"ion-col",13),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](t),y["\u0275\u0275nextContext"]().swipe_class("next")})),y["\u0275\u0275element"](1,"ion-icon",15),y["\u0275\u0275elementEnd"]()}}function T(t,e){if(1&t){const t=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"app-list-students",16),y["\u0275\u0275listener"]("selected",(function(e){return y["\u0275\u0275restoreView"](t),y["\u0275\u0275nextContext"]().select_student(e)}))("seatSetting",(function(e){return y["\u0275\u0275restoreView"](t),y["\u0275\u0275nextContext"]().seatSetting(e)})),y["\u0275\u0275elementEnd"]()}if(2&t){const t=y["\u0275\u0275nextContext"]();y["\u0275\u0275property"]("the_students",t.the_teachclass_details?t.the_teachclass_details.students:null)("view_type",t.view_type)("seat",t.the_seat)}}function S(t,e){if(1&t){const t=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"app-list-indicators",17),y["\u0275\u0275listener"]("selected",(function(e){return y["\u0275\u0275restoreView"](t),y["\u0275\u0275nextContext"]().select_indicators(e)})),y["\u0275\u0275elementEnd"]()}if(2&t){const t=y["\u0275\u0275nextContext"]();y["\u0275\u0275property"]("the_filter",t.the_indicator_filter)("hasCheckbox",!0)}}const j=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n,a,o,r,l){this.route=t,this.osrv=e,this.auth=i,this.toast=s,this.router=n,this.loadingCtrl=a,this.comm=o,this.cache=r,this.actionSheetController=l,this.the_model=new d.b,this.the_select_student=new Array,this.the_indicator=new Array,this.is_submit=!1,this.judge=!0,this.view_type="list",this.the_select_student=[],this.route.paramMap.subscribe(t=>{this.build=t.get("build"),this.floor=t.get("floor"),this.the_date=t.get("date"),this.the_num_of_day=t.get("num_of_day"),this.edu=t.get("edu")})}ngOnInit(){this.route.paramMap.subscribe(t=>Object(r.a)(this,void 0,void 0,(function*(){this.loadingControl=yield this.comm.loadingPresent(),this.the_indicator_filter=new h.a,this.id=t.get("id"),this.byType=t.get("type"),this.classroomid=t.get("classroomid"),this.classroomname=t.get("classroomname"),"inclass"==t.get("type")?(this.the_model.type=1,this.the_indicator_filter.type=1):(this.the_model.type=3,this.the_indicator_filter.type=3),this.the_model.ClassTeacherName=t.get("class_teacher_name"),null!=this.the_model.ClassTeacherName&&null!=this.the_model.ClassTeacherName&&""!=this.the_model.ClassTeacherName||(this.the_model.ClassTeacherName="\u65e0"),this.the_model.NumOfDay=t.get("num_of_day"),this.the_model.NumOfDayName=t.get("num_of_day_name"),this.the_model.Course=t.get("name"),this.the_model.DateTime=t.get("date"),this.init()})))}init(){return Object(r.a)(this,void 0,void 0,(function*(){let t=yield this.auth.get_user();this.the_model.By=t.accountName+"_"+t.userCode,this.the_model.ByUserName=t.userName,this.the_model.TeacherClasssId=0,yield this.load(this.id)}))}ionViewDidEnter(){this.the_select_student=[],this.init()}swipe_class(t){return Object(r.a)(this,void 0,void 0,(function*(){var e=yield this.cache.get("moral_daytimetable"),i=new d.d,s=yield this.cache.get("moral_current_index"),n=yield this.cache.get("moral_daytimefilter");if("next"==t){if((s+=1)>=e.length){var a=yield this.cache.get("moral_current_semester");n.PageIndex+=1;var o=(yield this.osrv.get_moral_time_table(n,a)).data;if(0==o.length)return this.the_select_student=[],this.init(),void this.comm.presentToast("\u5df2\u7ecf\u5230\u4e86\u6700\u540e\u4e00\u4e2a\u6559\u5ba4\u4e86\uff01");e=e.concat(o)}i=e[s]}else{if(0==s)return this.the_select_student=[],this.init(),void(yield this.comm.presentToast("\u5df2\u7ecf\u6ca1\u6709\u5176\u4ed6\u6559\u5ba4\u4e86\uff01"));i=e[s-=1]}let r;yield this.cache.set("moral_daytimetable",e),yield this.cache.set("moral_current_index",s),yield this.cache.set("moral_daytimefilter",n),r=yield this.auth.get_user(),this.loadingControl=yield this.comm.loadingPresent(),this.the_indicator_filter=new h.a,this.id=i.id,"inclass"==this.byType?(this.the_model.type=1,this.the_indicator_filter.type=1):(this.the_model.type=3,this.the_indicator_filter.type=3),this.classroomid=i.classroomid,this.classroomname=i.classroom_name,this.the_model.ClassTeacherName=i.teacher_name||null!=i.teacher_name||null!=i.teacher_name?i.teacher_name:"\u65e0",this.the_model.By=r.accountName,this.the_model.ByUserName=r.userName,this.the_model.NumOfDay=i.num_of_day,this.the_model.NumOfDayName=i.num_of_day_name,this.the_model.TeacherClasssId=0,this.the_model.Course=i.name,this.the_model.DateTime=i.the_date,yield this.init(),this.loadingControl.dismiss()}))}load(t){return Object(r.a)(this,void 0,void 0,(function*(){this.osrv.get_teachclass_details({id:t,num_of_day:this.the_num_of_day,date:this.the_date}).then(t=>{this.the_teachclass_details=t.data,this.the_teachclass_details.students.forEach(t=>{""!=t.avatar&&null!=t.avatar||(t.avatar=m.a.default_avatar),0!==t.seat&&t.seat?(t.seatNo=t.seat.toString().padStart(2,"0"),t.isShow=!0):t.isShow=!1}),this.the_teachclass_details.students=this.the_teachclass_details.students.sort((t,e)=>t.seat-e.seat),"seat"===this.view_type&&this.switchSeat()}),this.loadingControl.dismiss()}))}select_student(t){return Object(r.a)(this,void 0,void 0,(function*(){t.forEach(t=>{t.selected?this.the_select_student.push(t):this.the_select_student.splice(this.the_select_student.indexOf(t),1)})}))}select_indicators(t){this.the_indicator=[],t.selected?this.the_indicator.push(t):this.the_indicator.splice(this.the_indicator.indexOf(t),1)}submit(t){return Object(r.a)(this,void 0,void 0,(function*(){let e=[];if(this.the_select_student.forEach(t=>{t.isAppraisal&&e.push(t.name)}),e.length>0){let i=e.join("\u3001");this.comm.presentAlert("\u63d0\u793a",null,"\u5b66\u751f\uff1a"+i+"\u5728\u672c\u8282\u8bfe\u5df2\u6709\u8003\u8bc4\u6570\u636e\uff0c\u8bf7\u786e\u8ba4\u662f\u5426\u91cd\u590d\u8003\u8bc4\uff1f",[{text:"\u5ffd\u7565\uff0c\u7ee7\u7eed\u8bb0\u5f55",handler:()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.submitNext(t)}))},{text:"\u53d6\u6d88",handler:t=>{this.the_model.id=[],this.the_select_student=[],this.the_indicator=[],this.uploader.the_records=[],this.init()}}])}else yield this.submitNext(t)}))}submitNext(t){return Object(r.a)(this,void 0,void 0,(function*(){if(this.is_submit)return void this.comm.presentToast("\u4f60\u5df2\u63d0\u4ea4\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u63d0\u4ea4\uff01");if(this.is_submit=!0,0==this.the_select_student.length)return this.comm.presentToast("\u8bf7\u9009\u62e9\u9700\u8981\u8003\u8bc4\u7684\u5b66\u751f\uff01"),void(this.is_submit=!1);if(0==this.the_indicator.length)return this.comm.presentToast("\u8bf7\u9009\u62e9\u9700\u8981\u8003\u8bc4\u7684\u6307\u6807\uff01"),void(this.is_submit=!1);var t=yield this.comm.loadingPresent();let e=new Array,i=new Array,s=new Array;console.log(this.the_select_student),this.the_select_student.forEach(t=>{e.push(t.id)}),this.the_indicator.forEach(t=>{i.push(t.id)}),this.uploader.the_records.forEach(t=>{let e=new d.c;e.Name=t.name,e.Url=t.url,s.push(e)}),this.the_model.student_ids=e,this.the_model.id=i,this.the_model.Photo_Urls=s,this.the_model.Where=" ";var n=yield this.osrv.create_charactor(this.the_model);if(t.dismiss(),0===n.code){this.is_submit=!1;var a=[{text:"\u505c\u7559\u5728\u5f53\u524d\u9875\u9762",handler:t=>{this.the_model.id=[],this.the_select_student=[],this.the_indicator=[],this.uploader.the_records=[],this.init()}},{text:"\u8fd4\u56de\u81f3\u5217\u8868",handler:t=>{this.router.navigate("inclass"==this.byType?["/character/inclass"]:["/character/patrol",{date:this.the_date,num_of_day:this.the_num_of_day,floor:this.floor,build:this.build,type:this.byType,eduYear:this.edu}],{replaceUrl:!0,skipLocationChange:!0})}}];"patrol"==this.byType&&(a.push({text:"\u4e0a\u4e00\u4e2a\u6559\u5ba4",handler:t=>Object(r.a)(this,void 0,void 0,(function*(){this.the_model.id=[],this.the_select_student=[],this.the_indicator=[],this.uploader.the_records=[],yield this.swipe_class("prev")}))}),a.push({text:"\u4e0b\u4e00\u4e2a\u6559\u5ba4",handler:t=>Object(r.a)(this,void 0,void 0,(function*(){this.the_model.id=[],this.the_select_student=[],this.the_indicator=[],this.uploader.the_records=[],yield this.swipe_class("next")}))})),this.comm.presentAlert("\u8003\u8bc4\u6210\u529f\uff01",null,"\u5b66\u751f\u8003\u8bc4\u6210\u529f\uff0c\u8bf7\u95ee\u60a8\u8981\u7ee7\u7eed\u64cd\u4f5c\u5417\uff1f",a)}else this.is_submit=!1,this.comm.presentAlert("\u8003\u8bc4\u5931\u8d25",null,n.msg,[{text:"\u786e\u5b9a"}])}))}changeViewType(){return Object(r.a)(this,void 0,void 0,(function*(){if(!this.the_teachclass_details||!this.the_teachclass_details.students||0==this.the_teachclass_details.students.length)return void this.comm.presentToast("\u6682\u65e0\u5b66\u751f\uff0c\u65e0\u6cd5\u5207\u6362\u89c6\u56fe\uff01");const t=yield this.actionSheetController.create({buttons:[{text:"\u540d\u79f0\u89c6\u56fe",handler:()=>{this.view_type="list"}},{text:"\u5934\u50cf\u89c6\u56fe",handler:()=>{this.view_type="avatar"}},{text:"\u5ea7\u4f4d\u89c6\u56fe",handler:()=>{this.switchSeat()}},{text:"\u53d6\u6d88",role:"cancel",handler:()=>{}}]});yield t.present()}))}switchSeat(){var t,e;return Object(r.a)(this,void 0,void 0,(function*(){if(this.the_teachclass_details.students.filter(t=>!t.seat).length>0)return void this.comm.presentToast("\u8be5\u6559\u5b66\u73ed\u4e0b\u6709\u5b66\u751f\u672a\u5206\u914d\u5ea7\u4f4d\uff0c\u8bf7\u5148\u5b89\u6392\u5b66\u751f\u5ea7\u4f4d!");let i=yield this.osrv.get_moral_seat_setting(this.the_teachclass_details.id);if(-3===i.code)(yield this.comm.presentModal(f.a,"adjustment-model-css",{teachClassId:this.the_teachclass_details.id,total:this.the_teachclass_details.num,x:null===(t=this.the_seat)||void 0===t?void 0:t.x,y:null===(e=this.the_seat)||void 0===e?void 0:e.y})).onDidDismiss().then(t=>{t&&t.data?(this.the_seat=t.data,this.view_type="seat"):this.view_type="list"});else{if(0!==i.code)return void this.comm.presentToast(i.msg);this.the_seat=i.data,this.view_type="seat"}}))}seatSetting(t){return Object(r.a)(this,void 0,void 0,(function*(){let t=yield this.osrv.get_moral_seat_setting(this.the_teachclass_details.id);0==t.code?(yield this.comm.presentModal(f.a,"adjustment-model-css",{teachClassId:t.data.teachClassId,total:this.the_teachclass_details.num,x:t.data.x,y:t.data.y})).onDidDismiss().then(t=>{t&&t.data&&(this.the_seat=t.data,this.view_type="seat")}):this.comm.presentToast(t.msg)}))}}return t.\u0275fac=function(e){return new(e||t)(y["\u0275\u0275directiveInject"](o.a),y["\u0275\u0275directiveInject"](l.a),y["\u0275\u0275directiveInject"](c.a),y["\u0275\u0275directiveInject"](a.ToastController),y["\u0275\u0275directiveInject"](o.g),y["\u0275\u0275directiveInject"](a.LoadingController),y["\u0275\u0275directiveInject"](u.a),y["\u0275\u0275directiveInject"](p.a),y["\u0275\u0275directiveInject"](a.ActionSheetController))},t.\u0275cmp=y["\u0275\u0275defineComponent"]({type:t,selectors:[["app-patrol-stu"]],viewQuery:function(t,e){var i;1&t&&y["\u0275\u0275viewQuery"](_.a,!0),2&t&&y["\u0275\u0275queryRefresh"](i=y["\u0275\u0275loadQuery"]())&&(e.uploader=i.first)},decls:30,vars:10,consts:[["slot","start"],["defaultHref","tabs"],["slot","end"],[1,"color-blue","font-18",3,"click"],[1,"iconfont","iconArrowDouble3-24px","font-24","color-blue"],[4,"ngIf"],["color","primary",2,"text-align","center"],["size","2",3,"click",4,"ngIf"],[2,"text-align","center"],["selection_mode","multiple",3,"the_students","view_type","seat","selected","seatSetting",4,"ngIf"],[1,"mt20"],[3,"the_filter","hasCheckbox","selected",4,"ngIf"],["expand","block","color","primary",3,"click"],["size","2",3,"click"],["name","caret-back-outline"],["name","caret-forward-outline"],["selection_mode","multiple",3,"the_students","view_type","seat","selected","seatSetting"],[3,"the_filter","hasCheckbox","selected"]],template:function(t,e){1&t&&(y["\u0275\u0275elementStart"](0,"ion-header"),y["\u0275\u0275elementStart"](1,"ion-toolbar"),y["\u0275\u0275elementStart"](2,"ion-buttons",0),y["\u0275\u0275element"](3,"ion-back-button",1),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](4,"ion-title"),y["\u0275\u0275text"](5),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](6,"ion-buttons",2),y["\u0275\u0275elementStart"](7,"ion-button",3),y["\u0275\u0275listener"]("click",(function(){return e.changeViewType()})),y["\u0275\u0275element"](8,"i",4),y["\u0275\u0275template"](9,b,2,0,"ng-container",5),y["\u0275\u0275template"](10,w,2,0,"ng-container",5),y["\u0275\u0275template"](11,x,2,0,"ng-container",5),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](12,"ion-toolbar",6),y["\u0275\u0275elementStart"](13,"ion-grid"),y["\u0275\u0275elementStart"](14,"ion-row"),y["\u0275\u0275template"](15,C,2,0,"ion-col",7),y["\u0275\u0275elementStart"](16,"ion-col"),y["\u0275\u0275elementStart"](17,"div",8),y["\u0275\u0275text"](18),y["\u0275\u0275element"](19,"br"),y["\u0275\u0275text"](20),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](21,I,2,0,"ion-col",7),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](22,"ion-content"),y["\u0275\u0275template"](23,T,1,3,"app-list-students",9),y["\u0275\u0275element"](24,"div",10),y["\u0275\u0275template"](25,S,1,2,"app-list-indicators",11),y["\u0275\u0275element"](26,"div",10),y["\u0275\u0275element"](27,"app-upload-picture"),y["\u0275\u0275elementStart"](28,"ion-button",12),y["\u0275\u0275listener"]("click",(function(t){return e.submit(t)})),y["\u0275\u0275text"](29," \u63d0\u4ea4 "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&t&&(y["\u0275\u0275advance"](5),y["\u0275\u0275textInterpolate"](e.the_model.Course),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngIf","list"===e.view_type),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf","avatar"===e.view_type),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf","seat"===e.view_type),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngIf","patrol"==e.byType),y["\u0275\u0275advance"](3),y["\u0275\u0275textInterpolate1"](" \u6559\u5ba4\uff1a",e.classroomname," "),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate1"](" \u4efb\u8bfe\u6559\u5e08\uff1a",e.the_model.ClassTeacherName," "),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf","patrol"==e.byType),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngIf",e.the_teachclass_details),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngIf",e.the_indicator_filter))},directives:[a.IonHeader,a.IonToolbar,a.IonButtons,a.IonBackButton,a.IonBackButtonDelegate,a.IonTitle,a.IonButton,s.NgIf,a.IonGrid,a.IonRow,a.IonCol,a.IonContent,_.a,a.IonIcon,v.a,g.a],styles:[".class_manager_divider[_ngcontent-%COMP%]{color:#949393}.ion_item_divider[_ngcontent-%COMP%]{border-top:1px solid #dbdbdb}ion-icon[_ngcontent-%COMP%]{font-size:32px;--ionicon-stroke-width:16px}.icon[_ngcontent-%COMP%]{width:2em;height:2em;vertical-align:-.5em;fill:currentColor;overflow:hidden;float:right;margin-right:1rem}"]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=y["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.i.forChild(j)],o.i]}),t})();var N=i("Ql/B");i.d(e,"PatrolStuPageModule",(function(){return O}));let O=(()=>{class t{}return t.\u0275mod=y["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[s.CommonModule,n.FormsModule,a.IonicModule,E,N.a]]}),t})()},xR2p:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("PyTI");class n extends s.a{}}}]);