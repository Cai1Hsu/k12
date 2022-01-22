(window.webpackJsonp = window.webpackJsonp || [])
.push([[271], {
    y8qK: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("ofXK"),
            r = i("3Pt+"),
            s = i("TEn/"),
            o = i("tyNb"),
            a = i("mrSG"),
            d = i("Npln"),
            l = i("wd/R"),
            h = i("qXBG"),
            c = i("jMEw"),
            u = i("LWQN"),
            m = i("26ZW"),
            f = i("B7Rs"),
            p = i("FAH8"),
            y = i("tk/3"),
            v = i("AytR"),
            _ = i("te5A"),
            b = i("h2Q0"),
            I = i("fXoL"),
            j = i("90iM");
        const w = [{
            path: "",
            component: (() => {
                class e {
                    constructor(e, t, i, n, r, s, o, a, h, c, u) {
                        this.route = e, this.auth = t, this.ymsrv = i, this.transfer = n, this.file = r, this.platform = s, this.comm = o, this.osrv = a, this.pickController = h, this.fileOpener = c, this.utility = u, this.the_filter = new d.a, this.the_eduyear = [], this.fileTransfer = this.transfer.create(), e.paramMap.subscribe(e => {
                            this.the_filter.the_date = l()
                                .format("YYYY-MM-DD"), e.has("teacherid") && (this.the_filter.teacherid = e.get("teacherid")), e.has("studentid") && (this.the_filter.studentid = e.get("studentid"))
                        })
                    }
                    ngOnInit() {
                        this.init()
                    }
                    init() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            this.user = yield this.auth.get_user(), yield this.initSemester(), this.isStudent = this.the_filter.studentid && "" != this.the_filter.studentid, !0 === this.isStudent ? yield this.initStudent() : yield this.initTeacher(), this.platform.is("ios") || this.utility.checkPermission(), yield this.file.createDir(this.file.dataDirectory, v.a.root_directory, !0)
                        }))
                    }
                    initTeacher() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let e = yield this.osrv.get_teacher(this.the_filter.teacherid);
                            0 == e.code && (this.the_eduyear = e.data.grades, this.fileName = e.data.name)
                        }))
                    }
                    initStudent() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let e = yield this.osrv.get_student(this.the_filter.studentid);
                            0 == e.code && (this.the_eduyear = [e.data.grade], this.fileName = e.data.name)
                        }))
                    }
                    initSemester() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let e = yield this.ymsrv.get_current_semester(this.user.serialNo);
                            0 == e.code && e.data && 0 != e.data.length && (this.the_semester = e.data[0])
                        }))
                    }
                    down() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if(0 !== this.the_eduyear.length)
                                if(this.the_eduyear.length > 1) {
                                    let e = [],
                                        t = [];
                                    this.the_eduyear.forEach(e => {
                                            t.push({
                                                text: e.name,
                                                value: e.serialNo
                                            })
                                        }), e.push({
                                            name: "1",
                                            options: t
                                        }), (yield this.pickController.create({
                                            buttons: [{
                                                role: "cancel",
                                                text: "\u53d6\u6d88",
                                                handler: () => {}
                                            }, {
                                                text: "\u786e\u5b9a",
                                                handler: e => {
                                                    this.download(this.the_eduyear.find(t => t.serialNo == e[1].value))
                                                }
                                            }],
                                            columns: e
                                        }))
                                        .present()
                                } else yield this.download(this.the_eduyear[0]);
                            else this.comm.presentToast("\u6570\u636e\u9519\u8bef\uff01")
                        }))
                    }
                    download(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let t = "";
                                const i = new y.f({
                                    fromObject: {
                                        semester: this.the_semester.serialNo,
                                        eduyear: e.serialNo,
                                        teacherId: this.the_filter.teacherid || "",
                                        student: this.the_filter.studentid || ""
                                    }
                                });
                                let n = v.a.ym_endpoint + v.a.schedule_flow + "/weektable/print?" + i.toString();
                                let r = yield this.auth.get_token();
                                var xhr = new XMLHttpRequest();
                                xhr.open('GET', n, true);
                                xhr.setRequestHeader("Authorization","Bearer "+s);
                                xhr.responseType = 'blob';
                                xhr.onload = function () {
                                    if (this.status == 200) {
                                        var blob = this.response;
                                        var a = document.createElement('a');
                                        a.href = URL.createObjectURL(blob);
                                        a.download = "WeekTable.pdf";
                                        a.click();
                                        window.URL.revokeObjectURL(url);
                                    }else{
                                        this.comm.presentToast("请求失败，请重试或到github.com/cai1hsu/k12提issue");
                                    }
                                };
                                // some fucking wired problem raised
                                // the response is proper but it wont download the file
                                // like the one in 81-es2015.6e2948d47cabaf444193.js
                                // it should be fixed now
                                xhr.send();
                                this.comm.presentToast("课表应该在5秒内开始下载，如果没有，请到github.com/cai1hsu/k12提issue");
                            } catch(t) {
                                this.comm.presentToast("\u4e0b\u8f7d\u5931\u8d25,\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01")
                            }
                        }))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(I["\u0275\u0275directiveInject"](o.a), I["\u0275\u0275directiveInject"](h.a), I["\u0275\u0275directiveInject"](c.a), I["\u0275\u0275directiveInject"](f.a), I["\u0275\u0275directiveInject"](p.a), I["\u0275\u0275directiveInject"](s.Platform), I["\u0275\u0275directiveInject"](u.a), I["\u0275\u0275directiveInject"](m.a), I["\u0275\u0275directiveInject"](s.PickerController), I["\u0275\u0275directiveInject"](_.a), I["\u0275\u0275directiveInject"](b.a))
                }, e.\u0275cmp = I["\u0275\u0275defineComponent"]({
                    type: e,
                    selectors: [["app-display-timetable"]],
                    decls: 11,
                    vars: 1,
                    consts: [["slot", "start"], ["defaultHref", "tabs"], ["slot", "end"], [3, "click"], [3, "filter"]],
                    template: function(e, t) {
                        1 & e && (I["\u0275\u0275elementStart"](0, "ion-header"), I["\u0275\u0275elementStart"](1, "ion-toolbar"), I["\u0275\u0275elementStart"](2, "ion-buttons", 0), I["\u0275\u0275element"](3, "ion-back-button", 1), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementStart"](4, "ion-title"), I["\u0275\u0275text"](5, "\u8bfe\u8868"), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementStart"](6, "ion-buttons", 2), I["\u0275\u0275elementStart"](7, "ion-button", 3), I["\u0275\u0275listener"]("click", (function() {
                            return t.down()
                        })), I["\u0275\u0275text"](8, "\u4e0b\u8f7d"), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementEnd"](), I["\u0275\u0275elementStart"](9, "ion-content"), I["\u0275\u0275element"](10, "app-list-timetable-one-day", 4), I["\u0275\u0275elementEnd"]()), 2 & e && (I["\u0275\u0275advance"](10), I["\u0275\u0275property"]("filter", t.the_filter))
                    },
                    directives: [s.IonHeader, s.IonToolbar, s.IonButtons, s.IonBackButton, s.IonBackButtonDelegate, s.IonTitle, s.IonButton, s.IonContent, j.a],
                    styles: [""]
                }), e
            })()
        }];
        let g = (() => {
            class e {}
            return e.\u0275mod = I["\u0275\u0275defineNgModule"]({
                type: e
            }), e.\u0275inj = I["\u0275\u0275defineInjector"]({
                factory: function(t) {
                    return new(t || e)
                },
                imports: [[o.i.forChild(w)], o.i]
            }), e
        })();
        var k = i("Ql/B");
        i.d(t, "DisplayTimetablePageModule", (function() {
            return S
        }));
        let S = (() => {
            class e {}
            return e.\u0275mod = I["\u0275\u0275defineNgModule"]({
                type: e
            }), e.\u0275inj = I["\u0275\u0275defineInjector"]({
                factory: function(t) {
                    return new(t || e)
                },
                imports: [[n.CommonModule, r.FormsModule, s.IonicModule, g, k.a]]
            }), e
        })()
    }
}]);