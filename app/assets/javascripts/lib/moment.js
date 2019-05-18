    !function(e, a) {
    "object"==typeof exports&&"undefined"!=typeof module?module.exports=a(): "function"==typeof define&&define.amd?define(a): e.moment=a()
}

(this, function() {
    "use strict";
    function e() {
        return ot.apply(null, arguments)
    }
    function a(e) {
        return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)
    }
    function t(e) {
        return null!=e&&"[object Object]"===Object.prototype.toString.call(e)
    }
    function s(e) {
        var a;
        for(a in e)return!1;
        return!0
    }
    function n(e) {
        return void 0===e
    }
    function r(e) {
        return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)
    }
    function d(e) {
        return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)
    }
    function _(e, a) {
        var t, s=[];
        for(t=0;
        t<e.length;
        ++t)s.push(a(e[t], t));
        return s
    }
    function i(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    function o(e, a) {
        for(var t in a)i(a, t)&&(e[t]=a[t]);
        return i(a, "toString")&&(e.toString=a.toString), i(a, "valueOf")&&(e.valueOf=a.valueOf), e
    }
    function m(e, a, t, s) {
        return Ee(e, a, t, s, !0).utc()
    }
    function u() {
        return {
            empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1
        }
    }
    function l(e) {
        return null==e._pf&&(e._pf=u()), e._pf
    }
    function M(e) {
        if(null==e._isValid) {
            var a=l(e), t=ut.call(a.parsedDateParts, function(e) {
                return null!=e
            }
            ), s=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);
            if(e._strict&&(s=s&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour), null!=Object.isFrozen&&Object.isFrozen(e))return s;
            e._isValid=s
        }
        return e._isValid
    }
    function h(e) {
        var a=m(NaN);
        return null!=e?o(l(a), e): l(a).userInvalidated=!0, a
    }
    function L(e, a) {
        var t, s, r;
        if(n(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject), n(a._i)||(e._i=a._i), n(a._f)||(e._f=a._f), n(a._l)||(e._l=a._l), n(a._strict)||(e._strict=a._strict), n(a._tzm)||(e._tzm=a._tzm), n(a._isUTC)||(e._isUTC=a._isUTC), n(a._offset)||(e._offset=a._offset), n(a._pf)||(e._pf=l(a)), n(a._locale)||(e._locale=a._locale), lt.length>0)for(t=0;
        t<lt.length;
        t++)n(r=a[s=lt[t]])||(e[s]=r);
        return e
    }
    function c(a) {
        L(this, a), this._d=new Date(null!=a._d?a._d.getTime(): NaN), this.isValid()||(this._d=new Date(NaN)), !1===Mt&&(Mt=!0, e.updateOffset(this), Mt=!1)
    }
    function Y(e) {
        return e instanceof c||null!=e&&null!=e._isAMomentObject
    }
    function y(e) {
        return e<0?Math.ceil(e)||0: Math.floor(e)
    }
    function f(e) {
        var a=+e, t=0;
        return 0!==a&&isFinite(a)&&(t=y(a)), t
    }
    function p(e, a, t) {
        var s, n=Math.min(e.length, a.length), r=Math.abs(e.length-a.length), d=0;
        for(s=0;
        s<n;
        s++)(t&&e[s]!==a[s]||!t&&f(e[s])!==f(a[s]))&&d++;
        return d+r
    }
    function D(a) {
        !1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)
    }
    function k(a, t) {
        var s=!0;
        return o(function() {
            if(null!=e.deprecationHandler&&e.deprecationHandler(null, a), s) {
                for(var n, r=[], d=0;
                d<arguments.length;
                d++) {
                    if(n="", "object"==typeof arguments[d]) {
                        n+="\n["+d+"] ";
                        for(var _ in arguments[0])n+=_+": "+arguments[0][_]+", ";
                        n=n.slice(0, -2)
                    }
                    else n=arguments[d];
                    r.push(n)
                }
                D(a+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack), s=!1
            }
            return t.apply(this, arguments)
        }
        , t)
    }
    function T(a, t) {
        null!=e.deprecationHandler&&e.deprecationHandler(a, t), ht[a]||(D(t), ht[a]=!0)
    }
    function g(e) {
        return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)
    }
    function w(e, a) {
        var s, n=o( {}
        , e);
        for(s in a)i(a, s)&&(t(e[s])&&t(a[s])?(n[s]= {}
        , o(n[s], e[s]), o(n[s], a[s])): null!=a[s]?n[s]=a[s]: delete n[s]);
        for(s in e)i(e, s)&&!i(a, s)&&t(e[s])&&(n[s]=o( {}
        , n[s]));
        return n
    }
    function v(e) {
        null!=e&&this.set(e)
    }
    function H(e, a) {
        var t=e.toLowerCase();
        kt[t]=kt[t+"s"]=kt[a]=e
    }
    function S(e) {
        return"string"==typeof e?kt[e]||kt[e.toLowerCase()]: void 0
    }
    function b(e) {
        var a, t, s= {}
        ;
        for(t in e)i(e, t)&&(a=S(t))&&(s[a]=e[t]);
        return s
    }
    function j(e, a) {
        Tt[e]=a
    }
    function x(e) {
        var a=[];
        for(var t in e)a.push( {
            unit: t, priority: Tt[t]
        }
        );
        return a.sort(function(e, a) {
            return e.priority-a.priority
        }
        ), a
    }
    function P(a, t) {
        return function(s) {
            return null!=s?(W(this, a, s), e.updateOffset(this, t), this): O(this, a)
        }
    }
    function O(e, a) {
        return e.isValid()?e._d["get"+(e._isUTC?"UTC": "")+a](): NaN
    }
    function W(e, a, t) {
        e.isValid()&&e._d["set"+(e._isUTC?"UTC": "")+a](t)
    }
    function E(e, a, t) {
        var s=""+Math.abs(e), n=a-s.length;
        return(e>=0?t?"+": "": "-")+Math.pow(10, Math.max(0, n)).toString().substr(1)+s
    }
    function A(e, a, t, s) {
        var n=s;
        "string"==typeof s&&(n=function() {
            return this[s]()
        }
        ), e&&(Ht[e]=n), a&&(Ht[a[0]]=function() {
            return E(n.apply(this, arguments), a[1], a[2])
        }
        ), t&&(Ht[t]=function() {
            return this.localeData().ordinal(n.apply(this, arguments), e)
        }
        )
    }
    function F(e) {
        return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g, ""): e.replace(/\\/g, "")
    }
    function z(e) {
        var a, t, s=e.match(gt);
        for(a=0, t=s.length;
        a<t;
        a++)Ht[s[a]]?s[a]=Ht[s[a]]: s[a]=F(s[a]);
        return function(a) {
            var n, r="";
            for(n=0;
            n<t;
            n++)r+=g(s[n])?s[n].call(a, e): s[n];
            return r
        }
    }
    function J(e, a) {
        return e.isValid()?(a=R(a, e.localeData()), vt[a]=vt[a]||z(a), vt[a](e)): e.localeData().invalidDate()
    }
    function R(e, a) {
        var t=5;
        for(wt.lastIndex=0;
        t>=0&&wt.test(e);
        )e=e.replace(wt, function(e) {
            return a.longDateFormat(e)||e
        }
        ), wt.lastIndex=0, t-=1;
        return e
    }
    function N(e, a, t) {
        Ut[e]=g(a)?a:function(e, s) {
            return e&&t?t: a
        }
    }
    function C(e, a) {
        return i(Ut, e)?Ut[e](a._strict, a._locale): new RegExp(I(e))
    }
    function I(e) {
        return G(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, t, s, n) {
            return a||t||s||n
        }
        ))
    }
    function G(e) {
        return e.replace(/[-\/\\^$*+?.()|[\] {}
        ]/g, "\\$&")
    }
    function U(e, a) {
        var t, s=a;
        for("string"==typeof e&&(e=[e]), r(a)&&(s=function(e, t) {
            t[a]=f(e)
        }
        ), t=0;
        t<e.length;
        t++)Vt[e[t]]=s
    }
    function V(e, a) {
        U(e, function(e, t, s, n) {
            s._w=s._w|| {}
            , a(e, s._w, s, n)
        }
        )
    }
    function $(e, a, t) {
        null!=a&&i(Vt, e)&&Vt[e](a, t._a, t, e)
    }
    function K(e, a) {
        return new Date(Date.UTC(e, a+1, 0)).getUTCDate()
    }
    function Z(e, a, t) {
        var s, n, r, d=e.toLocaleLowerCase();
        if(!this._monthsParse)for(this._monthsParse=[], this._longMonthsParse=[], this._shortMonthsParse=[], s=0;
        s<12;
        ++s)r=m([2e3, s]), this._shortMonthsParse[s]=this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s]=this.months(r, "").toLocaleLowerCase();
        return t?"MMM"===a?-1!==(n=ts.call(this._shortMonthsParse, d))?n: null: -1!==(n=ts.call(this._longMonthsParse, d))?n: null: "MMM"===a?-1!==(n=ts.call(this._shortMonthsParse, d))?n: -1!==(n=ts.call(this._longMonthsParse, d))?n: null: -1!==(n=ts.call(this._longMonthsParse, d))?n: -1!==(n=ts.call(this._shortMonthsParse, d))?n: null
    }
    function q(e, a) {
        var t;
        if(!e.isValid())return e;
        if("string"==typeof a)if(/^\d+$/.test(a))a=f(a);
        else if(a=e.localeData().monthsParse(a), !r(a))return e;
        return t=Math.min(e.date(), K(e.year(), a)), e._d["set"+(e._isUTC?"UTC": "")+"Month"](a, t), e
    }
    function B(a) {
        return null!=a?(q(this, a), e.updateOffset(this, !0), this): O(this, "Month")
    }
    function Q() {
        function e(e, a) {
            return a.length-e.length
        }
        var a, t, s=[], n=[], r=[];
        for(a=0;
        a<12;
        a++)t=m([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), r.push(this.months(t, "")), r.push(this.monthsShort(t, ""));
        for(s.sort(e), n.sort(e), r.sort(e), a=0;
        a<12;
        a++)s[a]=G(s[a]), n[a]=G(n[a]);
        for(a=0;
        a<24;
        a++)r[a]=G(r[a]);
        this._monthsRegex=new RegExp("^("+r.join("|")+")", "i"), this._monthsShortRegex=this._monthsRegex, this._monthsStrictRegex=new RegExp("^("+n.join("|")+")", "i"), this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")", "i")
    }
    function X(e) {
        return ee(e)?366: 365
    }
    function ee(e) {
        return e%4==0&&e%100!=0||e%400==0
    }
    function ae(e, a, t, s, n, r, d) {
        var _=new Date(e, a, t, s, n, r, d);
        return e<100&&e>=0&&isFinite(_.getFullYear())&&_.setFullYear(e), _
    }
    function te(e) {
        var a=new Date(Date.UTC.apply(null, arguments));
        return e<100&&e>=0&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e), a
    }
    function se(e, a, t) {
        var s=7+a-t;
        return-((7+te(e, 0, s).getUTCDay()-a)%7)+s-1
    }
    function ne(e, a, t, s, n) {
        var r, d, _=1+7*(a-1)+(7+t-s)%7+se(e, s, n);
        return _<=0?d=X(r=e-1)+_:_>X(e)?(r=e+1, d=_-X(e)):(r=e, d=_), {
            year: r, dayOfYear: d
        }
    }
    function re(e, a, t) {
        var s, n, r=se(e.year(), a, t), d=Math.floor((e.dayOfYear()-r-1)/7)+1;
        return d<1?s=d+de(n=e.year()-1, a, t):d>de(e.year(), a, t)?(s=d-de(e.year(), a, t), n=e.year()+1):(n=e.year(), s=d), {
            week: s, year: n
        }
    }
    function de(e, a, t) {
        var s=se(e, a, t), n=se(e+1, a, t);
        return(X(e)-s+n)/7
    }
    function _e(e, a) {
        return"string"!=typeof e?e: isNaN(e)?"number"==typeof(e=a.weekdaysParse(e))?e: null: parseInt(e, 10)
    }
    function ie(e, a) {
        return"string"==typeof e?a.weekdaysParse(e)%7||7: isNaN(e)?null: e
    }
    function oe(e, a, t) {
        var s, n, r, d=e.toLocaleLowerCase();
        if(!this._weekdaysParse)for(this._weekdaysParse=[], this._shortWeekdaysParse=[], this._minWeekdaysParse=[], s=0;
        s<7;
        ++s)r=m([2e3, 1]).day(s), this._minWeekdaysParse[s]=this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s]=this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s]=this.weekdays(r, "").toLocaleLowerCase();
        return t?"dddd"===a?-1!==(n=ts.call(this._weekdaysParse, d))?n: null: "ddd"===a?-1!==(n=ts.call(this._shortWeekdaysParse, d))?n: null: -1!==(n=ts.call(this._minWeekdaysParse, d))?n: null: "dddd"===a?-1!==(n=ts.call(this._weekdaysParse, d))?n: -1!==(n=ts.call(this._shortWeekdaysParse, d))?n: -1!==(n=ts.call(this._minWeekdaysParse, d))?n: null: "ddd"===a?-1!==(n=ts.call(this._shortWeekdaysParse, d))?n: -1!==(n=ts.call(this._weekdaysParse, d))?n: -1!==(n=ts.call(this._minWeekdaysParse, d))?n: null: -1!==(n=ts.call(this._minWeekdaysParse, d))?n: -1!==(n=ts.call(this._weekdaysParse, d))?n: -1!==(n=ts.call(this._shortWeekdaysParse, d))?n: null
    }
    function me() {
        function e(e, a) {
            return a.length-e.length
        }
        var a, t, s, n, r, d=[], _=[], i=[], o=[];
        for(a=0;
        a<7;
        a++)t=m([2e3, 1]).day(a), s=this.weekdaysMin(t, ""), n=this.weekdaysShort(t, ""), r=this.weekdays(t, ""), d.push(s), _.push(n), i.push(r), o.push(s), o.push(n), o.push(r);
        for(d.sort(e), _.sort(e), i.sort(e), o.sort(e), a=0;
        a<7;
        a++)_[a]=G(_[a]), i[a]=G(i[a]), o[a]=G(o[a]);
        this._weekdaysRegex=new RegExp("^("+o.join("|")+")", "i"), this._weekdaysShortRegex=this._weekdaysRegex, this._weekdaysMinRegex=this._weekdaysRegex, this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")", "i"), this._weekdaysShortStrictRegex=new RegExp("^("+_.join("|")+")", "i"), this._weekdaysMinStrictRegex=new RegExp("^("+d.join("|")+")", "i")
    }
    function ue() {
        return this.hours()%12||12
    }
    function le(e, a) {
        A(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a)
        }
        )
    }
    function Me(e, a) {
        return a._meridiemParse
    }
    function he(e) {
        return e?e.toLowerCase().replace("_", "-"): e
    }
    function Le(e) {
        for(var a, t, s, n, r=0;
        r<e.length;
        ) {
            for(a=(n=he(e[r]).split("-")).length, t=(t=he(e[r+1]))?t.split("-"): null;
            a>0;
            ) {
                if(s=ce(n.slice(0, a).join("-")))return s;
                if(t&&t.length>=a&&p(n, t, !0)>=a-1)break;
                a--
            }
            r++
        }
        return null
    }
    function ce(e) {
        var a=null;
        if(!ps[e]&&"undefined"!=typeof module&&module&&module.exports)try {
            a=cs._abbr, require("./locale/"+e), Ye(a)
        }
        catch(e) {}
        return ps[e]
    }
    function Ye(e, a) {
        var t;
        return e&&(t=n(a)?fe(e): ye(e, a))&&(cs=t), cs._abbr
    }
    function ye(e, a) {
        if(null!==a) {
            var t=fs;
            if(a.abbr=e, null!=ps[e])T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), t=ps[e]._config;
            else if(null!=a.parentLocale) {
                if(null==ps[a.parentLocale])return Ds[a.parentLocale]||(Ds[a.parentLocale]=[]), Ds[a.parentLocale].push( {
                    name: e, config: a
                }
                ), null;
                t=ps[a.parentLocale]._config
            }
            return ps[e]=new v(w(t, a)), Ds[e]&&Ds[e].forEach(function(e) {
                ye(e.name, e.config)
            }
            ), Ye(e), ps[e]
        }
        return delete ps[e], null
    }
    function fe(e) {
        var t;
        if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr), !e)return cs;
        if(!a(e)) {
            if(t=ce(e))return t;
            e=[e]
        }
        return Le(e)
    }
    function pe(e) {
        var a, t=e._a;
        return t&&-2===l(e).overflow&&(a=t[Kt]<0||t[Kt]>11?Kt: t[Zt]<1||t[Zt]>K(t[$t], t[Kt])?Zt: t[qt]<0||t[qt]>24||24===t[qt]&&(0!==t[Bt]||0!==t[Qt]||0!==t[Xt])?qt: t[Bt]<0||t[Bt]>59?Bt: t[Qt]<0||t[Qt]>59?Qt: t[Xt]<0||t[Xt]>999?Xt: -1, l(e)._overflowDayOfYear&&(a<$t||a>Zt)&&(a=Zt), l(e)._overflowWeeks&&-1===a&&(a=es), l(e)._overflowWeekday&&-1===a&&(a=as), l(e).overflow=a), e
    }
    function De(e) {
        var a, t, s, n, r, d, _=e._i, i=ks.exec(_)||Ts.exec(_);
        if(i) {
            for(l(e).iso=!0, a=0, t=ws.length;
            a<t;
            a++)if(ws[a][1].exec(i[1])) {
                n=ws[a][0], s=!1!==ws[a][2];
                break
            }
            if(null==n)return void(e._isValid=!1);
            if(i[3]) {
                for(a=0, t=vs.length;
                a<t;
                a++)if(vs[a][1].exec(i[3])) {
                    r=(i[2]||" ")+vs[a][0];
                    break
                }
                if(null==r)return void(e._isValid=!1)
            }
            if(!s&&null!=r)return void(e._isValid=!1);
            if(i[4]) {
                if(!gs.exec(i[4]))return void(e._isValid=!1);
                d="Z"
            }
            e._f=n+(r||"")+(d||""), Se(e)
        }
        else e._isValid=!1
    }
    function ke(e) {
        var a, t, s, n, r, d, _, i, o= {
            " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800"
        }
        ;
        if(a=e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), t=Ss.exec(a)) {
            if(s=t[1]?"ddd"+(5===t[1].length?", ": " "): "", n="D MMM "+(t[2].length>10?"YYYY ": "YY "), r="HH:mm"+(t[4]?":ss": ""), t[1]) {
                var m=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(t[2]).getDay()];
                if(t[1].substr(0, 3)!==m)return l(e).weekdayMismatch=!0,
                void(e._isValid=!1)
            }
            switch(t[5].length) {
                case 2: _=0===i?" +0000": ((i="YXWVUTSRQPONZABCDEFGHIKLM".indexOf(t[5][1].toUpperCase())-12)<0?" -": " +")+(""+i).replace(/^-?/, "0").match(/..$/)[0]+"00";
                break;
                case 4: _=o[t[5]];
                break;
                default: _=o[" GMT"]
            }
            t[5]=_,
            e._i=t.splice(1).join(""),
            d=" ZZ",
            e._f=s+n+r+d,
            Se(e),
            l(e).rfc2822=!0
        }
        else e._isValid=!1
    }
    function Te(a) {
        var t=Hs.exec(a._i);
        null===t?(De(a), !1===a._isValid&&(delete a._isValid, ke(a), !1===a._isValid&&(delete a._isValid, e.createFromInputFallback(a)))): a._d=new Date(+t[1])
    }
    function ge(e, a, t) {
        return null!=e?e: null!=a?a: t
    }
    function we(a) {
        var t=new Date(e.now());
        return a._useUTC?[t.getUTCFullYear(),
        t.getUTCMonth(),
        t.getUTCDate()]: [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function ve(e) {
        var a,
        t,
        s,
        n,
        r=[];
        if(!e._d) {
            for(s=we(e), e._w&&null==e._a[Zt]&&null==e._a[Kt]&&He(e), null!=e._dayOfYear&&(n=ge(e._a[$t], s[$t]), (e._dayOfYear>X(n)||0===e._dayOfYear)&&(l(e)._overflowDayOfYear=!0), t=te(n, 0, e._dayOfYear), e._a[Kt]=t.getUTCMonth(), e._a[Zt]=t.getUTCDate()), a=0;
            a<3&&null==e._a[a];
            ++a)e._a[a]=r[a]=s[a];
            for(;
            a<7;
            a++)e._a[a]=r[a]=null==e._a[a]?2===a?1: 0: e._a[a];
            24===e._a[qt]&&0===e._a[Bt]&&0===e._a[Qt]&&0===e._a[Xt]&&(e._nextDay=!0, e._a[qt]=0),
            e._d=(e._useUTC?te: ae).apply(null, r), null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm), e._nextDay&&(e._a[qt]=24)
        }
    }
    function He(e) {
        var a,
        t,
        s,
        n,
        r,
        d,
        _,
        i;
        if(null!=(a=e._w).GG||null!=a.W||null!=a.E)r=1,
        d=4,
        t=ge(a.GG, e._a[$t], re(Ae(), 1, 4).year),
        s=ge(a.W, 1),
        ((n=ge(a.E, 1))<1||n>7)&&(i=!0);
        else {
            r=e._locale._week.dow,
            d=e._locale._week.doy;
            var o=re(Ae(), r, d);
            t=ge(a.gg, e._a[$t], o.year),
            s=ge(a.w, o.week),
            null!=a.d?((n=a.d)<0||n>6)&&(i=!0): null!=a.e?(n=a.e+r, (a.e<0||a.e>6)&&(i=!0)): n=r
        }
        s<1||s>de(t, r, d)?l(e)._overflowWeeks=!0:null!=i?l(e)._overflowWeekday=!0:(_=ne(t, s, n, r, d), e._a[$t]=_.year, e._dayOfYear=_.dayOfYear)
    }
    function Se(a) {
        if(a._f!==e.ISO_8601)if(a._f!==e.RFC_2822) {
            a._a=[],
            l(a).empty=!0;
            var t,
            s,
            n,
            r,
            d,
            _=""+a._i,
            i=_.length,
            o=0;
            for(n=R(a._f, a._locale).match(gt)||[], t=0;
            t<n.length;
            t++)r=n[t],
            (s=(_.match(C(r, a))||[])[0])&&((d=_.substr(0, _.indexOf(s))).length>0&&l(a).unusedInput.push(d), _=_.slice(_.indexOf(s)+s.length), o+=s.length),
            Ht[r]?(s?l(a).empty=!1: l(a).unusedTokens.push(r), $(r, s, a)): a._strict&&!s&&l(a).unusedTokens.push(r);
            l(a).charsLeftOver=i-o,
            _.length>0&&l(a).unusedInput.push(_),
            a._a[qt]<=12&&!0===l(a).bigHour&&a._a[qt]>0&&(l(a).bigHour=void 0),
            l(a).parsedDateParts=a._a.slice(0),
            l(a).meridiem=a._meridiem,
            a._a[qt]=be(a._locale, a._a[qt], a._meridiem),
            ve(a),
            pe(a)
        }
        else ke(a);
        else De(a)
    }
    function be(e, a, t) {
        var s;
        return null==t?a: null!=e.meridiemHour?e.meridiemHour(a, t): null!=e.isPM?((s=e.isPM(t))&&a<12&&(a+=12), s||12!==a||(a=0), a): a
    }
    function je(e) {
        var a,
        t,
        s,
        n,
        r;
        if(0===e._f.length)return l(e).invalidFormat=!0,
        void(e._d=new Date(NaN));
        for(n=0;
        n<e._f.length;
        n++)r=0,
        a=L( {}
        , e),
        null!=e._useUTC&&(a._useUTC=e._useUTC),
        a._f=e._f[n],
        Se(a),
        M(a)&&(r+=l(a).charsLeftOver, r+=10*l(a).unusedTokens.length, l(a).score=r, (null==s||r<s)&&(s=r, t=a));
        o(e, t||a)
    }
    function xe(e) {
        if(!e._d) {
            var a=b(e._i);
            e._a=_([a.year, a.month, a.day||a.date, a.hour, a.minute, a.second, a.millisecond], function(e) {
                return e&&parseInt(e, 10)
            }
            ),
            ve(e)
        }
    }
    function Pe(e) {
        var a=new c(pe(Oe(e)));
        return a._nextDay&&(a.add(1, "d"), a._nextDay=void 0),
        a
    }
    function Oe(e) {
        var t=e._i,
        s=e._f;
        return e._locale=e._locale||fe(e._l),
        null===t||void 0===s&&""===t?h( {
            nullInput: !0
        }
        ):("string"==typeof t&&(e._i=t=e._locale.preparse(t)), Y(t)?new c(pe(t)):(d(t)?e._d=t:a(s)?je(e):s?Se(e):We(e), M(e)||(e._d=null), e))
    }
    function We(s) {
        var i=s._i;
        n(i)?s._d=new Date(e.now()):d(i)?s._d=new Date(i.valueOf()):"string"==typeof i?Te(s):a(i)?(s._a=_(i.slice(0), function(e) {
            return parseInt(e, 10)
        }
        ), ve(s)):t(i)?xe(s):r(i)?s._d=new Date(i):e.createFromInputFallback(s)
    }
    function Ee(e, n, r, d, _) {
        var i= {}
        ;
        return!0!==r&&!1!==r||(d=r, r=void 0),
        (t(e)&&s(e)||a(e)&&0===e.length)&&(e=void 0),
        i._isAMomentObject=!0,
        i._useUTC=i._isUTC=_,
        i._l=r,
        i._i=e,
        i._f=n,
        i._strict=d,
        Pe(i)
    }
    function Ae(e, a, t, s) {
        return Ee(e, a, t, s, !1)
    }
    function Fe(e, t) {
        var s,
        n;
        if(1===t.length&&a(t[0])&&(t=t[0]), !t.length)return Ae();
        for(s=t[0], n=1;
        n<t.length;
        ++n)t[n].isValid()&&!t[n][e](s)||(s=t[n]);
        return s
    }
    function ze(e) {
        for(var a in e)if(-1===xs.indexOf(a)||null!=e[a]&&isNaN(e[a]))return!1;
        for(var t=!1, s=0;
        s<xs.length;
        ++s)if(e[xs[s]]) {
            if(t)return!1;
            parseFloat(e[xs[s]])!==f(e[xs[s]])&&(t=!0)
        }
        return!0
    }
    function Je(e) {
        var a=b(e),
        t=a.year||0,
        s=a.quarter||0,
        n=a.month||0,
        r=a.week||0,
        d=a.day||0,
        _=a.hour||0,
        i=a.minute||0,
        o=a.second||0,
        m=a.millisecond||0;
        this._isValid=ze(a),
        this._milliseconds=+m+1e3*o+6e4*i+1e3*_*60*60,
        this._days=+d+7*r,
        this._months=+n+3*s+12*t,
        this._data= {}
        ,
        this._locale=fe(),
        this._bubble()
    }
    function Re(e) {
        return e instanceof Je
    }
    function Ne(e) {
        return e<0?-1*Math.round(-1*e): Math.round(e)
    }
    function Ce(e, a) {
        A(e, 0, 0, function() {
            var e=this.utcOffset(), t="+";
            return e<0&&(e=-e, t="-"), t+E(~~(e/60), 2)+a+E(~~e%60, 2)
        }
        )
    }
    function Ie(e, a) {
        var t=(a||"").match(e);
        if(null===t)return null;
        var s=((t[t.length-1]||[])+"").match(Ps)||["-",
        0,
        0],
        n=60*s[1]+f(s[2]);
        return 0===n?0: "+"===s[0]?n: -n
    }
    function Ge(a, t) {
        var s,
        n;
        return t._isUTC?(s=t.clone(), n=(Y(a)||d(a)?a.valueOf(): Ae(a).valueOf())-s.valueOf(), s._d.setTime(s._d.valueOf()+n), e.updateOffset(s, !1), s): Ae(a).local()
    }
    function Ue(e) {
        return 15*-Math.round(e._d.getTimezoneOffset()/15)
    }
    function Ve() {
        return!!this.isValid()&&(this._isUTC&&0===this._offset)
    }
    function $e(e, a) {
        var t,
        s,
        n,
        d=e,
        _=null;
        return Re(e)?d= {
            ms: e._milliseconds, d: e._days, M: e._months
        }
        :r(e)?(d= {}
        , a?d[a]=e:d.milliseconds=e):(_=Os.exec(e))?(t="-"===_[1]?-1:1, d= {
            y: 0, d: f(_[Zt])*t, h: f(_[qt])*t, m: f(_[Bt])*t, s: f(_[Qt])*t, ms: f(Ne(1e3*_[Xt]))*t
        }
        ):(_=Ws.exec(e))?(t="-"===_[1]?-1:1, d= {
            y: Ke(_[2], t), M: Ke(_[3], t), w: Ke(_[4], t), d: Ke(_[5], t), h: Ke(_[6], t), m: Ke(_[7], t), s: Ke(_[8], t)
        }
        ):null==d?d= {}
        :"object"==typeof d&&("from"in d||"to"in d)&&(n=qe(Ae(d.from), Ae(d.to)), (d= {}
        ).ms=n.milliseconds, d.M=n.months),
        s=new Je(d),
        Re(e)&&i(e, "_locale")&&(s._locale=e._locale),
        s
    }
    function Ke(e, a) {
        var t=e&&parseFloat(e.replace(",", "."));
        return(isNaN(t)?0: t)*a
    }
    function Ze(e, a) {
        var t= {
            milliseconds: 0, months: 0
        }
        ;
        return t.months=a.month()-e.month()+12*(a.year()-e.year()),
        e.clone().add(t.months, "M").isAfter(a)&&--t.months,
        t.milliseconds=+a-+e.clone().add(t.months, "M"),
        t
    }
    function qe(e, a) {
        var t;
        return e.isValid()&&a.isValid()?(a=Ge(a, e), e.isBefore(a)?t=Ze(e, a): ((t=Ze(a, e)).milliseconds=-t.milliseconds, t.months=-t.months), t): {
            milliseconds: 0, months: 0
        }
    }
    function Be(e, a) {
        return function(t, s) {
            var n,
            r;
            return null===s||isNaN(+s)||(T(a, "moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r=t, t=s, s=r),
            t="string"==typeof t?+t: t, n=$e(t, s), Qe(this, n, e), this
        }
    }
    function Qe(a, t, s, n) {
        var r=t._milliseconds,
        d=Ne(t._days),
        _=Ne(t._months);
        a.isValid()&&(n=null==n||n, r&&a._d.setTime(a._d.valueOf()+r*s), d&&W(a, "Date", O(a, "Date")+d*s), _&&q(a, O(a, "Month")+_*s), n&&e.updateOffset(a, d||_))
    }
    function Xe(e, a) {
        var t,
        s=12*(a.year()-e.year())+(a.month()-e.month()),
        n=e.clone().add(s, "months");
        return t=a-n<0?(a-n)/(n-e.clone().add(s-1, "months")): (a-n)/(e.clone().add(s+1, "months")-n), -(s+t)||0
    }
    function ea(e) {
        var a;
        return void 0===e?this._locale._abbr: (null!=(a=fe(e))&&(this._locale=a), this)
    }
    function aa() {
        return this._locale
    }
    function ta(e, a) {
        A(0, [e, e.length], 0, a)
    }
    function sa(e, a, t, s, n) {
        var r;
        return null==e?re(this, s, n).year: (r=de(e, s, n), a>r&&(a=r), na.call(this, e, a, t, s, n))
    }
    function na(e, a, t, s, n) {
        var r=ne(e, a, t, s, n),
        d=te(r.year, 0, r.dayOfYear);
        return this.year(d.getUTCFullYear()),
        this.month(d.getUTCMonth()),
        this.date(d.getUTCDate()),
        this
    }
    function ra(e) {
        return e
    }
    function da(e, a, t, s) {
        var n=fe(),
        r=m().set(s, a);
        return n[t](r, e)
    }
    function _a(e, a, t) {
        if(r(e)&&(a=e, e=void 0), e=e||"", null!=a)return da(e, a, t, "month");
        var s,
        n=[];
        for(s=0;
        s<12;
        s++)n[s]=da(e, s, t, "month");
        return n
    }
    function ia(e, a, t, s) {
        "boolean"==typeof e?(r(a)&&(t=a, a=void 0), a=a||""): (t=a=e, e=!1, r(a)&&(t=a, a=void 0), a=a||"");
        var n=fe(),
        d=e?n._week.dow: 0;
        if(null!=t)return da(a, (t+d)%7, s, "day");
        var _,
        i=[];
        for(_=0;
        _<7;
        _++)i[_]=da(a, (_+d)%7, s, "day");
        return i
    }
    function oa(e, a, t, s) {
        var n=$e(a, t);
        return e._milliseconds+=s*n._milliseconds,
        e._days+=s*n._days,
        e._months+=s*n._months,
        e._bubble()
    }
    function ma(e) {
        return e<0?Math.floor(e): Math.ceil(e)
    }
    function ua(e) {
        return 4800*e/146097
    }
    function la(e) {
        return 146097*e/4800
    }
    function Ma(e) {
        return function() {
            return this.as(e)
        }
    }
    function ha(e) {
        return function() {
            return this.isValid()?this._data[e]: NaN
        }
    }
    function La(e, a, t, s, n) {
        return n.relativeTime(a||1, !!t, e, s)
    }
    function ca(e, a, t) {
        var s=$e(e).abs(),
        n=_n(s.as("s")),
        r=_n(s.as("m")),
        d=_n(s.as("h")),
        _=_n(s.as("d")),
        i=_n(s.as("M")),
        o=_n(s.as("y")),
        m=n<=on.ss&&["s",
        n]||n<on.s&&["ss",
        n]||r<=1&&["m"]||r<on.m&&["mm",
        r]||d<=1&&["h"]||d<on.h&&["hh",
        d]||_<=1&&["d"]||_<on.d&&["dd",
        _]||i<=1&&["M"]||i<on.M&&["MM",
        i]||o<=1&&["y"]||["yy",
        o];
        return m[2]=a,
        m[3]=+e>0,
        m[4]=t,
        La.apply(null, m)
    }
    function Ya() {
        if(!this.isValid())return this.localeData().invalidDate();
        var e,
        a,
        t,
        s=mn(this._milliseconds)/1e3,
        n=mn(this._days),
        r=mn(this._months);
        a=y((e=y(s/60))/60),
        s%=60,
        e%=60;
        var d=t=y(r/12),
        _=r%=12,
        i=n,
        o=a,
        m=e,
        u=s,
        l=this.asSeconds();
        return l?(l<0?"-": "")+"P"+(d?d+"Y": "")+(_?_+"M": "")+(i?i+"D": "")+(o||m||u?"T": "")+(o?o+"H": "")+(m?m+"M": "")+(u?u+"S": ""): "P0D"
    }
    function ya(e, a) {
        var t=e.split("_");
        return a%10==1&&a%100!=11?t[0]: a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]: t[2]
    }
    function fa(e, a, t) {
        var s= {
            mm: a?"хвіліна_хвіліны_хвілін": "хвіліну_хвіліны_хвілін", hh: a?"гадзіна_гадзіны_гадзін": "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў"
        }
        ;
        return"m"===t?a?"хвіліна":"хвіліну":"h"===t?a?"гадзіна":"гадзіну":e+" "+ya(s[t], +e)
    }
    function pa(e, a, t) {
        return e+" "+ka( {
            mm: "munutenn", MM: "miz", dd: "devezh"
        }
        [t], e)
    }
    function Da(e) {
        return e>9?Da(e%10): e
    }
    function ka(e, a) {
        return 2===a?Ta(e): e
    }
    function Ta(e) {
        var a= {
            m: "v", b: "v", d: "z"
        }
        ;
        return void 0===a[e.charAt(0)]?e:a[e.charAt(0)]+e.substring(1)
    }
    function ga(e, a, t) {
        var s=e+" ";
        switch(t) {
            case"m": return a?"jedna minuta": "jedne minute";
            case"mm": return s+=1===e?"minuta": 2===e||3===e||4===e?"minute": "minuta";
            case"h": return a?"jedan sat": "jednog sata";
            case"hh": return s+=1===e?"sat": 2===e||3===e||4===e?"sata": "sati";
            case"dd": return s+=1===e?"dan": "dana";
            case"MM": return s+=1===e?"mjesec": 2===e||3===e||4===e?"mjeseca": "mjeseci";
            case"yy": return s+=1===e?"godina": 2===e||3===e||4===e?"godine": "godina"
        }
    }
    function wa(e) {
        return e>1&&e<5&&1!=~~(e/10)
    }
    function va(e, a, t, s) {
        var n=e+" ";
        switch(t) {
            case"s": return a||s?"pár sekund": "pár sekundami";
            case"m": return a?"minuta": s?"minutu": "minutou";
            case"mm": return a||s?n+(wa(e)?"minuty": "minut"): n+"minutami";
            case"h": return a?"hodina": s?"hodinu": "hodinou";
            case"hh": return a||s?n+(wa(e)?"hodiny": "hodin"): n+"hodinami";
            case"d": return a||s?"den": "dnem";
            case"dd": return a||s?n+(wa(e)?"dny": "dní"): n+"dny";
            case"M": return a||s?"měsíc": "měsícem";
            case"MM": return a||s?n+(wa(e)?"měsíce": "měsíců"): n+"měsíci";
            case"y": return a||s?"rok": "rokem";
            case"yy": return a||s?n+(wa(e)?"roky": "let"): n+"lety"
        }
    }
    function Ha(e, a, t, s) {
        var n= {
            m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e+" Tage", e+" Tagen"], M: ["ein Monat", "einem Monat"], MM: [e+" Monate", e+" Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e+" Jahre", e+" Jahren"]
        }
        ;
        return a?n[t][0]:n[t][1]
    }
    function Sa(e, a, t, s) {
        var n= {
            m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e+" Tage", e+" Tagen"], M: ["ein Monat", "einem Monat"], MM: [e+" Monate", e+" Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e+" Jahre", e+" Jahren"]
        }
        ;
        return a?n[t][0]:n[t][1]
    }
    function ba(e, a, t, s) {
        var n= {
            m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e+" Tage", e+" Tagen"], M: ["ein Monat", "einem Monat"], MM: [e+" Monate", e+" Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e+" Jahre", e+" Jahren"]
        }
        ;
        return a?n[t][0]:n[t][1]
    }
    function ja(e, a, t, s) {
        var n= {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [e+" minuti", e+" minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e+" tunni", e+" tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e+" kuu", e+" kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e+" aasta", e+" aastat"]
        }
        ;
        return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]
    }
    function xa(e, a, t, s) {
        var n="";
        switch(t) {
            case"s": return s?"muutaman sekunnin": "muutama sekunti";
            case"m": return s?"minuutin": "minuutti";
            case"mm": n=s?"minuutin": "minuuttia";
            break;
            case"h": return s?"tunnin": "tunti";
            case"hh": n=s?"tunnin": "tuntia";
            break;
            case"d": return s?"päivän": "päivä";
            case"dd": n=s?"päivän": "päivää";
            break;
            case"M": return s?"kuukauden": "kuukausi";
            case"MM": n=s?"kuukauden": "kuukautta";
            break;
            case"y": return s?"vuoden": "vuosi";
            case"yy": n=s?"vuoden": "vuotta"
        }
        return n=Pa(e, s)+" "+n
    }
    function Pa(e, a) {
        return e<10?a?Nn[e]: Rn[e]: e
    }
    function Oa(e, a, t, s) {
        var n= {
            s: ["thodde secondanim", "thodde second"], m: ["eka mintan", "ek minute"], mm: [e+" mintanim", e+" mintam"], h: ["eka horan", "ek hor"], hh: [e+" horanim", e+" hor"], d: ["eka disan", "ek dis"], dd: [e+" disanim", e+" dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e+" mhoineanim", e+" mhoine"], y: ["eka vorsan", "ek voros"], yy: [e+" vorsanim", e+" vorsam"]
        }
        ;
        return a?n[t][0]:n[t][1]
    }
    function Wa(e, a, t) {
        var s=e+" ";
        switch(t) {
            case"m": return a?"jedna minuta": "jedne minute";
            case"mm": return s+=1===e?"minuta": 2===e||3===e||4===e?"minute": "minuta";
            case"h": return a?"jedan sat": "jednog sata";
            case"hh": return s+=1===e?"sat": 2===e||3===e||4===e?"sata": "sati";
            case"dd": return s+=1===e?"dan": "dana";
            case"MM": return s+=1===e?"mjesec": 2===e||3===e||4===e?"mjeseca": "mjeseci";
            case"yy": return s+=1===e?"godina": 2===e||3===e||4===e?"godine": "godina"
        }
    }
    function Ea(e, a, t, s) {
        var n=e;
        switch(t) {
            case"s": return s||a?"néhány másodperc": "néhány másodperce";
            case"m": return"egy"+(s||a?" perc": " perce");
            case"mm": return n+(s||a?" perc": " perce");
            case"h": return"egy"+(s||a?" óra": " órája");
            case"hh": return n+(s||a?" óra": " órája");
            case"d": return"egy"+(s||a?" nap": " napja");
            case"dd": return n+(s||a?" nap": " napja");
            case"M": return"egy"+(s||a?" hónap": " hónapja");
            case"MM": return n+(s||a?" hónap": " hónapja");
            case"y": return"egy"+(s||a?" év": " éve");
            case"yy": return n+(s||a?" év": " éve")
        }
        return""
    }
    function Aa(e) {
        return(e?"": "[múlt] ")+"["+Bn[this.day()]+"] LT[-kor]"
    }
    function Fa(e) {
        return e%100==11||e%10!=1
    }
    function za(e, a, t, s) {
        var n=e+" ";
        switch(t) {
            case"s": return a||s?"nokkrar sekúndur": "nokkrum sekúndum";
            case"m": return a?"mínúta": "mínútu";
            case"mm": return Fa(e)?n+(a||s?"mínútur": "mínútum"): a?n+"mínúta": n+"mínútu";
            case"hh": return Fa(e)?n+(a||s?"klukkustundir": "klukkustundum"): n+"klukkustund";
            case"d": return a?"dagur": s?"dag": "degi";
            case"dd": return Fa(e)?a?n+"dagar": n+(s?"daga": "dögum"): a?n+"dagur": n+(s?"dag": "degi");
            case"M": return a?"mánuður": s?"mánuð": "mánuði";
            case"MM": return Fa(e)?a?n+"mánuðir": n+(s?"mánuði": "mánuðum"): a?n+"mánuður": n+(s?"mánuð": "mánuði");
            case"y": return a||s?"ár": "ári";
            case"yy": return Fa(e)?n+(a||s?"ár": "árum"): n+(a||s?"ár": "ári")
        }
    }
    function Ja(e, a, t, s) {
        var n= {
            m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"]
        }
        ;
        return a?n[t][0]:n[t][1]
    }
    function Ra(e) {
        if(e=parseInt(e, 10), isNaN(e))return!1;
        if(e<0)return!0;
        if(e<10)return 4<=e&&e<=7;
        if(e<100) {
            var a=e%10,
            t=e/10;
            return Ra(0===a?t: a)
        }
        if(e<1e4) {
            for(;
            e>=10;
            )e/=10;
            return Ra(e)
        }
        return e/=1e3,
        Ra(e)
    }
    function Na(e, a, t, s) {
        return a?Ia(t)[0]: s?Ia(t)[1]: Ia(t)[2]
    }
    function Ca(e) {
        return e%10==0||e>10&&e<20
    }
    function Ia(e) {
        return tr[e].split("_")
    }
    function Ga(e, a, t, s) {
        var n=e+" ";
        return 1===e?n+Na(e, a, t[0], s): a?n+(Ca(e)?Ia(t)[1]: Ia(t)[0]): s?n+Ia(t)[1]: n+(Ca(e)?Ia(t)[1]: Ia(t)[2])
    }
    function Ua(e, a, t) {
        return t?a%10==1&&a%100!=11?e[2]: e[3]: a%10==1&&a%100!=11?e[0]: e[1]
    }
    function Va(e, a, t) {
        return e+" "+Ua(sr[t], e, a)
    }
    function $a(e, a, t) {
        return Ua(sr[t], e, a)
    }
    function Ka(e, a, t, s) {
        var n="";
        if(a)switch(t) {
            case"s": n="काही सेकंद";
            break;
            case"m": n="एक मिनिट";
            break;
            case"mm": n="%d मिनिटे";
            break;
            case"h": n="एक तास";
            break;
            case"hh": n="%d तास";
            break;
            case"d": n="एक दिवस";
            break;
            case"dd": n="%d दिवस";
            break;
            case"M": n="एक महिना";
            break;
            case"MM": n="%d महिने";
            break;
            case"y": n="एक वर्ष";
            break;
            case"yy": n="%d वर्षे"
        }
        else switch(t) {
            case"s": n="काही सेकंदां";
            break;
            case"m": n="एका मिनिटा";
            break;
            case"mm": n="%d मिनिटां";
            break;
            case"h": n="एका तासा";
            break;
            case"hh": n="%d तासां";
            break;
            case"d": n="एका दिवसा";
            break;
            case"dd": n="%d दिवसां";
            break;
            case"M": n="एका महिन्या";
            break;
            case"MM": n="%d महिन्यां";
            break;
            case"y": n="एका वर्षा";
            break;
            case"yy": n="%d वर्षां"
        }
        return n.replace(/%d/i, e)
    }
    function Za(e) {
        return e%10<5&&e%10>1&&~~(e/10)%10!=1
    }
    function qa(e, a, t) {
        var s=e+" ";
        switch(t) {
            case"m": return a?"minuta": "minutę";
            case"mm": return s+(Za(e)?"minuty": "minut");
            case"h": return a?"godzina": "godzinę";
            case"hh": return s+(Za(e)?"godziny": "godzin");
            case"MM": return s+(Za(e)?"miesiące": "miesięcy");
            case"yy": return s+(Za(e)?"lata": "lat")
        }
    }
    function Ba(e, a, t) {
        var s= {
            mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"
        }
        ,
        n=" ";
        return(e%100>=20||e>=100&&e%100==0)&&(n=" de "),
        e+n+s[t]
    }
    function Qa(e, a) {
        var t=e.split("_");
        return a%10==1&&a%100!=11?t[0]: a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]: t[2]
    }
    function Xa(e, a, t) {
        var s= {
            mm: a?"минута_минуты_минут": "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет"
        }
        ;
        return"m"===t?a?"минута":"минуту":e+" "+Qa(s[t], +e)
    }
    function et(e) {
        return e>1&&e<5
    }
    function at(e, a, t, s) {
        var n=e+" ";
        switch(t) {
            case"s": return a||s?"pár sekúnd": "pár sekundami";
            case"m": return a?"minúta": s?"minútu": "minútou";
            case"mm": return a||s?n+(et(e)?"minúty": "minút"): n+"minútami";
            case"h": return a?"hodina": s?"hodinu": "hodinou";
            case"hh": return a||s?n+(et(e)?"hodiny": "hodín"): n+"hodinami";
            case"d": return a||s?"deň": "dňom";
            case"dd": return a||s?n+(et(e)?"dni": "dní"): n+"dňami";
            case"M": return a||s?"mesiac": "mesiacom";
            case"MM": return a||s?n+(et(e)?"mesiace": "mesiacov"): n+"mesiacmi";
            case"y": return a||s?"rok": "rokom";
            case"yy": return a||s?n+(et(e)?"roky": "rokov"): n+"rokmi"
        }
    }
    function tt(e, a, t, s) {
        var n=e+" ";
        switch(t) {
            case"s": return a||s?"nekaj sekund": "nekaj sekundami";
            case"m": return a?"ena minuta": "eno minuto";
            case"mm": return n+=1===e?a?"minuta": "minuto": 2===e?a||s?"minuti": "minutama": e<5?a||s?"minute": "minutami": a||s?"minut": "minutami";
            case"h": return a?"ena ura": "eno uro";
            case"hh": return n+=1===e?a?"ura": "uro": 2===e?a||s?"uri": "urama": e<5?a||s?"ure": "urami": a||s?"ur": "urami";
            case"d": return a||s?"en dan": "enim dnem";
            case"dd": return n+=1===e?a||s?"dan": "dnem": 2===e?a||s?"dni": "dnevoma": a||s?"dni": "dnevi";
            case"M": return a||s?"en mesec": "enim mesecem";
            case"MM": return n+=1===e?a||s?"mesec": "mesecem": 2===e?a||s?"meseca": "mesecema": e<5?a||s?"mesece": "meseci": a||s?"mesecev": "meseci";
            case"y": return a||s?"eno leto": "enim letom";
            case"yy": return n+=1===e?a||s?"leto": "letom": 2===e?a||s?"leti": "letoma": e<5?a||s?"leta": "leti": a||s?"let": "leti"
        }
    }
    function st(e, a, t, s) {
        var n=nt(e);
        switch(t) {
            case"mm": return n+" tup";
            case"hh": return n+" rep";
            case"dd": return n+" jaj";
            case"MM": return n+" jar";
            case"yy": return n+" DIS"
        }
    }
    function nt(e) {
        var a=Math.floor(e%1e3/100),
        t=Math.floor(e%100/10),
        s=e%10,
        n="";
        return a>0&&(n+=Pr[a]+"vatlh"),
        t>0&&(n+=(""!==n?" ": "")+Pr[t]+"maH"), s>0&&(n+=(""!==n?" ": "")+Pr[s]), ""===n?"pagh": n
    }
    function rt(e, a, t, s) {
        var n= {
            s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [e+" míuts", e+" míuts"], h: ["'n þora", "'iensa þora"], hh: [e+" þoras", e+" þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e+" ziuas", e+" ziuas"], M: ["'n mes", "'iens mes"], MM: [e+" mesen", e+" mesen"], y: ["'n ar", "'iens ar"], yy: [e+" ars", e+" ars"]
        }
        ;
        return s?n[t][0]:a?n[t][0]:n[t][1]
    }
    function dt(e, a) {
        var t=e.split("_");
        return a%10==1&&a%100!=11?t[0]: a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]: t[2]
    }
    function _t(e, a, t) {
        var s= {
            mm: a?"хвилина_хвилини_хвилин": "хвилину_хвилини_хвилин", hh: a?"година_години_годин": "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років"
        }
        ;
        return"m"===t?a?"хвилина":"хвилину":"h"===t?a?"година":"годину":e+" "+dt(s[t], +e)
    }
    function it(e) {
        return function() {
            return e+"о"+(11===this.hours()?"б": "")+"] LT"
        }
    }
    var ot,
    mt,
    ut=mt=Array.prototype.some?Array.prototype.some:function(e) {
        for(var a=Object(this), t=a.length>>>0, s=0;
        s<t;
        s++)if(s in a&&e.call(this, a[s], s, a))return!0;
        return!1
    }
    ,
    lt=e.momentProperties=[],
    Mt=!1,
    ht= {}
    ;
    e.suppressDeprecationWarnings=!1,
    e.deprecationHandler=null;
    var Lt,
    ct,
    Yt=Lt=Object.keys?Object.keys:function(e) {
        var a,
        t=[];
        for(a in e)i(e, a)&&t.push(a);
        return t
    }
    ,
    yt= {
        sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"
    }
    ,
    ft= {
        LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A"
    }
    ,
    pt=/\d {
        1,
        2
    }
    /,
    Dt= {
        future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"
    }
    ,
    kt= {}
    ,
    Tt= {}
    ,
    gt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S {
        1, 9
    }
    |x|X|zz?|ZZ?|.)/g,
    wt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l {
        1, 4
    }
    )/g,
    vt= {}
    ,
    Ht= {}
    ,
    St=/\d/,
    bt=/\d\d/,
    jt=/\d {
        3
    }
    /,
    xt=/\d {
        4
    }
    /,
    Pt=/[+-]?\d {
        6
    }
    /,
    Ot=/\d\d?/,
    Wt=/\d\d\d\d?/,
    Et=/\d\d\d\d\d\d?/,
    At=/\d {
        1,
        3
    }
    /,
    Ft=/\d {
        1,
        4
    }
    /,
    zt=/[+-]?\d {
        1,
        6
    }
    /,
    Jt=/\d+/,
    Rt=/[+-]?\d+/,
    Nt=/Z|[+-]\d\d:?\d\d/gi,
    Ct=/Z|[+-]\d\d(?::?\d\d)?/gi,
    It=/[+-]?\d+(\.\d {
        1, 3
    }
    )?/,
    Gt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ut={},Vt={},$t=0,Kt=1,Zt=2,qt=3,Bt=4,Qt=5,Xt=6,es=7,as=8,ts=ct=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1};A("M",["MM",2],"Mo",function(){return this.month()+1}),A("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),A("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),j("month",8),N("M",Ot),N("MM",Ot,bt),N("MMM",function(e,a){return a.monthsShortRegex(e)}),N("MMMM",function(e,a){return a.monthsRegex(e)}),U(["M","MM"],function(e,a){a[Kt]=f(e)-1}),U(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[Kt]=n:l(t).invalidMonth=e});var ss=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ns="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),rs="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ds=Gt,_s=Gt;A("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),A(0,["YY",2],0,function(){return this.year()%100}),A(0,["YYYY",4],0,"year"),A(0,["YYYYY",5],0,"year"),A(0,["YYYYYY",6,!0],0,"year"),H("year","y"),j("year",1),N("Y",Rt),N("YY",Ot,bt),N("YYYY",Ft,xt),N("YYYYY",zt,Pt),N("YYYYYY",zt,Pt),U(["YYYYY","YYYYYY"],$t),U("YYYY",function(a,t){t[$t]=2===a.length?e.parseTwoDigitYear(a):f(a)}),U("YY",function(a,t){t[$t]=e.parseTwoDigitYear(a)}),U("Y",function(e,a){a[$t]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return f(e)+(f(e)>68?1900:2e3)};var is=P("FullYear",!0);A("w",["ww",2],"wo","week"),A("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),j("week",5),j("isoWeek",5),N("w",Ot),N("ww",Ot,bt),N("W",Ot),N("WW",Ot,bt),V(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=f(e)});var os={dow:0,doy:6};A("d",0,"do","day"),A("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),A("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),A("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),A("e",0,0,"weekday"),A("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),j("day",11),j("weekday",11),j("isoWeekday",11),N("d",Ot),N("e",Ot),N("E",Ot),N("dd",function(e,a){return a.weekdaysMinRegex(e)}),N("ddd",function(e,a){return a.weekdaysShortRegex(e)}),N("dddd",function(e,a){return a.weekdaysRegex(e)}),V(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:l(t).invalidWeekday=e}),V(["d","e","E"],function(e,a,t,s){a[s]=f(e)});var ms="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),us="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ls="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ms=Gt,hs=Gt,Ls=Gt;A("H",["HH",2],0,"hour"),A("h",["hh",2],0,ue),A("k",["kk",2],0,function(){return this.hours()||24}),A("hmm",0,0,function(){return""+ue.apply(this)+E(this.minutes(),2)}),A("hmmss",0,0,function(){return""+ue.apply(this)+E(this.minutes(),2)+E(this.seconds(),2)}),A("Hmm",0,0,function(){return""+this.hours()+E(this.minutes(),2)}),A("Hmmss",0,0,function(){return""+this.hours()+E(this.minutes(),2)+E(this.seconds(),2)}),le("a",!0),le("A",!1),H("hour","h"),j("hour",13),N("a",Me),N("A",Me),N("H",Ot),N("h",Ot),N("k",Ot),N("HH",Ot,bt),N("hh",Ot,bt),N("kk",Ot,bt),N("hmm",Wt),N("hmmss",Et),N("Hmm",Wt),N("Hmmss",Et),U(["H","HH"],qt),U(["k","kk"],function(e,a,t){var s=f(e);a[qt]=24===s?0:s}),U(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),U(["h","hh"],function(e,a,t){a[qt]=f(e),l(t).bigHour=!0}),U("hmm",function(e,a,t){var s=e.length-2;a[qt]=f(e.substr(0,s)),a[Bt]=f(e.substr(s)),l(t).bigHour=!0}),U("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[qt]=f(e.substr(0,s)),a[Bt]=f(e.substr(s,2)),a[Qt]=f(e.substr(n)),l(t).bigHour=!0}),U("Hmm",function(e,a,t){var s=e.length-2;a[qt]=f(e.substr(0,s)),a[Bt]=f(e.substr(s))}),U("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[qt]=f(e.substr(0,s)),a[Bt]=f(e.substr(s,2)),a[Qt]=f(e.substr(n))});var cs,Ys=/[ap]\.?m?\.?/i,ys=P("Hours",!0),fs={calendar:yt,longDateFormat:ft,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:pt,relativeTime:Dt,months:ns,monthsShort:rs,week:os,weekdays:ms,weekdaysMin:ls,weekdaysShort:us,meridiemParse:Ys},ps={},Ds={},ks=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ts=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gs=/Z|[+-]\d\d(?::?\d\d)?/,ws=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vs=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Hs=/^\/?Date\((\-?\d+)/i,Ss=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var bs=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ae.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:h()}),js=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ae.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:h()}),xs=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ce("Z",":"),Ce("ZZ",""),N("Z",Ct),N("ZZ",Ct),U(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Ie(Ct,e)});var Ps=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var Os=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ws=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;$e.fn=Je.prototype,$e.invalid=function(){return $e(NaN)};var Es=Be(1,"add"),As=Be(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Fs=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});A(0,["gg",2],0,function(){return this.weekYear()%100}),A(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ta("gggg","weekYear"),ta("ggggg","weekYear"),ta("GGGG","isoWeekYear"),ta("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),j("weekYear",1),j("isoWeekYear",1),N("G",Rt),N("g",Rt),N("GG",Ot,bt),N("gg",Ot,bt),N("GGGG",Ft,xt),N("gggg",Ft,xt),N("GGGGG",zt,Pt),N("ggggg",zt,Pt),V(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=f(e)}),V(["gg","GG"],function(a,t,s,n){t[n]=e.parseTwoDigitYear(a)}),A("Q",0,"Qo","quarter"),H("quarter","Q"),j("quarter",7),N("Q",St),U("Q",function(e,a){a[Kt]=3*(f(e)-1)}),A("D",["DD",2],"Do","date"),H("date","D"),j("date",9),N("D",Ot),N("DD",Ot,bt),N("Do",function(e,a){return e?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),U(["D","DD"],Zt),U("Do",function(e,a){a[Zt]=f(e.match(Ot)[0],10)});var zs=P("Date",!0);A("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),j("dayOfYear",4),N("DDD",At),N("DDDD",jt),U(["DDD","DDDD"],function(e,a,t){t._dayOfYear=f(e)}),A("m",["mm",2],0,"minute"),H("minute","m"),j("minute",14),N("m",Ot),N("mm",Ot,bt),U(["m","mm"],Bt);var Js=P("Minutes",!1);A("s",["ss",2],0,"second"),H("second","s"),j("second",15),N("s",Ot),N("ss",Ot,bt),U(["s","ss"],Qt);var Rs=P("Seconds",!1);A("S",0,0,function(){return~~(this.millisecond()/100)}),A(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),A(0,["SSS",3],0,"millisecond"),A(0,["SSSS",4],0,function(){return 10*this.millisecond()}),A(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),A(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),A(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),A(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),A(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),j("millisecond",16),N("S",At,St),N("SS",At,bt),N("SSS",At,jt);var Ns;for(Ns="SSSS";Ns.length<=9;Ns+="S")N(Ns,Jt);for(Ns="S";Ns.length<=9;Ns+="S")U(Ns,function(e,a){a[Xt]=f(1e3*("0."+e))});var Cs=P("Milliseconds",!1);A("z",0,0,"zoneAbbr"),A("zz",0,0,"zoneName");var Is=c.prototype;Is.add=Es,Is.calendar=function(a,t){var s=a||Ae(),n=Ge(s,this).startOf("day"),r=e.calendarFormat(this,n)||"sameElse",d=t&&(g(t[r])?t[r].call(this,s):t[r]);return this.format(d||this.localeData().calendar(r,this,Ae(s)))},Is.clone=function(){return new c(this)},Is.diff=function(e,a,t){var s,n,r,d;return this.isValid()&&(s=Ge(e,this)).isValid()?(n=6e4*(s.utcOffset()-this.utcOffset()),"year"===(a=S(a))||"month"===a||"quarter"===a?(d=Xe(this,s),"quarter"===a?d/=3:"year"===a&&(d/=12)):(r=this-s,d="second"===a?r/1e3:"minute"===a?r/6e4:"hour"===a?r/36e5:"day"===a?(r-n)/864e5:"week"===a?(r-n)/6048e5:r),t?d:y(d)):NaN},Is.endOf=function(e){return void 0===(e=S(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},Is.format=function(a){a||(a=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var t=J(this,a);return this.localeData().postformat(t)},Is.from=function(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ae(e).isValid())?$e({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},Is.fromNow=function(e){return this.from(Ae(),e)},Is.to=function(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ae(e).isValid())?$e({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},Is.toNow=function(e){return this.to(Ae(),e)},Is.get=function(e){return e=S(e),g(this[e])?this[e]():this},Is.invalidAt=function(){return l(this).overflow},Is.isAfter=function(e,a){var t=Y(e)?e:Ae(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=S(n(a)?"millisecond":a))?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())},Is.isBefore=function(e,a){var t=Y(e)?e:Ae(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=S(n(a)?"millisecond":a))?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())},Is.isBetween=function(e,a,t,s){return("("===(s=s||"()")[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t))},Is.isSame=function(e,a){var t,s=Y(e)?e:Ae(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(a=S(a||"millisecond"))?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))},Is.isSameOrAfter=function(e,a){return this.isSame(e,a)||this.isAfter(e,a)},Is.isSameOrBefore=function(e,a){return this.isSame(e,a)||this.isBefore(e,a)},Is.isValid=function(){return M(this)},Is.lang=Fs,Is.locale=ea,Is.localeData=aa,Is.max=js,Is.min=bs,Is.parsingFlags=function(){return o({},l(this))},Is.set=function(e,a){if("object"==typeof e)for(var t=x(e=b(e)),s=0;s<t.length;s++)this[t[s].unit](e[t[s].unit]);else if(e=S(e),g(this[e]))return this[e](a);return this},Is.startOf=function(e){switch(e=S(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},Is.subtract=As,Is.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},Is.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},Is.toDate=function(){return new Date(this.valueOf())},Is.toISOString=function(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?J(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):g(Date.prototype.toISOString)?this.toDate().toISOString():J(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},Is.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",a="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",a="Z");var t="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=a+'[")]';return this.format(t+s+"-MM-DD[T]HH:mm:ss.SSS"+n)},Is.toJSON=function(){return this.isValid()?this.toISOString():null},Is.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Is.unix=function(){return Math.floor(this.valueOf()/1e3)},Is.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Is.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Is.year=is,Is.isLeapYear=function(){return ee(this.year())},Is.weekYear=function(e){return sa.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Is.isoWeekYear=function(e){return sa.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},Is.quarter=Is.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},Is.month=B,Is.daysInMonth=function(){return K(this.year(),this.month())},Is.week=Is.weeks=function(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")},Is.isoWeek=Is.isoWeeks=function(e){var a=re(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")},Is.weeksInYear=function(){var e=this.localeData()._week;return de(this.year(),e.dow,e.doy)},Is.isoWeeksInYear=function(){return de(this.year(),1,4)},Is.date=zs,Is.day=Is.days=function(e){if(!this.isValid())return null!=e?this:NaN;var a=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=_e(e,this.localeData()),this.add(e-a,"d")):a},Is.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")},Is.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var a=ie(e,this.localeData());return this.day(this.day()%7?a:a-7)}return this.day()||7},Is.dayOfYear=function(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")},Is.hour=Is.hours=ys,Is.minute=Is.minutes=Js,Is.second=Is.seconds=Rs,Is.millisecond=Is.milliseconds=Cs,Is.utcOffset=function(a,t,s){var n,r=this._offset||0;if(!this.isValid())return null!=a?this:NaN;if(null!=a){if("string"==typeof a){if(null===(a=Ie(Ct,a)))return this}else Math.abs(a)<16&&!s&&(a*=60);return!this._isUTC&&t&&(n=Ue(this)),this._offset=a,this._isUTC=!0,null!=n&&this.add(n,"m"),r!==a&&(!t||this._changeInProgress?Qe(this,$e(a-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Ue(this)},Is.utc=function(e){return this.utcOffset(0,e)},Is.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ue(this),"m")),this},Is.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ie(Nt,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},Is.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Ae(e).utcOffset():0,(this.utcOffset()-e)%60==0)},Is.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Is.isLocal=function(){return!!this.isValid()&&!this._isUTC},Is.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Is.isUtc=Ve,Is.isUTC=Ve,Is.zoneAbbr=function(){return this._isUTC?"UTC":""},Is.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Is.dates=k("dates accessor is deprecated. Use date instead.",zs),Is.months=k("months accessor is deprecated. Use month instead",B),Is.years=k("years accessor is deprecated. Use year instead",is),Is.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}),Is.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!n(this._isDSTShifted))return this._isDSTShifted;var e={};if(L(e,this),(e=Oe(e))._a){var a=e._isUTC?m(e._a):Ae(e._a);this._isDSTShifted=this.isValid()&&p(e._a,a.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var Gs=v.prototype;Gs.calendar=function(e,a,t){var s=this._calendar[e]||this._calendar.sameElse;return g(s)?s.call(a,t):s},Gs.longDateFormat=function(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},Gs.invalidDate=function(){return this._invalidDate},Gs.ordinal=function(e){return this._ordinal.replace("%d",e)},Gs.preparse=ra,Gs.postformat=ra,Gs.relativeTime=function(e,a,t,s){var n=this._relativeTime[t];return g(n)?n(e,a,t,s):n.replace(/%d/i,e)},Gs.pastFuture=function(e,a){var t=this._relativeTime[e>0?"future":"past"];return g(t)?t(a):t.replace(/%s/i,a)},Gs.set=function(e){var a,t;for(t in e)g(a=e[t])?this[t]=a:this["_"+t]=a;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Gs.months=function(e,t){return e?a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ss).test(t)?"format":"standalone"][e.month()]:a(this._months)?this._months:this._months.standalone},Gs.monthsShort=function(e,t){return e?a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ss.test(t)?"format":"standalone"][e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Gs.monthsParse=function(e,a,t){var s,n,r;if(this._monthsParseExact)return Z.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=m([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}},Gs.monthsRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||Q.call(this),e?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=_s),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},Gs.monthsShortRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||Q.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ds),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},Gs.week=function(e){return re(e,this._week.dow,this._week.doy).week},Gs.firstDayOfYear=function(){return this._week.doy},Gs.firstDayOfWeek=function(){return this._week.dow},Gs.weekdays=function(e,t){return e?a(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:a(this._weekdays)?this._weekdays:this._weekdays.standalone},Gs.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},Gs.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},Gs.weekdaysParse=function(e,a,t){var s,n,r;if(this._weekdaysParseExact)return oe.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=m([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}},Gs.weekdaysRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||me.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=Ms),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},Gs.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||me.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hs),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Gs.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||me.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ls),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Gs.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},Gs.meridiem=function(e,a,t){return e>11?t?"pm":"PM":t?"am":"AM"},Ye("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1===f(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Ye),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",fe);var Us=Math.abs,Vs=Ma("ms"),$s=Ma("s"),Ks=Ma("m"),Zs=Ma("h"),qs=Ma("d"),Bs=Ma("w"),Qs=Ma("M"),Xs=Ma("y"),en=ha("milliseconds"),an=ha("seconds"),tn=ha("minutes"),sn=ha("hours"),nn=ha("days"),rn=ha("months"),dn=ha("years"),_n=Math.round,on={ss:44,s:45,m:45,h:22,d:26,M:11},mn=Math.abs,un=Je.prototype;un.isValid=function(){return this._isValid},un.abs=function(){var e=this._data;return this._milliseconds=Us(this._milliseconds),this._days=Us(this._days),this._months=Us(this._months),e.milliseconds=Us(e.milliseconds),e.seconds=Us(e.seconds),e.minutes=Us(e.minutes),e.hours=Us(e.hours),e.months=Us(e.months),e.years=Us(e.years),this},un.add=function(e,a){return oa(this,e,a,1)},un.subtract=function(e,a){return oa(this,e,a,-1)},un.as=function(e){if(!this.isValid())return NaN;var a,t,s=this._milliseconds;if("month"===(e=S(e))||"year"===e)return a=this._days+s/864e5,t=this._months+ua(a),"month"===e?t:t/12;switch(a=this._days+Math.round(la(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}},un.asMilliseconds=Vs,un.asSeconds=$s,un.asMinutes=Ks,un.asHours=Zs,un.asDays=qs,un.asWeeks=Bs,un.asMonths=Qs,un.asYears=Xs,un.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*f(this._months/12):NaN},un._bubble=function(){var e,a,t,s,n,r=this._milliseconds,d=this._days,_=this._months,i=this._data;return r>=0&&d>=0&&_>=0||r<=0&&d<=0&&_<=0||(r+=864e5*ma(la(_)+d),d=0,_=0),i.milliseconds=r%1e3,e=y(r/1e3),i.seconds=e%60,a=y(e/60),i.minutes=a%60,t=y(a/60),i.hours=t%24,d+=y(t/24),n=y(ua(d)),_+=n,d-=ma(la(n)),s=y(_/12),_%=12,i.days=d,i.months=_,i.years=s,this},un.get=function(e){return e=S(e),this.isValid()?this[e+"s"]():NaN},un.milliseconds=en,un.seconds=an,un.minutes=tn,un.hours=sn,un.days=nn,un.weeks=function(){return y(this.days()/7)},un.months=rn,un.years=dn,un.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var a=this.localeData(),t=ca(this,!e,a);return e&&(t=a.pastFuture(+this,t)),a.postformat(t)},un.toISOString=Ya,un.toString=Ya,un.toJSON=Ya,un.locale=ea,un.localeData=aa,un.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ya),un.lang=Fs,A("X",0,0,"unix"),A("x",0,0,"valueOf"),N("x",Rt),N("X",It),U("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),U("x",function(e,a,t){t._d=new Date(f(e))}),e.version="2.18.1",function(e){ot=e}(Ae),e.fn=Is,e.min=function(){return Fe("isBefore",[].slice.call(arguments,0))},e.max=function(){return Fe("isAfter",[].slice.call(arguments,0))},e.now=function(){return Date.now?Date.now():+new Date},e.utc=m,e.unix=function(e){return Ae(1e3*e)},e.months=function(e,a){return _a(e,a,"months")},e.isDate=d,e.locale=Ye,e.invalid=h,e.duration=$e,e.isMoment=Y,e.weekdays=function(e,a,t){return ia(e,a,t,"weekdays")},e.parseZone=function(){return Ae.apply(null,arguments).parseZone()},e.localeData=fe,e.isDuration=Re,e.monthsShort=function(e,a){return _a(e,a,"monthsShort")},e.weekdaysMin=function(e,a,t){return ia(e,a,t,"weekdaysMin")},e.defineLocale=ye,e.updateLocale=function(e,a){if(null!=a){var t,s=fs;null!=ps[e]&&(s=ps[e]._config),(t=new v(a=w(s,a))).parentLocale=ps[e],ps[e]=t,Ye(e)}else null!=ps[e]&&(null!=ps[e].parentLocale?ps[e]=ps[e].parentLocale:null!=ps[e]&&delete ps[e]);return ps[e]},e.locales=function(){return Yt(ps)},e.weekdaysShort=function(e,a,t){return ia(e,a,t,"weekdaysShort")},e.normalizeUnits=S,e.relativeTimeRounding=function(e){return void 0===e?_n:"function"==typeof e&&(_n=e,!0)},e.relativeTimeThreshold=function(e,a){return void 0!==on[e]&&(void 0===a?on[e]:(on[e]=a,"s"===e&&(on.ss=a-1),!0))},e.calendarFormat=function(e,a){var t=e.diff(a,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"},e.prototype=Is,e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}}),e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}});var ln={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},Mn=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},hn={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},Ln=function(e){return function(a,t,s,n){var r=Mn(a),d=hn[e][Mn(a)];return 2===r&&(d=d[t?0:1]),d.replace(/%d/i,a)}},cn=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-ly",{months:cn,monthsShort:cn,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:Ln("s"),m:Ln("m"),mm:Ln("m"),h:Ln("h"),hh:Ln("h"),d:Ln("d"),dd:Ln("d"),M:Ln("M"),MM:Ln("M"),y:Ln("y"),yy:Ln("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return ln[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});var Yn={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},yn={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return yn[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Yn[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}}),e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});var fn={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},pn={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},Dn=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},kn={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},Tn=function(e){return function(a,t,s,n){var r=Dn(a),d=kn[e][Dn(a)];return 2===r&&(d=d[t?0:1]),d.replace(/%d/i,a)}},gn=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];e.defineLocale("ar",{months:gn,monthsShort:gn,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:Tn("s"),m:Tn("m"),mm:Tn("m"),h:Tn("h"),hh:Tn("h"),d:Tn("d"),dd:Tn("d"),M:Tn("M"),MM:Tn("M"),y:Tn("y"),yy:Tn("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return pn[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return fn[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}});var wn={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(wn[a]||wn[t]||wn[s])},week:{dow:1,doy:7}}),e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:fa,mm:fa,h:fa,hh:fa,d:"дзень",dd:fa,M:"месяц",MM:fa,y:"год",yy:fa},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&t<20?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}});var vn={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},Hn={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return Hn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return vn[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,a){return 12===e&&(e=0),"রাত"===a&&e>=4||"দুপুর"===a&&e<5||"বিকাল"===a?e+12:e},meridiem:function(e,a,t){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}});var Sn={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},bn={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return bn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Sn[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,a){return 12===e&&(e=0),"མཚན་མོ"===a&&e>=4||"ཉིན་གུང"===a&&e<5||"དགོང་དག"===a?e+12:e},meridiem:function(e,a,t){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}}),e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd,
    D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:pa,h:"un eur",hh:"%d eur",d:"un devezh",dd:pa,M:"ur miz",MM:pa,y:"ur bloaz",yy:function(e){switch(Da(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){return e+(1===e?"añ":"vet")},week:{dow:1,doy:4}}),e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:ga,mm:ga,h:ga,hh:ga,d:"dan",dd:ga,M:"mjesec",MM:ga,y:"godinu",yy:ga},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"[el] D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"[el] D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY,
    H:mm",LLLL:"[el] dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY,
    H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==a&&"W"!==a||(t="a"),e+t},week:{dow:1,doy:4}});var jn="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),xn="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");e.defineLocale("cs",{months:jn,monthsShort:xn,monthsParse:function(e,a){var t,s=[];for(t=0;t<12;t++)s[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return s}(jn,xn),shortMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(xn),longMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(jn),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:va,m:va,mm:va,h:va,hh:va,d:va,dd:va,M:va,MM:va,y:va,yy:va},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){return e+(/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран")},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}}),e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a=e,t="",s=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return a>20?t=40===a||50===a||60===a||80===a||100===a?"fed":"ain":a>0&&(t=s[a]),e+t},week:{dow:1,doy:4}}),e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Ha,mm:"%d Minuten",h:Ha,hh:"%d Stunden",d:Ha,dd:Ha,M:Ha,MM:Ha,y:Ha,yy:Ha},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH.mm",LLLL:"dddd, D. MMMM YYYY HH.mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Sa,mm:"%d Minuten",h:Sa,hh:"%d Stunden",d:Sa,dd:Sa,M:Sa,MM:Sa,y:Sa,yy:Sa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:ba,mm:"%d Minuten",h:ba,hh:"%d Stunden",d:ba,dd:ba,M:ba,MM:ba,y:ba,yy:ba},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Pn=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],On=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];e.defineLocale("dv",{months:Pn,monthsShort:Pn,weekdays:On,weekdaysShort:On,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,a,t){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}}),e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,a){return e?/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,a,t){return e>11?t?"μμ":"ΜΜ":t?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],s=a&&a.hours();return g(t)&&(t=t.apply(a)),t.replace("{}",s%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}}),e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return e>11?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var Wn="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),En="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?En[e.month()]:Wn[e.month()]:Wn},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});var An="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Fn="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Fn[e.month()]:An[e.month()]:An},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:ja,m:ja,mm:ja,h:ja,hh:ja,d:ja,dd:"%d päeva",M:ja,MM:ja,y:ja,yy:ja},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var zn={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},Jn={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,a,t){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return Jn[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return zn[e]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});var Rn="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),Nn=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",Rn[7],Rn[8],Rn[9]];e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:xa,m:xa,mm:xa,h:xa,hh:xa,d:xa,dd:xa,M:xa,MM:xa,y:xa,yy:xa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}}),e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}}),e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var Cn="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),In="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?In[e.month()]:Cn[e.month()]:Cn},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});var Gn=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],Un=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],Vn=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],$n=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],Kn=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"];e.defineLocale("gd",{months:Gn,monthsShort:Un,monthsParseExact:!0,weekdays:Vn,weekdaysShort:$n,weekdaysMin:Kn,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}}),e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd,
    MMMM[achea] Do,
    YYYY,
    A h:mm [vazta]",llll:"ddd,
    D MMM YYYY,
    A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,
    ] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,
    ] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:Oa,m:Oa,mm:Oa,h:Oa,hh:Oa,d:Oa,dd:Oa,M:Oa,MM:Oa,y:Oa,yy:Oa},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,a){switch(a){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,a){return 12===e&&(e=0),"rati"===a?e<4?e:e+12:"sokalli"===a?e:"donparam"===a?e>12?e:e+12:"sanje"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}}),e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd,
    D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd,
    D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
}

