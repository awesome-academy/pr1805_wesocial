! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {};
    e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var o, s, a = "REVERSE",
            l = "PAUSED",
            c = n.defaults,
            u = this,
            f = i.extend({}, c, r),
            d = [],
            h = !1,
            p = 0,
            g = l,
            v = !0,
            m = 0,
            y = !0,
            w = function() {
                f.refreshInterval > 0 && (s = window.setTimeout(F, f.refreshInterval))
            },
            S = function() {
                return f.vertical ? i.get.scrollTop(f.container) : i.get.scrollLeft(f.container)
            },
            b = function() {
                return f.vertical ? i.get.height(f.container) : i.get.width(f.container)
            },
            E = this._setScrollPos = function(e) {
                f.vertical ? v ? window.scrollTo(i.get.scrollLeft(), e) : f.container.scrollTop = e : v ? window.scrollTo(e, i.get.scrollTop()) : f.container.scrollLeft = e
            },
            x = function() {
                if (y && h) {
                    var e = i.type.Array(h) ? h : d.slice(0);
                    h = !1;
                    var t = p,
                        n = (p = u.scrollPos()) - t;
                    0 !== n && (g = n > 0 ? "FORWARD" : a), g === a && e.reverse(), e.forEach(function(e) {
                        e.update(!0)
                    })
                }
            },
            z = function() {
                o = i.rAF(x)
            },
            C = function(e) {
                "resize" == e.type && (m = b(), g = l), !0 !== h && (h = !0, z())
            },
            F = function() {
                if (!v && m != b()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    f.container.dispatchEvent(e)
                }
                d.forEach(function(e) {
                    e.refresh()
                }), w()
            };
        this._options = f;
        var L = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(t) {
                if (i.type.Array(t)) t.forEach(function(e) {
                    u.addScene(e)
                });
                else if (t instanceof e.Scene)
                    if (t.controller() !== u) t.addTo(u);
                    else if (d.indexOf(t) < 0) {
                    d.push(t), d = L(d), t.on("shift.controller_sort", function() {
                        d = L(d)
                    });
                    for (var n in f.globalSceneOptions) t[n] && t[n].call(t, f.globalSceneOptions[n])
                }
                return u
            }, this.removeScene = function(e) {
                if (i.type.Array(e)) e.forEach(function(e) {
                    u.removeScene(e)
                });
                else {
                    var t = d.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), d.splice(t, 1), e.remove())
                }
                return u
            }, this.updateScene = function(t, n) {
                return i.type.Array(t) ? t.forEach(function(e) {
                    u.updateScene(e, n)
                }) : n ? t.update(!0) : !0 !== h && t instanceof e.Scene && (-1 == (h = h || []).indexOf(t) && h.push(t), h = L(h), z()), u
            }, this.update = function(e) {
                return C({
                    type: "resize"
                }), e && x(), u
            }, this.scrollTo = function(n, r) {
                if (i.type.Number(n)) E.call(f.container, n, r);
                else if (n instanceof e.Scene) n.controller() === u && u.scrollTo(n.scrollOffset(), r);
                else if (i.type.Function(n)) E = n;
                else {
                    var o = i.get.elements(n)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                        var s = f.vertical ? "top" : "left",
                            a = i.get.offset(f.container),
                            l = i.get.offset(o);
                        v || (a[s] -= u.scrollPos()), u.scrollTo(l[s] - a[s], r)
                    }
                }
                return u
            }, this.scrollPos = function(e) {
                return arguments.length ? (i.type.Function(e) && (S = e), u) : S.call(u)
            }, this.info = function(e) {
                var t = {
                    size: m,
                    vertical: f.vertical,
                    scrollPos: p,
                    scrollDirection: g,
                    container: f.container,
                    isDocument: v
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
            }, this.loglevel = function() {
                return u
            }, this.enabled = function(e) {
                return arguments.length ? (y != e && (y = !!e, u.updateScene(d, !0)), u) : y
            }, this.destroy = function(e) {
                window.clearTimeout(s);
                for (var t = d.length; t--;) d[t].destroy(e);
                return f.container.removeEventListener("resize", C), f.container.removeEventListener("scroll", C), i.cAF(o), null
            },
            function() {
                for (var e in f) c.hasOwnProperty(e) || delete f[e];
                if (f.container = i.get.elements(f.container)[0], !f.container) throw "ScrollMagic.Controller init failed.";
                (v = f.container === window || f.container === document.body || !document.body.contains(f.container)) && (f.container = window), m = b(), f.container.addEventListener("resize", C), f.container.addEventListener("scroll", C), f.refreshInterval = parseInt(f.refreshInterval) || c.refreshInterval, w()
            }(), u
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = r.defaults,
            f = this,
            d = i.extend({}, u, n),
            h = a,
            p = 0,
            g = {
                start: 0,
                end: 0
            },
            v = 0,
            m = !0,
            y = {};
        this.on = function(e, t) {
            return i.type.Function(t) && (e = e.trim().split(" ")).forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: i || "",
                    callback: t
                }))
            }), f
        }, this.off = function(e, t) {
            return e ? ((e = e.trim().split(" ")).forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1] || "";
                ("*" === r ? Object.keys(y) : [r]).forEach(function(e) {
                    for (var n = y[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                })
            }), f) : f
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = y[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n))
                })
            }
            return f
        }, f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? b() : "reverse" === e.what && f.update())
        }).on("shift.internal", function() {
            w(), f.update()
        }), this.addTo = function(t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, z(), S(!0), b(!0), w(), s.info("container").addEventListener("resize", E), t.addScene(f), f.trigger("add", {
                controller: s
            }), f.update()), f
        }, this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", E);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove")
            }
            return f
        }, this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.off("*.*"), null
        }, this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && m) {
                        var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - g.start) / (g.end - g.start) : n >= g.start ? 1 : 0, f.trigger("update", {
                            startPos: g.start,
                            endPos: g.end,
                            scrollPos: n
                        }), f.progress(t)
                    } else L && h === l && A(!0);
            else s.updateScene(f, !1);
            return f
        }, this.refresh = function() {
            return S(), b(), f
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = h,
                    r = s ? s.info("scrollDirection") : "PAUSED",
                    i = d.reverse || e >= p;
                if (0 === d.duration ? (t = p != e, p = 1 > e && i ? 0 : 1, h = 0 === p ? a : l) : 0 > e && h !== a && i ? (p = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (p = e, h = l, t = !0) : e >= 1 && h !== c ? (p = 1, h = c, t = !0) : h !== l || i || A(), t) {
                    var o = {
                            progress: p,
                            state: h,
                            scrollDirection: r
                        },
                        u = h != n,
                        g = function(e) {
                            f.trigger(e, o)
                        };
                    u && n !== l && (g("enter"), g(n === a ? "start" : "end")), g("progress"), u && h !== l && (g(h === a ? "start" : "end"), g("leave"))
                }
                return f
            }
            return p
        };
        var w = function() {
                g = {
                    start: v + d.offset
                }, s && d.triggerElement && (g.start -= s.info("size") * d.triggerHook), g.end = g.start + d.duration
            },
            S = function(e) {
                if (o) {
                    var t = "duration";
                    C(t, o.call(f)) && !e && (f.trigger("change", {
                        what: t,
                        newval: d[t]
                    }), f.trigger("shift", {
                        reason: t
                    }))
                }
            },
            b = function(e) {
                var n = 0,
                    r = d.triggerElement;
                if (s && r) {
                    for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var c = i.get.offset(r);
                    o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
                }
                var u = n != v;
                v = n, u && !e && f.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            E = function() {
                d.triggerHook > 0 && f.trigger("shift", {
                    reason: "containerResize"
                })
            },
            x = i.extend(r.validate, {
                duration: function(e) {
                    if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() {
                            return s ? s.info("size") * t : 0
                        }
                    }
                    if (i.type.Function(e)) {
                        o = e;
                        try {
                            e = parseFloat(o())
                        } catch (t) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                    return e
                }
            }),
            z = function(e) {
                (e = arguments.length ? [e] : Object.keys(x)).forEach(function(e) {
                    var t;
                    if (x[e]) try {
                        t = x[e](d[e])
                    } catch (n) {
                        t = u[e]
                    } finally {
                        d[e] = t
                    }
                })
            },
            C = function(e, t) {
                var n = !1,
                    r = d[e];
                return d[e] != t && (d[e] = t, z(e), n = r != d[e]), n
            },
            F = function(e) {
                f[e] || (f[e] = function(t) {
                    return arguments.length ? ("duration" === e && (o = void 0), C(e, t) && (f.trigger("change", {
                        what: e,
                        newval: d[e]
                    }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                        reason: e
                    })), f) : d[e]
                })
            };
        this.controller = function() {
            return s
        }, this.state = function() {
            return h
        }, this.scrollOffset = function() {
            return g.start
        }, this.triggerPosition = function() {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e
        };
        var L, T;
        f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && A(), t && _()
        }).on("progress.internal", function() {
            A()
        }).on("add.internal", function() {
            _()
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset)
        });
        var A = function(e) {
                if (L && s) {
                    var t = s.info(),
                        n = T.spacer.firstChild;
                    if (e || h !== l) {
                        var r = {
                                position: T.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = i.css(n, "position") != r.position;
                        T.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(T.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(T.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * p, i.css(n, r), o && _()
                    } else {
                        "fixed" != i.css(n, "position") && (i.css(n, {
                            position: "fixed"
                        }), _());
                        var u = i.get.offset(T.spacer, !0),
                            f = d.reverse || 0 === d.duration ? t.scrollPos - g.start : Math.round(p * d.duration * 10) / 10;
                        u[t.vertical ? "top" : "left"] += f, i.css(T.spacer.firstChild, {
                            top: u.top,
                            left: u.left
                        })
                    }
                }
            },
            _ = function() {
                if (L && s && T.inFlow) {
                    var e = h === l,
                        t = s.info("vertical"),
                        n = T.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(T.spacer, "display")),
                        o = {};
                    T.relSize.width || T.relSize.autoFullWidth ? e ? i.css(L, {
                        width: i.get.width(T.spacer)
                    }) : i.css(L, {
                        width: "100%"
                    }) : (o["min-width"] = i.get.width(t ? L : n, !0, !0), o.width = e ? o["min-width"] : "auto"), T.relSize.height ? e ? i.css(L, {
                        height: i.get.height(T.spacer) - (T.pushFollowers ? d.duration : 0)
                    }) : i.css(L, {
                        height: "100%"
                    }) : (o["min-height"] = i.get.height(t ? n : L, !0, !r), o.height = e ? o["min-height"] : "auto"), T.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * p, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - p)), i.css(T.spacer, o)
                }
            },
            O = function() {
                s && L && h === l && !s.info("isDocument") && A()
            },
            P = function() {
                s && L && h === l && ((T.relSize.width || T.relSize.autoFullWidth) && i.get.width(window) != i.get.width(T.spacer.parentNode) || T.relSize.height && i.get.height(window) != i.get.height(T.spacer.parentNode)) && _()
            },
            D = function(e) {
                s && L && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n), !(e = i.get.elements(e)[0])) return f;
            if ("fixed" === i.css(e, "position")) return f;
            if (L) {
                if (L === e) return f;
                f.removePin()
            }
            var o = (L = e).parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            L.parentNode.style.display = "none";
            var a = "absolute" != i.css(L, "position"),
                l = i.css(L, s.concat(["display"])),
                c = i.css(L, ["width", "height"]);
            L.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = L.parentNode.insertBefore(document.createElement("div"), L),
                d = i.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || i.extend(d, i.css(L, ["width", "height"])), i.css(u, d), u.setAttribute(t, ""), i.addClass(u, n.spacerClass), T = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: a
                }, !L.___origStyle) {
                L.___origStyle = {};
                var h = L.style;
                s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                    L.___origStyle[e] = h[e] || ""
                })
            }
            return T.relSize.width && i.css(u, {
                width: c.width
            }), T.relSize.height && i.css(u, {
                height: c.height
            }), u.appendChild(L), i.css(L, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (T.relSize.width || T.relSize.autoFullWidth) && i.css(L, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", P), L.addEventListener("mousewheel", D), L.addEventListener("DOMMouseScroll", D), A(), f
        }, this.removePin = function(e) {
            if (L) {
                if (h === l && A(!0), e || !s) {
                    var n = T.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = T.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function(e) {
                            margins[e] = r[e] || ""
                        }), i.css(n, margins)
                    }
                    T.spacer.parentNode.insertBefore(n, T.spacer), T.spacer.parentNode.removeChild(T.spacer), L.parentNode.hasAttribute(t) || (i.css(L, L.___origStyle), delete L.___origStyle)
                }
                window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", P), L.removeEventListener("mousewheel", D), L.removeEventListener("DOMMouseScroll", D), L = void 0
            }
            return f
        };
        var N, M = [];
        return f.on("destroy.internal", function(e) {
                f.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var n = i.get.elements(e);
                return 0 !== n.length && i.type.String(t) ? (M.length > 0 && f.removeClassToggle(), N = t, M = n, f.on("enter.internal_class leave.internal_class", function(e) {
                    var t = "enter" === e.type ? i.addClass : i.removeClass;
                    M.forEach(function(e) {
                        t(e, N)
                    })
                }), f) : f
            }, this.removeClassToggle = function(e) {
                return e && M.forEach(function(e) {
                    i.removeClass(e, N)
                }), f.off("start.internal_class end.internal_class"), N = void 0, M = [], f
            },
            function() {
                for (var e in d) u.hasOwnProperty(e) || delete d[e];
                for (var t in u) F(t);
                z()
            }(), f
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !i.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e))
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var i = e._util = function(e) {
        var t, n = {},
            r = function(e) {
                return parseFloat(e) || 0
            },
            i = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            o = function(t, n, o, s) {
                if ((n = n === document ? e : n) === e) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                }
                return a
            },
            s = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function() {
                    t(n + r)
                }, r);
            return a = n + r, i
        }), u || (u = function(t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function(e) {
            return "string" === f(e)
        }, f.Function = function(e) {
            return "function" === f(e)
        }, f.Array = function(e) {
            return Array.isArray(e)
        }, f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (e) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))
                for (var r = 0, i = n.length = t.length; i > r; r++) {
                    var o = t[r];
                    n[r] = f.DomElement(o) ? o : d.elements(o)
                } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, d.width = function(e, t, n) {
            return o("width", e, t, n)
        }, d.height = function(e, t, n) {
            return o("height", e, t, n)
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function(e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {},
                    r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "velocity"], t) : "object" == typeof exports ? t(require("scrollmagic"), require("velocity")) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.Velocity || e.jQuery && e.jQuery.Velocity)
}(this, function(e, t) {
    "use strict";
    var n = 0;
    e.Scene.extend(function() {
        var r, i, o, s, a = this,
            l = e._util,
            c = 0;
        a.on("progress.plugin_velocity", function() {
            d()
        }), a.on("destroy.plugin_velocity", function(e) {
            a.off("*.plugin_velocity"), a.removeVelocity(e.reset)
        });
        var u = function(e, n, r) {
                l.type.Array(e) ? e.forEach(function(e) {
                    u(e, n, r)
                }) : (t.Utilities.data(e, s) || t.Utilities.data(e, s, {
                    reverseProps: l.css(e, Object.keys(i))
                }), t(e, n, r), void 0 !== r.queue && t.Utilities.dequeue(e, r.queue))
            },
            f = function(e, n) {
                if (l.type.Array(e)) e.forEach(function(e) {
                    f(e, n)
                });
                else {
                    var r = t.Utilities.data(e, s);
                    r && r.reverseProps && (t(e, r.reverseProps, n), void 0 !== n.queue && t.Utilities.dequeue(e, n.queue))
                }
            },
            d = function() {
                if (r) {
                    var e = a.progress();
                    e != c && (0 === a.duration() && (e > 0 ? u(r, i, o) : f(r, o)), c = e)
                }
            };
        a.setVelocity = function(e, t, c) {
            return r && a.removeVelocity(), r = l.get.elements(e), i = t || {}, o = c || {}, s = "ScrollMagic.animation.velocity[" + n++ + "]", void 0 !== o.queue && (o.queue = s + "_queue"), d(), a
        }, a.removeVelocity = function(e) {
            return r && (void 0 !== o.queue && t(r, "stop", o.queue), e && f(r, {
                duration: 0
            }), r.forEach(function(e) {
                t.Utilities.removeData(e, s)
            }), r = i = o = s = void 0), a
        }
    })
});
