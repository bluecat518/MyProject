﻿(function (a, b) {
    function e(a) {
        if (!a) return undefined;
        var b, c, d, e = arguments.length - 1,
        f = new String(a);
        for (b = 0; b < e; b++) c = new RegExp("{[" + b + "]}", "g"),
        f = f.replace(c, arguments[b + 1]);
        return f
    }
    var c = function (a) {
        return a && typeof a == "object" && typeof a.length == "number" && typeof a.splice == "function" && !a.propertyIsEnumerable("length")
    };
    var d = function (a) {
        if (typeof a === "undefined" || typeof a === null) {
            return null
        }
        return new d.fn.init(a)
    };
    a.extend(d, {
        we7: 2011112209,
        isArr: c,
        isArray: c,
        isUndef: function (a) {
            return typeof a === "undefined"
        },
        isNull: function (a) {
            return typeof a === "object" && !a
        },
        isN: function (a) {
            return typeof a === "number" && window.isFinite(a)
        },
        isFunc: function (a) {
            return typeof a === "function"
        },
        isObj: function (a) {
            var b = typeof a;
            return a && b === "object" || b === "function"
        },
        isStr: function (a) {
            return typeof a === "string"
        }
    });
    String.prototype.trim = function () {
        var a = /\S/,
        b = /^\s+/,
        c = /\s+$/;
        if (a.test(" ")) {
            b = /^[\s\xA0]+/;
            c = /[\s\xA0]+$/
        }
        return this.replace(b, "").replace(c, "")
    };
    a.extend(d, {
        indexOfArray: function (a, b) {
            if (!a || !a.length) {
                return -1
            }
            var c = d.isFunc(b);
            if (c || d.isUndef(Array.prototype.indexOf)) {
                for (var e = 0; e < a.length; e++) {
                    if (c && b.call(a[e], e) === !0 || a[e] === b) {
                        return e
                    }
                }
                return -1
            } else {
                return a.indexOf(b)
            }
        },
        findInArray: function (a, b, c) {
            if (!d.isFunc(b) || !a || !a.length) return null;
            var e, f = c || 0;
            for (; f < a.length; f++) if (b.call(a, e = a[f])) return e
        }
    });
    var f = window.navigator.userAgent;
    var g = {
        userAgent: f,
        msie: !1,
        ff: /firefox/i.test(f),
        chrome: /chrome/i.test(f),
        opera: /opera/i.test(f),
        ie: 0
    }; (function () {
        var a = /msie\s([\d\.]+)/i.exec(f);
        g.msie = a !== null;
        g.ie = a === null ? !1 : parseFloat(a[1]);
        g.firefox = g.ff
    })();
    d.browser = g;
    d.log = function h(a, b) {
        var c = new Date;
        a = c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds() + "\t" + a;
        if (window.log) {
            window.log(a)
        }
        if (window.console && window.console.log) {
            window.console.log(a)
        }
    };
    d.formatStr = function (a) {
        return e.apply(null, arguments)
    };
    d.trimStr = function (a) {
        var b = a;
        return b.trim()
    };
    d.fn = d.prototype = {
        init: function (b) {
            this.original = b || {};
            if (d.isStr(b) || !this.jquery && b.nodeType) {
                this.jquery = a(b)
            } else {
                this.jquery = d.isStr(b.jquery) ? b : b.jquery || null
            }
        },
        clone: function () {
            var a = this.original;
            var b;
            if (a.constructor == Object) {
                b = new a.constructor
            } else {
                b = new a.constructor(a.valueOf())
            }
            for (var c in a) {
                if (b[c] != a[c]) {
                    if (typeof a[c] == "object") {
                        b[c] = d(a[c]).clone()
                    } else {
                        b[c] = a[c]
                    }
                }
            }
            b.toString = a.toString;
            b.valueOf = a.valueOf;
            return b
        },
        rename: function (b, c) {
            function g(a, b) {
                var f = e.original[a];
                if (f) {
                    e.original[c] = d(f).clone()
                }
            }
            var e = this,
            f = d.isUndef(c) && d.isObj(b);
            if (f) {
                a.each(b,
                function (a) {
                    g(a, this)
                })
            } else {
                g(b, c)
            }
            return e.original
        }
    };
    d.fn.init.prototype = d.fn;
    d.extend = function (b) {
        a.extend(d.prototype, b);
        return d
    };
    d.extend({
        we7: d.we7,
        extend: function (b) {
            a.extend(this, b);
            return this
        }
    });
    a.extend(d, {
        beforeUnload: function (a, b) {
            window.onbeforeunload = function () {
                if (d.isFunc(b) && b.call() != !1) return a;
                else if (d.isStr(b)) return b
            }
        },
        removeBeforeUnload: function (a) {
            window.onbeforeunload = null;
            if (d.isFunc(a)) a.call()
        },
        queryString: function (a, b) {
            if (a && a.indexOf("/") === -1) {
                b = a;
                a = undefined
            }
            a = a || window.location;
            var c = function d(a) {
                var b = typeof a.search !== "string" ? a.indexOf("?") < 0 ? "" : a.substr(a.indexOf("?")) : a.search;
                var c = 0,
                d = {};
                var e = unescape(b.substr(1));
                var f = e.split("&");
                for (var g = 0; g < f.length; g++) {
                    var h = f[g].split("=");
                    if (h[0]) {
                        c++;
                        d[h[0]] = h[1]
                    }
                }
                return c > 0 ? d : null
            } (a);
            return b ? c && c[b] : c
        }
    });
    a.extend(d, b);
    window.we7 = d;
    if (window.we7loader) {
        window.we7.load = window.we7loader
    }
})(jQuery, window.we7); (function () {
    function z() {
        if (x._ready) {
            return
        }
        x._ready = !0;
        h("Initializing loader callbacks, typeof we7 is:" + typeof we7);
        var a = [];
        var b = [],
        d = document.getElementsByTagName("SCRIPT"),
        g = d.length;
        for (var i = 0; i < g; i++) {
            b.push(d[i])
        }
        var j, l, m, n, o, p = "injected",
        q;
        for (var r = 0; r < g; r++) {
            j = b[r];
            q = j.getAttribute(p);
            if (q) {
                continue
            }
            m = j.getAttribute(e);
            o = j.getAttribute(f);
            if (j.src && (j.src.indexOf(k) > -1 || m)) {
                if (o) {
                    c = o
                }
                l = j.innerHTML.replace(/^\s+/, "").replace(/\s+$/, "")
            }
            if (m) {
                a.push({
                    name: m,
                    callback: l ? l : null,
                    config: o ? o : c
                })
            } else {
                if (j.src && l) {
                    x.ready(l, !0)
                }
            }
            l = undefined
        }
        y();
        for (var r = 0; r < a.length; r++) {
            n = x(a[r].name, a[r].callback, null, a[r].config)
        }
    }
    function y() {
        q(x._readyFunc, !0)
    }
    function x() {
        var a = new w(arguments[0], arguments[1], arguments[2], arguments[3] || c);
        a.load();
        return a
    }
    function w(a, b, d, e) {
        function j(a) {
            if (typeof a.context === "undefined") {
                try {
                    a = new s(a.name, a.src, a.need)
                } catch (b) { }
            }
            return a
        }
        if (!a) {
            return null
        }
        var f = /^(https?:\/\/.+)?\/.*\.js(\?.*)?/;
        var g = !1,
        i = this;
        if (typeof a === "string") {
            if (f.test(a)) {
                a = new s("we7_script_" + Number(new Date), a)
            } else {
                g = !0
            }
        } else if (typeof a === "object") {
            if (typeof a.length === "undefined") {
                a = j(a)
            } else {
                for (var k = 0; k < a.length; k++) {
                    a[k] = j(a[k])
                }
            }
        }
        this.isReady = !1;
        this.successed = !1;
        this.onReady = p(null, b);
        this.onSuccess = null;
        this.onError = p(null, d);
        this.resConfig = e;
        this.tasks = g ? null : typeof a.length !== "undefined" ? a : [a];
        this.load = function () {
            if (g) {
                if (i.tasks = x.resoureSets[a]) {
                    u(i)
                } else {
                    if (e === c && v) {
                        var b = "No such resource set found: " + a;
                        h(b);
                        throw new Error(b)
                    }
                    var d = new s("_Res_" + e.substr(e.lastIndexOf("/") + 1).replace(".", ""), e, null);
                    var f = new w(d,
                    function () {
                        v = !0;
                        if (!x.resoureSets[a]) {
                            var b = "No such resource set found: " + a;
                            h(b);
                            throw new Error(b)
                        }
                        i.tasks = x.resoureSets[a];
                        u(i)
                    },
                    function () {
                        var a = "Failed to load resource configuration";
                        h(a);
                        throw new Error(a)
                    });
                    f.load()
                }
            } else {
                var j = t.get(a);
                if (j) {
                    this.isReady = j.status === 2 || j.status === -1;
                    this.successed = j.status === 2;
                    if (this.isReady && this.onReady) {
                        q(this.onReady, !0)
                    }
                    if (this.successed && this.onSuccess) {
                        q(this.onSuccess, !0)
                    }
                } else {
                    u(this)
                }
            }
            return this
        };
        this.ready = function (a) {
            this.onReady = p(this.onReady, a);
            if (this.isReady) {
                q(this.onReady, !0)
            }
            return this
        };
        this.success = function (a) {
            this.onSuccess = p(this.onSuccess, a);
            if (this.successed) {
                q(this.onSuccess, !0)
            }
            return this
        };
        this.error = function (a) {
            this.onError = p(this.onError, a);
            return this
        }
    }
    function u(a) {
        function i(a, b) {
            var c = 0,
            d = a.need.length,
            e = b.need.length;
            if (!d && !e) {
                return 0
            } else {
                var f = !1,
                h = !1;
                f = g(a, b);
                h = g(b, a);
                if (f && h) {
                    throw new Error("Can not load scripts which require each other")
                }
                if (f) {
                    c = -1
                } else if (h) {
                    c = 1
                } else if (!d) {
                    c = -1
                } else if (!e) {
                    c = 1
                } else {
                    return 0
                }
            }
            return c
        }
        function g(a, b, d) {
            var f = !1;
            if (c.length === 1) {
                return !1
            }
            a = e(a);
            if (!b) {
                f = !0;
                b = new s("_Global" + Math.random(), "", c)
            } else {
                b = e(b)
            }
            if (a.name === b.name) {
                return !1
            }
            var h = b.need ? b.need.length : 0,
            i;
            for (var j = 0; j < h; j++) {
                i = b.need[j];
                if (i.name === a.name) {
                    if (!f) {
                        return !0
                    }
                } else if (!d) {
                    if (g(a, i, f ? !0 : !1)) {
                        return !0
                    }
                }
            }
            return !1
        }
        function f(a) {
            var b, c = [];
            for (var d = 0; d < a.length; d++) {
                b = a[d];
                if (!e(b) && !t.get(b)) {
                    a.splice(d, 1);
                    c.push(b)
                }
            }
            return c.length ? c : !0
        }
        function e(a, c) {
            if (typeof a === "object") {
                return a
            }
            if (!c) {
                c = b.length
            }
            for (var d = 0; d < c; d++) {
                if (b[d].name === a) return b[d]
            }
            return !1
        }
        function d() {
            function f(a) {
                for (var b = 0; b < c.length; b++) {
                    if (c[b].name === a.name) {
                        return b
                    }
                }
                return -1
            }
            var b, d = !0,
            e = !0;
            var g = f(this);
            if (g > -1) {
                c[g].status = this.status
            }
            for (var i = 0; i < c.length; i++) {
                b = c[i];
                if (b.status > -1 && b.status < 2) {
                    d = !1;
                    break
                } else if (b.status === -1) {
                    e = !1
                }
            }
            if (d) {
                a.isReady = !0;
                for (var i = 0; i < c.length; i++) {
                    t.add(c[i])
                }
                h("All scripts are now loaded");
                if (e) {
                    a.successed = !0;
                    h("All scripts are now loaded successfully")
                }
                q(a.onReady, !0);
                if (e) {
                    q(a.onSuccess, !0)
                }
                if (typeof this.index !== "undefined") {
                    try {
                        delete this.context
                    } catch (j) { }
                }
                delete c
            }
        }
        var b = a.tasks,
        c = [];
        var j, k, l, m, n;
        for (var p = 0; p < b.length; p++) {
            j = b[p];
            var u, v = j.src.lastIndexOf(".");
            n = v > -1 ? j.src.substr(v).substr(0, 4) === ".css" : !1;
            if (!n) {
                j = typeof j.scriptText !== "undefined" ? j : new s(j.name, j.src, j.need);
                if (!t.get(j)) {
                    k = j.need;
                    if (k.length) {
                        u = f(k);
                        if (u !== !0) {
                            h("Some required scripts (" + u.join(",") + ') can not be found for script "' + j.name + '", it may not work properly')
                        }
                    }
                    for (var w = 0; w < k.length; w++) {
                        j.need[w] = e(k[w]) || t.get(k[w])
                    }
                    c.push(j)
                }
            } else {
                o(j.src)
            }
        }
        if (!c.length) {
            d.call(null);
            return
        }
        c.sort(i);
        var x, y = new r;
        for (var p = 0; p < c.length; p++) {
            x = c[p];
            if (x.need.length || g(x)) {
                x.context = y
            }
        }
        for (var p = 0; p < c.length; p++) {
            x = c[p];
            x.load(d,
            function () {
                q(a.onError, !0)
            })
        }
    }
    function s(b, c, e, f, g, i) {
        b = b || "script_" + new Number(new Date);
        var j = typeof e;
        switch (j) {
            case "string":
                e = e.replace(" ", "").split(",");
                break;
            case "object":
                if (!e) {
                    e = []
                }
                break;
            default:
                e = []
        }
        this.name = b;
        this.src = c;
        this.need = e || [];
        this.index = -1;
        this.context = f;
        this.onComplete = g;
        this.onError = i;
        this.scriptText = null;
        this.status = 0;
        if (this.src && d) {
            this.src = m(this.src, "_we7ver", a)
        }
        this.load = function (a, b) {
            if (a) {
                this.onComplete = a
            }
            if (b) {
                this.onError = b
            }
            var c = this,
            d = l();
            if (this.context) {
                this.index = this.context.q.length;
                this.context.q.push(this)
            }
            this.status = 1;
            d.onreadystatechange = function () {
                if (d.readyState === 4) {
                    if (d.status < 200 || d.status >= 400) {
                        h("Error when loading script " + c.name + ", server returned a bad status code: " + d.status);
                        c.status = -1;
                        if (c.context) {
                            c.context.q[c.index].status = -1
                        }
                        if (c.onError) {
                            c.onError.call(c)
                        }
                    } else {
                        if (c.context) {
                            c.context.q[c.index].scriptText = d.responseText;
                            c.context.injectScripts()
                        } else {
                            c.status = 2;
                            n(d.responseText);
                            h(c.name + " is now loaded");
                            if (c.onComplete) {
                                c.onComplete.call(c)
                            }
                        }
                    }
                }
            };
            d.open("GET", this.src, !0);
            d.send(null)
        }
    }
    function r() {
        this.q = [];
        this.injectScripts = function () {
            var a = this.q.length;
            h("Injecting scripts with " + a + " length of queue");
            for (var b = 0; b < a; b++) {
                var c = this.q[b];
                if (!c.scriptText) {
                    h("Script " + c.name + " is not ready yet when injecting scripts queue");
                    break
                } else if (c.status < 2) {
                    c.status = 2;
                    n(c.scriptText);
                    h(c.name + " is now loaded by queue");
                    if (c.onComplete) {
                        c.onComplete.call(c)
                    }
                }
            }
        }
    }
    function q(a, b) {
        if (!a) {
            return
        }
        var c = a.length,
        d;
        for (var e = 0; e < c; e++) {
            d = a[e];
            if (typeof d === "string") {
                n(d, !0)
            } else if (d) {
                d.call(window)
            }
            if (b) {
                a[e] = undefined
            }
        }
        if (b) {
            a.splice(0, a.length)
        }
    }
    function p(a, b, c, d) {
        if (!b) {
            return
        }
        if (a) {
            a.push(b)
        } else {
            a = [b]
        }
        if (c) {
            return q(a, d)
        }
        return a
    }
    function o(a) {
        var b = document.createElement("link");
        b.setAttribute("rel", "stylesheet");
        b.setAttribute("type", "text/css");
        b.setAttribute("href", a);
        document.getElementsByTagName("head")[0].appendChild(b)
    }
    function n(a, b) {
        var c = document.createElement("SCRIPT"),
        d = document.getElementsByTagName("head")[0];
        c.setAttribute("type", "text/javascript");
        c.setAttribute("injected", Number(new Date));
        d.appendChild(c);
        c.text = a;
        if (!b) {
            setTimeout(function () {
                d.removeChild(c)
            },
            1500)
        }
    }
    function m(a, b, c) {
        b = (a.indexOf("?") > -1 ? "&" : "?") + encodeURIComponent(b) + "=" + encodeURIComponent(c);
        var d = a.indexOf("#");
        d = d === -1 ? a.length : d;
        a = a.substr(0, d) + b + a.substr(d);
        return a
    }
    function l() {
        var a = !1;
        try {
            a = new XMLHttpRequest
        } catch (b) {
            var c = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
            var d = c.length;
            for (var e = 0; e < d; e++) {
                try {
                    a = new ActiveXObject(c[e])
                } catch (b) {
                    continue
                }
                break
            }
        } finally {
            if (!a) {
                var b = "Error: this browser does not support XmlHttpRequest";
                h(b);
                throw new Error(b)
            }
            return a
        }
    }
    var a = we7 && we7.we7 || 2011112209,
    b = "/scripts/",
    c = "/scripts/we7/_ResourceSets.js",
    d = !0,
    e = "ref",
    f = "config",
    debugMode = !1;
    var h = function F(a, b) {
        if (!debugMode) {
            return
        }
        var c = new Date;
        a = c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds() + "\t" + a;
        if (window.console && window.console.log) {
            window.console.log(a)
        }
    },
    i = {
        jQueryUI: [{
            name: "jqueryui",
            src: "/scripts/jquery/jQueryUI/jquery-ui.js"
        },
        {
            name: "_jquicss",
            src: "/scripts/jQuery/jQueryUI/css/jquery-ui.css"
        }],
        we7tip: [{
            name: "_tip_css",
            src: b + "we7/css/we7.tip.css"
        }],
        we7bind: [{
            name: "jgrid_css",
            src: "/scripts/we7/css/ui.jqgrid.css"
        },
        {
            name: "jgrid_lang",
            src: "/scripts/we7/i18n/grid.locale-cn.js"
        },
        {
            name: "jgrid",
            src: "/scripts/we7/jquery.jqGrid.min.js",
            need: "jgrid_lang"
        },
        {
            name: "we7bind",
            src: b + "we7/we7.bind.js",
            need: "jgrid"
        }]
    };
    if (jQuery && typeof jQuery.ui !== "undefined") {
        delete i.jQueryUI;
        h("jQuery UI has already been imported to this document")
    }
    var j, k = function () {
        var a = document.getElementsByTagName("SCRIPT");
        var b = a[a.length - 1];
        j = b.getAttribute("inner");
        return b.src
    } ();
    var t = {
        had: [],
        add: function (a) {
            t.had.push(a)
        },
        get: function (a) {
            var b = typeof a === "string" ? a : a.name;
            var c = t.had.length;
            for (var d = 0; d < c; d++) {
                if (t.had[d].name == b) return t.had[d]
            }
            return null
        }
    };
    var v = !1;
    x._readyFunc = null;
    x.ready = function (a, b) {
        x._readyFunc = p(x._readyFunc, a);
        if (!b && x._ready) {
            y()
        }
    };
    x.resoureSets = {};
    x.addResource = function (a) {
        for (var b in a) {
            if (a.hasOwnProperty(b)) {
                if (x.resoureSets[b]) {
                    h("Original resource " + b + " has been overwrite")
                }
                x.resoureSets[b] = a[b]
            }
        }
    };
    if (!window.we7) {
        window.we7 = {}
    }
    window.we7.load = x;
    var A = 0,
    B = 0,
    C = !1;
    if (j !== "false") {
        function D() {
            B++;
            if (B >= A && !C) {
                C = !0;
                z()
            }
        }
        for (var E in i) {
            if (i.hasOwnProperty(E)) {
                A++; (function (a) {
                    setTimeout(function () {
                        (new w(i[a], D)).load()
                    },
                    1)
                })(E)
            }
        }
    } else {
        z()
    }
})();

