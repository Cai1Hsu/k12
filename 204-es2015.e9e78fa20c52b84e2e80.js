(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{rxYH:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),l=n("26ZW"),d=n("LWQN"),s=n("fXoL");function m(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"div",8),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]().index;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t+1," ")}}function f(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]().index;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t+1," ")}}function u(t,e){if(1&t){const t=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-item",4),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](t);const n=e.$implicit;return s["\u0275\u0275nextContext"](2).nav(n)})),s["\u0275\u0275template"](1,m,2,1,"div",5),s["\u0275\u0275template"](2,f,2,1,"div",6),s["\u0275\u0275text"](3," \xa0 \xa0 "),s["\u0275\u0275elementStart"](4,"ion-label"),s["\u0275\u0275elementStart"](5,"h3"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"h3"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-label",7),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=e.index;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",0==n),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n>0),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](t.name),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.no),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.score)}}function p(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"ion-list"),s["\u0275\u0275template"](1,u,11,5,"ion-item",3),s["\u0275\u0275elementEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.teach_data)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,n){this.osrv=t,this.router=e,this.comm=n}ngOnInit(){this.init()}init(){return Object(c.a)(this,void 0,void 0,(function*(){let t=yield this.comm.loadingPresent("\u6b63\u5728\u5904\u7406...");yield this.osrv.get_teacher_rank().then(t=>{this.teach_data=t.data}),t.dismiss()}))}nav(t){return Object(c.a)(this,void 0,void 0,(function*(){this.router.navigate(["/features/teacher-capability/report/teacher",{id:t.id}])}))}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](a.g),s["\u0275\u0275directiveInject"](d.a))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["app-rank"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","tabs"],[4,"ngIf"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],["class","first",4,"ngIf"],["class","last",4,"ngIf"],["slot","end",2,"text-align","right","color","#0099FF"],[1,"first"],[1,"last"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-title"),s["\u0275\u0275text"](5,"\u6559\u5e08\u8bc4\u4ef7\u6392\u540d"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-content"),s["\u0275\u0275template"](7,p,2,1,"ion-list",2),s["\u0275\u0275elementEnd"]()),2&t&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",e.teach_data))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,o.NgIf,r.IonList,o.NgForOf,r.IonItem,r.IonLabel],styles:[".first[_ngcontent-%COMP%]{background:#f40}.first[_ngcontent-%COMP%], .last[_ngcontent-%COMP%]{width:30px;height:30px;text-align:center;line-height:30px;border-radius:50%;color:#fff}.last[_ngcontent-%COMP%]{background:#4bb2ff}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.i.forChild(g)],a.i]}),t})();var h=n("Ql/B");n.d(e,"RankPageModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.CommonModule,i.FormsModule,r.IonicModule,I,h.a]]}),t})()}}]);