"use strict";
(self.webpackChunk_segment_analytics_next = self.webpackChunk_segment_analytics_next || []).push([
    [604], {
        669: function(n, t, e) {
            e.r(t), e.d(t, {
                tsubMiddleware: function() {
                    return a
                }
            });
            var r = e(2870),
                a = function(n) {
                    return function(t) {
                        var e = t.payload,
                            a = t.integration,
                            o = t.next;
                        new r.Store(n).getRulesByDestinationName(a).forEach((function(n) {
                            for (var t = n.matchers, a = n.transformers, s = 0; s < t.length; s++)
                                if (r.matches(e.obj, t[s]) && (e.obj = r.transform(e.obj, a[s]), null === e.obj)) return o(null)
                        })), o(e)
                    }
                }
        }
    }
]);
//# sourceMappingURL=tsub-middleware.bundle.77315eced46c5ae4c052.js.map