(function ($) {
    $.tools = $.tools || {
        version: 'v1.2.5'
    };
    $.tools.tooltip = {
        conf: {
            effect: 'toggle',
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            rePosition: true,
            position: ['top', 'center'],
            offset: [0, 0],
            relative: false,
            cancelDefault: true,
            autoHide: true,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: '<div rel="tipcontent"/>',
            tipClass: 'tooltip'
        },
        addEffect: function (name, loadFn, hideFn) {
            effects[name] = [loadFn, hideFn];
        }
    };
    var effects = {
        toggle: [function (done) {
            var conf = this.getConf(),
            tip = this.getTip(),
            o = conf.opacity;
            if (o < 1) {
                tip.css({
                    opacity: o
                });
            }
            tip.show();
            done.call();
        },
        function (done) {
            this.getTip().hide();
            done.call();
        } ],
        fade: [function (done) {
            var conf = this.getConf();
            this.getTip().fadeTo(conf.fadeInSpeed, conf.opacity, done);
        },
        function (done) {
            this.getTip().fadeOut(this.getConf().fadeOutSpeed, done);
        } ]
    };
    function getPosition(trigger, tip, conf) {
        var top = conf.relative ? trigger.position().top : trigger.offset().top,
        left = conf.relative ? trigger.position().left : trigger.offset().left,
        pos = conf.position[0];
        top -= tip.outerHeight() - conf.offset[0];
        left += trigger.outerWidth() + conf.offset[1];
        if (/iPad/i.test(navigator.userAgent)) {
            top -= $(window).scrollTop();
        }
        var height = tip.outerHeight() + trigger.outerHeight();
        if (pos == 'center') {
            top += height / 2;
        }
        if (pos == 'bottom') {
            top += height;
        }
        pos = conf.position[1];
        var width = tip.outerWidth() + trigger.outerWidth();
        if (pos == 'center') {
            left -= width / 2;
        }
        if (pos == 'left') {
            left -= width;
        }
        return {
            top: top,
            left: left
        };
    }
    function getContentPanel(tip) {
        var panel = tip.find("[rel='tipcontent']");
        return panel.length ? panel : tip;
    }
    function Tooltip(trigger, conf) {
        var self = this,
        fire = trigger.add(self),
        tip,
        timer = 0,
        pretimer = 0,
        title = trigger.attr("title"),
        tipAttr = trigger.attr("data-tooltip"),
        effect = effects[conf.effect],
        shown,
        isInput = trigger.is(":input"),
        isWidget = isInput && trigger.is(":checkbox, :radio, select, :button, :submit"),
        type = trigger.attr("type"),
        evt = conf.events[type] || conf.events[isInput ? (isWidget ? 'widget' : 'input') : 'def'];
        if (!effect) {
            throw "Nonexistent effect \"" + conf.effect + "\"";
        }
        evt = evt.split(/,\s*/);
        if (evt.length != 2) {
            throw "Tooltip: bad events configuration for " + type;
        }
        $.each(evt,
        function (i, ev) {
            var evs = ev.split(' ');
            $.each(evs,
            function (j, e) {
                if (e.indexOf('.') < 0) {
                    evs[j] = e + '.T';
                }
            });
            evt[i] = evs.join(' ');
        });
        trigger.bind(evt[0],
        function (e) {
            clearTimeout(timer);
            if (conf.predelay) {
                pretimer = setTimeout(function () {
                    self.show(e);
                },
                conf.predelay);
            } else {
                self.show(e);
            }
            e.stopPropagation();
        }).bind(evt[1],
        function (e) {
            clearTimeout(pretimer);
            if (conf.delay) {
                timer = setTimeout(function () {
                    self.hide(e);
                },
                conf.delay);
            } else {
                self.hide(e);
            }
        });
        if (title && conf.cancelDefault) {
            trigger.removeAttr("title");
            trigger.data("title", title);
        }
        $.extend(self, {
            show: function (e) {
                var customedTip = tip && tip.data("_custom"),
                customTip = e && (typeof e === "string" && e);
                if (customTip) {
                    e = undefined;
                } else {
                    tip && tip.removeData("_custom");
                }
                if (customTip || customedTip) {
                    if (tip) tip.remove();
                    tip = undefined;
                }
                if (!tip) {
                    if (tipAttr) {
                        tip = $(tipAttr);
                    } else if (conf.tip) {
                        tip = $(conf.tip).eq(0);
                    } else if (title) {
                        tip = $(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide();
                    } else {
                        tip = trigger.next();
                        if (!tip.length) {
                            tip = trigger.parent().next();
                        }
                    }
                    if (!tip.length) {
                        throw "Cannot find tooltip for " + trigger;
                    }
                    getContentPanel(tip).empty().append(title);
                }
                if (conf.tip) {
                    getContentPanel(tip).html(trigger.data("title"));
                }
                if (customTip) {
                    getContentPanel(tip).empty().append(customTip);
                    tip.data("_custom", true);
                }
                if (!customTip && self.isShown()) {
                    return self;
                }
                tip.stop(true, true);
                var pos = getPosition(trigger, tip, conf);
                e = e || $.Event();
                e.type = "onBeforeShow";
                fire.trigger(e, [pos]);
                if (e.isDefaultPrevented()) {
                    return self;
                }
                pos = getPosition(trigger, tip, conf);
                if (conf.rePosition) {
                    tip.css({
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left
                    });
                }
                shown = true;
                effect[0].call(self,
                function () {
                    e.type = "onShow";
                    shown = 'full';
                    fire.trigger(e);
                });
                var event = conf.events.tooltip.split(/,\s*/);
                if (!tip.data("__set")) {
                    tip.bind(event[0],
                    function () {
                        clearTimeout(timer);
                        clearTimeout(pretimer);
                    });
                    if (event[1] && !trigger.is("input:not(:checkbox, :radio), textarea")) {
                        tip.bind(event[1],
                        function (e) {
                            if (e.relatedTarget != trigger[0]) {
                                trigger.trigger(evt[1].split(" ")[0]);
                            }
                        });
                    }
                    tip.data("__set", true);
                }
                return self;
            },
            hide: function (e) {
                if (!tip || !self.isShown()) {
                    return self;
                }
                if (!conf.autoHide) {
                    return self;
                }
                e = e || $.Event();
                e.type = "onBeforeHide";
                fire.trigger(e);
                if (e.isDefaultPrevented()) {
                    return;
                }
                shown = false;
                effects[conf.effect][1].call(self,
                function () {
                    e.type = "onHide";
                    fire.trigger(e);
                });
                return self;
            },
            destroy: function () {
                if (tip) {
                    tip.stop(true, true).hide(function () {
                        $(this).remove()
                    });
                }
                trigger.unbind(evt[0]).unbind(evt[1]);
                trigger.removeData("tooltip");
            },
            isShown: function (fully) {
                return fully ? shown == 'full' : shown;
            },
            getConf: function () {
                return conf;
            },
            getTip: function () {
                return tip;
            },
            getTrigger: function () {
                return trigger;
            }
        });
        $.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),
        function (i, name) {
            if ($.isFunction(conf[name])) {
                $(self).bind(name, conf[name]);
            }
            self[name] = function (fn) {
                if (fn) {
                    $(self).bind(name, fn);
                }
                return self;
            };
        });
    }
    $.fn.tooltip = function (conf) {
        var api = this.data("tooltip");
        if (api) {
            return api;
        }
        conf = $.extend(true, {},
        $.tools.tooltip.conf, conf);
        if (typeof conf.position == 'string') {
            conf.position = conf.position.split(/,?\s/);
        }
        this.each(function () {
            api = new Tooltip($(this), conf);
            $(this).data("tooltip", api);
        });
        return conf.api ? api : this;
    };
})(jQuery); (function (a) {
    var b = a.tools.tooltip;
    a.extend(b.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 300,
        slideOutSpeed: 200,
        slideFade: !a.browser.msie
    });
    var c = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    b.addEffect("slide",
    function (a) {
        var b = this.getConf(),
        d = this.getTip(),
        e = b.slideFade ? {
            opacity: b.opacity
        } : {},
        f = c[b.direction] || c.up;
        e[f[1]] = f[0] + "=" + b.slideOffset,
        b.slideFade && d.css({
            opacity: 0
        }),
        d.show().animate(e, b.slideInSpeed, a)
    },
    function (b) {
        var d = this.getConf(),
        e = d.slideOffset,
        f = d.slideFade ? {
            opacity: 0
        } : {},
        g = c[d.direction] || c.up,
        h = "" + g[0];
        d.bounce && (h = h == "+" ? "-" : "+"),
        f[g[1]] = h + "=" + e,
        this.getTip().animate(f, d.slideOutSpeed,
        function () {
            a(this).hide(),
            b.call()
        })
    })
})(jQuery); (function (a) {
    var b = a.tools.tooltip;
    b.dynamic = {
        conf: {
            classNames: "top right bottom left"
        }
    };
    function c(b) {
        var c = a(window),
        d = c.width() + c.scrollLeft(),
        e = c.height() + c.scrollTop();
        return [b.offset().top <= c.scrollTop(), d <= b.offset().left + b.width(), e <= b.offset().top + b.height(), c.scrollLeft() >= b.offset().left]
    }
    function d(a) {
        var b = a.length;
        while (b--) if (a[b]) return !1;
        return !0
    }
    a.fn.dynamic = function (e) {
        typeof e == "number" && (e = {
            speed: e
        }),
        e = a.extend({},
        b.dynamic.conf, e);
        var f = a.extend(!0, {},
        e),
        g = e.classNames.split(/\s/),
        h;
        this.each(function () {
            var b = a(this).tooltip().onBeforeShow(function (b, e) {
                var i = this.getTip(),
                j = this.getConf();
                h || (h = [j.position[0], j.position[1], j.offset[0], j.offset[1], a.extend({},
                j)]),
                a.extend(j, h[4]),
                j.position = [h[0], h[1]],
                j.offset = [h[2], h[3]],
                i.css({
                    visibility: "hidden",
                    position: "absolute",
                    top: e.top,
                    left: e.left
                }).show();
                var k = a.extend(!0, {},
                f),
                l = c(i);
                if (!d(l)) {
                    l[2] && (a.extend(j, k.top), j.position[0] = "top", i.addClass(g[0])),
                    l[3] && (a.extend(j, k.right), j.position[1] = "right", i.addClass(g[1])),
                    l[0] && (a.extend(j, k.bottom), j.position[0] = "bottom", i.addClass(g[2])),
                    l[1] && (a.extend(j, k.left), j.position[1] = "left", i.addClass(g[3]));
                    if (l[0] || l[2]) j.offset[0] *= -1;
                    if (l[1] || l[3]) j.offset[1] *= -1
                }
                i.css({
                    visibility: "visible"
                }).hide()
            });
            b.onBeforeShow(function () {
                var a = this.getConf(),
                b = this.getTip();
                setTimeout(function () {
                    a.position = [h[0], h[1]],
                    a.offset = [h[2], h[3]]
                },
                0)
            }),
            b.onHide(function () {
                var a = this.getTip();
                a.removeClass(e.classNames)
            }),
            ret = b
        });
        return e.api ? ret : this
    }
})(jQuery); (function (a) {
    function ioa(arr, elem) {
        if (!arr || !arr.length) {
            return -1
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                return i
            }
        }
        return -1
    }
    function r(d, e, f) {
        function n(b, c, d) {
            if (!f.grouped && b.length) {
                return
            }
            var e;
            if (d === false || a.isArray(d)) {
                e = i.messages[c.key || c] || i.messages["*"];
                e = e[f.lang] || i.messages["*"].en;
                var g = e.match(/\$\d/g);
                if (g && a.isArray(d)) {
                    a.each(g,
                    function (a) {
                        e = e.replace(this, d[a])
                    })
                }
            } else {
                e = d[f.lang] || d
            }
            b.push(e)
        }
        var g = this,
        h = e.add(g),
        k = false;
        d = d.not(":button, :image, :reset, :submit");
        var o = {
            _get: function (a) {
                return a.data("valCache")
            },
            isValid: function (a, c) {
                var d = o._get(a);
                return d && b(d.valid, c) > -1
            },
            push: function (a, b, c) {
                var d = o._get(a) || {
                    valid: [],
                    invalid: []
                };
                if (c) {
                    d.invalid.push({
                        val: b,
                        msgs: c
                    })
                } else {
                    d.valid.push(b)
                }
                a.data("valCache", d)
            },
            isInvalid: function (b, c) {
                var d = o._get(b);
                return d &&
                function () {
                    var b = false;
                    a.each(d.invalid,
                    function (a, d) {
                        if (d.val === c) {
                            b = d.msgs;
                            return false
                        }
                    });
                    return b
                } ()
            }
        };
        a.extend(g, {
            getConf: function () {
                return f
            },
            getForm: function () {
                return e
            },
            getInputs: function () {
                return d
            },
            reflow: function () {
                d.each(function () {
                    var b = a(this),
                    c = b.data("msg.el");
                    if (c) {
                        var d = j(b, c, f);
                        c.css({
                            top: d.top,
                            left: d.left
                        })
                    }
                });
                return g
            },
            invalidate: function (b, c, e) {
                e = !!e;
                if (!c) {
                    var i = [];
                    a.each(b,
                    function (a, b) {
                        var c = d.filter("[name='" + a + "']");
                        if (c.length) {
                            c.trigger("OI", [b]);
                            i.push({
                                input: c,
                                messages: [b]
                            })
                        }
                    });
                    b = i;
                    c = a.Event()
                }
                c.type = "onFail";
                h.trigger(c, [b, e]);
                if (f.focusOnError) {
                    try {
                        b[0].input[0].focus()
                    } catch (j) { }
                }
                return g
            },
            reset: function (b) {
                b = b ? b.not(":button, :image, :reset, :submit") : d;
                b.removeClass(f.errClass).removeClass(f.okClass).each(function () {
                    var b = a(this).data("msg.el");
                    if (b) {
                        b.remove();
                        a(this).data("msg.el", null)
                    }
                });
                if (f.errorInputEvent) {
                    b.unbind(f.errorInputEvent + ".VE" || "")
                }
                return g
            },
            destroy: function () {
                e.unbind(f.formEvent + ".V").unbind("reset.V");
                d.unbind(f.inputEvent + ".V").unbind("change.V");
                if (f.errorInputEvent) {
                    d.unbind(f.errorInputEvent + ".VE" || "")
                }
                return g.reset()
            },
            isCompleted: function () {
                return !k
            },
            checkValidity: function (e, i, j) {
                function u() {
                    if (r.length) {
                        g.invalidate(r, i, j);
                        return false
                    } else {
                        if (f.errorInputEvent) {
                            e.unbind(f.errorInputEvent + ".VE")
                        }
                        i.type = "onSuccess";
                        if (!j) {
                            h.trigger(i, [e, j])
                        }
                    }
                    return true
                }
                function s(b) {
                    if (!f.custom) {
                        return true
                    }
                    var c = b.data("validator-custom"),
                    d = [];
                    if (c) {
                        if (c.length) {
                            a.each(c,
                            function (a, c) {
                                var e = c.call(b, g, j);
                                if (e !== true) {
                                    d.push(e)
                                }
                            })
                        } else {
                            d = c.call(b, g, j);
                            if (d !== true) {
                                d = [d]
                            }
                        }
                        return d.length ? d : true
                    }
                    return true
                }
                var p = m[f.effect];
                if (!p) {
                    throw 'Validator: cannot find effect "' + f.effect + '"'
                }
                j = !!j;
                e = e || d;
                e = e.not(":disabled").filter(function (b) {
                    return q(a(this))
                });
                if (!e.length) {
                    return true
                }
                i = i || a.Event();
                i.type = "onBeforeValidate";
                h.trigger(i, [e, j]);
                if (i.isDefaultPrevented()) {
                    return i.result
                }
                var r = [];
                var t = [];
                e.not(":radio:not(:checked)").not(":hidden").each(function () {
                    function u() {
                        if (b.length) {
                            var a = {
                                input: d,
                                messages: b
                            };
                            r.push(a);
                            d.trigger("OI", [b]);
                            if (f.errorInputEvent) {
                                d.bind(k,
                                function (a) {
                                    g.checkValidity(d, a, true)
                                })
                            }
                            i.type = "onInputFail";
                            h.trigger(i, [d, b, j]);
                            if (!i.isDefaultPrevented()) {
                                p[0].call(g, [a])
                            }
                        } else if (!q) {
                            i.type = "onInputSuccess";
                            h.trigger(i, [d, j]);
                            if (!i.isDefaultPrevented()) {
                                p[1].call(g, d)
                            }
                        }
                        if (r.length && f.singleError) {
                            t = [];
                            return false
                        }
                        return true
                    }
                    var b = [],
                    d = a(this).data("messages", b),
                    e = d.val(),
                    k = c(d) ? "onHide.v" : f.errorInputEvent + ".VE",
                    m,
                    q;
                    d.unbind(k);
                    if (o.isValid(d, e)) {
                        return u()
                    } else if (m = o.isInvalid(d, e)) {
                        b = m;
                        return u()
                    }
                    var v = s(d);
                    if (v !== true) {
                        var w = d.attr(f.errMsgAttr);
                        if (w) {
                            b = [w];
                            return false
                        } else {
                            a.each(v,
                            function (a, c) {
                                n(b, "*", c)
                            })
                        }
                    }
                    a.each(l,
                    function () {
                        var a = this,
                        c = a[0];
                        if (d.filter(c).length) {
                            var h = a[1].call(g, d, e, j);
                            if (h !== true) {
                                var i = d.attr(f.errMsgAttr);
                                if (i) {
                                    b = [i];
                                    return false
                                } else {
                                    n(b, c, h)
                                }
                            }
                        }
                    });
                    if (!b.length) {
                        if (d.data("validator-ajax")) {
                            q = true;
                            t.push(d)
                        } else {
                            o.push(d, e, null)
                        }
                    } else {
                        o.push(d, e, b)
                    }
                    return u()
                });
                if ((!j || f.ajaxOnSoft) && t.length) {
                    k = true;
                    i.type = "onAjaxStart";
                    h.trigger(i, [t, j]);
                    if (i.isDefaultPrevented()) {
                        t = [];
                        k = false;
                        return u()
                    }
                    function v(a, c) {
                        var d = b(t, a);
                        if (d > -1) {
                            t.splice(d, 1);
                            if (c !== "canceled") {
                                i.type = "onAjaxResponse";
                                h.trigger(i, [a, c, j]);
                                if (c === null) {
                                    o.push(a, a.val(), null);
                                    i.type = "onInputSuccess";
                                    h.trigger(i, [a, j]);
                                    if (!i.isDefaultPrevented()) {
                                        p[1].call(g, a)
                                    }
                                } else {
                                    o.push(a, a.val(), c.messages);
                                    i.type = "onInputFail";
                                    h.trigger(i, [a, c.messages, j, "ajax"]);
                                    if (!i.isDefaultPrevented()) {
                                        p[0].call(g, r)
                                    }
                                }
                            }
                        }
                        if (t.length === 0) {
                            k = false;
                            i.type = "onAjaxDone";
                            h.trigger(i, [t, r, j]);
                            return u()
                        }
                    }
                    function w() {
                        if (g._ajaxTimer) {
                            delete g._ajaxTimer
                        }
                        a.each(t,
                        function (a, b) {
                            i.type = "onAjaxRequest";
                            h.trigger(i, [b, j]);
                            if (i.isDefaultPrevented()) {
                                v(b, "canceled")
                            } else {
                                var c = b.data("validator-ajax");
                                c.call(b, g,
                                function (a, b) {
                                    var c = null;
                                    if (a !== true) {
                                        c = {
                                            input: this,
                                            messages: [a]
                                        };
                                        r.push(c)
                                    }
                                    v(this, c)
                                })
                            }
                        })
                    }
                    if (j) {
                        if (g._ajaxTimer) {
                            try {
                                clearTimeout(g._ajaxTimer)
                            } catch (x) { }
                        }
                        g._ajaxTimer = setTimeout(w, 750)
                    } else {
                        w()
                    }
                    return false
                } else {
                    return u()
                }
            }
        });
        g.validate = g.checkValidity;
        a.each("onBeforeValidate,onInputSuccess,onInputFail,onFail,onSuccess,onAjaxStart,onAjaxRequest,onAjaxResponse,onAjaxDone".split(","),
        function (b, c) {
            if (a.isFunction(f[c])) {
                a(g).bind(c, f[c])
            }
            g[c] = function (b) {
                if (b) {
                    a(g).bind(c, b)
                }
                return g
            }
        });
        if (f.formEvent) {
            e.bind(f.formEvent + ".V",
            function (a) {
                if (!g.checkValidity(null, a)) {
                    return a.preventDefault()
                }
            })
        }
        e.bind("reset.V",
        function () {
            g.reset()
        });
        if (d[0] && d[0].validity) {
            d.each(function () {
                this.oninvalid = function (a) {
                    if (a) {
                        a.preventDefault()
                    }
                    return false
                }
            })
        }
        if (e[0]) {
            e[0].checkValidity = g.checkValidity
        }
        if (f.inputEvent) {
            d.bind(f.inputEvent + ".V",
            function (b) {
                g.checkValidity(a(this), b, true)
            })
        }
        d.filter(":checkbox, select").filter("[required]").bind("change.V",
        function (b) {
            var c = a(this);
            if (this.checked || c.is("select") && a(this).val()) {
                var d = a.Event();
                d.type = "onInputSuccess";
                h.trigger(d, [c, true]);
                if (!d.isDefaultPrevented()) {
                    m[f.effect][1].call(g, c, b)
                }
            }
        });
        var p = d.filter(":radio").change(function (a) {
            g.checkValidity(p, a, true)
        });
        a(window).resize(function () {
            g.reflow()
        })
    }
    function q(a) {
        function c(a) {
            if (typeof a === "undefined") return false;
            if (a === "") return false;
            return true
        }
        var b = a.attr("we7-validate");
        if (c(b)) {
            return true
        }
        var d = a.attr("required"),
        e = a.attr("max"),
        f = a.attr("min"),
        g = a.attr("maxlength"),
        h = a.attr("pattern"),
        i = a.attr("data-type"),
        j = a.attr("type"),
        k = j === "url",
        l = j === "email",
        m = j === "number";
        if (k || l || m || c(i) || c(d) && d || c(e) || c(f) || c(g) && g > 0 && g < 524288 || c(h) && h) {
            a.attr("we7-validate", "validate");
            return true
        }
        return false
    }
    function k(a) {
        function b() {
            return this.getAttribute("type") == a
        }
        b.key = "[type=" + a + "]";
        return b
    }
    function j(b, c, d) {
        var e = b.offset().top,
        f = b.offset().left,
        g = d.position.split(/,?\s+/),
        h = g[0],
        i = g[1];
        e -= c.outerHeight() - d.offset[0];
        f += b.outerWidth() + d.offset[1];
        if (/iPad/i.test(navigator.userAgent)) {
            e -= a(window).scrollTop()
        }
        var j = c.outerHeight() + b.outerHeight();
        if (h == "center") {
            e += j / 2
        }
        if (h == "bottom") {
            e += j
        }
        var k = b.outerWidth();
        if (i == "center") {
            f -= (k + c.outerWidth()) / 2
        }
        if (i == "left") {
            f -= k
        }
        return {
            top: e,
            left: f
        }
    }
    function c(b) {
        return !!(a.tools.dateinput && a(b).attr("we7date"))
    }
    var b = ioa;
    a.tools = a.tools || {
        version: "v1.2.5"
    };
    var d = /\[type=([a-z]+)\]/,
    e = /^-?[0-9]*(\.[0-9]+)?$/,
    f = a.tools.dateinput,
    g = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
    h = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
    i;
    i = a.tools.validator = {
        conf: {
            grouped: false,
            effect: "default",
            errClass: "invalid",
            okClass: "nice",
            inputEvent: null,
            errorInputEvent: "keyup",
            formEvent: "submit",
            custom: true,
            focusOnError: false,
            showTips: true,
            ajaxOnSoft: false,
            lang: "en",
            message: "<div/>",
            errMsgAttr: "msg-error",
            okMsgAttr: "msg-ok",
            errMsgClass: "error",
            okMsgClass: "ok",
            offset: [0, 0],
            position: "center right",
            singleError: false,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "请输入正确的值"
            }
        },
        localize: function (b, c) {
            a.each(c,
            function (a, c) {
                i.messages[a] = i.messages[a] || {};
                i.messages[a][b] = c
            })
        },
        localizeFn: function (b, c) {
            i.messages[b] = i.messages[b] || {};
            a.extend(i.messages[b], c)
        },
        fn: function (b, c, e) {
            if (a.isFunction(c)) {
                e = c
            } else {
                if (typeof c == "string") {
                    c = {
                        en: c
                    }
                }
                this.messages[b.key || b] = c
            }
            var f = d.exec(b);
            if (f) {
                b = k(f[1])
            }
            l.push([b, e])
        },
        addEffect: function (a, b, c) {
            m[a] = [b, c]
        }
    };
    var l = [],
    m = {
        "default": [function (b) {
            var c = this.getConf();
            if (!c.showTips) {
                return
            }
            a.each(b,
            function (b, d) {
                var e = d.input;
                e.removeClass(c.okClass).addClass(c.errClass);
                var f = e.data("msg.el");
                if (!f) {
                    f = a(c.message).appendTo(document.body);
                    e.data("msg.el", f)
                }
                f.removeClass(c.okMsgClass).addClass(c.errMsgClass);
                f.css({
                    visibility: "hidden"
                }).find("p").remove();
                a.each(d.messages,
                function (b, c) {
                    a("<p/>").html(c).appendTo(f)
                });
                if (f.outerWidth() == f.parent().width()) {
                    f.add(f.find("p")).css({
                        display: "inline"
                    })
                }
                var g = j(e, f, c);
                f.css({
                    visibility: "visible",
                    position: "absolute",
                    top: g.top,
                    left: g.left
                }).fadeIn(c.speed)
            })
        },
        function (b) {
            var c = this.getConf();
            if (!c.showTips) {
                return
            }
            b.removeClass(c.errClass).removeClass(c.okClass).each(function () {
                var b = a(this).data("msg.el");
                if (b) {
                    b.css({
                        visibility: "hidden"
                    })
                }
            })
        } ],
        we7: [null,
        function (b) {
            var c = this.getConf();
            if (!c.showTips) {
                return
            }
            b.removeClass(c.errClass).addClass(c.okClass).each(function () {
                var b = a(this);
                var d = b.data("msg.el");
                if (!d) {
                    d = a(c.message).appendTo(document.body);
                    b.data("msg.el", d)
                }
                d.removeClass(c.errMsgClass).addClass(c.okMsgClass);
                d.css({
                    visibility: "hidden"
                }).find("p").remove();
                var e = b.attr(c.okMsgAttr) || "填写正确";
                if (!e) {
                    return
                }
                a("<p/>").html(e).appendTo(d);
                if (d.outerWidth() == d.parent().width()) {
                    d.add(d.find("p")).css({
                        display: "inline"
                    })
                }
                var f = j(b, d, c);
                d.css({
                    visibility: "visible",
                    position: "absolute",
                    top: f.top,
                    left: f.left
                }).fadeIn(c.speed)
            })
        } ]
    };
    m.we7[0] = m["default"][0];
    a.each("email,url,number".split(","),
    function (b, c) {
        a.expr[":"][c] = function (a) {
            return a.getAttribute("type") === c
        }
    });
    a.fn.oninvalid = function (a) {
        return this[a ? "bind" : "trigger"]("OI", a)
    };
    var n = "请输入正确的 Email 地址",
    o = "请输入正确的网址",
    p = "请输入数字";
    i.fn(":email", n,
    function (a, b) {
        return !b || g.test(b)
    });
    i.fn(":url", o,
    function (a, b) {
        return !b || h.test(b)
    });
    i.fn(":number", p,
    function (a, b) {
        return e.test(b)
    });
    i.fn("[data-type=email]", n,
    function (a, b) {
        return !b || g.test(b)
    });
    i.fn("[data-type=url]", o,
    function (a, b) {
        return !b || h.test(b)
    });
    i.fn("[data-type=number]", p,
    function (a, b) {
        return e.test(b)
    });
    i.fn("[max]", "请输入小于 $1 的数值",
    function (a, b) {
        if (b === "" || c(a)) {
            return true
        }
        var d = a.attr("max");
        return parseFloat(b) <= parseFloat(d) ? true : [d]
    });
    i.fn("[min]", "请输入大于 $1 的数值",
    function (a, b) {
        if (b === "" || c(a)) {
            return true
        }
        var d = a.attr("min");
        return parseFloat(b) >= parseFloat(d) ? true : [d]
    });
    i.fn("[maxlength]", "请按要求输入不超过 $1 个字符",
    function (a, b) {
        var c = parseInt(a.attr("maxlength"));
        if (b && b.length && b.length > c) {
            return [c]
        }
        return true
    });
    i.fn("[minlength]", "请按要求输入不少于 $1 个字符",
    function (a, b) {
        var c = parseInt(a.attr("minlength"));
        if (b && b.length && b.length < c) {
            return [c]
        }
        return true
    });
    i.fn("[required]", "此项是必须填写的",
    function (a, b) {
        if (a.is(":checkbox")) {
            return a.is(":checked")
        }
        return !!b
    });
    i.fn("[pattern]",
    function (a) {
        var v, b = new RegExp("^" + a.attr("pattern") + "$");
        return !(v = a.val()) || b.test(v)
    });
    a.fn.validator = function (b) {
        var c = this.data("we7_validator");
        if (c) {
            c.destroy();
            this.removeData("we7_validator")
        }
        b = a.extend(true, {},
        i.conf, b);
        if (this.is(":input")) {
            c = new r(this, this.parent(), b);
            return this.data("we7_validator", c)
        } else {
            return this.attr("novalidate", "novalidate").each(function () {
                var d = a(this);
                c = new r(d.find(":input"), d, b);
                d.data("we7_validator", c)
            })
        }
    }
})(jQuery);

