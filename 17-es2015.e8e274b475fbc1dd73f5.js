(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{H6xx:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return c}));var s=n("PyTI");class o{}class i extends s.a{constructor(){super(...arguments),this.avatarsize="120"}}class a{}class r{}class l extends s.a{}class d{}class c{constructor(){this.totalPerson="0",this.actualPerson="0",this.leavePerson="0",this.sickPerson="0"}}},UcIy:function(e,t,n){"use strict";n.r(t);var s=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),r=n("mrSG"),l=n("26ZW"),d=n("jMEw"),c=n("H6xx"),m=n("LWQN"),h=n("fXoL"),p=n("e8h1");function u(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",15),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"](2).back()})),h["\u0275\u0275element"](1,"ion-icon",16),h["\u0275\u0275elementEnd"]()}}function v(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",17),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"](2).forward()})),h["\u0275\u0275element"](1,"ion-icon",18),h["\u0275\u0275elementEnd"]()}}function g(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-slide"),h["\u0275\u0275elementStart"](1,"h5"),h["\u0275\u0275text"](2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"p",19),h["\u0275\u0275text"](4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=h["\u0275\u0275nextContext"](2);h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](e.name),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](n.userName)}}function f(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275elementStart"](1,"ion-item",4),h["\u0275\u0275elementStart"](2,"ion-label",5),h["\u0275\u0275text"](3,"\u73ed\u7ea7"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-item",4),h["\u0275\u0275template"](5,u,2,0,"div",6),h["\u0275\u0275template"](6,v,2,0,"div",7),h["\u0275\u0275elementStart"](7,"ion-slides",8),h["\u0275\u0275listener"]("ionSlideDidChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().slideChange(t)})),h["\u0275\u0275template"](8,g,5,2,"ion-slide",9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"ion-item",4),h["\u0275\u0275elementStart"](10,"ion-grid"),h["\u0275\u0275elementStart"](11,"ion-row"),h["\u0275\u0275elementStart"](12,"ion-col",10),h["\u0275\u0275elementStart"](13,"ion-label",11),h["\u0275\u0275text"](14,"\u5e94\u5230\u4eba\u6570"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](15,"ion-input",12),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveModel.totalPerson=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](16,"ion-col",10),h["\u0275\u0275elementStart"](17,"ion-label",11),h["\u0275\u0275text"](18,"\u5b9e\u5230\u4eba\u6570"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](19,"ion-input",12),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveModel.actualPerson=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"ion-row"),h["\u0275\u0275elementStart"](21,"ion-col",10),h["\u0275\u0275elementStart"](22,"ion-label",11),h["\u0275\u0275text"](23,"\u4e8b\u5047\u4eba\u6570"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](24,"ion-input",12),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveModel.leavePerson=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"ion-col",10),h["\u0275\u0275elementStart"](26,"ion-label",11),h["\u0275\u0275text"](27,"\u75c5\u5047\u4eba\u6570"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](28,"ion-input",12),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveModel.sickPerson=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"ion-item",4),h["\u0275\u0275elementStart"](30,"ion-grid"),h["\u0275\u0275elementStart"](31,"ion-row"),h["\u0275\u0275elementStart"](32,"ion-col",13),h["\u0275\u0275elementStart"](33,"ion-label",11),h["\u0275\u0275text"](34,"\u5907\u6ce8"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](35,"ion-textarea",14),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveModel.remark=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("ngIf",0!=e.selectIndex),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",e.selectIndex!=e.adminClassList.length-1),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngForOf",e.adminClassList),h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("ngModel",e.saveModel.totalPerson),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("ngModel",e.saveModel.actualPerson),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("ngModel",e.saveModel.leavePerson),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("ngModel",e.saveModel.sickPerson),h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("ngModel",e.saveModel.remark)}}function M(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"div",20),h["\u0275\u0275element"](2,"img",21),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-footer",22),h["\u0275\u0275elementStart"](1,"ion-button",23),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().saveReport()})),h["\u0275\u0275text"](2,"\u63d0\u4ea4"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("disabled",!(e.adminClassList.length>0))}}const x=[{path:"",component:(()=>{class e{constructor(e,t,n,s,o,i,a){this.osrv=e,this.ymsrv=t,this.storage=n,this.pickerController=s,this.common=o,this.router=i,this.location=a,this.adminClassList=[],this.the_records=[],this.options=[],this.selectedClassName="",this.userName="",this.saveModel=new c.g,this.selectIndex=0,this.showEmpty=!1}ngOnInit(){this.getTeacherAdminClassList(),this.slider=document.getElementById("ion-slides")}getTeacherAdminClassList(){return Object(r.a)(this,void 0,void 0,(function*(){this.user=yield this.storage.get("USER_INFO"),this.userName=this.user.userName;let e="",t=(yield this.ymsrv.get_current_semester(this.user.serialNo).then(t=>Object(r.a)(this,void 0,void 0,(function*(){0==t.code&&(e=t.data[0].serialNo,this.saveModel.semesterSerialNo=e,this.saveModel.semesterName=t.data[0].name)}))),yield this.osrv.get_teacherAdminClasses(this.user.userCode,e));if(0==t.code){if(!t.data||t.data.length<=0)return yield this.common.presentToast("\u4f60\u6ca1\u6709\u5173\u8054\u7684\u884c\u653f\u73ed\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u529f\u80fd","red","top"),void(this.showEmpty=!0);this.showEmpty=!1,this.the_records=t.data}this.the_records.length>0&&this.the_records.forEach(e=>{this.adminClassList=this.adminClassList.concat(e.klasses)}),this.adminClassList.length>0&&(this.adminClassList.forEach(e=>{this.options.push({text:e.name,value:e.serialNo,selected:!1})}),this.saveModel.classSerialNo=this.adminClassList[0].serialNo,this.saveModel.className=this.adminClassList[0].name,this.saveModel.eduYearSerialNo=this.adminClassList[0].eduYearSerialNo,this.saveModel.eduYearName=this.adminClassList[0].eduYearName)}))}slideChange(e){return Object(r.a)(this,void 0,void 0,(function*(){this.slider.getActiveIndex().then(e=>{this.selectIndex=e,this.saveModel.classSerialNo=this.adminClassList[e].serialNo,this.saveModel.className=this.adminClassList[e].name,this.saveModel.eduYearSerialNo=this.adminClassList[e].eduYearSerialNo,this.saveModel.eduYearName=this.adminClassList[e].eduYearName,this.saveModel.totalPerson="0",this.saveModel.actualPerson="0",this.saveModel.leavePerson="0",this.saveModel.sickPerson="0",this.saveModel.remark=""})}))}back(){return Object(r.a)(this,void 0,void 0,(function*(){this.slider.slidePrev()}))}forward(){return Object(r.a)(this,void 0,void 0,(function*(){this.slider.slideNext()}))}saveReport(){return Object(r.a)(this,void 0,void 0,(function*(){if(yield this.common.loadingPresent("\u6b63\u5728\u63d0\u4ea4..."),!(this.saveModel.totalPerson&&this.saveModel.actualPerson&&this.saveModel.leavePerson&&this.saveModel.sickPerson&&this.saveModel.remark&&""!=this.saveModel.remark&&null!=this.saveModel.remark))return yield this.common.presentToast("\u4eba\u6570\u6216\u5907\u6ce8\u4e0d\u5141\u8bb8\u4e3a\u7a7a","red","top"),void(yield this.common.loadingDismiss());if(NaN==parseInt(this.saveModel.totalPerson)||parseInt(this.saveModel.totalPerson)<0||NaN==parseInt(this.saveModel.actualPerson)||parseInt(this.saveModel.actualPerson)<0||NaN==parseInt(this.saveModel.leavePerson)||parseInt(this.saveModel.leavePerson)<0||NaN==parseInt(this.saveModel.sickPerson)||parseInt(this.saveModel.sickPerson)<0)return yield this.common.presentToast("\u8bf7\u786e\u4fdd\u4eba\u6570\u586b\u5199\u7684\u5747\u4e3a0\u6216\u6b63\u6574\u6570","red","top"),void(yield this.common.loadingDismiss());if(0==parseInt(this.saveModel.totalPerson))return yield this.common.presentToast("\u5e94\u5230\u4eba\u6570\u4e0d\u80fd\u4e3a0","red","top"),void(yield this.common.loadingDismiss());if(!(Number.isInteger(parseInt(this.saveModel.totalPerson))&&Number.isInteger(parseInt(this.saveModel.actualPerson))&&Number.isInteger(parseInt(this.saveModel.leavePerson))&&Number.isInteger(parseInt(this.saveModel.sickPerson))))return yield this.common.presentToast("\u8bf7\u786e\u4fdd\u4eba\u6570\u586b\u5199\u7684\u5747\u4e3a0\u6216\u6b63\u6574\u6570","red","top"),void(yield this.common.loadingDismiss());if(parseInt(this.saveModel.totalPerson)<parseInt(this.saveModel.actualPerson)||parseInt(this.saveModel.totalPerson)<parseInt(this.saveModel.leavePerson)||parseInt(this.saveModel.totalPerson)<parseInt(this.saveModel.sickPerson))return yield this.common.presentToast("\u5e94\u5230\u4eba\u6570\u4e0d\u80fd\u5c0f\u4e8e\u540e\u9762\u4efb\u4f55\u4e00\u9879\u7684\u4eba\u6570","red","top"),void(yield this.common.loadingDismiss());if(parseInt(this.saveModel.totalPerson)==parseInt(this.saveModel.actualPerson)&&(parseInt(this.saveModel.leavePerson)>0||parseInt(this.saveModel.sickPerson)>0))return yield this.common.presentToast("\u5e94\u5230\u5b9e\u5230\u4eba\u6570\u76f8\u540c\u65f6\uff0c\u5176\u4ed6\u9879\u53ea\u80fd\u4e3a0","red","top"),this.saveModel.leavePerson="0",this.saveModel.sickPerson="0",void(yield this.common.loadingDismiss());if(parseInt(this.saveModel.totalPerson)>parseInt(this.saveModel.actualPerson)&&parseInt(this.saveModel.leavePerson)+parseInt(this.saveModel.sickPerson)>parseInt(this.saveModel.totalPerson)-parseInt(this.saveModel.actualPerson))return yield this.common.presentToast("\u4e8b\u5047\u4eba\u6570\u548c\u75c5\u5047\u4eba\u6570\u4e4b\u548c\u4e0e\u7f3a\u52e4\u603b\u4eba\u6570\u4e0d\u7b26\uff0c\u8bf7\u68c0\u67e5","red","top"),void(yield this.common.loadingDismiss());if(this.saveModel.remark.length>250)return yield this.common.presentToast("\u5907\u6ce8\u4e0d\u80fd\u8d85\u8fc7250\u4e2a\u5b57\u7b26","red","top"),void(yield this.common.loadingDismiss());let e=yield this.osrv.save_teacherReport(this.saveModel);0==e.code?(yield this.common.presentToast("\u63d0\u4ea4\u6210\u529f","green","top"),yield this.common.loadingDismiss()):(yield this.common.presentToast("\u4fdd\u5b58\u5931\u8d25\uff1a"+e.msg,"red","top"),yield this.common.loadingDismiss())}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](l.a),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](p.b),h["\u0275\u0275directiveInject"](i.PickerController),h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](a.g),h["\u0275\u0275directiveInject"](s.Location))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-report-student"]],decls:10,vars:3,consts:[["slot","start"],["defaultHref","tabs"],[4,"ngIf"],["class","ion-no-border","style","text-align: center;",4,"ngIf"],["lines","none"],[2,"font-size","14px","color","#8C8C8C"],["class","admin-class admin-class-icon-left",3,"click",4,"ngIf"],["class","admin-class admin-class-icon-right",3,"click",4,"ngIf"],["id","ion-slides",1,"label-class",3,"ionSlideDidChange"],[4,"ngFor","ngForOf"],["size","6"],[1,"person-count-title"],[1,"input-number",3,"ngModel","ngModelChange"],["size","12"],["placeholder","\u8bf7\u8f93\u5165\u5907\u6ce8",1,"input-number","input-remark",3,"ngModel","ngModelChange"],[1,"admin-class","admin-class-icon-left",3,"click"],["name","caret-back-outline"],[1,"admin-class","admin-class-icon-right",3,"click"],["name","caret-forward-outline"],[1,"teacher"],["slot","fixed",2,"text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"],[1,"ion-no-border",2,"text-align","center"],["color","primary",2,"width","90%","margin-bottom","20px",3,"disabled","click"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar"),h["\u0275\u0275elementStart"](2,"ion-buttons",0),h["\u0275\u0275element"](3,"ion-back-button",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-title"),h["\u0275\u0275text"](5,"\u6668\u5348\u665a\u68c0"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-content"),h["\u0275\u0275template"](7,f,36,8,"ion-list",2),h["\u0275\u0275template"](8,M,3,0,"div",2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](9,I,3,1,"ion-footer",3)),2&e&&(h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("ngIf",!t.showEmpty),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.showEmpty),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",!t.showEmpty))},directives:[i.IonHeader,i.IonToolbar,i.IonButtons,i.IonBackButton,i.IonBackButtonDelegate,i.IonTitle,i.IonContent,s.NgIf,i.IonList,i.IonItem,i.IonLabel,i.IonSlides,s.NgForOf,i.IonGrid,i.IonRow,i.IonCol,i.IonInput,i.TextValueAccessor,o.NgControlStatus,o.NgModel,i.IonTextarea,i.IonIcon,i.IonSlide,i.IonFooter,i.IonButton],styles:[".label-class[_ngcontent-%COMP%]{background:#f6f6f6;height:80px;border-radius:6px;width:100%}.admin-class[_ngcontent-%COMP%]{position:absolute;display:inline-block;z-index:10001}.admin-class-name[_ngcontent-%COMP%]{float:left;margin-left:16px;margin-top:16px}.admin-class-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:PingFang SC;font-weight:700;line-height:18px;color:#000}.admin-class-name[_ngcontent-%COMP%]   p.nj[_ngcontent-%COMP%]{font-size:16px}.admin-class-name[_ngcontent-%COMP%]   p.teacher[_ngcontent-%COMP%]{font-size:14px}.admin-class-icon-right[_ngcontent-%COMP%]{margin-right:16px;right:0}.admin-class-icon-left[_ngcontent-%COMP%]{left:0}.person-count-title[_ngcontent-%COMP%]{font-size:14px;font-family:PingFang SC;font-weight:400;line-height:20px;color:#8c8c8c}.input-number[_ngcontent-%COMP%]{background:#f6f6f6;opacity:1;border-radius:6px;margin-top:9px;padding-left:10px!important;font-size:14px}.input-remark[_ngcontent-%COMP%]{height:90px}ion-grid[_ngcontent-%COMP%]{margin-left:-9px}.swiper-slide[_ngcontent-%COMP%]{display:block;text-align:left;padding-left:20px}.nj[_ngcontent-%COMP%]{font-size:16px}.teacher[_ngcontent-%COMP%]{font-size:14px;margin-top:-10px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(x)],a.i]}),e})();n.d(t,"ReportStudentPageModule",(function(){return P}));let P=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.CommonModule,o.FormsModule,i.IonicModule,C]]}),e})()}}]);