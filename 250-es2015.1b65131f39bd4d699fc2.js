(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{TQnS:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),l=n("TEn/"),r=n("tyNb"),s=n("mrSG"),c=n("RUQT"),a=n("nE/I"),d=n("fXoL");function m(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-item-sliding",null,8),d["\u0275\u0275elementStart"](2,"ion-item"),d["\u0275\u0275elementStart"](3,"ion-thumbnail",0),d["\u0275\u0275elementStart"](4,"ion-img",9),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).open(n)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"ion-label",10),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).open(n)})),d["\u0275\u0275elementStart"](6,"h3"),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"p"),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"p"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"ion-item-options"),d["\u0275\u0275elementStart"](12,"ion-button",11),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.index,i=t.$implicit,o=d["\u0275\u0275reference"](1);return d["\u0275\u0275nextContext"](2).deleteData(n,i,o)})),d["\u0275\u0275element"](13,"ion-icon",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("src",e.coverURL),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" ",e.title," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",e.createTime," ")}}function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",13),d["\u0275\u0275text"](1," ---\u6211\u662f\u6709\u5e95\u7ebf\u7684--- "),d["\u0275\u0275elementEnd"]())}function u(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275elementStart"](1,"ion-list"),d["\u0275\u0275template"](2,m,14,3,"ion-item-sliding",4),d["\u0275\u0275template"](3,f,2,0,"p",5),d["\u0275\u0275elementStart"](4,"ion-infinite-scroll",6),d["\u0275\u0275listener"]("ionInfinite",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().load_more(t)})),d["\u0275\u0275element"](5,"ion-infinite-scroll-content",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.videos),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!e.hasMore)}}function p(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275element"](1,"ion-img",14),d["\u0275\u0275elementEnd"]())}const h=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.videoService=t,this.noData=!1,this.videos=[],this.hasMore=!0,this.filter=new c.c,this.restore_filter()}restore_filter(){return Object(s.a)(this,void 0,void 0,(function*(){this.filter.page=1,this.filter.page_size=16}))}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.videoInfo=yield this.videoService.get_collection_by_user(this.filter),this.videos=this.videoInfo.data,0===this.videoInfo.count&&(this.noData=!0)}))}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,(function*(){}))}open(e){this.router.navigate(["/video-player",{id:e.id}])}load_more(e){return Object(s.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(s.a)(this,void 0,void 0,(function*(){this.filter.page+=1,this.videoInfo=yield this.videoService.get_collection_by_user(this.filter),console.log("\u4e0a\u6ed1\u52a0\u8f7d"),this.videos=this.videos.concat(this.videoInfo.data),e.target.complete(),this.videoInfo.count===this.videos.length&&(e.target.disabled=!0,this.hasMore=!1)})),500)}))}deleteData(e,t,n){n.close(),this.videoService.delete_collection(t.id).then(t=>{this.videos.splice(e,1)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](r.g),d["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-collection"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](l.IonInfiniteScroll,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.infiniteScroll=n.first)},decls:9,vars:2,consts:[["slot","start"],["defaultHref","tabs"],["scrollY","true",1,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],["style","font-size: x-small; text-align: center;",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u66f4\u591a..."],["slide",""],[2,"width","120px","height","70px",3,"src","click"],[2,"padding-left","50px","padding-top","15px",3,"click"],["color","danger","expand","full",2,"width","15%","height","90%",3,"click"],["slot","icon-only","name","trash"],[2,"font-size","x-small","text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header"),d["\u0275\u0275elementStart"](1,"ion-toolbar"),d["\u0275\u0275elementStart"](2,"ion-buttons",0),d["\u0275\u0275element"](3,"ion-back-button",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-title"),d["\u0275\u0275text"](5," \u770b\u8bfe\u6536\u85cf "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-content",2),d["\u0275\u0275template"](7,u,6,2,"div",3),d["\u0275\u0275template"](8,p,2,0,"div",3),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngIf",t.videos),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.noData||!t.videos||0===t.videos.length))},directives:[l.IonHeader,l.IonToolbar,l.IonButtons,l.IonBackButton,l.IonBackButtonDelegate,l.IonTitle,l.IonContent,i.NgIf,l.IonList,i.NgForOf,l.IonInfiniteScroll,l.IonInfiniteScrollContent,l.IonItemSliding,l.IonItem,l.IonThumbnail,l.IonImg,l.IonLabel,l.IonItemOptions,l.IonButton,l.IonIcon],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.i.forChild(h)],r.i]}),e})();n.d(t,"CollectionPageModule",(function(){return I}));let I=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,l.IonicModule,v]]}),e})()}}]);