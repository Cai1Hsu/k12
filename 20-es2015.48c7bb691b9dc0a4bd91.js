(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cVnc:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("mrSG"),i=n("RUQT"),r=n("nE/I"),a=n("qXBG"),l=n("TEn/"),s=n("LWQN"),d=n("fXoL"),c=n("3Pt+"),m=n("ofXK"),h=n("j7Is");const g=["myInput"];function u(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-row"),d["\u0275\u0275elementStart"](1,"ion-col",7),d["\u0275\u0275elementStart"](2,"ion-label",8),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-col"),d["\u0275\u0275elementStart"](5,"ionic5-star-rating",9,10),d["\u0275\u0275listener"]("ratingChanged",(function(n){d["\u0275\u0275restoreView"](e);const o=t.$implicit;return d["\u0275\u0275nextContext"](2).logRatingChange(n,o.id)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.name)}}function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275template"](1,u,7,1,"ion-row",6),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.the_rank_cataLog)}}let f=(()=>{class e{constructor(e,t,n,o){this.videoService=e,this.common=t,this.auth=n,this.modalController=o,this.comment=!1,this.onClosedData=new i.d}ngOnInit(){this.common.loadingPresent("\u52a0\u8f7d\u4e2d\u2026\u2026"),this.comment_button_name=this.reply?"\u56de\u590d\u8bc4\u8bba":"\u63d0\u4ea4\u8bc4\u8bba",this.loadRankCatalog(),this.common.loadingDismiss()}ngOnDestroy(){}logRatingChange(e,t){return Object(o.a)(this,void 0,void 0,(function*(){let n=!1,o=new i.b;o.rankId=t,o.rank=e,this.onClosedData.ranks?this.onClosedData.ranks.forEach(e=>{e.rankId==o.rankId&&(e.rank=o.rank,n=!0)}):this.onClosedData.ranks=[],n||this.onClosedData.ranks.push(o)}))}loadRankCatalog(){return Object(o.a)(this,void 0,void 0,(function*(){this.the_rank_cataLog=yield this.videoService.get_ranking_list()}))}onCommit(e){return Object(o.a)(this,void 0,void 0,(function*(){this.the_user=yield this.auth.get_user(),this.onClosedData.comments=e.value.content,this.onClosedData.videoId=this.videoId,this.onClosedData.comment_by={name:this.the_user.userName,id:this.the_user.userID},this.reply&&(this.onClosedData.commentId=this.commentId),yield this.modalController.dismiss(this.onClosedData)}))}onCancel(){return Object(o.a)(this,void 0,void 0,(function*(){yield this.modalController.dismiss()}))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](r.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](a.a),d["\u0275\u0275directiveInject"](l.ModalController))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-video-comments"]],viewQuery:function(e,t){var n;1&e&&(d["\u0275\u0275viewQuery"](l.IonInfiniteScroll,!0),d["\u0275\u0275viewQuery"](g,!0)),2&e&&(d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.infiniteScroll=n.first),d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.myInput=n.first))},inputs:{videoId:"videoId",reply:"reply",commentId:"commentId"},decls:13,vars:4,consts:[[3,"ngSubmit"],["form","ngForm"],["name","content","id","myInput","maxlength","50","cols","40","rows","3","placeholder","\u6211\u6765\u8bf4\u4e00\u8bf4","ngModel","","required","",3,"ngModel","ngModelChange"],[4,"ngIf"],["fill","clear","type","submit",1,"ion-float-right",3,"disabled"],["fill","clear",1,"ion-float-right",3,"click"],[4,"ngFor","ngForOf"],["size","5","size-md","",2,"padding-left","20px"],[2,"font-size","16px"],["required","","activeIcon","star","defaultIcon","star-outline","activeColor","#ffaa33","defaultColor","#aaaaaa","fontSize","18px","readonly","false","halfStar","false","rating","0",3,"ratingChanged"],["rating",""]],template:function(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-content"),d["\u0275\u0275elementStart"](1,"form",0,1),d["\u0275\u0275listener"]("ngSubmit",(function(){d["\u0275\u0275restoreView"](e);const n=d["\u0275\u0275reference"](2);return t.onCommit(n)})),d["\u0275\u0275elementStart"](3,"ion-row"),d["\u0275\u0275elementStart"](4,"ion-col"),d["\u0275\u0275elementStart"](5,"ion-textarea",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.question=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](6,p,2,1,"div",3),d["\u0275\u0275elementStart"](7,"ion-row"),d["\u0275\u0275elementStart"](8,"ion-col"),d["\u0275\u0275elementStart"](9,"ion-button",4),d["\u0275\u0275text"](10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"ion-button",5),d["\u0275\u0275listener"]("click",(function(){return t.onCancel()})),d["\u0275\u0275text"](12," \u53d6\u6d88 "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275reference"](2);d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngModel",t.question),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.reply),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("disabled",!e.valid),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.comment_button_name," ")}},directives:[l.IonContent,c["\u0275angular_packages_forms_forms_y"],c.NgControlStatusGroup,c.NgForm,l.IonRow,l.IonCol,l.IonTextarea,l.TextValueAccessor,c.MaxLengthValidator,c.NgControlStatus,c.NgModel,c.RequiredValidator,m.NgIf,l.IonButton,m.NgForOf,l.IonLabel,h.a],styles:["ion-textarea[_ngcontent-%COMP%]{--background:#f8f8ff;--padding-top:0px;--padding-start:10px;--padding-end:10px;--border-radius:10px;font-size:18px}ion-rating[_ngcontent-%COMP%]{--star-color:grey;--star-color-filled:orange}"]}),e})()},qqzZ:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),l=n("mrSG"),s=n("VYYF"),d=n("RUQT"),c=n("cVnc"),m=n("nE/I"),h=n("LWQN"),g=n("0QAI"),u=n("AytR"),p=n("8pq7"),f=n("wd/R"),v=n("fXoL"),y=n("e8h1");const I=["slides"];function _(e,t){1&e&&v["\u0275\u0275element"](0,"ion-back-button",11)}function S(e,t){1&e&&v["\u0275\u0275element"](0,"vg-time-display",16),2&e&&v["\u0275\u0275property"]("vgProperty","left")("vgFormat","mm:ss")}function C(e,t){1&e&&v["\u0275\u0275element"](0,"vg-time-display",16),2&e&&v["\u0275\u0275property"]("vgProperty","total")("vgFormat","mm:ss")}function x(e,t){1&e&&v["\u0275\u0275element"](0,"vg-mute")}function b(e,t){1&e&&v["\u0275\u0275element"](0,"vg-volume",17)}function E(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"vg-controls",12),v["\u0275\u0275element"](1,"vg-play-pause"),v["\u0275\u0275template"](2,S,1,2,"vg-time-display",13),v["\u0275\u0275elementStart"](3,"vg-scrub-bar"),v["\u0275\u0275element"](4,"vg-scrub-bar-current-time"),v["\u0275\u0275element"](5,"vg-scrub-bar-buffering-time"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275template"](6,C,1,2,"vg-time-display",13),v["\u0275\u0275template"](7,x,1,0,"vg-mute",7),v["\u0275\u0275template"](8,b,1,0,"vg-volume",14),v["\u0275\u0275element"](9,"vg-fullscreen",15),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"]();v["\u0275\u0275property"]("vgAutohide",!0)("vgAutohideTime",1.5),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngIf",!e.isLive),v["\u0275\u0275advance"](4),v["\u0275\u0275property"]("ngIf",!e.isLive),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",e.isLive),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",e.isLive)}}function O(e,t){if(1&e&&v["\u0275\u0275element"](0,"source",21),2&e){const e=t.$implicit;v["\u0275\u0275property"]("src",e.src,v["\u0275\u0275sanitizeUrl"])("type",e.type)}}function w(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"video",18,19),v["\u0275\u0275template"](2,O,1,2,"source",20),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275reference"](1),t=v["\u0275\u0275nextContext"]();v["\u0275\u0275property"]("vgMedia",e)("controls",t.controls),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngForOf",t.sources)}}function P(e,t){if(1&e&&v["\u0275\u0275element"](0,"video",22,23),2&e){const e=v["\u0275\u0275reference"](1),t=v["\u0275\u0275nextContext"]();v["\u0275\u0275property"]("vgMedia",e)("vgHls",t.sources[0].src)("controls",t.controls)}}function M(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"ion-card",30),v["\u0275\u0275elementStart"](1,"ion-card-content"),v["\u0275\u0275elementStart"](2,"ion-grid"),v["\u0275\u0275elementStart"](3,"ion-row"),v["\u0275\u0275elementStart"](4,"ion-col",31),v["\u0275\u0275text"](5," \u8bfe\u7a0b\u6807\u9898: "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"ion-col",32),v["\u0275\u0275text"](7),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](8,"ion-row"),v["\u0275\u0275elementStart"](9,"ion-col",31),v["\u0275\u0275text"](10," \u6388\u8bfe\u5b66\u5e74 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](11,"ion-col",32),v["\u0275\u0275text"](12),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](13,"ion-row"),v["\u0275\u0275elementStart"](14,"ion-col",31),v["\u0275\u0275text"](15," \u6388\u8bfe\u5e74\u7ea7 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](16,"ion-col",32),v["\u0275\u0275text"](17),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](18,"ion-row"),v["\u0275\u0275elementStart"](19,"ion-col",31),v["\u0275\u0275text"](20," \u6388\u8bfe\u6559\u5ba4 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](21,"ion-col",32),v["\u0275\u0275text"](22),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](23,"ion-row"),v["\u0275\u0275elementStart"](24,"ion-col",31),v["\u0275\u0275text"](25," \u6388\u8bfe\u6559\u5e08 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](26,"ion-col",32),v["\u0275\u0275text"](27),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](28,"ion-row"),v["\u0275\u0275elementStart"](29,"ion-col",31),v["\u0275\u0275text"](30," \u6388\u8bfe\u6559\u6750 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](31,"ion-col",32),v["\u0275\u0275text"](32),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](33,"ion-row"),v["\u0275\u0275elementStart"](34,"ion-col",31),v["\u0275\u0275text"](35," \u6388\u8bfe\u8bfe\u65f6 "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](36,"ion-col",32),v["\u0275\u0275text"](37),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"](2);v["\u0275\u0275advance"](7),v["\u0275\u0275textInterpolate1"](" ",e.the_video.name," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",e.year," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",e.grade," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",e.the_video.teachClass.classroom," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",e.the_video.teachClass.teacher_name," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",""==e.the_video.teachClass.book?"\u6682\u65e0":e.the_video.teachClass.book," "),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",e.period," ")}}function R(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"ion-item"),v["\u0275\u0275elementStart"](1,"ion-thumbnail",35),v["\u0275\u0275element"](2,"ion-img",36),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](3,"ion-label"),v["\u0275\u0275text"](4),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](5,"ion-note",37),v["\u0275\u0275elementStart"](6,"a",38),v["\u0275\u0275text"](7,"\u4e0b\u8f7d"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;v["\u0275\u0275advance"](4),v["\u0275\u0275textInterpolate1"](" ",e.name,""),v["\u0275\u0275advance"](2),v["\u0275\u0275propertyInterpolate"]("href",e.path,v["\u0275\u0275sanitizeUrl"])}}function A(e,t){1&e&&v["\u0275\u0275element"](0,"ion-img",39)}function k(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"ion-card",30),v["\u0275\u0275elementStart"](1,"ion-card-content"),v["\u0275\u0275elementStart"](2,"ion-list"),v["\u0275\u0275template"](3,R,8,2,"ion-item",33),v["\u0275\u0275elementEnd"](),v["\u0275\u0275template"](4,A,1,0,"ion-img",34),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"](2);v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("ngForOf",e.the_resource),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",!e.the_resource||0==e.the_resource.length)}}function T(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"ion-card",50),v["\u0275\u0275elementStart"](1,"ion-item",51),v["\u0275\u0275elementStart"](2,"ion-label",45),v["\u0275\u0275text"](3),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](4,"ion-card-content",52),v["\u0275\u0275text"](5),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;v["\u0275\u0275advance"](3),v["\u0275\u0275textInterpolate2"]("",e.comment_by.name," ",e.creation_time,""),v["\u0275\u0275advance"](2),v["\u0275\u0275textInterpolate1"](" ",e.comments,"\u4e86 ")}}function F(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-card",41),v["\u0275\u0275elementStart"](1,"ion-item"),v["\u0275\u0275elementStart"](2,"ion-thumbnail",43),v["\u0275\u0275element"](3,"img",44),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](4,"ion-label",45),v["\u0275\u0275text"](5),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"ion-card-content"),v["\u0275\u0275text"](7),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](8,"ion-item",46),v["\u0275\u0275elementStart"](9,"ion-button",47),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](e);const n=t.$implicit,o=v["\u0275\u0275nextContext"](3);return o.videoComment(o.the_video.id,n.id)})),v["\u0275\u0275element"](10,"ion-icon",48),v["\u0275\u0275text"](11,"\u56de\u590d "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275template"](12,T,6,3,"ion-card",49),v["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=v["\u0275\u0275nextContext"](3);v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("src",n.default_avatar,v["\u0275\u0275sanitizeUrl"]),v["\u0275\u0275advance"](2),v["\u0275\u0275textInterpolate2"]("",e.comment_by.name," ",e.creation_time,""),v["\u0275\u0275advance"](2),v["\u0275\u0275textInterpolate1"](" ",e.comments," "),v["\u0275\u0275advance"](5),v["\u0275\u0275property"]("ngForOf",e.reply)}}function j(e,t){1&e&&v["\u0275\u0275element"](0,"ion-img",39)}function N(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"ion-row",40),v["\u0275\u0275elementStart"](1,"ion-col",41),v["\u0275\u0275template"](2,F,13,5,"ion-card",42),v["\u0275\u0275template"](3,j,1,0,"ion-img",34),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"](2);v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngForOf",e.data_comment_List),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",!e.data_comment_List||0==e.data_comment_List.length)}}function D(e,t){1&e&&v["\u0275\u0275elementContainer"](0)}function L(e,t){1&e&&v["\u0275\u0275elementContainer"](0)}function V(e,t){1&e&&v["\u0275\u0275elementContainer"](0)}function z(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-grid"),v["\u0275\u0275template"](1,M,38,7,"ng-template",null,24,v["\u0275\u0275templateRefExtractor"]),v["\u0275\u0275template"](3,k,5,2,"ng-template",null,25,v["\u0275\u0275templateRefExtractor"]),v["\u0275\u0275template"](5,N,4,2,"ng-template",null,26,v["\u0275\u0275templateRefExtractor"]),v["\u0275\u0275elementStart"](7,"ion-slides",27,28),v["\u0275\u0275listener"]("ionSlideDidChange",(function(t){return v["\u0275\u0275restoreView"](e),v["\u0275\u0275nextContext"]().slideChanged(t)})),v["\u0275\u0275elementStart"](9,"ion-slide"),v["\u0275\u0275template"](10,D,1,0,"ng-container",29),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](11,"ion-slide"),v["\u0275\u0275template"](12,L,1,0,"ng-container",29),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](13,"ion-slide"),v["\u0275\u0275template"](14,V,1,0,"ng-container",29),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()}if(2&e){const e=v["\u0275\u0275reference"](2),t=v["\u0275\u0275reference"](4),n=v["\u0275\u0275reference"](6),o=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](7),v["\u0275\u0275property"]("options",o.slideOpts),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("ngTemplateOutlet",e),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngTemplateOutlet",t),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngTemplateOutlet",n)}}function H(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-infinite-scroll",53),v["\u0275\u0275listener"]("ionInfinite",(function(t){return v["\u0275\u0275restoreView"](e),v["\u0275\u0275nextContext"]().load_more_comments(t)})),v["\u0275\u0275element"](1,"ion-infinite-scroll-content",54),v["\u0275\u0275elementEnd"]()}}function B(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-refresher",55),v["\u0275\u0275listener"]("ionRefresh",(function(t){return v["\u0275\u0275restoreView"](e),v["\u0275\u0275nextContext"]().refresh(t)})),v["\u0275\u0275element"](1,"ion-refresher-content",56),v["\u0275\u0275elementEnd"]()}}function Q(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-toolbar",57),v["\u0275\u0275elementStart"](1,"ion-textarea",58),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](e);const t=v["\u0275\u0275nextContext"]();return t.videoComment(t.the_video.id,null)}))("ngModelChange",(function(t){return v["\u0275\u0275restoreView"](e),v["\u0275\u0275nextContext"]().msg=t})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()}if(2&e){const e=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngModel",e.msg)}}const q=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,r,a,l,s,c,m){this.storage=e,this.route=t,this.videoService=n,this.router=o,this.gestureCtrl=i,this.platform=r,this.common=a,this.modalController=l,this.alertController=s,this.statusBar=c,this.screenOrientation=m,this.ion_segment_data=0,this.data_comment_List=[],this.commentLoading=!0,this.commentNum=0,this.the_pay_status=!1,this.controls=!1,this.autoplay=!1,this.loop=!1,this.preload="auto",this.nativeFs=!0,this.default_avatar=u.a.default_avatar,this.isLive=!1,this.hasMore=!0,this.slideOpts={initialSlide:0,speed:400,autoHeight:!0},this.filter=new d.a,this.filter.page=1,this.filter.page_size=5,this.data_comment_List=[],this.fixSliderHeight()}overrideHardwareBackAction(e){this.fsAPI=this.api.fsAPI,this.nativeFs=this.fsAPI.nativeFullscreen;let t=this;e.detail.register(200,()=>Object(l.a)(this,void 0,void 0,(function*(){t.fsAPI.isFullscreen?(t._firstFullscreen=t.fsAPI.isFullscreen,this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT),t.fsAPI.toggleFullscreen()):window.history.back()})))}ngOnInit(){return Object(l.a)(this,void 0,void 0,(function*(){this.route.params.subscribe(e=>Object(l.a)(this,void 0,void 0,(function*(){yield this.common.loadingPresent("\u52a0\u8f7d\u4e2d\u2026\u2026"),yield this.playVideo(e.id),yield this.common.loadingDismiss()})))}))}ionViewWillEnter(){0!==this.ion_segment_data&&this.slider.slideTo(this.ion_segment_data)}ngAfterViewInit(){}setBitrate(e){this.vgHls.setBitrate(e)}playVideo(e){return Object(l.a)(this,void 0,void 0,(function*(){this.id=e,this.the_video=yield this.videoService.get_video_detail(e),this.the_video.play_url&&this.the_video.play_url.forEach(e=>{2==e.videoType&&(this.the_play_url=e.playUrl,this.sources=[{src:e.playUrl,type:"video/mp4"}]),3==e.videoType&&(this.isLive=!0,this.sources=[{src:e.playUrl,type:"hls"}])}),this.commentNum=this.the_video.statistics.num_of_comment,this.the_video.tag_groups.forEach(e=>{"\u5b66\u5e74"==e.name&&(this.year=e.tags[0].name),"\u5e74\u7ea7"==e.name&&(this.grade=e.tags[0].name)}),this.period=this.the_video.teachClass.startOn+"-"+f(this.the_video.teachClass.endOn).format("HH:mm:ss"),null!=this.the_video.major_actor.avatar_url&&""!=this.the_video.major_actor.avatar_url||(this.the_video.major_actor.avatar_url=u.a.default_avatar)}))}onPlayerReady(e){this.api=e,this.fsAPI=this.api.fsAPI,this.nativeFs=this.fsAPI.nativeFullscreen;let t=this;this.api.getDefaultMedia().subscriptions.ended.subscribe(()=>{this.api.getDefaultMedia().currentTime=0}),this.api.fsAPI.onChangeFullscreen.subscribe(e=>{if(e){if(t._firstFullscreen)return;const e=this.screenOrientation.ORIENTATIONS;this.screenOrientation.type!==e.PORTRAIT_PRIMARY&&this.screenOrientation.type!==e.PORTRAIT_SECONDARY&&this.screenOrientation.type!==e.PORTRAIT||(t._firstFullscreen=!0,console.log("LANDSCAPE_PRIMARY"),this.statusBar.hide(),this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE))}else{if(!t._firstFullscreen)return;const e=this.screenOrientation.ORIENTATIONS;this.screenOrientation.type!==e.LANDSCAPE_PRIMARY&&this.screenOrientation.type!==e.LANDSCAPE_SECONDARY&&this.screenOrientation.type!==e.LANDSCAPE||(t._firstFullscreen=!1,console.log("LANDSCAPE_PRIMARY"),this.statusBar.show(),this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)),console.log("cancelFullScreen")}})}onChangeNativeFs(e){this.fsAPI.nativeFullscreen=this.nativeFs,console.log("onChangeNativeFs",this.fsAPI.nativeFullscreen,this.nativeFs)}onSegmentChange(e){return Object(l.a)(this,void 0,void 0,(function*(){this.ion_segment_data=e.detail.value,yield this.slider.slideTo(this.ion_segment_data),1==this.ion_segment_data&&(this.common.loadingPresent("\u52a0\u8f7d\u4e2d\u2026\u2026"),this.the_resource=yield this.videoService.get_video_resource(this.id),this.common.loadingDismiss()),2==this.ion_segment_data&&(this.common.loadingPresent("\u52a0\u8f7d\u4e2d\u2026\u2026"),this.loadComments(this.id),this.common.loadingDismiss())}))}slideChanged(e){return Object(l.a)(this,void 0,void 0,(function*(){this.ion_segment_data=yield this.slider.getActiveIndex()}))}videoComment(e,t){return Object(l.a)(this,void 0,void 0,(function*(){let n=null!=t;const o=yield this.modalController.create({component:c.a,cssClass:n?"reply-model-css":"comment-model-css",componentProps:{videoId:e,commentId:t,reply:n},showBackdrop:!0,backdropDismiss:!0});return o.onDidDismiss().then(e=>Object(l.a)(this,void 0,void 0,(function*(){if(null==e.data)return;let t=e.data;if(null==t.commentId){let e=yield this.videoService.set_comments(t);if(console.log(e),"00000000-0000-0000-0000-000000000000"==e)return void this.common.presentToast("\u8bc4\u8bba\u6307\u6807\u4e0d\u80fd\u4e3a\u7a7a,\u6dfb\u52a0\u5931\u8d25","red","top");if(e){let n={id:e,comments:t.comments,comment_by:{name:t.comment_by.name,id:t.comment_by.id},creation_time:f(Date.now()).format("YYYY-MM-DD HH:mm:ss"),reply:null};++this.commentNum,yield this.common.presentToast("\u6dfb\u52a0\u8bc4\u8bba\u6210\u529f"),this.data_comment_List.splice(0,0,n)}else yield this.common.presentAlert("\u7cfb\u7edf\u7e41\u5fd9",null,"\u7cfb\u7edf\u7e41\u5fd9\u7a0d\u540e\u5728\u8bd5",["\u786e\u5b9a"])}else{let e={comments:t.comments,videoId:t.videoId,commentId:t.commentId,comment_by:{name:t.comment_by.name,id:t.comment_by.id}};if(yield this.videoService.set_comments_reply(e)){let n={id:"",comments:e.comments,comment_by:{name:t.comment_by.name,id:t.comment_by.id},creation_time:f(Date.now()).format("YYYY-MM-DD HH:mm:ss"),reply:null};this.data_comment_List.forEach(t=>Object(l.a)(this,void 0,void 0,(function*(){t.id===e.commentId&&(null==t.reply?(t.reply=[],t.reply.push(n)):t.reply.splice(0,0,n),yield this.common.presentToast("\u56de\u590d\u8bc4\u8bba\u6210\u529f"))})))}}}))),yield o.present()}))}loadComments(e,t){return Object(l.a)(this,void 0,void 0,(function*(){if(this.filter.id=e,this.the_resp_comments=yield this.videoService.get_comments(this.filter),this.the_resp_comments.count==this.data_comment_List.length)return this.toggleIonRefresher(),this.commentLoading=!1,this.hasMore=!1,null==t?void 0:(t.target.complete(),void(t.target.disabled=!0));this.the_resp_comments.data.forEach(e=>this.data_comment_List.push(e)),this.filter.page>0&&t&&t.target.complete(),this.the_resp_comments.count===this.data_comment_List.length&&(this.hasMore=!1,this.toggleInfiniteScroll()),this.toggleIonRefresher(),this.commentLoading=!1}))}load_more_comments(e){return Object(l.a)(this,void 0,void 0,(function*(){yield this.loadComments(this.id,e),this.hasMore&&this.filter.page++}))}refresh(e){return Object(l.a)(this,void 0,void 0,(function*(){this.data_comment_List=[],yield this.loadComments(this.id)}))}toggleIonRefresher(){this.IonRefresher.complete()}toggleInfiniteScroll(){this.ionInfiniteScroll.disabled=!this.ionInfiniteScroll.disabled}fixSliderHeight(){this.slideWidthChecker=setInterval(()=>{void 0!==this.slider&&this.slider.updateAutoHeight()},1e3)}ngOnDestroy(){clearInterval(this.slideWidthChecker)}}return e.\u0275fac=function(t){return new(t||e)(v["\u0275\u0275directiveInject"](y.b),v["\u0275\u0275directiveInject"](a.a),v["\u0275\u0275directiveInject"](m.a),v["\u0275\u0275directiveInject"](a.g),v["\u0275\u0275directiveInject"](r.GestureController),v["\u0275\u0275directiveInject"](r.Platform),v["\u0275\u0275directiveInject"](h.a),v["\u0275\u0275directiveInject"](r.ModalController),v["\u0275\u0275directiveInject"](r.AlertController),v["\u0275\u0275directiveInject"](s.a),v["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=v["\u0275\u0275defineComponent"]({type:e,selectors:[["app-video-player"]],viewQuery:function(e,t){var n;1&e&&(v["\u0275\u0275viewQuery"](I,!0),v["\u0275\u0275viewQuery"](r.IonInfiniteScroll,!0),v["\u0275\u0275viewQuery"](r.IonRefresher,!0),v["\u0275\u0275viewQuery"](p.d,!0)),2&e&&(v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.slider=n.first),v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.ionInfiniteScroll=n.first),v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.IonRefresher=n.first),v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.vgHls=n.first))},hostBindings:function(e,t){1&e&&v["\u0275\u0275listener"]("ionBackButton",(function(e){return t.overrideHardwareBackAction(e)}),!1,v["\u0275\u0275resolveDocument"])},decls:24,vars:13,consts:[["defaultHref","tabs",4,"ngIf"],[3,"onPlayerReady"],[3,"vgAutohide","vgAutohideTime",4,"ngIf"],["id","singleVideo","preload","auto","autoplay","true","poster","/assets/images/videos/poster.gif",3,"vgMedia","controls",4,"ngIf"],["id","singleVideo","reload","auto","autoplay","true","poster","/assets/images/videos/poster.gif","crossorigin","",3,"vgMedia","vgHls","controls",4,"ngIf"],["scrollable","true","mode","md","color","blue",3,"ngModel","ngModelChange","ionChange"],[3,"value"],[4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],["slot","fixed",3,"ionRefresh",4,"ngIf"],["id","footerToolbar","style"," position:fixed;bottom:0;z-index:20;--background:#f4f5f8",4,"ngIf"],["defaultHref","tabs"],[3,"vgAutohide","vgAutohideTime"],[3,"vgProperty","vgFormat",4,"ngIf"],["style","width: 40px;",4,"ngIf"],[2,"margin-right","0px"],[3,"vgProperty","vgFormat"],[2,"width","40px"],["id","singleVideo","preload","auto","autoplay","true","poster","/assets/images/videos/poster.gif",3,"vgMedia","controls"],["media",""],[3,"src","type",4,"ngFor","ngForOf"],[3,"src","type"],["id","singleVideo","reload","auto","autoplay","true","poster","/assets/images/videos/poster.gif","crossorigin","",3,"vgMedia","vgHls","controls"],["media","","vgHls","vgHls"],["content",""],["resource",""],["comment",""],["mode","md",3,"options","ionSlideDidChange"],["slides",""],[4,"ngTemplateOutlet"],[2,"width","100%"],["size","30%",2,"font-weight","bold"],["size","60%"],[4,"ngFor","ngForOf"],["src","assets/images/zanwushuju.png","style","max-width: 90%; max-height: 50%;margin:auto;",4,"ngIf"],["slot","start"],["src","assets/images/videos/file.png",2,"width","32px","height","32px"],["slot","end","color","Tertiary"],[3,"href"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"],[2,"padding-left","0","width","95%"],[2,"width","95%"],["style","width: 95%;",4,"ngFor","ngForOf"],["slot","start",1,"avatar"],[1,"avatar-image",3,"src"],[1,"title"],["lines","none"],["size","small","fill","clear","slot","start",3,"click"],["name","chatbubbles-outline"],["class","reply","style","width: 95%;",4,"ngFor","ngForOf"],[1,"reply",2,"width","95%"],[1,"name"],[1,"card-content"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u52a0\u8f7d\u66f4\u591a\u5185\u5bb9..."],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down-sharp","pullingText","\u4e0b\u62c9\u5237\u65b0\u8bc4\u8bba","refreshingSpinner","circles"],["id","footerToolbar",2,"position","fixed","bottom","0","z-index","20","--background","#f4f5f8"],["auto-grow","true","lines","none","type","text","rows","1","placeholder","\u6211\u6765\u8bf4\u4e00\u8bf4",2,"width","90%",3,"ngModel","click","ngModelChange"]],template:function(e,t){1&e&&(v["\u0275\u0275elementStart"](0,"ion-header"),v["\u0275\u0275template"](1,_,1,0,"ion-back-button",0),v["\u0275\u0275elementStart"](2,"vg-player",1),v["\u0275\u0275listener"]("onPlayerReady",(function(e){return t.onPlayerReady(e)})),v["\u0275\u0275element"](3,"vg-buffering"),v["\u0275\u0275element"](4,"vg-overlay-play"),v["\u0275\u0275template"](5,E,10,6,"vg-controls",2),v["\u0275\u0275template"](6,w,3,3,"video",3),v["\u0275\u0275template"](7,P,3,3,"video",4),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](8,"ion-content"),v["\u0275\u0275elementStart"](9,"ion-toolbar"),v["\u0275\u0275elementStart"](10,"ion-segment",5),v["\u0275\u0275listener"]("ngModelChange",(function(e){return t.ion_segment_data=e}))("ionChange",(function(e){return t.onSegmentChange(e)})),v["\u0275\u0275elementStart"](11,"ion-segment-button",6),v["\u0275\u0275elementStart"](12,"ion-label"),v["\u0275\u0275text"](13,"\u7b80\u4ecb"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](14,"ion-segment-button",6),v["\u0275\u0275elementStart"](15,"ion-label"),v["\u0275\u0275text"](16,"\u5b66\u4e60\u8d44\u6e90"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](17,"ion-segment-button",6),v["\u0275\u0275elementStart"](18,"ion-label"),v["\u0275\u0275text"](19),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275template"](20,z,15,4,"ion-grid",7),v["\u0275\u0275template"](21,H,2,0,"ion-infinite-scroll",8),v["\u0275\u0275template"](22,B,2,0,"ion-refresher",9),v["\u0275\u0275elementEnd"](),v["\u0275\u0275template"](23,Q,2,1,"ion-toolbar",10)),2&e&&(v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",!t.controls),v["\u0275\u0275advance"](4),v["\u0275\u0275property"]("ngIf",!t.controls),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",!t.isLive),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",t.isLive),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("ngModel",t.ion_segment_data),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("value",0),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("value",1),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("value",2),v["\u0275\u0275advance"](2),v["\u0275\u0275textInterpolate1"]("\u8bc4\u8bba(",t.commentNum,")"),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",t.the_video),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",2==t.ion_segment_data),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",2==t.ion_segment_data),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",2==t.ion_segment_data))},directives:[r.IonHeader,o.NgIf,p.r,p.g,p.s,r.IonContent,r.IonToolbar,r.IonSegment,r.SelectValueAccessor,i.NgControlStatus,i.NgModel,r.IonSegmentButton,r.IonLabel,r.IonBackButton,r.IonBackButtonDelegate,p.h,p.l,p.m,p.o,p.n,p.i,p.p,p.j,p.k,p.q,o.NgForOf,p.d,r.IonGrid,r.IonSlides,r.IonSlide,o.NgTemplateOutlet,r.IonCard,r.IonCardContent,r.IonRow,r.IonCol,r.IonList,r.IonItem,r.IonThumbnail,r.IonImg,r.IonNote,r.IonButton,r.IonIcon,r.IonInfiniteScroll,r.IonInfiniteScrollContent,r.IonRefresher,r.IonRefresherContent,r.IonTextarea,r.TextValueAccessor],styles:["ion-back-button[_ngcontent-%COMP%]{position:absolute;padding:10px;top:10px;left:10px;z-index:99999;color:#fff;cursor:pointer}vg-player[_ngcontent-%COMP%]{background-color:#000;margin:0;width:100%;height:100%}vg-player[_ngcontent-%COMP%]   vg-controls[_ngcontent-%COMP%]{padding-left:10px;transition:all 1s;font-size:small;color:#fff}video[_ngcontent-%COMP%]::-webkit-media-controls-start-playback-button{display:none}.line[_ngcontent-%COMP%]{border-top:1px solid grey}.title[_ngcontent-%COMP%]{font-size:9pt;color:grey}.name[_ngcontent-%COMP%], .reply[_ngcontent-%COMP%]{font-size:9pt;--background:#f8f8ff;--color:#000}.card-content[_ngcontent-%COMP%]{padding-top:0}.button-follow[_ngcontent-%COMP%]{width:70px;height:25px;font-size:12px}ion-col[_ngcontent-%COMP%]{font-size:14px;text-align:left}.ion-content-header[_ngcontent-%COMP%]{--background:red;--offset-bottom:10px;height:23px;--padding-bottom:0;--padding-end:0;--padding-start:0;--padding-top:0}"]}),e})()},{path:"video-comments",loadChildren:()=>n.e(260).then(n.bind(null,"o9Oa")).then(e=>e.VideoCommentsPageModule)}];let Y=(()=>{class e{}return e.\u0275mod=v["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(q)],a.i]}),e})();n.d(t,"VideoPlayerPageModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=v["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,i.FormsModule,r.IonicModule,Y,p.c,p.b,p.e,p.a,p.f]]}),e})()}}]);