"use strict";
(self.webpackChunk_segment_analytics_next = self.webpackChunk_segment_analytics_next || []).push([
    [214], {
        9568: function(e, t, n) {
            n.r(t), n.d(t, {
                remoteMiddlewares: function() {
                    return i
                }
            });
            var r = n(5163),
                a = n(204),
                s = n(7070),
                c = n(7566);

            function i(e, t, n) {
                var i;
                return (0, r.mG)(this, void 0, Promise, (function() {
                    var u, l, o, d, f = this;
                    return (0, r.Jh)(this, (function(m) {
                        switch (m.label) {
                            case 0:
                                return (0, a.s)() ? [2, []] : (u = (0, c.Kg)(), l = null !== (i = t.enabledMiddleware) && void 0 !== i ? i : {}, o = Object.entries(l).filter((function(e) {
                                    e[0];
                                    return e[1]
                                })).map((function(e) {
                                    return e[0]
                                })), d = o.map((function(t) {
                                    return (0, r.mG)(f, void 0, void 0, (function() {
                                        var a, c, i, l;
                                        return (0, r.Jh)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    a = t.replace("@segment/", ""), c = a, n && (c = btoa(a).replace(/=/g, "")), i = "".concat(u, "/middleware/").concat(c, "/latest/").concat(c, ".js.gz"), r.label = 1;
                                                case 1:
                                                    return r.trys.push([1, 3, , 4]), [4, (0, s.v)(i)];
                                                case 2:
                                                    return r.sent(), [2, window["".concat(a, "Middleware")]];
                                                case 3:
                                                    return l = r.sent(), e.log("error", l), e.stats.increment("failed_remote_middleware"), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                })), [4, Promise.all(d)]);
                            case 1:
                                return [2, m.sent().filter(Boolean)]
                        }
                    }))
                }))
            }
        }
    }
]);
//# sourceMappingURL=remoteMiddleware.bundle.366df96a78421ccf3f3e.js.map