/*tools*/
(function (a) {
    function b(b, c) {
        var d = b[0],
        e = b[1] || {};
        if (a.isFunc(d)) {
            e.tip = d.call(c)
        } else if (a.isObj(d)) {
            e = $.extend(d, e)
        } else {
            e.tip = d
        }
        if (a.isFunc(e.tip)) {
            e.tip = e.tip.call(c)
        }
        return e
    }
    $.extend(a.fn, {
        tip: function (a, c) {
            if (!this.jquery) {
                return
            }
            c = b(arguments, this.jquery);
            if (c) {
                a = c.tip;
                if (a) {
                    delete c.tip
                }
            }
            var d = "tooltip-follow";
            c = $.extend({
                tipClass: d,
                cancelDefault: !0,
                effect: "fade",
                fadeOutSpeed: 100,
                predelay: 200,
                delay: 100,
                position: "center right",
                offset: [0, 5]
            },
            c);
            if (c.target) {
                c.tip = c.target;
                delete c.target
            }
            this.jquery.each(function () {
                var b = $(this),
                d,
                e = c.cancelDefault,
                f = b.attr("title");
                d = a || f || "  ";
                b.attr("title", d);
                $(this).tooltip(c);
                if (e) {
                    b.removeAttr("title")
                } else {
                    b.attr("title", f)
                }
            });
            return this
        },
        status: function (a, b) {
            var c = "tooltip-status";
            b = $.extend({
                tipClass: c,
                cancelDefault: !1,
                rePosition: !1,
                layout: '<div><p rel="tipcontent"></p></div>'
            },
            b);
            var d = this.tip(a, b),
            a = this.jquery.data("tooltip");
            if (we7.isUndef(b.center) ? true : b.center) {
                a.onBeforeShow(function () {
                    var a = this.getTip();
                    a.css("left", Math.max(($(window).width() - a.width()) / 2, 0))
                })
            }
            return d
        },
        popup: function (a, b) {
            var c = !1,
            d = "tooltip-popup";
            b = $.extend({
                tipClass: d,
                position: "top center",
                offset: [10, 0],
                predelay: 150,
                delay: 250,
                effect: "slide",
                layout: '<div><div class="triangle triangle-top"></div><div class="popup-content" rel="tipcontent"></div><div class="triangle triangle-bottom"></div></div>'
            },
            b);
            this.tip(a, b);
            this.jquery.dynamic({
                classNames: "t r popup-at-bottom l",
                bottom: {
                    direction: "down",
                    bounce: !0
                }
            });
            return this
        },
        hint: function (a, b) {
            var c = "tooltip-hint";
            b = $.extend({
                tipClass: c,
                position: "top center",
                offset: [-5, -40],
                fadeOutSpeed: 150,
                predelay: 350,
                effect: "fade",
                layout: '<div><div class="triangle triangle-top"></div><div class="hint-content" rel="tipcontent"></div><div class="triangle triangle-bottom"></div></div>'
            },
            b);
            this.tip(a, b);
            this.jquery.dynamic({
                classNames: "t r hint-at-bottom l",
                bottom: {
                    direction: "down",
                    bounce: !0
                }
            });
            return this
        },
        help: function (b, c) {
            this.jquery.each(function () {
                var d = a(this);
                var e, f = "tooltip-help";
                if (e = d.jquery.attr("title")) {
                    d.jquery.attr("title", "")
                }
                d.jquery = $('<acronym rel="we7_help"> </acronym>').attr("title", e).addClass(f).insertAfter(d.jquery);
                c = $.extend({
                    offset: [0, 10],
                    tip: e,
                    cancelDefault: !0
                },
                c);
                d.tip(b, c)
            });
            return this
        }
    });
    $.extend(a.fn, {
        isInput: function () {
            return this.jquery ? this.jquery.is(":input") : !1
        },
        validate: function (a, b) {
            return this.getValidator(!0, !0, a, b).checkValidity()
        },
        customValidator: function (b) {
            var c = "validator-custom",
            d = this.jquery,
            e = d && d.data(c) || [];
            if (d) {
                if (a.isFunc(e)) {
                    e = [e]
                }
                e.push(b);
                if (this.jquery.is(":input")) {
                    d.data(c, e)
                } else {
                    d.find(":input").each(function () {
                        $(this).data(c, e)
                    })
                }
            }
            this.getInputs(!0);
            return this
        },
        attachValidator: function (b, c) {
            if (this.validator && !b && !c) {
                return this
            }
            var d = a.isFunc(b);
            if (!d && a.isObj(b)) {
                c = c ? $.extend(b, c) : b
            }
            c = $.extend({
                effect: "we7",
                errClass: "validator-invalid",
                errMsgClass: "validator-error",
                okMsgClass: "validator-ok",
                offset: [0, 5],
                formEvent: null,
                errMsgAttr: "errmsg",
                okMsgAttr: "okmsg"
            },
            c);
            d && !c.validator && (c.validator = b);
            if (a.isFunc(c.validator)) {
                this.customValidator(c.validator);
                delete c.validator
            }
            if (this.validator) {
                this.validator.destroy()
            }
            this.validator = this.jquery.validator(c).data("we7_validator");
            return this
        },
        getValidator: function (a, b, c, d) {
            var e = this.validator || (this.validator = this.jquery.data("we7_validator"));
            if (!e && a && (b || !this.isInput())) {
                this.attachValidator(c, d)
            }
            return this.validator
        },
        getInputs: function (a, b) {
            if (!this._inputs) {
                this._inputs = this.jquery.is(":input") ? this.jquery : this.jquery.find(":input");
                if (a) {
                    this._inputs.attr("we7-validate", "validate")
                }
            }
            return b ? this._inputs.filter(b) : this._inputs
        },
        validateRules: function (b) {
            var c, d = this.getInputs();
            for (c in b) {
                if (b.hasOwnProperty(c)) {
                    switch (c) {
                        case "max":
                        case "min":
                        case "required":
                            d.attr(c, b[c]);
                            break;
                        case "type":
                            d.attr("data-type", b[c]);
                            break;
                        case "pattern":
                            d.attr("pattern", b[c]);
                            break;
                        case "length":
                            this.validateLength(b[c]);
                            break;
                        default:
                            a.log && a.log("Validate rule ignored:" + c);
                            break
                    }
                }
            }
            return this
        },
        validateMax: function (a) {
            this.getInputs().attr("max", a);
            return this
        },
        validateMin: function (a) {
            this.getInputs().attr("min", a);
            return this
        },
        validateEmail: function () {
            this.getInputs().attr("data-type", "email");
            return this
        },
        validateUrl: function () {
            this.getInputs().attr("data-type", "url");
            return this
        },
        validateNumber: function (b, c) {
            var d = this.getInputs().attr("data-type", "number");
            if (!a.isUndef(b)) {
                d.attr("min", b)
            }
            if (!a.isUndef(c)) {
                d.attr("max", c)
            }
            return this
        },
        validateRequired: function () {
            this.getInputs().attr("required", "required");
            return this
        },
        validatePattern: function (b, c) {
            if (a.isStr(b)) {
                b = new RegExp("^" + b + "$")
            }
            this.getInputs().each(function () {
                var d = a(this);
                d.customValidator(function (a) {
                    var d = this.val(),
                    e = b.test(d);
                    if (!c) {
                        var f = a.getConf().messageAttr;
                        if (f) {
                            c = this.attr(f)
                        }
                    }
                    return e ? !0 : c ? c : "您的输入不符合规范"
                })
            });
            return this
        },
        validateAjax: function (b) {
            var c, d = arguments;
            if (!a.isFunc(b) && a.isObj(b)) {
                c = $.extend({},
                b)
            } else {
                c = {
                    url: d[0],
                    callback: d[1],
                    error: d[2],
                    options: d[3]
                }
            }
            var e = function (b, d) {
                var e = a.isFunc(c.url) ? c.url.call(this, b) : c.url;
                var f = this,
                g = {
                    type: "GET",
                    url: e,
                    cache: !1,
                    error: function () {
                        var a = c.error && c.error.apply(f, arguments);
                        d && d.call(f, a ? a : "Network Error", this)
                    }
                };
                g = $.extend(g, c.options);
                g.success = function () {
                    d && d.call(f, c.callback.apply(f, arguments), this)
                };
                $.ajax(g)
            };
            this.getInputs(!0).each(function () {
                $(this).data("validator-ajax", e)
            });
            return this
        },
        validateLength: function (b, c) {
            if (a.isArr(b) && !c) {
                c = b[1];
                b = b[0]
            }
            var d = function () {
                var d = {
                    min: "请按要求输入不少于 " + b + " 个字符",
                    max: "请按要求输入不超过 " + c + " 个字符",
                    between: "请按要求输入 " + b + " 至 " + c + " 个字符"
                };
                var e = this.val();
                if (!a.isUndef(b) && !a.isUndef(c) && (e.length < b || e.length > c)) {
                    return d.between
                } else if (!a.isUndef(b) && e.length < b) {
                    return d.min
                } else if (!a.isUndef(c) && e.length > c) {
                    return d.max
                }
                return !0
            };
            return this.customValidator(d)
        }
    });
    a.extend({
        pickDate: function (b, c) {
            var d;
            if (a.isObj(b) && a.isUndef(c)) {
                d = b
            } else if (a.isFunc(b)) {
                d = {};
                d.onClose = b;
                d.interval = c
            }
            var e = $.extend({
                interval: ["-50y", "+50y"],
                dateFormat: "yy-mm-dd",
                showOtherMonths: !0,
                defaultDate: 0
            },
            d);
            this.jquery.datepicker(e)
        }
    });
    $.extend(a, {
        status: function (b, c) {
            var d = $("a[we7status]");
            if (!d.length) {
                $('<a we7status="we7status" />').appendTo(document.body).hide();
                d = $("a[we7status]")
            }
            d = a(d);
            var e = d.jquery.data("tooltip");
            if (e) {
                e.destroy()
            }
            c = $.extend({
                cancelDefault: !0,
                autoHide: !0,
                events: {
                    def: "nothing,nothing"
                },
                onShow: function () {
                    var a = this,
                    b = this.getConf();
                    if (b.autoHide) {
                        setTimeout(function () {
                            a.hide();
                            a = null
                        },
                        b.hideTimeout || 4500)
                    }
                }
            },
            c);
            d.status(b, c);
            e = d.jquery.data("tooltip");
            e.show()
        },
        loading: function (b, c) {
            if (a.isUndef(b)) {
                b = "正在加载..."
            }
            b = '<img src="/scripts/we7/css/res/ajax-loading.gif" style="width:16px;height:16px;margin-top:5px;"/><div style="padding-left:25px;margin-top:-20px;">' + b + "</div>";
            c = $.extend({
                autoHide: !1
            },
            c);
            return a.status(b, c)
        },
        info: function (b, c) {
            b = '<img src="/admin/images/ico_info.gif" style="width:16px;height:16px;margin-top:5px;" /><div style="padding-left:25px;margin-top:-20px;">' + b + "</div>";
            return a.status(b, c)
        },
        validate: function (b, c, d) {
            return a(b).validate(c, d)
        },
        addValidateType: function (a, b, c) {
            $.tools.validator.fn(a, b, c)
        }
    });
    a.status.clear = function () {
        var t, u = $("a[we7status]");
        if (u.length && (t = u.data("tooltip"))) {
            t.destroy();
            u.remove();
        }
    };
    $(document).ready(function () {
        $("form").attr("novalidate", "novalidate")
    })
})(window.we7); (function (a) {
    var b = a.fn.attachValidator;
    a.fn.attachValidator = function (c, d) {
        b.call(this, c, d);
        var e = this.jquery,
        f = "validator-ajax-loading";
        this.validator.onAjaxRequest(function (b, c) {
            var d = c.data("msg.el");
            if (d) {
                d.remove();
                c.removeData("msg.el")
            }
            var e = c.data("tooltip"),
            g = !!e,
            h = "Loading...";
            if (!g) {
                a(c).tip(h, {
                    tipClass: f,
                    offset: [0, 5],
                    events: {
                        input: "nothing,nothing"
                    }
                });
                c.data("vo-tooltip", !0);
                e = c.data("tooltip");
                e.show()
            } else {
                var i = e.dLoading;
                if (typeof i === "undefined") {
                    e.onBeforeShow(function () {
                        var a = this.getTip(),
                        b = this.dLoading;
                        if (b) {
                            a.removeClass(this.getConf().tipClass).addClass(f)
                        } else {
                            a.removeClass(f).addClass(this.getConf().tipClass)
                        }
                        this.dLoading = !1
                    })
                }
                e.dLoading = !0;
                e.show(h)
            }
        }).onAjaxResponse(function (a, b) {
            var c = b.data("tooltip"),
            d = b.data("vo-tooltip");
            c.hide();
            if (d) {
                b.removeData("vo-tooltip");
                c.destroy()
            }
        });
        return this
    };
    $.extend(a, {
        validateTrigger: {
            blurAjax: {
                inputEvent: "blur",
                ajaxOnSoft: !0,
                errorInputEvent: null
            },
            blur: {
                inputEvent: "blur",
                errorInputEvent: null
            },
            keyup: {
                inputEvent: "keyup",
                errorInputEvent: null
            },
            keyupAjax: {
                inputEvent: "keyup",
                errorInputEvent: null,
                ajaxOnSoft: !0
            }
        }
    })
})(window.we7);

