! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(i, r, function(n) {
                return e[n]
            }.bind(null, r));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 6)
}([function(e, n, t) {
    "use strict";
    t.d(n, "l", (function() {
        return i
    })), t.d(n, "k", (function() {
        return r
    })), t.d(n, "cb", (function() {
        return a
    })), t.d(n, "o", (function() {
        return o
    })), t.d(n, "f", (function() {
        return s
    })), t.d(n, "kb", (function() {
        return l
    })), t.d(n, "V", (function() {
        return g
    })), t.d(n, "L", (function() {
        return _
    })), t.d(n, "fb", (function() {
        return d
    })), t.d(n, "gb", (function() {
        return u
    })), t.d(n, "db", (function() {
        return c
    })), t.d(n, "eb", (function() {
        return f
    })), t.d(n, "E", (function() {
        return p
    })), t.d(n, "bb", (function() {
        return E
    })), t.d(n, "R", (function() {
        return M
    })), t.d(n, "jb", (function() {
        return m
    })), t.d(n, "hb", (function() {
        return h
    })), t.d(n, "ib", (function() {
        return D
    })), t.d(n, "C", (function() {
        return b
    })), t.d(n, "G", (function() {
        return L
    })), t.d(n, "A", (function() {
        return w
    })), t.d(n, "y", (function() {
        return I
    })), t.d(n, "c", (function() {
        return x
    })), t.d(n, "b", (function() {
        return y
    })), t.d(n, "J", (function() {
        return C
    })), t.d(n, "ab", (function() {
        return T
    })), t.d(n, "a", (function() {
        return O
    })), t.d(n, "I", (function() {
        return A
    })), t.d(n, "M", (function() {
        return j
    })), t.d(n, "e", (function() {
        return P
    })), t.d(n, "d", (function() {
        return v
    })), t.d(n, "h", (function() {
        return S
    })), t.d(n, "i", (function() {
        return B
    })), t.d(n, "v", (function() {
        return N
    })), t.d(n, "w", (function() {
        return U
    })), t.d(n, "x", (function() {
        return k
    })), t.d(n, "z", (function() {
        return R
    })), t.d(n, "lb", (function() {
        return W
    })), t.d(n, "U", (function() {
        return z
    })), t.d(n, "N", (function() {
        return K
    })), t.d(n, "t", (function() {
        return Y
    })), t.d(n, "Z", (function() {
        return F
    })), t.d(n, "D", (function() {
        return G
    })), t.d(n, "W", (function() {
        return H
    })), t.d(n, "m", (function() {
        return Z
    })), t.d(n, "F", (function() {
        return X
    })), t.d(n, "r", (function() {
        return V
    })), t.d(n, "Y", (function() {
        return Q
    })), t.d(n, "T", (function() {
        return J
    })), t.d(n, "u", (function() {
        return q
    })), t.d(n, "K", (function() {
        return $
    })), t.d(n, "P", (function() {
        return ee
    })), t.d(n, "Q", (function() {
        return ne
    })), t.d(n, "q", (function() {
        return te
    })), t.d(n, "O", (function() {
        return ie
    })), t.d(n, "g", (function() {
        return re
    })), t.d(n, "j", (function() {
        return ae
    })), t.d(n, "X", (function() {
        return oe
    })), t.d(n, "s", (function() {
        return se
    })), t.d(n, "S", (function() {
        return le
    })), t.d(n, "p", (function() {
        return ge
    })), t.d(n, "n", (function() {
        return _e
    })), t.d(n, "H", (function() {
        return de
    })), t.d(n, "B", (function() {
        return ue
    }));
    const i = ["正在检查更新...", "正在檢查更新...", "Checking for updates..."],
        r = ["检查更新", "檢查更新", "Check for updates"],
        a = ["立即更新", "立即更新", "Update Now"],
        o = ["发现新版本", "發現新版本", "Discover a new version"],
        s = ["已是最新版本", "已是最新版本", "It is the latest version"],
        l = ["版本", "版本", "VER"],
        g = ["大小", "大小", "Size"],
        _ = ["更新说明", "更新說明", "Release Notes"],
        d = ["正在升级...", "正在升級...", "Upgrading..."],
        u = ["可能比较耗时，请耐心等待", "可能比較耗時，請耐心等待", "It may be time-consuming, please be patient."],
        c = ["升级失败", "升級失敗", "Upgrade failed"],
        f = ["升级成功", "升級成功", "Upgrade successful"],
        p = ["网络异常，请检查网络", "網絡異常，請檢查網絡", "Network exception, please check the network."],
        E = ["U盘模式", "U盤模式", "Storage Mode"],
        M = ["保存日志", "保存日誌", "Save Log"],
        m = ["正在上传...", "正在上傳...", "Uploading..."],
        h = ["上传失败", "上傳失敗", "Upload failed"],
        D = ["上传成功", "上傳成功", "Upload successful"],
        b = ["日志文件不存在", "日誌文件不存在", "The log file does not exist"],
        L = ["产品未激活", "產品未激活", "Product is not activated"],
        w = ["请输入正确的问题描述", "請輸入正確的問題描述", "Please enter the correct problem description"],
        I = ["您输入的内容已超出长度限制", "您輸入的內容已超出長度限制", "The content you entered exceeds the length limit"],
        x = ["您输入的账号或密码不合法", "您輸入的賬號或密碼不合法", "The account or password you entered is invalid"],
        y = ["您输入的账号或密码不正确", "您輸入的賬號或密碼不正確", "The account or password you entered is incorrect."],
        C = ["产品激活", "產品激活", "Product Activation"],
        T = ["类型", "類型", "Type"],
        O = ["账号", "賬號", "Account"],
        A = ["密码", "密碼", "Password"],
        j = ["记住密码", "記住密碼", "Remember the password."],
        P = ["激活", "激活", "Activation"],
        v = ["激活成功", "激活成功", "Activated successfully"],
        S = ["批次", "批次", "Batch"],
        B = ["输入的批次无效", "輸入的批次無效", "The entered batch is invalid"],
        N = ["请输入汽车品牌", "請輸入汽車品牌", "Please enter the brand of the car."],
        U = ["请输入汽车型号", "請輸入汽車型號", "Please enter the model of the car."],
        k = ["请输入汽车年份", "請輸入汽車年份", "Please enter the year of the car."],
        R = ["请输入完整的车型信息", "請輸入完整的車型信息", "Please enter full car information."],
        W = ["请输入您遇到的问题或建议。注意，待问题复现后再提交。", "請輸入您遇到的問題或建議。注意，待問題復現後再提交。", "Please enter your suggestions or problems encountered. Note, wait until the problem reproduces before submitting."],
        z = ["设置", "設置", "Settings"],
        K = ["重置", "重置", "Reset"],
        Y = ["图像模式", "圖像模式", "Video Mode"],
        F = ["同步模式", "同步模式", "Sync Mode"],
        G = ["媒体延迟", "媒體延遲", "Media Delay"],
        H = ["媒体音质", "媒體音質", "Sound Quality"],
        Z = ["兼容", "兼容", "Compatible"],
        X = ["正常", "正常", "Normal"],
        V = ["反馈", "反饋", "Feedback"],
        Q = ["提交", "提交", "Submit"],
        J = ["设置成功", "設置成功", "Set successfully"],
        q = ["输入不正确。", "輸入不正確。", "The input is incorrect."],
        $ = ["范围：", "範圍：", "Range: "],
        ee = ["回退版本", "回退版本", "Rollback"],
        ne = ["将版本回退到", "將版本回退到", "Roll back the version to"],
        te = ["回声延迟", "迴聲延遲", "Echo Delay"],
        ie = ["您确定要重置吗？", "您確定要重置嗎？", "Are you sure you want to reset?"],
        re = ["自动连接", "自動連接", "Automatic"],
        ae = ["后台模式", "後台模式", "Background Mode"],
        oe = ["启动延迟", "啟動延遲", "Startup Delay"],
        se = ["帧率", "幀率", "Frame Rate"],
        le = ["秒", "秒", "s"],
        ge = ["显示大小", "顯示大小", "Display Size"],
        _e = ["默认", "默認", "Default"],
        de = ["其它", "其它", "Other"],
        ue = ["请输入相关信息", "請輸入相關信息", "Please enter the relevant information"]
}, function(e, n, t) {
    "use strict";

    function showAlert(message, hideAfter = 1500) {
        var t = document.createElement("div");
        t.style.cssText = "width:100%; text-align:center; position:absolute; top:90%; z-index:999999;", document.body.appendChild(t);
        var i = document.createElement("span");
        i.innerHTML = message, i.style.cssText = "min-width:40%; opacity:0.7; padding-top:1.5rem; padding-bottom:1.5rem; padding-left:2.5rem; padding-right:2.5rem; color:#121212; text-align:center; border-radius:0.8rem; background:#FFFFFF; font-size: 2rem;", t.appendChild(i), setTimeout((function() {
            i.style.webkitTransition = "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in", i.style.opacity = "0", setTimeout((function() {
                t.removeChild(i), document.body.removeChild(t)
            }), 500)
        }), hideAfter)
    }

    function createFingerprint(message) {
        var n = document.createElement("canvas");
        if (n.getContext && n.getContext("2d")) {
            var t = n.getContext("2d");
            t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#FF0000", t.fillRect(0, 0, 8, 10), t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(message, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(message, 4, 17);
            var i = n.toDataURL().replace("data:image/png;base64,", "");
            return function(e) {
                var n, t, i, r = "";
                for (n = 0, t = (e += "").length; n < t; n++) i = e.charCodeAt(n).toString(16), r += i.length < 2 ? "0" + i : i;
                return r
            }(window.atob(i).slice(-16, -12))
        }
        return ""
    }
    t.d(n, "a", (function() {
        return showAlert
    })), t.d(n, "b", (function() {
        return createFingerprint
    }))
}, function(e, n, t) {
    "use strict";
    e.exports = function(e, n) {
        return n || (n = {}), "string" != typeof(e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), n.hash && (e += n.hash), /["'() \t\n]/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
    }
}, function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var t = function(e, n) {
                    var t = e[1] || "",
                        i = e[3];
                    if (!i) return t;
                    if (n && "function" == typeof btoa) {
                        var r = (o = i, s = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(l, " */")),
                            a = i.sources.map((function(e) {
                                return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
                            }));
                        return [t].concat(a).concat([r]).join("\n")
                    }
                    var o, s, l;
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
            })).join("")
        }, n.i = function(e, t, i) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            var r = {};
            if (i)
                for (var a = 0; a < this.length; a++) {
                    var o = this[a][0];
                    null != o && (r[o] = !0)
                }
            for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                i && r[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t), n.push(l))
            }
        }, n
    }
}, function(e, n, t) {
    "use strict";
    n.a = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAuMjEiIGhlaWdodD0iNjAuMjEiIHZpZXdCb3g9IjAgMCA2MC4yMSA2MC4yMSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSwgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbGlwLXBhdGgpOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogIzE2MTcxOTsKICAgICAgfQoKICAgICAgLmNscy01IHsKICAgICAgICBzdHJva2U6ICMxNjE3MTk7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cmVjdCBpZD0i55+p5b2iXzIwNjYiIGRhdGEtbmFtZT0i55+p5b2iIDIwNjYiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjYwLjIxIiBoZWlnaHQ9IjYwLjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0i57uEXzIiIGRhdGEtbmFtZT0i57uEIDIiIGNsYXNzPSJjbHMtMiI+CiAgICA8cGF0aCBpZD0i6Lev5b6EXzEiIGRhdGEtbmFtZT0i6Lev5b6EIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMwLjEsMEEzMC4xLDMwLjEsMCwxLDEsMCwzMC4xLDMwLjEwNiwzMC4xMDYsMCwwLDEsMzAuMSwwIi8+CiAgICA8cGF0aCBpZD0i6Lev5b6EXzIiIGRhdGEtbmFtZT0i6Lev5b6EIDIiIGNsYXNzPSJjbHMtNCIgZD0iTTQ0LjAxMSwyNy44aC0xLjRhMS42NzgsMS42NzgsMCwwLDEtMS41LTEuMTA2bC0uOC0xLjkzOWExLjY2OSwxLjY2OSwwLDAsMSwuMjc0LTEuODQ4bC45ODgtLjk4NGExLjE2OSwxLjE2OSwwLDAsMCwwLTEuNjM3bC0xLjY0Ny0xLjYzNmExLjE2MSwxLjE2MSwwLDAsMC0xLjYzOCwwbC0uOTkuOTg1YTEuNjU3LDEuNjU3LDAsMCwxLTEuODM5LjI2OWwtMS45NDItLjhhMS42OCwxLjY4LDAsMCwxLTEuMS0xLjV2LTEuNGExLjE2OSwxLjE2OSwwLDAsMC0xLjE1NC0xLjE2SDI4Ljk1MmExLjE2NSwxLjE2NSwwLDAsMC0xLjE2LDEuMTZWMTcuNmExLjY4MywxLjY4MywwLDAsMS0xLjEsMS41bC0xLjk0MS43OWExLjY2OCwxLjY2OCwwLDAsMS0xLjg0NC0uMjcxbC0uOTg5LS45ODZhMS4xNjIsMS4xNjIsMCwwLDAtMS42MzgsMEwxOC42NDUsMjAuMjdhMS4xNTIsMS4xNTIsMCwwLDAsMCwxLjYyOWwwLDB2LjAwNWwuOTgzLjk4N2ExLjY2NCwxLjY2NCwwLDAsMSwuMjcxLDEuODQ1bC0uOCwxLjk0YTEuNjgsMS42OCwwLDAsMS0xLjUsMS4xMDZIMTYuMjA3YTEuMTU1LDEuMTU1LDAsMCwwLTEuMTYyLDEuMTQ2djIuMzI0YTEuMTY1LDEuMTY1LDAsMCwwLDEuMTYsMS4xNmgxLjRhMS42OCwxLjY4LDAsMCwxLDEuNSwxLjFsLjgsMS45NDFhMS42NzMsMS42NzMsMCwwLDEtLjI3MywxLjg1M2wtLjk4NS45ODVhMS4xNjYsMS4xNjYsMCwwLDAsMCwxLjYzOGwxLjYzNiwxLjYzNmExLjE1OSwxLjE1OSwwLDAsMCwxLjYzOCwwbC45ODctLjk4NWExLjY0OCwxLjY0OCwwLDAsMSwxLjg0LS4yNjhsMS45NDUuOGExLjY3NSwxLjY3NSwwLDAsMSwxLjEsMS41VjQ0YTEuMTcyLDEuMTcyLDAsMCwwLDEuMTYyLDEuMTZoMi4zMTRBMS4xNywxLjE3LDAsMCwwLDMyLjQyNCw0NFY0Mi42MjRhMS42ODksMS42ODksMCwwLDEsMS4xLTEuNTA1bDEuOTQxLS44YTEuNjY2LDEuNjY2LDAsMCwxLDEuODQ0LjI2OWwuOTgxLjk4NmExLjE3LDEuMTcsMCwwLDAsMS42NDcsMGwxLjYzNi0xLjYzNmExLjE3LDEuMTcsMCwwLDAsMC0xLjYzOGwtLjk4OC0uOTg1YTEuNjY1LDEuNjY1LDAsMCwxLS4yNzQtMS44NDNsLjgtMS45NGExLjY4MSwxLjY4MSwwLDAsMSwxLjUtMS4xMDdINDQuMDFhMS4xNjcsMS4xNjcsMCwwLDAsMS4xNTQtMS4xNlYyOC45NDlBMS4xNTMsMS4xNTMsMCwwLDAsNDQuMDExLDI3LjhoMG0tOC4xMjEsMi4zMThBNS43OTEsNS43OTEsMCwwLDEsMzAuMSwzNS45MDhoMGE1Ljc5Miw1Ljc5MiwwLDAsMS01LjgtNS43ODR2MEE1LjgsNS44LDAsMCwxLDMwLjE3MSwyNC40aC4wMDZBNS44LDUuOCwwLDAsMSwzNS45LDMwLjEyMSIvPgogICAgPHBhdGggaWQ9Iui3r+W+hF8zIiBkYXRhLW5hbWU9Iui3r+W+hCAzIiBjbGFzcz0iY2xzLTUiIGQ9Ik00NC4wMTEsMjcuOGgtMS40YTEuNjc4LDEuNjc4LDAsMCwxLTEuNS0xLjEwNmwtLjgtMS45MzlhMS42NjksMS42NjksMCwwLDEsLjI3NC0xLjg0OGwuOTg4LS45ODRhMS4xNjksMS4xNjksMCwwLDAsMC0xLjYzN2wtMS42NDctMS42MzZhMS4xNjEsMS4xNjEsMCwwLDAtMS42MzgsMGwtLjk5Ljk4NWExLjY1NywxLjY1NywwLDAsMS0xLjgzOS4yNjlsLTEuOTQyLS44YTEuNjgsMS42OCwwLDAsMS0xLjEtMS41di0xLjRhMS4xNjksMS4xNjksMCwwLDAtMS4xNTQtMS4xNkgyOC45NTJhMS4xNjUsMS4xNjUsMCwwLDAtMS4xNiwxLjE2VjE3LjZhMS42ODMsMS42ODMsMCwwLDEtMS4xLDEuNWwtMS45NDEuNzlhMS42NjgsMS42NjgsMCwwLDEtMS44NDQtLjI3MWwtLjk4OS0uOTg2YTEuMTYyLDEuMTYyLDAsMCwwLTEuNjM4LDBMMTguNjQ1LDIwLjI3YTEuMTUyLDEuMTUyLDAsMCwwLDAsMS42MjlsMCwwdi4wMDVsLjk4My45ODdhMS42NjQsMS42NjQsMCwwLDEsLjI3MSwxLjg0NWwtLjgsMS45NGExLjY4LDEuNjgsMCwwLDEtMS41LDEuMTA2SDE2LjIwN2ExLjE1NSwxLjE1NSwwLDAsMC0xLjE2MiwxLjE0NnYyLjMyNGExLjE2NSwxLjE2NSwwLDAsMCwxLjE2LDEuMTZoMS40YTEuNjgsMS42OCwwLDAsMSwxLjUsMS4xbC44LDEuOTQxYTEuNjczLDEuNjczLDAsMCwxLS4yNzMsMS44NTNsLS45ODUuOTg1YTEuMTY2LDEuMTY2LDAsMCwwLDAsMS42MzhsMS42MzYsMS42MzZhMS4xNTksMS4xNTksMCwwLDAsMS42MzgsMGwuOTg3LS45ODVhMS42NDgsMS42NDgsMCwwLDEsMS44NC0uMjY4bDEuOTQ1LjhhMS42NzUsMS42NzUsMCwwLDEsMS4xLDEuNVY0NGExLjE3MiwxLjE3MiwwLDAsMCwxLjE2MiwxLjE2aDIuMzE0QTEuMTcsMS4xNywwLDAsMCwzMi40MjQsNDRWNDIuNjI0YTEuNjg5LDEuNjg5LDAsMCwxLDEuMS0xLjUwNWwxLjk0MS0uOGExLjY2NiwxLjY2NiwwLDAsMSwxLjg0NC4yNjlsLjk4MS45ODZhMS4xNywxLjE3LDAsMCwwLDEuNjQ3LDBsMS42MzYtMS42MzZhMS4xNywxLjE3LDAsMCwwLDAtMS42MzhsLS45ODgtLjk4NWExLjY2NSwxLjY2NSwwLDAsMS0uMjc0LTEuODQzbC44LTEuOTRhMS42ODEsMS42ODEsMCwwLDEsMS41LTEuMTA3SDQ0LjAxYTEuMTY3LDEuMTY3LDAsMCwwLDEuMTU0LTEuMTZWMjguOTQ5QTEuMTUzLDEuMTUzLDAsMCwwLDQ0LjAxMSwyNy44aDBtLTguMTIxLDIuMzE4QTUuNzkxLDUuNzkxLDAsMCwxLDMwLjEsMzUuOTA4aDBhNS43OTIsNS43OTIsMCwwLDEtNS44LTUuNzg0djBBNS44LDUuOCwwLDAsMSwzMC4xNzEsMjQuNGguMDA2QTUuOCw1LjgsMCwwLDEsMzUuOSwzMC4xMjEiLz4KICA8L2c+Cjwvc3ZnPgo="
}, function(e, n, t) {
    "use strict";
    n.a = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS4wMTYiIGhlaWdodD0iMjEuMDE3IiB2aWV3Qm94PSIwIDAgMjEuMDE2IDIxLjAxNyI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNhY2FjYWM7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogM3B4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0i57uEXzU5IiBkYXRhLW5hbWU9Iue7hCA1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxMS4zNzkgLTI0My4zNzkpIj4KICAgIDxsaW5lIGlkPSLnm7Tnur9fMSIgZGF0YS1uYW1lPSLnm7Tnur8gMSIgY2xhc3M9ImNscy0xIiB4Mj0iMTYuNzc0IiB5Mj0iMTYuNzc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTMuNSAyNDUuNSkiLz4KICAgIDxsaW5lIGlkPSLnm7Tnur9fMiIgZGF0YS1uYW1lPSLnm7Tnur8gMiIgY2xhc3M9ImNscy0xIiB4MT0iMTYuNzc0IiB5Mj0iMTYuNzc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTMuNSAyNDUuNSkiLz4KICA8L2c+Cjwvc3ZnPgo="
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        _lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _skin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7),
        _skin_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_skin_css__WEBPACK_IMPORTED_MODULE_2__);
    let g_downUrl = "",
        g_lang = 2,
        g_intervalId, g_boxFileName = "",
        g_boxLogFileName = "box.log";
    var g_boxVersion = "";
    let g_userSettings = null;
    window.onload = function() {
        g_lang = getLanguage(), g_lang < 2 && document.getElementsByTagName("html")[0].setAttribute("lang", "zh"), init(), document.getElementById("down-button").onclick = function() {
            startDongleUpdate()
        }, document.getElementById("menu-button").onclick = function() {
            SettingsDialog.show()
        }, document.getElementById("upload-log-file").onclick = function() {
            getLogsFromDongle()
        }
    };
    const UPGRADE_STATE_UNSTARTED = 0,
        UPGRADE_STATE_UPGRADING = 1,
        UPGRADE_STATE_SUCCESS = 2,
        UPGRADE_STATE_FAILED = 3,
        URL_PREFIX = "http://www.paplink.cn/",
        VERSION = "2021.02.03";
    var CookieUtils = {
        setCookie: function(name, value) {
            var t = new Date;
            t.setTime(t.getTime() + 6048e5), document.cookie = name + "=" + decodeURI(value) + ";expires=" + t.toUTCString()
        },
        getCookie: function(name) {
            var n = document.cookie,
                t = n.indexOf(name + "=");
            if (t >= 0) {
                t += name.length + 1;
                var i = n.indexOf(";", t);
                return i < 0 && (i = n.length), [name, decodeURIComponent(n.substring(t, i))]
            }
            return [name, ""]
        },
        expireCookie: function(name) {
            var n = new Date;
            n.setTime(n.getTime() - 1);
            var t = this.getCookie(name);
            null == t && "" != t[1] || (document.cookie = name + "=" + t + ";expires=" + n.toGMTString())
        },
        getRememberedPassword: function() {
            var e = document.cookie.split(";");
            if (e.length > 0)
                for (var n = e.length - 1; n >= 0; n--) {
                    var t = e[n].trim();
                    if (!(t.indexOf("RememberPassword") >= 0 || t.indexOf("PHPSESSID") >= 0 || t.indexOf("BATCH") >= 0)) {
                        var i = t.indexOf("=");
                        if (i > 0) return [t.substring(0, i), t.substring(i + 1, t.length)]
                    }
                }
            return ["", ""]
        },
        setRememberPasswordCookie: function(value) {
            this.setCookie("RememberPassword", value)
        },
        isPasswordRemembered: function() {
            var e = this.getCookie("RememberPassword");
            return null != e && "true" == e[1]
        }
    };
    const UpgradingDialog = {
            is_init: !1,
            dialog: document.getElementById("dialog-upgrading"),
            dialogInner: document.getElementById("dialog-upgrading-inner"),
            show: function() {
                if (this.is_init) this.dialog.style.setProperty("display", "block");
                else {
                    this.dialog.style.setProperty("display", "block"), this.dialog.getElementsByTagName("span")[0].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.fb[g_lang], this.dialog.getElementsByTagName("span")[1].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.gb[g_lang];
                    var e = .5 * (this.dialog.offsetHeight - this.dialogInner.offsetHeight),
                        n = .5 * (this.dialog.offsetWidth - this.dialogInner.offsetWidth);
                    this.dialogInner.style.setProperty("left", n + "px"), this.dialogInner.style.setProperty("top", e + "px"), this.is_init = !0
                }
            },
            hide: function() {
                this.dialog.style.setProperty("display", "none")
            }
        },
        UpgradeSuccessDialog = {
            is_init: !1,
            dialog: document.getElementById("dialog-upgrade-success"),
            dialogInner: document.getElementById("dialog-upgrade-success-inner"),
            show: function() {
                if (this.is_init) this.dialog.style.setProperty("display", "block");
                else {
                    this.dialog.style.setProperty("display", "block"), this.dialog.getElementsByTagName("span")[0].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.eb[g_lang];
                    var e = .5 * (this.dialog.offsetHeight - this.dialogInner.offsetHeight),
                        n = .5 * (this.dialog.offsetWidth - this.dialogInner.offsetWidth);
                    this.dialogInner.style.setProperty("left", n + "px"), this.dialogInner.style.setProperty("top", e + "px"), this.is_init = !0
                }
            },
            hide: function() {
                this.dialog.style.setProperty("display", "none")
            }
        },
        UpgradeFailedDialog = {
            is_init: !1,
            dialog: document.getElementById("dialog-upgrade-failed"),
            dialogInner: document.getElementById("dialog-upgrade-failed-inner"),
            show: function() {
                if (this.is_init) this.dialog.style.setProperty("display", "block");
                else {
                    this.dialog.style.setProperty("display", "block"), this.dialog.getElementsByTagName("span")[0].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.db[g_lang];
                    var e = .5 * (this.dialog.offsetHeight - this.dialogInner.offsetHeight),
                        n = .5 * (this.dialog.offsetWidth - this.dialogInner.offsetWidth);
                    this.dialogInner.style.setProperty("left", n + "px"), this.dialogInner.style.setProperty("top", e + "px"), this.is_init = !0
                }
            },
            hide: function() {
                this.dialog.style.setProperty("display", "none")
            }
        };
    var LogDescDialog = {
            is_init: !1,
            log_desc: "",
            dialog: document.getElementById("log-desc-dlg"),
            innerDialog: document.getElementById("log-desc-dlg-inner"),
            content: document.getElementById("log-desc-content"),
            eCarBrand: null,
            eCarModel: null,
            eCarYear: null,
            show: function() {
                if (!this.is_init) {
                    this.dialog.getElementsByTagName("span")[0].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.B[g_lang];
                    var e = this.dialog.getElementsByTagName("input");
                    e[0].placeholder = _lang_js__WEBPACK_IMPORTED_MODULE_1__.v[g_lang], e[1].placeholder = _lang_js__WEBPACK_IMPORTED_MODULE_1__.w[g_lang], e[2].placeholder = _lang_js__WEBPACK_IMPORTED_MODULE_1__.x[g_lang], this.eCarBrand = e[0], this.eCarBrand.value = localStorage.getItem("CarBrand"), this.eCarModel = e[1], this.eCarModel.value = localStorage.getItem("CarModel"), this.eCarYear = e[2], this.eCarYear.value = localStorage.getItem("CarYear"), this.content.placeholder = _lang_js__WEBPACK_IMPORTED_MODULE_1__.lb[g_lang], this.dialog.getElementsByTagName("button")[0].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.Y[g_lang], this.is_init = !0, this.dialog.onclick = function(e) {
                        e.stopPropagation(), document.getElementById("log-desc-dlg").style.setProperty("display", "none")
                    }, this.innerDialog.onclick = function(e) {
                        e.stopPropagation()
                    }
                }
                this.dialog.style.setProperty("display", "block")
            },
            hide: function() {
                this.dialog.style.setProperty("display", "none")
            },
            getLogDescription: function() {
                return this.content.value.trim()
            },
            getCarInfo: function() {
                return [this.eCarBrand.value.trim(), this.eCarModel.value.trim(), this.eCarYear.value.trim()]
            },
            resetLogDescription: function() {
                this.content.value = ""
            }
        },
        DevInfos = {
            resolution: "",
            userAgent: "",
            lang: "",
            fingerprint: "",
            init: function() {
                var e = window.screen.width * getScreenScalingFactor() / 100,
                    n = window.screen.height * getScreenScalingFactor() / 100;
                this.resolution = e + "x" + n, this.userAgent = navigator.userAgent, this.lang = this.getBrowserLanguage(), this.fingerprint = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.lang + "#" + navigator.userAgent)
            },
            getBrowserLanguage: function() {
                var e = navigator.browserLanguage;
                return e || (e = navigator.language), e || (e = navigator.systemLanguage), e || (e = navigator.userLanguage), e
            },
            getUserAgent: function() {
                return this.userAgent
            }
        },
        BoxInfos = {
            boxVer: "",
            boxMac: "",
            boxManufacturer: "",
            boxUUID: "",
            boxOldUUID: "",
            boxType: "",
            carModel: "",
            carManufacturer: "",
            carOemName: "",
            carResolution: "",
            boxCheckCode: "",
            productType: "",
            init_1: function(uuid, oldUuid, boxManufacturer, carManufacturer, carModel, carOemName, carResolution, productType) {
                this.boxUUID = uuid, this.boxOldUUID = oldUuid, this.boxManufacturer = boxManufacturer, this.carManufacturer = carManufacturer, this.carModel = carModel, this.carOemName = carOemName, this.carResolution = carResolution, this.productType = productType
            },
            init_2: function(uuid, oldUuid, boxManufacturer, boxCheckCode, boxType, productType) {
                this.boxUUID = uuid, this.boxOldUUID = oldUuid, this.boxManufacturer = boxManufacturer, this.boxCheckCode = boxCheckCode, this.boxType = boxType, this.productType = productType
            },
            setBoxVersion: function(boxVersion) {
                this.boxVer = boxVersion
            },
            setBoxMac: function(boxMacAddress) {
                this.boxMac = boxMacAddress
            }
        },
        ActivateDialog = {
            isInit: !1,
            dialog: document.getElementById("activate-dlg"),
            innerDialog: document.getElementById("activate-dlg-inner"),
            select: null,
            accountElement: null,
            passwordElement: null,
            batchElement: null,
            checkbox: null,
            show: function() {
                if (!this.isInit) {
                    this.dialog.getElementsByTagName("button")[0].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.e[g_lang];
                    var e = this.dialog.getElementsByTagName("span");
                    e[0].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.J[g_lang], e[1].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.h[g_lang], e[2].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.ab[g_lang], e[3].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.a[g_lang], e[4].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.I[g_lang], e[6].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.M[g_lang], this.select = this.dialog.getElementsByTagName("select")[0], this.batchElement = this.dialog.getElementsByTagName("input")[0], this.accountElement = this.dialog.getElementsByTagName("input")[1], this.passwordElement = this.dialog.getElementsByTagName("input")[2];
                    var n = new Date,
                        t = n.getFullYear(),
                        i = n.getMonth() + 1;
                    i <= 9 && (i = "0" + i);
                    var r = n.getDate();
                    r <= 9 && (r = "0" + r), this.batchElement.value = t.toString() + i.toString() + r.toString() + CookieUtils.getCookie("BATCH")[1];
                    var a = CookieUtils.getRememberedPassword();
                    this.accountElement.value = a[0], this.passwordElement.value = a[1], this.checkbox = this.dialog.getElementsByTagName("input")[3], this.checkbox.checked = CookieUtils.isPasswordRemembered(), document.getElementById("view").setAttribute("content", "user-scalable=no"), this.isInit = !0;
                    var o = this;
                    this.innerDialog.addEventListener("change", (function(e) {
                        if (e.target.name) {
                            "batch" == e.target.name && o.setBatchCookie(e.target)
                        }
                    })), this.innerDialog.addEventListener("click", (function(e) {
                        e.target.tagName && "BUTTON" == e.target.tagName && startActivationRequest()
                    })), this.dialog.onclick = function(e) {
                        e.stopPropagation(), o.dialog.style.setProperty("display", "none");
                        var n = document.getElementById("down-button");
                        n.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.r[g_lang], n.onclick = function() {
                            LogDescDialog.show()
                        }, document.getElementById("menu-button").style.setProperty("display", "none")
                    }, this.innerDialog.onclick = function(e) {
                        e.stopPropagation()
                    }
                }
                this.dialog.style.setProperty("display", "block")
            },
            hide: function() {
                this.dialog.style.setProperty("display", "none"), document.getElementById("view").setAttribute("content", "user-scalable=yes")
            },
            f24: function() {
                var account = this.accountElement.value.trim(),
                    n = /^[a-zA-Z][a-zA-Z0-9\.]{2,20}$/;
                n.test(account) || (CookieUtils.expireCookie(account), account = "", this.accountElement.value = "");
                var password = this.passwordElement.value.trim();
                (n = /^[a-zA-Z0-9]{4,16}$/).test(password) || (password = "", this.passwordElement.value = "", CookieUtils.expireCookie(account));
                var batch = this.batchElement.value.trim();
                return 12 != batch.length && (batch = ""), [this.select.options[this.select.selectedIndex].value, this.select.options[this.select.selectedIndex].innerHTML, account, password, batch]
            },
            setCredentials: function(account, password) {
                this.accountElement.value = account, this.passwordElement.value = password
            },
            isPasswordRemembered: function() {
                return this.checkbox.checked
            },
            addCarsToDropdown: function(e) {
                for (var n in e) {
                    var t = e[n].car_type,
                        i = e[n].car_type_desc,
                        r = document.createElement("option");
                    r.value = t, r.innerHTML = i, this.select.appendChild(r)
                }
            },
            setBatchCookie: function(e) {
                var n = e.value;
                if (12 == n.length) {
                    var t = n.substring(8);
                    CookieUtils.setCookie("BATCH", t)
                } else Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.i[g_lang])
            }
        },
        SettingsDialog = {
            isInit: !1,
            dialog: document.getElementById("settings-dlg"),
            dialogInner: document.getElementById("settings-dlg-inner"),
            rollbackVer: "",
            rollbackVerFilePath: "",
            show: function() {
                if (this.dialog.style.setProperty("display", "block"), document.getElementById("view").setAttribute("content", "user-scalable=no"), !this.isInit) {
                    var e = .5 * (this.dialog.offsetHeight - this.dialogInner.offsetHeight),
                        n = .5 * (this.dialog.offsetWidth - this.dialogInner.offsetWidth);
                    this.dialogInner.style.setProperty("left", n + "px"), this.dialogInner.style.setProperty("top", e + "px"), this.i18n(), this.f28();
                    let t = this.dialogInner.getElementsByClassName("item");
                    BoxInfos.productType.lastIndexOf("C2W") >= 0 ? (t[1].style.setProperty("display", "flex"), t[3].style.setProperty("display", "flex"), t[5].style.setProperty("display", "flex")) : (t[6].style.setProperty("display", "flex"), t[7].style.setProperty("display", "flex"), t[8].style.setProperty("display", "flex"), t[9].style.setProperty("display", "flex"), t[10].style.setProperty("display", "flex")), "" != this.rollbackVer && "" != this.rollbackVerFilePath && (t[13].style.setProperty("display", "flex"), t[13].getElementsByTagName("span")[0].innerText = this.rollbackVer, t[13].onclick = function() {
                        if (confirm(_lang_js__WEBPACK_IMPORTED_MODULE_1__.Q[g_lang] + " " + SettingsDialog.rollbackVer + " ?")) {
                            SettingsDialog.hide(), downloadFileFromUrl(URL_PREFIX + "server.php?action=downfile&filename=" + g_boxFileName + "&filepath=" + SettingsDialog.rollbackVerFilePath)
                        }
                    });
                    let i = this;
                    this.dialogInner.addEventListener("click", (function(e) {
                        if (e.target.firstChild && e.target.firstChild.name && "Close" == e.target.firstChild.name) i.hide();
                        else if (e.target.name) {
                            let n = e.target.name;
                            "Close" == n ? i.hide() : "UploadLog" == n ? (i.hide(), LogDescDialog.show()) : "Reset" == n && resetDongle()
                        }
                    })), this.dialogInner.addEventListener("change", (function(e) {
                        if (e.target.name) {
                            let n = e.target.name;
                            if ("SyncMode" == n) setDongleSetting("set_sync_mode", e.target.value);
                            else if ("ImageMode" == n) setDongleSetting("set_image_mode", e.target.value);
                            else if ("SoundQuality" == n) setDongleSetting("set_sound_quality", e.target.value);
                            else if ("DisplaySize" == n) setDongleSetting("set_display_size", e.target.value);
                            else if ("BgMode" == n) setDongleSetting("set_bg_mode", e.target.checked ? 1 : 0);
                            else if ("AutoConn" == n) setDongleSetting("set_auto_conn", e.target.checked ? 1 : 0);
                            else if ("GPS" == n) setDongleSetting("set_gps", e.target.checked ? 1 : 0);
                            else if ("UMode" == n) setDongleSetting("set_u_mode", e.target.checked ? 1 : 0);
                            else if ("SaveLog" == n) setDongleSetting("set_save_log", e.target.checked ? 1 : 0);
                            else if ("MediaDelay" == e.target.name) {
                                if ("" != e.target.validationMessage) return void Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.D[g_lang] + " " + _lang_js__WEBPACK_IMPORTED_MODULE_1__.u[g_lang] + _lang_js__WEBPACK_IMPORTED_MODULE_1__.K[g_lang] + "300~200", 3e3);
                                "" == e.target.value ? e.target.value = g_userSettings.MediaDelay : setDongleSetting("set_media_delay", Number(e.target.value))
                            } else if ("EchoDelay" == e.target.name) {
                                if ("" != e.target.validationMessage) return void Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.q[g_lang] + " " + _lang_js__WEBPACK_IMPORTED_MODULE_1__.u[g_lang] + _lang_js__WEBPACK_IMPORTED_MODULE_1__.K[g_lang] + "0~2000", 3e3);
                                "" == e.target.value ? e.target.value = g_userSettings.EchoDelay : setDongleSetting("set_echo_delay", Number(e.target.value))
                            } else if ("StartDelay" == e.target.name) {
                                if ("" != e.target.validationMessage) return void Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.X[g_lang] + " " + _lang_js__WEBPACK_IMPORTED_MODULE_1__.u[g_lang] + _lang_js__WEBPACK_IMPORTED_MODULE_1__.K[g_lang] + "0~30", 3e3);
                                "" == e.target.value ? e.target.value = g_userSettings.StartDelay : setDongleSetting("set_start_delay", Number(e.target.value))
                            } else if ("FrameRate" == e.target.name) {
                                if ("" != e.target.validationMessage) return void Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.s[g_lang] + " " + _lang_js__WEBPACK_IMPORTED_MODULE_1__.u[g_lang] + _lang_js__WEBPACK_IMPORTED_MODULE_1__.K[g_lang] + "0~60", 3e3);
                                "" == e.target.value ? e.target.value = g_userSettings.FrameRate : setDongleSetting("set_frame_rate", Number(e.target.value))
                            }
                        }
                    })), this.isInit = !0
                }
            },
            hide: function() {
                document.getElementById("view").setAttribute("content", "user-scalable=yes"), this.dialog.style.setProperty("display", "none")
            },
            i18n: function() {
                let e = this.dialogInner.getElementsByTagName("label");
                e[0].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.U[g_lang], e[1].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.Z[g_lang], e[2].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.F[g_lang], e[3].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.m[g_lang], e[4].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.t[g_lang], e[5].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.F[g_lang], e[6].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.m[g_lang], e[7].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.W[g_lang], e[10].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.p[g_lang], e[11].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.n[g_lang], e[12].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.H[g_lang], e[13].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.D[g_lang], e[14].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.q[g_lang], e[15].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.X[g_lang], e[16].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.s[g_lang], e[17].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.g[g_lang], e[19].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.j[g_lang], e[23].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.bb[g_lang], e[25].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.R[g_lang], e[27].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.P[g_lang];
                let n = this.dialogInner.getElementsByTagName("button");
                n[0].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.N[g_lang], n[1].innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.r[g_lang], this.dialogInner.getElementsByTagName("span")[0].innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.S[g_lang]
            },
            f28: function() {
                if (g_userSettings) {
                    let e = this.dialogInner.getElementsByTagName("input");
                    0 == g_userSettings.SyncMode ? e[0].setAttribute("checked", "checked") : e[1].setAttribute("checked", "checked"), 0 == g_userSettings.ImageMode ? e[2].setAttribute("checked", "checked") : e[3].setAttribute("checked", "checked"), 0 == g_userSettings.SoundQuality ? e[4].setAttribute("checked", "checked") : e[5].setAttribute("checked", "checked"), 0 == g_userSettings.DisplaySize ? e[6].setAttribute("checked", "checked") : e[7].setAttribute("checked", "checked"), e[8].value = g_userSettings.MediaDelay, e[9].value = g_userSettings.EchoDelay, e[10].value = g_userSettings.StartDelay, e[11].value = g_userSettings.FrameRate, 1 == g_userSettings.AutoConn && e[12].setAttribute("checked", "checked"), 1 == g_userSettings.BgMode && e[13].setAttribute("checked", "checked"), 1 == g_userSettings.GPS && e[14].setAttribute("checked", "checked"), 1 == g_userSettings.UMode && e[15].setAttribute("checked", "checked"), 1 == g_userSettings.SaveLog && e[16].setAttribute("checked", "checked")
                }
            },
            setRollbackVersion(rollbackVersion, rollbackVersionFilePath) {
                this.rollbackVer = rollbackVersion, this.rollbackVerFilePath = rollbackVersionFilePath
            }
        };

    function checkForRollbackVersion(curVer, fileName) {
        let url = URL_PREFIX + "server.php?action=getRollbackVer&curVer=" + curVer + "&fileName=" + fileName;
        fetch(url).then(e => {
            if (e.ok) return e.text();
            throw Error(e.status + "(" + e.statusText + ")")
        }).then((function(data) {
            if ("" != data) {
                let jsonData = eval(data);
                null != jsonData && 1 == jsonData.length && SettingsDialog.setRollbackVersion(jsonData[0].rollbackVer, jsonData[0].filePath)
            }
        })).catch(e => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[RV]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.message + ")"))
    }

    function resetDongle() {
        confirm(_lang_js__WEBPACK_IMPORTED_MODULE_1__.O[g_lang]) && fetch("/cgi-bin/server.cgi?cmd=reset").then(e => {
            if (e.ok) return e.text();
            throw Error(e.status + "(" + e.statusText + ")")
        }).then((function(n) {
            0 == Number(n) ? window.location.reload() : Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[R]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.message + ")")
        })).catch(e => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[R]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.message + ")"))
    }
    var ProgressDialog = {
        isInit: !1,
        isCanHide: !1,
        dialog: document.getElementById("dialog"),
        dialogInner: document.getElementById("dialog-inner"),
        show: function() {
            if (this.isCanHide = !1, this.dialog.style.setProperty("display", "block"), !this.isInit) {
                var e = .5 * (this.dialog.offsetHeight - this.dialogInner.offsetHeight),
                    n = .5 * (this.dialog.offsetWidth - this.dialogInner.offsetWidth);
                this.dialogInner.style.setProperty("left", n + "px"), this.dialogInner.style.setProperty("top", e + "px");
                var t = this;
                this.dialog.onclick = function(e) {
                    t.maybeHide(), e.stopPropagation()
                }, this.dialogInner.onclick = function(e) {
                    e.stopPropagation()
                }
            }
        },
        maybeHide: function() {
            this.isCanHide && this.dialog.style.setProperty("display", "none")
        },
        hide: function() {
            this.dialog.style.setProperty("display", "none")
        },
        setCanHide: function(canHide) {
            this.isCanHide = canHide
        }
    };

    function init() {
        setLoaderTipsText(), getDongleVersion(), DevInfos.init(), isDongleActivated(), getDongleSettings()
    }

    function setLoaderTipsText() {
        document.getElementById("loader-tips").innerText = _lang_js__WEBPACK_IMPORTED_MODULE_1__.l[g_lang]
    }

    function isDongleActivated() {
        document.getElementById("loader").style.setProperty("display", "block");
        var e = new XMLHttpRequest;
        e.open("GET", "/cgi-bin/server.cgi?cmd=is_box_activated", !0), e.onreadystatechange = function() {
            if (4 == e.readyState)
                if (200 == e.status) {
                    var n = JSON.parse(e.responseText);
                    null == n.productType && (n.productType = ""), BoxInfos.init_1(n.uuid, n.old_uuid, n.manufacturer, n.carManufacturer, n.carModel, n.carOemName, n.carResolution, n.productType), "1" == n.isActivated ? getDongleVersion() : (BoxInfos.init_2(n.uuid, n.old_uuid, n.manufacturer, n.code, n.boxType, n.productType), checkIfDongleIsActivated(n.uuid, n.old_uuid, n.manufacturer, n.code, n.boxType, n.productType))
                } else Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[i]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.status + ")")
        }, e.send(null)
    }

    function startActivationRequest() {
        var e = ActivateDialog.f24(),
            n = e[2],
            t = e[3],
            i = e[4];
        if ("" == i) Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.i[g_lang]);
        else if ("" == n || "" == t) Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.c[g_lang]);
        else {
            ActivateDialog.isPasswordRemembered() ? (CookieUtils.setRememberPasswordCookie(!0), CookieUtils.setCookie(n, t)) : (CookieUtils.setRememberPasswordCookie(!1), CookieUtils.expireCookie(n));
            var endpointUrl = URL_PREFIX + "box_manage.php",
                a = new FormData;
            a.append("action", "RequestActivateBox"), a.append("uuid", BoxInfos.boxUUID), a.append("manufacturer", BoxInfos.boxManufacturer), a.append("box_type", BoxInfos.boxType), a.append("session_id", BoxInfos.boxCheckCode), a.append("activate_device_infos", DevInfos.getUserAgent()), a.append("account", n), a.append("password", t), a.append("car_type", e[0]), a.append("product_type", BoxInfos.productType), a.append("batch", i), a.append("fingerprint", DevInfos.fingerprint), a.append("resolution", DevInfos.resolution);
            var o = new XMLHttpRequest;
            o.open("POST", endpointUrl, !0), o.onreadystatechange = function() {
                if (4 == o.readyState)
                    if (200 == o.status) {
                        var e = o.responseText.trim().split("$"),
                            n = JSON.parse(e[1]),
                            errorCode = Number(n.error_code);
                        if (0 == errorCode) {
                            var i = "",
                                r = "";
                            for (var a in n.car_brands) i = i + n.car_brands[a].car_brand + ",", r = r + n.car_brands[a].car_brand_zh + ",";
                            Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.d[g_lang]), ActivateDialog.hide(), getDongleActivationStatus(n.session_id, i, r, n.r), getDongleVersion()
                        } else 4 == errorCode ? Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.b[g_lang]) : Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.G[g_lang] + "(" + errorCode + ")")
                    } else Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[R]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang])
            }, o.send(a)
        }
    }

    function checkIfDongleIsActivated(uuid, oldUuid, boxManufacturer, sessionId, boxType, productType) {
        var endpointUrl = URL_PREFIX + "box_manage.php",
            s = new FormData;
        s.append("action", "CheckBoxIsActivated"), s.append("uuid", uuid), s.append("old_uuid", oldUuid), s.append("manufacturer", boxManufacturer), s.append("box_type", boxType), s.append("session_id", sessionId), s.append("lang", getLanguage()), s.append("product_type", productType);
        var l = new XMLHttpRequest;
        l.open("POST", endpointUrl, !0), l.onreadystatechange = function() {
            if (4 == l.readyState)
                if (200 == l.status) {
                    var e = l.responseText.trim().split("$"),
                        n = JSON.parse(e[1]);
                    if (1 != Number(n.is_activated)) {
                        document.getElementById("loader").style.setProperty("display", "none"), ActivateDialog.show(), ActivateDialog.addCarsToDropdown(n.car_type_info)
                    } else {
                        var t = "",
                            i = "";
                        for (var r in n.car_brands) t = t + n.car_brands[r].car_brand + ",", i = i + n.car_brands[r].car_brand_zh + ",";
                        getDongleActivationStatus(n.session_id, t, i, n.r), getDongleVersion()
                    }
                } else {
                    document.getElementById("loader").style.setProperty("display", "none"), document.getElementById("update-head-title").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang]
                }
        }, l.send(s)
    }

    function getDongleActivationStatus(boxCode, carBrands, carBrandsChina, i) {
        var r = new FormData;
        r.append("cmd", "box_activated"), r.append("code", boxCode), r.append("car_brands", carBrands), r.append("car_brands_zh", carBrandsChina), r.append("r", i);
        var a = new XMLHttpRequest;
        a.open("POST", "/cgi-bin/server.cgi", !0), a.onreadystatechange = function() {
            4 == a.readyState && (200 == a.status && "1" != a.responseText && (document.getElementById("bottom-button").style.setProperty("display", "none"), document.getElementById("update-head-title").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.G[g_lang] + "(22)", ActivateDialog.show(), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.G[g_lang] + "(22)")))
        }, a.send(r)
    }

    function getDongleVersion() {
        document.getElementById("loader").style.setProperty("display", "block");
        var e = new XMLHttpRequest;
        e.open("GET", "/cgi-bin/server.cgi?cmd=getversion", !0), e.onreadystatechange = function() {
            if (4 == e.readyState && 200 == e.status) {
                var n = JSON.parse(e.responseText),
                    t = n.type,
                    i = "p",
                    r = "",
                    a = n.boxMac;
                a = a.replace(/\:/g, ""), t.length >= 2 ? (i = t[0], r = t[1], g_boxLogFileName = a + "_box_" + i + r + ".log") : (i = t, g_boxLogFileName = a + "_box.log"), g_boxVersion = n.version + "_" + n.type, BoxInfos.setBoxVersion(g_boxVersion), BoxInfos.setBoxMac(n.boxMac), g_boxFileName = n.fileName, manageBox(), checkForDongleUpdate(n.version, i, r, n.fileName)
            }
        }, e.send(null)
    }

    function getPrettyDateForToday() {
        var e = new Date;
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
    }

    function manageBox() {
        var e = new FormData;
        e.append("action", "BoxOnline"), e.append("uuid", BoxInfos.boxUUID), e.append("box_version", BoxInfos.boxVer), e.append("box_manufacturer", BoxInfos.boxManufacturer), e.append("car_manufacturer", BoxInfos.carManufacturer), e.append("car_model", BoxInfos.carModel), e.append("car_oem_name", BoxInfos.carOemName), e.append("car_resolution", BoxInfos.carResolution), e.append("device_infos", DevInfos.getUserAgent()), e.append("local_time", getPrettyDateForToday()), e.append("device_resolution", DevInfos.resolution), e.append("device_language", DevInfos.lang);
        var n = URL_PREFIX + "box_manage.php",
            t = new XMLHttpRequest;
        t.open("POST", n, !0), t.onreadystatechange = function() {
            if (4 == t.readyState && 200 == t.status) {
                var e = t.responseText.trim().split("$"),
                    n = JSON.parse(e[1]);
                if (1 != Number(n.is_activated)) {
                    ActivateDialog.show();
                    var i = new XMLHttpRequest;
                    i.open("GET", "/cgi-bin/server.cgi?cmd=box_not_activated", !0), i.onreadystatechange = function() {
                        4 == i.readyState && i.status
                    }, i.send(null)
                }
            }
        }, t.send(e)
    }

    function checkForDongleUpdate(currentVersion, customerType, boxType, fileName) {
        var endpointUrl = URL_PREFIX + "server.php?action=checkBoxUpdateByCustomerBoxType&lang=" + getLanguage() + "&CustomerType=" + customerType + "&BoxType=" + boxType + "&uuid=" + BoxInfos.boxUUID + "&fileName=" + fileName + "&curVer=" + currentVersion;
        let a = new XMLHttpRequest;
        a.open("GET", endpointUrl, !0), a.timeout = 8e3, a.onreadystatechange = function() {
            if (4 == a.readyState)
                if (document.getElementById("loader").style.setProperty("display", "none"), 200 == a.status) {
                    var n = a.responseText.trim();
                    if ("" == n) return g_downUrl = "", void renderUpdateStatus("", currentVersion, 0);
                    var t = n.split("$");
                    if (t.length < 2) return g_downUrl = "", void renderUpdateStatus("", currentVersion, 0);
                    var i = JSON.parse(t[1]),
                        updateLog = i.updateLog,
                        fileSize = i.fileSize,
                        fileName1 = i.fileName;
                    checkIfVersionsMatch(currentVersion, i.version) >= 0 ? (g_downUrl = "", renderUpdateStatus("", currentVersion, 0), checkForRollbackVersion(currentVersion, fileName1)) : (g_boxFileName = fileName1, g_downUrl = URL_PREFIX + "server.php?action=downfile&filename=" + fileName1 + "&filepath=" + i.filePath, renderUpdateStatus(updateLog, i.version, fileSize))
                } else g_downUrl = "", renderUpdateStatus("", currentVersion, -1), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("请不要刷新页面，尝试关闭wifi并使用移动网络重新检查更新", 3e3)
        }, a.send(null)
    }

    function renderUpdateStatus(e, boxVersion, t) {
        if (0 == t)(l = document.getElementById("div-update-head")).setAttribute("class", "div-update-head-center"), l.setAttribute("className", "div-update-head-center"), document.getElementById("down-button").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.k[g_lang], document.getElementById("update-head-title").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.f[g_lang], document.getElementById("update-head-version").innerHTML = "VER:" + boxVersion;
        else if (t > 0) {
            (l = document.getElementById("div-update-head")).setAttribute("class", "div-update-head-left"), l.setAttribute("className", "div-update-head-left"), document.getElementById("down-button").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.cb[g_lang], document.getElementById("update-head-title").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.o[g_lang], document.getElementById("update-head-version").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.kb[g_lang] + ":" + boxVersion + " | " + _lang_js__WEBPACK_IMPORTED_MODULE_1__.V[g_lang] + ":" + (t / 1048576).toFixed(2) + "MB", (g = document.getElementById("release-notes")).innerHTML = "", g.style.setProperty("text-align", "left");
            var i = document.createElement("span");
            g.appendChild(i), i.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.L[g_lang] + ":";
            var r = document.createElement("ul");
            g.appendChild(r);
            var a = e.split("\n");
            for (var o in a) {
                var s = document.createElement("li");
                r.appendChild(s), s.innerHTML = a[o]
            }
        } else if (t < 0) {
            var l, g;
            (l = document.getElementById("div-update-head")).setAttribute("class", "div-update-head-center"), l.setAttribute("className", "div-update-head-center"), document.getElementById("down-button").innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.k[g_lang], (g = document.getElementById("release-notes")).innerHTML = "", g.style.setProperty("text-align", "center");
            i = document.createElement("span");
            g.appendChild(i), i.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang]
        }
    }

    function startDongleUpdate() {
        if ("" == g_downUrl) {
            let e = BoxInfos.boxVer,
                n = BoxInfos.boxVer.lastIndexOf("_");
            return n > 0 && (e = BoxInfos.boxVer.substring(0, n)), void checkForDongleUpdate(e, "", "", g_boxFileName)
        }
        ProgressDialog.show();
        var e = new XMLHttpRequest;
        e.open("GET", g_downUrl, !0), e.responseType = "arraybuffer", e.onprogress = onProgress, e.onload = function(n) {
            var t = e.response;
            t && finishDownload(t)
        }, e.send(null)
    }

    function downloadFileFromUrl(url) {
        ProgressDialog.show();
        var n = new XMLHttpRequest;
        n.open("GET", url, !0), n.responseType = "arraybuffer", n.onprogress = onProgress, n.onload = function(e) {
            var t = n.response;
            t && finishDownload(t)
        }, n.send(null)
    }

    function finishDownload(bytes) {
        ProgressDialog.hide(), UpgradingDialog.show(), g_intervalId = setInterval(getUpgradeState, 500);
        var n = new File([bytes], g_boxFileName, {
                type: "application/octet-stream"
            }),
            t = new FormData;
        t.append("file", n);
        let i = new XMLHttpRequest;
        i.open("post", "/cgi-bin/upload.cgi", !0), i.upload.onprogress = onProgress, i.onload = function(e) {
            var n = JSON.parse(e.target.responseText);
            0 != Number(n.code) && pollForDongleUpgradeStatus(UPGRADE_STATE_FAILED, n.msg)
        }, -1 == navigator.userAgent.indexOf("iPhone") && (i.onreadystatechange = function() {
            4 == i.readyState && 0 == i.status && (clearInterval(g_intervalId), i.abort(), confirm("请打开wifi，并连接产品wifi") && finishDownload(bytes))
        }), i.send(t)
    }

    function onProgress(e) {
        var n = Math.round(e.loaded / e.total * 100);
        document.getElementById("curRate").style.setProperty("width", n + "%"), document.getElementById("progress-percent").innerText = n + "%"
    }

    function pollForDongleUpgradeStatus(statusToCheckFor, n) {
        statusToCheckFor == UPGRADE_STATE_UPGRADING ? UpgradingDialog.show() : statusToCheckFor == UPGRADE_STATE_SUCCESS ? (clearInterval(g_intervalId), setTimeout(() => {
            UpgradingDialog.hide(), UpgradeSuccessDialog.show()
        }, 1e4)) : statusToCheckFor == UPGRADE_STATE_FAILED && (clearInterval(g_intervalId), UpgradingDialog.hide(), UpgradeFailedDialog.show())
    }

    function getUpgradeState() {
        let e = new XMLHttpRequest;
        e.timeout = 1e3, e.open("GET", "/cgi-bin/server.cgi?cmd=getupgradestate", !0), e.onreadystatechange = function() {
            if (4 == e.readyState)
                if (200 == e.status) {
                    var n = JSON.parse(e.responseText);
                    pollForDongleUpgradeStatus(n.state, n.errCode)
                } else 0 == e.status ? -1 != navigator.userAgent.indexOf("iPhone") && pollForDongleUpgradeStatus(UPGRADE_STATE_SUCCESS, "") : pollForDongleUpgradeStatus(UPGRADE_STATE_FAILED, "" + e.status)
        }, e.send(null)
    }

    function areLogsAvailable() {
        var e = LogDescDialog.getLogDescription(),
            n = e.length;
        let t = LogDescDialog.getCarInfo();
        if (!(t.length < 1 || t[1].length < 1 || t[2].length < 1)) {
            if (n > 140) return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.y[g_lang]), !1;
            if (n < 2) return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.A[g_lang]), !1;
            var i = /^[0-9]*$/;
            return i.test(e) ? (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.A[g_lang]), !1) : !(i = /^[a-zA-Z]*$/).test(e) || (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.A[g_lang]), !1)
        }
        Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.z[g_lang])
    }

    function getLogsFromDongle() {
        if (areLogsAvailable()) {
            LogDescDialog.hide();
            var e = new XMLHttpRequest;
            e.open("GET", "/cgi-bin/server.cgi?cmd=upload_log", !0), e.responseType = "arraybuffer", ProgressDialog.show(), e.onprogress = onUploadProgress, e.onload = function(n) {
                var t = e.response;
                t && t.byteLength > 0 ? uploadDongleFingerprint(t) : uploadDongleFingerprint(_lang_js__WEBPACK_IMPORTED_MODULE_1__.C[g_lang])
            }, e.send(null)
        }
    }

    function uploadDongleFingerprint(message) {
        var n = document.getElementById("dialog-message");
        n.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.jb[g_lang];
        var t = "###### www Log ######\n";
        t += VERSION + "\n", t += DevInfos.resolution + "\n", t += DevInfos.fingerprint + "\n\n";
        var i = new File([t, message], g_boxLogFileName, {
                type: "application/octet-stream"
            }),
            r = new FormData;
        let a = LogDescDialog.getCarInfo();
        localStorage.setItem("CarBrand", a[0]), localStorage.setItem("CarModel", a[1]), localStorage.setItem("CarYear", a[2]), r.append("log_file", i), r.append("appVersion", g_boxVersion), r.append("logDesc", LogDescDialog.getLogDescription()), r.append("manufacturer", BoxInfos.carManufacturer + "(" + a[0] + ")"), r.append("model", BoxInfos.carModel + "(" + a[1] + ")"), r.append("android", a[2]), r.append("platform", BoxInfos.carOemName), r.append("resolution", BoxInfos.carResolution), r.append("uuid", BoxInfos.boxUUID);
        let o = new XMLHttpRequest;
        var endpointUrl = URL_PREFIX + "upload_log.php";
        o.open("post", endpointUrl, !0), o.upload.onprogress = onUploadProgress, o.onload = function(e) {
            var t = e.target.responseText.split("$");
            t.length > 0 && (JSON.parse(t[1]).error ? n.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.hb[g_lang] : (n.innerHTML = _lang_js__WEBPACK_IMPORTED_MODULE_1__.ib[g_lang], ProgressDialog.setCanHide(!0), LogDescDialog.resetLogDescription()))
        }, o.onreadystatechange = function() {
            4 == o.readyState && 0 == o.status && (o.abort(), confirm("请关闭wifi，打开移动网络") && uploadDongleFingerprint(message))
        }, o.send(r)
    }

    function onUploadProgress(e) {
        var n = 0;
        e.total > 0 && (n = Math.round(e.loaded / e.total * 100)), document.getElementById("curRate").style.setProperty("width", n + "%"), document.getElementById("progress-percent").innerText = n + "%"
    }

    function getDongleSettings() {
        fetch("/cgi-bin/server.cgi?cmd=get_settings").then(e => {
            if (e.ok) return e.text();
            throw Error(e.status + "(" + e.statusText + ")")
        }).then((function(e) {
            g_userSettings = JSON.parse(e)
        })).catch(e => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[g]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.message + ")"))
    }

    function setDongleSetting(settingName, settingValue) {
        fetch(`/cgi-bin/server.cgi?cmd=${settingName}&value=${settingValue}`).then(e => {
            if (e.ok) return e.text();
            throw Error(e.status + "(" + e.statusText + ")")
        }).then((function(e) {
            Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)(_lang_js__WEBPACK_IMPORTED_MODULE_1__.T[g_lang])
        })).catch(e => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__.a)("[s]" + _lang_js__WEBPACK_IMPORTED_MODULE_1__.E[g_lang] + "(" + e.message + ")"))
    }

    function getLanguage() {
        var e = (navigator.browserLanguage ? navigator.browserLanguage : navigator.language).toLowerCase();
        let n = 2;
        return n = e.indexOf("zh-cn") > -1 ? 0 : e.indexOf("zh-tw") > -1 ? 1 : (e.indexOf("en"), 2), n
    }

    function checkIfVersionsMatch(versionLeft, versionRight) {
        versionLeft = versionLeft.split("."), versionRight = versionRight.split(".");
        const t = Math.min(versionLeft.length, versionRight.length);
        for (let i = 0; i < t; i++) {
            const t = parseInt(versionLeft[i]),
                r = parseInt(versionRight[i]);
            if (t > r) return 1;
            if (t < r) return -1
        }
        return 0
    }

    function getScreenScalingFactor() {
        var e = 100,
            n = window.screen,
            t = navigator.userAgent.toLowerCase();
        return void 0 !== window.devicePixelRatio ? e = window.devicePixelRatio : ~t.indexOf("msie") ? n.deviceXDPI && n.logicalXDPI && (e = n.deviceXDPI / n.logicalXDPI) : void 0 !== window.outerWidth && void 0 !== window.innerWidth && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(100 * e)), e
    }
}, function(e, n, t) {
    var i = t(8),
        r = t(9);
    "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    i(r, a);
    e.exports = r.locals || {}
}, function(e, n, t) {
    "use strict";
    var i, r = function() {
            return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
        },
        a = function() {
            var e = {};
            return function(n) {
                if (void 0 === e[n]) {
                    var t = document.querySelector(n);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    e[n] = t
                }
                return e[n]
            }
        }(),
        o = [];

    function s(e) {
        for (var n = -1, t = 0; t < o.length; t++)
            if (o[t].identifier === e) {
                n = t;
                break
            } return n
    }

    function l(e, n) {
        for (var t = {}, i = [], r = 0; r < e.length; r++) {
            var a = e[r],
                l = n.base ? a[0] + n.base : a[0],
                g = t[l] || 0,
                _ = "".concat(l, " ").concat(g);
            t[l] = g + 1;
            var d = s(_),
                u = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                }; - 1 !== d ? (o[d].references++, o[d].updater(u)) : o.push({
                identifier: _,
                updater: E(u, n),
                references: 1
            }), i.push(_)
        }
        return i
    }

    function g(e) {
        var n = document.createElement("style"),
            i = e.attributes || {};
        if (void 0 === i.nonce) {
            var r = t.nc;
            r && (i.nonce = r)
        }
        if (Object.keys(i).forEach((function(e) {
                n.setAttribute(e, i[e])
            })), "function" == typeof e.insert) e.insert(n);
        else {
            var o = a(e.insert || "head");
            if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            o.appendChild(n)
        }
        return n
    }
    var _, d = (_ = [], function(e, n) {
        return _[e] = n, _.filter(Boolean).join("\n")
    });

    function u(e, n, t, i) {
        var r = t ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
        if (e.styleSheet) e.styleSheet.cssText = d(n, r);
        else {
            var a = document.createTextNode(r),
                o = e.childNodes;
            o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(a, o[n]) : e.appendChild(a)
        }
    }

    function c(e, n, t) {
        var i = t.css,
            r = t.media,
            a = t.sourceMap;
        if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), a && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i))
        }
    }
    var f = null,
        p = 0;

    function E(e, n) {
        var t, i, r;
        if (n.singleton) {
            var a = p++;
            t = f || (f = g(n)), i = u.bind(null, t, a, !1), r = u.bind(null, t, a, !0)
        } else t = g(n), i = c.bind(null, t, n), r = function() {
            ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(t)
        };
        return i(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    i(e = n)
                } else r()
            }
    }
    e.exports = function(e, n) {
        (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = r());
        var t = l(e = e || [], n);
        return function(e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var i = 0; i < t.length; i++) {
                    var r = s(t[i]);
                    o[r].references--
                }
                for (var a = l(e, n), g = 0; g < t.length; g++) {
                    var _ = s(t[g]);
                    0 === o[_].references && (o[_].updater(), o.splice(_, 1))
                }
                t = a
            }
        }
    }
}, function(e, n, t) {
    "use strict";
    t.r(n);
    var i = t(3),
        r = t.n(i),
        a = t(2),
        o = t.n(a),
        s = t(4),
        l = t(5),
        g = r()(!1),
        _ = o()(s.a),
        d = o()(l.a);
    g.push([e.i, "html {\n    font-size: 100%;\n}\n\nbody {\n    width: 100%;\n    height: 80%;\n    margin: 0; \n    padding: 0;\n    background: #22222b;\n}\n\nbutton {\n    outline: none;\n    user-select:none;\n}\n\n.div-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n\n.div-update-head {\n    position: absolute;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n}\n.div-update-head-left {\n    position: absolute;\n    top: 14%;\n    text-align: left;\n    padding-left: 6%;\n}\n.div-update-head-center {\n    position: absolute;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n}\n\n#update-head-title {\n    font-size: 4rem;\n    letter-spacing:0.8rem;\n    color: white;\n    font-weight: bold;\n}\n#update-head-version {\n    font-size: 1.5rem;\n    color: #797979;\n    text-align: center;\n}\n\n\n.div-update-button {\n    position: absolute;\n    bottom: 14%;\n    width: 100%;\n    text-align: center;\n}\n.div-update-button button{\n    position: relative;\n    width: 60%;\n    outline: none;\n    border: 0.2rem solid rgba(24,122,253,1);\n    /* background-color: rgba(24,122,253,1); */\n    background: rgba(24,122,253,1);\n    color: white;\n    height: 7rem;\n    font-weight:bold;\n    font-size: 2.5rem;\n    border-radius: 4rem;\n    cursor: hand;\n    padding: 10px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n.div-update-button button:active{\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\n    background-color: rgba(24,122,253,0.7);\n}\n\n\n/* 更新说明 */\n#release-notes {\n    padding-left: 6%;\n    overflow-y: auto;\n    top: 32%;\n    height: 40%;\n    color: white;\n    position: absolute;\n    font-size: 3rem;\n}\n#release-notes span {\n    font-weight: bold;\n    color: rgba(245,245,245,1);\n}\n#release-notes ul {\n    font-size: 2rem;\n    color: rgba(250,250,250,1);\n}\n#release-notes li {\n    margin-bottom: 1rem;\n}\n\n/* 对话框背景 */\n.dialog-outer-bg {\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-color: rgba(34,34,43,0.83);\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    display: none;\n}\n\n #dialog-inner {\n     width: 60%;\n     padding: 5%;\n     background-color: RGBA(57, 57, 64, 1);\n     border-radius: 1rem;\n     position: absolute;\n }\n#dialog-inner .dialog-message{\n    color: white;\n    font-size: 2em;\n}\n#dialog-inner span {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.progress {\n    width: 100%;\n    margin-top: 6%;\n    margin-bottom: 5%;\n    background: white;\n    /* border: 0.2rem solid white; */\n    text-align: center;\n}\n.curRate {\n    width: 0;\n    background: RGBA(24, 145, 253, 1);\n    border: 0.1rem solid RGBA(24, 145, 253, 1);\n}\n.round-conner {\n    height: 2rem;\n    border-radius: 1rem;\n}\n\n\n/* 等待动画 */\n@keyframes color {\n    100%, 0% {\n        stroke: #9c27b0;\n    }\n    50% {\n        stroke: #ff9800;\n    }\n    100% {\n        stroke: #9c27b0;\n    }\n}\n@keyframes dash {\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n\n}\n.loader:before {\n    /* content: ''; */\n    display: block;\n    /* padding-top: 100%; */\n}\n.loader {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    position: absolute;\n    display: block;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    -webkit-transform: translate3d(0, -50%, 0);\n    transform: translate3d(0, -50%, 0);\n    text-align: center;\n    top: 50%;\n    background: #393939;\n}\n.circular {\n    -webkit-animation: rotate 2s linear infinite;\n    animation: rotate 2s linear infinite;\n    height: 100%;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    width: 50%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n.path {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n    -webkit-animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;\n    animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;\n    stroke-linecap: round;\n}\n\n#loader-tips {\n    font-size: 2rem;\n    margin: 0 auto; \n    position: relative; \n    top: 50%; \n    color: #FFFFFF;\n    margin-top: -8px;\n}\n\n#menu-button {\n    border: none;\n    color:#999;\n    width: 7rem;\n    height: 7rem;\n    border-radius: 7rem;\n    position: absolute;\n    background:url(" + _ + ');\n    background-size: 100%;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 0px;\n}\n\n\n#log-desc-dlg .log-desc-dlg-inner {\n    width: 78%;\n    height: auto;\n    top: 15%;\n    left: 10%;\n    padding: 2%;\n    background-color: RGBA(255, 255, 255, 1);\n    border-radius: 1rem;\n    position: absolute;\n}\n#log-desc-dlg .log-desc-dlg-inner div {\n    text-align: center;\n}\n#log-desc-dlg .log-desc-dlg-inner-title {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    font-size: 3.5rem;\n}\n\n\n#log-desc-dlg .item {\n    height: 6rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\n#log-desc-dlg input {\n    height: 5rem;\n    border: solid 0.1rem #ACACAC;\n    width: 90%;\n    font-size: 2.5rem;\n    padding: 0.5rem;\n    padding-left: 1rem;\n    border-radius: 0.4rem;\n    outline: none;\n}\n#log-desc-dlg input::placeholder{\n    font-size:2.3rem;\n    color: #666666;\n}\n#log-desc-dlg input::-webkit-input-placeholder{\n    font-size:2.3rem;\n    color: #666666;\n}\n\n\n#log-desc-dlg textarea {\n    border: solid 0.1rem #ACACAC;\n    width: 90%;\n    height: 18rem;\n    font-size: 3.5rem;\n    border-radius: 0.4rem;\n    padding: 0.6rem;\n    margin-top: 0.5rem;\n}\n#log-desc-dlg textarea::placeholder{\n    font-size:2.3rem;\n    color: #666666;\n}\n#log-desc-dlg button {\n    position: relative;\n    width: 90%;\n    outline: none;\n    border: none;\n    background-color: rgba(24,122,253,1);\n    color: white;\n    height: 7rem;\n    font-weight:bold;\n    font-size: 2.5rem;\n    border-radius: 4rem;\n    cursor: hand;\n    padding: 10px;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    outline: none;\n}\n#log-desc-dlg button:active{\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\n    background-color: rgba(24,122,253,0.7);\n}\n\n.activate-dlg-inner {\n    width: 70%;\n    height: auto;\n    top: 20%;\n    left: 15%;\n    padding: 2%;\n    background-color: RGBA(255, 255, 255, 1);\n    border-radius: 1rem;\n    position: absolute;\n}\n.activate-dlg-inner .title {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n    font-size: 4.0rem;\n    text-align: center;\n}\n.activate-dlg-inner .item {\n    height: 6rem;\n    padding: 0.5rem;\n}\n.activate-dlg-inner .tag {\n    display:-moz-inline-box;\n    display:inline-block;\n    font-size: 2.5rem;\n    width: 10rem;\n    text-align: right;\n    padding-right: 1rem;\n}\n.activate-dlg-inner input {\n    height: 5rem;\n    border: solid 0.05rem #ACACAC;\n    width: 60%;\n    font-size: 2.5rem;\n    padding: 0.5rem;\n    padding-left: 1rem;\n    border-radius: 1rem;\n    outline: none;\n}\n.activate-dlg-inner input[type=checkbox] {\n    width: 2rem;\n    height: 2rem;\n}\n.activate-dlg-inner select {\n    height: 6rem;\n    border: solid 0.05rem #ACACAC;\n    width: 64%;\n    font-size: 2rem;\n    padding: 1rem;\n    border-radius: 1rem;\n    outline: none;\n}\n\n.activate-dlg-inner button {\n    position: relative;\n    width: 90%;\n    outline: none;\n    border: none;\n    background-color: rgba(24,122,253,1);\n    color: white;\n    height: 7rem;\n    font-weight:bold;\n    font-size: 2.5rem;\n    border-radius: 4rem;\n    cursor: hand;\n    padding: 10px;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    outline: none;\n}\n.activate-dlg-inner button:active{\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\n    background-color: rgba(24,122,253,0.7);\n}\n\n\n\n.upgrade-state-dialog {\n    width: 30.75rem;\n    height: 18.75rem;\n    padding: 3.17rem;\n    background-color: RGBA(57, 57, 64, 1);\n    border-radius: 1rem;\n    position: absolute;\n    text-align:center;\n}\n.upgrade-state-tips {\n    margin-top: 4rem; \n    color: white; \n    font-size: 2.5rem;\n}\n\n\n.upgradeing-anim-container {\n    width: 12rem; \n    height: 12rem; \n    position: relative; \n    left: 9rem;\n}\n.upgrading-anim {\n   width: 12.26rem;\n   height: 12.26rem;\n   padding: 0px;\n   border-radius:100%;\n   border: 0.5rem solid;\n   border-top-color: #1891FD;\n   border-bottom-color: #1891FD;\n   border-left-color: #1891FD;\n   border-right-color: RGBA(57, 57, 64, 1);\n   -webkit-animation: upgrading-anim 1s ease-in-out infinite;\n   animation: upgrading-anim 1s ease-in-out infinite;\n}\n@keyframes upgrading-anim {\n   from {transform: rotate(0deg);}\n   to {transform: rotate(360deg);}\n}\n@-webkit-keyframes upgrading-anim {\n   from {-webkit-transform: rotate(0deg);}\n   to {-webkit-transform: rotate(360deg);}\n}\n.upgrading-text {\n    position: absolute; \n    top:43%; \n    left:5%; \n    width: 100%; \n    text-align: center; \n    color:white; \n    font-size:1.8rem;\n}\n\n\n\n\n.upgrade-success {\n    position: relative;\n    display: inline-block;\n    width: 9rem;\n    height: 9rem;\n    border-radius: 9rem;\n    border: 0.5rem solid rgba(24,122,253,1);\n}\n.upgrade-success::after {\n    content: "";\n    position: absolute;\n    left: 2.5rem;\n    top: 2.5rem;\n    width: 50%;\n    height: 25%;\n    border: 0.5rem solid rgba(24,122,253,1);\n    border-radius: 0.5rem;\n    border-top: none;\n    border-right: none;\n    background: transparent;\n    transform: rotate(-45deg);\n}\n\n\n\n\n.div-failed {\n    display:inline-block; \n    border: 0.5rem solid #E65353; \n    border-radius: 10rem; \n    width: 9rem; \n    height: 9rem; \n    text-align:center;\n}\n.upgrade-failed {\n    display: inline-block;\n    width: 0.5rem;\n    height: 7rem;\n    background: #E65353;\n    line-height: 0;\n    font-size: 0;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    border-radius: 1rem;\n}\n.upgrade-failed:after {\n    content: "/";\n    display: inline-block;\n    width: 0.5rem;\n    height: 7rem;\n    background: #E65353;\n    transform: rotate(-90deg);\n    -webkit-transform: rotate(-90deg);\n    border-radius: 1rem;\n}\n\n\n\n\n/* 设置对话框 */\n#settings-dlg-inner {\n    position: relative;\n    width: 48rem;\n    height: 64rem;\n    background-color: white;\n    border-radius: 1rem;\n}\n\n#settings-dlg-inner .title {\n    text-align: center;\n    font-size: 4rem;\n    margin: 0;\n    padding-bottom: 2rem;\n}\n\n#settings-dlg-inner .main {\n    padding-left:2rem;\n    padding-right:2rem;\n\n    overflow: auto;\n    width: 40rem;\n    height: 50rem;\n}\n\n#settings-dlg-inner:lang(zh) .main {\n    padding-left:4rem;\n    padding-right:4rem;\n}\n\n#settings-dlg-inner .item {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    height: 7.5rem;\n    font-size: 2.5rem;\n}\n#settings-dlg-inner .tag {\n    width: 30%;\n}\n#settings-dlg-inner .setting {\n    width: 70%;\n\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#settings-dlg-inner .tag:lang(zh) {\n    width: 35%;\n}\n#settings-dlg-inner .setting:lang(zh) {\n    width: 60%;\n}\n\n#settings-dlg-inner .setting .radio1 {\n    width: 45%;\n}\n#settings-dlg-inner .setting .radio2 {\n    width: 55%;\n}\n\n#settings-dlg-inner .setting .radio1:lang(zh) {\n    width: 40%;\n}\n#settings-dlg-inner .setting .radio2:lang(zh) {\n    width: 40%;\n}\n\n#settings-dlg-inner .setting input[type="number"] {\n    width: 100%;\n    text-align: center;\n    height: 3rem;\n    border-radius: 0.5rem;\n    /* border-color: #ACACAC; */\n    border: 0.1rem solid #ACACAC !important;\n    font-size: 2rem;\n}\n\n\n\n\n\n\n\n.toggle {\n    display: none;\n}\n.toggle-label {\n    box-shadow: #ccc 0px 0px 0px 1px;\n    width: 6rem;\n    height: 3rem;\n    display: inline-block;\n    border-radius: 3rem;\n    position: relative;\n    background-color: #AEABAE;\n    overflow: hidden;\n    border: 0.1rem solid #AEABAE;\n}\n.toggle-label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    width: 3rem;\n    height: 3rem;\n    display: inline-block;\n    border-radius: 3rem;\n    background-color: #fff;\n    z-index: 20;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.toggle:checked + label.toggle-label:before {\n    left: 3rem;\n}\n.toggle:checked + label.toggle-label {\n    background-color: #187DE8;\n}\n\n\n\n\n\n\n/* 单选框自定义样式 */\ninput[type=radio]{\n    /*去除浏览器默认样式*/\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /*自定义样式*/\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    width: 3rem;\n    height: 3rem;\n    border: 0.1rem solid #ACACAC;\n    outline: none;\n    cursor: pointer;\n    /*设置为圆形，看起来是个单选框*/\n    -webkit-border-radius: 1.5rem;\n    -moz-border-radius: 1.5rem;\n    border-radius: 1.5rem;\n}\n\n/* 单选框 选中之后的样式 */\ninput[type=radio]:after{\n    content: \'\';\n    position: absolute;\n    width: 1.5rem;\n    height: 1.5rem;\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    background: #177EE6;\n    -webkit-border-radius: 1rem;\n    -moz-border-radius: 1rem;\n    border-radius: 1rem;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    transform: scale(0);\n    /*增加一些动画*/\n    -webkit-transition : all ease-in-out 300ms;\n    -moz-transition : all ease-in-out 300ms;\n    transition : all ease-in-out 300ms;\n}\ninput[type=radio]:checked:after{\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    transform: scale(1);\n}\n\n#settings-dlg-inner .item button{\n    position: relative;\n    width: 100%;\n    outline: none;\n    border: 0.2rem solid rgba(24,122,253,1);\n    background-color: rgba(24,122,253,1);\n    color: white;\n    height: 6rem;\n    font-weight:bold;\n    font-size: 2rem;\n    border-radius: 4rem;\n    cursor: hand;\n    padding: 10px;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n#settings-dlg-inner .item button:active{\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\n    background-color: rgba(24,122,253,0.7);\n}\n\n.close {\n    display: inline-block;\n    width: 1.8rem;\n    height: 1.8rem;\n    background-size: 100%;\n    background-image: url(' + d + ");\n    padding: 0.2rem;\n}\n\n\n/* 重置按钮 */\n.rest-btn {\n    font-size: 1.5rem;\n    border-radius: 2rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border: solid 0.1rem #ACACAC;\n    color: #ACACAC;\n    background-color: #FFFFFF;\n}\n.rest-btn:active {\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\n    background-color: rgba(24,122,253,0.7);\n    color: #FFFFFF;\n}", ""]), n.default = g
}]);
