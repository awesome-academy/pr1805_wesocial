"use strict";
! function() {
    function e(e, t) {
        var n = parseInt(e, 10);
        return isNaN(n) ? 0 : "string" == typeof e && -1 !== e.indexOf("%") ? n / 100 * t : n
    }

    function t(t) {
        var n = t[s],
            r = t.chart.canvas;
        if (null === r.offsetParent) return !1;
        var a = r.getBoundingClientRect(),
            f = e(n.yOffset || 0, a.height),
            d = e(n.xOffset || 0, a.width);
        return a.right - d >= 0 && a.bottom - f >= 0 && a.left + d <= window.innerWidth && a.top + f <= window.innerHeight
    }

    function n(e) {
        var t = l.Deferred.defaults,
            n = e.options.deferred,
            r = o.getValueOrDefault;
        return void 0 === n ? n = {} : "boolean" == typeof n && (n = {
            enabled: n
        }), {
            enabled: r(n.enabled, t.enabled),
            xOffset: r(n.xOffset, t.xOffset),
            yOffset: r(n.yOffset, t.yOffset),
            delay: r(n.delay, t.delay),
            appeared: !1,
            delayed: !1,
            loaded: !1,
            elements: []
        }
    }

    function r(e) {
        var n = e.target[i];
        n.ticking || (n.ticking = !0, l.platform.defer(function() {
            var e, r, a = n.instances.slice(),
                f = a.length;
            for (r = 0; r < f; ++r) t(e = a[r]) && (d(e), e[s].appeared = !0, e.update());
            n.ticking = !1
        }))
    }

    function a(e) {
        if (e.nodeType === Node.ELEMENT_NODE) {
            var t = o.getStyle(e, "overflow-x"),
                n = o.getStyle(e, "overflow-y");
            return "auto" === t || "scroll" === t || "auto" === n || "scroll" === n
        }
        return e.nodeType === Node.DOCUMENT_NODE
    }

    function f(e) {
        for (var t, n, f = e.chart.canvas.parentElement; f;) a(f) && (0 === (n = (t = f[i] || (f[i] = {})).instances || (t.instances = [])).length && f.addEventListener("scroll", r, {
            passive: !0
        }), n.push(e), e[s].elements.push(f)), f = f.parentElement || f.ownerDocument
    }

    function d(e) {
        e[s].elements.forEach(function(t) {
            var n = t[i].instances;
            n.splice(n.indexOf(e), 1), n.length || (o.removeEvent(t, "scroll", r), delete t[i])
        }), e[s].elements = []
    }
    var l = window.Chart,
        o = l.helpers,
        i = "_chartjs_deferred",
        s = "_deferred_model";
    l.Deferred = l.Deferred || {}, l.Deferred.defaults = {
        enabled: !0,
        xOffset: 0,
        yOffset: 0,
        delay: 0
    }, l.platform = o.extend(l.platform || {}, {
        defer: function(e, t, n) {
            var r = function() {
                e.call(n)
            };
            t ? window.setTimeout(r, t) : o.requestAnimFrame.call(window, r)
        }
    }), l.plugins.register({
        beforeInit: function(e) {
            (e[s] = n(e)).enabled && f(e)
        },
        beforeDatasetsUpdate: function(e) {
            var n = e[s];
            if (!n.enabled) return !0;
            if (!n.loaded) {
                if (!n.appeared && !t(e)) return !1;
                if (n.appeared = !0, n.loaded = !0, d(e), n.delay > 0) return n.delayed = !0, l.platform.defer(function() {
                    n.delayed = !1, e.update()
                }, n.delay), !1
            }
            return !n.delayed && void 0
        }
    })
}();
