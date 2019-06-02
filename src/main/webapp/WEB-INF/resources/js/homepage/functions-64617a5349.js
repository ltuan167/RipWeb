"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}; /*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(t) {
    "use strict";

    function r(e) {
        var t = e.length,
            a = n.type(e);
        return "function" !== a && !n.isWindow(e) && (1 === e.nodeType && t || "array" === a || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    if (!t.jQuery) {
        var n = function e(t, a) {
            return new e.fn.init(t, a)
        };
        n.isWindow = function(e) {
            return e && e === e.window
        }, n.type = function(e) {
            return e ? "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? s[l.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e) : e + ""
        }, n.isArray = Array.isArray || function(e) {
            return "array" === n.type(e)
        }, n.isPlainObject = function(t) {
            if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
            try {
                if (t.constructor && !e.call(t, "constructor") && !e.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (var r in t);
            return r == void 0 || e.call(t, r)
        }, n.each = function(t, a, i) {
            var n = 0,
                e = t.length,
                o = r(t);
            if (i) {
                if (o)
                    for (; n < e && !1 !== a.apply(t[n], i); n++);
                else
                    for (n in t)
                        if (t.hasOwnProperty(n) && !1 === a.apply(t[n], i)) break;
            } else if (o)
                for (; n < e && !1 !== a.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (t.hasOwnProperty(n) && !1 === a.call(t[n], n, t[n])) break;
            return t
        }, n.data = function(t, a, r) {
            if (r === void 0) {
                var e = t[n.expando],
                    i = e && o[e];
                if (a === void 0) return i;
                if (i && a in i) return i[a]
            } else if (a !== void 0) {
                var s = t[n.expando] || (t[n.expando] = ++n.uuid);
                return o[s] = o[s] || {}, o[s][a] = r, r
            }
        }, n.removeData = function(t, a) {
            var r = t[n.expando],
                e = r && o[r];
            e && (a ? n.each(a, function(t, a) {
                delete e[a]
            }) : delete o[r])
        }, n.extend = function() {
            var t, a, r, o, e, s, l = arguments[0] || {},
                d = 1,
                i = arguments.length,
                c = !1;
            for ("boolean" == typeof l && (c = l, l = arguments[d] || {}, d++), "object" != ("undefined" == typeof l ? "undefined" : _typeof(l)) && "function" !== n.type(l) && (l = {}), d === i && (l = this, d--); d < i; d++)
                if (e = arguments[d])
                    for (o in e) e.hasOwnProperty(o) && (t = l[o], r = e[o], l !== r && (c && r && (n.isPlainObject(r) || (a = n.isArray(r))) ? (a ? (a = !1, s = t && n.isArray(t) ? t : []) : s = t && n.isPlainObject(t) ? t : {}, l[o] = n.extend(c, s, r)) : r !== void 0 && (l[o] = r)));
            return l
        }, n.queue = function(t, a, i) {
            if (t) {
                a = (a || "fx") + "queue";
                var e = n.data(t, a);
                return i ? (!e || n.isArray(i) ? e = n.data(t, a, function(e, t) {
                    var i = t || [];
                    return e && (r(Object(e)) ? function(t, a) {
                        for (var r = +a.length, i = 0, n = t.length; i < r;) t[n++] = a[i++];
                        if (r != r)
                            for (; a[i] !== void 0;) t[n++] = a[i++];
                        t.length = n, t
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }(i)) : e.push(i), e) : e || []
            }
        }, n.dequeue = function(e, t) {
            n.each(e.nodeType ? [e] : e, function(r, a) {
                t = t || "fx";
                var i = n.queue(a, t),
                    e = i.shift();
                "inprogress" === e && (e = i.shift()), e && ("fx" === t && i.unshift("inprogress"), e.call(a, function() {
                    n.dequeue(a, t)
                }))
            })
        }, n.fn = n.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                var t = this[0],
                    a = function(e) {
                        for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }(t),
                    r = this.offset(),
                    i = /^(?:body|html)$/i.test(a.nodeName) ? {
                        top: 0,
                        left: 0
                    } : n(a).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, a.style && (i.top += parseFloat(a.style.borderTopWidth) || 0, i.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: r.top - i.top,
                    left: r.left - i.left
                }
            }
        };
        var o = {};
        n.expando = "velocity" + new Date().getTime(), n.uuid = 0;
        for (var s = {}, e = s.hasOwnProperty, l = s.toString, a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], d = 0; d < a.length; d++) s["[object " + a[d] + "]"] = a[d].toLowerCase();
        n.fn.init.prototype = n.fn, t.Velocity = {
            Utilities: n
        }
    }
}(window),
    function(e) {
        "use strict";
        "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        "use strict";
        var S = Math.max,
            C = Math.min,
            t = Math.abs,
            r = Math.round;
        return function(P, T, _, V) {
            function O(t) {
                for (var a, r = -1, i = t ? t.length : 0, n = []; ++r < i;) a = t[r], a && n.push(a);
                return n
            }

            function Y(e) {
                return U.isWrapped(e) ? e = f.call(e) : U.isNode(e) && (e = [e]), e
            }

            function X(e) {
                var t = R.data(e, "velocity");
                return null === t ? V : t
            }

            function e(e, t) {
                var a = X(e);
                a && a.delayTimer && !a.delayPaused && (a.delayRemaining = a.delay - t + a.delayBegin, a.delayPaused = !0, clearTimeout(a.delayTimer.setTimeout))
            }

            function h(e) {
                var t = X(e);
                t && t.delayTimer && t.delayPaused && (t.delayPaused = !1, t.delayTimer.setTimeout = setTimeout(t.delayTimer.next, t.delayRemaining))
            }

            function i(e) {
                return function(t) {
                    return r(t * e) * (1 / e)
                }
            }

            function g(v, P, _, O) {
                function E(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function f(e, t) {
                    return 3 * t - 6 * e
                }

                function g(e) {
                    return 3 * e
                }

                function V(e, t, a) {
                    return ((E(t, a) * e + f(t, a)) * e + g(t)) * e
                }

                function D(e, t, a) {
                    return 3 * E(t, a) * e * e + 2 * f(t, a) * e + g(t)
                }

                function Y(t, a) {
                    for (var r, i = 0; i < o; ++i) {
                        if (r = D(a, v, _), 0 === r) return a;
                        a -= (V(a, v, _) - t) / r
                    }
                    return a
                }

                function i() {
                    for (var e = 0; e < s; ++e) w[e] = V(e * q, v, _)
                }

                function l(a, i, n) {
                    var e, o, s = 0;
                    do o = i + (n - i) / 2, e = V(o, v, _) - a, 0 < e ? n = o : i = o; while (t(e) > m && ++s < r);
                    return o
                }

                function h(t) {
                    for (var a = 0, r = 1; r !== s - 1 && w[r] <= t; ++r) a += q;
                    --r;
                    var e = (t - w[r]) / (w[r + 1] - w[r]),
                        n = a + e * q,
                        o = D(n, v, _);
                    return o >= p ? Y(t, n) : 0 === o ? n : l(t, a, a + q)
                }

                function n() {
                    x = !0, v === P && _ === O || i()
                }
                var o = 4,
                    p = .001,
                    m = 1e-7,
                    r = 10,
                    s = 11,
                    q = 1 / (s - 1);
                if (4 !== arguments.length) return !1;
                for (var u = 0; 4 > u; ++u)
                    if ("number" != typeof arguments[u] || isNaN(arguments[u]) || !isFinite(arguments[u])) return !1;
                v = C(v, 1), _ = C(_, 1), v = S(v, 0), _ = S(_, 0);
                var w = "Float32Array" in T ? new Float32Array(s) : Array(s),
                    x = !1,
                    y = function(e) {
                        return x || n(), v === P && _ === O ? e : 0 === e ? 0 : 1 === e ? 1 : V(h(e), P, O)
                    };
                y.getControlPoints = function() {
                    return [{
                        x: v,
                        y: P
                    }, {
                        x: _,
                        y: O
                    }]
                };
                var b = "generateBezier(" + [v, P, _, O] + ")";
                return y.toString = function() {
                    return b
                }, y
            }

            function E(e, t) {
                var a = e;
                return U.isString(e) ? W.Easings[e] || (a = !1) : a = U.isArray(e) && 1 === e.length ? i.apply(null, e) : U.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : U.isArray(e) && 4 === e.length && g.apply(null, e), !1 === a && (a = W.Easings[W.defaults.easing] ? W.defaults.easing : q), a
            }

            function Z(e) {
                if (e) {
                    var a = W.timestamp && !0 !== e ? e : m.now(),
                        n = W.State.calls.length;
                    1e4 < n && (W.State.calls = O(W.State.calls), n = W.State.calls.length);
                    for (var o = 0; o < n; o++)
                        if (W.State.calls[o]) {
                            var d = W.State.calls[o],
                                u = d[0],
                                i = d[2],
                                p = d[3],
                                h = !!p,
                                g = null,
                                f = d[5],
                                s = d[6];
                            if (p || (p = W.State.calls[o][3] = a - 16), f) {
                                if (!0 !== f.resume) continue;
                                p = d[3] = r(a - s - 16), d[5] = null
                            }
                            s = d[6] = a - p;
                            for (var t = C(s / i.duration, 1), y = 0, v = u.length; y < v; y++) {
                                var b = u[y],
                                    x = b.element;
                                if (X(x)) {
                                    var w = !1;
                                    if (i.display !== V && null !== i.display && "none" !== i.display) {
                                        if ("flex" === i.display) {
                                            R.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                ee.setPropertyValue(x, "display", t)
                                            })
                                        }
                                        ee.setPropertyValue(x, "display", i.display)
                                    }
                                    for (var P in i.visibility !== V && "hidden" !== i.visibility && ee.setPropertyValue(x, "visibility", i.visibility), b)
                                        if (b.hasOwnProperty(P) && "element" != P) {
                                            var T, _ = b[P],
                                                E = U.isString(_.easing) ? W.Easings[_.easing] : _.easing;
                                            if (U.isString(_.pattern)) {
                                                var D = 1 === t ? function(e, t, a) {
                                                    var i = _.endValue[t];
                                                    return a ? r(i) : i
                                                } : function(n, a, o) {
                                                    var s = _.startValue[a],
                                                        l = _.endValue[a] - s,
                                                        e = s + l * E(t, i, l);
                                                    return o ? r(e) : e
                                                };
                                                T = _.pattern.replace(/{(\d+)(!)?}/g, D)
                                            } else if (1 === t) T = _.endValue;
                                            else {
                                                var Y = _.endValue - _.startValue;
                                                T = _.startValue + Y * E(t, i, Y)
                                            }
                                            if (!h && T === _.currentValue) continue;
                                            if (_.currentValue = T, "tween" == P) g = T;
                                            else {
                                                var q;
                                                if (ee.Hooks.registered[P]) {
                                                    q = ee.Hooks.getRoot(P);
                                                    var j = X(x).rootPropertyValueCache[q];
                                                    j && (_.rootPropertyValue = j)
                                                }
                                                var L = ee.setPropertyValue(x, P, _.currentValue + (9 > I && 0 === parseFloat(T) ? "" : _.unitType), _.rootPropertyValue, _.scrollData);
                                                ee.Hooks.registered[P] && (ee.Normalizations.registered[q] ? X(x).rootPropertyValueCache[q] = ee.Normalizations.registered[q]("extract", null, L[1]) : X(x).rootPropertyValueCache[q] = L[1]), "transform" === L[0] && (w = !0)
                                            }
                                        } i.mobileHA && X(x).transformCache.translate3d === V && (X(x).transformCache.translate3d = "(0px, 0px, 0px)", w = !0), w && ee.flushTransformCache(x)
                                }
                            }
                            i.display !== V && "none" !== i.display && (W.State.calls[o][2].display = !1), i.visibility !== V && "hidden" !== i.visibility && (W.State.calls[o][2].visibility = !1), i.progress && i.progress.call(d[1], d[1], t, S(0, p + i.duration - a), p, g), 1 === t && c(o)
                        }
                }
                W.State.isTicking && A(Z)
            }

            function c(t, a) {
                if (!W.State.calls[t]) return !1;
                for (var r, o = W.State.calls[t][0], s = W.State.calls[t][1], e = W.State.calls[t][2], l = W.State.calls[t][4], d = !1, i = 0, c = o.length; i < c; i++) {
                    r = o[i].element, a || e.loop || ("none" === e.display && ee.setPropertyValue(r, "display", e.display), "hidden" === e.visibility && ee.setPropertyValue(r, "visibility", e.visibility));
                    var u = X(r);
                    if (!0 !== e.loop && (R.queue(r)[1] === V || !/\.velocityQueueEntryFlag/i.test(R.queue(r)[1])) && u) {
                        u.isAnimating = !1, u.rootPropertyValueCache = {};
                        var h = !1;
                        R.each(ee.Lists.transforms3D, function(t, a) {
                            var r = /^scale/.test(a) ? 1 : 0,
                                i = u.transformCache[a];
                            u.transformCache[a] !== V && new RegExp("^\\(" + r + "[^.]").test(i) && (h = !0, delete u.transformCache[a])
                        }), e.mobileHA && (h = !0, delete u.transformCache.translate3d), h && ee.flushTransformCache(r), ee.Values.removeClass(r, "velocity-animating")
                    }
                    if (!a && e.complete && !e.loop && i === c - 1) try {
                        e.complete.call(s, s)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    l && !0 !== e.loop && l(s), u && !0 === e.loop && !a && (R.each(u.tweensContainer, function(e, t) {
                        if (/^rotate/.test(e) && 0 == (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360) {
                            var a = t.startValue;
                            t.startValue = t.endValue, t.endValue = a
                        }
                        /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), W(r, "reverse", {
                        loop: !0,
                        delay: e.delay
                    })), !1 !== e.queue && R.dequeue(r, e.queue)
                }
                W.State.calls[t] = !1;
                for (var m = 0, p = W.State.calls.length; m < p; m++)
                    if (!1 !== W.State.calls[m]) {
                        d = !0;
                        break
                    }! 1 == d && (W.State.isTicking = !1, delete W.State.calls, W.State.calls = [])
            }
            var R, n = Math.cos,
                l = Math.PI,
                I = function() {
                    if (_.documentMode) return _.documentMode;
                    for (var e, t = 7; 4 < t; t--)
                        if (e = _.createElement("div"), e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t;
                    return V
                }(),
                a = function() {
                    var e = 0;
                    return T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || function(t) {
                        var a, r = new Date().getTime();
                        return a = S(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                            t(r + a)
                        }, a)
                    }
                }(),
                m = function() {
                    var e = T.performance || {};
                    if ("function" != typeof e.now) {
                        var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : new Date().getTime();
                        e.now = function() {
                            return new Date().getTime() - t
                        }
                    }
                    return e
                }(),
                f = function() {
                    var t = Array.prototype.slice;
                    try {
                        return t.call(_.documentElement), t
                    } catch (e) {
                        return function(a, r) {
                            var n = this.length;
                            if ("number" != typeof a && (a = 0), "number" != typeof r && (r = n), this.slice) return t.call(this, a, r);
                            var o, e = [],
                                s = 0 <= a ? a : S(0, n + a),
                                l = 0 > r ? n + r : C(r, n),
                                d = l - s;
                            if (0 < d)
                                if (e = Array(d), this.charAt)
                                    for (o = 0; o < d; o++) e[o] = this.charAt(s + o);
                                else
                                    for (o = 0; o < d; o++) e[o] = this[s + o];
                            return e
                        }
                    }
                }(),
                k = function() {
                    return Array.prototype.includes ? function(e, t) {
                        return e.includes(t)
                    } : Array.prototype.indexOf ? function(e, t) {
                        return 0 <= e.indexOf(t)
                    } : function(e, t) {
                        for (var a = 0; a < e.length; a++)
                            if (e[a] === t) return !0;
                        return !1
                    }
                },
                U = {
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isWrapped: function(e) {
                        return e && e !== T && U.isNumber(e.length) && !U.isString(e) && !U.isFunction(e) && !U.isNode(e) && (0 === e.length || U.isNode(e[0]))
                    },
                    isSVG: function(e) {
                        return T.SVGElement && e instanceof T.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }
                },
                s = !1;
            if (P.fn && P.fn.jquery ? (R = P, s = !0) : R = T.Velocity.Utilities, 8 >= I && !s) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= I) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var u = 400,
                q = "swing",
                W = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: T.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: _.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: R,
                    Redirects: {},
                    Easings: {},
                    Promise: T.Promise,
                    defaults: {
                        queue: "",
                        duration: u,
                        easing: q,
                        begin: V,
                        complete: V,
                        progress: V,
                        display: V,
                        visibility: V,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(e) {
                        R.data(e, "velocity", {
                            isSVG: U.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(t) {
                        var r = new Date().getTime();
                        R.each(W.State.calls, function(e, a) {
                            if (a) {
                                if (t !== V && (a[2].queue !== t || !1 === a[2].queue)) return !0;
                                a[5] = {
                                    resume: !1
                                }
                            }
                        }), R.each(W.State.delayedElements, function(t, a) {
                            a && e(a, r)
                        })
                    },
                    resumeAll: function(e) {
                        var t = new Date().getTime();
                        R.each(W.State.calls, function(t, a) {
                            if (a) {
                                if (e !== V && (a[2].queue !== e || !1 === a[2].queue)) return !0;
                                a[5] && (a[5].resume = !0)
                            }
                        }), R.each(W.State.delayedElements, function(e, a) {
                            a && h(a, t)
                        })
                    }
                };
            T.pageYOffset === V ? (W.State.scrollAnchor = _.documentElement || _.body.parentNode || _.body, W.State.scrollPropertyLeft = "scrollLeft", W.State.scrollPropertyTop = "scrollTop") : (W.State.scrollAnchor = T, W.State.scrollPropertyLeft = "pageXOffset", W.State.scrollPropertyTop = "pageYOffset");
            var y = function() {
                function r(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function a(t, a, i) {
                    var n = {
                        x: t.x + i.dx * a,
                        v: t.v + i.dv * a,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: n.v,
                        dv: r(n)
                    }
                }

                function n(t, n) {
                    var o = {
                            dx: t.v,
                            dv: r(t)
                        },
                        e = a(t, .5 * n, o),
                        s = a(t, .5 * n, e),
                        l = a(t, n, s),
                        d = 1 / 6 * (o.dx + 2 * (e.dx + s.dx) + l.dx),
                        i = 1 / 6 * (o.dv + 2 * (e.dv + s.dv) + l.dv);
                    return t.x += d * n, t.v += i * n, t
                }
                return function r(o, a, s) {
                    var e, l, d, c = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        i = [0],
                        u = 0;
                    for (o = parseFloat(o) || 500, a = parseFloat(a) || 20, s = s || null, c.tension = o, c.friction = a, e = null !== s, e ? (u = r(o, a), l = .016 * (u / s)) : l = .016;;)
                        if (d = n(d || c, l), i.push(1 + d.x), u += 16, !(1e-4 < t(d.x) && 1e-4 < t(d.v))) break;
                    return e ? function(e) {
                        return i[0 | e * (i.length - 1)]
                    } : u
                }
            }();
            W.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - n(e * l) / 2
                },
                spring: function(e) {
                    return 1 - n(4.5 * e * l) * Math.exp(6 * -e)
                }
            }, R.each([
                ["ease", [0.25, 0.1, 0.25, 1]],
                ["ease-in", [0.42, 0, 1, 1]],
                ["ease-out", [0, 0, 0.58, 1]],
                ["ease-in-out", [0.42, 0, 0.58, 1]],
                ["easeInSine", [0.47, 0, 0.745, 0.715]],
                ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                ["easeOutQuint", [0.23, 1, 0.32, 1]],
                ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                ["easeOutExpo", [0.19, 1, 0.22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
            ], function(e, t) {
                W.Easings[t[0]] = g.apply(null, t[1])
            });
            var ee = W.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t, r = 0; r < ee.Lists.colors.length; r++) t = "color" === ee.Lists.colors[r] ? "0 0 0 1" : "255 255 255 1", ee.Hooks.templates[ee.Lists.colors[r]] = ["Red Green Blue Alpha", t];
                        var a, i, n;
                        if (I)
                            for (a in ee.Hooks.templates)
                                if (ee.Hooks.templates.hasOwnProperty(a)) {
                                    i = ee.Hooks.templates[a], n = i[0].split(" ");
                                    var e = i[1].match(ee.RegEx.valueSplit);
                                    "Color" === n[0] && (n.push(n.shift()), e.push(e.shift()), ee.Hooks.templates[a] = [n.join(" "), e.join(" ")])
                                } for (a in ee.Hooks.templates)
                            if (ee.Hooks.templates.hasOwnProperty(a))
                                for (var o in i = ee.Hooks.templates[a], n = i[0].split(" "), n)
                                    if (n.hasOwnProperty(o)) {
                                        var s = a + n[o];
                                        ee.Hooks.registered[s] = [a, o]
                                    }
                    },
                    getRoot: function(e) {
                        var t = ee.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    getUnit: function(e, t) {
                        var a = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return a && k(ee.Lists.units, a) ? a : ""
                    },
                    fixColors: function(e) {
                        return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, a) {
                            return ee.Lists.colorNames.hasOwnProperty(a) ? (t ? t : "rgba(") + ee.Lists.colorNames[a] + (t ? "" : ",1)") : t + a
                        })
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return ee.RegEx.valueUnwrap.test(t) && (t = t.match(ee.RegEx.valueUnwrap)[1]), ee.Values.isCSSNullValue(t) && (t = ee.Hooks.templates[e][1]), t
                    },
                    extractValue: function(t, a) {
                        var r = ee.Hooks.registered[t];
                        if (r) {
                            var i = r[0],
                                n = r[1];
                            return a = ee.Hooks.cleanRootPropertyValue(i, a), a.toString().match(ee.RegEx.valueSplit)[n]
                        }
                        return a
                    },
                    injectValue: function(t, a, r) {
                        var i = ee.Hooks.registered[t];
                        if (i) {
                            var n, e = i[0],
                                o = i[1];
                            return r = ee.Hooks.cleanRootPropertyValue(e, r), n = r.toString().match(ee.RegEx.valueSplit), n[o] = a, n.join(" ")
                        }
                        return r
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, a) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var r;
                                    return ee.RegEx.wrappedValueAlreadyExtracted.test(a) ? r = a : (r = a.toString().match(ee.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : a), r;
                                case "inject":
                                    return "rect(" + a + ")";
                            }
                        },
                        blur: function(t, a, r) {
                            switch (t) {
                                case "name":
                                    return W.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(r);
                                    if (!i && 0 !== i) {
                                        var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = n ? n[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(r) ? "blur(" + r + ")" : "none";
                            }
                        },
                        opacity: function(e, t, a) {
                            if (8 >= I) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var r = a.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return a = r ? r[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, 1 <= parseFloat(a) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(a), 10) + ")";
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return a;
                                case "inject":
                                    return a;
                            }
                        }
                    },
                    register: function() {
                        function t(t, r, i) {
                            if ("border-box" === ee.getPropertyValue(r, "boxSizing").toString().toLowerCase() === (i || !1)) {
                                var n, o, e = 0,
                                    s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                    l = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (n = 0; n < l.length; n++) o = parseFloat(ee.getPropertyValue(r, l[n])), isNaN(o) || (e += o);
                                return i ? -e : e
                            }
                            return 0
                        }

                        function a(a, r) {
                            return function(i, n, e) {
                                return "name" === i ? a : "extract" === i ? parseFloat(e) + t(a, n, r) : "inject" === i ? parseFloat(e) - t(a, n, r) + "px" : void 0
                            }
                        }
                        I && !(9 < I) || W.State.isGingerbread || (ee.Lists.transformsBase = ee.Lists.transformsBase.concat(ee.Lists.transforms3D));
                        for (var r = 0; r < ee.Lists.transformsBase.length; r++) ! function() {
                            var t = ee.Lists.transformsBase[r];
                            ee.Normalizations.registered[t] = function(a, r, i) {
                                switch (a) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return X(r) === V || X(r).transformCache[t] === V ? /^scale/i.test(t) ? 1 : 0 : X(r).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var e = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                e = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                break;
                                            case "scal":
                                            case "scale":
                                                W.State.isAndroid && X(r).transformCache[t] === V && 1 > i && (i = 1), e = !/(\d)$/i.test(i);
                                                break;
                                            case "skew":
                                                e = !/(deg|\d)$/i.test(i);
                                                break;
                                            case "rotate":
                                                e = !/(deg|\d)$/i.test(i);
                                        }
                                        return e || (X(r).transformCache[t] = "(" + i + ")"), X(r).transformCache[t];
                                }
                            }
                        }();
                        for (var i = 0; i < ee.Lists.colors.length; i++) ! function() {
                            var t = ee.Lists.colors[i];
                            ee.Normalizations.registered[t] = function(a, r, i) {
                                switch (a) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var e;
                                        if (ee.RegEx.wrappedValueAlreadyExtracted.test(i)) e = i;
                                        else {
                                            var n, o = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(i) ? n = o[i] === V ? o.black : o[i] : ee.RegEx.isHex.test(i) ? n = "rgb(" + ee.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (n = o.black), e = (n || i).toString().match(ee.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!I || 8 < I) && 3 === e.split(" ").length && (e += " 1"), e;
                                    case "inject":
                                        return /^rgb/.test(i) ? i : (8 >= I ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= I ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")");
                                }
                            }
                        }();
                        ee.Normalizations.registered.innerWidth = a("width", !0), ee.Normalizations.registered.innerHeight = a("height", !0), ee.Normalizations.registered.outerWidth = a("width"), ee.Normalizations.registered.outerHeight = a("height")
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (I || W.State.isAndroid && !W.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(t) {
                        if (W.State.prefixMatches[t]) return [W.State.prefixMatches[t], !0];
                        for (var a = ["", "Webkit", "Moz", "ms", "O"], r = 0, i = a.length; r < i; r++) {
                            var n;
                            if (n = 0 === r ? t : a[r] + t.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), U.isString(W.State.prefixElement.style[n])) return W.State.prefixMatches[t] = n, [n, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, r) {
                            return t + t + a + a + r + r
                        }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        if (e)
                            if (e.classList) e.classList.add(t);
                            else if (U.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                            else {
                                var a = e.getAttribute(7 >= I ? "className" : "class") || "";
                                e.setAttribute("class", a + (a ? " " : "") + t)
                            }
                    },
                    removeClass: function(e, t) {
                        if (e)
                            if (e.classList) e.classList.remove(t);
                            else if (U.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                            else {
                                var a = e.getAttribute(7 >= I ? "className" : "class") || "";
                                e.setAttribute("class", a.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                            }
                    }
                },
                getPropertyValue: function(t, a, r, o) {
                    function s(t, a) {
                        var r = 0;
                        if (8 >= I) r = R.css(t, a);
                        else {
                            var e = !1;
                            /^(width|height)$/.test(a) && 0 === ee.getPropertyValue(t, "display") && (e = !0, ee.setPropertyValue(t, "display", ee.Values.getDisplayType(t)));
                            var i = function() {
                                e && ee.setPropertyValue(t, "display", "none")
                            };
                            if (!o) {
                                if ("height" === a && "border-box" !== ee.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var d = t.offsetHeight - (parseFloat(ee.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(ee.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(ee.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(ee.getPropertyValue(t, "paddingBottom")) || 0);
                                    return i(), d
                                }
                                if ("width" === a && "border-box" !== ee.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var c = t.offsetWidth - (parseFloat(ee.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(ee.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(ee.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(ee.getPropertyValue(t, "paddingRight")) || 0);
                                    return i(), c
                                }
                            }
                            var l;
                            l = X(t) === V ? T.getComputedStyle(t, null) : X(t).computedStyle ? X(t).computedStyle : X(t).computedStyle = T.getComputedStyle(t, null), "borderColor" === a && (a = "borderTopColor"), r = 9 === I && "filter" === a ? l.getPropertyValue(a) : l[a], "" !== r && null !== r || (r = t.style[a]), i()
                        }
                        if ("auto" === r && /^(top|right|bottom|left)$/i.test(a)) {
                            var u = s(t, "position");
                            ("fixed" === u || "absolute" === u && /top|left/i.test(a)) && (r = R(t).position()[a] + "px")
                        }
                        return r
                    }
                    var e;
                    if (ee.Hooks.registered[a]) {
                        var i = a,
                            d = ee.Hooks.getRoot(i);
                        r === V && (r = ee.getPropertyValue(t, ee.Names.prefixCheck(d)[0])), ee.Normalizations.registered[d] && (r = ee.Normalizations.registered[d]("extract", t, r)), e = ee.Hooks.extractValue(i, r)
                    } else if (ee.Normalizations.registered[a]) {
                        var c, l;
                        c = ee.Normalizations.registered[a]("name", t), "transform" !== c && (l = s(t, ee.Names.prefixCheck(c)[0]), ee.Values.isCSSNullValue(l) && ee.Hooks.templates[a] && (l = ee.Hooks.templates[a][1])), e = ee.Normalizations.registered[a]("extract", t, l)
                    }
                    if (!/^[\d-]/.test(e)) {
                        var u = X(t);
                        if (!(u && u.isSVG && ee.Names.SVGAttribute(a))) e = s(t, ee.Names.prefixCheck(a)[0]);
                        else if (/^(height|width)$/i.test(a)) try {
                            e = t.getBBox()[a]
                        } catch (t) {
                            e = 0
                        } else e = t.getAttribute(a)
                    }
                    return ee.Values.isCSSNullValue(e) && (e = 0), 2 <= W.debug && console.log("Get " + a + ": " + e), e
                },
                setPropertyValue: function(t, a, r, n, e) {
                    var o = a;
                    if ("scroll" === a) e.container ? e.container["scroll" + e.direction] = r : "Left" === e.direction ? T.scrollTo(r, e.alternateValue) : T.scrollTo(e.alternateValue, r);
                    else if (ee.Normalizations.registered[a] && "transform" === ee.Normalizations.registered[a]("name", t)) ee.Normalizations.registered[a]("inject", t, r), o = "transform", r = X(t).transformCache[a];
                    else {
                        if (ee.Hooks.registered[a]) {
                            var s = a,
                                i = ee.Hooks.getRoot(a);
                            n = n || ee.getPropertyValue(t, i), r = ee.Hooks.injectValue(s, r, n), a = i
                        }
                        if (ee.Normalizations.registered[a] && (r = ee.Normalizations.registered[a]("inject", t, r), a = ee.Normalizations.registered[a]("name", t)), o = ee.Names.prefixCheck(a)[0], 8 >= I) try {
                            t.style[o] = r
                        } catch (e) {
                            W.debug && console.log("Browser does not support [" + r + "] for [" + o + "]")
                        } else {
                            var l = X(t);
                            l && l.isSVG && ee.Names.SVGAttribute(a) ? t.setAttribute(a, r) : t.style[o] = r
                        }
                        2 <= W.debug && console.log("Set " + a + " (" + o + "): " + r)
                    }
                    return [o, r]
                },
                flushTransformCache: function(t) {
                    var r = "",
                        a = X(t);
                    if ((I || W.State.isAndroid && !W.State.isChrome) && a && a.isSVG) {
                        var i = function(e) {
                                return parseFloat(ee.getPropertyValue(t, e))
                            },
                            n = {
                                translate: [i("translateX"), i("translateY")],
                                skewX: [i("skewX")],
                                skewY: [i("skewY")],
                                scale: 1 === i("scale") ? [i("scaleX"), i("scaleY")] : [i("scale"), i("scale")],
                                rotate: [i("rotateZ"), 0, 0]
                            };
                        R.each(X(t).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (r += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var e, o;
                        R.each(X(t).transformCache, function(a) {
                            return (e = X(t).transformCache[a], "transformPerspective" === a) ? (o = e, !0) : void(9 === I && "rotateZ" === a && (a = "rotate"), r += a + e + " ")
                        }), o && (r = "perspective" + o + " " + r)
                    }
                    ee.setPropertyValue(t, "transform", r)
                }
            };
            ee.Hooks.register(), ee.Normalizations.register(), W.hook = function(t, r, i) {
                var n;
                return t = Y(t), R.each(t, function(e, t) {
                    if (X(t) === V && W.init(t), i === V) n === V && (n = ee.getPropertyValue(t, r));
                    else {
                        var a = ee.setPropertyValue(t, r, i);
                        "transform" === a[0] && W.CSS.flushTransformCache(t), n = a
                    }
                }), n
            };
            var b = function t() {
                function i() {
                    return a ? g.promise || null : l
                }

                function n(o, t) {
                    function l() {
                        var c, u;
                        if (h.begin && 0 === f) try {
                            h.begin.call(m, m)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === C) {
                            var e, n, l, v = /^x$/i.test(h.axis) ? "Left" : "Top",
                                b = parseFloat(h.offset) || 0;
                            h.container ? U.isWrapped(h.container) || U.isNode(h.container) ? (h.container = h.container[0] || h.container, e = h.container["scroll" + v], l = e + R(o).position()[v.toLowerCase()] + b) : h.container = null : (e = W.State.scrollAnchor[W.State["scrollProperty" + v]], n = W.State.scrollAnchor[W.State["scrollProperty" + ("Left" == v ? "Top" : "Left")]], l = R(o).offset()[v.toLowerCase()] + b), i = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: e,
                                    currentValue: e,
                                    endValue: l,
                                    unitType: "",
                                    easing: h.easing,
                                    scrollData: {
                                        container: h.container,
                                        direction: v,
                                        alternateValue: n
                                    }
                                },
                                element: o
                            }, W.debug && console.log("tweensContainer (scroll): ", i.scroll, o)
                        } else if ("reverse" === C) {
                            if (!(c = X(o))) return;
                            if (!c.tweensContainer) return void R.dequeue(o, h.queue);
                            for (var D in "none" === c.opts.display && (c.opts.display = "auto"), "hidden" === c.opts.visibility && (c.opts.visibility = "visible"), c.opts.loop = !1, c.opts.begin = null, c.opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = R.extend({}, c.opts, h), u = R.extend(!0, {}, c ? c.tweensContainer : null), u)
                                if (u.hasOwnProperty(D) && "element" != D) {
                                    var Y = u[D].startValue;
                                    u[D].startValue = u[D].currentValue = u[D].endValue, u[D].endValue = Y, U.isEmptyObject(s) || (u[D].easing = h.easing), W.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(u[D]), o)
                                } i = u
                        } else if ("start" === C) {
                            c = X(o), c && c.tweensContainer && !0 === c.isAnimating && (u = c.tweensContainer);
                            var j = function(a, e) {
                                var n, g = ee.Hooks.getRoot(a),
                                    l = !1,
                                    f = e[0],
                                    y = e[1],
                                    b = e[2];
                                if (!(c && c.isSVG || "tween" === g || !1 !== ee.Names.prefixCheck(g)[1] || ee.Normalizations.registered[g] !== V)) return void(W.debug && console.log("Skipping [" + g + "] due to a lack of browser support."));
                                (h.display !== V && null !== h.display && "none" !== h.display || h.visibility !== V && "hidden" !== h.visibility) && /opacity|filter/.test(a) && !b && 0 !== f && (b = 0), h._cacheValues && u && u[a] ? (b === V && (b = u[a].endValue + u[a].unitType), l = c.rootPropertyValueCache[g]) : ee.Hooks.registered[a] ? b === V ? (l = ee.getPropertyValue(o, g), b = ee.getPropertyValue(o, a, l)) : l = ee.Hooks.templates[g][1] : b === V && (b = ee.getPropertyValue(o, a));
                                var k, s, Y, v = !1,
                                    w = function(e, t) {
                                        var r, a;
                                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                            return r = e, ""
                                        }), r || (r = ee.Values.getUnitType(e)), [a, r]
                                    };
                                if (b !== f && U.isString(b) && U.isString(f)) {
                                    n = "";
                                    var x = 0,
                                        j = 0,
                                        X = [],
                                        C = [],
                                        D = 0,
                                        E = 0,
                                        B = 0;
                                    for (b = ee.Hooks.fixColors(b), f = ee.Hooks.fixColors(f); x < b.length && j < f.length;) {
                                        var z = b[x],
                                            H = f[j];
                                        if (/[\d\.-]/.test(z) && /[\d\.-]/.test(H)) {
                                            for (var I = z, F = H, M = ".", L = "."; ++x < b.length;) {
                                                if ((z = b[x]) === M) M = "..";
                                                else if (!/\d/.test(z)) break;
                                                I += z
                                            }
                                            for (; ++j < f.length;) {
                                                if ((H = f[j]) === L) L = "..";
                                                else if (!/\d/.test(H)) break;
                                                F += H
                                            }
                                            var N = ee.Hooks.getUnit(b, x),
                                                O = ee.Hooks.getUnit(f, j);
                                            if (x += N.length, j += O.length, N === O) I === F ? n += I + N : (n += "{" + X.length + (E ? "!" : "") + "}" + N, X.push(parseFloat(I)), C.push(parseFloat(F)));
                                            else {
                                                var P = parseFloat(I),
                                                    Z = parseFloat(F);
                                                n += (5 > D ? "calc" : "") + "(" + (P ? "{" + X.length + (E ? "!" : "") + "}" : "0") + N + " + " + (Z ? "{" + (X.length + (P ? 1 : 0)) + (E ? "!" : "") + "}" : "0") + O + ")", P && (X.push(P), C.push(0)), Z && (X.push(0), C.push(Z))
                                            }
                                        } else {
                                            if (z !== H) {
                                                D = 0;
                                                break
                                            }
                                            n += z, x++, j++, 0 == D && "c" === z || 1 == D && "a" === z || 2 == D && "l" === z || 3 == D && "c" === z || 4 <= D && "(" === z ? D++ : (D && 5 > D || 4 <= D && ")" == z && 5 > --D) && (D = 0), 0 == E && "r" === z || 1 == E && "g" === z || 2 == E && "b" === z || 3 == E && "a" === z || 3 <= E && "(" === z ? (3 == E && "a" == z && (B = 1), E++) : B && "," === z ? 3 < ++B && (E = B = 0) : (B && E < (B ? 5 : 4) || E >= (B ? 4 : 3) && ")" == z && --E < (B ? 5 : 4)) && (E = B = 0)
                                        }
                                    }
                                    x === b.length && j === f.length || (W.debug && console.error("Trying to pattern match mis-matched strings [\"" + f + "\", \"" + b + "\"]"), n = V), n && (X.length ? (W.debug && console.log("Pattern found \"" + n + "\" -> ", X, C, "[" + b + "," + f + "]"), b = X, f = C, s = Y = "") : n = V)
                                }
                                if (n || (k = w(a, b), b = k[0], Y = k[1], k = w(a, f), f = k[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return v = t, ""
                                }), s = k[1], b = parseFloat(b) || 0, f = parseFloat(f) || 0, "%" === s && (/^(fontSize|lineHeight)$/.test(a) ? (f /= 100, s = "em") : /^scale/.test(a) ? (f /= 100, s = "") : /(Red|Green|Blue)$/i.test(a) && (f = 255 * (f / 100), s = ""))), /[\/*]/.test(v)) s = Y;
                                else if (Y !== s && 0 !== b)
                                    if (0 === f) s = Y;
                                    else {
                                        d = d || function() {
                                            var t = {
                                                    myParent: o.parentNode || _.body,
                                                    position: ee.getPropertyValue(o, "position"),
                                                    fontSize: ee.getPropertyValue(o, "fontSize")
                                                },
                                                a = t.position === A.lastPosition && t.myParent === A.lastParent,
                                                e = t.fontSize === A.lastFontSize;
                                            A.lastParent = t.myParent, A.lastPosition = t.position, A.lastFontSize = t.fontSize;
                                            var r = {};
                                            if (e && a) r.emToPx = A.lastEmToPx, r.percentToPxWidth = A.lastPercentToPxWidth, r.percentToPxHeight = A.lastPercentToPxHeight;
                                            else {
                                                var i = c && c.isSVG ? _.createElementNS("http://www.w3.org/2000/svg", "rect") : _.createElement("div");
                                                W.init(i), t.myParent.appendChild(i), R.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                    W.CSS.setPropertyValue(i, t, "hidden")
                                                }), W.CSS.setPropertyValue(i, "position", t.position), W.CSS.setPropertyValue(i, "fontSize", t.fontSize), W.CSS.setPropertyValue(i, "boxSizing", "content-box"), R.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                    W.CSS.setPropertyValue(i, t, "100%")
                                                }), W.CSS.setPropertyValue(i, "paddingLeft", "100em"), r.percentToPxWidth = A.lastPercentToPxWidth = (parseFloat(ee.getPropertyValue(i, "width", null, !0)) || 1) / 100, r.percentToPxHeight = A.lastPercentToPxHeight = (parseFloat(ee.getPropertyValue(i, "height", null, !0)) || 1) / 100, r.emToPx = A.lastEmToPx = (parseFloat(ee.getPropertyValue(i, "paddingLeft")) || 1) / 100, t.myParent.removeChild(i)
                                            }
                                            return null === A.remToPx && (A.remToPx = parseFloat(ee.getPropertyValue(_.body, "fontSize")) || 16), null === A.vwToPx && (A.vwToPx = parseFloat(T.innerWidth) / 100, A.vhToPx = parseFloat(T.innerHeight) / 100), r.remToPx = A.remToPx, r.vwToPx = A.vwToPx, r.vhToPx = A.vhToPx, 1 <= W.debug && console.log("Unit ratios: " + JSON.stringify(r), o), r
                                        }();
                                        var G = /margin|padding|left|right|width|text|word|letter/i.test(a) || /X$/.test(a) || "x" === a ? "x" : "y";
                                        switch (Y) {
                                            case "%":
                                                b *= "x" == G ? d.percentToPxWidth : d.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                b *= d[Y + "ToPx"];
                                        }
                                        switch (s) {
                                            case "%":
                                                b *= 1 / ("x" == G ? d.percentToPxWidth : d.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                b *= 1 / d[s + "ToPx"];
                                        }
                                    }
                                "+" === v ? f = b + f : "-" === v ? f = b - f : "*" === v ? f *= b : "/" === v ? f = b / f : void 0, i[a] = {
                                    rootPropertyValue: l,
                                    startValue: b,
                                    currentValue: b,
                                    endValue: f,
                                    unitType: s,
                                    easing: y
                                }, n && (i[a].pattern = n), W.debug && console.log("tweensContainer (" + a + "): " + JSON.stringify(i[a]), o)
                            };
                            for (var N in r)
                                if (r.hasOwnProperty(N)) {
                                    var I = ee.Names.camelCase(N),
                                        H = function(e, a) {
                                            var r, i, n;
                                            return U.isFunction(e) && (e = e.call(o, t, y)), U.isArray(e) ? (r = e[0], !U.isArray(e[1]) && /^[\d-]/.test(e[1]) || U.isFunction(e[1]) || ee.RegEx.isHex.test(e[1]) ? n = e[1] : U.isString(e[1]) && !ee.RegEx.isHex.test(e[1]) && W.Easings[e[1]] || U.isArray(e[1]) ? (i = a ? e[1] : E(e[1], h.duration), n = e[2]) : n = e[1] || e[2]) : r = e, a || (i = i || h.easing), U.isFunction(r) && (r = r.call(o, t, y)), U.isFunction(n) && (n = n.call(o, t, y)), [r || 0, i, n]
                                        }(r[N]);
                                    if (k(ee.Lists.colors, I)) {
                                        var B = H[0],
                                            L = H[1],
                                            O = H[2];
                                        if (ee.RegEx.isHex.test(B)) {
                                            for (var P, F = ["Red", "Green", "Blue"], M = ee.Values.hexToRgb(B), G = O ? ee.Values.hexToRgb(O) : V, S = 0; S < F.length; S++) P = [M[S]], L && P.push(L), G !== V && P.push(G[S]), j(I + F[S], P);
                                            continue
                                        }
                                    }
                                    j(I, H)
                                } i.element = o
                        }
                        i.element && (ee.Values.addClass(o, "velocity-animating"), z.push(i), c = X(o), c && ("" === h.queue && (c.tweensContainer = i, c.opts = h), c.isAnimating = !0), f === y - 1 ? (W.State.calls.push([z, m, h, null, g.resolver, null, 0]), !1 === W.State.isTicking && (W.State.isTicking = !0, Z())) : f++)
                    }
                    var d, h = R.extend({}, W.defaults, s),
                        i = {};
                    switch (X(o) === V && W.init(o), parseFloat(h.delay) && !1 !== h.queue && R.queue(o, h.queue, function(e) {
                        W.velocityQueueEntryFlag = !0;
                        var t = W.State.delayedElements.count++;
                        W.State.delayedElements[t] = o;
                        var a = function(t) {
                            return function() {
                                W.State.delayedElements[t] = !1, e()
                            }
                        }(t);
                        X(o).delayBegin = new Date().getTime(), X(o).delay = parseFloat(h.delay), X(o).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(h.delay)),
                            next: a
                        }
                    }), h.duration.toString().toLowerCase()) {
                        case "fast":
                            h.duration = 200;
                            break;
                        case "normal":
                            h.duration = u;
                            break;
                        case "slow":
                            h.duration = 600;
                            break;
                        default:
                            h.duration = parseFloat(h.duration) || 1;
                    }
                    if (!(!1 !== W.mock && (!0 === W.mock ? h.duration = h.delay = 1 : (h.duration *= parseFloat(W.mock) || 1, h.delay *= parseFloat(W.mock) || 1)), h.easing = E(h.easing, h.duration), h.begin && !U.isFunction(h.begin) && (h.begin = null), h.progress && !U.isFunction(h.progress) && (h.progress = null), h.complete && !U.isFunction(h.complete) && (h.complete = null), h.display !== V && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = W.CSS.Values.getDisplayType(o))), h.visibility !== V && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && W.State.isMobile && !W.State.isGingerbread, !1 === h.queue)) R.queue(o, h.queue, function(e, t) {
                        return !0 === t ? (g.promise && g.resolver(m), !0) : void(W.velocityQueueEntryFlag = !0, l(e))
                    });
                    else if (h.delay) {
                        var c = W.State.delayedElements.count++;
                        W.State.delayedElements[c] = o;
                        var p = function(e) {
                            return function() {
                                W.State.delayedElements[e] = !1, l()
                            }
                        }(c);
                        X(o).delayBegin = new Date().getTime(), X(o).delay = parseFloat(h.delay), X(o).delayTimer = {
                            setTimeout: setTimeout(l, parseFloat(h.delay)),
                            next: p
                        }
                    } else l();
                    "" !== h.queue && "fx" !== h.queue || "inprogress" === R.queue(o)[0] || R.dequeue(o)
                }
                var o, a, l, d, m, r, s, p = arguments[0] && (arguments[0].p || R.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || U.isString(arguments[0].properties));
                U.isWrapped(this) ? (a = !1, d = 0, m = this, l = this) : (a = !0, d = 1, m = p ? arguments[0].elements || arguments[0].e : arguments[0]);
                var g = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (a && W.Promise && (g.promise = new W.Promise(function(e, t) {
                    g.resolver = e, g.rejecter = t
                })), p ? (r = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (r = arguments[d], s = arguments[d + 1]), !(m = Y(m))) return void(g.promise && (r && s && !1 === s.promiseRejectEmpty ? g.resolver() : g.rejecter()));
                var y = m.length,
                    f = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(r) && !R.isPlainObject(s)) {
                    var v = d + 1;
                    s = {};
                    for (var b = v; b < arguments.length; b++) !U.isArray(arguments[b]) && (/^(fast|normal|slow)$/i.test(arguments[b]) || /^\d/.test(arguments[b])) ? s.duration = arguments[b] : U.isString(arguments[b]) || U.isArray(arguments[b]) ? s.easing = arguments[b] : U.isFunction(arguments[b]) && (s.complete = arguments[b])
                }
                var C;
                switch (r) {
                    case "scroll":
                        C = "scroll";
                        break;
                    case "reverse":
                        C = "reverse";
                        break;
                    case "pause":
                        var x = new Date().getTime();
                        return R.each(m, function(t, a) {
                            e(a, x)
                        }), R.each(W.State.calls, function(e, t) {
                            var r = !1;
                            t && R.each(t[1], function(i, n) {
                                var e = s === V ? "" : s;
                                return !0 !== e && t[2].queue !== e && (s !== V || !1 !== t[2].queue) || (R.each(m, function(e, a) {
                                    if (a === n) return t[5] = {
                                        resume: !1
                                    }, r = !0, !1
                                }), !r && void 0)
                            })
                        }), i();
                    case "resume":
                        return R.each(m, function(e, t) {
                            h(t, x)
                        }), R.each(W.State.calls, function(e, t) {
                            var r = !1;
                            t && R.each(t[1], function(i, n) {
                                var e = s === V ? "" : s;
                                return !0 !== e && t[2].queue !== e && (s !== V || !1 !== t[2].queue) || !t[5] || (R.each(m, function(e, a) {
                                    if (a === n) return t[5].resume = !0, r = !0, !1
                                }), !r && void 0)
                            })
                        }), i();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        R.each(m, function(e, t) {
                            X(t) && X(t).delayTimer && (clearTimeout(X(t).delayTimer.setTimeout), X(t).delayTimer.next && X(t).delayTimer.next(), delete X(t).delayTimer), "finishAll" === r && (!0 === s || U.isString(s)) && (R.each(R.queue(t, U.isString(s) ? s : ""), function(e, t) {
                                U.isFunction(t) && t()
                            }), R.queue(t, U.isString(s) ? s : "", []))
                        });
                        var w = [];
                        return R.each(W.State.calls, function(e, t) {
                            t && R.each(t[1], function(a, i) {
                                var n = s === V ? "" : s;
                                return !0 !== n && t[2].queue !== n && (s !== V || !1 !== t[2].queue) || void R.each(m, function(a, o) {
                                    if (o === i)
                                        if ((!0 === s || U.isString(s)) && (R.each(R.queue(o, U.isString(s) ? s : ""), function(e, t) {
                                            U.isFunction(t) && t(null, !0)
                                        }), R.queue(o, U.isString(s) ? s : "", [])), "stop" === r) {
                                            var l = X(o);
                                            l && l.tweensContainer && !1 !== n && R.each(l.tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), w.push(e)
                                        } else "finish" !== r && "finishAll" !== r || (t[2].duration = 1)
                                })
                            })
                        }), "stop" === r && (R.each(w, function(e, t) {
                            c(t, !0)
                        }), g.promise && g.resolver(m)), i();
                    default:
                        if (!R.isPlainObject(r) || U.isEmptyObject(r)) {
                            if (U.isString(r) && W.Redirects[r]) {
                                o = R.extend({}, s);
                                var D = o.duration,
                                    q = o.delay || 0;
                                return !0 === o.backwards && (m = R.extend(!0, [], m).reverse()), R.each(m, function(e, t) {
                                    parseFloat(o.stagger) ? o.delay = q + parseFloat(o.stagger) * e : U.isFunction(o.stagger) && (o.delay = q + o.stagger.call(t, e, y)), o.drag && (o.duration = parseFloat(D) || (/^(callout|transition)/.test(r) ? 1e3 : u), o.duration = S(o.duration * (o.backwards ? 1 - e / y : (e + 1) / y), .75 * o.duration, 200)), W.Redirects[r].call(t, t, o || {}, e, y, m, g.promise ? g : V)
                                }), i()
                            }
                            var j = "Velocity: First argument (" + r + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return g.promise ? g.rejecter(new Error(j)) : T.console && console.log(j), i()
                        }
                        C = "start";
                }
                var A = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    z = [];
                R.each(m, function(e, t) {
                    U.isNode(t) && n(t, e)
                }), o = R.extend({}, W.defaults, s), o.loop = parseInt(o.loop, 10);
                var I = 2 * o.loop - 1;
                if (o.loop)
                    for (var O, N = 0; N < I; N++) O = {
                        delay: o.delay,
                        progress: o.progress
                    }, N === I - 1 && (O.display = o.display, O.visibility = o.visibility, O.complete = o.complete), t(m, "reverse", O);
                return i()
            };
            W = R.extend(b, W), W.animate = b;
            var A = T.requestAnimationFrame || a;
            if (!W.State.isMobile && _.hidden !== V) {
                var j = function() {
                    _.hidden ? (A = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, Z()) : A = T.requestAnimationFrame || a
                };
                j(), _.addEventListener("visibilitychange", j)
            }
            return P.Velocity = W, P !== T && (P.fn.velocity = b, P.fn.velocity.defaults = W.defaults), R.each(["Down", "Up"], function(e, t) {
                W.Redirects["slide" + t] = function(r, a, n, e, o, s) {
                    var d = R.extend({}, a),
                        i = d.begin,
                        c = d.complete,
                        u = {},
                        l = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    d.display === V && (d.display = "Down" === t ? "inline" === W.CSS.Values.getDisplayType(r) ? "inline-block" : "block" : "none"), d.begin = function() {
                        for (var e in 0 === n && i && i.call(o, o), l)
                            if (l.hasOwnProperty(e)) {
                                u[e] = r.style[e];
                                var a = ee.getPropertyValue(r, e);
                                l[e] = "Down" === t ? [a, 0] : [0, a]
                            } u.overflow = r.style.overflow, r.style.overflow = "hidden"
                    }, d.complete = function() {
                        for (var t in u) u.hasOwnProperty(t) && (r.style[t] = u[t]);
                        n === e - 1 && (c && c.call(o, o), s && s.resolver(o))
                    }, W(r, l, d)
                }
            }), R.each(["In", "Out"], function(e, t) {
                W.Redirects["fade" + t] = function(r, a, n, e, o, s) {
                    var l = R.extend({}, a),
                        i = l.complete,
                        d = {
                            opacity: "In" === t ? 1 : 0
                        };
                    0 !== n && (l.begin = null), l.complete = n === e - 1 ? function() {
                        i && i.call(o, o), s && s.resolver(o)
                    } : null, l.display === V && (l.display = "In" === t ? "auto" : "none"), W(this, d, l)
                }
            }), W
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    }), ! function(e) {
    "use strict";
    "function" == typeof require && "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
}(function() {
    "use strict";
    return function(t, a) {
        var y = t.Velocity;
        if (!y || !y.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var n = y.Utilities,
            r = y.version;
        if (function(e, t) {
            var r = [];
            return e && t && (n.each([e, t], function(e, t) {
                var i = [];
                n.each(t, function(e, t) {
                    for (; 5 > t.toString().length;) t = "0" + t;
                    i.push(t)
                }), r.push(i.join(""))
            }), parseFloat(r[0]) > parseFloat(r[1]))
        }({
            major: 1,
            minor: 1,
            patch: 0
        }, r)) {
            var o = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(o), new Error(o)
        }
        for (var i in y.RegisterEffect = y.RegisterUI = function(e, a) {
            function t(e, t, r, o) {
                var s, i = 0;
                n.each(e.nodeType ? [e] : e, function(e, t) {
                    o && (r += e * o), s = t.parentNode;
                    var a = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
                    "border-box" === y.CSS.getPropertyValue(t, "boxSizing").toString().toLowerCase() && (a = ["height"]), n.each(a, function(e, a) {
                        i += parseFloat(y.CSS.getPropertyValue(t, a))
                    })
                }), y.animate(s, {
                    height: ("In" === t ? "+" : "-") + "=" + i
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: r * ("In" === t ? .6 : 1)
                })
            }
            return y.Redirects[e] = function(b, d, g, h, i, C, k) {
                var l = g === h - 1,
                    c = 0;
                k = k || a.loop, a.defaultDuration = "function" == typeof a.defaultDuration ? a.defaultDuration.call(i, i) : parseFloat(a.defaultDuration);
                for (var m = 0; m < a.calls.length; m++) "number" == typeof(s = a.calls[m][1]) && (c += s);
                var o = 1 <= c ? 0 : a.calls.length ? (1 - c) / a.calls.length : 1;
                for (m = 0; m < a.calls.length; m++) {
                    var p = a.calls[m],
                        f = p[0],
                        r = 1e3,
                        s = p[1],
                        S = p[2] || {},
                        u = {};
                    if (void 0 === d.duration ? void 0 !== a.defaultDuration && (r = a.defaultDuration) : r = d.duration, u.duration = r * ("number" == typeof s ? s : o), u.queue = d.queue || "", u.easing = S.easing || "ease", u.delay = parseFloat(S.delay) || 0, u.loop = !a.loop && S.loop, u._cacheValues = S._cacheValues || !0, 0 === m) {
                        if (u.delay += parseFloat(d.delay) || 0, 0 === g && (u.begin = function() {
                            d.begin && d.begin.call(i, i);
                            var a = e.match(/(In|Out)$/);
                            a && "In" === a[0] && void 0 !== f.opacity && n.each(i.nodeType ? [i] : i, function(e, t) {
                                y.CSS.setPropertyValue(t, "opacity", 0)
                            }), d.animateParentHeight && a && t(i, a[0], r + u.delay, d.stagger)
                        }), null !== d.display)
                            if (void 0 !== d.display && "none" !== d.display) u.display = d.display;
                            else if (/In$/.test(e)) {
                                var v = y.CSS.Values.getDisplayType(b);
                                u.display = "inline" === v ? "inline-block" : v
                            }
                        d.visibility && "hidden" !== d.visibility && (u.visibility = d.visibility)
                    }
                    if (m === a.calls.length - 1) {
                        var w = function() {
                            (void 0 === d.display || "none" === d.display) && /Out$/.test(e) && n.each(i.nodeType ? [i] : i, function(e, t) {
                                y.CSS.setPropertyValue(t, "display", "none")
                            }), d.complete && d.complete.call(i, i), C && C.resolver(i || b)
                        };
                        u.complete = function() {
                            if (k && y.Redirects[e](b, d, g, h, i, C, !0 === k || Math.max(0, k - 1)), a.reset) {
                                for (var t in a.reset)
                                    if (a.reset.hasOwnProperty(t)) {
                                        var r = a.reset[t];
                                        void 0 !== y.CSS.Hooks.registered[t] || "string" != typeof r && "number" != typeof r || (a.reset[t] = [a.reset[t], a.reset[t]])
                                    } var o = {
                                    duration: 0,
                                    queue: !1
                                };
                                l && (o.complete = w), y.animate(b, a.reset, o)
                            } else l && w()
                        }, "hidden" === d.visibility && (u.visibility = d.visibility)
                    }
                    y.animate(b, f, u)
                }
            }, y
        }, y.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 0
                    }]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }],
                    [{
                        rotateZ: -10
                    }],
                    [{
                        rotateZ: 5
                    }],
                    [{
                        rotateZ: -5
                    }],
                    [{
                        rotateZ: 0
                    }]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", 0.125],
                    ["reverse", 0.125],
                    ["reverse", 0.125],
                    ["reverse", 0.125],
                    ["reverse", 0.125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [0, 1]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateY: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }],
                    [{
                        opacity: 0,
                        rotateY: 90
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateX: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }],
                    [{
                        opacity: 0,
                        rotateX: 90
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0
                }
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {
                        easing: "easeInOutSine"
                    }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {
                        easing: "swing"
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1,
                    rotateY: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0.625],
                        scaleY: [1, 0.625],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        scaleX: [1.05, 0.3],
                        scaleY: [1.05, 0.3]
                    }, .35],
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .45]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        scaleX: .95,
                        scaleY: .95
                    }, .35],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35],
                    [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .3]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [-30, 1000]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: 10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: 20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [30, -1000]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: -10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: -20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: -10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: 30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: 10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: -30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2000, 2000],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2000, 2000],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2000, 2000],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2000, 2000],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            }
        }, y.RegisterEffect.packagedEffects) y.RegisterEffect.packagedEffects.hasOwnProperty(i) && y.RegisterEffect(i, y.RegisterEffect.packagedEffects[i]);
        y.RunSequence = function(e) {
            var t = n.extend(!0, [], e);
            1 < t.length && (n.each(t.reverse(), function(e, r) {
                var o = t[e + 1];
                if (o) {
                    var a = r.o || r.options,
                        s = o.o || o.options,
                        l = a && !1 === a.sequenceQueue ? "begin" : "complete",
                        i = s && s[l],
                        d = {};
                    d[l] = function() {
                        var e = o.e || o.elements,
                            t = e.nodeType ? [e] : e;
                        i && i.call(t, t), y(r)
                    }, o.o ? o.o = n.extend({}, s, d) : o.options = n.extend({}, s, d)
                }
            }), t.reverse()), y(t[0])
        }
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
(function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var a = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("div");
            i.innerHTML = "<p>x</p><style id=\"fit-vids-style\">" + ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}" + "</style>", r.appendChild(i.childNodes[1])
        }
        return t && e.extend(a, t), this.each(function() {
            var t = ["iframe[src*=\"player.vimeo.com\"]", "iframe[src*=\"youtube.com\"]", "iframe[src*=\"youtube-nocookie.com\"]", "iframe[src*=\"kickstarter.com\"][src*=\"video.html\"]", "object", "embed"];
            a.customSelector && t.push(a.customSelector);
            var r = ".fitvidsignore";
            a.ignore && (r = r + ", " + a.ignore);
            var i = e(this).find(t.join(","));
            i = i.not("object object"), i = i.not(r), i.each(function() {
                var t = e(this);
                if (!(0 < t.parents(r).length) && !("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    !t.css("height") && !t.css("width") && (isNaN(t.attr("height")) || isNaN(t.attr("width"))) && (t.attr("height", 9), t.attr("width", 16));
                    var a = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10);
                    if (!t.attr("name")) {
                        var n = "fitvid" + e.fn.fitVids._count;
                        t.attr("name", n), e.fn.fitVids._count++
                    }
                    t.wrap("<div class=\"fluid-width-video-wrapper\"></div>").parent(".fluid-width-video-wrapper").css("padding-top", 100 * (a / i) + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, e.fn.fitVids._count = 0
})(window.jQuery || window.Zepto), ! function(O, V, D) {
    function Y(a, r) {
        return ("undefined" == typeof a ? "undefined" : _typeof(a)) === r
    }

    function t() {
        var r, e, t, n, d, a, i;
        for (var s in m)
            if (m.hasOwnProperty(s)) {
                if (r = [], e = m[s], e.name && (r.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (t = 0; t < e.options.aliases.length; t++) r.push(e.options.aliases[t].toLowerCase());
                for (n = Y(e.fn, "function") ? e.fn() : e.fn, d = 0; d < r.length; d++) a = r[d], i = a.split("."), 1 === i.length ? f[i[0]] = n : (!f[i[0]] || f[i[0]] instanceof Boolean || (f[i[0]] = new Boolean(f[i[0]])), f[i[0]][i[1]] = n), h.push((n ? "" : "no-") + i.join("-"))
            }
    }

    function q() {
        return "function" == typeof V.createElement ? v ? V.createElementNS.call(V, "http://www.w3.org/2000/svg", arguments[0]) : V.createElement.apply(V, arguments) : V.createElement(arguments[0])
    }

    function r(a, e) {
        return !!~("" + a).indexOf(e)
    }

    function i(t) {
        return t.replace(/([a-z])-([a-z])/g, function(a, e, t) {
            return e + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(a, e) {
        return function() {
            return a.apply(e, arguments)
        }
    }

    function l(r, e, t) {
        var i;
        for (var n in r)
            if (r[n] in e) return !1 === t ? r[n] : (i = e[r[n]], Y(i, "function") ? s(i, t || e) : i);
        return !1
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(a, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function a(e, t, s) {
        var r;
        if ("getComputedStyle" in O) {
            r = getComputedStyle.call(O, e, t);
            var o = O.console;
            if (null !== r) s && (r = r.getPropertyValue(s));
            else if (o) {
                var a = o.error ? "error" : "log";
                o[a].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else r = !t && e.currentStyle && e.currentStyle[s];
        return r
    }

    function A() {
        var t = V.body;
        return t || (t = q(v ? "svg" : "body"), t.fake = !0), t
    }

    function d(t, e, i, r) {
        var n, a, o, l, c = "modernizr",
            u = q("div"),
            p = A();
        if (parseInt(i, 10))
            for (; i--;) o = q("div"), o.id = r ? r[i] : c + (i + 1), u.appendChild(o);
        return n = q("style"), n.type = "text/css", n.id = "s" + c, (p.fake ? p : u).appendChild(n), p.appendChild(u), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(V.createTextNode(t)), u.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = y.style.overflow, y.style.overflow = "hidden", y.appendChild(p)), a = e(u, t), p.fake ? (p.parentNode.removeChild(p), y.style.overflow = l, y.offsetHeight) : u.parentNode.removeChild(u), !!a
    }

    function c(e, t) {
        var r = e.length;
        if ("CSS" in O && "supports" in O.CSS) {
            for (; r--;)
                if (O.CSS.supports(n(e[r]), t)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in O) {
            for (var i = []; r--;) i.push("(" + n(e[r]) + ":" + t + ")");
            return i = i.join(" or "), d("@supports (" + i + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == a(t, null, "position")
            })
        }
        return D
    }

    function u(n, e, t, o) {
        function a() {
            l && (delete P.style, delete P.modElem)
        }
        if (o = !Y(o, "undefined") && o, !Y(t, "undefined")) {
            var s = c(n, t);
            if (!Y(s, "undefined")) return s
        }
        for (var l, u, d, p, h, m = ["modernizr", "tspan", "samp"]; !P.style && m.length;) l = !0, P.modElem = q(m.shift()), P.style = P.modElem.style;
        for (d = n.length, u = 0; d > u; u++)
            if (p = n[u], h = P.style[p], r(p, "-") && (p = i(p)), P.style[p] !== D) {
                if (o || Y(t, "undefined")) return a(), "pfx" != e || p;
                try {
                    P.style[p] = t
                } catch (e) {}
                if (P.style[p] != h) return a(), "pfx" != e || p
            } return a(), !1
    }

    function o(r, e, t, n, o) {
        var a = r.charAt(0).toUpperCase() + r.slice(1),
            i = (r + " " + S.join(a + " ") + a).split(" ");
        return Y(e, "string") || Y(e, "undefined") ? u(i, e, n, o) : (i = (r + " " + T.join(a + " ") + a).split(" "), l(i, e, t))
    }

    function p(a, e, t) {
        return o(a, D, D, e, t)
    }
    var h = [],
        m = [],
        g = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(a, e) {
                var t = this;
                setTimeout(function() {
                    e(t[a])
                }, 0)
            },
            addTest: function(a, r, i) {
                m.push({
                    name: a,
                    fn: r,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                m.push({
                    name: null,
                    fn: t
                })
            }
        },
        f = function() {};
    f.prototype = g, f = new f;
    var y = V.documentElement,
        v = "svg" === y.nodeName.toLowerCase();
    !v && function(o, g) {
        function k(a, e) {
            var t = a.createElement("p"),
                i = a.getElementsByTagName("head")[0] || a.documentElement;
            return t.innerHTML = "x<style>" + e + "</style>", i.insertBefore(t.lastChild, i.firstChild)
        }

        function P() {
            var t = b.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function O(a) {
            var e = C[a[E]];
            return e || (e = {}, S++, a[E] = S, C[S] = e), e
        }

        function a(t, e, a) {
            if (e || (e = g), h) return e.createElement(t);
            a || (a = O(e));
            var r;
            return r = a.cache[t] ? a.cache[t].cloneNode() : x.test(t) ? (a.cache[t] = a.createElem(t)).cloneNode() : a.createElem(t), !r.canHaveChildren || y.test(t) || r.tagUrn ? r : a.frag.appendChild(r)
        }

        function e(t, e) {
            if (t || (t = g), h) return t.createDocumentFragment();
            e = e || O(t);
            for (var a = e.frag.cloneNode(), r = 0, i = P(), n = i.length; n > r; r++) a.createElement(i[r]);
            return a
        }

        function t(r, i) {
            i.cache || (i.cache = {}, i.createElem = r.createElement, i.createFrag = r.createDocumentFragment, i.frag = i.createFrag()), r.createElement = function(e) {
                return b.shivMethods ? a(e, r, i) : i.createElem(e)
            }, r.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + P().join().replace(/[\w\-:]+/g, function(t) {
                return i.createElem(t), i.frag.createElement(t), "c(\"" + t + "\")"
            }) + ");return n}")(b, i.frag)
        }

        function r(a) {
            a || (a = g);
            var e = O(a);
            return !b.shivCSS || m || e.hasCSS || (e.hasCSS = !!k(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || t(a, e), a
        }

        function n(r) {
            for (var e, t = r.getElementsByTagName("*"), n = t.length, o = RegExp("^(?:" + P().join("|") + ")$", "i"), a = []; n--;) e = t[n], o.test(e.nodeName) && a.push(e.applyElement(l(e)));
            return a
        }

        function l(a) {
            for (var e, t = a.attributes, i = t.length, r = a.ownerDocument.createElement(T + ":" + a.nodeName); i--;) e = t[i], e.specified && r.setAttribute(e.nodeName, e.nodeValue);
            return r.style.cssText = a.style.cssText, r
        }

        function u(r) {
            for (var e, t = r.split("{"), i = t.length, n = RegExp("(^|[\\s,>+~])(" + P().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"); i--;) e = t[i] = t[i].split("}"), e[e.length - 1] = e[e.length - 1].replace(n, "$1" + T + "\\:$2"), t[i] = e.join("}");
            return t.join("{")
        }

        function d(a) {
            for (var e = a.length; e--;) a[e].removeNode()
        }

        function p(h) {
            function e() {
                clearTimeout(a._removeSheetTimer), t && t.removeNode(!0), t = null
            }
            var t, r, a = O(h),
                i = h.namespaces,
                o = h.parentWindow;
            return !V || h.printShived ? h : ("undefined" == typeof i[T] && i.add(T), o.attachEvent("onbeforeprint", function() {
                e();
                for (var o, a, i, s = h.styleSheets, l = [], d = s.length, c = Array(d); d--;) c[d] = s[d];
                for (; i = c.pop();)
                    if (!i.disabled && w.test(i.media)) {
                        try {
                            o = i.imports, a = o.length
                        } catch (e) {
                            a = 0
                        }
                        for (d = 0; a > d; d++) c.push(o[d]);
                        try {
                            l.push(i.cssText)
                        } catch (e) {}
                    } l = u(l.reverse().join("")), r = n(h), t = k(h, l)
            }), o.attachEvent("onafterprint", function() {
                d(r), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(e, 500)
            }), h.printShived = !0, h)
        }
        var m, h, f = o.html5 || {},
            y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            x = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            E = "_html5shiv",
            S = 0,
            C = {};
        ! function() {
            try {
                var t = g.createElement("a");
                t.innerHTML = "<xyz></xyz>", m = "hidden" in t, h = 1 == t.childNodes.length || function() {
                    g.createElement("a");
                    var t = g.createDocumentFragment();
                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                }()
            } catch (e) {
                m = !0, h = !0
            }
        }();
        var b = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== f.shivCSS,
            supportsUnknownElements: h,
            shivMethods: !1 !== f.shivMethods,
            type: "default",
            shivDocument: r,
            createElement: a,
            createDocumentFragment: e,
            addElements: function(a, i) {
                var t = b.elements;
                "string" != typeof t && (t = t.join(" ")), "string" != typeof a && (a = a.join(" ")), b.elements = t + " " + a, r(i)
            }
        };
        o.html5 = b, r(g);
        var w = /^$|\b(?:all|print)\b/,
            T = "html5shiv",
            V = !h && function() {
                var e = g.documentElement;
                return "undefined" != typeof g.namespaces && "undefined" != typeof g.parentWindow && "undefined" != typeof e.applyElement && "undefined" != typeof e.removeNode && "undefined" != typeof o.attachEvent
            }();
        b.type += " print", b.shivPrint = p, p(g), "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = b)
    }("undefined" == typeof O ? this : O, V), f.addTest("canvas", function() {
        var t = q("canvas");
        return t.getContext && t.getContext("2d")
    }), f.addTest("canvastext", function() {
        return !1 !== f.canvas && "function" == typeof q("canvas").getContext("2d").fillText
    });
    var x = g._config.usePrefixes ? ["", "-webkit-", "-moz-", "-o-", "-ms-", ""] : ["", ""];
    g._prefixes = x, f.addTest("csscalc", function() {
        var t = "width:",
            e = q("a");
        return e.style.cssText = t + x.join("calc(10px);" + t), !!e.style.length
    });
    var w = {}.toString;
    f.addTest("svgclippaths", function() {
        return !!V.createElementNS && /SVGClipPath/.test(w.call(V.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var C = "Moz O ms Webkit",
        S = g._config.usePrefixes ? C.split(" ") : [];
    g._cssomPrefixes = S;
    var T = g._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    g._domPrefixes = T;
    var _ = {
        elem: q("modernizr")
    };
    f._q.push(function() {
        delete _.elem
    });
    var P = {
        style: _.elem.style
    };
    f._q.unshift(function() {
        delete P.style
    }), g.testAllProps = o, g.testAllProps = p, f.addTest("flexbox", p("flexBasis", "1px", !0)), f.addTest("flexboxlegacy", p("boxDirection", "reverse", !0)), f.addTest("flexboxtweener", p("flexAlign", "end", !0)), t(),
        function(a) {
            var e = y.className,
                t = f._config.classPrefix || "";
            if (v && (e = e.baseVal), f._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                e = e.replace(i, "$1" + t + "js$2")
            }
            f._config.enableClasses && (e += " " + t + a.join(" " + t), v ? y.className.baseVal = e : y.className = e)
        }(h), delete g.addTest, delete g.addAsyncTest;
    for (var E = 0; E < f._q.length; E++) f._q[E]();
    O.Modernizr = f
}(window, document);
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), !t) {
        var a = window.Cookies,
            r = window.Cookies = e();
        r.noConflict = function() {
            return window.Cookies = a, r
        }
    }
})(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var a = arguments[e];
            for (var r in a) t[r] = a[r]
        }
        return t
    }

    function t(a) {
        function r(t, n, o) {
            var s;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if (o = e({
                        path: "/"
                    }, r.defaults, o), "number" == typeof o.expires) {
                        var l = new Date;
                        l.setMilliseconds(l.getMilliseconds() + 864e+5 * o.expires), o.expires = l
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s)
                    } catch (t) {}
                    n = a.write ? a.write(n, t) : encodeURIComponent(n + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(t + ""), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                    var d = "";
                    for (var c in o) o[c] && (d += "; " + c, !0 !== o[c]) && (d += "=" + o[c]);
                    return document.cookie = t + "=" + n + d
                }
                t || (s = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, h = 0; h < u.length; h++) {
                    var i = u[h].split("="),
                        m = i.slice(1).join("=");
                    "\"" === m.charAt(0) && (m = m.slice(1, -1));
                    try {
                        var g = i[0].replace(p, decodeURIComponent);
                        if (m = a.read ? a.read(m, g) : a(m, g) || m.replace(p, decodeURIComponent), this.json) try {
                            m = JSON.parse(m)
                        } catch (t) {}
                        if (t === g) {
                            s = m;
                            break
                        }
                        t || (s[g] = m)
                    } catch (t) {}
                }
                return s
            }
        }
        return r.set = r, r.get = function(e) {
            return r.call(r, e)
        }, r.getJSON = function() {
            return r.apply({
                json: !0
            }, [].slice.call(arguments))
        }, r.defaults = {}, r.remove = function(t, a) {
            r(t, "", e(a, {
                expires: -1
            }))
        }, r.withConverter = t, r
    }
    return t(function() {})
});
(function(e, t) {
    function a(e, t, a) {
        var r = e + ":",
            i = document.createElement("test"),
            n = i.style;
        return n.cssText = a ? r + t : r + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(t + ";" + r) + t + ";", -1 !== n[e].indexOf(t)
    }

    function r(e) {
        return parseInt(e, 10) || 0
    }
    var i = 0,
        n = {
            classes: {
                plugin: "fixedsticky",
                active: "fixedsticky-on",
                inactive: "fixedsticky-off",
                clone: "fixedsticky-dummy",
                withoutFixedFixed: "fixedsticky-withoutfixedfixed"
            },
            keys: {
                offset: "fixedStickyOffset",
                position: "fixedStickyPosition",
                id: "fixedStickyId"
            },
            tests: {
                sticky: a("position", "sticky"),
                fixed: a("position", "fixed", !0)
            },
            getScrollTop: function() {
                var t = "pageYOffset",
                    a = "scrollTop";
                return e ? t in e ? e[t] : e.document.documentElement[a] : e.document.body[a]
            },
            bypass: function() {
                return n.tests.sticky && !n.optOut || !n.tests.fixed || e.FixedFixed && !t(e.document.documentElement).hasClass("fixed-supported")
            },
            update: function(e) {
                function a() {
                    var e = p + s;
                    return u < e && e + c <= v + b
                }

                function i() {
                    return u + (c || 0) > p + g - l && p + g - l >= v + (c || 0)
                }
                if (e.offsetWidth) {
                    var o, s, l, d = t(e),
                        c = d.outerHeight(),
                        u = d.data(n.keys.offset),
                        p = n.getScrollTop(),
                        h = d.is("." + n.classes.active),
                        m = function(e) {
                            d[e ? "addClass" : "removeClass"](n.classes.active)[e ? "removeClass" : "addClass"](n.classes.inactive)
                        },
                        g = t(window).height(),
                        f = d.data(n.keys.position),
                        y = d.parent(),
                        v = y.offset().top,
                        b = y.outerHeight();
                    void 0 === u ? (u = d.offset().top, d.data(n.keys.offset, u), d.after(t("<div>").addClass(n.classes.clone).height(c))) : d.next("." + n.classes.clone).height(c), f || (o = "auto" !== d.css("top") || "auto" !== d.css("bottom"), !o && d.css("position", "fixed"), f = {
                        top: "auto" !== d.css("top"),
                        bottom: "auto" !== d.css("bottom")
                    }, !o && d.css("position", ""), d.data(n.keys.position, f)), s = r(d.css("top")), l = r(d.css("bottom")), f.top && a() || f.bottom && i() ? !h && m(!0) : h && m(!1)
                }
            },
            destroy: function(a) {
                var r = t(a);
                return n.bypass() ? r : r.each(function() {
                    var a = t(this),
                        r = a.data(n.keys.id);
                    t(e).unbind(".fixedsticky" + r), a.removeData([n.keys.offset, n.keys.position, n.keys.id]).removeClass(n.classes.active).removeClass(n.classes.inactive).next("." + n.classes.clone).remove()
                })
            },
            init: function(a) {
                var r = t(a);
                return n.bypass() ? r : r.each(function() {
                    var a = this,
                        o = i++;
                    t(this).data(n.keys.id, o), t(e).bind("scroll.fixedsticky" + o, function() {
                        n.update(a)
                    }).trigger("scroll.fixedsticky" + o), t(e).bind("resize.fixedsticky" + o, function() {
                        r.is("." + n.classes.active) && n.update(a)
                    })
                })
            }
        };
    e.FixedSticky = n, t.fn.fixedsticky = function(e) {
        if ("function" == typeof n[e]) return n[e].call(n, this);
        if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || !e) return n.init.call(n, this);
        throw new Error("Method `" + e + "` does not exist on jQuery.fixedsticky")
    }, e.FixedFixed || t(e.document.documentElement).addClass(n.classes.withoutFixedFixed)
})(window, jQuery), "use strict", $.fn.nextThrough = function(e) {
    var t = $(this).last(),
        a = $(e).add(t),
        r = a.index(t);
    return a.length == r ? $() : a.eq(r + 1)
}, String.prototype.includes || (String.prototype.includes = function(e, t) {
    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
}), "NodeList" in window && !NodeList.prototype.forEach && (console.info("polyfill for IE11"), NodeList.prototype.forEach = function(e, t) {
    t = t || window;
    for (var a = 0; a < this.length; a++) e.call(t, this[a], a, this)
});

function getParameterByName(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        r = a.exec(t);
    return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
}

function loadScript(e, t) {
    if (!document.querySelectorAll("[src*=\"" + e + "\"]").length) {
        var a = document.createElement("script");
        a.src = e;
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(a, r), a.onload = t
    } else;
}
var a11ydialog = "/wp-content/themes/kahoot2017/assets/js/a11y-dialog.min.js",
    ytIframeAPI = "https://www.youtube.com/iframe_api?key=AIzaSyCWJTqh66rQJ8xIJHtvLbuJPeYtZTjCWyk",
    geoIPScript = "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
    recurlyJsScript = "https://js.recurly.com/v4/recurly.js",
    breakpointMobile = 600,
    breakpointTablet = 760,
    breakpointNav = 760,
    breakpointDesktop = 760;
$(function() {
    function e() {
        function e(e) {
            return new Promise(function(t, a) {
                var r = new Image;
                r.src = e, r.onload = t, r.onerror = a
            })
        }

        function t(e, t, a) {
            e.classList.add(n.imageLoadedClass), e.src = t, a && (e.srcset = a)
        }

        function a(a) {
            var r = a.dataset.lzySrc,
                i = a.dataset.lzySrcset;
            return "IFRAME" == a.tagName ? (a.src = r, void $(".single-content-area").fitVids()) : r ? e(r).then(function() {
                t(a, r, i)
            }) : void 0
        }
        var r, i = document.querySelectorAll("[data-lzy-src]"),
            n = {
                rootMargin: "100px 0px",
                threshold: 0.01,
                imageLoadedClass: "lzy-loaded"
            };
        "IntersectionObserver" in window ? (r = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                0 < e.intersectionRatio && (r.unobserve(e.target), a(e.target))
            })
        }, n), i.forEach(function(e) {
            r.observe(e)
        })) : (console.log("intersection observer is not supported"), i.forEach(function(e) {
            e.src = e.dataset.lzySrc, e.dataset.lzySrcset && (e.srcset = e.dataset.lzySrcset)
        }))
    }

    function t() {
        B.velocity("transition.bounceUpIn", {
            complete: function() {
                B.delay(800).addClass("boing-bounce")
            }
        }), E.addClass("scroll-indicator-visible")
    }

    function a() {
        B.velocity("transition.bounceDownOut"), E.removeClass("scroll-indicator-visible"), setTimeout(function() {
            B.remove()
        }, 800)
    }

    function r() {
        M && 760 > j ? !F && (F = $(".quote-wall").flickity({
            cellAlign: "left",
            prevNextButtons: !1,
            imagesLoaded: !0,
            resize: !0,
            adaptiveHeight: !0
        })) : F && (F.flickity("destroy"), F = !1)
    }

    function i() {
        if (!$("html.page-template-page--conversion").length) {
            var e = te[Math.floor(Math.random() * te.length)];
            $("#favicon").attr("href", ae + "favicon/favicon-" + e + ".ico"), E.attr("data-theme", e)
        }
    }

    function n() {
        var e = 0;
        $(".dob-field").each(function() {
            $(this).val() && e++, 3 == e ? $("#dob-screen [data-form-progress]").attr("data-state", "enabled") : $("#dob-screen [data-form-progress]").attr("data-state", "disabled")
        })
    }

    function o(e) {
        var t = new Date,
            a = new Date(e),
            r = t.getFullYear() - a.getFullYear(),
            i = t.getMonth() - a.getMonth();
        return (0 > i || 0 == i && t.getDate() < a.getDate()) && r--, r
    }

    function s(e) {
        var t = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return t.test(e)
    }

    function l() {
        var e = $("[name=\"iOS\"]").is(":checked"),
            t = $("[name=\"android\"]").is(":checked"),
            a = $("[name=\"beta-email\"]").val();
        e || t ? s(a) && ($("[name=\"beta-email\"]").removeClass("error"), $("#invite-screen [data-form-progress]").attr("data-state", "enabled")) : ($("#invite-screen .duel-checkboxes").addClass("animated shake"), setTimeout(function() {
            $("#invite-screen .duel-checkboxes").removeClass("animated shake")
        }, 400))
    }

    function d() {
        var e = "-",
            t = "-";
        $("#android").prop("checked") && (e = "android user"), $("#iOS").prop("checked") && (t = "iOS user");
        var a = {
                email: $("#mc-email").val(),
                iOS: t,
                android: e,
                status: $("#status").val()
            },
            r = $("#beta-testers").attr("action");
        $.ajax({
            method: "POST",
            dataType: "json",
            url: r,
            data: a
        }).success(function(e) {
            e.id || "Member Exists" == e.title && $("#beta-response").html("<h1>You&rsquo;re in</h1><p class='l'>Thanks, but you are already signed up</p>"), e.id || "Member Exists" == e.title ? (Cookies.set("beta", "yes", {
                expires: 99
            }), $("#beta-default").addClass("hide"), $("#beta-no").addClass("hide"), $("#beta-yes").removeClass("hide")) : ($("#beta-response").html("<h1>Oh no...</h1><p class='l'>Sorry there has been a problem, we can't sign you up right now.</p>"), $("#beta-default").addClass("hide"), $("#beta-yes").addClass("hide"), $("#beta-no").removeClass("hide")), $("#invite-screen ").addClass("transition-out"), setTimeout(function() {
                $("#invite-screen").removeClass("modal__screen--active")
            }, 200);
            var t = $("#thanks-screen");
            t.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
                t.removeClass("transition-in")
            }, 200)
        }).error(function() {
            $("#beta-response").html("<h1>Oh no...</h1><p class='l'>Sorry there has been a problem, we can't sign you up right now.</p>"), $("#beta-default").addClass("hide"), $("#beta-yes").addClass("hide"), $("#beta-no").removeClass("hide"), $("#invite-screen ").addClass("transition-out"), setTimeout(function() {
                $("#invite-screen").removeClass("modal__screen--active")
            }, 200);
            var e = $("#thanks-screen");
            e.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
                e.removeClass("transition-in")
            }, 200)
        })
    }

    function c() {
        var e = {
                email: $("#mc-email").val(),
                status: $("#status").val()
            },
            t = $("#work-form").attr("action");
        $.ajax({
            method: "POST",
            dataType: "json",
            url: t,
            data: e
        }).success(function(e) {
            e.id || "Member Exists" == e.title && $("#work-response").html("<h1>You&rsquo;re in</h1><p class='l'>Thanks, but you are already signed up</p>"), e.id || "Member Exists" == e.title ? (Cookies.set("worksignup", "yes", {
                expires: 99
            }), $("#work-default").addClass("hide"), $("#work-no").addClass("hide"), $("#work-yes").removeClass("hide")) : ($("#work-response").html("<h1>Oh no...</h1><p class='l'>Sorry there has been a problem, we can't sign you up right now.</p>"), $("#work-default").addClass("hide"), $("#work-yes").addClass("hide"), $("#work-no").removeClass("hide")), $("#invite-screen ").addClass("transition-out"), setTimeout(function() {
                $("#invite-screen").removeClass("modal__screen--active")
            }, 200);
            var t = $("#thanks-screen");
            t.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
                t.removeClass("transition-in")
            }, 200)
        }).error(function() {
            $("#work-response").html("<h1>Oh no...</h1><p class='l'>Sorry there has been a problem, we can't sign you up right now.</p>"), $("#work-default").addClass("hide"), $("#work-yes").addClass("hide"), $("#work-no").removeClass("hide"), $("#invite-screen ").addClass("transition-out"), setTimeout(function() {
                $("#invite-screen").removeClass("modal__screen--active")
            }, 200);
            var e = $("#thanks-screen");
            e.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
                e.removeClass("transition-in")
            }, 200)
        })
    }

    function u(e) {
        e.attr("aria-hidden", "false").attr("tabindex", "0"), E.addClass("modal--open"), ce.css("display", "block"), document.addEventListener("keydown", de), ce.velocity({
            opacity: 1
        }, {
            duration: 200,
            complete: function() {
                e.velocity({
                    width: "100%"
                }, {
                    duration: 0
                }), e.velocity("transition.bounceIn", {
                    stagger: 75,
                    display: "flex"
                })
            }
        }), setTimeout(function() {
            le(e)
        }, 300)
    }

    function p(e) {
        oe.attr("aria-hidden", "true").attr("tabindex", "-1"), e && "dismiss-old" == e.attr("data-dismiss") && Cookies.set("oldbrowser", "dismissed", {
            expires: 99
        }), oe.velocity("transition.bounceOut"), ce.delay(400).velocity("reverse", {
            complete: function() {
                oe.attr("style", ""), ce.attr("style", ""), E.removeClass("modal--open")
            }
        }), document.removeEventListener("keydown", de), setTimeout(function() {
            se[0].focus()
        }, 500)
    }

    function h() {
        var e = ye.is(":checked");
        e ? ($("[data-plan-recur=\"monthly\"]").show(), $("[data-plan-recur=\"annual\"]").hide()) : ($("[data-plan-recur=\"monthly\"]").hide(), $("[data-plan-recur=\"annual\"]").show())
    }

    function m(e, t, a, i, n, o, s, l) {
        2 === arguments.length && (a = i = 0, n = e.canvas.width, o = e.canvas.height), s = "number" == typeof s ? s : 0.5, l = "number" == typeof l ? l : 0.5, 0 > s && (s = 0), 0 > l && (l = 0), 1 < s && (s = 1), 1 < l && (l = 1);
        var d, c, u, p, h = t.width,
            m = t.height,
            g = Math.min(n / h, o / m),
            r = h * g,
            f = m * g,
            y = 1;
        r < n && (y = n / r), 1e-14 > Math.abs(y - 1) && f < o && (y = o / f), r *= y, f *= y, u = h / (r / n), p = m / (f / o), d = (h - u) * s, c = (m - p) * l, 0 > d && (d = 0), 0 > c && (c = 0), u > h && (u = h), p > m && (p = m), e.drawImage(t, d, c, u, p, a, i, n, o)
    }

    function g(e, t) {
        function a() {
            i.beginPath(), i.moveTo(0, 638), i.lineTo(0, 20), i.quadraticCurveTo(0, 10, 10, 10), i.lineTo(1120, 0), i.quadraticCurveTo(1130, 0, 1130, 10), i.lineTo(1130, 638), i.quadraticCurveTo(1130, 648, 1120, 648), i.lineTo(10, 648), i.quadraticCurveTo(0, 648, 0, 638), i.closePath()
        }
        var r = document.getElementById(e);
        r.width = 2270, r.height = 1306, r.getContext("2d").scale(2, 2);
        var i = r.getContext("2d"),
            n = document.createElement("IMG");
        n.onload = function() {
            i.save(), a(), i.shadowOffsetX = 0, i.shadowOffsetY = 2, i.shadowBlur = 4, i.shadowColor = "rgba(0, 0, 0, 0.15)", i.fillStyle = "rgb(0, 0, 0)", i.fill(), i.restore(), i.clip(), i.globalAlpha = 0.85, m(i, n, 0, 0, r.width / 2, r.height / 2), i.restore()
        }, n.src = t
    }

    function f(e, t) {
        function a() {
            i.beginPath(), i.moveTo(0, 525), i.lineTo(0, 20), i.quadraticCurveTo(0, 10, 10, 10), i.lineTo(1120, 0), i.quadraticCurveTo(1130, 0, 1130, 10), i.lineTo(1130, 525), i.quadraticCurveTo(1130, 535, 1120, 535), i.lineTo(10, 535), i.quadraticCurveTo(0, 535, 0, 525), i.closePath()
        }
        var r = document.getElementById(e);
        r.width = 2270, r.height = 1080, r.getContext("2d").scale(2, 2);
        var i = r.getContext("2d"),
            n = document.createElement("IMG");
        n.onload = function() {
            i.save(), a(), i.shadowOffsetX = 0, i.shadowOffsetY = 2, i.shadowBlur = 4, i.shadowColor = "rgba(0, 0, 0, 0.15)", i.fillStyle = "rgb(0, 0, 0)", i.fill(), i.restore(), i.clip(), i.globalAlpha = 0.85, m(i, n, 0, 0, r.width / 2, r.height / 2), i.restore()
        }, n.src = t
    }

    function y(e, t) {
        function a() {
            i.beginPath(), i.moveTo(0, 565), i.lineTo(0, 20), i.quadraticCurveTo(0, 10, 10, 10), i.lineTo(1120, 0), i.quadraticCurveTo(1130, 0, 1130, 10), i.lineTo(1130, 565), i.quadraticCurveTo(1130, 565, 1120, 575), i.lineTo(10, 575), i.quadraticCurveTo(0, 575, 0, 565), i.closePath()
        }
        var r = document.getElementById(e);
        r.width = 2270, r.height = 1160, r.getContext("2d").scale(2, 2);
        var i = r.getContext("2d"),
            n = document.createElement("IMG");
        n.onload = function() {
            i.save(), a(), i.shadowOffsetX = 0, i.shadowOffsetY = 2, i.shadowBlur = 4, i.shadowColor = "rgba(0, 0, 0, 0.15)", i.fillStyle = "rgb(0, 0, 0)", i.fill(), i.restore(), i.clip(), i.globalAlpha = 0.85, m(i, n, 0, 0, r.width / 2, r.height / 2), i.restore()
        }, n.src = t
    }

    function b() {
        !N && $(".explore-card").length && ($(".explore-card .explore-card__contents-inner").removeAttr("style"), $(".explore-card").each(function(e, t) {
            var a = $(t),
                r = a.outerHeight(),
                i = $(".explore-card__env", a).outerHeight(),
                n = $(".collection-intro", a).position().top;
            $(".explore-card__contents-inner", a).css({
                transform: "translateY(" + (i - n - 20) + "px)"
            })
        }))
    }

    function x() {
        we = 0, Ce = 0, be = 0, xe = 0, ke = 0
    }

    function k(e) {
        var t = e.nextThrough(".layout__item--single");
        t.insertBefore(e), x(), Se = !0
    }

    function w() {
        Pe++;
        for (var e = $("#posts-inner .layout__item").not(".load-more").length, t = $("#posts-inner .layout__item").not(".load-more"), a = 0; a < t.length && !(10 < Pe); ++a)
            if (Se) a == t.length - 1 && (Se = !1, w());
            else {
                var r = t[a];
                $(r).hasClass("layout__item--x2") ? (ve = "double", Ce++) : ve = "single", we++, $(r).attr("data-count", we), 1 == we ? be = ve : 2 == we ? xe = ve : 3 == we && (ke = ve), 1 < Ce || "double" == ke ? k($(r)) : ("single" == be && "double" == xe || "double" == be && "single" == xe || "single" == be && "single" == xe && "single" == ke) && x(), 3 == we && x()
            }
    }

    function C(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            r = a.exec(t);
        return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
    }

    function S() {
        var e = C("from");
        if (e = e, "create.kahoot.vagrant" == e || "create.kahoot-experimental.it" == e || "create.kahoot-stage.it" == e || "create.kahoot-qa.it" == e) {
            var t;
            t = "create.kahoot.vagrant" === e ? "http://" + e : "create.kahoot-experimental.it" === e ? "https://" + e : "create.kahoot-stage.it" === e ? "https://" + e : "create.kahoot-qa.it" === e ? "https://" + e : "https://create.kahoot.it", $("[href*=\"kahoot.it\"]").each(function(e, a) {
                var r = $(a),
                    i = r.attr("href"),
                    n = i.replace("https://create.kahoot.it", t);
                r.attr("href", n)
            }), $("a[data-add-param]").each(function(t, a) {
                var r = $(a),
                    i = r.attr("href"); - 1 == i.indexOf("?") && (i += "?"), i += "&from=" + e + "&", r.attr("href", i)
            })
        }
    }

    function P() {}

    function T() {
        $(".page-nav, .page-nav .inner, .page-nav li").removeAttr("style")
    }

    function _() {
        if (Ae) {
            var e = 0,
                t = 0,
                a = $(".plan-card__intro"),
                r = $(".plan-card__period");
            a.each(function(t, r) {
                a.removeAttr("style");
                var i = $(r);
                i.outerHeight() > e && (e = i.outerHeight()), a.css("min-height", e)
            }), r.each(function(e, a) {
                r.removeAttr("style");
                var i = $(a);
                i.outerHeight() > t && (t = i.outerHeight()), r.css("min-height", t)
            })
        }
    }
    var O, E = $("html"),
        V = $("body"),
        D = $(window),
        Y = $(document),
        q = D.outerHeight(),
        j = D.width(),
        A = Y.scrollTop(),
        X = window.location.hash;
    E.addClass("velocity");
    var I = $(".page-nav");
    $(".article-body, .env-section__body, .layout-component").fitVids();
    var N = "ontouchstart" in window;
    N ? E.addClass("has-touch") : E.addClass("no-touch");
    "kahooter" == Cookies.get("kVistor") ? E.addClass("kahooter") : $(".return-visitor").remove(), Cookies.get("kVistor") || Cookies.set("kVistor", "kahooter", {
        expires: 99
    }), Cookies.get("announcementDismissed") || $(".header-notification").show(), $("#dismiss-announcement").on("click", function() {
        Cookies.set("announcementDismissed", "true", {
            expires: 5
        }), $(".header-notification").remove()
    }), (Modernizr.flexbox || Modernizr.flexboxlegacy) && "#oldbrowser" != X || function() {
        E.addClass("old-browser"), $("<div class=\"old-browser-banner\"><div class=\"old-browser__inner\">You are using an unsupported browser. Please upgrade to <a href=\"https://www.google.com/chrome/browser/\" target=\"_blank\">Chrome</a>, <a href=\"https://support.apple.com/downloads/safari\" target=\"_blank\">Safari</a>, <a href=\"https://www.mozilla.org/en-GB/firefox/new/\" target=\"_blank\">Firefox</a>, <a href=\"http://www.opera.com/\" target=\"_blank\">Opera</a> or <a href=\"https://www.microsoft.com/en-us/download/details.aspx\" target=\"_blank\">Edge</a>.</div></div>").appendTo(V), "dismissed" != Cookies.get("oldbrowser") && ($("<div class=\"modal-outer\" data-modal-target-id=\"old-browser\"><div class=\"modal-inner\"><div class=\"modal\"><div class=\"modal__header\"></div><div class=\"modal__body\"><h1><span style=\"color:#333; text-transform:none;\">Sooooo close!</span></h1><p class=\"l\">Just one thing before you continue: we noticed your browser needs a power up. This will ensure that you get the best possible experience on our website.</p> <p class=\"l\">Please, upgrade to the latest version of <a href=\"https://www.google.com/chrome/browser/\" target=\"_blank\">Google Chrome</a>, <a href=\"https://support.apple.com/downloads/safari\" target=\"_blank\">Safari</a>, <a href=\"https://www.mozilla.org/en-GB/firefox/new/\" target=\"_blank\">Firefox</a>, <a href=\"http://www.opera.com/\" target=\"_blank\">Opera</a> or <a href=\"https://www.microsoft.com/en-us/download/details.aspx\" target=\"_blank\">Microsoft Edge</a> and come back!</p><div class=\"modal-form-control\"><a href=\"javascript:;\" class=\"btn theme-colour\" data-trigger=\"close-modal\" data-dismiss=\"dismiss-old\">Gotcha!</a></div></div></div></div>").appendTo(V), Cookies.set("oldbrowser", "yes", {
            expires: 99
        }), oe = $("[data-modal-target-id=\"old-browser\"]"), setTimeout(function() {
            u(oe)
        }, 10))
    }(), Y.on("click", "#reset-browser-cookie", function(t) {
        Cookies.remove("oldbrowser"), location.reload(), t.preventDefault()
    });
    var L = $(".cookie-message");
    L.length && (L.velocity("transition.bounceUpIn"), E.addClass("has-cookie-msg")), Y.on("click", "[data-cookie-dismiss]", function(t) {
        Cookies.set("cookies", "dismissed", {
            expires: 99
        }), $(".cookie-message").velocity("transition.bounceDownOut"), E.removeClass("has-cookie-msg"), setTimeout(function() {
            $(".cookie-message").remove()
        }, 400), t.preventDefault()
    }), Y.on("click", "#reset-cookie-cookie", function(t) {
        Cookies.remove("cookies"), location.reload(), t.preventDefault()
    });
    var H = Cookies.get("cookies");
    "dismissed" == H || $("html").hasClass("page-template-page--no-header-footer") || $("#cookie-msg").show(), e();
    var B = $(".scroll-indicator");
    B.css({
        transform: "translateY(200px)",
        opacity: 1
    });
    var R;
    clearTimeout(R);
    var z = $("body").outerHeight();
    z > q && (R = setTimeout(function() {
        200 > A && t()
    }, 3e3)), 1 < $(".plan-card").length && B.remove();
    var F, U = $(".quote-wall"),
        M = !!$(".quote-wall").length;
    if (M) {
        var Z = document.createElement("script");
        // Z.id = "flkty", Z.src = "/wp-content/themes/kahoot2017/assets/js/flickity.pkgd.min.js", $(Z).insertBefore("#k-functions")
    }
    var W = $(".page-header");
    W.fixedsticky(), Y.on("click", ".menu-toggle", function() {
        var e = $(this).find("span"),
            t = e.attr("data-open"),
            a = e.attr("data-closed"),
            r = $(".page-header").outerHeight(),
            i = $(".header-notification").outerHeight() ? $(".header-notification").outerHeight() : 0,
            n = q - r - i;
        console.log(n), E.toggleClass("menu--open"), E.hasClass("menu--open") ? (e.text(t), I.velocity({
            height: n
        }, {
            duration: 400,
            complete: function() {
                $(".page-nav .inner").velocity({
                    "max-height": "100%"
                }), $(".page-nav li").each(function(e) {
                    var t = $(this),
                        a = 100 * e;
                    t.velocity({
                        top: 0,
                        opacity: "1"
                    }, {
                        duration: 300,
                        delay: a
                    }), e++
                })
            }
        }, "easeOutQuad")) : (e.text(a), $(".page-nav li").velocity("reverse", {
            complete: function() {
                $(".page-nav .inner").velocity({
                    "max-height": 0
                })
            }
        }), I.velocity("reverse"))
    }), Y.on("click", "#skip-to-content", function() {
        $($(this).attr("href")).focus()
    }), Y.on("click", "#to-top", function(t) {
        $("html,body").animate({
            scrollTop: $("#top").offset().top
        }, 400), t.preventDefault()
    });
    var G = Y.scrollTop(),
        Q = W.outerHeight(),
        K = $(".clipped-hero").outerHeight(),
        I = $(".page-nav"),
        J = $(".sticky-section-nav").length,
        ee = function() {
            var e, t = $(".header-wrap").outerHeight(),
                a = $(".page-nav").outerHeight(),
                r = Y.scrollTop();
            r > Q ? (I.addClass("off-canvas"), e = t) : (I.removeClass("off-canvas"), e = t + a), r > G ? (I.removeClass("fixed"), E.removeClass("nav-fixed"), e = t) : (I.addClass("fixed"), E.addClass("nav-fixed"), e = t + a), J && $(".sticky-section-nav").css("top", e + "px"), G = Y.scrollTop()
        },
        te = ["purple", "purple", "blue", "green", "red"],
        ae = $("#favicon").attr("data-directory");
    if (i(), Y.on("click", ".page-hero__play-btn", function(t) {
        var e = $(this).parents(".page-hero"),
            a = e.find(".page-hero__content"),
            r = e.find(".page-hero__img-vid"),
            i = e.find(".page-hero__play-btn"),
            n = e.find(".page-hero-video"),
            o = e.find(".page-hero__video"),
            s = n.attr("data-src");
        a.velocity({
            right: "-100%"
        }, {
            duration: 400
        }), a.velocity({
            "z-index": "-1"
        }, {
            duration: 0
        }), a.velocity({
            right: 0
        }, {
            duration: 400
        }), r.addClass("video-open"), a.addClass("video-open"), $(".page-hero__video iframe").trigger("click"), i.velocity({
            opacity: 0,
            width: 0,
            height: 0,
            overflow: "hidden"
        }, {
            duration: 0
        }), n.attr("src", s), o.velocity({
            opacity: 0
        }, {
            duration: 400
        }), o.velocity({
            opacity: 1,
            scale: 1
        }, {
            duration: 400
        }), t.preventDefault()
    }), Y.on("click", ".page-hero__close-btn", function(t) {
        var e = $(this).parents(".page-hero"),
            a = e.find(".page-hero__content"),
            r = e.find(".page-hero__img-vid"),
            i = e.find(".page-hero__play-btn"),
            n = e.find(".page-hero-video"),
            o = e.find(".page-hero__video"),
            s = n.attr("data-src");
        n.attr("src", ""), o.velocity({
            opacity: 0,
            scale: 0.8
        }, {
            duration: 400
        }), r.removeClass("video-open"), a.removeClass("video-open"), a.velocity({
            right: "-100%"
        }, {
            duration: 400
        }), a.velocity({
            "z-index": "1"
        }, {
            duration: 0
        }), a.velocity({
            right: 0
        }, {
            duration: 400
        }), i.velocity("reverse"), t.preventDefault()
    }), Y.on("click", "#challenge-desktop [data-form-progress], #challenge-mobile [data-form-progress]", function(t) {
        var e = $("#dob-screen");
        $(".modal__screen--active").addClass("transition-out"), setTimeout(function() {
            $("#challenge-desktop, #challenge-mobile").removeClass("modal__screen--active")
        }, 400), e.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
            e.removeClass("transition-in")
        }, 200), t.preventDefault()
    }), Y.on("change", ".dob-field", function(t) {
        n(), t.preventDefault()
    }), Y.on("click", "#dob-screen [data-form-progress]", function(t) {
        if ("enabled" === $(this).attr("data-state")) {
            var e = $("#dob-month").val(),
                a = $("#dob-day").val(),
                r = $("#dob-year").val(),
                i = o(r + "/" + e + "/" + a);
            $(".modal__screen--active").addClass("transition-out"), setTimeout(function() {
                $("#dob-screen").removeClass("modal__screen--active")
            }, 400);
            var n;
            16 <= i ? n = $("#invite-screen") : (n = $("#na-screen"), Cookies.set("beta", "no", {
                expires: 99
            }), Cookies.set("worksignup", "no", {
                expires: 99
            }), $("#beta-default").addClass("hide"), $("#beta-no").removeClass("hide"), $("#work-default").addClass("hide"), $("#work-no").removeClass("hide")), n.addClass("modal__screen--active").addClass("transition-in"), setTimeout(function() {
                n.removeClass("transition-in")
            }, 200)
        } else;
        t.preventDefault()
    }), Y.on("blur", "[name=\"beta-email\"]", function() {
        var e = $("[name=\"beta-email\"]").val();
        s(e) ? $("[name=\"beta-email\"]").removeClass("error") : ($("[name=\"beta-email\"]").addClass("error"), $("#invite-screen [data-form-progress]").attr("data-state", "disabled"))
    }), Y.on("blur", ".modal__screen [name=\"email\"]", function() {
        var e = $(".modal__screen [name=\"email\"]").val();
        s(e) ? ($(".modal__screen [name=\"email\"]").removeClass("error"), $("#invite-screen #notify-signup").attr("data-state", "enabled")) : ($(".modal__screen [name=\"email\"]").addClass("error"), $("#invite-screen #notify-signup").attr("data-state", "disabled"))
    }), Y.on("change", "[name=\"android\"], [name=\"iOS\"], [name=\"beta-email\"]", function(t) {
        l(), t.preventDefault()
    }), Y.on("click", "#invite-screen [data-form-progress]", function(t) {
        var e = $(this);
        "enabled" === e.attr("data-state") && ($(".form-processing").addClass("show-processing"), "kahoot-work-signup" == e.attr("id") ? c() : d()), t.preventDefault()
    }), Y.on("click", ".footer-nav__title", function(t) {
        var e = $(this).parents(".footer-nav");
        e.toggleClass("open"), t.preventDefault()
    }), Y.on("click", "#reset-cookie", function(t) {
        Cookies.remove("beta"), location.reload(), t.preventDefault()
    }), Y.on("click", "#signed-up-cookie", function(t) {
        Cookies.set("beta", "yes", {
            expires: 99
        }), location.reload(), t.preventDefault()
    }), Y.on("click", "#too-young-cookie", function(t) {
        Cookies.set("beta", "no", {
            expires: 99
        }), location.reload(), t.preventDefault()
    }), $("[data-modal-target-id=\"beta-signup\"]").length) {
        var re = Cookies.get("beta");
        re ? "no" == re ? $("#beta-no").removeClass("hide") : "yes" == re && $("#beta-yes").removeClass("hide") : $("#beta-default").removeClass("hide")
    }
    if ($("[data-modal-target-id=\"work-signup\"]").length) {
        var ie = Cookies.get("worksignup");
        ie ? "no" == ie ? $("#work-no").removeClass("hide") : "yes" == ie && $("#work-yes").removeClass("hide") : $("#work-default").removeClass("hide")
    }
    var ne, oe, se, le = function(e) {
            var t = e[0].querySelectorAll("\n\t\ta:not(.send-focus), \n\t\tinput[type=\"text\"]:not([name=\"hp\"]), \n\t\tinput[type=\"email\"], \n\t\tinput[type=\"number\"], \n\t\tinput[type=\"checkbox\"], \n\t\tbutton, \n\t\tselect, \n\t\ttextarea\n\t");
            if (!e[0].querySelectorAll(".send-focus--last").length) {
                var a = document.createElement("button");
                a.classList.add("send-focus"), a.classList.add("send-focus--last"), a.setAttribute("aria-hidden", "true"), $(a).prependTo(e)
            }
            if (!e[0].querySelectorAll(".send-focus--first").length) {
                var r = document.createElement("button");
                r.classList.add("send-focus"), r.classList.add("send-focus--first"), r.setAttribute("aria-hidden", "true"), $(r).appendTo(e)
            }
            var i;
            i = t.length ? t[1] : t[0], i.focus(), e[0].querySelectorAll(".send-focus--first")[0].addEventListener("focus", function() {
                for (var a = 0; a < t.length && (t[a].focus(), document.activeElement != t[a]); a++) a == t.length - 1 && e[0].focus()
            }), e[0].querySelectorAll(".send-focus--last")[0].addEventListener("focus", function() {
                for (var a = t.length - 1; 0 <= a && (t[a].focus(), document.activeElement != t[a]); a--) 0 == a && e[0].focus()
            })
        },
        de = function(t) {
            27 == t.keyCode && p()
        },
        ce = $(".modal-overlay");
    Y.on("click keydown", "[data-modal-target]", function(t) {
        "keydown" == t.type && 13 != t.which || (se = $(this), ne = $(this).attr("data-modal-target"), oe = $("[data-modal-target-id=\"" + ne + "\"]"), u(oe), t.preventDefault())
    }), Y.on("click", "[data-trigger=\"close-modal\"]", function(t) {
        var e = $(this);
        p(e), t.preventDefault()
    });
    var ue = window.location.hash;
    if (ue) {
        ue = ue.replace("#", "");
        var pe = $("a[name=\"" + ue + "\"]");
        if (pe.length) {
            var he = pe.parents(".accordion");
            he.addClass("accordion--open")
        }
    }
    if ($(".accordion").each(function(e) {
        var t = $(this),
            a = "acID-" + e,
            r = t.find(".accordion__trigger"),
            i = t.find(".accordion__content"),
            n = t.find(".accordion-anchor").attr("name");
        i.attr("id", a), r.wrapInner("<button class=\"accordion__trigger\" aria-controls=\"" + a + "\" />").children(0).unwrap(), r = t.find(".accordion__trigger");
        var o = t.hasClass("accordion--open");
        o || i.hide().attr("aria-hidden", !0), r.on("click", function(a) {
            n && history.replaceState({}, "", "#" + n), t.toggleClass("accordion--open"), i.is(":visible") ? i.velocity("slideUp", {
                duration: 200
            }).attr("aria-hidden", !0) : i.velocity("slideDown", {
                duration: 200
            }).attr("aria-hidden", !1), a.preventDefault()
        })
    }), "IntersectionObserver" in window) {
        var me = document.querySelectorAll(".envelope-section + .page-section"),
            ge = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    0 < e.intersectionRatio ? (e.target.classList.add("in-view"), e.target.classList.add("is-active")) : e.target.classList.remove("is-active")
                })
            }, {
                rootMargin: "50px 20px 75px 30px",
                threshold: [0, 0.25, 0.75, 1]
            });
        me.forEach(function(e) {
            ge.observe(e)
        })
    }
    var fe = $(".plan__switch");
    fe.on("click", function(t) {
        var e = $(this).parents("[data-plan]").attr("data-plan"),
            a = $("[data-plan=\"" + e + "\"] [data-recur]"),
            r = a.attr("data-recur");
        a.attr("data-recur", "monthly" == r ? "annual" : "monthly"), t.preventDefault()
    });
    var ye = $("#toggle-switch");
    h(), ye.on("change", function() {
        h()
    }), $(".toggle-label").keypress(function(t) {
        13 == (t.keyCode ? t.keyCode : t.which) && $(this).trigger("click")
    }), $("[data-plan-recur=\"monthly\"]").length && $("[data-plan-recur=\"monthly\"]").length && $(".toggle-label").show(), $(".toggle-mobile-features").on("click", function(t) {
        $(this).toggleClass("state--open"), t.preventDefault()
    }), $(".hero-canvas").each(function() {
        var e = $(this).attr("id"),
            t = $(this).attr("data-img-src");
        g(e, t)
    }), $(".hero-canvas-alt").each(function() {
        var e = $(this).attr("id"),
            t = $(this).attr("data-img-src");
        f(e, t)
    }), $(".hero-canvas-video").each(function() {
        var e = $(this).attr("id"),
            t = $(this).attr("data-img-src");
        y(e, t)
    }), Y.on("click", ".load-more a", function(t) {
        var a = $(this),
            r = a.parent(),
            i = a.attr("href");
        $(this).css({
            "pointer-events": "none",
            opacity: 0.5
        }), $("<div id=\"ajax-target\"></div>").appendTo("#posts-inner"), $("#ajax-target").load(i + " #posts-inner .layout__item", function() {
            e(), $("#ajax-target .layout__item").addClass("loaded").css("opacity", 0).unwrap(), r.remove(), Pe = 0, w(), $(".indicator__el").each(function() {
                var e = $(this).attr("data-class");
                $(this).attr("class", e)
            }), setTimeout(function() {
                $(".loaded").each(function(e) {
                    $(this).delay(100 * e).velocity("transition.bounceIn", {
                        stagger: 75,
                        display: "flex"
                    }).removeClass("loaded"), e++
                })
            }, 100)
        }), t.preventDefault()
    }), $("[data-expand-questions]").length && $(".kahoot-question").hide(), Y.on("click", "[data-expand-questions]", function(t) {
        var e = $(this).parents(".kahoot-block");
        e.toggleClass("kahoot-block--open"), e.hasClass("kahoot-block--open") ? $(".kahoot-question", e).each(function(e) {
            var t = $(this);
            t.delay(100 * e).velocity("transition.flipBounceYIn")
        }) : $(".kahoot-question", e).hide(), t.preventDefault()
    }), $(".kq-a").hide(), Y.on("click", "[data-toggle-answers]", function(t) {
        var e = $(this).parents(".kahoot-block");
        e.toggleClass("kahoot-block--show-answers"), e.hasClass("kahoot-block--show-answers") ? $(".kq-a", e).show() : $(".kq-a", e).hide(), t.preventDefault()
    });
    var ve, be, xe, ke, we = 0,
        Ce = 0,
        Se = !1,
        Pe = 0;
    $("#posts-inner").length && w();
    var Te = !1;
    $(".card-hero, .page-hero--std").css("opacity", "0").velocity("transition.bounceIn"), $(".page-hero--app").css("opacity", "0").velocity("transition.bounceIn", {
        stagger: 75,
        display: "flex"
    }), $(".layout__item").css("opacity", "0"), $(".layout__item").each(function(e) {
        $(this).delay(50 * e).velocity("transition.bounceIn", {
            stagger: 75,
            display: "flex"
        }), e++, e == $(".layout__item").length && setTimeout(function() {
            b(), Te = !0
        }, 100 * e)
    });
    var _e = {
        Windows: function() {
            return /IEMobile/i.test(navigator.userAgent)
        },
        Android: function() {
            return /Android/i.test(navigator.userAgent)
        },
        BlackBerry: function() {
            return /BlackBerry/i.test(navigator.userAgent)
        },
        iOS: function() {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent)
        },
        any: function() {
            return _e.Android() || _e.BlackBerry() || _e.iOS() || _e.Windows()
        }
    };
    (_e.Android() || _e.iOS()) && ($("[data-device-switch=\"desktop\"]").hide(), _e.iOS() ? $("[data-device-switch=\"ios\"]").show() : _e.Android() && $("[data-device-switch=\"android\"]").show());
    var Oe = C("challengeId");
    Oe || (Oe = C("challengeid")), $("[data-modal-target-id=\"beta-signup\"]").length && Oe && (_e.iOS() ? $("#kahoot-challenge-btn").attr("href", "kahoot://challenge?challengeId=" + Oe) : _e.Android() && $("#kahoot-challenge-btn").attr("href", "intent://challenge/?challengeId=" + Oe + "#Intent;scheme=kahoot;package=no.mobitroll.kahoot.android;end"), $("#dob-screen").removeClass("modal__screen--active"), _e.Android() || _e.iOS() ? $("#challenge-mobile").removeClass("hide").addClass("modal__screen--active") : $("#challenge-desktop").removeClass("hide").addClass("modal__screen--active"), oe = $("[data-modal-target-id=\"beta-signup\"]"), u(oe)), Y.on("blur", ".sub-menu a", function() {
        $(this).parent().parent().removeClass("focused")
    }), Y.on("focus", ".sub-menu a", function() {
        $(this).parent().parent().addClass("focused")
    });
    var Ee = !1,
        Ve = document.createElement("video");
    Ve.canPlayType && Ve.canPlayType("video/mp4").replace(/no/, "") ? Ee = !0 : E.addClass("no-mp4-support"), E.hasClass("home") && Cookies.set("returningUser", "yes", {
        expires: 99
    }), Y.on("click", ".bsc-play-btn", function(t) {
        var e = $(this),
            a = $(this).parents(".bsc-video"),
            r = a.find(".bsc-video-embed");
        r.attr("src", r.attr("data-src")), a.addClass("bsc--flip"), $(".bsc-video__back").fitVids(), t.preventDefault()
    }), Y.on("click", ".bsc-close-btn", function(t) {
        var e = $(this),
            a = $(this).parents(".bsc-video"),
            r = a.find(".bsc-video-embed");
        r.attr("src", ""), a.removeClass("bsc--flip"), t.preventDefault()
    }), $(".plan-card").length && S();
    var v = $(".playlist-item");
    v.on("click", function() {
        var e = $(this),
            t = e.parents(".playlist"),
            a = t.find(".playlist-video"),
            r = e.attr("data-video-id");
        $(".playlist-video").each(function() {
            var e = $(this).attr("src").replace("autoplay=1", "autoplay=0");
            $(this).attr("src", e)
        }), a.attr("src", "https://www.youtube.com/embed/" + r + "?rel=0&autoplay=1"), v.removeClass("state--active"), e.addClass("state--active")
    }), $("[data-select-on-click]").on("click", function() {
        this.setSelectionRange(0, this.value.length)
    });
    var De, Ye, qe = $("[data-url-text]");
    $(qe).each(function() {
        var e = $(this).attr("data-url-text"),
            t = e;
        if (t = C(t), t && $(this).text(t), "new_price" == e && (De = t), "plan_quantity" == e && (Ye = t), "total_price" == e) {
            var a = +De * +Ye;
            a = a.toFixed(2), $("[data-url-text=\"total_price\"]").text(a)
        }
    });
    var je = $(".plan-card"),
        Ae = !!(1 < je.length),
        Xe = $(".features-table");
    Xe.length && je.length && ($("<tfoot><tr><td></td></tr></tfoot>").appendTo(Xe), je.each(function(e) {
        var t = $(".plan-card__button", this).clone();
        t.appendTo("tfoot tr", Xe).wrap("<td/>"), t.clone().appendTo(".tab-panel:eq(" + e + ") ul").wrap("<li class=\"list-foot\"/>"), e++
    }));
    var Ie = $("[data-component=\"tabs\"]");
    $(Ie).find("> .tab-panel").attr({
        "aria-hidden": "true"
    }).hide();
    var Ne = Ie.find(".tabs-list");
    $(Ne).find("li > a").each(function(e) {
        var t = $(this),
            a = "tab-" + t.attr("href").slice(1);
        t.attr({
            id: a,
            "aria-selected": "false"
        }).parent().attr("role", "presentation"), $(Ie).find(".tab-panel").eq(e).attr("aria-labelledby", a), t.click(function(a) {
            var e;
            a.preventDefault(), $(Ne).find("> li.current").removeClass("current").find("> a").attr("aria-selected", "false"), $(Ie).find(".tab-panel:visible").attr("aria-hidden", "true").hide(), e = $(Ie).find(".tab-panel").eq(t.parent().index()), e.attr("aria-hidden", "false").show(), t.attr("aria-selected", "true").parent().addClass("current"), e.children("h2").attr("tabindex", -1).focus()
        })
    }), $(Ne).delegate("a", "keydown", function(t) {
        var e = $(this);
        switch (t.which) {
            case 37:
            case 38:
                0 == e.parent().prev().length ? $(Ne).find("li:last > a").click() : e.parent().prev().find("> a").click();
                break;
            case 39:
            case 40:
                0 == e.parent().next().length ? $(Ne).find("li:first > a").click() : e.parent().next().find("> a").click();
        }
    }), $(Ie).find(".tab-panel:first").attr("aria-hidden", "false").show(), $(Ne).find("li:first").addClass("current").find(" > a").attr({
        "aria-selected": "true",
        tabindex: "0"
    }), $(".in-up").length && $(".in-up").velocity("transition.bounceUpIn");
    var Le, He = $("#d-video"),
        Be = !1;
    if (He.length && 760 <= j) {
        var Re = function(t) {
                setTimeout(function() {
                    // t.target.playVideo(), $("[data-a11y-dialog-show=\"hero-video\"]").show()
                }, 1e3)
            },
            ze = function(t) {
                t.data != YT.PlayerState.PLAYING || Ue || (document.getElementById("d-video").classList.add("playing"), Ue = !0), t.data === YT.PlayerState.ENDED && Le.playVideo()
            };
        Be = !0;
        var Fe = He.data("video-id");
        loadScript(ytIframeAPI), window.onYouTubeIframeAPIReady = function() {
            Le = new YT.Player("d-video", {
                height: "390",
                width: "640",
                videoId: Fe,
                playlist: Fe,
                playerVars: {
                    enablejsapi: 1,
                    autoplay: 0,
                    loop: 1,
                    mute: 1,
                    disablekb: 1,
                    modestbranding: 1,
                    showinfo: 0,
                    controls: 0
                },
                events: {
                    onReady: Re,
                    onStateChange: ze
                }
            })
        };
        var Ue = !1
    }
    var Me, Ze = $(".fullscreen-video"),
        We = document.getElementById("hero-video");
    if (We) {
        var Ge = function() {
            Me = new A11yDialog(We), Me.on("show", function() {
                Be && ($("#d-video").removeClass("playing"), Le.pauseVideo()), $("#fs-video").attr("src", $("#fs-video").attr("data-src")), setTimeout(function() {
                    $(".fullscreen-video").fitVids()
                }, 20), $(document).keyup(function(t) {
                    "Escape" === t.key && Me.hide()
                })
            }), Me.on("hide", function() {
                $("iframe", Ze).attr("src", " "), $("#decorative-video").attr("src", $("#decorative-video").attr("data-src")), Ze.fitVids(), Be && (Le.playVideo(), $("#d-video").addClass("playing"))
            })
        };
        loadScript(a11ydialog, Ge)
    }
    var Qe;
    if ($("[data-a11y-dialog-show=\"kahoot-basic-confirm\"]").length) {
        var Ke = function() {
            Qe = new A11yDialog(document.getElementById("kahoot-basic-confirm"));
            var e = $("#confirm-modal-signup");
            $(document).on("change", "#confirm-modal-check", function() {
                $("#confirm-modal-check").prop("checked") ? (e.attr("disabled", !1), e.attr("href", e.attr("data-href")), S()) : (e.attr("disabled", "disabled"), e.attr("href", "javascript:;"))
            }), Qe.on("show", function() {
                "kpro-downgrade" == $("[data-a11y-dialog-show=\"kahoot-basic-confirm\"]").attr("data-tracking-id") && $("#confirm-modal-signup").attr("data-href", "https://create.kahoot.it/register/downgrade")
            }), $(document).on("keyup", ".confirm-modal [disabled=\"disabled\"]", function(t) {
                console.log(t.keyCode), 13 == t.keyCode && (t.preventDefault(), t.stopPropagation(), alert("Please check to confirm that you will only use Kahoot! for non-commercial use."))
            })
        };
        $("<div id=\"kahoot-basic-confirm\">\n\t\t<div tabindex=\"-1\"></div>\n\t\t<dialog aria-labelledby=\"non-commercial\" role=\"alertdialog\" class=\"confirm-modal-wrap\">\n\t\t\t<div class=\"confirm-modal\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h3 id=\"non-commercial\">Kahoot! Basic can be used for non-commercial purposes only</h3>\n\t\t\t\t\t\t<p>By choosing the basic, free version of Kahoot! you confirm that you intend to use it for non-commercial purposes only. As stated in our <a href=\"/terms-and-conditions/\" target=\"_blank\">Terms and Conditions</a>, to use Kahoot! for professional purposes, you&rsquo;d need a paid subscription.</p>\n\t\t\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<p class=\"confirm-check\"><input type=\"checkbox\" id=\"confirm-modal-check\" />\n\t\t\t\t\t\t\tI confirm I will only use Kahoot! for non-commercial purposes</p>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p>Nonprofit? <a href=\"/register/pricing-nonprofit/\">See available plans here</a>.<br />\n\t\tTeacher? See available plans for <a href=\"/register/pricing-schools/\">K-12</a> and <a href=\"/register/pricing-higher-ed/\">higher education</a>.</p>\n\t\t\n\t\t\t\t\t\t<div class=\"button-pair button-pair--modal\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" data-tracking-id=\"confirm-modal--close\" data-a11y-dialog-hide aria-label=\"Close this dialog window\" class=\"btn btn--white btn--raised\">Cancel</a>\n\t\t\t\t\t\t\t<a href=\"javascript:;\" data-tracking-id=\"confirm-modal--confirm\" data-href=\"https://create.kahoot.it/register/free\" class=\"btn btn--raised\" disabled=\"disabled\" id=\"confirm-modal-signup\" data-add-param>Confirm</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</dialog>\n\t</div>").appendTo("body"), loadScript(a11ydialog, Ke)
    }
    var O, $e = function(e) {
            $(".chat-container").length && !$("html").hasClass("show-bot-on-scroll") && 200 < e && $("html").addClass("show-bot-on-scroll")
        },
        Je = $(".footer-banner--onscroll"),
        et = !1;
    D.on("load resize orientationchange", function() {
        q = D.outerHeight(), j = D.width(), A = Y.scrollTop(), breakpointNav > j ? P() : T(), r(), clearTimeout(O), O = setTimeout(function() {
            Ae && _(), Te && b()
        }, 50)
    }), D.on("scroll", function() {
        ee(), A = D.scrollTop(), 0 === A && i(), 200 > A && (clearTimeout(R), E.hasClass("scroll-indicator-visible") && a()), 40 < A ? Je && !et && (Je.addClass("onscroll-show"), et = !0) : et && (Je.removeClass("onscroll-show"), et = !1), $e(A)
    })
}), "use strict", Number.isInteger = Number.isInteger || function(e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
}, $(function() {
    function e() {
        "i" != a && $("a.btn").each(function() {
            var e = $(this);
            if (/trial/.test(e.text())) {
                var t = e.parent();
                t.find(".btn").removeAttr("style"), t.hasClass("button-pair") && e.unwrap(), e.remove()
            }
        })
    }
    var t = Math.round;
    ($(".plan-card").length || $("[data-recurly-pricing]").length) && loadScript(recurlyJsScript, function() {
        function e() {
            $("#minUsersNote").length || $("<p><small id=\"minUsersNote\"></small></p>").appendTo(S), $("#minUsersNote").html(L)
        }

        function a() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
            return 0 <= ["AL", "AD", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "KZ", "XK", "LV", "LI", "LT", "LU", "MK", "MT", "MD", "MC", "ME", "NL", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA"].indexOf(e.toUpperCase())
        }

        function r(e) {
            E == V ? (X.attr("disabled", "disabled"), e && N.focus()) : X.removeAttr("disabled")
        }
        var i = getParameterByName("from"),
            n = "ewr1-qODCWx7HMGwxbFYGA6u4xS";
        "create.kahoot.vagrant" === i ? n = "ewr1-w2uwnrun0xd2KnuABq00O8" : "create.kahoot-experimental.it" === i ? n = "ewr1-GgKiylEQqjwTV5QIgCjpcb" : "create.kahoot-stage.it" === i ? n = "ewr1-560nRmiVwPz6OQnPIMYLSq" : "create.kahoot-qa.it" === i ? n = "ewr1-7GiewyYzYrxjl0vNfYpd4z" : void 0;
        recurly.configure(n);
        var o, s, l = recurly.Pricing(),
            d = recurly.Pricing(),
            c = {
                coupon: "<h3 id='error-title'>Uh-oh! The coupon you're trying to redeem doesn't exist.</h3> <p><a href='/'>See our current offers on kahoot.com</a> or contact us at <a href='mailto:help@kahoot.com'>help@kahoot.com</a> for assistance.</p>",
                plan: "<h3 id='error-title'>Uh-oh! The plan you're trying to change to doesn't exist.</h3> <p><a href='/'>See our current offers on kahoot.com</a> or contact us at <a href='mailto:help@kahoot.com'>help@kahoot.com</a> for assistance.</p>",
                generic: "<h3 id='error-title'>Uh-oh! Something went wrong and we couldn't change your subscription plan.</h3> <p><a href='mailto:help@kahoot.com'>Contact us</a> for assistance, or go to <a href='https://create.kahoot.it'>Kahoot! platform</a> or <a href='https://kahoot.com'>our website</a>.</p>"
            },
            u = "USD",
            p = 1,
            h = "",
            m = function(e, t) {
                var a = (e * p).toFixed(2);
                return "NO" == o && (a = a.toString().replace(".", ",")), a = t ? "-" + a + h : a + h, a
            },
            g = {
                pro12schools_large: 20,
                pro12schools_large3: 20,
                pro_enterprise: 25,
                plus12_enterprise: 25,
                pro_premium_enterprise: 25,
                premium_enterprise: 25,
                plus_basic12_enterprise: 25,
                plus12buynow_family: 3
            },
            f = ["plus12t", "plust", "plust_nonprofit", "plus12t_nonprofit", "pro12t_highered", "plust_highered", "plus12t_highered"],
            y = $("#platform-upgrade-btn"),
            v = $("#payment-summary"),
            b = getParameterByName("plan_cur"),
            x = $("[data-summary-plan]").length ? $("[data-summary-plan]").attr("data-summary-plan") : getParameterByName("plan_new"),
            k = $("[data-summary-campaign-src]").length ? $("[data-summary-campaign-src]").attr("data-summary-campaign-src") : getParameterByName("campaign_src"),
            w = $("#current-plan-row"),
            C = $("#new-plan-row"),
            S = $("#users-row"),
            P = $("#total-row"),
            T = getParameterByName("plan_quantity") ? getParameterByName("plan_quantity") : 1,
            _ = getParameterByName("min_quantity") ? getParameterByName("min_quantity") : 1,
            O = $("[data-summary-coupon]").length ? $("[data-summary-coupon]").attr("data-summary-coupon") : getParameterByName("coupon"),
            E = T,
            V = _,
            D = !1,
            Y = E,
            q = 1,
            j = $(".quantity-ctrl"),
            A = j.find(".plus-minus-btn"),
            X = $("[data-action=\"decrease\"]", j),
            I = $("[data-action=\"increase\"]", j),
            N = $("#plan_quantity"),
            L = "Your current plan has " + V + " users.";
        b == x && (s = "updateCurrentPlan", +E++), b == x && O ? V = E : O && (V = +E);
        var H = y.attr("href"),
            B = (O || "").match(/_couponmin(\d+)/),
            R = !1,
            z = function t() {
                function a(e) {
                    var t;
                    t = "generic" == e || "trial" == e ? c.generic : e.message.includes("plan_code") ? c.plan : e.message.includes("oupon") ? c.coupon : c.generic + "<p>" + e.message + "</p>", $("<div id=\"upgrade-error\">\n\t\t\t\t<div tabindex=\"-1\"></div>\n\t\t\t\t<dialog aria-labelledby=\"error-title\" role=\"alertdialog\" class=\"confirm-modal-wrap\">\n\t\t\t\t\t<div class=\"confirm-modal\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<div>" + t + "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</dialog>\n\t\t\t</div>").appendTo("body"), loadScript(a11ydialog, function() {
                        var e = new A11yDialog(document.getElementById("upgrade-error"));
                        e.show()
                    })
                }
                $("a.logo-link").attr("href", "https://create.kahoot.it");
                var r = "",
                    i = !1,
                    n = !1;
                if ((x in g || 1 < V) && (+g[x] > +V && (V = g[x], L = "This plan has a minimum of " + V + " users."), +V > +E && (E = V, n = !0), e()), O) {
                    var p = (O || "").match(/_min(\d+)/) || [0, V]; + p[1] > +E && (E = +p[1], n = !0), +p[1] > +V && (V = +p[1], L = "Coupon requires minimum " + V + " users.", e()), $("#discount-note").length || $("<hr /><p id=\"discount-note\">When increasing the number of users, the additional charge will be prorated for the remainder of your current billing cycle.</p>").appendTo(".upgrade-panel__intro")
                }
                if (B && (R = B[1], O.includes("_couponmin") && O.includes("-b") && E < R && (E = R), O = $("#plan_quantity").val() >= +R ? B.input : "", L = "Discount for " + R + " users or more.", e()), n && N.val(E), -1 != f.indexOf(x) && (i = !0, -1 == f.indexOf(b) && a("trial")), x) {
                    var h = x.includes("12") ? 12 : 1,
                        v = 1,
                        S = 12 == h ? "Annual" : "Monthly",
                        _ = +E,
                        q = !1;
                    $("[data-cycle]").text(S), "updateCurrentPlan" == s && (_ = +E - T, C.hide(), 0 == _ ? y.attr("disabled", "disabled") : y.removeAttr("disabled"), 0 >= _ && (_ = +E, q = !0), $("#total-label").text("Total for additional users")), l.plan(x, {
                        quantity: _
                    }).coupon(O).currency(u).catch(function(e) {
                        "invalid-coupon-for-subscription" == e ? t() : a(e)
                    }).done(function(e) {
                        var t, a, r, n;
                        if (i ? (t = e.next.plan / h / _, r = e.next.total, n = e.next.discount, !$("#after-trial").length && $(".ky__k", P).append("<span id=\"after-trial\"> (after trial)</span>")) : (t = e.now.plan / h / _, r = e.now.total, n = e.now.discount), a = e.now.plan, O ? (!$("#disc").length && $("<div id=\"disc\" class=\"discount-row\"><p class=\"kv\"><b class=\"ky__k\">Discount</b> <b class=\"kv__v\"><span><span data-rcjs=\"currency_symbol\"></span></span><span id=\"discount-amount\"></span></b></p></div>").insertBefore("#total"), $("#discount-amount").text(m(n)), "NO" == o && $("[data-rcjs=currency_symbol]").hide()) : $("#disc, #subtotal").remove(), "updateCurrentPlan" == s) {
                            var l = "<b class=\"ky__k\">Additional users:</b><b class=\"ky__v\">" + _ + "<b>";
                            q ? $("#user-change").hide() : $("#user-change").show(), $("#user-change").length ? $("#user-change").html(l) : $("<p id=\"user-change\" class=\"user-change kv\">" + l + "</p>").prependTo(P)
                        }
                        $("[data-rcjs=currency_symbol]").text(e.currency.symbol), $("[data-rcjs=price_sub-total]").text(m(a)), $("[data-rcjs=\"price_new\"]").text(m(t)), $("[data-rcjs=price_total]").text(m(r)), b ? !D && (v = b.includes("12") ? 12 : 1, d.plan(b, {
                            quantity: Y
                        }).currency(u).catch(function() {
                            w.hide()
                        }).done(function(e) {
                            w.show();
                            var t = e.next.total / v / Y;
                            $("[data-rcjs=\"price_cur\"]").text(m(t))
                        }), D = !0) : w.hide()
                    })
                } else a("generic");
                $("[data-rcjs=plan_quantity]").text(E), y.length && (-1 == H.indexOf("?") && (r += "?"), x && (r += "plan=" + x + "&"), k && (r += "campaign_src=" + k + "&"), O && "null" != O && (r += "coupon=" + O + "&"), E && (r += "plan_quantity=" + E), y.attr("href", H + r))
            },
            F = function() {
                var e = {
                    EUR: 0.9,
                    GBP: 0.8,
                    NOK: 10
                };
                $("[data-recurly-plan]").each(function() {
                    var a = $(this),
                        r = $(this).attr("data-recurly-plan"),
                        i = r.includes("12") ? 12 : 1,
                        n = 1;
                    r in g && (n = g[r]), l.plan(r, {
                        quantity: n
                    }).currency(u).catch(function(e) {
                        console.log(e)
                    }).done(function(r) {
                        var n = r.currency.symbol;
                        $("[data-rcjs=currency_symbol]").not("[data-rcjs-set=\"true\"]").text(n).attr("data-rcjs-set", "true");
                        var o = r.next.total / i * p;
                        $("[data-rcjs=\"monthly_price\"]", a).text(t(100 * o) / 100 + h), $("[data-rcjs=\"annual_price\"]", a).text(t(100 * (12 * o)) / 100 + h), a.find("[data-rcjs-switch-" + u + "]").length && a.find("[data-rcjs-switch-" + u + "]").not("[data-set=\"set\"]").each(function() {
                            $(this).text($(this).attr("data-rcjs-switch-" + u)).attr("data-set", "set")
                        }), u in e && $("[data-rcjs-exchange-usd]").not("[data-set=\"set\"]").each(function() {
                            var a = $(this),
                                r = +a.attr("data-rcjs-exchange-usd") * e[u];
                            a[0].hasAttribute("round") ? r = t(r) : !Number.isInteger(r) && (r = r.toFixed(2)), "NOK" == u ? r += n : r = n + r, a.html(r).attr("data-set", "set")
                        })
                    })
                });
                var a = $(".img-banner img");
                if (a.length && "USD" != u) {
                    var r = a.attr("src").split(".png");
                    r = r[0] + "-" + u + ".png", $.ajax({
                        url: r,
                        type: "HEAD",
                        success: function() {
                            a.attr("src", r)
                        },
                        error: function() {
                            console.log("no local banner")
                        }
                    })
                }
            },
            U = function(e) {
                o = e.country.iso_code, localStorage.setItem("country", o), Z()
            },
            M = function(e) {
                console.log("geoip2:" + e)
            },
            Z = function() {
                "NO" == o ? ($("[data-rcjs=currency_symbol]").hide(), p = 1.25, u = "NOK", h = "kr") : "GB" == o ? u = "GBP" : a(o) && (u = "EUR"), $("[data-recurly-plan]").length && F(), v.length && z()
            };
        if (null === localStorage.getItem("country")) {
            var W = function() {
                "undefined" == typeof geoip2 ? (console.log("geo undefinied - set default"), o = "US", Z()) : geoip2.country(U, M)
            };
            loadScript(geoIPScript, W)
        } else o = localStorage.getItem("country"), Z();
        var G = function(e) {
            r(e), N.val(E), z(), $("#user_info").text("Users set to " + E)
        };
        j.length && G(), A.on("click", function(t) {
            var e, a = $(this),
                r = N.val();
            e = "increase" == a.attr("data-action") ? parseFloat(r) + q : r > q ? parseFloat(r) - q : q, E = e, G(!0), t.preventDefault()
        }), N.blur(function() {
            E = N.val() >= V ? q * t(N.val() / q) : V, G()
        })
    });
    var a = getParameterByName("s");
    a && (e(), localStorage.setItem("s", a)), null !== localStorage.getItem("s") && e()
}), "use strict";

function validEmail(e) {
    var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return t.test(e)
}

function getFormData(e) {
    var t = e.elements,
        a = Object.keys(t).map(function(e) {
            return void 0 === t[e].name ? 0 < t[e].length ? t[e].item(0).name : void 0 : t[e].name
        }).filter(function(e, t, a) {
            return a.indexOf(e) == t && e
        }),
        r = {};
    return a.forEach(function(e) {
        r[e] = t[e].value;
        var a = "";
        if ("checkbox" === t[e].type) a = a + t[e].checked + ", ", r[e] = a.slice(0, -2);
        else if (t[e].length)
            for (var n = 0; n < t[e].length; n++) t[e].item(n).checked && (a = a + t[e].item(n).value + ", ", r[e] = a.slice(0, -2))
    }), r
}
var reqCount = $("[data-required=\"required\"] input").length,
    reqCounted = 0,
    hasError = !1;

function validateField(e) {
    var t = e.parents(".control");
    if (0 === e.val().length ? (t.addClass("control--error"), $(".control__error", t).show(), hasError = !0) : (t.removeClass("control--error"), $(".control__error", t).hide()), reqCounted++, reqCount == reqCounted && hasError) return !1
}
$("[data-required=\"required\"] input").on("blur", function() {
    var e = $(this);
    validateField(e)
}); // check licenses is not less than the minimum
var minLicenses = $("[name=\"numberOfLicenses\"]").attr("min");
minLicenses && $("[name=\"numberOfLicenses\"]").on("blur", function() {
    minLicenses = $("[name=\"numberOfLicenses\"]").attr("min");
    var e = $("[name=\"numberOfLicenses\"]").val();
    e < minLicenses && $("[name=\"numberOfLicenses\"]").val(minLicenses)
});

function handleFormSubmit(e) {
    hasError = !1;
    var t = e.target;
    e.preventDefault();
    var a = getFormData(t);
    if ($("[data-required=\"required\"] input", t).each(function() {
        var e = $(this);
        validateField(e)
    }), !validEmail(a.email) && t.querySelectorAll("[data-validate=\"email-invalid\"]").length) {
        var r = t.querySelectorAll("[data-validate=\"email-invalid\"]")[0];
        return r.style.display = "block", r.parentElement.parentElement.classList.add("control--error"), !1
    }
    if (!1 == hasError) {
        var i = a.redirect,
            n = a.numberOfLicenses,
            o = !1,
            s = e.target.action,
            l = new XMLHttpRequest;
        l.open("POST", s), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function() {
            4 === l.readyState && (200 <= l.status && 300 > l.status ? i && (n && !o ? (o = !0, i = i + "&plan_quantity=" + n, $("#redirect-url").attr("href", i), window.location.href = i) : window.location.href = i) : $("#rdr-p").remove(), t.style.display = "none", t.parentElement.querySelectorAll(".thankyou_message")[0].style.display = "block")
        };
        var d = Object.keys(a).map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(a[e])
        }).join("&");
        l.send(d)
    } else;
}

function loaded() {
    var e = document.querySelectorAll("[name=\"gform\"]");
    if (e)
        for (var t, a = 0; a < e.length; a++) t = e[a], t.addEventListener("submit", handleFormSubmit, !1);
    for (var r, i = document.querySelectorAll("[name=\"gform\"] [name=\"consent\"]"), a = 0; a < i.length; a++) r = i[a], r.addEventListener("change", function() {
        var e = this.form,
            t = e.querySelectorAll("[name=\"consent\"]")[0],
            a = e.querySelectorAll("[type=\"submit\"]")[0];
        t.checked ? a.removeAttribute("disabled") : a.disabled = "disabled"
    })
}
document.addEventListener("DOMContentLoaded", loaded, !1);