/*form*/
(function () {
    function a(a, b) {
        function o() {
            if (m) {
                try {
                    clearTimeout(m)
                } catch (a) { }
            }
        }
        function n() {
            m = setTimeout(function () {
                c.close();
                m = undefined
            },
            3500)
        }
        function k(a) {
            $.each(a,
            function (a, b) {
                j(a, b)
            })
        }
        function j(a, b) {
            if (we7.isObj(a)) {
                return k(a)
            }
            if (we7.isUndef(b)) {
                return we7.isUndef(f[a]) ? d.options[a] : f[a]
            }
            if (a in f) {
                f[a] = b
            }
            i("option", [a, b]);
            return c
        }
        function i(a, b) {
            Array.prototype.unshift.call(b, a);
            return d[a].apply(d, b)
        }
        function h(a, c, d) {
            var e = g[a];
            if (!d) {
                delete b[a]
            }
            return e === undefined ? c : e
        }
        var c = this,
        d, e, f, g = $.extend({},
        b);
        f = {
            overlay: h("overlay", !1),
            autoOpen: h("autoOpen", !1),
            showTitleBar: h("showTitleBar", !0),
            autoClose: h("autoClose", !1),
            closeOnClick: h("closeOnClick", !0),
            cssClass: h("cssClass", null),
            fixed: h("fixed", !0)
        };
        b = $.extend(b, {
            closeText: "关闭",
            modal: f.overlay !== !1,
            closeOnEscape: f.overlay !== !1,
            dialogClass: f.cssClass,
            autoOpen: !1
        });
        if (b.size) {
            !we7.isUndef(b.size.width) && (b.width = b.size.width); !we7.isUndef(b.size.height) && (b.height = b.size.height)
        }
        this.element = a;
        d = this.element.dialog(b).data("dialog");
        e = d.uiDialog;
        $.extend(this, {
            option: j,
            show: function () {
                return i.call(null, "open", arguments)
            }
        });
        $.each("close,disable,widget,enable,isOpen,moveToTop,open,destroy".split(","),
        function (a, b) {
            var d = this;
            c[b] = function () {
                return i.call(null, b, arguments)
            }
        });
        $.each("create,beforeClose,open,focus,dragStart,drag,dragStop,resizeStart,resize,resizeStop,close".split(","),
        function (a, b) {
            var d = b,
            e = "on" + d.charAt(0).toUpperCase() + d.substr(1);
            c[e] = function (a) {
                c.element.bind("dialog" + d, a);
                return c
            }
        });
        c.onShow = c.onOpen;
        c.isShown = c.isOpen;
        c.position = function (a) {
            return j("position", a)
        };
        c.getOptions = function () {
            return d.options
        };
        if (f.fixed) {
            e.css("position", "fixed")
        }
        if (!f.showTitleBar) {
            c.onShow(function () {
                d.uiDialogTitlebar.hide()
            })
        }
        var l;
        if (f.closeOnClick) {
            c.onShow(function () {
                if (!l && d.overlay) {
                    l = !0;
                    d.overlay.$el.click(function () {
                        c.close()
                    })
                }
            })
        }
        if (f.autoOpen) {
            this.show()
        }
        if (d.overlay && typeof b.overlay !== "boolean") {
            d.overlay.$el.css("opacity", b.overlay)
        }
        var m;
        if (f.autoClose) {
            e.mousemove(o).mouseout(n);
            n()
        }
        a.data("we7.form", this);
        return this
    }
    we7.extend({
        form: function (b) {
            return new a(this.jquery, b)
        }
    });
    we7.form = function (a, b) {
        function q() {
            if (f != "selector") {
                g = $(h)
            }
            if (n) {
                try {
                    clearTimeout(n);
                    n = undefined
                } catch (c) { }
            }
            switch (f) {
                case "image":
                    l = new Image;
                    l.src = a;
                    if (l.complete) {
                        o()
                    } else {
                        l.onload = function () {
                            l.onload = null;
                            o()
                        };
                        l.onerror = l.onabort = p
                    }
                    break;
                case "url":
                    if (b.iframe) {
                        k = $("<iframe />").attr({
                            frameBorder: 0,
                            allowTransparency: "!0",
                            name: "wf_" + Number(new Date),
                            scrolling: b.scrolling ? "yes" : "no",
                            rel: "we7form_iframe",
                            width: "100%",
                            height: "100%"
                        });
                        k.one("load", o).attr("src", a).hide().appendTo(document.body);
                        setTimeout(p, 15 * 1e3)
                    } else {
                        $.ajax({
                            url: a,
                            type: "GET",
                            timeout: 15 * 1e3,
                            success: function (a) {
                                o(a)
                            },
                            error: p
                        })
                    }
                    break;
                default:
                    g = $(a);
                    break
            }
        }
        function p() {
            if (m) {
                return
            }
            g.html(errorLoyout);
            $("a", g).click(q)
        }
        function o(a) {
            if (m) {
                return
            }
            m = !0;
            if (k) {
                g.empty().append(k.show())
            } else if (l) {
                g.empty().append($(l).css({
                    width: "100%",
                    height: "100%"
                }))
            } else {
                g.empty().append(a)
            }
        }
        function j(a, b) {
            var c = b ? okCallback : cancelCallBack;
            if (we7.isFunc(c)) {
                c = [c]
            } else {
                c = c || []
            }
            c.push(a)
        }
        function i(a, b, c) {
            if (!a) {
                return
            }
            if (we7.isArr(a)) {
                $.each(a,
                function (a, d) {
                    d.apply(b, c)
                })
            } else {
                a.apply(b, c)
            }
        }
        var c = /^(https?:\/)?\/.+/i,
        d = /(jpg|bmp|png|gif|ico)$/i;
        var e = a.indexOf(";"),
        f;
        if (e < 0) {
            if (c.test(a)) {
                if (d.test(a)) {
                    f = "image"
                } else {
                    f = "url"
                }
            } else {
                f = "selector"
            }
        } else {
            f = e === -1 ? "selector" : a.substr(0, e).toLowerCase();
            if (f != "selector") {
                a = a.substr(e + 1)
            }
        }
        var g, h = '<div title="loading" style="overflow:hidden;width:100%;height:100%"><img src="/scripts/we7/css/res/ajax-loading.gif" alt="loading" />  请稍后...</div>';
        errorLoyout = '<div title="error" style="overflow:hidden;width:100%;height:100%"><img src="" alt="error" />  很抱歉，载入出错...请  <a>重试</a></div>'; !b && (b = {});
        var k, l, m = !1,
        n;
        q();
        var r = we7(g).form(b);
        return r
    };
    we7.overlay = function (a, b) {
        b = $.extend({
            closeOnEscape: !0,
            closeOnClick: !0,
            overlay: !0,
            showTitleBar: !1,
            position: "center",
            draggable: !0,
            autoOpen: !0,
            resize: function () {
                $(this).dialog("option", "position", "center")
            }
        },
        b);
        return we7.form(a, b)
    };
    we7.confirm = function (a, b, c) {
        function j(a, b) {
            var c = b ? g : h;
            if (we7.isFunc(c)) {
                c = [c]
            } else {
                c = c || []
            }
            c.push(a);
            if (b) {
                g = c
            } else {
                h = c
            }
        }
        function i(a, b, c) {
            if (!a) {
                return
            }
            if (we7.isArr(a)) {
                $.each(a,
                function (a, d) {
                    d.apply(b, c)
                })
            } else {
                a.apply(b, c)
            }
        } !c && (c = {});
        var d = c && !!(c.position || c.containerArea),
        e = '<div style="display:none; margin:0 auto;text-align:center" title="{0}"><div>{1}</div></div>';
        we7.isObj(b) && (c = b, b = undefined);
        var f, g = c.ok,
        h = c.cancel;
        c = $.extend({
            autoTip: !0,
            overlay: !0,
            autoOpen: !0,
            showTitleBar: !0,
            closeOnClick: !0,
            closeOnEscape: !0,
            resizable: !1,
            buttons: {
                "确定": function () {
                    f._ok = !0;
                    $(this).dialog("close")
                },
                "取消": function () {
                    $(this).dialog("close")
                }
            }
        },
        c);
        e = we7.formatStr(e, b || c.title || a, c.autoTip ? "您确定要 " + a + " 吗？" : a);
        f = we7(e).form(c);
        $.extend(f, {
            ok: function (a) {
                j(a, !0)
            },
            cancel: function (a) {
                j(a, !1)
            }
        });
        f.onClose(function () {
            var a = f._ok ? g : h;
            try {
                delete f._ok
            } catch (b) { }
            i(a, f, [])
        });
        return f
    };
    we7.alert = function (a, b, c) {
        var d = '<div style="display:none;margin:0 auto;text-align:center" title="{0}"><div>{1}</div></div>';
        we7.isObj(b) && (c = b, b = undefined);
        c = $.extend({
            autoClose: !0,
            autoOpen: !0,
            showTitleBar: !0,
            closeOnEscape: !0,
            resizable: !1,
            buttons: {
                "确定": function () {
                    $(this).dialog("close")
                }
            },
            overlay: !1
        },
        c);
        d = we7.formatStr(d, b || c.title || a, a);
        return we7(d).form(c)
    }
})();