,
meridiem:function(e,
a,
t) {
    return e<5?"לפנות בוקר": e<10?"בבוקר": e<12?t?'לפנה"צ': "לפני הצהריים": e<18?t?'אחה"צ': "אחרי הצהריים": "בערב"
}


}
);
var Zn= {
    1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"
}
,
qn= {
    "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"
}
;
e.defineLocale("hi",
{
    months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
    monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
    monthsParseExact:!0,
    weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
    weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
    weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),
    longDateFormat: {
        LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
    }
    
    ,
    calendar: {
        sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[१२३४५६७८९०]/g,
        function(e) {
            return qn[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return Zn[e]
        }
        )
    }
    
    ,
    meridiemParse:/रात|सुबह|दोपहर|शाम/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "रात"===a?e<4?e: e+12: "सुबह"===a?e: "दोपहर"===a?e>=10?e: e+12: "शाम"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"रात": e<10?"सुबह": e<17?"दोपहर": e<20?"शाम": "रात"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
),
e.defineLocale("hr",
{
    months: {
        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
    }
    
    ,
    monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
    monthsParseExact:!0,
    weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[danas u] LT",
        nextDay:"[sutra u] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[u] [nedjelju] [u] LT";
                case 3: return"[u] [srijedu] [u] LT";
                case 6: return"[u] [subotu] [u] LT";
                case 1: case 2: case 4: case 5: return"[u] dddd [u] LT"
            }
        }
        ,
        lastDay:"[jučer u] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: case 3: return"[prošlu] dddd [u] LT";
                case 6: return"[prošle] [subote] [u] LT";
                case 1: case 2: case 4: case 5: return"[prošli] dddd [u] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "za %s", past: "prije %s", s: "par sekundi", m: Wa, mm: Wa, h: Wa, hh: Wa, d: "dan", dd: Wa, M: "mjesec", MM: Wa, y: "godinu", yy: Wa
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 7
    }
}
);
var Bn="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
e.defineLocale("hu",
{
    months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
    monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
    weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
    weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),
    weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm"
    }
    
    ,
    meridiemParse:/de|du/i,
    isPM:function(e) {
        return"u"===e.charAt(1).toLowerCase()
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?!0===t?"de": "DE": !0===t?"du": "DU"
    }
    
    ,
    calendar: {
        sameDay:"[ma] LT[-kor]",
        nextDay:"[holnap] LT[-kor]",
        nextWeek:function() {
            return Aa.call(this,
            !0)
        }
        ,
        lastDay:"[tegnap] LT[-kor]",
        lastWeek:function() {
            return Aa.call(this,
            !1)
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "%s múlva", past: "%s", s: Ea, m: Ea, mm: Ea, h: Ea, hh: Ea, d: Ea, dd: Ea, M: Ea, MM: Ea, y: Ea, yy: Ea
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("hy-am",
{
    months: {
        format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
    }
    
    ,
    monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
    weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
    weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[այսօր] LT",
        nextDay:"[վաղը] LT",
        lastDay:"[երեկ] LT",
        nextWeek:function() {
            return"dddd [օրը ժամը] LT"
        }
        ,
        lastWeek:function() {
            return"[անցած] dddd [օրը ժամը] LT"
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի"
    }
    
    ,
    meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM:function(e) {
        return/^(ցերեկվա|երեկոյան)$/.test(e)
    }
    
    ,
    meridiem:function(e) {
        return e<4?"գիշերվա": e<12?"առավոտվա": e<17?"ցերեկվա": "երեկոյան"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    |\d {
        1,
        2
    }
    
    -(ին|րդ)/,
    ordinal:function(e,
    a) {
        switch(a) {
            case"DDD": case"w": case"W": case"DDDo": return 1===e?e+"-ին": e+"-րդ";
            default: return e
        }
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("id",
{
    months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
    monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
    weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
    weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
    weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
        LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    }
    
    ,
    meridiemParse:/pagi|siang|sore|malam/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "pagi"===a?e: "siang"===a?e>=11?e: e+12: "sore"===a||"malam"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<11?"pagi": e<15?"siang": e<19?"sore": "malam"
    }
    
    ,
    calendar: {
        sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("is",
{
    months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
    monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
    weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
    weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),
    weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
    }
    
    ,
    calendar: {
        sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "eftir %s", past: "fyrir %s síðan", s: za, m: za, mm: za, h: "klukkustund", hh: za, d: za, dd: za, M: za, MM: za, y: za, yy: za
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("it",
{
    months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
    monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
    weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
    weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),
    weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Oggi alle] LT",
        nextDay:"[Domani alle] LT",
        nextWeek:"dddd [alle] LT",
        lastDay:"[Ieri alle] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: return"[la scorsa] dddd [alle] LT";
                default: return"[lo scorso] dddd [alle] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future:function(e) {
            return(/^[0-9].+$/.test(e)?"tra": "in")+" "+e
        }
        ,
        past:"%s fa",
        s:"alcuni secondi",
        m:"un minuto",
        mm:"%d minuti",
        h:"un'ora",
        hh:"%d ore",
        d:"un giorno",
        dd:"%d giorni",
        M:"un mese",
        MM:"%d mesi",
        y:"un anno",
        yy:"%d anni"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    º/,
    ordinal:"%dº",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("ja",
{
    months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
    weekdaysShort:"日_月_火_水_木_金_土".split("_"),
    weekdaysMin:"日_月_火_水_木_金_土".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 HH:mm dddd", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日 HH:mm dddd"
    }
    
    ,
    meridiemParse:/午前|午後/i,
    isPM:function(e) {
        return"午後"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"午前": "午後"
    }
    
    ,
    calendar: {
        sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    日/,
    ordinal:function(e,
    a) {
        switch(a) {
            case"d": case"D": case"DDD": return e+"日";
            default: return e
        }
    }
    
    ,
    relativeTime: {
        future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年"
    }
}
),
e.defineLocale("jv",
{
    months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
    monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
    weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
    weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
    weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
    longDateFormat: {
        LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    }
    
    ,
    meridiemParse:/enjing|siyang|sonten|ndalu/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "enjing"===a?e: "siyang"===a?e>=11?e: e+12: "sonten"===a||"ndalu"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<11?"enjing": e<15?"siyang": e<19?"sonten": "ndalu"
    }
    
    ,
    calendar: {
        sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("ka",
{
    months: {
        standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
    }
    
    ,
    monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
    weekdays: {
        standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/
    }
    
    ,
    weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
    weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
    longDateFormat: {
        LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A"
    }
    
    ,
    calendar: {
        sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future:function(e) {
            return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,
            "ში"): e+"ში"
        }
        ,
        past:function(e) {
            return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,
            "ის უკან"): /წელი/.test(e)?e.replace(/წელი$/, "წლის უკან"): void 0
        }
        ,
        s:"რამდენიმე წამი",
        m:"წუთი",
        mm:"%d წუთი",
        h:"საათი",
        hh:"%d საათი",
        d:"დღე",
        dd:"%d დღე",
        M:"თვე",
        MM:"%d თვე",
        y:"წელი",
        yy:"%d წელი"
    }
    
    ,
    dayOfMonthOrdinalParse:/0|1-ლი|მე-\d {
        1,
        2
    }
    
    |\d {
        1,
        2
    }
    
    -ე/,
    ordinal:function(e) {
        return 0===e?e: 1===e?e+"-ლი": e<20||e<=100&&e%20==0||e%100==0?"მე-"+e: e+"-ე"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
);
var Qn= {
    0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші"
}
;
e.defineLocale("kk",
{
    months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
    monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
    weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
    weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
    weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    -(ші|шы)/,
    ordinal:function(e) {
        var a=e%10,
        t=e>=100?100: null;
        return e+(Qn[e]||Qn[a]||Qn[t])
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("km",
{
    months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ"
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
);
var Xn= {
    1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"
}
,
er= {
    "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"
}
;
e.defineLocale("kn",
{
    months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
    monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
    monthsParseExact:!0,
    weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
    weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
    weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
    longDateFormat: {
        LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm"
    }
    
    ,
    calendar: {
        sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,
        function(e) {
            return er[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return Xn[e]
        }
        )
    }
    
    ,
    meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "ರಾತ್ರಿ"===a?e<4?e: e+12: "ಬೆಳಿಗ್ಗೆ"===a?e: "ಮಧ್ಯಾಹ್ನ"===a?e>=10?e: e+12: "ಸಂಜೆ"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"ರಾತ್ರಿ": e<10?"ಬೆಳಿಗ್ಗೆ": e<17?"ಮಧ್ಯಾಹ್ನ": e<20?"ಸಂಜೆ": "ರಾತ್ರಿ"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    (ನೇ)/,
    ordinal:function(e) {
        return e+"ನೇ"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
),
e.defineLocale("ko",
{
    months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
    weekdaysShort:"일_월_화_수_목_금_토".split("_"),
    weekdaysMin:"일_월_화_수_목_금_토".split("_"),
    longDateFormat: {
        LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm"
    }
    
    ,
    calendar: {
        sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    일/,
    ordinal:"%d일",
    meridiemParse:/오전|오후/,
    isPM:function(e) {
        return"오후"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"오전": "오후"
    }
}
);
var ar= {
    0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү"
}
;
e.defineLocale("ky",
{
    months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
    monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
    weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
    weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
    weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    -(чи|чы|чү|чу)/,
    ordinal:function(e) {
        var a=e%10,
        t=e>=100?100: null;
        return e+(ar[e]||ar[a]||ar[t])
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("lb",
{
    months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    monthsParseExact:!0,
    weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
    weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
    weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
    }
    
    ,
    calendar: {
        sameDay:"[Haut um] LT",
        sameElse:"L",
        nextDay:"[Muer um] LT",
        nextWeek:"dddd [um] LT",
        lastDay:"[Gëschter um] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 2: case 4: return"[Leschten] dddd [um] LT";
                default: return"[Leschte] dddd [um] LT"
            }
        }
    }
    
    ,
    relativeTime: {
        future:function(e) {
            return Ra(e.substr(0, e.indexOf(" ")))?"a "+e: "an "+e
        }
        ,
        past:function(e) {
            return Ra(e.substr(0, e.indexOf(" ")))?"viru "+e: "virun "+e
        }
        ,
        s:"e puer Sekonnen",
        m:Ja,
        mm:"%d Minutten",
        h:Ja,
        hh:"%d Stonnen",
        d:Ja,
        dd:"%d Deeg",
        M:Ja,
        MM:"%d Méint",
        y:Ja,
        yy:"%d Joer"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("lo",
{
    months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
    monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
    weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
    weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
    weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm"
    }
    
    ,
    meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM:function(e) {
        return"ຕອນແລງ"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"ຕອນເຊົ້າ": "ຕອນແລງ"
    }
    
    ,
    calendar: {
        sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ"
    }
    
    ,
    dayOfMonthOrdinalParse:/(ທີ່)\d {
        1,
        2
    }
    
    /,
    ordinal:function(e) {
        return"ທີ່"+e
    }
}
);
var tr= {
    m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus"
}
;
e.defineLocale("lt",
{
    months: {
        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    }
    
    ,
    monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
    weekdays: {
        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH: mm/
    }
    
    ,
    weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
    weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
    }
    
    ,
    calendar: {
        sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future:"po %s",
        past:"prieš %s",
        s:function(e,
        a,
        t,
        s) {
            return a?"kelios sekundės": s?"kelių sekundžių": "kelias sekundes"
        }
        ,
        m:Na,
        mm:Ga,
        h:Na,
        hh:Ga,
        d:Na,
        dd:Ga,
        M:Na,
        MM:Ga,
        y:Na,
        yy:Ga
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    -oji/,
    ordinal:function(e) {
        return e+"-oji"
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
);
var sr= {
    m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_")
}
;
e.defineLocale("lv",
{
    months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
    monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
    weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
    weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future:"pēc %s",
        past:"pirms %s",
        s:function(e,
        a) {
            return a?"dažas sekundes": "dažām sekundēm"
        }
        ,
        m:$a,
        mm:Va,
        h:$a,
        hh:Va,
        d:$a,
        dd:Va,
        M:$a,
        MM:Va,
        y:$a,
        yy:Va
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
);
var nr= {
    words: {
        m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"]
    }
    
    ,
    correctGrammaticalCase:function(e,
    a) {
        return 1===e?a[0]: e>=2&&e<=4?a[1]: a[2]
    }
    
    ,
    translate:function(e,
    a,
    t) {
        var s=nr.words[t];
        return 1===t.length?a?s[0]: s[1]: e+" "+nr.correctGrammaticalCase(e, s)
    }
}
;
e.defineLocale("me",
{
    months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact:!0,
    weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[danas u] LT",
        nextDay:"[sjutra u] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[u] [nedjelju] [u] LT";
                case 3: return"[u] [srijedu] [u] LT";
                case 6: return"[u] [subotu] [u] LT";
                case 1: case 2: case 4: case 5: return"[u] dddd [u] LT"
            }
        }
        ,
        lastDay:"[juče u] LT",
        lastWeek:function() {
            return["[prošle] [nedjelje] [u] LT",
            "[prošlog] [ponedjeljka] [u] LT",
            "[prošlog] [utorka] [u] LT",
            "[prošle] [srijede] [u] LT",
            "[prošlog] [četvrtka] [u] LT",
            "[prošlog] [petka] [u] LT",
            "[prošle] [subote] [u] LT"][this.day()]
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: nr.translate, mm: nr.translate, h: nr.translate, hh: nr.translate, d: "dan", dd: nr.translate, M: "mjesec", MM: nr.translate, y: "godinu", yy: nr.translate
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("mi",
{
    months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
    monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
    monthsRegex:/(?: ['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?) {
        1, 3
    }
    
    /i,
    monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?) {
        1,
        2
    }
    
    /i,
    weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
    weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
    weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    º/,
    ordinal:"%dº",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("mk",
{
    months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
    monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
    weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
    weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),
    weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Денес во] LT",
        nextDay:"[Утре во] LT",
        nextWeek:"[Во] dddd [во] LT",
        lastDay:"[Вчера во] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: case 3: case 6: return"[Изминатата] dddd [во] LT";
                case 1: case 2: case 4: case 5: return"[Изминатиот] dddd [во] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    -(ев|ен|ти|ви|ри|ми)/,
    ordinal:function(e) {
        var a=e%10,
        t=e%100;
        return 0===e?e+"-ев": 0===t?e+"-ен": t>10&&t<20?e+"-ти": 1===a?e+"-ви": 2===a?e+"-ри": 7===a||8===a?e+"-ми": e+"-ти"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("ml",
{
    months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
    monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
    monthsParseExact:!0,
    weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
    weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
    weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
    longDateFormat: {
        LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
    }
    
    ,
    calendar: {
        sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം"
    }
    
    ,
    meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "രാത്രി"===a&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===a||"വൈകുന്നേരം"===a?e+12: e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"രാത്രി": e<12?"രാവിലെ": e<17?"ഉച്ച കഴിഞ്ഞ്": e<20?"വൈകുന്നേരം": "രാത്രി"
    }
}
);
var rr= {
    1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"
}
,
dr= {
    "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"
}
;
e.defineLocale("mr",
{
    months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
    monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
    monthsParseExact:!0,
    weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
    weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
    weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),
    longDateFormat: {
        LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
    }
    
    ,
    calendar: {
        sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%sमध्ये", past: "%sपूर्वी", s: Ka, m: Ka, mm: Ka, h: Ka, hh: Ka, d: Ka, dd: Ka, M: Ka, MM: Ka, y: Ka, yy: Ka
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[१२३४५६७८९०]/g,
        function(e) {
            return dr[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return rr[e]
        }
        )
    }
    
    ,
    meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "रात्री"===a?e<4?e: e+12: "सकाळी"===a?e: "दुपारी"===a?e>=10?e: e+12: "सायंकाळी"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"रात्री": e<10?"सकाळी": e<17?"दुपारी": e<20?"सायंकाळी": "रात्री"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
),
e.defineLocale("ms-my",
{
    months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
        LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    }
    
    ,
    meridiemParse:/pagi|tengahari|petang|malam/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "pagi"===a?e: "tengahari"===a?e>=11?e: e+12: "petang"===a||"malam"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<11?"pagi": e<15?"tengahari": e<19?"petang": "malam"
    }
    
    ,
    calendar: {
        sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("ms",
{
    months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
        LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    }
    
    ,
    meridiemParse:/pagi|tengahari|petang|malam/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "pagi"===a?e: "tengahari"===a?e>=11?e: e+12: "petang"===a||"malam"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<11?"pagi": e<15?"tengahari": e<19?"petang": "malam"
    }
    
    ,
    calendar: {
        sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
);
var _r= {
    1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"
}
,
ir= {
    "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"
}
;
e.defineLocale("my",
{
    months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
    monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
    weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
    weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
    weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,
        function(e) {
            return ir[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return _r[e]
        }
        )
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("nb",
{
    months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
    monthsParseExact:!0,
    weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),
    weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
);
var or= {
    1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"
}
,
mr= {
    "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"
}
;
e.defineLocale("ne",
{
    months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
    monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
    monthsParseExact:!0,
    weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
    weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
    weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[१२३४५६७८९०]/g,
        function(e) {
            return mr[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return or[e]
        }
        )
    }
    
    ,
    meridiemParse:/राति|बिहान|दिउँसो|साँझ/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "राति"===a?e<4?e: e+12: "बिहान"===a?e: "दिउँसो"===a?e>=10?e: e+12: "साँझ"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<3?"राति": e<12?"बिहान": e<16?"दिउँसो": e<20?"साँझ": "राति"
    }
    
    ,
    calendar: {
        sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
);
var ur="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
lr="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
Mr=[/^jan/i,
/^feb/i,
/^maart|mrt.?$/i,
/^apr/i,
/^mei$/i,
/^jun[i.]?$/i,
/^jul[i.]?$/i,
/^aug/i,
/^sep/i,
/^okt/i,
/^nov/i,
/^dec/i],
hr=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
e.defineLocale("nl-be",
{
    months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort:function(e,
    a) {
        return e?/-MMM-/.test(a)?lr[e.month()]: ur[e.month()]: ur
    }
    
    ,
    monthsRegex:hr,
    monthsShortRegex:hr,
    monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse:Mr,
    longMonthsParse:Mr,
    shortMonthsParse:Mr,
    weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    (ste|de)/,
    ordinal:function(e) {
        return e+(1===e||8===e||e>=20?"ste": "de")
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
);
var Lr="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
cr="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
Yr=[/^jan/i,
/^feb/i,
/^maart|mrt.?$/i,
/^apr/i,
/^mei$/i,
/^jun[i.]?$/i,
/^jul[i.]?$/i,
/^aug/i,
/^sep/i,
/^okt/i,
/^nov/i,
/^dec/i],
yr=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
e.defineLocale("nl",
{
    months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort:function(e,
    a) {
        return e?/-MMM-/.test(a)?cr[e.month()]: Lr[e.month()]: Lr
    }
    
    ,
    monthsRegex:yr,
    monthsShortRegex:yr,
    monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse:Yr,
    longMonthsParse:Yr,
    shortMonthsParse:Yr,
    weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    (ste|de)/,
    ordinal:function(e) {
        return e+(1===e||8===e||e>=20?"ste": "de")
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("nn",
{
    months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
    weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),
    weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
);
var fr= {
    1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"
}
,
pr= {
    "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"
}
;
e.defineLocale("pa-in",
{
    months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
    monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
    weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
    weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
    weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
    longDateFormat: {
        LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
    }
    
    ,
    calendar: {
        sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,
        function(e) {
            return pr[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return fr[e]
        }
        )
    }
    
    ,
    meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "ਰਾਤ"===a?e<4?e: e+12: "ਸਵੇਰ"===a?e: "ਦੁਪਹਿਰ"===a?e>=10?e: e+12: "ਸ਼ਾਮ"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"ਰਾਤ": e<10?"ਸਵੇਰ": e<17?"ਦੁਪਹਿਰ": e<20?"ਸ਼ਾਮ": "ਰਾਤ"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
);
var Dr="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
kr="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
e.defineLocale("pl",
{
    months:function(e,
    a) {
        return e?""===a?"("+kr[e.month()]+"|"+Dr[e.month()]+")": /D MMMM/.test(a)?kr[e.month()]: Dr[e.month()]: Dr
    }
    
    ,
    monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
    weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
    weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),
    weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Dziś o] LT",
        nextDay:"[Jutro o] LT",
        nextWeek:"[W] dddd [o] LT",
        lastDay:"[Wczoraj o] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: return"[W zeszłą niedzielę o] LT";
                case 3: return"[W zeszłą środę o] LT";
                case 6: return"[W zeszłą sobotę o] LT";
                default: return"[W zeszły] dddd [o] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "za %s", past: "%s temu", s: "kilka sekund", m: qa, mm: qa, h: qa, hh: qa, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: qa, y: "rok", yy: qa
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("pt-br",
{
    months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
    weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Hoje às] LT",
        nextDay:"[Amanhã às] LT",
        nextWeek:"dddd [às] LT",
        lastDay:"[Ontem às] LT",
        lastWeek:function() {
            return 0===this.day()||6===this.day()?"[Último] dddd [às] LT": "[Última] dddd [às] LT"
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    º/,
    ordinal:"%dº"
}
),
e.defineLocale("pt",
{
    months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
    weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Hoje às] LT",
        nextDay:"[Amanhã às] LT",
        nextWeek:"dddd [às] LT",
        lastDay:"[Ontem às] LT",
        lastWeek:function() {
            return 0===this.day()||6===this.day()?"[Último] dddd [às] LT": "[Última] dddd [às] LT"
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    º/,
    ordinal:"%dº",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("ro",
{
    months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
    monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
    monthsParseExact:!0,
    weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
    weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
    weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: Ba, h: "o oră", hh: Ba, d: "o zi", dd: Ba, M: "o lună", MM: Ba, y: "un an", yy: Ba
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
);
var Tr=[/^янв/i,
/^фев/i,
/^мар/i,
/^апр/i,
/^ма[йя]/i,
/^июн/i,
/^июл/i,
/^авг/i,
/^сен/i,
/^окт/i,
/^ноя/i,
/^дек/i];
e.defineLocale("ru",
{
    months: {
        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
    }
    
    ,
    monthsShort: {
        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
    }
    
    ,
    weekdays: {
        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?: прошлую|следующую|эту)? ?\] ?dddd/
    }
    
    ,
    weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),
    monthsParse:Tr,
    longMonthsParse:Tr,
    shortMonthsParse:Tr,
    monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm"
    }
    
    ,
    calendar: {
        sameDay:"[Сегодня в] LT",
        nextDay:"[Завтра в] LT",
        lastDay:"[Вчера в] LT",
        nextWeek:function(e) {
            if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT": "[В] dddd [в] LT";
            switch(this.day()) {
                case 0: return"[В следующее] dddd [в] LT";
                case 1: case 2: case 4: return"[В следующий] dddd [в] LT";
                case 3: case 5: case 6: return"[В следующую] dddd [в] LT"
            }
        }
        ,
        lastWeek:function(e) {
            if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT": "[В] dddd [в] LT";
            switch(this.day()) {
                case 0: return"[В прошлое] dddd [в] LT";
                case 1: case 2: case 4: return"[В прошлый] dddd [в] LT";
                case 3: case 5: case 6: return"[В прошлую] dddd [в] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "через %s", past: "%s назад", s: "несколько секунд", m: Xa, mm: Xa, h: "час", hh: Xa, d: "день", dd: Xa, M: "месяц", MM: Xa, y: "год", yy: Xa
    }
    
    ,
    meridiemParse:/ночи|утра|дня|вечера/i,
    isPM:function(e) {
        return/^(дня|вечера)$/.test(e)
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"ночи": e<12?"утра": e<17?"дня": "вечера"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    -(й|го|я)/,
    ordinal:function(e,
    a) {
        switch(a) {
            case"M": case"d": case"DDD": return e+"-й";
            case"D": return e+"-го";
            case"w": case"W": return e+"-я";
            default: return e
        }
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
);
var gr=["جنوري",
"فيبروري",
"مارچ",
"اپريل",
"مئي",
"جون",
"جولاءِ",
"آگسٽ",
"سيپٽمبر",
"آڪٽوبر",
"نومبر",
"ڊسمبر"],
wr=["آچر",
"سومر",
"اڱارو",
"اربع",
"خميس",
"جمع",
"ڇنڇر"];
e.defineLocale("sd",
{
    months:gr,
    monthsShort:gr,
    weekdays:wr,
    weekdaysShort:wr,
    weekdaysMin:wr,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm"
    }
    
    ,
    meridiemParse:/صبح|شام/,
    isPM:function(e) {
        return"شام"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"صبح": "شام"
    }
    
    ,
    calendar: {
        sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/،/g,
        ",")
    }
    
    ,
    postformat:function(e) {
        return e.replace(/,
        /g,
        "،")
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("se",
{
    months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
    monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
    weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
    weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
    weekdaysMin:"s_v_m_g_d_b_L".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("si",
{
    months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
    monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
    weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
    weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
    weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
    }
    
    ,
    calendar: {
        sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    වැනි/,
    ordinal:function(e) {
        return e+" වැනි"
    }
    
    ,
    meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM:function(e) {
        return"ප.ව."===e||"පස් වරු"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e>11?t?"ප.ව.": "පස් වරු": t?"පෙ.ව.": "පෙර වරු"
    }
}
);
var vr="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
Hr="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
e.defineLocale("sk",
{
    months:vr,
    monthsShort:Hr,
    weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
    weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),
    weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[dnes o] LT",
        nextDay:"[zajtra o] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[v nedeľu o] LT";
                case 1: case 2: return"[v] dddd [o] LT";
                case 3: return"[v stredu o] LT";
                case 4: return"[vo štvrtok o] LT";
                case 5: return"[v piatok o] LT";
                case 6: return"[v sobotu o] LT"
            }
        }
        ,
        lastDay:"[včera o] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: return"[minulú nedeľu o] LT";
                case 1: case 2: return"[minulý] dddd [o] LT";
                case 3: return"[minulú stredu o] LT";
                case 4: case 5: return"[minulý] dddd [o] LT";
                case 6: return"[minulú sobotu o] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "za %s", past: "pred %s", s: at, m: at, mm: at, h: at, hh: at, d: at, dd: at, M: at, MM: at, y: at, yy: at
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("sl",
{
    months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact:!0,
    weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
    weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),
    weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[danes ob] LT",
        nextDay:"[jutri ob] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[v] [nedeljo] [ob] LT";
                case 3: return"[v] [sredo] [ob] LT";
                case 6: return"[v] [soboto] [ob] LT";
                case 1: case 2: case 4: case 5: return"[v] dddd [ob] LT"
            }
        }
        ,
        lastDay:"[včeraj ob] LT",
        lastWeek:function() {
            switch(this.day()) {
                case 0: return"[prejšnjo] [nedeljo] [ob] LT";
                case 3: return"[prejšnjo] [sredo] [ob] LT";
                case 6: return"[prejšnjo] [soboto] [ob] LT";
                case 1: case 2: case 4: case 5: return"[prejšnji] dddd [ob] LT"
            }
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "čez %s", past: "pred %s", s: tt, m: tt, mm: tt, h: tt, hh: tt, d: tt, dd: tt, M: tt, MM: tt, y: tt, yy: tt
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("sq",
{
    months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
    monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
    weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
    weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
    weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),
    weekdaysParseExact:!0,
    meridiemParse:/PD|MD/,
    isPM:function(e) {
        return"M"===e.charAt(0)
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"PD": "MD"
    }
    
    ,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
);
var Sr= {
    words: {
        m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"]
    }
    
    ,
    correctGrammaticalCase:function(e,
    a) {
        return 1===e?a[0]: e>=2&&e<=4?a[1]: a[2]
    }
    
    ,
    translate:function(e,
    a,
    t) {
        var s=Sr.words[t];
        return 1===t.length?a?s[0]: s[1]: e+" "+Sr.correctGrammaticalCase(e, s)
    }
}
;
e.defineLocale("sr-cyrl",
{
    months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
    monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
    monthsParseExact:!0,
    weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
    weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),
    weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[данас у] LT",
        nextDay:"[сутра у] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[у] [недељу] [у] LT";
                case 3: return"[у] [среду] [у] LT";
                case 6: return"[у] [суботу] [у] LT";
                case 1: case 2: case 4: case 5: return"[у] dddd [у] LT"
            }
        }
        ,
        lastDay:"[јуче у] LT",
        lastWeek:function() {
            return["[прошле] [недеље] [у] LT",
            "[прошлог] [понедељка] [у] LT",
            "[прошлог] [уторка] [у] LT",
            "[прошле] [среде] [у] LT",
            "[прошлог] [четвртка] [у] LT",
            "[прошлог] [петка] [у] LT",
            "[прошле] [суботе] [у] LT"][this.day()]
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "за %s", past: "пре %s", s: "неколико секунди", m: Sr.translate, mm: Sr.translate, h: Sr.translate, hh: Sr.translate, d: "дан", dd: Sr.translate, M: "месец", MM: Sr.translate, y: "годину", yy: Sr.translate
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 7
    }
}
);
var br= {
    words: {
        m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"]
    }
    
    ,
    correctGrammaticalCase:function(e,
    a) {
        return 1===e?a[0]: e>=2&&e<=4?a[1]: a[2]
    }
    
    ,
    translate:function(e,
    a,
    t) {
        var s=br.words[t];
        return 1===t.length?a?s[0]: s[1]: e+" "+br.correctGrammaticalCase(e, s)
    }
}
;
e.defineLocale("sr",
{
    months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact:!0,
    weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
    weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),
    weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm"
    }
    
    ,
    calendar: {
        sameDay:"[danas u] LT",
        nextDay:"[sutra u] LT",
        nextWeek:function() {
            switch(this.day()) {
                case 0: return"[u] [nedelju] [u] LT";
                case 3: return"[u] [sredu] [u] LT";
                case 6: return"[u] [subotu] [u] LT";
                case 1: case 2: case 4: case 5: return"[u] dddd [u] LT"
            }
        }
        ,
        lastDay:"[juče u] LT",
        lastWeek:function() {
            return["[prošle] [nedelje] [u] LT",
            "[prošlog] [ponedeljka] [u] LT",
            "[prošlog] [utorka] [u] LT",
            "[prošle] [srede] [u] LT",
            "[prošlog] [četvrtka] [u] LT",
            "[prošlog] [petka] [u] LT",
            "[prošle] [subote] [u] LT"][this.day()]
        }
        ,
        sameElse:"L"
    }
    
    ,
    relativeTime: {
        future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: br.translate, mm: br.translate, h: br.translate, hh: br.translate, d: "dan", dd: br.translate, M: "mesec", MM: br.translate, y: "godinu", yy: br.translate
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 7
    }
}
),
e.defineLocale("ss",
{
    months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
    monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
    weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
    weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
    weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A"
    }
    
    ,
    calendar: {
        sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka"
    }
    
    ,
    meridiemParse:/ekuseni|emini|entsambama|ebusuku/,
    meridiem:function(e,
    a,
    t) {
        return e<11?"ekuseni": e<15?"emini": e<19?"entsambama": "ebusuku"
    }
    
    ,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "ekuseni"===a?e: "emini"===a?e>=11?e: e+12: "entsambama"===a||"ebusuku"===a?0===e?0: e+12: void 0
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    /,
    ordinal:"%d",
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("sv",
{
    months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
    weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),
    weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    (e|a)/,
    ordinal:function(e) {
        var a=e%10;
        return e+(1==~~(e%100/10)?"e": 1===a?"a": 2===a?"a": "e")
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("sw",
{
    months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
    monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
    weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
    weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
    weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d"
    }
    
    ,
    week: {
        dow: 1, doy: 7
    }
}
);
var jr= {
    1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"
}
,
xr= {
    "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"
}
;
e.defineLocale("ta",
{
    months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
    monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
    weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
    weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
    weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    வது/,
    ordinal:function(e) {
        return e+"வது"
    }
    
    ,
    preparse:function(e) {
        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,
        function(e) {
            return xr[e]
        }
        )
    }
    
    ,
    postformat:function(e) {
        return e.replace(/\d/g,
        function(e) {
            return jr[e]
        }
        )
    }
    
    ,
    meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem:function(e,
    a,
    t) {
        return e<2?" யாமம்": e<6?" வைகறை": e<10?" காலை": e<14?" நண்பகல்": e<18?" எற்பாடு": e<22?" மாலை": " யாமம்"
    }
    
    ,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "யாமம்"===a?e<2?e: e+12: "வைகறை"===a||"காலை"===a?e: "நண்பகல்"===a&&e>=10?e: e+12
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
),
e.defineLocale("te",
{
    months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
    monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
    monthsParseExact:!0,
    weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
    weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
    weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),
    longDateFormat: {
        LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm"
    }
    
    ,
    calendar: {
        sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    వ/,
    ordinal:"%dవ",
    meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour:function(e,
    a) {
        return 12===e&&(e=0),
        "రాత్రి"===a?e<4?e: e+12: "ఉదయం"===a?e: "మధ్యాహ్నం"===a?e>=10?e: e+12: "సాయంత్రం"===a?e+12: void 0
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<4?"రాత్రి": e<10?"ఉదయం": e<17?"మధ్యాహ్నం": e<20?"సాయంత్రం": "రాత్రి"
    }
    
    ,
    week: {
        dow: 0, doy: 6
    }
}
),
e.defineLocale("tet",
{
    months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
    monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
    weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
    weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
    weekdaysMin:"Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    (st|nd|rd|th)/,
    ordinal:function(e) {
        var a=e%10;
        return e+(1==~~(e%100/10)?"th": 1===a?"st": 2===a?"nd": 3===a?"rd": "th")
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
),
e.defineLocale("th",
{
    months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
    monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
    monthsParseExact:!0,
    weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
    weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
    weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
    weekdaysParseExact:!0,
    longDateFormat: {
        LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
    }
    
    ,
    meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,
    isPM:function(e) {
        return"หลังเที่ยง"===e
    }
    
    ,
    meridiem:function(e,
    a,
    t) {
        return e<12?"ก่อนเที่ยง": "หลังเที่ยง"
    }
    
    ,
    calendar: {
        sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี"
    }
}
),
e.defineLocale("tl-ph",
{
    months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
    monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
    weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
    weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
    weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    /,
    ordinal:function(e) {
        return e
    }
    
    ,
    week: {
        dow: 1, doy: 4
    }
}
);
var Pr="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
e.defineLocale("tlh",
{
    months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
    monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
    monthsParseExact:!0,
    weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future:function(e) {
            var a=e;
            return a=-1!==e.indexOf("jaj")?a.slice(0,
            -3)+"leS": -1!==e.indexOf("jar")?a.slice(0, -3)+"waQ": -1!==e.indexOf("DIS")?a.slice(0, -3)+"nem": a+" pIq"
        }
        ,
        past:function(e) {
            var a=e;
            return a=-1!==e.indexOf("jaj")?a.slice(0,
            -3)+"Hu’": -1!==e.indexOf("jar")?a.slice(0, -3)+"wen": -1!==e.indexOf("DIS")?a.slice(0, -3)+"ben": a+" ret"
        }
        ,
        s:"puS lup",
        m:"wa’ tup",
        mm:st,
        h:"wa’ rep",
        hh:st,
        d:"wa’ jaj",
        dd:st,
        M:"wa’ jar",
        MM:st,
        y:"wa’ DIS",
        yy:st
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    \./,
    ordinal:"%d.",
    week: {
        dow: 1, doy: 4
    }
}
);
var Or= {
    1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı"
}
;
e.defineLocale("tr",
{
    months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
    monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
    weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
    weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
    longDateFormat: {
        LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm"
    }
    
    ,
    calendar: {
        sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L"
    }
    
    ,
    relativeTime: {
        future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl"
    }
    
    ,
    dayOfMonthOrdinalParse:/\d {
        1,
        2
    }
    
    '(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(Or[a]||Or[t]||Or[s])},week:{dow:1,doy:7}}),e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd,
    [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return e>11?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:rt,m:rt,mm:rt,h:rt,hh:rt,d:rt,dd:rt,M:rt,MM:rt,y:rt,yy:rt},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}}),e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(e,a){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return e?t[/(\[[ВвУу]\]) ?dddd/.test(a)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:it("[Сьогодні "),nextDay:it("[Завтра "),lastDay:it("[Вчора "),nextWeek:it("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return it("[Минулої] dddd [").call(this);case 1:case 2:case 4:return it("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:_t,mm:_t,h:"годину",hh:_t,d:"день",dd:_t,M:"місяць",MM:_t,y:"рік",yy:_t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}});var Wr=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],Er=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];return e.defineLocale("ur",{months:Wr,monthsShort:Wr,weekdays:Er,weekdaysShort:Er,weekdaysMin:Er,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,a,t){return e<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}}),e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}}),e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY,
    dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}}),e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd,
    D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd,
    D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd,
    D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd,
    D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}}),e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"下午"===a||"晚上"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),e.locale("en"),e});
    