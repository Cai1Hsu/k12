(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{uRIx:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),a=n("mrSG"),c=n("BLr9"),d=n("Cfvw"),l=n("LWQN"),m=n("jHbz"),u=n("uW3d"),h=n("fXoL");const p=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o){this.audio=e,this.qrScanner=t,this.csrv=n,this.router=i,this.comm=o}ngOnDestroy(){this.qrScanner.pausePreview(),this.qrScanner.destroy()}ngOnInit(){this.init()}close(){return Object(a.a)(this,void 0,void 0,(function*(){history.back()}))}init(){return Object(a.a)(this,void 0,void 0,(function*(){this.audio.preload("scanbeep","assets/sounds/qr_code_beep.mp3"),1==(yield this.qrScanner.prepare()).authorized&&(yield this.startScanner())}))}startScanner(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.qrScanner.show(),yield this.qrScanner.resumePreview(),document.getElementById("scanner-image").style.display="block",window.document.querySelector("html").classList.add("cameraView"),this.the_scanSub=this.qrScanner.scan().subscribe(e=>{this.audio.play("scanbeep"),Object(d.a)(this.initData(e))})}))}stopScanner(){return Object(a.a)(this,void 0,void 0,(function*(){document.getElementById("scanner-image").style.display="none",window.document.querySelector("html").classList.remove("cameraView"),this.the_scanSub.unsubscribe(),yield this.qrScanner.hide(),yield this.qrScanner.pausePreview()}))}initData(e){return Object(a.a)(this,void 0,void 0,(function*(){yield this.stopScanner(),yield this.comm.loadingPresent();let t=yield this.csrv.valid_capital_qrcode(e);if(yield this.comm.loadingDismiss(),0==t.code){if(!t.data)return this.the_qrcode=e,void(document.getElementById("message").style.display="block");document.getElementById("message").style.display="none",this.the_id=t.data,setTimeout(()=>{document.getElementById("btnShow").click()},500)}else this.comm.presentToast(t.msg)}))}show(){return Object(a.a)(this,void 0,void 0,(function*(){this.router.navigate(["features/capital/list/detail",{id:this.the_id}],{replaceUrl:!0})}))}add(){return Object(a.a)(this,void 0,void 0,(function*(){this.router.navigate(["features/capital/list/create",{qrcode:this.the_qrcode}],{replaceUrl:!0})}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](c.a),h["\u0275\u0275directiveInject"](u.a),h["\u0275\u0275directiveInject"](s.g),h["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-scanner"]],decls:19,vars:0,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","tabs"],["id","scanner-image",1,"scanner-image",2,"display","none"],["src","assets/images/scanner.gif"],[1,"title"],["id","message",1,"message",2,"display","none"],[1,"add",3,"click"],["id","btnShow",2,"display","none",3,"click"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header",0),h["\u0275\u0275elementStart"](1,"ion-toolbar"),h["\u0275\u0275elementStart"](2,"ion-buttons",1),h["\u0275\u0275element"](3,"ion-back-button",2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"ion-title"),h["\u0275\u0275text"](5,"\u626b\u63cf\u4e8c\u7ef4\u7801"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-content"),h["\u0275\u0275elementStart"](7,"div",3),h["\u0275\u0275element"](8,"img",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"div",5),h["\u0275\u0275text"](10,"\u626b\u63cf\u4e8c\u7ef4\u7801"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"div",6),h["\u0275\u0275elementStart"](12,"p"),h["\u0275\u0275text"](13," \u672a\u67e5\u8be2\u5230\u8be5\u8d44\u4ea7\u4fe1\u606f\uff0c\u662f\u5426"),h["\u0275\u0275element"](14,"br"),h["\u0275\u0275elementStart"](15,"a",7),h["\u0275\u0275listener"]("click",(function(){return t.add()})),h["\u0275\u0275text"](16,"\u767b\u8bb0\u4e3a\u65b0\u8d44\u4ea7"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](17,"? "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"a",8),h["\u0275\u0275listener"]("click",(function(){return t.show()})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent],styles:[".cameraView[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{--background:rgba(0,0,0,0.35)!important;background:rgba(0,0,0,.35)!important}.close[_ngcontent-%COMP%]{top:1rem;left:1rem;font-size:1.5rem}.close[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{position:absolute;color:#fff}.title[_ngcontent-%COMP%]{text-align:center;width:100%;font-size:.9rem;bottom:30%}.scanner-image[_ngcontent-%COMP%]{position:absolute;width:80%;left:5%;transform:translate(5%)}.message[_ngcontent-%COMP%]{position:absolute;text-align:center;width:100%;color:#fff;font-size:.9rem;bottom:10%}.message[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{color:#ffdc64;font-size:1.2rem;text-decoration:underline}.message[_ngcontent-%COMP%]   .choose[_ngcontent-%COMP%]{width:40px;height:40px;background:#000;border-radius:50%;opacity:.5;display:inline-block;color:#fff;line-height:44px;font-size:1.2rem}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.i.forChild(p)],s.i]}),e})();var g=n("Ql/B");n.d(t,"ScannerPageModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,f,g.a]]}),e})()}}]);