/*render*/
(function ($) {
    var templateEngine, cache = {};
    function templateEngine(elem) {
        var tokens = {
            start: "<?",
            end: "?>"
        },
        code;
        function buildFn() {
            return function (data) {
                var key, keys = [],
                values = [];
                function isIlegal(name) {
                    if (/^[\d]/.test(name)) {
                        return false
                    }
                    if (!(/^[\$a-z_][a-z\$0-9_]*/i).test(name)) {
                        return false
                    }
                    if ((/^(break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with)$/).test(name)) {
                        return false
                    }
                    return true
                }
                for (key in data) {
                    if (isIlegal(key)) {
                        keys.push(key);
                        values.push(data[key])
                    }
                }
                return new Function(keys, arguments.callee.code).apply(data, values)
            }
        }
        var tmplAttr = "rendertmpl",
        id, fn, html, rand = (+new Date),
        vname = "__p" + rand;
        fn = we7.isStr(elem) ? (html = elem, buildFn()) : (elem = $(elem), id = elem.attr(tmplAttr)) && cache[id] ? cache[id] : elem.attr(tmplAttr, id = "tmpl_" + rand) && (html = elem.html(), cache[id] = buildFn());
        fn.code = (!we7.isStr(elem) && cache[id].code) || "var " + vname + "=[],echo=function(){" + vname + ".push.apply(" + vname + ",arguments);};" + vname + ".push('" + html.replace(/(\\)/g, "\\\\").replace(/(\<\s*\/[^>]+\>)[\n\r\t\s]+(?=\<[^>]+\>)/g, "$1").replace(/[\r\n\t]/g, "").split(tokens.start).join("\t").replace(new RegExp("((^|\\" + tokens.end + ")[^\t]*)'", "g"),
        function (a) {
            return a.replace(/(')/g, "\r")
        }).replace(new RegExp("\t=(.*?)\\" + tokens.end, "g"), "',$1,'").split("\t").join("');").split(tokens.end).join(vname + ".push('").split("\r").join("\\'") + "');return " + vname + ".join('');";
        return fn
    }
    var renderMode = {
        array: 0,
        arrayLike: 1,
        "arguments": 2,
        object: -1
    };
    function repeat(opts, data, mode) {
        mode = we7.isUndef(mode) ? opts.mode : mode,
        tmpl = opts.tmplEngine || templateEngine(opts.template);
        if (we7.isUndef(mode)) {
            mode = 0
        } else {
            if (we7.isStr(mode)) {
                mode = we7.isUndef(renderMode[mode]) ? 0 : renderMode[mode]
            }
        } !opts.tmplEngine && (opts.tmplEngine = tmpl); (mode == 1 && (data = $.makeArray(data))) || (mode == 2 && (data = [].slice.apply(data)));
        return mode < 0 ? tmpl(data) : (function () {
            var i, html = [];
            for (i = 0; i < data.length; i++) {
                html.push(tmpl(data[i]))
            }
            return html.join("")
        })()
    }
    function renderProxy(elem, data, options) {
        var el = elem,
        self = this,
        fire = $(this);
        this.data = data;
        options = $.extend({
            mode: 0,
            autoRender: true
        },
        options);
        options.ajax = we7.isStr(data) ? true : false;
        options.tmplEngine = null;
        $.each("onBeforeLoad,onBeforeRender,onLoad,onRender,onError,onRender".split(","),
        function (i, event) {
            self[event] = function (fn) {
                fire.bind(event, fn)
            };
            if (we7.isFunc(options[event])) {
                fire.bind(event, options[event])
            }
        });
        function trigger(type, args) {
            var e = $.Event(type),
            ret;
            ret = fire.trigger(e, args);
            return e.isDefaultPrevented() ? false : we7.isUndef(e.result) ? true : e.result
        }
        this.render = function (data, mode) {
            var ret, dMode;
            if (we7.isN(data) && we7.isUndef(mode)) {
                mode = data;
                data = this.data
            } else {
                data = data || this.data;
                if (!this.data) {
                    this.data = data
                }
            }
            dMode = typeof data === "object" ? (we7.isArray(data) ? 0 : -1) : 0;
            function prep(m) {
                return we7.isN(m) ? m : ((!we7.isUndef(renderMode[m]) && renderMode[m]) || dMode)
            }
            we7.isUndef(mode) ? (mode = options.mode) : (we7.isUndef(options.mode) && (options.mode = mode));
            mode = prep(mode);
            options.mode = prep(options.mode); (mode === 1 && (data = $.makeArray(data))) || (mode === 2 && (data = [].slice.apply(data)));
            try {
                ret = repeat(options, data, mode)
            } catch (x) {
                trigger("onError", [{
                    source: x,
                    message: "Render Error",
                    code: -100
                },
                data, options, mode]);
                return
            }
            if (trigger("onBeforeRender", [ret, data, options, mode])) {
                el.html(ret);
                trigger("onRender", [ret, data, options, mode])
            }
            return ret
        };
        var ajaxOpts, oldSuccess;
        if (options.ajax) {
            options.url = this.data;
            if (trigger("onBeforeLoad", [this.data, options])) {
                ajaxOpts = $.extend({
                    url: options.url,
                    type: "GET",
                    cache: false,
                    dataType: "json",
                    error: function (xhr, status, err) {
                        trigger("onError", [{
                            source: err,
                            message: "Load Error",
                            code: 110
                        },
                        options, xhr])
                    }
                },
                options.ajaxOptions);
                ajaxOpts.success && (oldSuccess = ajaxOpts.success);
                ajaxOpts.success = function (d) {
                    var _d = trigger("onLoad", [d, options]);
                    self.data = (typeof _d === "boolean") ? d : _d;
                    if (oldSuccess) {
                        oldSuccess.apply(this, arguments)
                    }
                    options.autoRender && self.render()
                };
                $.ajax(ajaxOpts)
            }
        } else {
            options.autoRender && this.render()
        }
        return this
    }
    we7.extend({
        render: function (data, template, options) {
            var isTmpl = we7.isStr(template) || !we7.isUndef(template.jquery) || !we7.isUndef(template.nodeType);
            options = options || {};
            if (we7.isN(options)) {
                options = {
                    mode: options
                }
            }
            isTmpl ? (options.template = template) : (options = $.extend(template, options));
            return new renderProxy(this.jquery, data, options)
        }
    });
    we7.renderMode = renderMode;
    we7.render = function (json, tmpl, options) {
        return we7("<div>").render(json, tmpl, options)
    };
    we7.render.tmplFromObsolete = function (str) {
        return str.replace(/\$\{([^\}]*)\}/g, "{{html $1}}").replace(/\{\{\/if\}\}/g, "<?}?>").replace(/\{\{if\s+(?:\(?((?:[^\}]|\}(?!\}))*?)\)?)\s*\}\}/g, "<?if($1){?>").replace(/\{\{else\s*\}\}/g, "<?}else{?>").replace(/\{\{else\s+(?:\(?((?:[^\}]|\}(?!\}))*?)\)?)\s*\}\}/g, "<?}else if($1){?>").replace(/\{\{(?:html|=)\s+(?:\(?((?:[^\}]|\}(?!\}))*)\)?)\s*\}\}/g, "<?=$1?>")
    }
})(jQuery);

