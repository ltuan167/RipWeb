// ! function(n, t) {
//     "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : this.$script = t()
// }(0, function() {
//     function n(n, t) {
//         for (var o = 0, e = n.length; o < e; ++o)
//             if (!t(n[o])) return c;
//         return 1
//     }
//
//     function t(t, o) {
//         n(t, function(n) {
//             return !o(n)
//         })
//     }
//
//     function o(i, u, c) {
//         function a(n) {
//             return n.call ? n() : l[n]
//         }
//
//         function d() {
//             if (!--y) {
//                 l[v] = 1, g && g();
//                 for (var o in p) n(o.split("|"), a) && !t(p[o], a) && (p[o] = [])
//             }
//         }
//         i = i[f] ? i : [i];
//         var m = u && u.call,
//             g = m ? u : c,
//             v = m ? i.join("") : u,
//             y = i.length;
//         return setTimeout(function() {
//             t(i, function n(t, o) {
//                 return null === t ? d() : (t = o || /^https?:\/\//.test(t) || !r ? t : r + t + ".js", h[t] ? (v && (s[v] = 1), void(2 == h[t] ? d() : setTimeout(n.bind(null, t, !0), 0))) : (h[t] = 1, v && (s[v] = 1), e(t, d), void 0))
//             })
//         }, 0), o
//     }
//
//     function e(n, t) {
//         var o, e = i.createElement("script");
//         e.onload = e.onerror = e[d] = function() {
//             e[a] && !/^c|loade/.test(e[a]) || o || (e.onload = e[d] = null, o = 1, h[n] = 2, t())
//         }, e.async = 1, e.src = n, u.insertBefore(e, u.lastChild)
//     }
//     var r, i = document,
//         u = i.getElementsByTagName("head")[0],
//         c = !1,
//         f = "push",
//         a = "readyState",
//         d = "onreadystatechange",
//         l = {},
//         s = {},
//         p = {},
//         h = {};
//     return o.get = e, o.order = function(n, t, e) {
//         ! function r(i) {
//             i = n.shift(), n.length ? o(i, r) : o(i, t, e)
//         }()
//     }, o.path = function(n) {
//         r = n
//     }, o.ready = function(e, r, i) {
//         e = e[f] ? e : [e];
//         var u = [];
//         return !t(e, function(n) {
//             l[n] || u[f](n)
//         }) && n(e, function(n) {
//             return l[n]
//         }) ? r() : function(n) {
//             p[n] = p[n] || [], p[n][f](r), i && i(u)
//         }(e.join("|")), o
//     }, o.done = function(n) {
//         o([null], n)
//     }, o
// }), "undefined" != typeof dojo ? dojo.provide("org.cometd") : (this.org = this.org || {}, org.cometd = {}), null, function() {
//     angular.bootstrap(document, ["app"])
// });