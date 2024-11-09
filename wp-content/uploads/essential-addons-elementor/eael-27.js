! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    var h, s, i, u = [],
        p = document,
        g = window,
        v = p.documentElement;

    function t() {
        if (u.length) {
            var e, t, n, i = 0,
                o = c.map(u, function(e) {
                    var t = e.data.selector,
                        n = e.$element;
                    return t ? n.find(t) : n
                });
            for (h = h || ((n = {
                    height: g.innerHeight,
                    width: g.innerWidth
                }).height || !(e = p.compatMode) && c.support.boxModel || (n = {
                    height: (t = "CSS1Compat" === e ? v : p.body).clientHeight,
                    width: t.clientWidth
                }), n), s = s || {
                    top: g.pageYOffset || v.scrollTop || p.body.scrollTop,
                    left: g.pageXOffset || v.scrollLeft || p.body.scrollLeft
                }; i < u.length; i++)
                if (c.contains(v, o[i][0])) {
                    var l = c(o[i]),
                        r = l[0].offsetHeight,
                        f = l[0].offsetWidth,
                        a = l.offset(),
                        d = l.data("inview");
                    if (!s || !h) return;
                    a.top + r > s.top && a.top < s.top + h.height && a.left + f > s.left && a.left < s.left + h.width ? d || l.data("inview", !0).trigger("inview", [!0]) : d && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    c.event.special.inview = {
        add: function(e) {
            u.push({
                data: e,
                $element: c(this),
                element: this
            }), !i && u.length && (i = setInterval(t, 250))
        },
        remove: function(e) {
            for (var t = 0; t < u.length; t++) {
                var n = u[t];
                if (n.element === this && n.data.guid === e.guid) {
                    u.splice(t, 1);
                    break
                }
            }
            u.length || (clearInterval(i), i = null)
        }
    }, c(g).on("scroll resize scrollstop", function() {
        h = s = null
    }), !v.addEventListener && v.attachEvent && v.attachEvent("onfocusin", function() {
        s = null
    })
});
! function(e) {
    var r = {};

    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = r, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var o in e) t.d(n, o, function(r) {
                return e[r]
            }.bind(null, o));
        return n
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.p = "", t(t.s = 22)
}({
    22: function(e, r) {
        var t = function(e, r) {
            var t = r(".eael-progressbar", e),
                n = t.data("layout"),
                o = t.data("count"),
                i = t.data("duration");
            o > 100 && (o = 100), t.one("inview", (function() {
                "line" == n ? r(".eael-progressbar-line-fill", t).css({
                    width: o + "%"
                }) : "half_circle" == n && r(".eael-progressbar-circle-half", t).css({
                    transform: "rotate(" + 1.8 * o + "deg)"
                }), eael.hooks.doAction("progressBar.initValue", t, n, o), r(".eael-progressbar-count", t).prop({
                    counter: 0
                }).animate({
                    counter: o
                }, {
                    duration: i,
                    easing: "linear",
                    step: function(e) {
                        if ("circle" == n || "circle_fill" == n) {
                            var o = 3.6 * e;
                            r(".eael-progressbar-circle-half-left", t).css({
                                transform: "rotate(" + o + "deg)"
                            }), o > 180 && (r(".eael-progressbar-circle-pie", t).css({
                                "-webkit-clip-path": "inset(0)",
                                "clip-path": "inset(0)"
                            }), r(".eael-progressbar-circle-half-right", t).css({
                                visibility: "visible"
                            }))
                        }
                        r(this).text(Math.ceil(e))
                    }
                })
            }))
        };
        jQuery(window).on("elementor/frontend/init", (function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/eael-progress-bar.default", t)
        }))
    }
});