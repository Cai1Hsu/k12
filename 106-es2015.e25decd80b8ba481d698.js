(window.webpackJsonp = window.webpackJsonp || []).push([
    [106],
    {
      lu3c: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ofXK"),
          r = n("3Pt+"),
          s = n("TEn/"),
          o = n("tyNb"),
          a = n("mrSG"),
          l = n("qXBG"),
          d = n("LWQN"),
          c = n("AytR"),
          u = n("A7F3"),
          m = n("26ZW"),
          h = (n("ed2z"), n("itXk")),
          g = n("jMEw"),
          p = n("uJRU"),
          f = n("Oh4o"),
          v = n("fXoL"),
          y = n("e8h1");
        const I = [
          {
            path: "",
            component: (() => {
              class e {
                constructor(e, t, n, i, r, s, o, a, l, d, c) {
                  (this.authService = e),
                    (this.router = t),
                    (this.route = n),
                    (this.storage = i),
                    (this.comm = r),
                    (this.appVersion = s),
                    (this.JPushPlugin = o),
                    (this.JanalyticsPlugin = a),
                    (this.osrv = l),
                    (this.ymsrv = d),
                    (this.ausrv = c),
                    (this.msg = ""),
                    (this.the_agreenment = !1);
                }
                ngOnInit() {
                  this.route.url.subscribe((e) => {
                    this.authService.clear();
                  });
                }
                login(e) {
                  return Object(a.a)(this, void 0, void 0, function* () {
                    if (true /*this.agreement*/) {
                      var t = yield this.comm.loadingPresent(
                          "登录中......"
                        ),
                        n = yield this.authService.login(e.value);
                      if (0 == n.code) {
                        var i = n.data.accessToken;
                        if (n.data && i && null != i && null != i) {
                          let e;
                          var r = yield this.authService.user_info(i);
                          if (0 == r.code) {
                            if (
                              ((e = r.data),
                              this.storage.set(
                                "UNIQUE_IDENTIFIER",
                                r.data.uniqueIdentifier
                              ),
                              e.roles &&
                                e.roles.filter((e) => 1 == e.userType).length > 0) && false
                            )
                              return (
                                t.dismiss(),
                                void this.comm.presentToast(
                                  "APP不允许超级管理员登录！"
                                )
                              );
                            var s =
                              e.roles &&
                              e.roles.length > 0 &&
                              e.roles.filter(
                                (e) => 1 == e.userType || 2 == e.userType
                              ).length > 0;
                            if (
                              false &&
                              !s &&
                              ("" == e.mobileNo ||
                                null == e.mobileNo ||
                                null == e.mobileNo)
                            )
                              return (
                                t.dismiss(),
                                void (yield this.comm.presentAlert(
                                  "温馨提示",
                                  null,
                                  "您还未绑定手机，使用APP前，请先绑定手机",
                                  [
                                    {
                                      text: "好的,去设置",
                                      handler: (t) => {
                                        this.router.navigate([
                                          "bind-phone",
                                          { userid: e.userID, token: i },
                                        ]);
                                      },
                                    },
                                  ]
                                ))
                              );
                            if (false && !0 === e.isNeedResetPwd)
                              return (
                                t.dismiss(),
                                void (yield this.comm.presentAlert(
                                  "温馨提示",
                                  null,
                                  "帐号安全等级低，请修改密码！",
                                  [
                                    {
                                      text: "好的,去修改",
                                      handler: (t) => {
                                        this.router.navigate([
                                          "update-password",
                                          { userid: e.userID, token: i },
                                        ]);
                                      },
                                    },
                                  ]
                                ))
                              );
                            var o =
                                e.roles &&
                                e.roles.length > 0 &&
                                e.roles.filter((e) => 7 == e.userType).length > 0,
                              l =
                                e.roles &&
                                e.roles.length > 0 &&
                                e.roles.filter((e) => 4 == e.userType).length > 0;
                            let n;
                            (n = s
                              ? e.roles.filter(
                                  (e) => 1 == e.userType || 2 == e.userType
                                )[0]
                              : o
                              ? e.roles.filter((e) => 7 == e.userType)[0]
                              : l
                              ? e.roles.filter((e) => 4 == e.userType)[0]
                              : e.roles[0]),
                              yield this.storage.remove("USER_ROLE"),
                              yield this.storage.set("USER_ROLE", n),
                              (e.avatarUrl &&
                                "" !== e.avatarUrl &&
                                null != e.avatarUrl &&
                                null != e.avatarUrl) ||
                                (e.avatarUrl = c.a.default_avatar),
                              yield this.storage.set("ACCESS_TOKEN", i),
                              yield this.storage.set("USER_INFO", e),
                              yield this.storage.set("OPEN_NOTIFICATION", !0);
                            try {
                              this.JPushPlugin.initJPush(),
                                this.JPushPlugin.resume(),
                                setTimeout(
                                  () =>
                                    Object(a.a)(
                                      this,
                                      void 0,
                                      void 0,
                                      function* () {
                                        var t = [
                                          e.serialNo,
                                          this.getUserCode(e.userID),
                                        ];
                                        if (
                                          (1 ==
                                            (yield this.authService.is_all_teacher()) &&
                                            (t.push("teacher" + e.serialNo),
                                            t.push(this.getUserCode(e.userCode))),
                                          1 ==
                                            (yield this.authService.is_student()))
                                        ) {
                                          t.push("student" + e.serialNo),
                                            t.push(this.getUserCode(e.userCode));
                                          var n =
                                            yield this.osrv.get_student_full(
                                              e.userCode
                                            );
                                          0 === n.code &&
                                            (n.data &&
                                              "" != n.data.classCode &&
                                              null != n.data.classCode &&
                                              t.push(
                                                this.getUserCode(n.data.classCode)
                                              ),
                                            n.data &&
                                              "" != n.data.gradeCode &&
                                              null != n.data.gradeCode &&
                                              t.push(
                                                this.getUserCode(n.data.gradeCode)
                                              ));
                                          var i =
                                            yield this.ymsrv.get_teach_class({
                                              studentid: e.userCode,
                                            });
                                          0 === i.code &&
                                            i.data.length > 0 &&
                                            i.data.forEach((e) => {
                                              t.push(e.id);
                                            });
                                        }
                                        this.JPushPlugin.setTags(t);
                                      }
                                    ),
                                  2e4
                                ),
                                setTimeout(() => {}, 3e4);
                            } catch (d) {}
                            this.JanalyticsPlugin.login(!0),
                              this.ausrv.check(),
                              this.router.navigate(["tabs"], {
                                replaceUrl: !0,
                                skipLocationChange: !0,
                              });
                          } else
                            this.comm.presentToast(r.msg),
                              this.JanalyticsPlugin.login(!1);
                        } else
                          this.comm.presentToast(n.msg),
                            this.JanalyticsPlugin.login(!1);
                      } else
                        this.comm.presentToast(n.msg),
                          this.JanalyticsPlugin.login(!1);
                      t.dismiss();
                    } else this.comm.presentToast("请先阅读并同意“数字校园用户隐私协议”");
                  });
                }
                getUserCode(e) {
                  return e.replace(/-/gi, "");
                }
                open_agreement() {
                  return Object(a.a)(this, void 0, void 0, function* () {
                    (this.the_agreenment = !0),
                      this.router.navigate(["/login/agreement"]);
                  });
                }
                findPassword() {
                  this.router.navigate(["find-password"]);
                }
              }
              return (
                (e.ɵfac = function (t) {
                  return new (t || e)(
                    v["ɵɵdirectiveInject"](l.a),
                    v["ɵɵdirectiveInject"](o.g),
                    v["ɵɵdirectiveInject"](o.a),
                    v["ɵɵdirectiveInject"](y.b),
                    v["ɵɵdirectiveInject"](d.a),
                    v["ɵɵdirectiveInject"](p.a),
                    v["ɵɵdirectiveInject"](u.a),
                    v["ɵɵdirectiveInject"](h.a),
                    v["ɵɵdirectiveInject"](m.a),
                    v["ɵɵdirectiveInject"](g.a),
                    v["ɵɵdirectiveInject"](f.a)
                  );
                }),
                (e.ɵcmp = v["ɵɵdefineComponent"]({
                  type: e,
                  selectors: [["app-login"]],
                  decls: 29,
                  vars: 2,
                  consts: [
                    [2, "padding", "40px"],
                    ["id", "container"],
                    [
                      "src",
                      "../../../assets/images/logo@2x.png",
                      "width",
                      "120px",
                    ],
                    [2, "margin-top", "40px"],
                    [3, "ngSubmit"],
                    ["form", "ngForm"],
                    [1, "ion-no-padding", "ion-text-sm-left"],
                    [
                      "name",
                      "person-outline",
                      "size",
                      "small",
                      "color",
                      "primary",
                    ],
                    [
                      "name",
                      "name",
                      "type",
                      "text",
                      "placeholder",
                      "用户名/手机",
                      "ngModel",
                      "",
                      "required",
                      "",
                    ],
                    ["name", "key-outline", "size", "small", "color", "primary"],
                    [
                      "name",
                      "password",
                      "type",
                      "password",
                      "placeholder",
                      "密码",
                      "ngModel",
                      "",
                      "required",
                      "",
                    ],
                    ["lines", "none", 1, "ion-no-padding", "ion-text-sm-left"],
                    ["name", "agreement", 3, "ngModel", "ngModelChange"],
                    [2, "font-size", "small", "color", "gray", 3, "click"],
                    [1, "mt20", "bgfff", 2, "min-height", "3rem"],
                    ["type", "submit", "expand", "block", "color", "primary"],
                    [
                      "color",
                      "medium",
                      "slot",
                      "end",
                      2,
                      "font-size",
                      "smaller",
                      "padding",
                      "0",
                      "margin",
                      "0",
                      3,
                      "click",
                    ],
                  ],
                  template: function (e, t) {
                    if (1 & e) {
                      const e = v["ɵɵgetCurrentView"]();
                      v["ɵɵelementStart"](0, "ion-content", 0),
                        v["ɵɵelementStart"](1, "div", 1),
                        v["ɵɵelement"](2, "img", 2),
                        v["ɵɵelementStart"](3, "div", 3),
                        v["ɵɵelementStart"](4, "form", 4, 5),
                        v["ɵɵlistener"]("ngSubmit", function () {
                          v["ɵɵrestoreView"](e);
                          const n = v["ɵɵreference"](5);
                          return t.login(n);
                        }),
                        v["ɵɵelementStart"](6, "ion-list"),
                        v["ɵɵelementStart"](7, "ion-item", 6),
                        v["ɵɵelement"](8, "ion-icon", 7),
                        v["ɵɵelementStart"](9, "ion-label"),
                        v["ɵɵtext"](10, "%xa0"),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelement"](11, "ion-input", 8),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](12, "ion-item", 6),
                        v["ɵɵelement"](13, "ion-icon", 9),
                        v["ɵɵelementStart"](14, "ion-label"),
                        v["ɵɵtext"](15, "%xa0"),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelement"](16, "ion-input", 10),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](17, "ion-item", 11),
                        v["ɵɵelementStart"](18, "ion-checkbox", 12),
                        v["ɵɵlistener"]("ngModelChange", function (e) {
                          return (t.the_agreenment = e);
                        }),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](19, "a", 13),
                        v["ɵɵlistener"]("click", function () {
                          return t.open_agreement();
                        }),
                        v["ɵɵtext"](
                          20,
                          "%xa0我已阅读并同意《数字校园用户隐私协议》"
                        ),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](21, "div", 14),
                        v["ɵɵelementStart"](22, "ion-button", 15),
                        v["ɵɵtext"](23, "登录"),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](24, "ion-item", 11),
                        v["ɵɵelementStart"](25, "a", 16),
                        v["ɵɵlistener"]("click", function () {
                          return t.findPassword();
                        }),
                        v["ɵɵtext"](26, "忘记密码"),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementStart"](27, "p"),
                        v["ɵɵtext"](28),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"](),
                        v["ɵɵelementEnd"]();
                    }
                    2 & e &&
                      (v["ɵɵadvance"](18),
                      v["ɵɵproperty"]("ngModel", t.the_agreenment),
                      v["ɵɵadvance"](10),
                      v["ɵɵtextInterpolate1"](" ", t.msg, " "));
                  },
                  directives: [
                    s.IonContent,
                    r["ɵangular_packages_forms_forms_y"],
                    r.NgControlStatusGroup,
                    r.NgForm,
                    s.IonList,
                    s.IonItem,
                    s.IonIcon,
                    s.IonLabel,
                    s.IonInput,
                    s.TextValueAccessor,
                    r.NgControlStatus,
                    r.NgModel,
                    r.RequiredValidator,
                    s.IonCheckbox,
                    s.BooleanValueAccessor,
                    s.IonButton,
                  ],
                  styles: [
                    "ion-content[_ngcontent-%COMP%]{--background:#fff!important}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;font-size:smaller;left:0;right:0;top:40%;transform:translateY(-50%);padding:20px}#container[_ngcontent-%COMP%]   .ym-line[_ngcontent-%COMP%]{text-align:left;border-bottom:thin solid #d3d3d3;margin-bottom:20px}ion-checkbox[_ngcontent-%COMP%]{--size:12px}",
                  ],
                })),
                e
              );
            })(),
          },
          {
            path: "agreement",
            loadChildren: () =>
              n
                .e(105)
                .then(n.bind(null, "sLiz"))
                .then((e) => e.AgreementPageModule),
          },
        ];
        let C = (() => {
          class e {}
          return (
            (e.ɵmod = v["ɵɵdefineNgModule"]({ type: e })),
            (e.ɵinj = v["ɵɵdefineInjector"]({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[o.i.forChild(I)], o.i],
            })),
            e
          );
        })();
        n.d(t, "LoginPageModule", function () {
          return S;
        });
        let S = (() => {
          class e {}
          return (
            (e.ɵmod = v["ɵɵdefineNgModule"]({ type: e })),
            (e.ɵinj = v["ɵɵdefineInjector"]({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[i.CommonModule, r.FormsModule, s.IonicModule, C]],
            })),
            e
          );
        })();
      },
    },
  ]);