/*tree*/
$.extend(jQuery.fn, {
    swapClass: function (b, a) {
        return this.removeClass(b).addClass(a).end()
    },
    toggleHide: function (b, a) {
        b ? this.animate({
            height: "toggle"
        },
        b, a) : this.each(function () {
            $(this)[$(this).is(":hidden") ? "show" : "hide"]();
            if (a) {
                a.apply(this, arguments)
            }
        })
    }
}); (function (d) {
    var h = {},
    k = 0,
    g = {
        Class_nodeWithChild: "parentNode",
        Class_asyncNode: "ajaxNode",
        Class_singleNode: "singleNode",
        Class_nodeContent: "nodeContent",
        Class_subTree: "subTree",
        Class_expandable: "expandable",
        Class_collapsible: "collapsible",
        Class_hitarea: "hitarea",
        Class_current: "currentNode"
    };
    function c(n) {
        h[n.unique] = n;
        k++
    }
    function e(o) {
        try {
            delete h[o.unique];
            k--
        } catch (n) { }
    }
    function f() {
        return Math.floor(Math.random() * 100000)
    }
    function i(n) {
        return n ? decodeURIComponent(n).replace("-_-", "{").replace("_-_", "}") : n
    }
    function l(n) {
        return n ? encodeURIComponent(n.replace("{", "-_-").replace("}", "_-_")) : n
    }
    function m(q) {
        var p, o = q.nodes.length,
        n;
        if (!o) {
            return
        }
        for (p = 0; p < o; p++) {
            q.nodes[p].dom.removeClass("lastChildNode").removeClass("lastNestedNode")
        }
        n = q.nodes[o - 1];
        if ((!n.nodes.length) && (n.id.substr(0, 10) !== "auto_wait_")) {
            n.dom.addClass("lastChildNode")
        } else {
            if (n.nodes.length) {
                n.dom.addClass("lastNestedNode")
            }
        }
    }
    function a(v, o, n) {
        n = d.extend({},
        g, n);
        var z = "auto_" + f();
        if (arguments.length == 2 && typeof o === "object") {
            n = o;
            o = z
        } !v && (v = "&nbsp;"); !o && (o = z);
        var q, x = this,
        s, w = d("<span>").addClass(n.Class_hitarea);
        var y = !!n.ajax,
        t = false,
        p = false,
        u;
        q = d("<span>").addClass(n.Class_nodeContent).html(v);
        q.mousedown(function () {
            var A = d(this).parent("li"),
            B = h[A.attr("tree")];
            B.root().forEach(function (C) {
                C.inactive()
            });
            B.active()
        });
        this.id = o;
        this.parent = null;
        this.unique = (+new Date) + f() + "_" + k;
        this.dom = d("<li>").addClass(n.Class_singleNode).attr({
            tree: this.unique,
            id: "tree_" + this.id
        }).append(w, q);
        this.text = v;
        this.nodes = [];
        this.active = function () {
            this.dom.find("span." + n.Class_nodeContent + ":first").addClass(n.Class_current)
        };
        this.inactive = function () {
            this.dom.find("span." + n.Class_nodeContent + ":first").removeClass(n.Class_current)
        };
        this.root = function () {
            var A = this;
            while (A.parent !== null) {
                A = A.parent
            }
            return A
        };
        this.forEach = function (A, C) {
            var B = C || this;
            A.apply(B, [this]);
            d.each(this.nodes,
            function () {
                this.forEach(A, B)
            })
        };
        this.expand = function () {
            if (s) {
                if (s.is(":visible")) {
                    return
                }
                s.toggleHide("fast");
                this.dom.swapClass(n.Class_expandable, n.Class_collapsible);
                if (y && !t && !p) {
                    r()
                }
            }
        };
        this.expandAll = function () {
            this.expand();
            d.each(this.nodes,
            function () {
                this.expandAll()
            })
        };
        this.collapse = function () {
            if (s) {
                if (s.is(":hidden")) {
                    return
                }
                s.toggleHide("fast");
                this.dom.swapClass(n.Class_collapsible, n.Class_expandable)
            }
        };
        this.collapseAll = function () {
            this.collapse();
            d.each(this.nodes,
            function () {
                this.collapseAll()
            })
        };
        this.add = function (B, C) {
            function A() {
                if (!s) {
                    s = d("<ul>").hide().addClass(n.Class_subTree).appendTo(x.dom);
                    return true
                }
                return false
            }
            if (y && !t) {
                if (A()) {
                    this.add(new a("请稍候...", "auto_wait_" + f(), {
                        Class_singleNode: n.Class_asyncNode
                    }), true)
                }
                if (!C) {
                    return
                }
            }
            if (!B) {
                return
            }
            if (!we7.isArr(B)) {
                B = [B]
            } else {
                if (!B[0]) {
                    return
                }
            }
            this.dom.swapClass(n.Class_singleNode, n.Class_nodeWithChild);
            if ((!x.dom.hasClass(n.Class_collapsible)) && (!x.dom.hasClass(n.Class_expandable))) {
                x.dom.addClass(n.Class_expandable)
            }
            d.each(B,
            function () {
                A();
                s.append(this.dom);
                this.parent = x;
                base = null
            });
            this.nodes = this.nodes.concat(B);
            m(this)
        };
        this.del = function (B) {
            var A;
            if (B && B.parent) {
                if (this === B.parent) {
                    A = we7.indexOfArray(this.nodes, B);
                    if (A > -1) {
                        this.nodes.splice(A, 1);
                        B.del(false)
                    }
                    if (!this.nodes.length) {
                        this.dom.swapClass(n.Class_nodeWithChild, n.Class_singleNode);
                        if (B.id.substr(0, 10) !== "auto_wait_") {
                            this.dom.removeClass(n.Class_collapsible).removeClass(n.Class_expandable)
                        }
                    }
                } else {
                    B.parent.del(B)
                }
            } else {
                if (B) {
                    B.del()
                } else {
                    if (we7.isUndef(B) && this.parent) {
                        this.parent.del(this)
                    } else {
                        if (y && p) {
                            u.abort();
                            u = undefined
                        }
                        if (this.parent) {
                            m(this.parent)
                        }
                        this.nodes = [];
                        s = null;
                        e(this);
                        this.dom.remove();
                        delete this.dom;
                        delete this.parent
                    }
                }
            }
        };
        this.attachMenu = function (A) {
            if (this.menu) {
                this.menu.destroy()
            }
            this.menu = we7(this.dom).menu(A,
            function (B) {
                var D = d(B.target),
                C = "span." + n.Class_nodeContent;
                if (!(D.is(C) || D.parents(C).length > 0)) {
                    return false
                }
            })
        };
        this.refresh = function (F) {
            if ((typeof F === "undefined") || (typeof F === "boolean" && !F)) {
                return this.parent ? this.parent.refresh(this) : this.refresh(true)
            }
            if (!y) {
                return
            }
            if (!t) {
                this.expand();
                return
            }
            this.collapse();
            var A;
            var D = this,
            G = F === true ? this.dom.parent() : F.dom.parent(),
            H = false,
            C = D === D.root(),
            E = n.ajax.complete,
            B = F === true ? false : F.id;
            while (A = this.nodes.length) {
                this.del(this.nodes[A - 1])
            }
            t = false;
            s.remove();
            s = null;
            this.add();
            n.ajax.complete = function () {
                if (E) {
                    n.ajax.complete = E;
                    E.apply(this, arguments)
                }
                if (H) {
                    return
                }
                H = true;
                var J = D.nodes,
                L = J.length,
                I, M;
                if (B && L) {
                    for (var K = 0; K < L; K++) {
                        I = J[K];
                        if (C) {
                            I.attachMenu(n.menu)
                        }
                        if (I.id === B) {
                            M = I
                        }
                    }
                    if (M) {
                        setTimeout(function () {
                            M.expand()
                        },
                        10)
                    }
                }
                D = undefined;
                E = undefined
            };
            this.expand()
        };
        function r() {
            var A = d.extend({
                type: "get",
                dataType: "json",
                cache: false,
                data: {
                    _nodeid: x.id,
                    _text: x.text
                }
            },
            n.ajax);
            var B = A.success;
            A.success = function (I, F) {
                p = false;
                var C;
                if (B) {
                    C = B.apply(this, [].slice.apply(arguments).concat([x]))
                }
                if (C && (typeof C === "object")) {
                    I = C
                }
                var D, H = false,
                E = true,
                G = x.nodes[0];
                if (I) {
                    D = typeof I.length !== "undefined" ? I : [I];
                    if (D.length) {
                        G.del();
                        H = a.initTree(D, x, n)
                    } else {
                        x.dom.removeClass(n.Class_expandable);
                        if (x.root() === x) {
                            G.dom.removeClass(n.Class_asyncNode).find("span." + n.Class_nodeContent).text("没有数据")
                        } else {
                            G.del()
                        }
                    }
                } else {
                    jQuery("span." + n.Class_nodeContent, G.dom).text("读取出错")
                }
                t = true
            };
            p = true;
            u = d.ajax(A)
        }
        w.click(function () {
            if (x.dom.hasClass(n.Class_expandable)) {
                x.expand()
            } else {
                if (x.dom.hasClass(n.Class_collapsible)) {
                    x.collapse()
                }
            }
        });
        if (y) {
            this.add()
        }
        c(this);
        if (n.menu) {
            this.attachMenu(n.menu)
        }
        return this
    }
    a.getTree = function (n) {
        return h[n]
    };
    a.initTree = function (o, q, s) {
        if (!we7.isArr(o)) {
            o = [o]
        }
        s = s || {};
        var u, r = false,
        n = [];
        function t(p) {
            return typeof p === "string" ? {
                url: p
            } : (typeof p === "boolean" ? (p ? {} : undefined) : p)
        }
        s.ajax = t(s && s.ajax) || false;
        d.each(o,
        function (v, p) {
            if (typeof p.menu === "undefined") {
                p.menu = false
            }
            u = new a(p.text, p.id, d.extend({},
            s, {
                menu: p.menu,
                ajax: p.ajax ? d.extend({},
                s.ajax, t(p.ajax)) : false
            }));
            q ? q.add(u, true) : n.push(u);
            if (p.nodes && p.nodes.length) {
                a.initTree(p.nodes, u, s)
            }
            r = true
        });
        return r && (q || n)
    };
    var b = {
        menuClass: "contextmenu",
        itemClassDisabled: "disableditem",
        itemClass: "menuitem",
        inSpeed: 150,
        outSpeed: 75
    };
    function j(n) {
        n = d.extend({},
        n, b); !n.items && (n.items = []);
        if (n.inSpeed == 0) {
            n.inSpeed = -1
        }
        if (n.outSpeed == 0) {
            n.outSpeed = -1
        }
        function t(x) {
            return x + ".menu"
        }
        var v = this,
        o = [],
        u = n.action,
        p,
        q = {};
        this.id = n.id || "menu_" + f();
        function w(A, z, x) {
            var y = v.items(A);
            if (y) {
                y.action.apply(y, [z, x, v]);
                u && u.apply(y, [z, x, v])
            }
        }
        var r = d("<ul>").attr({
            id: v.id,
            rel: "we7menu"
        }).addClass(n.menuClass).hide().appendTo(document.body);
        r.click(function (z) {
            var y = d(z.target),
            x = y.is("li[item]") ? y : y.parents("li[item]");
            if (!x.length) {
                return false
            }
            if (x.hasClass(n.itemClassDisabled)) {
                return false
            }
            r.fadeOut(n.outSpeed);
            d(document).unbind(t("click"));
            setTimeout(function () {
                w(x.attr("item"), r.srcElement, x)
            },
            5)
        });
        if (d.browser.mozilla) {
            r.css("MozUserSelect", "none")
        } else {
            if (d.browser.msie) {
                r.bind("selectstart.disableTextSelect",
                function () {
                    return false
                })
            } else {
                r.bind("mousedown.disableTextSelect",
                function () {
                    return false
                })
            }
        }
        this.items = function (x) {
            switch (typeof x) {
                case "number":
                    return o[x];
                case "string":
                    return we7.findInArray(o,
                function (y) {
                    return y.id === x
                });
                case "function":
                    return we7.findInArray(o,
                function (y) {
                    return x.apply(y) === true
                });
                default:
                    return o
            }
        };
        this.add = function (z) {
            z = d.extend({
                action: new Function,
                text: "菜单项 " + (v.items.length + 1),
                disabled: false,
                id: "mi_" + f()
            },
            z);
            var y, x = d("<li>").attr("item", z.id).addClass(n.itemClass);
            x.append(d("<a>").append(z.text).attr("rel", "menuitem")).appendTo(r);
            if (z.disabled) {
                x.addClass(n.itemClassDisabled)
            }
            z.element = x;
            o.push(z)
        };
        this.disable = function (y) {
            var x = this.items(y);
            if (x) {
                x.disabled = true;
                r.find(">li[item='[" + x.id + "']").addClass(n.itemClassDisabled)
            }
        };
        this.enable = function (y) {
            var x = this.items(y);
            if (x) {
                x.disabled = true;
                r.find(">li[item='[" + x.id + "']").removeClass(n.itemClassDisabled)
            }
        };
        this.attachTo = function (x, y) {
            if (p && x) {
                this.destroy(true)
            }
            d(x).bind(t("mouseup"),
            function (D) {
                d("ul[rel=we7menu]").not(r).fadeOut("fast");
                if (D.button !== 2) {
                    return
                }
                if (y && y.apply(d(this), [D]) === false) {
                    return
                }
                D.preventDefault();
                D.stopPropagation();
                var E = d(D.target),
                C = {},
                A,
                B;
                if (window.innerHeight) {
                    C.pageYOffset = window.pageYOffset;
                    C.pageXOffset = window.pageXOffset;
                    C.innerHeight = window.innerHeight;
                    C.innerWidth = window.innerWidth
                } else {
                    if (document.documentElement && document.documentElement.clientHeight) {
                        C.pageYOffset = document.documentElement.scrollTop;
                        C.pageXOffset = document.documentElement.scrollLeft;
                        C.innerHeight = document.documentElement.clientHeight;
                        C.innerWidth = document.documentElement.clientWidth
                    } else {
                        if (document.body) {
                            C.pageYOffset = document.body.scrollTop;
                            C.pageXOffset = document.body.scrollLeft;
                            C.innerHeight = document.body.clientHeight;
                            C.innerWidth = document.body.clientWidth
                        }
                    }
                } (D.pageX) ? A = D.pageX : A = D.clientX + C.scrollLeft; (D.pageY) ? B = D.pageY : B = D.clientY + C.scrollTop;
                d(document).unbind(t("click"));
                r.srcElement = E.is("li[tree]") ? E : E.parents("li[tree]");
                r.css({
                    top: B,
                    left: A
                }).fadeIn(n.inSpeed);
                setTimeout(function () {
                    d(document).bind(t("click"),
                    function () {
                        d(document).unbind(t("click"));
                        r.fadeOut(n.outSpeed);
                        r.srcElement = null;
                        return false
                    })
                },
                0)
            });
            var z = function (A) {
                A.preventDefault();
                A.stopPropagation();
                return false
            };
            d(x).bind("contextmenu", z);
            r.bind("contextmenu", z);
            p = x
        };
        this.destroy = function (x) {
            if (p) {
                p.unbind(t("mousedown")).unbind(t("mouseup")).unbind("oncontextmenu");
                r.unbind("contextmenu", cancel).hide()
            }
            if (!x) {
                r.unbind("selectstart.disableTextSelect").unbind("mousedown.disableTextSelect");
                n = undefined;
                r = undefined;
                p = undefined
            }
        };
        var s = we7.isArr(n.items) && we7.isObj(n.items);
        d.each(n.items,
        function (x, y) {
            if (s) {
                v.add(this)
            } else {
                v.add({
                    text: x,
                    action: y
                })
            }
        })
    }
    we7.extend({
        tree: function (t, n) {
            n = n || {};
            var p = this.jquery,
            s, u, r, q = we7.isStr(t) || n.ajax,
            o;
            if (q) {
                n.ajax = d.extend({
                    url: t
                },
                n.ajax);
                r = n.ajax.complete;
                n.ajax.complete = function (w, v) {
                    if (r) {
                        r.apply(this, arguments)
                    }
                    o = true;
                    if (v == "success") {
                        p.addClass("we7tree").append(s.dom.find("ul:first>li"))
                    }
                };
                s = new a(null, n._we7id, n);
                if (n._we7id) {
                    delete n._we7id
                }
                s.expand()
            } else {
                u = a.initTree(t, null, n);
                p.addClass("we7tree");
                if (u.length === 1) {
                    s = u[0];
                    s.dom.appendTo(p)
                } else {
                    s = new a(null, null, n);
                    s.add(u);
                    p.append(s.dom.find("ul:first>li"))
                }
            }
            return s
        },
        bindTree: function (u, n) {
            n = n || {};
            var w = "{00000000-0000-0000-0000-000000000000}",
            o = false,
            B = this,
            r = this.jquery,
            x = u.title,
            p = u.parentFieldName,
            z = n.menu,
            y = d.extend({},
            n.ajax),
            t = new we7.BindOption(u); !y.url && (y.url = "/admin/ajax/BusinessSubmit/JsonForCondition.ashx");
            y.type = "post";
            y.cache = false;
            var q = we7.findInArray(t.conditions,
            function (D) {
                return D.source === p
            });
            if (!q) {
                t.conditions.push(new we7.BindCondition(p, we7.bindVerb.equals, w))
            }
            var s = y.beforeSend,
            A = y.success,
            v = y.data,
            C;
            y.beforeSend = function (G, E) {
                var F = /_nodeid=([^&]+)(&|$)/.exec(E.data),
                D = we7.indexOfArray(t.conditions,
                function () {
                    return this.source === p
                });
                C && (t.conditions[D] = new we7.BindCondition(p, we7.bindVerb.equals, i(F[1])));
                C = true;
                E.data = E.data.replace(/(?:_c|_f|_tb|_sord|_sort|_text|_nodeid)=[^&]+(&|$)/g, "$1").replace(/&{1,}/g, "&").replace(/(^&|&$)/g, "");
                E.data = (E.data ? "&" : "") + ["tree=true", "_pidname=" + p, t.toURI()].join("&");
                if (s) {
                    s.apply(this, arguments)
                }
            };
            y.success = function (F) {
                var D;
                if (A) {
                    D = A.apply(this, arguments)
                }
                if (D && (typeof D === "object")) {
                    F = D
                }
                function E(G, I) {
                    if (!I || !I.length) {
                        return
                    }
                    var J = 0,
                    K = I.length,
                    H;
                    do {
                        G.call(H = I[J]);
                        E(G, H.nodes)
                    } while (++J < K)
                }
                E(function () {
                    this.text = we7.isStr(x) ? this[x] : x.call(this, this);
                    this.id = l(this.ID || this.id);
                    this.ajax = this.hasnode ? true : false;
                    if (!o) {
                        this.menu = z
                    }
                },
                we7.isArr(F) ? F : [F]);
                o = true;
                return F
            };
            n.ajax = y;
            n._we7id = w;
            return this.tree("", n)
        },
        menu: function (p, n) {
            we7.isArr(p) && (p = {
                items: p
            });
            var o = new j(p);
            o.attachTo(this.jquery, n);
            return o
        }
    });
    we7.tree = function (o, n, p) {
        return we7(o).tree(n, p)
    };
    we7.tree.getTree = function (n) {
        return a.getTree(we7.isStr(n) ? n : d(n).attr("tree"))
    }
})(jQuery);