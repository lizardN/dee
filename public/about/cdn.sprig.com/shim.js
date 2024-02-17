var ty = Object.defineProperty;
var ny = (q, Ye, Tt) => Ye in q ? ty(q, Ye, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Tt
}) : q[Ye] = Tt;
var ue = (q, Ye, Tt) => (ny(q, typeof Ye != "symbol" ? Ye + "" : Ye, Tt), Tt);
(function() {
    "use strict";
    var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Ye(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function Tt(e) {
        var t = e.default;
        if (typeof t == "function") {
            var n = function() {
                return t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var i = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }), n
    }
    var ae = {},
        Lt = {};
    Object.defineProperty(Lt, "__esModule", {
        value: !0
    });
    var ei = function() {
        function e() {}
        return e.prototype.handleError = function(t) {}, e
    }();
    Lt.NoopErrorHandler = ei;
    var ti = new ei;

    function Dc(e) {
        ti = e
    }
    Lt.setErrorHandler = Dc;

    function Pc() {
        return ti
    }
    Lt.getErrorHandler = Pc;

    function Nc() {
        ti = new ei
    }
    Lt.resetErrorHandler = Nc;
    var ni = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.NOTSET = 0] = "NOTSET", t[t.DEBUG = 1] = "DEBUG", t[t.INFO = 2] = "INFO", t[t.WARNING = 3] = "WARNING", t[t.ERROR = 4] = "ERROR"
            }(e.LogLevel || (e.LogLevel = {}))
    })(ni);
    var pt = {},
        Yt = {},
        Xn = {
            exports: {}
        },
        da = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (da) {
        var fa = new Uint8Array(16);
        Xn.exports = function() {
            return da(fa), fa
        }
    } else {
        var pa = new Array(16);
        Xn.exports = function() {
            for (var t = 0, n; t < 16; t++)(t & 3) === 0 && (n = Math.random() * 4294967296), pa[t] = n >>> ((t & 3) << 3) & 255;
            return pa
        }
    }
    for (var ha = [], Jn = 0; Jn < 256; ++Jn) ha[Jn] = (Jn + 256).toString(16).substr(1);

    function Mc(e, t) {
        var n = t || 0,
            r = ha;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    var va = Mc,
        Vc = Xn.exports,
        jc = va,
        ma, ri, ii = 0,
        oi = 0;

    function Bc(e, t, n) {
        var r = t && n || 0,
            i = t || [];
        e = e || {};
        var o = e.node || ma,
            a = e.clockseq !== void 0 ? e.clockseq : ri;
        if (o == null || a == null) {
            var s = Vc();
            o == null && (o = ma = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]), a == null && (a = ri = (s[6] << 8 | s[7]) & 16383)
        }
        var l = e.msecs !== void 0 ? e.msecs : new Date().getTime(),
            u = e.nsecs !== void 0 ? e.nsecs : oi + 1,
            c = l - ii + (u - oi) / 1e4;
        if (c < 0 && e.clockseq === void 0 && (a = a + 1 & 16383), (c < 0 || l > ii) && e.nsecs === void 0 && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ii = l, oi = u, ri = a, l += 122192928e5;
        var d = ((l & 268435455) * 1e4 + u) % 4294967296;
        i[r++] = d >>> 24 & 255, i[r++] = d >>> 16 & 255, i[r++] = d >>> 8 & 255, i[r++] = d & 255;
        var f = l / 4294967296 * 1e4 & 268435455;
        i[r++] = f >>> 8 & 255, i[r++] = f & 255, i[r++] = f >>> 24 & 15 | 16, i[r++] = f >>> 16 & 255, i[r++] = a >>> 8 | 128, i[r++] = a & 255;
        for (var p = 0; p < 6; ++p) i[r + p] = o[p];
        return t || jc(i)
    }
    var Fc = Bc,
        Hc = Xn.exports,
        $c = va;

    function Kc(e, t, n) {
        var r = t && n || 0;
        typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
        var i = e.random || (e.rng || Hc)();
        if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
            for (var o = 0; o < 16; ++o) t[r + o] = i[o];
        return t || $c(i)
    }
    var qc = Kc,
        Gc = Fc,
        ga = qc,
        ai = ga;
    ai.v1 = Gc, ai.v4 = ga;
    var zc = ai;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = zc;

        function n() {
            return t.v4()
        }
        e.generateUUID = n;

        function r() {
            return new Date().getTime()
        }
        e.getTimestamp = r;

        function i(d, f) {
            for (var p = !1, v = Object.keys(d), h = 0; h < v.length; h++)
                if (f === d[v[h]]) {
                    p = !0;
                    break
                }
            return p
        }
        e.isValidEnum = i;

        function o(d, f) {
            var p = {};
            return d.forEach(function(v) {
                var h = f(v);
                p[h] = p[h] || [], p[h].push(v)
            }), a(p)
        }
        e.groupBy = o;

        function a(d) {
            return Object.keys(d).map(function(f) {
                return d[f]
            })
        }
        e.objectValues = a;

        function s(d) {
            return Object.keys(d).map(function(f) {
                return [f, d[f]]
            })
        }
        e.objectEntries = s;

        function l(d, f) {
            for (var p, v = 0, h = d; v < h.length; v++) {
                var g = h[v];
                if (f(g)) {
                    p = g;
                    break
                }
            }
            return p
        }
        e.find = l;

        function u(d, f) {
            var p = {};
            return d.forEach(function(v) {
                var h = f(v);
                p[h] = v
            }), p
        }
        e.keyBy = u;

        function c(d) {
            for (var f = [], p = 1; p < arguments.length; p++) f[p - 1] = arguments[p];
            var v = 0;
            return d.replace(/%s/g, function() {
                var h = f[v++],
                    g = typeof h;
                return g === "function" ? h() : g === "string" ? h : String(h)
            })
        }
        e.sprintf = c,
            function(d) {
                d.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event", d.DECISION = "DECISION:type, userId, attributes, decisionInfo", d.LOG_EVENT = "LOG_EVENT:logEvent", d.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE", d.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
            }(e.NOTIFICATION_TYPES || (e.NOTIFICATION_TYPES = {}))
    })(Yt);
    var Wc = q && q.__spreadArrays || function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r
    };
    Object.defineProperty(pt, "__esModule", {
        value: !0
    });
    var Yc = Lt,
        er = Yt,
        te = ni,
        ya = {
            NOTSET: 0,
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4
        };

    function si(e) {
        return typeof e != "string" || (e = e.toUpperCase(), e === "WARN" && (e = "WARNING"), !ya[e]) ? e : ya[e]
    }
    var _a = function() {
            function e() {
                this.defaultLoggerFacade = new wa, this.loggers = {}
            }
            return e.prototype.getLogger = function(t) {
                return t ? (this.loggers[t] || (this.loggers[t] = new wa({
                    messagePrefix: t
                })), this.loggers[t]) : this.defaultLoggerFacade
            }, e
        }(),
        Qc = function() {
            function e(t) {
                t === void 0 && (t = {}), this.logLevel = te.LogLevel.NOTSET, t.logLevel !== void 0 && er.isValidEnum(te.LogLevel, t.logLevel) && this.setLogLevel(t.logLevel), this.logToConsole = t.logToConsole !== void 0 ? !!t.logToConsole : !0, this.prefix = t.prefix !== void 0 ? t.prefix : "[OPTIMIZELY]"
            }
            return e.prototype.log = function(t, n) {
                if (!(!this.shouldLog(t) || !this.logToConsole)) {
                    var r = this.prefix + " - " + this.getLogLevelName(t) + " " + this.getTime() + " " + n;
                    this.consoleLog(t, [r])
                }
            }, e.prototype.setLogLevel = function(t) {
                t = si(t), !er.isValidEnum(te.LogLevel, t) || t === void 0 ? this.logLevel = te.LogLevel.ERROR : this.logLevel = t
            }, e.prototype.getTime = function() {
                return new Date().toISOString()
            }, e.prototype.shouldLog = function(t) {
                return t >= this.logLevel
            }, e.prototype.getLogLevelName = function(t) {
                switch (t) {
                    case te.LogLevel.DEBUG:
                        return "DEBUG";
                    case te.LogLevel.INFO:
                        return "INFO ";
                    case te.LogLevel.WARNING:
                        return "WARN ";
                    case te.LogLevel.ERROR:
                        return "ERROR";
                    default:
                        return "NOTSET"
                }
            }, e.prototype.consoleLog = function(t, n) {
                switch (t) {
                    case te.LogLevel.DEBUG:
                        console.log.apply(console, n);
                        break;
                    case te.LogLevel.INFO:
                        console.info.apply(console, n);
                        break;
                    case te.LogLevel.WARNING:
                        console.warn.apply(console, n);
                        break;
                    case te.LogLevel.ERROR:
                        console.error.apply(console, n);
                        break;
                    default:
                        console.log.apply(console, n)
                }
            }, e
        }();
    pt.ConsoleLogHandler = Qc;
    var yn = te.LogLevel.NOTSET,
        li = null,
        wa = function() {
            function e(t) {
                t === void 0 && (t = {}), this.messagePrefix = "", t.messagePrefix && (this.messagePrefix = t.messagePrefix)
            }
            return e.prototype.log = function(t, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                this.internalLog(si(t), {
                    message: n,
                    splat: r
                })
            }, e.prototype.info = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                this.namedLog(te.LogLevel.INFO, t, n)
            }, e.prototype.debug = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                this.namedLog(te.LogLevel.DEBUG, t, n)
            }, e.prototype.warn = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                this.namedLog(te.LogLevel.WARNING, t, n)
            }, e.prototype.error = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                this.namedLog(te.LogLevel.ERROR, t, n)
            }, e.prototype.format = function(t) {
                return (this.messagePrefix ? this.messagePrefix + ": " : "") + er.sprintf.apply(void 0, Wc([t.message], t.splat))
            }, e.prototype.internalLog = function(t, n) {
                !li || t < yn || (li.log(t, this.format(n)), n.error && n.error instanceof Error && Yc.getErrorHandler().handleError(n.error))
            }, e.prototype.namedLog = function(t, n, r) {
                var i;
                if (n instanceof Error) {
                    i = n, n = i.message, this.internalLog(t, {
                        error: i,
                        message: n,
                        splat: r
                    });
                    return
                }
                if (r.length === 0) {
                    this.internalLog(t, {
                        message: n,
                        splat: r
                    });
                    return
                }
                var o = r[r.length - 1];
                o instanceof Error && (i = o, r.splice(-1)), this.internalLog(t, {
                    message: n,
                    error: i,
                    splat: r
                })
            }, e
        }(),
        ba = new _a;

    function Zc(e) {
        return ba.getLogger(e)
    }
    pt.getLogger = Zc;

    function Xc(e) {
        li = e
    }
    pt.setLogHandler = Xc;

    function Jc(e) {
        e = si(e), !er.isValidEnum(te.LogLevel, e) || e === void 0 ? yn = te.LogLevel.ERROR : yn = e
    }
    pt.setLogLevel = Jc;

    function ed() {
        return yn
    }
    pt.getLogLevel = ed;

    function td() {
        ba = new _a, yn = te.LogLevel.NOTSET
    }
    pt.resetLogger = td,
        function(e) {
            function t(n) {
                for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r])
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), t(Lt), t(ni), t(pt)
        }(ae);
    var nd = {},
        _n = {};
    Object.defineProperty(_n, "__esModule", {
        value: !0
    }), _n.areEventContextsEqual = void 0;

    function rd(e, t) {
        var n = e.context,
            r = t.context;
        return n.accountId === r.accountId && n.projectId === r.projectId && n.clientName === r.clientName && n.clientVersion === r.clientVersion && n.revision === r.revision && n.anonymizeIP === r.anonymizeIP && n.botFiltering === r.botFiltering
    }
    _n.areEventContextsEqual = rd;
    var ui = {},
        Qt = {};
    Object.defineProperty(Qt, "__esModule", {
        value: !0
    }), Qt.DefaultEventQueue = Qt.SingleEventQueue = void 0;
    var id = ae,
        od = id.getLogger("EventProcessor"),
        ad = function() {
            function e(t) {
                var n = t.timeout,
                    r = t.callback;
                this.timeout = Math.max(n, 0), this.callback = r
            }
            return e.prototype.start = function() {
                this.timeoutId = setTimeout(this.callback, this.timeout)
            }, e.prototype.refresh = function() {
                this.stop(), this.start()
            }, e.prototype.stop = function() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, e
        }(),
        sd = function() {
            function e(t) {
                var n = t.sink;
                this.sink = n
            }
            return e.prototype.start = function() {}, e.prototype.stop = function() {
                return Promise.resolve()
            }, e.prototype.enqueue = function(t) {
                this.sink([t])
            }, e
        }();
    Qt.SingleEventQueue = sd;
    var ld = function() {
        function e(t) {
            var n = t.flushInterval,
                r = t.maxQueueSize,
                i = t.sink,
                o = t.batchComparator;
            this.buffer = [], this.maxQueueSize = Math.max(r, 1), this.sink = i, this.batchComparator = o, this.timer = new ad({
                callback: this.flush.bind(this),
                timeout: n
            }), this.started = !1
        }
        return e.prototype.start = function() {
            this.started = !0
        }, e.prototype.stop = function() {
            this.started = !1;
            var t = this.sink(this.buffer);
            return this.buffer = [], this.timer.stop(), t
        }, e.prototype.enqueue = function(t) {
            if (!this.started) {
                od.warn("Queue is stopped, not accepting event");
                return
            }
            var n = this.buffer[0];
            n && !this.batchComparator(n, t) && this.flush(), this.buffer.length === 0 && this.timer.refresh(), this.buffer.push(t), this.buffer.length >= this.maxQueueSize && this.flush()
        }, e.prototype.flush = function() {
            this.sink(this.buffer), this.buffer = [], this.timer.stop()
        }, e
    }();
    Qt.DefaultEventQueue = ld,
        function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sendEventNotification = e.getQueue = e.validateAndGetBatchSize = e.validateAndGetFlushInterval = e.DEFAULT_BATCH_SIZE = e.DEFAULT_FLUSH_INTERVAL = void 0;
            var t = Qt,
                n = ae,
                r = Yt;
            e.DEFAULT_FLUSH_INTERVAL = 3e4, e.DEFAULT_BATCH_SIZE = 10;
            var i = n.getLogger("EventProcessor");

            function o(u) {
                return u <= 0 && (i.warn("Invalid flushInterval " + u + ", defaulting to " + e.DEFAULT_FLUSH_INTERVAL), u = e.DEFAULT_FLUSH_INTERVAL), u
            }
            e.validateAndGetFlushInterval = o;

            function a(u) {
                return u = Math.floor(u), u < 1 && (i.warn("Invalid batchSize " + u + ", defaulting to " + e.DEFAULT_BATCH_SIZE), u = e.DEFAULT_BATCH_SIZE), u = Math.max(1, u), u
            }
            e.validateAndGetBatchSize = a;

            function s(u, c, d, f) {
                var p;
                return u > 1 ? p = new t.DefaultEventQueue({
                    flushInterval: c,
                    maxQueueSize: u,
                    sink: d,
                    batchComparator: f
                }) : p = new t.SingleEventQueue({
                    sink: d
                }), p
            }
            e.getQueue = s;

            function l(u, c) {
                u && u.sendNotifications(r.NOTIFICATION_TYPES.LOG_EVENT, c)
            }
            e.sendEventNotification = l
        }(ui);
    var Ea = {};
    Object.defineProperty(Ea, "__esModule", {
        value: !0
    });
    var xa = {};
    Object.defineProperty(xa, "__esModule", {
        value: !0
    });
    var Zt = {},
        tr = {};
    Object.defineProperty(tr, "__esModule", {
        value: !0
    }), tr.LocalStorageStore = void 0;
    var ud = Yt,
        cd = ae,
        Ca = cd.getLogger("EventProcessor"),
        dd = function() {
            function e(t) {
                var n = t.key,
                    r = t.maxValues,
                    i = r === void 0 ? 1e3 : r;
                this.LS_KEY = n, this.maxValues = i
            }
            return e.prototype.get = function(t) {
                return this.getMap()[t] || null
            }, e.prototype.set = function(t, n) {
                var r = this.getMap();
                r[t] = n, this.replace(r)
            }, e.prototype.remove = function(t) {
                var n = this.getMap();
                delete n[t], this.replace(n)
            }, e.prototype.values = function() {
                return ud.objectValues(this.getMap())
            }, e.prototype.clear = function() {
                this.replace({})
            }, e.prototype.replace = function(t) {
                try {
                    window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(t)), this.clean()
                } catch (n) {
                    Ca.error(n)
                }
            }, e.prototype.clean = function() {
                var t = this.getMap(),
                    n = Object.keys(t),
                    r = n.length - this.maxValues;
                if (!(r < 1)) {
                    var i = n.map(function(a) {
                        return {
                            key: a,
                            value: t[a]
                        }
                    });
                    i.sort(function(a, s) {
                        return a.value.timestamp - s.value.timestamp
                    });
                    for (var o = 0; o < r; o++) delete t[i[o].key];
                    this.replace(t)
                }
            }, e.prototype.getMap = function() {
                try {
                    var t = window.localStorage && localStorage.getItem(this.LS_KEY);
                    if (t) return JSON.parse(t) || {}
                } catch (n) {
                    Ca.error(n)
                }
                return {}
            }, e
        }();
    tr.LocalStorageStore = dd;
    var fd = q && q.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, i) {
                r.__proto__ = i
            } || function(r, i) {
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
            }, e(t, n)
        };
        return function(t, n) {
            e(t, n);

            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(Zt, "__esModule", {
        value: !0
    }), Zt.LocalStoragePendingEventsDispatcher = Zt.PendingEventsDispatcher = void 0;
    var pd = ae,
        hd = tr,
        Sa = Yt,
        vd = pd.getLogger("EventProcessor"),
        Ia = function() {
            function e(t) {
                var n = t.eventDispatcher,
                    r = t.store;
                this.dispatcher = n, this.store = r
            }
            return e.prototype.dispatchEvent = function(t, n) {
                this.send({
                    uuid: Sa.generateUUID(),
                    timestamp: Sa.getTimestamp(),
                    request: t
                }, n)
            }, e.prototype.sendPendingEvents = function() {
                var t = this,
                    n = this.store.values();
                vd.debug("Sending %s pending events from previous page", n.length), n.forEach(function(r) {
                    try {
                        t.send(r, function() {})
                    } catch {}
                })
            }, e.prototype.send = function(t, n) {
                var r = this;
                this.store.set(t.uuid, t), this.dispatcher.dispatchEvent(t.request, function(i) {
                    r.store.remove(t.uuid), n(i)
                })
            }, e
        }();
    Zt.PendingEventsDispatcher = Ia;
    var md = function(e) {
        fd(t, e);

        function t(n) {
            var r = n.eventDispatcher;
            return e.call(this, {
                eventDispatcher: r,
                store: new hd.LocalStorageStore({
                    maxValues: 100,
                    key: "fs_optly_pending_events"
                })
            }) || this
        }
        return t
    }(Ia);
    Zt.LocalStoragePendingEventsDispatcher = md;
    var Oe = {},
        ci = q && q.__assign || function() {
            return ci = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }, ci.apply(this, arguments)
        };
    Object.defineProperty(Oe, "__esModule", {
        value: !0
    }), Oe.formatEvents = Oe.buildConversionEventV1 = Oe.buildImpressionEventV1 = Oe.makeBatchedEventV1 = void 0;
    var gd = "campaign_activated",
        yd = "custom",
        ka = "$opt_bot_filtering";

    function Ta(e) {
        var t = [],
            n = e[0];
        return e.forEach(function(r) {
            if (r.type === "conversion" || r.type === "impression") {
                var i = di(r);
                r.type === "impression" ? i.snapshots.push(Ra(r)) : r.type === "conversion" && i.snapshots.push(La(r)), t.push(i)
            }
        }), {
            client_name: n.context.clientName,
            client_version: n.context.clientVersion,
            account_id: n.context.accountId,
            project_id: n.context.projectId,
            revision: n.context.revision,
            anonymize_ip: n.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: t
        }
    }
    Oe.makeBatchedEventV1 = Ta;

    function La(e) {
        var t = ci({}, e.tags);
        delete t.revenue, delete t.value;
        var n = {
            entity_id: e.event.id,
            key: e.event.key,
            timestamp: e.timestamp,
            uuid: e.uuid
        };
        return e.tags && (n.tags = e.tags), e.value != null && (n.value = e.value), e.revenue != null && (n.revenue = e.revenue), {
            events: [n]
        }
    }

    function Ra(e) {
        var t, n, r = e.layer,
            i = e.experiment,
            o = e.variation,
            a = e.ruleKey,
            s = e.flagKey,
            l = e.ruleType,
            u = e.enabled,
            c = r ? r.id : null,
            d = (t = i == null ? void 0 : i.id) !== null && t !== void 0 ? t : "",
            f = (n = o == null ? void 0 : o.id) !== null && n !== void 0 ? n : "",
            p = o ? o.key : "";
        return {
            decisions: [{
                campaign_id: c,
                experiment_id: d,
                variation_id: f,
                metadata: {
                    flag_key: s,
                    rule_key: a,
                    rule_type: l,
                    variation_key: p,
                    enabled: u
                }
            }],
            events: [{
                entity_id: c,
                timestamp: e.timestamp,
                key: gd,
                uuid: e.uuid
            }]
        }
    }

    function di(e) {
        var t = {
            snapshots: [],
            visitor_id: e.user.id,
            attributes: []
        };
        return e.user.attributes.forEach(function(n) {
            t.attributes.push({
                entity_id: n.entityId,
                key: n.key,
                type: "custom",
                value: n.value
            })
        }), typeof e.context.botFiltering == "boolean" && t.attributes.push({
            entity_id: ka,
            key: ka,
            type: yd,
            value: e.context.botFiltering
        }), t
    }

    function _d(e) {
        var t = di(e);
        return t.snapshots.push(Ra(e)), {
            client_name: e.context.clientName,
            client_version: e.context.clientVersion,
            account_id: e.context.accountId,
            project_id: e.context.projectId,
            revision: e.context.revision,
            anonymize_ip: e.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [t]
        }
    }
    Oe.buildImpressionEventV1 = _d;

    function wd(e) {
        var t = di(e);
        return t.snapshots.push(La(e)), {
            client_name: e.context.clientName,
            client_version: e.context.clientVersion,
            account_id: e.context.accountId,
            project_id: e.context.projectId,
            revision: e.context.revision,
            anonymize_ip: e.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [t]
        }
    }
    Oe.buildConversionEventV1 = wd;

    function bd(e) {
        return {
            url: "https://logx.optimizely.com/v1/events",
            httpVerb: "POST",
            params: Ta(e)
        }
    }
    Oe.formatEvents = bd;
    var nr = {},
        fi = {};
    Object.defineProperty(fi, "__esModule", {
        value: !0
    });
    var Ed = function() {
        function e() {
            this.reqsInFlightCount = 0, this.reqsCompleteResolvers = []
        }
        return e.prototype.trackRequest = function(t) {
            var n = this;
            this.reqsInFlightCount++;
            var r = function() {
                n.reqsInFlightCount--, n.reqsInFlightCount === 0 && (n.reqsCompleteResolvers.forEach(function(i) {
                    return i()
                }), n.reqsCompleteResolvers = [])
            };
            t.then(r, r)
        }, e.prototype.onRequestsComplete = function() {
            var t = this;
            return new Promise(function(n) {
                t.reqsInFlightCount === 0 ? n() : t.reqsCompleteResolvers.push(n)
            })
        }, e
    }();
    fi.default = Ed;
    var xd = q && q.__awaiter || function(e, t, n, r) {
            function i(o) {
                return o instanceof n ? o : new n(function(a) {
                    a(o)
                })
            }
            return new(n || (n = Promise))(function(o, a) {
                function s(c) {
                    try {
                        u(r.next(c))
                    } catch (d) {
                        a(d)
                    }
                }

                function l(c) {
                    try {
                        u(r.throw(c))
                    } catch (d) {
                        a(d)
                    }
                }

                function u(c) {
                    c.done ? o(c.value) : i(c.value).then(s, l)
                }
                u((r = r.apply(e, t || [])).next())
            })
        },
        Cd = q && q.__generator || function(e, t) {
            var n = {
                    label: 0,
                    sent: function() {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                r, i, o, a;
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function s(u) {
                return function(c) {
                    return l([u, c])
                }
            }

            function l(u) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; n;) try {
                    if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                    switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return n.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            n.label++, i = u[1], u = [0];
                            continue;
                        case 7:
                            u = n.ops.pop(), n.trys.pop();
                            continue;
                        default:
                            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                                n = 0;
                                continue
                            }
                            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                                n.label = u[1];
                                break
                            }
                            if (u[0] === 6 && n.label < o[1]) {
                                n.label = o[1], o = u;
                                break
                            }
                            if (o && n.label < o[2]) {
                                n.label = o[2], n.ops.push(u);
                                break
                            }
                            o[2] && n.ops.pop(), n.trys.pop();
                            continue
                    }
                    u = t.call(e, n)
                } catch (c) {
                    u = [6, c], i = 0
                } finally {
                    r = o = 0
                }
                if (u[0] & 5) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        },
        Sd = q && q.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(nr, "__esModule", {
        value: !0
    }), nr.LogTierV1EventProcessor = void 0;
    var Id = ae,
        Xt = ui,
        kd = Sd(fi),
        Td = _n,
        Ld = Oe,
        Aa = Id.getLogger("LogTierV1EventProcessor"),
        Rd = function() {
            function e(t) {
                var n = t.dispatcher,
                    r = t.flushInterval,
                    i = r === void 0 ? Xt.DEFAULT_FLUSH_INTERVAL : r,
                    o = t.batchSize,
                    a = o === void 0 ? Xt.DEFAULT_BATCH_SIZE : o,
                    s = t.notificationCenter;
                this.dispatcher = n, this.notificationCenter = s, this.requestTracker = new kd.default, i = Xt.validateAndGetFlushInterval(i), a = Xt.validateAndGetBatchSize(a), this.queue = Xt.getQueue(a, i, this.drainQueue.bind(this), Td.areEventContextsEqual)
            }
            return e.prototype.drainQueue = function(t) {
                var n = this,
                    r = new Promise(function(i) {
                        if (Aa.debug("draining queue with %s events", t.length), t.length === 0) {
                            i();
                            return
                        }
                        var o = Ld.formatEvents(t);
                        n.dispatcher.dispatchEvent(o, function() {
                            i()
                        }), Xt.sendEventNotification(n.notificationCenter, o)
                    });
                return this.requestTracker.trackRequest(r), r
            }, e.prototype.process = function(t) {
                this.queue.enqueue(t)
            }, e.prototype.stop = function() {
                try {
                    return this.queue.stop(), this.requestTracker.onRequestsComplete()
                } catch (t) {
                    Aa.error('Error stopping EventProcessor: "%s"', t.message, t)
                }
                return Promise.resolve()
            }, e.prototype.start = function() {
                return xd(this, void 0, void 0, function() {
                    return Cd(this, function(t) {
                        return this.queue.start(), [2]
                    })
                })
            }, e
        }();
    nr.LogTierV1EventProcessor = Rd,
        function(e) {
            var t = q && q.__createBinding || (Object.create ? function(r, i, o, a) {
                    a === void 0 && (a = o), Object.defineProperty(r, a, {
                        enumerable: !0,
                        get: function() {
                            return i[o]
                        }
                    })
                } : function(r, i, o, a) {
                    a === void 0 && (a = o), r[a] = i[o]
                }),
                n = q && q.__exportStar || function(r, i) {
                    for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(_n, e), n(ui, e), n(Ea, e), n(xa, e), n(Zt, e), n(Oe, e), n(nr, e)
        }(nd);
    var rr = {
            exports: {}
        },
        Ua = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (Ua) {
        var Oa = new Uint8Array(16);
        rr.exports = function() {
            return Ua(Oa), Oa
        }
    } else {
        var Da = new Array(16);
        rr.exports = function() {
            for (var t = 0, n; t < 16; t++)(t & 3) === 0 && (n = Math.random() * 4294967296), Da[t] = n >>> ((t & 3) << 3) & 255;
            return Da
        }
    }
    for (var Pa = [], ir = 0; ir < 256; ++ir) Pa[ir] = (ir + 256).toString(16).substr(1);

    function Ad(e, t) {
        var n = t || 0,
            r = Pa;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    var Na = Ad,
        Ud = rr.exports,
        Od = Na,
        Ma, pi, hi = 0,
        vi = 0;

    function Dd(e, t, n) {
        var r = t && n || 0,
            i = t || [];
        e = e || {};
        var o = e.node || Ma,
            a = e.clockseq !== void 0 ? e.clockseq : pi;
        if (o == null || a == null) {
            var s = Ud();
            o == null && (o = Ma = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]), a == null && (a = pi = (s[6] << 8 | s[7]) & 16383)
        }
        var l = e.msecs !== void 0 ? e.msecs : new Date().getTime(),
            u = e.nsecs !== void 0 ? e.nsecs : vi + 1,
            c = l - hi + (u - vi) / 1e4;
        if (c < 0 && e.clockseq === void 0 && (a = a + 1 & 16383), (c < 0 || l > hi) && e.nsecs === void 0 && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        hi = l, vi = u, pi = a, l += 122192928e5;
        var d = ((l & 268435455) * 1e4 + u) % 4294967296;
        i[r++] = d >>> 24 & 255, i[r++] = d >>> 16 & 255, i[r++] = d >>> 8 & 255, i[r++] = d & 255;
        var f = l / 4294967296 * 1e4 & 268435455;
        i[r++] = f >>> 8 & 255, i[r++] = f & 255, i[r++] = f >>> 24 & 15 | 16, i[r++] = f >>> 16 & 255, i[r++] = a >>> 8 | 128, i[r++] = a & 255;
        for (var p = 0; p < 6; ++p) i[r + p] = o[p];
        return t || Od(i)
    }
    var Pd = Dd,
        Nd = rr.exports,
        Md = Na;

    function Vd(e, t, n) {
        var r = t && n || 0;
        typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
        var i = e.random || (e.rng || Nd)();
        if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
            for (var o = 0; o < 16; ++o) t[r + o] = i[o];
        return t || Md(i)
    }
    var jd = Vd,
        Bd = Pd,
        Va = jd,
        ja = Va;
    ja.v1 = Bd, ja.v4 = Va;
    var Fd = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(i, o) {
                for (var a = i.length, s = o ^ a, l = 0, u; a >= 4;) u = i.charCodeAt(l) & 255 | (i.charCodeAt(++l) & 255) << 8 | (i.charCodeAt(++l) & 255) << 16 | (i.charCodeAt(++l) & 255) << 24, u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16), u ^= u >>> 24, u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16), s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16) ^ u, a -= 4, ++l;
                switch (a) {
                    case 3:
                        s ^= (i.charCodeAt(l + 2) & 255) << 16;
                    case 2:
                        s ^= (i.charCodeAt(l + 1) & 255) << 8;
                    case 1:
                        s ^= i.charCodeAt(l) & 255, s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16)
                }
                return s ^= s >>> 13, s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16), s ^= s >>> 15, s >>> 0
            }

            function n(i, o) {
                var a, s, l, u, c, d, f, p;
                for (a = i.length & 3, s = i.length - a, l = o, c = 3432918353, d = 461845907, p = 0; p < s;) f = i.charCodeAt(p) & 255 | (i.charCodeAt(++p) & 255) << 8 | (i.charCodeAt(++p) & 255) << 16 | (i.charCodeAt(++p) & 255) << 24, ++p, f = (f & 65535) * c + (((f >>> 16) * c & 65535) << 16) & 4294967295, f = f << 15 | f >>> 17, f = (f & 65535) * d + (((f >>> 16) * d & 65535) << 16) & 4294967295, l ^= f, l = l << 13 | l >>> 19, u = (l & 65535) * 5 + (((l >>> 16) * 5 & 65535) << 16) & 4294967295, l = (u & 65535) + 27492 + (((u >>> 16) + 58964 & 65535) << 16);
                switch (f = 0, a) {
                    case 3:
                        f ^= (i.charCodeAt(p + 2) & 255) << 16;
                    case 2:
                        f ^= (i.charCodeAt(p + 1) & 255) << 8;
                    case 1:
                        f ^= i.charCodeAt(p) & 255, f = (f & 65535) * c + (((f >>> 16) * c & 65535) << 16) & 4294967295, f = f << 15 | f >>> 17, f = (f & 65535) * d + (((f >>> 16) * d & 65535) << 16) & 4294967295, l ^= f
                }
                return l ^= i.length, l ^= l >>> 16, l = (l & 65535) * 2246822507 + (((l >>> 16) * 2246822507 & 65535) << 16) & 4294967295, l ^= l >>> 13, l = (l & 65535) * 3266489909 + (((l >>> 16) * 3266489909 & 65535) << 16) & 4294967295, l ^= l >>> 16, l >>> 0
            }
            var r = n;
            r.v2 = t, r.v3 = n, e.exports = r
        })()
    })(Fd);
    var Ba = {},
        mi = {},
        gi = {},
        He = {};
    Object.defineProperty(He, "__esModule", {
        value: !0
    }), He.DEFAULT_UPDATE_INTERVAL = 5 * 60 * 1e3, He.MIN_UPDATE_INTERVAL = 1e3, He.DEFAULT_URL_TEMPLATE = "https://cdn.optimizely.com/datafiles/%s.json", He.DEFAULT_AUTHENTICATED_URL_TEMPLATE = "https://config.optimizely.com/datafiles/auth/%s.json", He.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT = [0, 8, 16, 32, 64, 128, 256, 512], He.REQUEST_TIMEOUT_MS = 60 * 1e3, Object.defineProperty(gi, "__esModule", {
        value: !0
    });
    var Hd = He,
        $d = ae,
        Kd = $d.getLogger("DatafileManager"),
        qd = "GET",
        Gd = 4;

    function zd(e) {
        var t = e.getAllResponseHeaders();
        if (t === null) return {};
        var n = t.split(`\r
`),
            r = {};
        return n.forEach(function(i) {
            var o = i.indexOf(": ");
            if (o > -1) {
                var a = i.slice(0, o),
                    s = i.slice(o + 2);
                s.length > 0 && (r[a] = s)
            }
        }), r
    }

    function Wd(e, t) {
        Object.keys(e).forEach(function(n) {
            var r = e[n];
            t.setRequestHeader(n, r)
        })
    }

    function Yd(e, t) {
        var n = new XMLHttpRequest,
            r = new Promise(function(i, o) {
                n.open(qd, e, !0), Wd(t, n), n.onreadystatechange = function() {
                    if (n.readyState === Gd) {
                        var a = n.status;
                        if (a === 0) {
                            o(new Error("Request error"));
                            return
                        }
                        var s = zd(n),
                            l = {
                                statusCode: n.status,
                                body: n.responseText,
                                headers: s
                            };
                        i(l)
                    }
                }, n.timeout = Hd.REQUEST_TIMEOUT_MS, n.ontimeout = function() {
                    Kd.error("Request timed out")
                }, n.send()
            });
        return {
            responsePromise: r,
            abort: function() {
                n.abort()
            }
        }
    }
    gi.makeGetRequest = Yd;
    var yi = {},
        _i = {};
    Object.defineProperty(_i, "__esModule", {
        value: !0
    });
    var Qd = function() {
        function e() {
            this.listeners = {}, this.listenerId = 1
        }
        return e.prototype.on = function(t, n) {
            var r = this;
            this.listeners[t] || (this.listeners[t] = {});
            var i = String(this.listenerId);
            return this.listenerId++, this.listeners[t][i] = n,
                function() {
                    r.listeners[t] && delete r.listeners[t][i]
                }
        }, e.prototype.emit = function(t, n) {
            var r = this.listeners[t];
            r && Object.keys(r).forEach(function(i) {
                var o = r[i];
                o(n)
            })
        }, e.prototype.removeAllListeners = function() {
            this.listeners = {}
        }, e
    }();
    _i.default = Qd;
    var wi = {};
    Object.defineProperty(wi, "__esModule", {
        value: !0
    });
    var bi = He;

    function Zd() {
        return Math.round(Math.random() * 1e3)
    }
    var Xd = function() {
        function e() {
            this.errorCount = 0
        }
        return e.prototype.getDelay = function() {
            if (this.errorCount === 0) return 0;
            var t = bi.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT[Math.min(bi.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1, this.errorCount)];
            return t * 1e3 + Zd()
        }, e.prototype.countError = function() {
            this.errorCount < bi.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1 && this.errorCount++
        }, e.prototype.reset = function() {
            this.errorCount = 0
        }, e
    }();
    wi.default = Xd;
    var or = q && q.__assign || function() {
            return or = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }, or.apply(this, arguments)
        },
        Fa = q && q.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(yi, "__esModule", {
        value: !0
    });
    var Jd = ae,
        ef = Yt,
        tf = Fa(_i),
        wn = He,
        nf = Fa(wi),
        Ie = Jd.getLogger("DatafileManager"),
        rf = "update";

    function of (e) {
        return e >= wn.MIN_UPDATE_INTERVAL
    }

    function Ha(e) {
        return e >= 200 && e < 400
    }
    var af = {
            get: function() {
                return Promise.resolve("")
            },
            set: function() {
                return Promise.resolve()
            },
            contains: function() {
                return Promise.resolve(!1)
            },
            remove: function() {
                return Promise.resolve()
            }
        },
        sf = function() {
            function e(t) {
                var n = this,
                    r = or(or({}, this.getConfigDefaults()), t),
                    i = r.datafile,
                    o = r.autoUpdate,
                    a = o === void 0 ? !1 : o,
                    s = r.sdkKey,
                    l = r.updateInterval,
                    u = l === void 0 ? wn.DEFAULT_UPDATE_INTERVAL : l,
                    c = r.urlTemplate,
                    d = c === void 0 ? wn.DEFAULT_URL_TEMPLATE : c,
                    f = r.cache,
                    p = f === void 0 ? af : f;
                this.cache = p, this.cacheKey = "opt-datafile-" + s, this.isReadyPromiseSettled = !1, this.readyPromiseResolver = function() {}, this.readyPromiseRejecter = function() {}, this.readyPromise = new Promise(function(v, h) {
                    n.readyPromiseResolver = v, n.readyPromiseRejecter = h
                }), i ? (this.currentDatafile = i, s || this.resolveReadyPromise()) : this.currentDatafile = "", this.isStarted = !1, this.datafileUrl = ef.sprintf(d, s), this.emitter = new tf.default, this.autoUpdate = a, of (u) ? this.updateInterval = u : (Ie.warn("Invalid updateInterval %s, defaulting to %s", u, wn.DEFAULT_UPDATE_INTERVAL), this.updateInterval = wn.DEFAULT_UPDATE_INTERVAL), this.currentTimeout = null, this.currentRequest = null, this.backoffController = new nf.default, this.syncOnCurrentRequestComplete = !1
            }
            return e.prototype.get = function() {
                return this.currentDatafile
            }, e.prototype.start = function() {
                this.isStarted || (Ie.debug("Datafile manager started"), this.isStarted = !0, this.backoffController.reset(), this.setDatafileFromCacheIfAvailable(), this.syncDatafile())
            }, e.prototype.stop = function() {
                return Ie.debug("Datafile manager stopped"), this.isStarted = !1, this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), this.emitter.removeAllListeners(), this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null), Promise.resolve()
            }, e.prototype.onReady = function() {
                return this.readyPromise
            }, e.prototype.on = function(t, n) {
                return this.emitter.on(t, n)
            }, e.prototype.onRequestRejected = function(t) {
                !this.isStarted || (this.backoffController.countError(), t instanceof Error ? Ie.error("Error fetching datafile: %s", t.message, t) : typeof t == "string" ? Ie.error("Error fetching datafile: %s", t) : Ie.error("Error fetching datafile"))
            }, e.prototype.onRequestResolved = function(t) {
                if (!!this.isStarted) {
                    typeof t.statusCode < "u" && Ha(t.statusCode) ? this.backoffController.reset() : this.backoffController.countError(), this.trySavingLastModified(t.headers);
                    var n = this.getNextDatafileFromResponse(t);
                    if (n !== "")
                        if (Ie.info("Updating datafile from response"), this.currentDatafile = n, this.cache.set(this.cacheKey, n), !this.isReadyPromiseSettled) this.resolveReadyPromise();
                        else {
                            var r = {
                                datafile: n
                            };
                            this.emitter.emit(rf, r)
                        }
                }
            }, e.prototype.onRequestComplete = function() {
                !this.isStarted || (this.currentRequest = null, !this.isReadyPromiseSettled && !this.autoUpdate && this.rejectReadyPromise(new Error("Failed to become ready")), this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(), this.syncOnCurrentRequestComplete = !1)
            }, e.prototype.syncDatafile = function() {
                var t = this,
                    n = {};
                this.lastResponseLastModified && (n["if-modified-since"] = this.lastResponseLastModified), Ie.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                    return JSON.stringify(n)
                }), this.currentRequest = this.makeGetRequest(this.datafileUrl, n);
                var r = function() {
                        t.onRequestComplete()
                    },
                    i = function(a) {
                        t.onRequestResolved(a)
                    },
                    o = function(a) {
                        t.onRequestRejected(a)
                    };
                this.currentRequest.responsePromise.then(i, o).then(r, r), this.autoUpdate && this.scheduleNextUpdate()
            }, e.prototype.resolveReadyPromise = function() {
                this.readyPromiseResolver(), this.isReadyPromiseSettled = !0
            }, e.prototype.rejectReadyPromise = function(t) {
                this.readyPromiseRejecter(t), this.isReadyPromiseSettled = !0
            }, e.prototype.scheduleNextUpdate = function() {
                var t = this,
                    n = this.backoffController.getDelay(),
                    r = Math.max(n, this.updateInterval);
                Ie.debug("Scheduling sync in %s ms", r), this.currentTimeout = setTimeout(function() {
                    t.currentRequest ? t.syncOnCurrentRequestComplete = !0 : t.syncDatafile()
                }, r)
            }, e.prototype.getNextDatafileFromResponse = function(t) {
                return Ie.debug("Response status code: %s", t.statusCode), typeof t.statusCode > "u" || t.statusCode === 304 ? "" : Ha(t.statusCode) ? t.body : ""
            }, e.prototype.trySavingLastModified = function(t) {
                var n = t["last-modified"] || t["Last-Modified"];
                typeof n < "u" && (this.lastResponseLastModified = n, Ie.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
            }, e.prototype.setDatafileFromCacheIfAvailable = function() {
                var t = this;
                this.cache.get(this.cacheKey).then(function(n) {
                    t.isStarted && !t.isReadyPromiseSettled && n !== "" && (Ie.debug("Using datafile from cache"), t.currentDatafile = n, t.resolveReadyPromise())
                })
            }, e
        }();
    yi.default = sf;
    var lf = q && q.__extends || function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(r, i) {
                    r.__proto__ = i
                } || function(r, i) {
                    for (var o in i) i.hasOwnProperty(o) && (r[o] = i[o])
                }, e(t, n)
            };
            return function(t, n) {
                e(t, n);

                function r() {
                    this.constructor = t
                }
                t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        uf = q && q.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(mi, "__esModule", {
        value: !0
    });
    var cf = gi,
        df = uf(yi),
        ff = function(e) {
            lf(t, e);

            function t() {
                return e !== null && e.apply(this, arguments) || this
            }
            return t.prototype.makeGetRequest = function(n, r) {
                return cf.makeGetRequest(n, r)
            }, t.prototype.getConfigDefaults = function() {
                return {
                    autoUpdate: !1
                }
            }, t
        }(df.default);
    mi.default = ff, Object.defineProperty(Ba, "__esModule", {
        value: !0
    });
    var pf = mi;
    Ba.HttpPollingDatafileManager = pf.default;
    var hf = {
            NOTSET: 0,
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4
        },
        vf = {
            CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
            DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
            EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
            FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
            IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
            INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
            INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
            INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
            INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
            INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
            INVALID_JSON: "%s: JSON object is not valid.",
            INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
            INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
            INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
            INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
            INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
            INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
            INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
            INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
            INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
            INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
            NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
            NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
            NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
            UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
            UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
            UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
            USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
            USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
            USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
            VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
            VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
            VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
            INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
            INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
            INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
        },
        mf = {
            ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
            DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
            DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
            DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
            EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
            EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
            FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
            FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
            FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
            FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
            FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
            FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
            INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
            INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
            INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
            INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
            INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
            NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
            NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
            NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
            NOT_TRACKING_USER: "%s: Not tracking user %s.",
            PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
            PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
            RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
            ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
            SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
            SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
            SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
            SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
            TRACK_EVENT: "%s: Tracking event %s for user %s.",
            UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
            USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
            USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
            USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
            USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
            USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
            USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
            USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
            USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
            USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
            USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
            USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
            USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
            USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
            USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
            USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
            USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
            USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
            USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
            USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
            USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
            FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
            VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
            USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
            VALID_DATAFILE: "%s: Datafile is valid.",
            VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
            VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
            VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
            VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
            BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
            EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
            EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
            AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
            AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
            MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
            UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
            UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
            UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
            UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
            OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
            UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
        },
        gf = {
            BOT_FILTERING: "$opt_bot_filtering",
            BUCKETING_ID: "$opt_bucketing_id",
            STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
            USER_AGENT: "$opt_user_agent",
            FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
        },
        yf = "javascript-sdk",
        _f = "node-sdk",
        wf = "react-sdk",
        bf = "react-native-sdk",
        Ef = "react-native-js-sdk",
        xf = "4.9.4",
        Cf = "4.9.4",
        Sf = {
            AB_TEST: "ab-test",
            FEATURE: "feature",
            FEATURE_TEST: "feature-test",
            FEATURE_VARIABLE: "feature-variable",
            ALL_FEATURE_VARIABLES: "all-feature-variables",
            FLAG: "flag"
        },
        If = {
            FEATURE_TEST: "feature-test",
            ROLLOUT: "rollout",
            EXPERIMENT: "experiment"
        },
        kf = {
            RULE: "rule",
            EXPERIMENT: "experiment"
        },
        Tf = {
            BOOLEAN: "boolean",
            DOUBLE: "double",
            INTEGER: "integer",
            STRING: "string",
            JSON: "json"
        },
        ar = {
            V2: "2",
            V3: "3",
            V4: "4"
        },
        Lf = {
            SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
            FLAG_KEY_INVALID: 'No flag was found for key "%s".',
            VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
        },
        Ei;
    (function(e) {
        e.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event", e.DECISION = "DECISION:type, userId, attributes, decisionInfo", e.LOG_EVENT = "LOG_EVENT:logEvent", e.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE", e.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
    })(Ei || (Ei = {}));
    var Rf = Object.freeze({
        __proto__: null,
        LOG_LEVEL: hf,
        ERROR_MESSAGES: vf,
        LOG_MESSAGES: mf,
        CONTROL_ATTRIBUTES: gf,
        JAVASCRIPT_CLIENT_ENGINE: yf,
        NODE_CLIENT_ENGINE: _f,
        REACT_CLIENT_ENGINE: wf,
        REACT_NATIVE_CLIENT_ENGINE: bf,
        REACT_NATIVE_JS_CLIENT_ENGINE: Ef,
        BROWSER_CLIENT_VERSION: xf,
        NODE_CLIENT_VERSION: Cf,
        DECISION_NOTIFICATION_TYPES: Sf,
        DECISION_SOURCES: If,
        AUDIENCE_EVALUATION_TYPES: kf,
        FEATURE_VARIABLE_TYPES: Tf,
        DATAFILE_VERSIONS: ar,
        DECISION_MESSAGES: Lf,
        get NOTIFICATION_TYPES() {
            return Ei
        }
    });
    ar.V2, ar.V3, ar.V4,
        function() {
            function e() {}
            return e.prototype.log = function() {}, e
        }();

    function Af(e) {
        return new ae.ConsoleLogHandler(e)
    }
    var $a;
    (function(e) {
        e.BOOLEAN = "boolean", e.DOUBLE = "double", e.INTEGER = "integer", e.STRING = "string", e.JSON = "json"
    })($a || ($a = {}));
    var Ka;
    (function(e) {
        e.DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT", e.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY", e.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE", e.INCLUDE_REASONS = "INCLUDE_REASONS", e.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES"
    })(Ka || (Ka = {})), ae.getLogger(), ae.getLogger(), ae.getLogger(), ae.getLogger(), ae.getLogger("EVENT_BUILDER"), ae.getLogger(), ae.setLogHandler(Af()), ae.setLogLevel(ae.LogLevel.INFO);
    let sr;
    const Uf = new Uint8Array(16);

    function Of() {
        if (!sr && (sr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !sr)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return sr(Uf)
    }
    const ce = [];
    for (let e = 0; e < 256; ++e) ce.push((e + 256).toString(16).slice(1));

    function Df(e, t = 0) {
        return (ce[e[t + 0]] + ce[e[t + 1]] + ce[e[t + 2]] + ce[e[t + 3]] + "-" + ce[e[t + 4]] + ce[e[t + 5]] + "-" + ce[e[t + 6]] + ce[e[t + 7]] + "-" + ce[e[t + 8]] + ce[e[t + 9]] + "-" + ce[e[t + 10]] + ce[e[t + 11]] + ce[e[t + 12]] + ce[e[t + 13]] + ce[e[t + 14]] + ce[e[t + 15]]).toLowerCase()
    }
    const qa = {
        randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };

    function Qe(e, t, n) {
        if (qa.randomUUID && !t && !e) return qa.randomUUID();
        e = e || {};
        const r = e.random || (e.rng || Of)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
            n = n || 0;
            for (let i = 0; i < 16; ++i) t[n + i] = r[i];
            return t
        }
        return Df(r)
    }
    const Jt = "ul-app";
    var U = (e => (e.Caption = "ul-caption", e.CardContainer = "ul-card__container", e.CardMainContent = "ul-card-main-content", e.Choice = "choice", e.ChoiceCheckbox = "select-checkbox", e.ChoiceGroup = "ul-card__choices", e.ChoiceLabel = "select-label", e.ChoiceLabelContainer = "choice-label-container", e.ChoiceRadio = "select-radio", e.ChoiceTextEntryContainer = "choice-text-entry-container", e.ChoiceTextInput = "choice-text-input", e.CloseButton = "close-btn", e.CloseContainer = "close-container", e.ConsentLegalNameInput = "ul-consent-legal__name-input", e.CustomStyle = "ul-custom-style", e.DesktopSuffix = "--desktop", e.FadeInTransition = "fade-in-transition", e.LikertNumber = "likert-number", e.LikertSmiley = "likert-smiley", e.LikertStar = "likert-star", e.LoadingSpinner = "ul-loading-spinner", e.LoadingSpinnerContainer = "ul-loading-spinner-container", e.LoadingSpinnerFirst = "first", e.LoadingSpinnerFourth = "fourth", e.LoadingSpinnerSecond = "second", e.LoadingSpinnerThird = "third", e.MobileSuffix = "--mobile", e.NPSNumber = "nps-number", e.OpenTextInput = "ul-card-text__input", e.QuestionHeader = "ul-question", e.VideoCard = "ul-card--video", e.CheckmarkButton = "ul-button-checkmark", e.InactiveButton = "ul-button-inactive", e.LeftAlignButton = "ul-button-left-align", e.ButtonDisabled = "sprig-button-disabled", e.SkipButton = "ul-card-skip__button", e))(U || {});
    const xi = "#e6e6e6",
        bn = "#bd282a",
        Pf = 500,
        Nf = 1030;
    var Ze = (e => (e.Closed = "close.click", e.Complete = "survey.completed", e.PageChange = "page.change", e.API = "api", e.Override = "override", e))(Ze || {}),
        j = (e => (e.ReplayCapture = "replay.capture", e.SDKReady = "sdk.ready", e.SurveyAppeared = "survey.appeared", e.SurveyClosed = "survey.closed", e.SurveyDimensions = "survey.dimensions", e.SurveyFadingOut = "survey.fadingOut", e.SurveyHeight = "survey.height", e.SurveyPresented = "survey.presented", e.SurveyLifeCycle = "survey.lifeCycle", e.SurveyWidth = "survey.width", e.SurveyWillClose = "survey.willClose", e.SurveyWillPresent = "survey.will.present", e.CloseSurveyOnOverlayClick = "close.survey.overlayClick", e.VisitorIDUpdated = "visitor.id.updated", e.QuestionAnswered = "question.answered", e))(j || {}),
        En = (e => (e.SurveyId = "survey.id", e))(En || {});
    const Ga = {
        SDK_READY: "sdk.ready",
        SURVEY_APPEARED: "survey.appeared",
        SURVEY_CLOSED: "survey.closed",
        SURVEY_DIMENSIONS: "survey.dimensions",
        SURVEY_FADING_OUT: "survey.fadingOut",
        SURVEY_HEIGHT: "survey.height",
        SURVEY_PRESENTED: "survey.presented",
        SURVEY_LIFE_CYCLE: "survey.lifeCycle",
        SURVEY_WILL_CLOSE: "survey.willClose",
        SURVEY_WILL_PRESENT: "survey.will.present",
        QUESTION_ANSWERED: "question.answered",
        REPLAY_CAPTURE: "replay.capture",
        CLOSE_SURVEY_ON_OVERLAY_CLICK: "close.survey.overlayClick",
        VISITOR_ID_UPDATED: "visitor.id.updated",
        DATA: {
            DISMISS_REASONS: {
                API: "api",
                CLOSED: "close.click",
                COMPLETE: "survey.completed",
                PAGE_CHANGE: "page.change",
                OVERRIDE: "override"
            },
            SURVEY_ID: "survey.id"
        }
    };
    var ke = (e => (e.VerifyViewVersion = "verify.view.version", e.CurrentQuestion = "survey.question", e.ViewPrototypeClick = "question.prototype.click", e.ViewAgreementClick = "question.agreement.click", e.RecordedTaskStart = "recorded.task.start", e.RecordedTaskPermissionScreen = "recorded.task.permission.screen", e.SurveyComplete = "survey.complete", e))(ke || {}),
        Rt = (e => (e.ViewVersion = "view.version", e.QuestionId = "qid", e.Props = "props", e))(Rt || {}),
        Te = (e => (e.Video = "video", e.Audio = "audio", e.Screen = "screen", e))(Te || {}),
        fe = (e => (e.PermissionStatus = "permission.status", e.AvPermission = "av.permission", e.ScreenPermission = "screen.permission", e.BeginRecording = "begin.recording", e.StartTask = "start.task", e.FinishTask = "finish.task", e))(fe || {}),
        Le = (e => (e.Abandoned = "abandoned", e.GivenUp = "given.up", e.Completed = "completed", e))(Le || {}),
        $ = (e => (e.ScreenPermissionRequested = "screen.permission.requested", e.PermissionDescriptors = "permission.descriptors", e.PermissionStatusCallback = "permission.status.callback", e.StreamReadyCallback = "stream.ready.callback", e.StreamCanceledCallback = "stream.canceled.callback", e.TaskCompleteCallback = "task.complete.callback", e.TaskResponse = "task.response", e.TaskStatus = "task.status", e.RecordingMediaTypes = "recording.media.types", e.StartRecordingCallback = "start.recording.callback", e.PassthroughData = "passthrough.data", e.CurrentIndex = "current.index", e.UploadCallback = "upload.callback", e.ProgressCallback = "progress.callback", e.BeginCallback = "begin.callback", e))($ || {}),
        _e = (e => (e.Preview = "sprig.previewKey", e.Credentials = "userleap.ids", e.PageViews = "userleap.pageviews", e))(_e || {});
    const za = () => {
            try {
                return window.parent.Intercom
            } catch (e) {
                return console.error(e), null
            }
        },
        Wa = [Object.freeze(Object.defineProperty({
            __proto__: null,
            enable: () => {
                const e = za();
                !e || (e.ul_wasVisible && e("update", {
                    hide_default_launcher: !1
                }), delete e.ul_wasVisible)
            },
            disable: () => {
                const e = za();
                !e || (e.ul_wasVisible = !!document.querySelector("iframe.intercom-launcher-frame"), e.ul_wasVisible && e("update", {
                    hide_default_launcher: !0
                }))
            }
        }, Symbol.toStringTag, {
            value: "Module"
        }))];
    class Ci {
        static disable() {
            Wa.forEach(t => t.disable())
        }
        static enable() {
            Wa.forEach(t => t.enable())
        }
    }
    const Mf = 1,
        Ya = e => e instanceof HTMLElement || e instanceof SVGElement,
        Qa = (e, t, n) => {
            const r = e.createElement("style");
            n && (r.nonce = n), r.textContent = t, r.id = U.CustomStyle, e.head.appendChild(r)
        },
        Za = () => {
            try {
                return window.parent.innerWidth
            } catch {
                return window.innerWidth
            }
        },
        Xa = e => {
            const t = e.querySelector(`.${U.CardContainer}`);
            let n = 600,
                r = 360;
            if (t) {
                n = t.scrollHeight;
                const i = getComputedStyle(t),
                    o = parseFloat(i.marginTop) + parseFloat(i.marginBottom),
                    a = parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth);
                n += o + a, r = t.scrollWidth;
                const s = parseFloat(i.marginLeft) + parseFloat(i.marginRight),
                    l = parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth);
                r += s + l
            }
            return [n + Mf, Math.min(r, Za())]
        },
        Vf = e => {
            const t = e.querySelector(`.${U.CardContainer}`);
            t && (t.scrollTop = 0)
        };
    var jf = class extends Error {
            constructor(e, t, n) {
                super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = e, this.type = t, this.count = n, this.name = "MaxListenersExceededWarning"
            }
        },
        Ja = class {
            static listenerCount(e, t) {
                return e.listenerCount(t)
            }
            constructor() {
                this.events = new Map, this.maxListeners = Ja.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1
            }
            _emitInternalEvent(e, t, n) {
                this.emit(e, t, n)
            }
            _getListeners(e) {
                return Array.prototype.concat.apply([], this.events.get(e)) || []
            }
            _removeListener(e, t) {
                const n = e.indexOf(t);
                return n > -1 && e.splice(n, 1), []
            }
            _wrapOnceListener(e, t) {
                const n = (...r) => (this.removeListener(e, n), t.apply(this, r));
                return Object.defineProperty(n, "name", {
                    value: t.name
                }), n
            }
            setMaxListeners(e) {
                return this.maxListeners = e, this
            }
            getMaxListeners() {
                return this.maxListeners
            }
            eventNames() {
                return Array.from(this.events.keys())
            }
            emit(e, ...t) {
                const n = this._getListeners(e);
                return n.forEach(r => {
                    r.apply(this, t)
                }), n.length > 0
            }
            addListener(e, t) {
                this._emitInternalEvent("newListener", e, t);
                const n = this._getListeners(e).concat(t);
                if (this.events.set(e, n), this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                    this.hasWarnedAboutPotentialMemoryLeak = !0;
                    const r = new jf(this, e, this.listenerCount(e));
                    console.warn(r)
                }
                return this
            }
            on(e, t) {
                return this.addListener(e, t)
            }
            once(e, t) {
                return this.addListener(e, this._wrapOnceListener(e, t))
            }
            prependListener(e, t) {
                const n = this._getListeners(e);
                if (n.length > 0) {
                    const r = [t].concat(n);
                    this.events.set(e, r)
                } else this.events.set(e, n.concat(t));
                return this
            }
            prependOnceListener(e, t) {
                return this.prependListener(e, this._wrapOnceListener(e, t))
            }
            removeListener(e, t) {
                const n = this._getListeners(e);
                return n.length > 0 && (this._removeListener(n, t), this.events.set(e, n), this._emitInternalEvent("removeListener", e, t)), this
            }
            off(e, t) {
                return this.removeListener(e, t)
            }
            removeAllListeners(e) {
                return e ? this.events.delete(e) : this.events.clear(), this
            }
            listeners(e) {
                return Array.from(this._getListeners(e))
            }
            listenerCount(e) {
                return this._getListeners(e).length
            }
            rawListeners(e) {
                return this.listeners(e)
            }
        },
        es = Ja;
    es.defaultMaxListeners = 10;
    const B = new es;
    var xn = (e => (e.BottomLeft = "bottomLeft", e.BottomRight = "bottomRight", e.Center = "center", e.TopLeft = "topLeft", e.TopRight = "topRight", e))(xn || {}),
        $e = (e => (e.Error = "x-ul-error", e.EnvironmentID = "x-ul-environment-id", e.InstallationMethod = "x-ul-installation-method", e.PartnerAnonymousId = "x-ul-anonymous-id", e.Platform = "userleap-platform", e.PreviewMode = "x-ul-preview-mode", e.UserID = "x-ul-user-id", e.VisitorID = "x-ul-visitor-id", e))($e || {}),
        At = (e => (e.Email = "email", e.Link = "link", e.Web = "web", e))(At || {}),
        ht = (e => (e.Npm = "web-npm", e.NpmBundled = "web-npm-bundled", e.Gtm = "web-gtm", e.Segment = "web-segment", e.SegmentAndroid = "android-segment", e.SegmentReactNative = "react-native-segment", e.SegmentIOS = "ios-segment", e.Snippet = "web-snippet", e))(ht || {});
    const lr = e => new Promise(t => {
            setTimeout(() => {
                t()
            }, e)
        }),
        Cn = ({
            "userleap-platform": e
        }) => e !== At.Web,
        re = (e, t) => {
            const n = t ? U.MobileSuffix : U.DesktopSuffix;
            return [e + n, e]
        },
        Bf = (e, t) => [e, `${e}__${t}`];
    class ts {
        constructor(t) {
            ue(this, "storage");
            ue(this, "tempStorage", {});
            ue(this, "isStorageAvailable");
            this.storage = window[t], this.isStorageAvailable = this.checkIfStorageAvailable()
        }
        checkIfStorageAvailable() {
            try {
                const t = "__storage_test__";
                return this.storage.setItem(t, t), this.storage.removeItem(t), !0
            } catch {
                return !1
            }
        }
        setItem(t, n) {
            this.isStorageAvailable ? this.storage.setItem(t, n) : this.tempStorage[t] = n
        }
        getItem(t) {
            return this.isStorageAvailable ? this.storage.getItem(t) : this.tempStorage[t]
        }
        removeItem(t) {
            this.isStorageAvailable ? this.storage.removeItem(t) : delete this.tempStorage[t]
        }
        clear() {
            this.isStorageAvailable ? this.storage.clear() : this.tempStorage = {}
        }
    }
    const vt = new ts("sessionStorage"),
        we = new ts("localStorage");
    class Ff {
        constructor(t) {
            ue(this, "payload");
            ue(this, "promise");
            ue(this, "reject", () => {});
            ue(this, "resolve", () => {});
            this.payload = t, this.promise = new Promise((n, r) => {
                this.reject = r, this.resolve = n
            })
        }
        resolveRequest(t) {
            this.resolve(t)
        }
    }
    const Hf = {
        RATELIMIT_RESET_DEFAULT: 10
    };
    let ns = !1,
        rs = "",
        ur = !1,
        is = !1,
        cr = [];
    const $f = e => e._config && e._config.installationMethod ? e._config.installationMethod : e._gtm ? ht.Gtm : e._segment ? ht.Segment : ht.Snippet,
        Si = e => {
            var t;
            (t = e == null ? void 0 : e.blockedURI) != null && t.includes(window.UserLeap._API_URL) && (is = !0, console.warn(`[Sprig] ${e.blockedURI} is blocked by Content-Security-Policy`), document.removeEventListener("securitypolicyviolation", Si))
        },
        Ii = (e = "") => {
            ns = !0, rs = e
        };

    function en(e = {}) {
        const t = {
            "Content-Type": "application/json",
            "userleap-platform": At.Web,
            "x-ul-sdk-version": "2.26.0",
            [$e.InstallationMethod]: $f(e)
        };
        if (e.envId && (t[$e.EnvironmentID] = e.envId), e.token && (t.Authorization = "Bearer " + e.token), e.userId && (t[$e.UserID] = e.userId), e.visitorId && (t[$e.VisitorID] = e.visitorId), e.partnerAnonymousId && (t[$e.PartnerAnonymousId] = e.partnerAnonymousId), e.mobileHeadersJSON) {
            const n = JSON.parse(e.mobileHeadersJSON);
            Object.assign(t, n)
        }
        return e.locale && (t["accept-language"] = e.locale), window.previewMode && (t[$e.PreviewMode] = "1"), t
    }
    const os = async (e, t, n) => {
            if (e) return {
                status: 429
            }; {
                const r = new Ff(n);
                return cr.push(r), r.promise
            }
        },
        Xe = async (e, t, n = 0, r = !1, i = !1) => {
            const o = {
                url: e,
                options: t,
                attempt: n,
                shouldDropOnRateLimit: r
            };
            if (ur && !i) return os(r, i, o);
            const a = {
                ok: !1,
                reportError: !1
            };
            if (ns) return console.info(`UserLeap - ${rs}`), a;
            try {
                t.headers = Object.assign(en(), t.headers);
                const s = await fetch(e, t);
                if (s.status === 429)
                    if (!ur && !r || i) {
                        ur = !0;
                        const u = s.headers.has("ratelimit-reset") ? Number(s.headers.get("ratelimit-reset")) : Hf.RATELIMIT_RESET_DEFAULT;
                        return await lr(u * 1e3), Xe(e, t, 0, r, !0)
                    } else return os(r, !1, o);
                if (ur = !1, cr.length && (cr.map(l => {
                        const {
                            url: u,
                            options: c,
                            attempt: d,
                            shouldDropOnRateLimit: f
                        } = l.payload;
                        Xe(u, c, d, f).then(p => {
                            l.resolveRequest(p)
                        })
                    }), cr = []), s.ok) {
                    if (s.status === 249) return Ii(), a;
                    const l = await s.text();
                    try {
                        return l && l !== "OK" && (s.json = JSON.parse(l)), s
                    } catch {
                        return {
                            ok: !1,
                            reportError: !1,
                            error: new Error(`failed parsing response json for ${e} - ${l}`)
                        }
                    }
                }
                return s
            } catch (s) {
                const l = n + 1;
                return l > 5 || is ? {
                    ok: !1,
                    reportError: !1,
                    error: s
                } : (await lr(Math.pow(2, n) * 1e3), Xe(e, t, l))
            }
        };
    var as = {
        exports: {}
    };
    (function(e, t) {
        (function(n, r) {
            e.exports = r()
        })(q, function() {
            var n = function(o, a) {
                if (a = a || {}, typeof o != "function") throw new i("fetch must be a function");
                if (typeof a != "object") throw new i("defaults must be an object");
                if (a.retries !== void 0 && !r(a.retries)) throw new i("retries must be a positive integer");
                if (a.retryDelay !== void 0 && !r(a.retryDelay) && typeof a.retryDelay != "function") throw new i("retryDelay must be a positive integer or a function returning a positive integer");
                if (a.retryOn !== void 0 && !Array.isArray(a.retryOn) && typeof a.retryOn != "function") throw new i("retryOn property expects an array or function");
                var s = {
                    retries: 3,
                    retryDelay: 1e3,
                    retryOn: []
                };
                return a = Object.assign(s, a),
                    function(u, c) {
                        var d = a.retries,
                            f = a.retryDelay,
                            p = a.retryOn;
                        if (c && c.retries !== void 0)
                            if (r(c.retries)) d = c.retries;
                            else throw new i("retries must be a positive integer");
                        if (c && c.retryDelay !== void 0)
                            if (r(c.retryDelay) || typeof c.retryDelay == "function") f = c.retryDelay;
                            else throw new i("retryDelay must be a positive integer or a function returning a positive integer");
                        if (c && c.retryOn)
                            if (Array.isArray(c.retryOn) || typeof c.retryOn == "function") p = c.retryOn;
                            else throw new i("retryOn property expects an array or function");
                        return new Promise(function(v, h) {
                            var g = function(w) {
                                var E = typeof Request < "u" && u instanceof Request ? u.clone() : u;
                                o(E, c).then(function(b) {
                                    if (Array.isArray(p) && p.indexOf(b.status) === -1) v(b);
                                    else if (typeof p == "function") try {
                                        return Promise.resolve(p(w, null, b)).then(function(m) {
                                            m ? _(w, null, b) : v(b)
                                        }).catch(h)
                                    } catch (m) {
                                        h(m)
                                    } else w < d ? _(w, null, b) : v(b)
                                }).catch(function(b) {
                                    if (typeof p == "function") try {
                                        Promise.resolve(p(w, b, null)).then(function(m) {
                                            m ? _(w, b, null) : h(b)
                                        }).catch(function(m) {
                                            h(m)
                                        })
                                    } catch (m) {
                                        h(m)
                                    } else w < d ? _(w, b, null) : h(b)
                                })
                            };

                            function _(w, E, b) {
                                var m = typeof f == "function" ? f(w, E, b) : f;
                                setTimeout(function() {
                                    g(++w)
                                }, m)
                            }
                            g(0)
                        })
                    }
            };

            function r(o) {
                return Number.isInteger(o) && o >= 0
            }

            function i(o) {
                this.name = "ArgumentError", this.message = o
            }
            return n
        })
    })(as);
    const Kf = as.exports;
    class qf {
        constructor(t) {
            ue(this, "awaitingResolvers", []);
            ue(this, "activeCount", 0);
            this.capacity = t
        }
        async acquire() {
            if (this.activeCount < this.capacity) {
                this.activeCount++;
                return
            }
            return new Promise(t => {
                this.awaitingResolvers.push(t)
            })
        }
        release() {
            const t = this.awaitingResolvers.shift();
            t && this.activeCount <= this.capacity ? t() : this.activeCount--
        }
        async execute(t) {
            try {
                return await this.acquire(), await t()
            } finally {
                this.release()
            }
        }
        setLimit(t) {
            this.capacity = t
        }
    }
    const ss = new qf(2),
        Gf = e => ss.setLimit(e),
        zf = Kf(fetch),
        Wf = async (e, t = 3) => ss.execute(async () => {
            const r = (await zf(e.uploadUrl, {
                body: e.data,
                method: "PUT",
                retries: t,
                retryDelay: i => Math.pow(2, i) * 1e3
            })).headers.get("ETag");
            if (!r) throw new Error(`Upload response did not include etag for upload ${e.uploadId}, part ${e.chunkIndex}`);
            return r
        }),
        ls = async ({
            apiUrl: e,
            surveyId: t,
            uploadId: n,
            etags: r,
            headers: i,
            responseGroupUuid: o,
            replayDuration: a,
            eventDigest: s
        }, l = !1) => {
            var u;
            if (!(!l && !n && !r)) return Xe(`${e}/sdk/1/completeSessionReplay`, {
                method: "POST",
                body: JSON.stringify({
                    etags: r,
                    uploadId: n,
                    responseGroupUuid: o,
                    surveyId: t,
                    replayDuration: a,
                    eventDigest: s,
                    userAgent: (u = window == null ? void 0 : window.navigator) == null ? void 0 : u.userAgent
                }),
                headers: i
            })
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var K = function() {
        return K = Object.assign || function(t) {
            for (var n, r = 1, i = arguments.length; r < i; r++) {
                n = arguments[r];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }, K.apply(this, arguments)
    };

    function ki(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
        return e.concat(o || Array.prototype.slice.call(t))
    }
    var Y = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
        ne = Object.keys,
        pe = Array.isArray;
    typeof Promise < "u" && !Y.Promise && (Y.Promise = Promise);

    function ve(e, t) {
        return typeof t != "object" || ne(t).forEach(function(n) {
            e[n] = t[n]
        }), e
    }
    var Sn = Object.getPrototypeOf,
        Yf = {}.hasOwnProperty;

    function be(e, t) {
        return Yf.call(e, t)
    }

    function tn(e, t) {
        typeof t == "function" && (t = t(Sn(e))), (typeof Reflect > "u" ? ne : Reflect.ownKeys)(t).forEach(function(n) {
            Je(e, n, t[n])
        })
    }
    var us = Object.defineProperty;

    function Je(e, t, n, r) {
        us(e, t, ve(n && be(n, "get") && typeof n.get == "function" ? {
            get: n.get,
            set: n.set,
            configurable: !0
        } : {
            value: n,
            configurable: !0,
            writable: !0
        }, r))
    }

    function nn(e) {
        return {
            from: function(t) {
                return e.prototype = Object.create(t.prototype), Je(e.prototype, "constructor", e), {
                    extend: tn.bind(null, e.prototype)
                }
            }
        }
    }
    var Qf = Object.getOwnPropertyDescriptor;

    function Ti(e, t) {
        var n = Qf(e, t),
            r;
        return n || (r = Sn(e)) && Ti(r, t)
    }
    var Zf = [].slice;

    function dr(e, t, n) {
        return Zf.call(e, t, n)
    }

    function cs(e, t) {
        return t(e)
    }

    function In(e) {
        if (!e) throw new Error("Assertion Failed")
    }

    function ds(e) {
        Y.setImmediate ? setImmediate(e) : setTimeout(e, 0)
    }

    function fs(e, t) {
        return e.reduce(function(n, r, i) {
            var o = t(r, i);
            return o && (n[o[0]] = o[1]), n
        }, {})
    }

    function Xf(e, t, n) {
        try {
            e.apply(null, n)
        } catch (r) {
            t && t(r)
        }
    }

    function et(e, t) {
        if (be(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
                var o = et(e, t[r]);
                n.push(o)
            }
            return n
        }
        var a = t.indexOf(".");
        if (a !== -1) {
            var s = e[t.substr(0, a)];
            return s === void 0 ? void 0 : et(s, t.substr(a + 1))
        }
    }

    function De(e, t, n) {
        if (!(!e || t === void 0) && !("isFrozen" in Object && Object.isFrozen(e)))
            if (typeof t != "string" && "length" in t) {
                In(typeof n != "string" && "length" in n);
                for (var r = 0, i = t.length; r < i; ++r) De(e, t[r], n[r])
            } else {
                var o = t.indexOf(".");
                if (o !== -1) {
                    var a = t.substr(0, o),
                        s = t.substr(o + 1);
                    if (s === "") n === void 0 ? pe(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n;
                    else {
                        var l = e[a];
                        (!l || !be(e, a)) && (l = e[a] = {}), De(l, s, n)
                    }
                } else n === void 0 ? pe(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
            }
    }

    function Jf(e, t) {
        typeof t == "string" ? De(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
            De(e, n, void 0)
        })
    }

    function ps(e) {
        var t = {};
        for (var n in e) be(e, n) && (t[n] = e[n]);
        return t
    }
    var ep = [].concat;

    function hs(e) {
        return ep.apply([], e)
    }
    var vs = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(hs([8, 16, 32, 64].map(function(e) {
            return ["Int", "Uint", "Float"].map(function(t) {
                return t + e + "Array"
            })
        }))).filter(function(e) {
            return Y[e]
        }),
        tp = vs.map(function(e) {
            return Y[e]
        });
    fs(vs, function(e) {
        return [e, !0]
    });
    var mt = null;

    function kn(e) {
        mt = typeof WeakMap < "u" && new WeakMap;
        var t = Li(e);
        return mt = null, t
    }

    function Li(e) {
        if (!e || typeof e != "object") return e;
        var t = mt && mt.get(e);
        if (t) return t;
        if (pe(e)) {
            t = [], mt && mt.set(e, t);
            for (var n = 0, r = e.length; n < r; ++n) t.push(Li(e[n]))
        } else if (tp.indexOf(e.constructor) >= 0) t = e;
        else {
            var i = Sn(e);
            t = i === Object.prototype ? {} : Object.create(i), mt && mt.set(e, t);
            for (var o in e) be(e, o) && (t[o] = Li(e[o]))
        }
        return t
    }
    var np = {}.toString;

    function Ri(e) {
        return np.call(e).slice(8, -1)
    }
    var Ai = typeof Symbol < "u" ? Symbol.iterator : "@@iterator",
        rp = typeof Ai == "symbol" ? function(e) {
            var t;
            return e != null && (t = e[Ai]) && t.apply(e)
        } : function() {
            return null
        },
        rn = {};

    function tt(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
            if (pe(e)) return e.slice();
            if (this === rn && typeof e == "string") return [e];
            if (i = rp(e)) {
                for (n = []; r = i.next(), !r.done;) n.push(r.value);
                return n
            }
            if (e == null) return [e];
            if (t = e.length, typeof t == "number") {
                for (n = new Array(t); t--;) n[t] = e[t];
                return n
            }
            return [e]
        }
        for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
        return n
    }
    var Ui = typeof Symbol < "u" ? function(e) {
            return e[Symbol.toStringTag] === "AsyncFunction"
        } : function() {
            return !1
        },
        Ke = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

    function ms(e, t) {
        Ke = e, gs = t
    }
    var gs = function() {
            return !0
        },
        ip = !new Error("").stack;

    function Ut() {
        if (ip) try {
            throw Ut.arguments, new Error
        } catch (e) {
            return e
        }
        return new Error
    }

    function Oi(e, t) {
        var n = e.stack;
        return n ? (t = t || 0, n.indexOf(e.name) === 0 && (t += (e.name + e.message).split(`
`).length), n.split(`
`).slice(t).filter(gs).map(function(r) {
            return `
` + r
        }).join("")) : ""
    }
    var op = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"],
        ys = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
        Di = op.concat(ys),
        ap = {
            VersionChanged: "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };

    function on(e, t) {
        this._e = Ut(), this.name = e, this.message = t
    }
    nn(on).from(Error).extend({
        stack: {
            get: function() {
                return this._stack || (this._stack = this.name + ": " + this.message + Oi(this._e, 2))
            }
        },
        toString: function() {
            return this.name + ": " + this.message
        }
    });

    function _s(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
            return t[n].toString()
        }).filter(function(n, r, i) {
            return i.indexOf(n) === r
        }).join(`
`)
    }

    function fr(e, t, n, r) {
        this._e = Ut(), this.failures = t, this.failedKeys = r, this.successCount = n, this.message = _s(e, t)
    }
    nn(fr).from(on);

    function Tn(e, t) {
        this._e = Ut(), this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
            return t[n]
        }), this.failuresByPos = t, this.message = _s(e, t)
    }
    nn(Tn).from(on);
    var Pi = Di.reduce(function(e, t) {
            return e[t] = t + "Error", e
        }, {}),
        sp = on,
        V = Di.reduce(function(e, t) {
            var n = t + "Error";

            function r(i, o) {
                this._e = Ut(), this.name = n, i ? typeof i == "string" ? (this.message = "" + i + (o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = i.name + " " + i.message, this.inner = i) : (this.message = ap[t] || n, this.inner = null)
            }
            return nn(r).from(sp), e[t] = r, e
        }, {});
    V.Syntax = SyntaxError, V.Type = TypeError, V.Range = RangeError;
    var ws = ys.reduce(function(e, t) {
        return e[t + "Error"] = V[t], e
    }, {});

    function lp(e, t) {
        if (!e || e instanceof on || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ws[e.name]) return e;
        var n = new ws[e.name](t || e.message, e);
        return "stack" in e && Je(n, "stack", {
            get: function() {
                return this.inner.stack
            }
        }), n
    }
    var pr = Di.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = V[t]), e
    }, {});
    pr.ModifyError = fr, pr.DexieError = on, pr.BulkError = Tn;

    function z() {}

    function Ln(e) {
        return e
    }

    function up(e, t) {
        return e == null || e === Ln ? t : function(n) {
            return t(e(n))
        }
    }

    function Ot(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function cp(e, t) {
        return e === z ? t : function() {
            var n = e.apply(this, arguments);
            n !== void 0 && (arguments[0] = n);
            var r = this.onsuccess,
                i = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var o = t.apply(this, arguments);
            return r && (this.onsuccess = this.onsuccess ? Ot(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ot(i, this.onerror) : i), o !== void 0 ? o : n
        }
    }

    function dp(e, t) {
        return e === z ? t : function() {
            e.apply(this, arguments);
            var n = this.onsuccess,
                r = this.onerror;
            this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ot(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ot(r, this.onerror) : r)
        }
    }

    function fp(e, t) {
        return e === z ? t : function(n) {
            var r = e.apply(this, arguments);
            ve(n, r);
            var i = this.onsuccess,
                o = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var a = t.apply(this, arguments);
            return i && (this.onsuccess = this.onsuccess ? Ot(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Ot(o, this.onerror) : o), r === void 0 ? a === void 0 ? void 0 : a : ve(r, a)
        }
    }

    function pp(e, t) {
        return e === z ? t : function() {
            return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments)
        }
    }

    function Ni(e, t) {
        return e === z ? t : function() {
            var n = e.apply(this, arguments);
            if (n && typeof n.then == "function") {
                for (var r = this, i = arguments.length, o = new Array(i); i--;) o[i] = arguments[i];
                return n.then(function() {
                    return t.apply(r, o)
                })
            }
            return t.apply(this, arguments)
        }
    }
    var Rn = {},
        hp = 100,
        vp = 20,
        bs = 100,
        Mi = typeof Promise > "u" ? [] : function() {
            var e = Promise.resolve();
            if (typeof crypto > "u" || !crypto.subtle) return [e, Sn(e), e];
            var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [t, Sn(t), e]
        }(),
        Vi = Mi[0],
        hr = Mi[1],
        ji = Mi[2],
        Es = hr && hr.then,
        vr = Vi && Vi.constructor,
        Bi = !!ji,
        Fi = !1,
        mp = ji ? function() {
            ji.then(_r)
        } : Y.setImmediate ? setImmediate.bind(null, _r) : Y.MutationObserver ? function() {
            var e = document.createElement("div");
            new MutationObserver(function() {
                _r(), e = null
            }).observe(e, {
                attributes: !0
            }), e.setAttribute("i", "1")
        } : function() {
            setTimeout(_r, 0)
        },
        An = function(e, t) {
            Un.push([e, t]), mr && (mp(), mr = !1)
        },
        Hi = !0,
        mr = !0,
        Dt = [],
        gr = [],
        $i = null,
        Ki = Ln,
        an = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: Us,
            pgp: !1,
            env: {},
            finalize: function() {
                this.unhandleds.forEach(function(e) {
                    try {
                        Us(e[0], e[1])
                    } catch {}
                })
            }
        },
        N = an,
        Un = [],
        Pt = 0,
        yr = [];

    function A(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this.onuncatched = z, this._lib = !1;
        var t = this._PSD = N;
        if (Ke && (this._stackHolder = Ut(), this._prev = null, this._numPrev = 0), typeof e != "function") {
            if (e !== Rn) throw new TypeError("Not a function");
            this._state = arguments[1], this._value = arguments[2], this._state === !1 && Gi(this, this._value);
            return
        }
        this._state = null, this._value = null, ++t.ref, Cs(this, e)
    }
    var qi = {
        get: function() {
            var e = N,
                t = Er;

            function n(r, i) {
                var o = this,
                    a = !e.global && (e !== N || t !== Er),
                    s = a && !nt(),
                    l = new A(function(u, c) {
                        zi(o, new xs(Cr(r, e, a, s), Cr(i, e, a, s), u, c, e))
                    });
                return Ke && ks(l, this), l
            }
            return n.prototype = Rn, n
        },
        set: function(e) {
            Je(this, "then", e && e.prototype === Rn ? qi : {
                get: function() {
                    return e
                },
                set: qi.set
            })
        }
    };
    tn(A.prototype, {
        then: qi,
        _then: function(e, t) {
            zi(this, new xs(null, null, e, t, N))
        },
        catch: function(e) {
            if (arguments.length === 1) return this.then(null, e);
            var t = arguments[0],
                n = arguments[1];
            return typeof t == "function" ? this.then(null, function(r) {
                return r instanceof t ? n(r) : wr(r)
            }) : this.then(null, function(r) {
                return r && r.name === t ? n(r) : wr(r)
            })
        },
        finally: function(e) {
            return this.then(function(t) {
                return e(), t
            }, function(t) {
                return e(), wr(t)
            })
        },
        stack: {
            get: function() {
                if (this._stack) return this._stack;
                try {
                    Fi = !0;
                    var e = Is(this, [], vp),
                        t = e.join(`
From previous: `);
                    return this._state !== null && (this._stack = t), t
                } finally {
                    Fi = !1
                }
            }
        },
        timeout: function(e, t) {
            var n = this;
            return e < 1 / 0 ? new A(function(r, i) {
                var o = setTimeout(function() {
                    return i(new V.Timeout(t))
                }, e);
                n.then(r, i).finally(clearTimeout.bind(null, o))
            }) : this
        }
    }), typeof Symbol < "u" && Symbol.toStringTag && Je(A.prototype, Symbol.toStringTag, "Dexie.Promise"), an.env = Ts();

    function xs(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i
    }
    tn(A, {
        all: function() {
            var e = tt.apply(null, arguments).map(xr);
            return new A(function(t, n) {
                e.length === 0 && t([]);
                var r = e.length;
                e.forEach(function(i, o) {
                    return A.resolve(i).then(function(a) {
                        e[o] = a, --r || t(e)
                    }, n)
                })
            })
        },
        resolve: function(e) {
            if (e instanceof A) return e;
            if (e && typeof e.then == "function") return new A(function(n, r) {
                e.then(n, r)
            });
            var t = new A(Rn, !0, e);
            return ks(t, $i), t
        },
        reject: wr,
        race: function() {
            var e = tt.apply(null, arguments).map(xr);
            return new A(function(t, n) {
                e.map(function(r) {
                    return A.resolve(r).then(t, n)
                })
            })
        },
        PSD: {
            get: function() {
                return N
            },
            set: function(e) {
                return N = e
            }
        },
        totalEchoes: {
            get: function() {
                return Er
            }
        },
        newPSD: gt,
        usePSD: ln,
        scheduler: {
            get: function() {
                return An
            },
            set: function(e) {
                An = e
            }
        },
        rejectionMapper: {
            get: function() {
                return Ki
            },
            set: function(e) {
                Ki = e
            }
        },
        follow: function(e, t) {
            return new A(function(n, r) {
                return gt(function(i, o) {
                    var a = N;
                    a.unhandleds = [], a.onunhandled = o, a.finalize = Ot(function() {
                        var s = this;
                        yp(function() {
                            s.unhandleds.length === 0 ? i() : o(s.unhandleds[0])
                        })
                    }, a.finalize), e()
                }, t, n, r)
            })
        }
    }), vr && (vr.allSettled && Je(A, "allSettled", function() {
        var e = tt.apply(null, arguments).map(xr);
        return new A(function(t) {
            e.length === 0 && t([]);
            var n = e.length,
                r = new Array(n);
            e.forEach(function(i, o) {
                return A.resolve(i).then(function(a) {
                    return r[o] = {
                        status: "fulfilled",
                        value: a
                    }
                }, function(a) {
                    return r[o] = {
                        status: "rejected",
                        reason: a
                    }
                }).then(function() {
                    return --n || t(r)
                })
            })
        })
    }), vr.any && typeof AggregateError < "u" && Je(A, "any", function() {
        var e = tt.apply(null, arguments).map(xr);
        return new A(function(t, n) {
            e.length === 0 && n(new AggregateError([]));
            var r = e.length,
                i = new Array(r);
            e.forEach(function(o, a) {
                return A.resolve(o).then(function(s) {
                    return t(s)
                }, function(s) {
                    i[a] = s, --r || n(new AggregateError(i))
                })
            })
        })
    }));

    function Cs(e, t) {
        try {
            t(function(n) {
                if (e._state === null) {
                    if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                    var r = e._lib && On();
                    n && typeof n.then == "function" ? Cs(e, function(i, o) {
                        n instanceof A ? n._then(i, o) : n.then(i, o)
                    }) : (e._state = !0, e._value = n, Ss(e)), r && Dn()
                }
            }, Gi.bind(null, e))
        } catch (n) {
            Gi(e, n)
        }
    }

    function Gi(e, t) {
        if (gr.push(t), e._state === null) {
            var n = e._lib && On();
            t = Ki(t), e._state = !1, e._value = t, Ke && t !== null && typeof t == "object" && !t._promise && Xf(function() {
                var r = Ti(t, "stack");
                t._promise = e, Je(t, "stack", {
                    get: function() {
                        return Fi ? r && (r.get ? r.get.apply(t) : r.value) : e.stack
                    }
                })
            }), _p(e), Ss(e), n && Dn()
        }
    }

    function Ss(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) zi(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), Pt === 0 && (++Pt, An(function() {
            --Pt === 0 && Wi()
        }, []))
    }

    function zi(e, t) {
        if (e._state === null) {
            e._listeners.push(t);
            return
        }
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++Pt, An(gp, [n, e, t])
    }

    function gp(e, t, n) {
        try {
            $i = t;
            var r, i = t._value;
            t._state ? r = e(i) : (gr.length && (gr = []), r = e(i), gr.indexOf(i) === -1 && wp(t)), n.resolve(r)
        } catch (o) {
            n.reject(o)
        } finally {
            $i = null, --Pt === 0 && Wi(), --n.psd.ref || n.psd.finalize()
        }
    }

    function Is(e, t, n) {
        if (t.length === n) return t;
        var r = "";
        if (e._state === !1) {
            var i = e._value,
                o, a;
            i != null ? (o = i.name || "Error", a = i.message || i, r = Oi(i, 0)) : (o = i, a = ""), t.push(o + (a ? ": " + a : "") + r)
        }
        return Ke && (r = Oi(e._stackHolder, 2), r && t.indexOf(r) === -1 && t.push(r), e._prev && Is(e._prev, t, n)), t
    }

    function ks(e, t) {
        var n = t ? t._numPrev + 1 : 0;
        n < hp && (e._prev = t, e._numPrev = n)
    }

    function _r() {
        On() && Dn()
    }

    function On() {
        var e = Hi;
        return Hi = !1, mr = !1, e
    }

    function Dn() {
        var e, t, n;
        do
            for (; Un.length > 0;)
                for (e = Un, Un = [], n = e.length, t = 0; t < n; ++t) {
                    var r = e[t];
                    r[0].apply(null, r[1])
                }
        while (Un.length > 0);
        Hi = !0, mr = !0
    }

    function Wi() {
        var e = Dt;
        Dt = [], e.forEach(function(r) {
            r._PSD.onunhandled.call(null, r._value, r)
        });
        for (var t = yr.slice(0), n = t.length; n;) t[--n]()
    }

    function yp(e) {
        function t() {
            e(), yr.splice(yr.indexOf(t), 1)
        }
        yr.push(t), ++Pt, An(function() {
            --Pt === 0 && Wi()
        }, [])
    }

    function _p(e) {
        Dt.some(function(t) {
            return t._value === e._value
        }) || Dt.push(e)
    }

    function wp(e) {
        for (var t = Dt.length; t;)
            if (Dt[--t]._value === e._value) {
                Dt.splice(t, 1);
                return
            }
    }

    function wr(e) {
        return new A(Rn, !1, e)
    }

    function J(e, t) {
        var n = N;
        return function() {
            var r = On(),
                i = N;
            try {
                return yt(n, !0), e.apply(this, arguments)
            } catch (o) {
                t && t(o)
            } finally {
                yt(i, !1), r && Dn()
            }
        }
    }
    var he = {
            awaits: 0,
            echoes: 0,
            id: 0
        },
        bp = 0,
        br = [],
        Yi = 0,
        Er = 0,
        Ep = 0;

    function gt(e, t, n, r) {
        var i = N,
            o = Object.create(i);
        o.parent = i, o.ref = 0, o.global = !1, o.id = ++Ep;
        var a = an.env;
        o.env = Bi ? {
            Promise: A,
            PromiseProp: {
                value: A,
                configurable: !0,
                writable: !0
            },
            all: A.all,
            race: A.race,
            allSettled: A.allSettled,
            any: A.any,
            resolve: A.resolve,
            reject: A.reject,
            nthen: Rs(a.nthen, o),
            gthen: Rs(a.gthen, o)
        } : {}, t && ve(o, t), ++i.ref, o.finalize = function() {
            --this.parent.ref || this.parent.finalize()
        };
        var s = ln(o, e, n, r);
        return o.ref === 0 && o.finalize(), s
    }

    function sn() {
        return he.id || (he.id = ++bp), ++he.awaits, he.echoes += bs, he.id
    }

    function nt() {
        return he.awaits ? (--he.awaits === 0 && (he.id = 0), he.echoes = he.awaits * bs, !0) : !1
    }("" + Es).indexOf("[native code]") === -1 && (sn = nt = z);

    function xr(e) {
        return he.echoes && e && e.constructor === vr ? (sn(), e.then(function(t) {
            return nt(), t
        }, function(t) {
            return nt(), ie(t)
        })) : e
    }

    function xp(e) {
        ++Er, (!he.echoes || --he.echoes === 0) && (he.echoes = he.id = 0), br.push(N), yt(e, !0)
    }

    function Cp() {
        var e = br[br.length - 1];
        br.pop(), yt(e, !1)
    }

    function yt(e, t) {
        var n = N;
        if ((t ? he.echoes && (!Yi++ || e !== N) : Yi && (!--Yi || e !== N)) && Ls(t ? xp.bind(null, e) : Cp), e !== N && (N = e, n === an && (an.env = Ts()), Bi)) {
            var r = an.env.Promise,
                i = e.env;
            hr.then = i.nthen, r.prototype.then = i.gthen, (n.global || e.global) && (Object.defineProperty(Y, "Promise", i.PromiseProp), r.all = i.all, r.race = i.race, r.resolve = i.resolve, r.reject = i.reject, i.allSettled && (r.allSettled = i.allSettled), i.any && (r.any = i.any))
        }
    }

    function Ts() {
        var e = Y.Promise;
        return Bi ? {
            Promise: e,
            PromiseProp: Object.getOwnPropertyDescriptor(Y, "Promise"),
            all: e.all,
            race: e.race,
            allSettled: e.allSettled,
            any: e.any,
            resolve: e.resolve,
            reject: e.reject,
            nthen: hr.then,
            gthen: e.prototype.then
        } : {}
    }

    function ln(e, t, n, r, i) {
        var o = N;
        try {
            return yt(e, !0), t(n, r, i)
        } finally {
            yt(o, !1)
        }
    }

    function Ls(e) {
        Es.call(Vi, e)
    }

    function Cr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
            var i = N;
            n && sn(), yt(t, !0);
            try {
                return e.apply(this, arguments)
            } finally {
                yt(i, !1), r && Ls(nt)
            }
        }
    }

    function Rs(e, t) {
        return function(n, r) {
            return e.call(this, Cr(n, t), Cr(r, t))
        }
    }
    var As = "unhandledrejection";

    function Us(e, t) {
        var n;
        try {
            n = t.onuncatched(e)
        } catch {}
        if (n !== !1) try {
            var r, i = {
                promise: t,
                reason: e
            };
            if (Y.document && document.createEvent ? (r = document.createEvent("Event"), r.initEvent(As, !0, !0), ve(r, i)) : Y.CustomEvent && (r = new CustomEvent(As, {
                    detail: i
                }), ve(r, i)), r && Y.dispatchEvent && (dispatchEvent(r), !Y.PromiseRejectionEvent && Y.onunhandledrejection)) try {
                Y.onunhandledrejection(r)
            } catch {}
            Ke && r && !r.defaultPrevented && console.warn("Unhandled rejection: " + (e.stack || e))
        } catch {}
    }
    var ie = A.reject;

    function Qi(e, t, n, r) {
        if (!e.idbdb || !e._state.openComplete && !N.letThrough && !e._vip) {
            if (e._state.openComplete) return ie(new V.DatabaseClosed(e._state.dbOpenError));
            if (!e._state.isBeingOpened) {
                if (!e._options.autoOpen) return ie(new V.DatabaseClosed);
                e.open().catch(z)
            }
            return e._state.dbReadyPromise.then(function() {
                return Qi(e, t, n, r)
            })
        } else {
            var i = e._createTransaction(t, n, e._dbSchema);
            try {
                i.create(), e._state.PR1398_maxLoop = 3
            } catch (o) {
                return o.name === Pi.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then(function() {
                    return Qi(e, t, n, r)
                })) : ie(o)
            }
            return i._promise(t, function(o, a) {
                return gt(function() {
                    return N.trans = i, r(o, a, i)
                })
            }).then(function(o) {
                return i._completion.then(function() {
                    return o
                })
            })
        }
    }
    var Os = "3.2.4",
        Nt = String.fromCharCode(65535),
        Zi = -1 / 0,
        rt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
        Ds = "String expected.",
        Pn = [],
        Sr = typeof navigator < "u" && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        Sp = Sr,
        Ip = Sr,
        Ps = function(e) {
            return !/(dexie\.js|dexie\.min\.js)/.test(e)
        },
        Ir = "__dbnames",
        Xi = "readonly",
        Ji = "readwrite";

    function Mt(e, t) {
        return e ? t ? function() {
            return e.apply(this, arguments) && t.apply(this, arguments)
        } : e : t
    }
    var Ns = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [
            []
        ],
        upperOpen: !1
    };

    function kr(e) {
        return typeof e == "string" && !/\./.test(e) ? function(t) {
            return t[e] === void 0 && e in t && (t = kn(t), delete t[e]), t
        } : function(t) {
            return t
        }
    }
    var kp = function() {
        function e() {}
        return e.prototype._trans = function(t, n, r) {
            var i = this._tx || N.trans,
                o = this.name;

            function a(l, u, c) {
                if (!c.schema[o]) throw new V.NotFound("Table " + o + " not part of transaction");
                return n(c.idbtrans, c)
            }
            var s = On();
            try {
                return i && i.db === this.db ? i === N.trans ? i._promise(t, a, r) : gt(function() {
                    return i._promise(t, a, r)
                }, {
                    trans: i,
                    transless: N.transless || N
                }) : Qi(this.db, t, [this.name], a)
            } finally {
                s && Dn()
            }
        }, e.prototype.get = function(t, n) {
            var r = this;
            return t && t.constructor === Object ? this.where(t).first(n) : this._trans("readonly", function(i) {
                return r.core.get({
                    trans: i,
                    key: t
                }).then(function(o) {
                    return r.hook.reading.fire(o)
                })
            }).then(n)
        }, e.prototype.where = function(t) {
            if (typeof t == "string") return new this.db.WhereClause(this, t);
            if (pe(t)) return new this.db.WhereClause(this, "[" + t.join("+") + "]");
            var n = ne(t);
            if (n.length === 1) return this.where(n[0]).equals(t[n[0]]);
            var r = this.schema.indexes.concat(this.schema.primKey).filter(function(c) {
                return c.compound && n.every(function(d) {
                    return c.keyPath.indexOf(d) >= 0
                }) && c.keyPath.every(function(d) {
                    return n.indexOf(d) >= 0
                })
            })[0];
            if (r && this.db._maxKey !== Nt) return this.where(r.name).equals(r.keyPath.map(function(c) {
                return t[c]
            }));
            !r && Ke && console.warn("The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a " + ("compound index [" + n.join("+") + "]"));
            var i = this.schema.idxByName,
                o = this.db._deps.indexedDB;

            function a(c, d) {
                try {
                    return o.cmp(c, d) === 0
                } catch {
                    return !1
                }
            }
            var s = n.reduce(function(c, d) {
                    var f = c[0],
                        p = c[1],
                        v = i[d],
                        h = t[d];
                    return [f || v, f || !v ? Mt(p, v && v.multi ? function(g) {
                        var _ = et(g, d);
                        return pe(_) && _.some(function(w) {
                            return a(h, w)
                        })
                    } : function(g) {
                        return a(h, et(g, d))
                    }) : p]
                }, [null, null]),
                l = s[0],
                u = s[1];
            return l ? this.where(l.name).equals(t[l.keyPath]).filter(u) : r ? this.filter(u) : this.where(n).equals("")
        }, e.prototype.filter = function(t) {
            return this.toCollection().and(t)
        }, e.prototype.count = function(t) {
            return this.toCollection().count(t)
        }, e.prototype.offset = function(t) {
            return this.toCollection().offset(t)
        }, e.prototype.limit = function(t) {
            return this.toCollection().limit(t)
        }, e.prototype.each = function(t) {
            return this.toCollection().each(t)
        }, e.prototype.toArray = function(t) {
            return this.toCollection().toArray(t)
        }, e.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this))
        }, e.prototype.orderBy = function(t) {
            return new this.db.Collection(new this.db.WhereClause(this, pe(t) ? "[" + t.join("+") + "]" : t))
        }, e.prototype.reverse = function() {
            return this.toCollection().reverse()
        }, e.prototype.mapToClass = function(t) {
            this.schema.mappedClass = t;
            var n = function(r) {
                if (!r) return r;
                var i = Object.create(t.prototype);
                for (var o in r)
                    if (be(r, o)) try {
                        i[o] = r[o]
                    } catch {}
                return i
            };
            return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = n, this.hook("reading", n), t
        }, e.prototype.defineClass = function() {
            function t(n) {
                ve(this, n)
            }
            return this.mapToClass(t)
        }, e.prototype.add = function(t, n) {
            var r = this,
                i = this.schema.primKey,
                o = i.auto,
                a = i.keyPath,
                s = t;
            return a && o && (s = kr(a)(t)), this._trans("readwrite", function(l) {
                return r.core.mutate({
                    trans: l,
                    type: "add",
                    keys: n != null ? [n] : null,
                    values: [s]
                })
            }).then(function(l) {
                return l.numFailures ? A.reject(l.failures[0]) : l.lastResult
            }).then(function(l) {
                if (a) try {
                    De(t, a, l)
                } catch {}
                return l
            })
        }, e.prototype.update = function(t, n) {
            if (typeof t == "object" && !pe(t)) {
                var r = et(t, this.schema.primKey.keyPath);
                if (r === void 0) return ie(new V.InvalidArgument("Given object does not contain its primary key"));
                try {
                    typeof n != "function" ? ne(n).forEach(function(i) {
                        De(t, i, n[i])
                    }) : n(t, {
                        value: t,
                        primKey: r
                    })
                } catch {}
                return this.where(":id").equals(r).modify(n)
            } else return this.where(":id").equals(t).modify(n)
        }, e.prototype.put = function(t, n) {
            var r = this,
                i = this.schema.primKey,
                o = i.auto,
                a = i.keyPath,
                s = t;
            return a && o && (s = kr(a)(t)), this._trans("readwrite", function(l) {
                return r.core.mutate({
                    trans: l,
                    type: "put",
                    values: [s],
                    keys: n != null ? [n] : null
                })
            }).then(function(l) {
                return l.numFailures ? A.reject(l.failures[0]) : l.lastResult
            }).then(function(l) {
                if (a) try {
                    De(t, a, l)
                } catch {}
                return l
            })
        }, e.prototype.delete = function(t) {
            var n = this;
            return this._trans("readwrite", function(r) {
                return n.core.mutate({
                    trans: r,
                    type: "delete",
                    keys: [t]
                })
            }).then(function(r) {
                return r.numFailures ? A.reject(r.failures[0]) : void 0
            })
        }, e.prototype.clear = function() {
            var t = this;
            return this._trans("readwrite", function(n) {
                return t.core.mutate({
                    trans: n,
                    type: "deleteRange",
                    range: Ns
                })
            }).then(function(n) {
                return n.numFailures ? A.reject(n.failures[0]) : void 0
            })
        }, e.prototype.bulkGet = function(t) {
            var n = this;
            return this._trans("readonly", function(r) {
                return n.core.getMany({
                    keys: t,
                    trans: r
                }).then(function(i) {
                    return i.map(function(o) {
                        return n.hook.reading.fire(o)
                    })
                })
            })
        }, e.prototype.bulkAdd = function(t, n, r) {
            var i = this,
                o = Array.isArray(n) ? n : void 0;
            r = r || (o ? void 0 : n);
            var a = r ? r.allKeys : void 0;
            return this._trans("readwrite", function(s) {
                var l = i.schema.primKey,
                    u = l.auto,
                    c = l.keyPath;
                if (c && o) throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== t.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
                var d = t.length,
                    f = c && u ? t.map(kr(c)) : t;
                return i.core.mutate({
                    trans: s,
                    type: "add",
                    keys: o,
                    values: f,
                    wantResults: a
                }).then(function(p) {
                    var v = p.numFailures,
                        h = p.results,
                        g = p.lastResult,
                        _ = p.failures,
                        w = a ? h : g;
                    if (v === 0) return w;
                    throw new Tn(i.name + ".bulkAdd(): " + v + " of " + d + " operations failed", _)
                })
            })
        }, e.prototype.bulkPut = function(t, n, r) {
            var i = this,
                o = Array.isArray(n) ? n : void 0;
            r = r || (o ? void 0 : n);
            var a = r ? r.allKeys : void 0;
            return this._trans("readwrite", function(s) {
                var l = i.schema.primKey,
                    u = l.auto,
                    c = l.keyPath;
                if (c && o) throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== t.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
                var d = t.length,
                    f = c && u ? t.map(kr(c)) : t;
                return i.core.mutate({
                    trans: s,
                    type: "put",
                    keys: o,
                    values: f,
                    wantResults: a
                }).then(function(p) {
                    var v = p.numFailures,
                        h = p.results,
                        g = p.lastResult,
                        _ = p.failures,
                        w = a ? h : g;
                    if (v === 0) return w;
                    throw new Tn(i.name + ".bulkPut(): " + v + " of " + d + " operations failed", _)
                })
            })
        }, e.prototype.bulkDelete = function(t) {
            var n = this,
                r = t.length;
            return this._trans("readwrite", function(i) {
                return n.core.mutate({
                    trans: i,
                    type: "delete",
                    keys: t
                })
            }).then(function(i) {
                var o = i.numFailures,
                    a = i.lastResult,
                    s = i.failures;
                if (o === 0) return a;
                throw new Tn(n.name + ".bulkDelete(): " + o + " of " + r + " operations failed", s)
            })
        }, e
    }();

    function Nn(e) {
        var t = {},
            n = function(s, l) {
                if (l) {
                    for (var u = arguments.length, c = new Array(u - 1); --u;) c[u - 1] = arguments[u];
                    return t[s].subscribe.apply(null, c), e
                } else if (typeof s == "string") return t[s]
            };
        n.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
        return n;

        function o(s, l, u) {
            if (typeof s == "object") return a(s);
            l || (l = pp), u || (u = z);
            var c = {
                subscribers: [],
                fire: u,
                subscribe: function(d) {
                    c.subscribers.indexOf(d) === -1 && (c.subscribers.push(d), c.fire = l(c.fire, d))
                },
                unsubscribe: function(d) {
                    c.subscribers = c.subscribers.filter(function(f) {
                        return f !== d
                    }), c.fire = c.subscribers.reduce(l, u)
                }
            };
            return t[s] = n[s] = c, c
        }

        function a(s) {
            ne(s).forEach(function(l) {
                var u = s[l];
                if (pe(u)) o(l, s[l][0], s[l][1]);
                else if (u === "asap") var c = o(l, Ln, function() {
                    for (var f = arguments.length, p = new Array(f); f--;) p[f] = arguments[f];
                    c.subscribers.forEach(function(v) {
                        ds(function() {
                            v.apply(null, p)
                        })
                    })
                });
                else throw new V.InvalidArgument("Invalid event config")
            })
        }
    }

    function Mn(e, t) {
        return nn(t).from({
            prototype: e
        }), t
    }

    function Tp(e) {
        return Mn(kp.prototype, function(n, r, i) {
            this.db = e, this._tx = i, this.name = n, this.schema = r, this.hook = e._allTables[n] ? e._allTables[n].hook : Nn(null, {
                creating: [cp, z],
                reading: [up, Ln],
                updating: [fp, z],
                deleting: [dp, z]
            })
        })
    }

    function un(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
    }

    function eo(e, t) {
        e.filter = Mt(e.filter, t)
    }

    function to(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
            return Mt(r(), t())
        } : t, e.justLimit = n && !r
    }

    function Lp(e, t) {
        e.isMatch = Mt(e.isMatch, t)
    }

    function Tr(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new V.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n
    }

    function Ms(e, t, n) {
        var r = Tr(e, t.schema);
        return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: e.dir === "prev",
            unique: !!e.unique,
            query: {
                index: r,
                range: e.range
            }
        })
    }

    function Lr(e, t, n, r) {
        var i = e.replayFilter ? Mt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
            var o = {},
                a = function(s, l, u) {
                    if (!i || i(l, u, function(f) {
                            return l.stop(f)
                        }, function(f) {
                            return l.fail(f)
                        })) {
                        var c = l.primaryKey,
                            d = "" + c;
                        d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(c)), be(o, d) || (o[d] = !0, t(s, l, u))
                    }
                };
            return Promise.all([e.or._iterate(a, n), Vs(Ms(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])
        } else return Vs(Ms(e, r, n), Mt(e.algorithm, i), t, !e.keysOnly && e.valueMapper)
    }

    function Vs(e, t, n, r) {
        var i = r ? function(a, s, l) {
                return n(r(a), s, l)
            } : n,
            o = J(i);
        return e.then(function(a) {
            if (a) return a.start(function() {
                var s = function() {
                    return a.continue()
                };
                (!t || t(a, function(l) {
                    return s = l
                }, function(l) {
                    a.stop(l), s = z
                }, function(l) {
                    a.fail(l), s = z
                })) && o(a.value, a, function(l) {
                    return s = l
                }), s()
            })
        })
    }

    function me(e, t) {
        try {
            var n = js(e),
                r = js(t);
            if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
            switch (n) {
                case "number":
                case "Date":
                case "string":
                    return e > t ? 1 : e < t ? -1 : 0;
                case "binary":
                    return Ap(Bs(e), Bs(t));
                case "Array":
                    return Rp(e, t)
            }
        } catch {}
        return NaN
    }

    function Rp(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o) {
            var a = me(e[o], t[o]);
            if (a !== 0) return a
        }
        return n === r ? 0 : n < r ? -1 : 1
    }

    function Ap(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o)
            if (e[o] !== t[o]) return e[o] < t[o] ? -1 : 1;
        return n === r ? 0 : n < r ? -1 : 1
    }

    function js(e) {
        var t = typeof e;
        if (t !== "object") return t;
        if (ArrayBuffer.isView(e)) return "binary";
        var n = Ri(e);
        return n === "ArrayBuffer" ? "binary" : n
    }

    function Bs(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e)
    }
    var Up = function() {
            function e() {}
            return e.prototype._read = function(t, n) {
                var r = this._ctx;
                return r.error ? r.table._trans(null, ie.bind(null, r.error)) : r.table._trans("readonly", t).then(n)
            }, e.prototype._write = function(t) {
                var n = this._ctx;
                return n.error ? n.table._trans(null, ie.bind(null, n.error)) : n.table._trans("readwrite", t, "locked")
            }, e.prototype._addAlgorithm = function(t) {
                var n = this._ctx;
                n.algorithm = Mt(n.algorithm, t)
            }, e.prototype._iterate = function(t, n) {
                return Lr(this._ctx, t, n, this._ctx.table.core)
            }, e.prototype.clone = function(t) {
                var n = Object.create(this.constructor.prototype),
                    r = Object.create(this._ctx);
                return t && ve(r, t), n._ctx = r, n
            }, e.prototype.raw = function() {
                return this._ctx.valueMapper = null, this
            }, e.prototype.each = function(t) {
                var n = this._ctx;
                return this._read(function(r) {
                    return Lr(n, t, r, n.table.core)
                })
            }, e.prototype.count = function(t) {
                var n = this;
                return this._read(function(r) {
                    var i = n._ctx,
                        o = i.table.core;
                    if (un(i, !0)) return o.count({
                        trans: r,
                        query: {
                            index: Tr(i, o.schema),
                            range: i.range
                        }
                    }).then(function(s) {
                        return Math.min(s, i.limit)
                    });
                    var a = 0;
                    return Lr(i, function() {
                        return ++a, !1
                    }, r, o).then(function() {
                        return a
                    })
                }).then(t)
            }, e.prototype.sortBy = function(t, n) {
                var r = t.split(".").reverse(),
                    i = r[0],
                    o = r.length - 1;

                function a(u, c) {
                    return c ? a(u[r[c]], c - 1) : u[i]
                }
                var s = this._ctx.dir === "next" ? 1 : -1;

                function l(u, c) {
                    var d = a(u, o),
                        f = a(c, o);
                    return d < f ? -s : d > f ? s : 0
                }
                return this.toArray(function(u) {
                    return u.sort(l)
                }).then(n)
            }, e.prototype.toArray = function(t) {
                var n = this;
                return this._read(function(r) {
                    var i = n._ctx;
                    if (i.dir === "next" && un(i, !0) && i.limit > 0) {
                        var o = i.valueMapper,
                            a = Tr(i, i.table.core.schema);
                        return i.table.core.query({
                            trans: r,
                            limit: i.limit,
                            values: !0,
                            query: {
                                index: a,
                                range: i.range
                            }
                        }).then(function(l) {
                            var u = l.result;
                            return o ? u.map(o) : u
                        })
                    } else {
                        var s = [];
                        return Lr(i, function(l) {
                            return s.push(l)
                        }, r, i.table.core).then(function() {
                            return s
                        })
                    }
                }, t)
            }, e.prototype.offset = function(t) {
                var n = this._ctx;
                return t <= 0 ? this : (n.offset += t, un(n) ? to(n, function() {
                    var r = t;
                    return function(i, o) {
                        return r === 0 ? !0 : r === 1 ? (--r, !1) : (o(function() {
                            i.advance(r), r = 0
                        }), !1)
                    }
                }) : to(n, function() {
                    var r = t;
                    return function() {
                        return --r < 0
                    }
                }), this)
            }, e.prototype.limit = function(t) {
                return this._ctx.limit = Math.min(this._ctx.limit, t), to(this._ctx, function() {
                    var n = t;
                    return function(r, i, o) {
                        return --n <= 0 && i(o), n >= 0
                    }
                }, !0), this
            }, e.prototype.until = function(t, n) {
                return eo(this._ctx, function(r, i, o) {
                    return t(r.value) ? (i(o), n) : !0
                }), this
            }, e.prototype.first = function(t) {
                return this.limit(1).toArray(function(n) {
                    return n[0]
                }).then(t)
            }, e.prototype.last = function(t) {
                return this.reverse().first(t)
            }, e.prototype.filter = function(t) {
                return eo(this._ctx, function(n) {
                    return t(n.value)
                }), Lp(this._ctx, t), this
            }, e.prototype.and = function(t) {
                return this.filter(t)
            }, e.prototype.or = function(t) {
                return new this.db.WhereClause(this._ctx.table, t, this)
            }, e.prototype.reverse = function() {
                return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
            }, e.prototype.desc = function() {
                return this.reverse()
            }, e.prototype.eachKey = function(t) {
                var n = this._ctx;
                return n.keysOnly = !n.isMatch, this.each(function(r, i) {
                    t(i.key, i)
                })
            }, e.prototype.eachUniqueKey = function(t) {
                return this._ctx.unique = "unique", this.eachKey(t)
            }, e.prototype.eachPrimaryKey = function(t) {
                var n = this._ctx;
                return n.keysOnly = !n.isMatch, this.each(function(r, i) {
                    t(i.primaryKey, i)
                })
            }, e.prototype.keys = function(t) {
                var n = this._ctx;
                n.keysOnly = !n.isMatch;
                var r = [];
                return this.each(function(i, o) {
                    r.push(o.key)
                }).then(function() {
                    return r
                }).then(t)
            }, e.prototype.primaryKeys = function(t) {
                var n = this._ctx;
                if (n.dir === "next" && un(n, !0) && n.limit > 0) return this._read(function(i) {
                    var o = Tr(n, n.table.core.schema);
                    return n.table.core.query({
                        trans: i,
                        values: !1,
                        limit: n.limit,
                        query: {
                            index: o,
                            range: n.range
                        }
                    })
                }).then(function(i) {
                    var o = i.result;
                    return o
                }).then(t);
                n.keysOnly = !n.isMatch;
                var r = [];
                return this.each(function(i, o) {
                    r.push(o.primaryKey)
                }).then(function() {
                    return r
                }).then(t)
            }, e.prototype.uniqueKeys = function(t) {
                return this._ctx.unique = "unique", this.keys(t)
            }, e.prototype.firstKey = function(t) {
                return this.limit(1).keys(function(n) {
                    return n[0]
                }).then(t)
            }, e.prototype.lastKey = function(t) {
                return this.reverse().firstKey(t)
            }, e.prototype.distinct = function() {
                var t = this._ctx,
                    n = t.index && t.table.schema.idxByName[t.index];
                if (!n || !n.multi) return this;
                var r = {};
                return eo(this._ctx, function(i) {
                    var o = i.primaryKey.toString(),
                        a = be(r, o);
                    return r[o] = !0, !a
                }), this
            }, e.prototype.modify = function(t) {
                var n = this,
                    r = this._ctx;
                return this._write(function(i) {
                    var o;
                    if (typeof t == "function") o = t;
                    else {
                        var a = ne(t),
                            s = a.length;
                        o = function(_) {
                            for (var w = !1, E = 0; E < s; ++E) {
                                var b = a[E],
                                    m = t[b];
                                et(_, b) !== m && (De(_, b, m), w = !0)
                            }
                            return w
                        }
                    }
                    var l = r.table.core,
                        u = l.schema.primaryKey,
                        c = u.outbound,
                        d = u.extractKey,
                        f = n.db._options.modifyChunkSize || 200,
                        p = [],
                        v = 0,
                        h = [],
                        g = function(_, w) {
                            var E = w.failures,
                                b = w.numFailures;
                            v += _ - b;
                            for (var m = 0, x = ne(E); m < x.length; m++) {
                                var k = x[m];
                                p.push(E[k])
                            }
                        };
                    return n.clone().primaryKeys().then(function(_) {
                        var w = function(E) {
                            var b = Math.min(f, _.length - E);
                            return l.getMany({
                                trans: i,
                                keys: _.slice(E, E + b),
                                cache: "immutable"
                            }).then(function(m) {
                                for (var x = [], k = [], C = c ? [] : null, I = [], R = 0; R < b; ++R) {
                                    var O = m[R],
                                        T = {
                                            value: kn(O),
                                            primKey: _[E + R]
                                        };
                                    o.call(T, T.value, T) !== !1 && (T.value == null ? I.push(_[E + R]) : !c && me(d(O), d(T.value)) !== 0 ? (I.push(_[E + R]), x.push(T.value)) : (k.push(T.value), c && C.push(_[E + R])))
                                }
                                var D = un(r) && r.limit === 1 / 0 && (typeof t != "function" || t === no) && {
                                    index: r.index,
                                    range: r.range
                                };
                                return Promise.resolve(x.length > 0 && l.mutate({
                                    trans: i,
                                    type: "add",
                                    values: x
                                }).then(function(W) {
                                    for (var S in W.failures) I.splice(parseInt(S), 1);
                                    g(x.length, W)
                                })).then(function() {
                                    return (k.length > 0 || D && typeof t == "object") && l.mutate({
                                        trans: i,
                                        type: "put",
                                        keys: C,
                                        values: k,
                                        criteria: D,
                                        changeSpec: typeof t != "function" && t
                                    }).then(function(W) {
                                        return g(k.length, W)
                                    })
                                }).then(function() {
                                    return (I.length > 0 || D && t === no) && l.mutate({
                                        trans: i,
                                        type: "delete",
                                        keys: I,
                                        criteria: D
                                    }).then(function(W) {
                                        return g(I.length, W)
                                    })
                                }).then(function() {
                                    return _.length > E + b && w(E + f)
                                })
                            })
                        };
                        return w(0).then(function() {
                            if (p.length > 0) throw new fr("Error modifying one or more objects", p, v, h);
                            return _.length
                        })
                    })
                })
            }, e.prototype.delete = function() {
                var t = this._ctx,
                    n = t.range;
                return un(t) && (t.isPrimKey && !Ip || n.type === 3) ? this._write(function(r) {
                    var i = t.table.core.schema.primaryKey,
                        o = n;
                    return t.table.core.count({
                        trans: r,
                        query: {
                            index: i,
                            range: o
                        }
                    }).then(function(a) {
                        return t.table.core.mutate({
                            trans: r,
                            type: "deleteRange",
                            range: o
                        }).then(function(s) {
                            var l = s.failures;
                            s.lastResult, s.results;
                            var u = s.numFailures;
                            if (u) throw new fr("Could not delete some values", Object.keys(l).map(function(c) {
                                return l[c]
                            }), a - u);
                            return a - u
                        })
                    })
                }) : this.modify(no)
            }, e
        }(),
        no = function(e, t) {
            return t.value = null
        };

    function Op(e) {
        return Mn(Up.prototype, function(n, r) {
            this.db = e;
            var i = Ns,
                o = null;
            if (r) try {
                i = r()
            } catch (u) {
                o = u
            }
            var a = n._ctx,
                s = a.table,
                l = s.hook.reading.fire;
            this._ctx = {
                table: s,
                index: a.index,
                isPrimKey: !a.index || s.schema.primKey.keyPath && a.index === s.schema.primKey.name,
                range: i,
                keysOnly: !1,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: !0,
                isMatch: null,
                offset: 0,
                limit: 1 / 0,
                error: o,
                or: a.or,
                valueMapper: l !== Ln ? l : null
            }
        })
    }

    function Dp(e, t) {
        return e < t ? -1 : e === t ? 0 : 1
    }

    function Pp(e, t) {
        return e > t ? -1 : e === t ? 0 : 1
    }

    function Ee(e, t, n) {
        var r = e instanceof Hs ? new e.Collection(e) : e;
        return r._ctx.error = n ? new n(t) : new TypeError(t), r
    }

    function cn(e) {
        return new e.Collection(e, function() {
            return Fs("")
        }).limit(0)
    }

    function Np(e) {
        return e === "next" ? function(t) {
            return t.toUpperCase()
        } : function(t) {
            return t.toLowerCase()
        }
    }

    function Mp(e) {
        return e === "next" ? function(t) {
            return t.toLowerCase()
        } : function(t) {
            return t.toUpperCase()
        }
    }

    function Vp(e, t, n, r, i, o) {
        for (var a = Math.min(e.length, r.length), s = -1, l = 0; l < a; ++l) {
            var u = t[l];
            if (u !== r[l]) return i(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : i(e[l], r[l]) < 0 ? e.substr(0, l) + r[l] + n.substr(l + 1) : s >= 0 ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
            i(e[l], u) < 0 && (s = l)
        }
        return a < r.length && o === "next" ? e + n.substr(e.length) : a < e.length && o === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1)
    }

    function Rr(e, t, n, r) {
        var i, o, a, s, l, u, c, d = n.length;
        if (!n.every(function(h) {
                return typeof h == "string"
            })) return Ee(e, Ds);

        function f(h) {
            i = Np(h), o = Mp(h), a = h === "next" ? Dp : Pp;
            var g = n.map(function(_) {
                return {
                    lower: o(_),
                    upper: i(_)
                }
            }).sort(function(_, w) {
                return a(_.lower, w.lower)
            });
            s = g.map(function(_) {
                return _.upper
            }), l = g.map(function(_) {
                return _.lower
            }), u = h, c = h === "next" ? "" : r
        }
        f("next");
        var p = new e.Collection(e, function() {
            return _t(s[0], l[d - 1] + r)
        });
        p._ondirectionchange = function(h) {
            f(h)
        };
        var v = 0;
        return p._addAlgorithm(function(h, g, _) {
            var w = h.key;
            if (typeof w != "string") return !1;
            var E = o(w);
            if (t(E, l, v)) return !0;
            for (var b = null, m = v; m < d; ++m) {
                var x = Vp(w, E, s[m], l[m], a, u);
                x === null && b === null ? v = m + 1 : (b === null || a(b, x) > 0) && (b = x)
            }
            return g(b !== null ? function() {
                h.continue(b + c)
            } : _), !1
        }), p
    }

    function _t(e, t, n, r) {
        return {
            type: 2,
            lower: e,
            upper: t,
            lowerOpen: n,
            upperOpen: r
        }
    }

    function Fs(e) {
        return {
            type: 1,
            lower: e,
            upper: e
        }
    }
    var Hs = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "Collection", {
            get: function() {
                return this._ctx.table.db.Collection
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.between = function(t, n, r, i) {
            r = r !== !1, i = i === !0;
            try {
                return this._cmp(t, n) > 0 || this._cmp(t, n) === 0 && (r || i) && !(r && i) ? cn(this) : new this.Collection(this, function() {
                    return _t(t, n, !r, !i)
                })
            } catch {
                return Ee(this, rt)
            }
        }, e.prototype.equals = function(t) {
            return t == null ? Ee(this, rt) : new this.Collection(this, function() {
                return Fs(t)
            })
        }, e.prototype.above = function(t) {
            return t == null ? Ee(this, rt) : new this.Collection(this, function() {
                return _t(t, void 0, !0)
            })
        }, e.prototype.aboveOrEqual = function(t) {
            return t == null ? Ee(this, rt) : new this.Collection(this, function() {
                return _t(t, void 0, !1)
            })
        }, e.prototype.below = function(t) {
            return t == null ? Ee(this, rt) : new this.Collection(this, function() {
                return _t(void 0, t, !1, !0)
            })
        }, e.prototype.belowOrEqual = function(t) {
            return t == null ? Ee(this, rt) : new this.Collection(this, function() {
                return _t(void 0, t)
            })
        }, e.prototype.startsWith = function(t) {
            return typeof t != "string" ? Ee(this, Ds) : this.between(t, t + Nt, !0, !0)
        }, e.prototype.startsWithIgnoreCase = function(t) {
            return t === "" ? this.startsWith(t) : Rr(this, function(n, r) {
                return n.indexOf(r[0]) === 0
            }, [t], Nt)
        }, e.prototype.equalsIgnoreCase = function(t) {
            return Rr(this, function(n, r) {
                return n === r[0]
            }, [t], "")
        }, e.prototype.anyOfIgnoreCase = function() {
            var t = tt.apply(rn, arguments);
            return t.length === 0 ? cn(this) : Rr(this, function(n, r) {
                return r.indexOf(n) !== -1
            }, t, "")
        }, e.prototype.startsWithAnyOfIgnoreCase = function() {
            var t = tt.apply(rn, arguments);
            return t.length === 0 ? cn(this) : Rr(this, function(n, r) {
                return r.some(function(i) {
                    return n.indexOf(i) === 0
                })
            }, t, Nt)
        }, e.prototype.anyOf = function() {
            var t = this,
                n = tt.apply(rn, arguments),
                r = this._cmp;
            try {
                n.sort(r)
            } catch {
                return Ee(this, rt)
            }
            if (n.length === 0) return cn(this);
            var i = new this.Collection(this, function() {
                return _t(n[0], n[n.length - 1])
            });
            i._ondirectionchange = function(a) {
                r = a === "next" ? t._ascending : t._descending, n.sort(r)
            };
            var o = 0;
            return i._addAlgorithm(function(a, s, l) {
                for (var u = a.key; r(u, n[o]) > 0;)
                    if (++o, o === n.length) return s(l), !1;
                return r(u, n[o]) === 0 ? !0 : (s(function() {
                    a.continue(n[o])
                }), !1)
            }), i
        }, e.prototype.notEqual = function(t) {
            return this.inAnyRange([
                [Zi, t],
                [t, this.db._maxKey]
            ], {
                includeLowers: !1,
                includeUppers: !1
            })
        }, e.prototype.noneOf = function() {
            var t = tt.apply(rn, arguments);
            if (t.length === 0) return new this.Collection(this);
            try {
                t.sort(this._ascending)
            } catch {
                return Ee(this, rt)
            }
            var n = t.reduce(function(r, i) {
                return r ? r.concat([
                    [r[r.length - 1][1], i]
                ]) : [
                    [Zi, i]
                ]
            }, null);
            return n.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(n, {
                includeLowers: !1,
                includeUppers: !1
            })
        }, e.prototype.inAnyRange = function(t, n) {
            var r = this,
                i = this._cmp,
                o = this._ascending,
                a = this._descending,
                s = this._min,
                l = this._max;
            if (t.length === 0) return cn(this);
            if (!t.every(function(m) {
                    return m[0] !== void 0 && m[1] !== void 0 && o(m[0], m[1]) <= 0
                })) return Ee(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
            var u = !n || n.includeLowers !== !1,
                c = n && n.includeUppers === !0;

            function d(m, x) {
                for (var k = 0, C = m.length; k < C; ++k) {
                    var I = m[k];
                    if (i(x[0], I[1]) < 0 && i(x[1], I[0]) > 0) {
                        I[0] = s(I[0], x[0]), I[1] = l(I[1], x[1]);
                        break
                    }
                }
                return k === C && m.push(x), m
            }
            var f = o;

            function p(m, x) {
                return f(m[0], x[0])
            }
            var v;
            try {
                v = t.reduce(d, []), v.sort(p)
            } catch {
                return Ee(this, rt)
            }
            var h = 0,
                g = c ? function(m) {
                    return o(m, v[h][1]) > 0
                } : function(m) {
                    return o(m, v[h][1]) >= 0
                },
                _ = u ? function(m) {
                    return a(m, v[h][0]) > 0
                } : function(m) {
                    return a(m, v[h][0]) >= 0
                };

            function w(m) {
                return !g(m) && !_(m)
            }
            var E = g,
                b = new this.Collection(this, function() {
                    return _t(v[0][0], v[v.length - 1][1], !u, !c)
                });
            return b._ondirectionchange = function(m) {
                m === "next" ? (E = g, f = o) : (E = _, f = a), v.sort(p)
            }, b._addAlgorithm(function(m, x, k) {
                for (var C = m.key; E(C);)
                    if (++h, h === v.length) return x(k), !1;
                return w(C) ? !0 : (r._cmp(C, v[h][1]) === 0 || r._cmp(C, v[h][0]) === 0 || x(function() {
                    f === o ? m.continue(v[h][0]) : m.continue(v[h][1])
                }), !1)
            }), b
        }, e.prototype.startsWithAnyOf = function() {
            var t = tt.apply(rn, arguments);
            return t.every(function(n) {
                return typeof n == "string"
            }) ? t.length === 0 ? cn(this) : this.inAnyRange(t.map(function(n) {
                return [n, n + Nt]
            })) : Ee(this, "startsWithAnyOf() only works with strings")
        }, e
    }();

    function jp(e) {
        return Mn(Hs.prototype, function(n, r, i) {
            this.db = e, this._ctx = {
                table: n,
                index: r === ":id" ? null : r,
                or: i
            };
            var o = e._deps.indexedDB;
            if (!o) throw new V.MissingAPI;
            this._cmp = this._ascending = o.cmp.bind(o), this._descending = function(a, s) {
                return o.cmp(s, a)
            }, this._max = function(a, s) {
                return o.cmp(a, s) > 0 ? a : s
            }, this._min = function(a, s) {
                return o.cmp(a, s) < 0 ? a : s
            }, this._IDBKeyRange = e._deps.IDBKeyRange
        })
    }

    function qe(e) {
        return J(function(t) {
            return Vn(t), e(t.target.error), !1
        })
    }

    function Vn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
    }
    var jn = "storagemutated",
        wt = "x-storagemutated-1",
        bt = Nn(null, jn),
        Bp = function() {
            function e() {}
            return e.prototype._lock = function() {
                return In(!N.global), ++this._reculock, this._reculock === 1 && !N.global && (N.lockOwnerFor = this), this
            }, e.prototype._unlock = function() {
                if (In(!N.global), --this._reculock === 0)
                    for (N.global || (N.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
                        var t = this._blockedFuncs.shift();
                        try {
                            ln(t[1], t[0])
                        } catch {}
                    }
                return this
            }, e.prototype._locked = function() {
                return this._reculock && N.lockOwnerFor !== this
            }, e.prototype.create = function(t) {
                var n = this;
                if (!this.mode) return this;
                var r = this.db.idbdb,
                    i = this.db._state.dbOpenError;
                if (In(!this.idbtrans), !t && !r) switch (i && i.name) {
                    case "DatabaseClosedError":
                        throw new V.DatabaseClosed(i);
                    case "MissingAPIError":
                        throw new V.MissingAPI(i.message, i);
                    default:
                        throw new V.OpenFailed(i)
                }
                if (!this.active) throw new V.TransactionInactive;
                return In(this._completion._state === null), t = this.idbtrans = t || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
                    durability: this.chromeTransactionDurability
                }) : r.transaction(this.storeNames, this.mode, {
                    durability: this.chromeTransactionDurability
                })), t.onerror = J(function(o) {
                    Vn(o), n._reject(t.error)
                }), t.onabort = J(function(o) {
                    Vn(o), n.active && n._reject(new V.Abort(t.error)), n.active = !1, n.on("abort").fire(o)
                }), t.oncomplete = J(function() {
                    n.active = !1, n._resolve(), "mutatedParts" in t && bt.storagemutated.fire(t.mutatedParts)
                }), this
            }, e.prototype._promise = function(t, n, r) {
                var i = this;
                if (t === "readwrite" && this.mode !== "readwrite") return ie(new V.ReadOnly("Transaction is readonly"));
                if (!this.active) return ie(new V.TransactionInactive);
                if (this._locked()) return new A(function(a, s) {
                    i._blockedFuncs.push([function() {
                        i._promise(t, n, r).then(a, s)
                    }, N])
                });
                if (r) return gt(function() {
                    var a = new A(function(s, l) {
                        i._lock();
                        var u = n(s, l, i);
                        u && u.then && u.then(s, l)
                    });
                    return a.finally(function() {
                        return i._unlock()
                    }), a._lib = !0, a
                });
                var o = new A(function(a, s) {
                    var l = n(a, s, i);
                    l && l.then && l.then(a, s)
                });
                return o._lib = !0, o
            }, e.prototype._root = function() {
                return this.parent ? this.parent._root() : this
            }, e.prototype.waitFor = function(t) {
                var n = this._root(),
                    r = A.resolve(t);
                if (n._waitingFor) n._waitingFor = n._waitingFor.then(function() {
                    return r
                });
                else {
                    n._waitingFor = r, n._waitingQueue = [];
                    var i = n.idbtrans.objectStore(n.storeNames[0]);
                    (function a() {
                        for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
                        n._waitingFor && (i.get(-1 / 0).onsuccess = a)
                    })()
                }
                var o = n._waitingFor;
                return new A(function(a, s) {
                    r.then(function(l) {
                        return n._waitingQueue.push(J(a.bind(null, l)))
                    }, function(l) {
                        return n._waitingQueue.push(J(s.bind(null, l)))
                    }).finally(function() {
                        n._waitingFor === o && (n._waitingFor = null)
                    })
                })
            }, e.prototype.abort = function() {
                this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new V.Abort))
            }, e.prototype.table = function(t) {
                var n = this._memoizedTables || (this._memoizedTables = {});
                if (be(n, t)) return n[t];
                var r = this.schema[t];
                if (!r) throw new V.NotFound("Table " + t + " not part of transaction");
                var i = new this.db.Table(t, r, this);
                return i.core = this.db.core.table(t), n[t] = i, i
            }, e
        }();

    function Fp(e) {
        return Mn(Bp.prototype, function(n, r, i, o, a) {
            var s = this;
            this.db = e, this.mode = n, this.storeNames = r, this.schema = i, this.chromeTransactionDurability = o, this.idbtrans = null, this.on = Nn(this, "complete", "error", "abort"), this.parent = a || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new A(function(l, u) {
                s._resolve = l, s._reject = u
            }), this._completion.then(function() {
                s.active = !1, s.on.complete.fire()
            }, function(l) {
                var u = s.active;
                return s.active = !1, s.on.error.fire(l), s.parent ? s.parent._reject(l) : u && s.idbtrans && s.idbtrans.abort(), ie(l)
            })
        })
    }

    function ro(e, t, n, r, i, o, a) {
        return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: o,
            src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + $s(t)
        }
    }

    function $s(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
    }

    function Ks(e, t, n) {
        return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: fs(n, function(r) {
                return [r.name, r]
            })
        }
    }

    function Hp(e) {
        return e.length === 1 ? e[0] : e
    }
    var Bn = function(e) {
        try {
            return e.only([
                []
            ]), Bn = function() {
                return [
                    []
                ]
            }, [
                []
            ]
        } catch {
            return Bn = function() {
                return Nt
            }, Nt
        }
    };

    function io(e) {
        return e == null ? function() {} : typeof e == "string" ? $p(e) : function(t) {
            return et(t, e)
        }
    }

    function $p(e) {
        var t = e.split(".");
        return t.length === 1 ? function(n) {
            return n[e]
        } : function(n) {
            return et(n, e)
        }
    }

    function qs(e) {
        return [].slice.call(e)
    }
    var Kp = 0;

    function Fn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[" + e.join("+") + "]"
    }

    function qp(e, t, n) {
        function r(d, f) {
            var p = qs(d.objectStoreNames);
            return {
                schema: {
                    name: d.name,
                    tables: p.map(function(v) {
                        return f.objectStore(v)
                    }).map(function(v) {
                        var h = v.keyPath,
                            g = v.autoIncrement,
                            _ = pe(h),
                            w = h == null,
                            E = {},
                            b = {
                                name: v.name,
                                primaryKey: {
                                    name: null,
                                    isPrimaryKey: !0,
                                    outbound: w,
                                    compound: _,
                                    keyPath: h,
                                    autoIncrement: g,
                                    unique: !0,
                                    extractKey: io(h)
                                },
                                indexes: qs(v.indexNames).map(function(m) {
                                    return v.index(m)
                                }).map(function(m) {
                                    var x = m.name,
                                        k = m.unique,
                                        C = m.multiEntry,
                                        I = m.keyPath,
                                        R = pe(I),
                                        O = {
                                            name: x,
                                            compound: R,
                                            keyPath: I,
                                            unique: k,
                                            multiEntry: C,
                                            extractKey: io(I)
                                        };
                                    return E[Fn(I)] = O, O
                                }),
                                getIndexByKeyPath: function(m) {
                                    return E[Fn(m)]
                                }
                            };
                        return E[":id"] = b.primaryKey, h != null && (E[Fn(h)] = b.primaryKey), b
                    })
                },
                hasGetAll: p.length > 0 && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            }
        }

        function i(d) {
            if (d.type === 3) return null;
            if (d.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
            var f = d.lower,
                p = d.upper,
                v = d.lowerOpen,
                h = d.upperOpen,
                g = f === void 0 ? p === void 0 ? null : t.upperBound(p, !!h) : p === void 0 ? t.lowerBound(f, !!v) : t.bound(f, p, !!v, !!h);
            return g
        }

        function o(d) {
            var f = d.name;

            function p(g) {
                var _ = g.trans,
                    w = g.type,
                    E = g.keys,
                    b = g.values,
                    m = g.range;
                return new Promise(function(x, k) {
                    x = J(x);
                    var C = _.objectStore(f),
                        I = C.keyPath == null,
                        R = w === "put" || w === "add";
                    if (!R && w !== "delete" && w !== "deleteRange") throw new Error("Invalid operation type: " + w);
                    var O = (E || b || {
                        length: 1
                    }).length;
                    if (E && b && E.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
                    if (O === 0) return x({
                        numFailures: 0,
                        failures: {},
                        results: [],
                        lastResult: void 0
                    });
                    var T, D = [],
                        W = [],
                        S = 0,
                        X = function(We) {
                            ++S, Vn(We)
                        };
                    if (w === "deleteRange") {
                        if (m.type === 4) return x({
                            numFailures: S,
                            failures: W,
                            results: [],
                            lastResult: void 0
                        });
                        m.type === 3 ? D.push(T = C.clear()) : D.push(T = C.delete(i(m)))
                    } else {
                        var oe = R ? I ? [b, E] : [b, null] : [E, null],
                            Ue = oe[0],
                            Se = oe[1];
                        if (R)
                            for (var de = 0; de < O; ++de) D.push(T = Se && Se[de] !== void 0 ? C[w](Ue[de], Se[de]) : C[w](Ue[de])), T.onerror = X;
                        else
                            for (var de = 0; de < O; ++de) D.push(T = C[w](Ue[de])), T.onerror = X
                    }
                    var kt = function(We) {
                        var Zn = We.target.result;
                        D.forEach(function(Fe, Jr) {
                            return Fe.error != null && (W[Jr] = Fe.error)
                        }), x({
                            numFailures: S,
                            failures: W,
                            results: w === "delete" ? E : D.map(function(Fe) {
                                return Fe.result
                            }),
                            lastResult: Zn
                        })
                    };
                    T.onerror = function(We) {
                        X(We), kt(We)
                    }, T.onsuccess = kt
                })
            }

            function v(g) {
                var _ = g.trans,
                    w = g.values,
                    E = g.query,
                    b = g.reverse,
                    m = g.unique;
                return new Promise(function(x, k) {
                    x = J(x);
                    var C = E.index,
                        I = E.range,
                        R = _.objectStore(f),
                        O = C.isPrimaryKey ? R : R.index(C.name),
                        T = b ? m ? "prevunique" : "prev" : m ? "nextunique" : "next",
                        D = w || !("openKeyCursor" in O) ? O.openCursor(i(I), T) : O.openKeyCursor(i(I), T);
                    D.onerror = qe(k), D.onsuccess = J(function(W) {
                        var S = D.result;
                        if (!S) {
                            x(null);
                            return
                        }
                        S.___id = ++Kp, S.done = !1;
                        var X = S.continue.bind(S),
                            oe = S.continuePrimaryKey;
                        oe && (oe = oe.bind(S));
                        var Ue = S.advance.bind(S),
                            Se = function() {
                                throw new Error("Cursor not started")
                            },
                            de = function() {
                                throw new Error("Cursor not stopped")
                            };
                        S.trans = _, S.stop = S.continue = S.continuePrimaryKey = S.advance = Se, S.fail = J(k), S.next = function() {
                            var kt = this,
                                We = 1;
                            return this.start(function() {
                                return We-- ? kt.continue() : kt.stop()
                            }).then(function() {
                                return kt
                            })
                        }, S.start = function(kt) {
                            var We = new Promise(function(Fe, Jr) {
                                    Fe = J(Fe), D.onerror = qe(Jr), S.fail = Jr, S.stop = function(ey) {
                                        S.stop = S.continue = S.continuePrimaryKey = S.advance = de, Fe(ey)
                                    }
                                }),
                                Zn = function() {
                                    if (D.result) try {
                                        kt()
                                    } catch (Fe) {
                                        S.fail(Fe)
                                    } else S.done = !0, S.start = function() {
                                        throw new Error("Cursor behind last entry")
                                    }, S.stop()
                                };
                            return D.onsuccess = J(function(Fe) {
                                D.onsuccess = Zn, Zn()
                            }), S.continue = X, S.continuePrimaryKey = oe, S.advance = Ue, Zn(), We
                        }, x(S)
                    }, k)
                })
            }

            function h(g) {
                return function(_) {
                    return new Promise(function(w, E) {
                        w = J(w);
                        var b = _.trans,
                            m = _.values,
                            x = _.limit,
                            k = _.query,
                            C = x === 1 / 0 ? void 0 : x,
                            I = k.index,
                            R = k.range,
                            O = b.objectStore(f),
                            T = I.isPrimaryKey ? O : O.index(I.name),
                            D = i(R);
                        if (x === 0) return w({
                            result: []
                        });
                        if (g) {
                            var W = m ? T.getAll(D, C) : T.getAllKeys(D, C);
                            W.onsuccess = function(Ue) {
                                return w({
                                    result: Ue.target.result
                                })
                            }, W.onerror = qe(E)
                        } else {
                            var S = 0,
                                X = m || !("openKeyCursor" in T) ? T.openCursor(D) : T.openKeyCursor(D),
                                oe = [];
                            X.onsuccess = function(Ue) {
                                var Se = X.result;
                                if (!Se) return w({
                                    result: oe
                                });
                                if (oe.push(m ? Se.value : Se.primaryKey), ++S === x) return w({
                                    result: oe
                                });
                                Se.continue()
                            }, X.onerror = qe(E)
                        }
                    })
                }
            }
            return {
                name: f,
                schema: d,
                mutate: p,
                getMany: function(g) {
                    var _ = g.trans,
                        w = g.keys;
                    return new Promise(function(E, b) {
                        E = J(E);
                        for (var m = _.objectStore(f), x = w.length, k = new Array(x), C = 0, I = 0, R, O = function(S) {
                                var X = S.target;
                                (k[X._pos] = X.result) != null, ++I === C && E(k)
                            }, T = qe(b), D = 0; D < x; ++D) {
                            var W = w[D];
                            W != null && (R = m.get(w[D]), R._pos = D, R.onsuccess = O, R.onerror = T, ++C)
                        }
                        C === 0 && E(k)
                    })
                },
                get: function(g) {
                    var _ = g.trans,
                        w = g.key;
                    return new Promise(function(E, b) {
                        E = J(E);
                        var m = _.objectStore(f),
                            x = m.get(w);
                        x.onsuccess = function(k) {
                            return E(k.target.result)
                        }, x.onerror = qe(b)
                    })
                },
                query: h(l),
                openCursor: v,
                count: function(g) {
                    var _ = g.query,
                        w = g.trans,
                        E = _.index,
                        b = _.range;
                    return new Promise(function(m, x) {
                        var k = w.objectStore(f),
                            C = E.isPrimaryKey ? k : k.index(E.name),
                            I = i(b),
                            R = I ? C.count(I) : C.count();
                        R.onsuccess = J(function(O) {
                            return m(O.target.result)
                        }), R.onerror = qe(x)
                    })
                }
            }
        }
        var a = r(e, n),
            s = a.schema,
            l = a.hasGetAll,
            u = s.tables.map(function(d) {
                return o(d)
            }),
            c = {};
        return u.forEach(function(d) {
            return c[d.name] = d
        }), {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table: function(d) {
                var f = c[d];
                if (!f) throw new Error("Table '" + d + "' not found");
                return c[d]
            },
            MIN_KEY: -1 / 0,
            MAX_KEY: Bn(t),
            schema: s
        }
    }

    function Gp(e, t) {
        return t.reduce(function(n, r) {
            var i = r.create;
            return K(K({}, n), i(n))
        }, e)
    }

    function zp(e, t, n, r) {
        var i = n.IDBKeyRange;
        n.indexedDB;
        var o = Gp(qp(t, i, r), e.dbcore);
        return {
            dbcore: o
        }
    }

    function oo(e, t) {
        var n = e._novip,
            r = t.db,
            i = zp(n._middlewares, r, n._deps, t);
        n.core = i.dbcore, n.tables.forEach(function(o) {
            var a = o.name;
            n.core.schema.tables.some(function(s) {
                return s.name === a
            }) && (o.core = n.core.table(a), n[a] instanceof n.Table && (n[a].core = o.core))
        })
    }

    function Ar(e, t, n, r) {
        var i = e._novip;
        n.forEach(function(o) {
            var a = r[o];
            t.forEach(function(s) {
                var l = Ti(s, o);
                (!l || "value" in l && l.value === void 0) && (s === i.Transaction.prototype || s instanceof i.Transaction ? Je(s, o, {
                    get: function() {
                        return this.table(o)
                    },
                    set: function(u) {
                        us(this, o, {
                            value: u,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                }) : s[o] = new i.Table(o, a))
            })
        })
    }

    function ao(e, t) {
        var n = e._novip;
        t.forEach(function(r) {
            for (var i in r) r[i] instanceof n.Table && delete r[i]
        })
    }

    function Wp(e, t) {
        return e._cfg.version - t._cfg.version
    }

    function Yp(e, t, n, r) {
        var i = e._dbSchema,
            o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var a = o._reject.bind(o),
            s = N.transless || N;
        gt(function() {
            N.trans = o, N.transless = s, t === 0 ? (ne(i).forEach(function(l) {
                so(n, l, i[l].primKey, i[l].indexes)
            }), oo(e, n), A.follow(function() {
                return e.on.populate.fire(o)
            }).catch(a)) : Qp(e, t, o, n).catch(a)
        })
    }

    function Qp(e, t, n, r) {
        var i = e._novip,
            o = [],
            a = i._versions,
            s = i._dbSchema = uo(i, i.idbdb, r),
            l = !1,
            u = a.filter(function(d) {
                return d._cfg.version >= t
            });
        u.forEach(function(d) {
            o.push(function() {
                var f = s,
                    p = d._cfg.dbschema;
                co(i, f, r), co(i, p, r), s = i._dbSchema = p;
                var v = Gs(f, p);
                v.add.forEach(function(b) {
                    so(r, b[0], b[1].primKey, b[1].indexes)
                }), v.change.forEach(function(b) {
                    if (b.recreate) throw new V.Upgrade("Not yet support for changing primary key");
                    var m = r.objectStore(b.name);
                    b.add.forEach(function(x) {
                        return lo(m, x)
                    }), b.change.forEach(function(x) {
                        m.deleteIndex(x.name), lo(m, x)
                    }), b.del.forEach(function(x) {
                        return m.deleteIndex(x)
                    })
                });
                var h = d._cfg.contentUpgrade;
                if (h && d._cfg.version > t) {
                    oo(i, r), n._memoizedTables = {}, l = !0;
                    var g = ps(p);
                    v.del.forEach(function(b) {
                        g[b] = f[b]
                    }), ao(i, [i.Transaction.prototype]), Ar(i, [i.Transaction.prototype], ne(g), g), n.schema = g;
                    var _ = Ui(h);
                    _ && sn();
                    var w, E = A.follow(function() {
                        if (w = h(n), w && _) {
                            var b = nt.bind(null, null);
                            w.then(b, b)
                        }
                    });
                    return w && typeof w.then == "function" ? A.resolve(w) : E.then(function() {
                        return w
                    })
                }
            }), o.push(function(f) {
                if (!l || !Sp) {
                    var p = d._cfg.dbschema;
                    Xp(p, f)
                }
                ao(i, [i.Transaction.prototype]), Ar(i, [i.Transaction.prototype], i._storeNames, i._dbSchema), n.schema = i._dbSchema
            })
        });

        function c() {
            return o.length ? A.resolve(o.shift()(n.idbtrans)).then(c) : A.resolve()
        }
        return c().then(function() {
            Zp(s, r)
        })
    }

    function Gs(e, t) {
        var n = {
                del: [],
                add: [],
                change: []
            },
            r;
        for (r in e) t[r] || n.del.push(r);
        for (r in t) {
            var i = e[r],
                o = t[r];
            if (!i) n.add.push([r, o]);
            else {
                var a = {
                    name: r,
                    def: o,
                    recreate: !1,
                    del: [],
                    add: [],
                    change: []
                };
                if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto && !Sr) a.recreate = !0, n.change.push(a);
                else {
                    var s = i.idxByName,
                        l = o.idxByName,
                        u = void 0;
                    for (u in s) l[u] || a.del.push(u);
                    for (u in l) {
                        var c = s[u],
                            d = l[u];
                        c ? c.src !== d.src && a.change.push(d) : a.add.push(d)
                    }(a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && n.change.push(a)
                }
            }
        }
        return n
    }

    function so(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? {
            keyPath: n.keyPath,
            autoIncrement: n.auto
        } : {
            autoIncrement: n.auto
        });
        return r.forEach(function(o) {
            return lo(i, o)
        }), i
    }

    function Zp(e, t) {
        ne(e).forEach(function(n) {
            t.db.objectStoreNames.contains(n) || so(t, n, e[n].primKey, e[n].indexes)
        })
    }

    function Xp(e, t) {
        [].slice.call(t.db.objectStoreNames).forEach(function(n) {
            return e[n] == null && t.db.deleteObjectStore(n)
        })
    }

    function lo(e, t) {
        e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi
        })
    }

    function uo(e, t, n) {
        var r = {},
            i = dr(t.objectStoreNames, 0);
        return i.forEach(function(o) {
            for (var a = n.objectStore(o), s = a.keyPath, l = ro($s(s), s || "", !1, !1, !!a.autoIncrement, s && typeof s != "string", !0), u = [], c = 0; c < a.indexNames.length; ++c) {
                var d = a.index(a.indexNames[c]);
                s = d.keyPath;
                var f = ro(d.name, s, !!d.unique, !!d.multiEntry, !1, s && typeof s != "string", !1);
                u.push(f)
            }
            r[o] = Ks(o, l, u)
        }), r
    }

    function Jp(e, t, n) {
        var r = e._novip;
        r.verno = t.version / 10;
        var i = r._dbSchema = uo(r, t, n);
        r._storeNames = dr(t.objectStoreNames, 0), Ar(r, [r._allTables], ne(i), i)
    }

    function eh(e, t) {
        var n = uo(e, e.idbdb, t),
            r = Gs(n, e._dbSchema);
        return !(r.add.length || r.change.some(function(i) {
            return i.add.length || i.change.length
        }))
    }

    function co(e, t, n) {
        for (var r = e._novip, i = n.db.objectStoreNames, o = 0; o < i.length; ++o) {
            var a = i[o],
                s = n.objectStore(a);
            r._hasGetAll = "getAll" in s;
            for (var l = 0; l < s.indexNames.length; ++l) {
                var u = s.indexNames[l],
                    c = s.index(u).keyPath,
                    d = typeof c == "string" ? c : "[" + dr(c).join("+") + "]";
                if (t[a]) {
                    var f = t[a].idxByName[d];
                    f && (f.name = u, delete t[a].idxByName[d], t[a].idxByName[u] = f)
                }
            }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && Y.WorkerGlobalScope && Y instanceof Y.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (r._hasGetAll = !1)
    }

    function th(e) {
        return e.split(",").map(function(t, n) {
            t = t.trim();
            var r = t.replace(/([&*]|\+\+)/g, ""),
                i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
            return ro(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), pe(i), n === 0)
        })
    }
    var nh = function() {
        function e() {}
        return e.prototype._parseStoresSpec = function(t, n) {
            ne(t).forEach(function(r) {
                if (t[r] !== null) {
                    var i = th(t[r]),
                        o = i.shift();
                    if (o.multi) throw new V.Schema("Primary key cannot be multi-valued");
                    i.forEach(function(a) {
                        if (a.auto) throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!a.keyPath) throw new V.Schema("Index must have a name and cannot be an empty string")
                    }), n[r] = Ks(r, o, i)
                }
            })
        }, e.prototype.stores = function(t) {
            var n = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? ve(this._cfg.storesSource, t) : t;
            var r = n._versions,
                i = {},
                o = {};
            return r.forEach(function(a) {
                ve(i, a._cfg.storesSource), o = a._cfg.dbschema = {}, a._parseStoresSpec(i, o)
            }), n._dbSchema = o, ao(n, [n._allTables, n, n.Transaction.prototype]), Ar(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], ne(o), o), n._storeNames = ne(o), this
        }, e.prototype.upgrade = function(t) {
            return this._cfg.contentUpgrade = Ni(this._cfg.contentUpgrade || z, t), this
        }, e
    }();

    function rh(e) {
        return Mn(nh.prototype, function(n) {
            this.db = e, this._cfg = {
                version: n,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }
        })
    }

    function fo(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new wo(Ir, {
            addons: [],
            indexedDB: e,
            IDBKeyRange: t
        }), n.version(1).stores({
            dbnames: "name"
        })), n.table("dbnames")
    }

    function po(e) {
        return e && typeof e.databases == "function"
    }

    function ih(e) {
        var t = e.indexedDB,
            n = e.IDBKeyRange;
        return po(t) ? Promise.resolve(t.databases()).then(function(r) {
            return r.map(function(i) {
                return i.name
            }).filter(function(i) {
                return i !== Ir
            })
        }) : fo(t, n).toCollection().primaryKeys()
    }

    function oh(e, t) {
        var n = e.indexedDB,
            r = e.IDBKeyRange;
        !po(n) && t !== Ir && fo(n, r).put({
            name: t
        }).catch(z)
    }

    function ah(e, t) {
        var n = e.indexedDB,
            r = e.IDBKeyRange;
        !po(n) && t !== Ir && fo(n, r).delete(t).catch(z)
    }

    function ho(e) {
        return gt(function() {
            return N.letThrough = !0, e()
        })
    }

    function sh() {
        var e = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!e || !indexedDB.databases) return Promise.resolve();
        var t;
        return new Promise(function(n) {
            var r = function() {
                return indexedDB.databases().finally(n)
            };
            t = setInterval(r, 100), r()
        }).finally(function() {
            return clearInterval(t)
        })
    }

    function lh(e) {
        var t = e._state,
            n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
            return t.dbOpenError ? ie(t.dbOpenError) : e
        });
        Ke && (t.openCanceller._stackHolder = Ut()), t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller;

        function i() {
            if (t.openCanceller !== r) throw new V.DatabaseClosed("db.open() was cancelled")
        }
        var o = t.dbReadyResolve,
            a = null,
            s = !1;
        return A.race([r, (typeof navigator > "u" ? A.resolve() : sh()).then(function() {
            return new A(function(l, u) {
                if (i(), !n) throw new V.MissingAPI;
                var c = e.name,
                    d = t.autoSchema ? n.open(c) : n.open(c, Math.round(e.verno * 10));
                if (!d) throw new V.MissingAPI;
                d.onerror = qe(u), d.onblocked = J(e._fireOnBlocked), d.onupgradeneeded = J(function(f) {
                    if (a = d.transaction, t.autoSchema && !e._options.allowEmptyDB) {
                        d.onerror = Vn, a.abort(), d.result.close();
                        var p = n.deleteDatabase(c);
                        p.onsuccess = p.onerror = J(function() {
                            u(new V.NoSuchDatabase("Database " + c + " doesnt exist"))
                        })
                    } else {
                        a.onerror = qe(u);
                        var v = f.oldVersion > Math.pow(2, 62) ? 0 : f.oldVersion;
                        s = v < 1, e._novip.idbdb = d.result, Yp(e, v / 10, a, u)
                    }
                }, u), d.onsuccess = J(function() {
                    a = null;
                    var f = e._novip.idbdb = d.result,
                        p = dr(f.objectStoreNames);
                    if (p.length > 0) try {
                        var v = f.transaction(Hp(p), "readonly");
                        t.autoSchema ? Jp(e, f, v) : (co(e, e._dbSchema, v), eh(e, v) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")), oo(e, v)
                    } catch {}
                    Pn.push(e), f.onversionchange = J(function(h) {
                        t.vcFired = !0, e.on("versionchange").fire(h)
                    }), f.onclose = J(function(h) {
                        e.on("close").fire(h)
                    }), s && oh(e._deps, c), l()
                }, u)
            })
        })]).then(function() {
            return i(), t.onReadyBeingFired = [], A.resolve(ho(function() {
                return e.on.ready.fire(e.vip)
            })).then(function l() {
                if (t.onReadyBeingFired.length > 0) {
                    var u = t.onReadyBeingFired.reduce(Ni, z);
                    return t.onReadyBeingFired = [], A.resolve(ho(function() {
                        return u(e.vip)
                    })).then(l)
                }
            })
        }).finally(function() {
            t.onReadyBeingFired = null, t.isBeingOpened = !1
        }).then(function() {
            return e
        }).catch(function(l) {
            t.dbOpenError = l;
            try {
                a && a.abort()
            } catch {}
            return r === t.openCanceller && e._close(), ie(l)
        }).finally(function() {
            t.openComplete = !0, o()
        })
    }

    function vo(e) {
        var t = function(a) {
                return e.next(a)
            },
            n = function(a) {
                return e.throw(a)
            },
            r = o(t),
            i = o(n);

        function o(a) {
            return function(s) {
                var l = a(s),
                    u = l.value;
                return l.done ? u : !u || typeof u.then != "function" ? pe(u) ? Promise.all(u).then(r, i) : r(u) : u.then(r, i)
            }
        }
        return o(t)()
    }

    function uh(e, t, n) {
        var r = arguments.length;
        if (r < 2) throw new V.InvalidArgument("Too few arguments");
        for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
        n = i.pop();
        var o = hs(i);
        return [e, o, n]
    }

    function zs(e, t, n, r, i) {
        return A.resolve().then(function() {
            var o = N.transless || N,
                a = e._createTransaction(t, n, e._dbSchema, r),
                s = {
                    trans: a,
                    transless: o
                };
            if (r) a.idbtrans = r.idbtrans;
            else try {
                a.create(), e._state.PR1398_maxLoop = 3
            } catch (d) {
                return d.name === Pi.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then(function() {
                    return zs(e, t, n, null, i)
                })) : ie(d)
            }
            var l = Ui(i);
            l && sn();
            var u, c = A.follow(function() {
                if (u = i.call(a, a), u)
                    if (l) {
                        var d = nt.bind(null, null);
                        u.then(d, d)
                    } else typeof u.next == "function" && typeof u.throw == "function" && (u = vo(u))
            }, s);
            return (u && typeof u.then == "function" ? A.resolve(u).then(function(d) {
                return a.active ? d : ie(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
            }) : c.then(function() {
                return u
            })).then(function(d) {
                return r && a._resolve(), a._completion.then(function() {
                    return d
                })
            }).catch(function(d) {
                return a._reject(d), ie(d)
            })
        })
    }

    function Ur(e, t, n) {
        for (var r = pe(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r
    }

    function ch(e) {
        return K(K({}, e), {
            table: function(t) {
                var n = e.table(t),
                    r = n.schema,
                    i = {},
                    o = [];

                function a(h, g, _) {
                    var w = Fn(h),
                        E = i[w] = i[w] || [],
                        b = h == null ? 0 : typeof h == "string" ? 1 : h.length,
                        m = g > 0,
                        x = K(K({}, _), {
                            isVirtual: m,
                            keyTail: g,
                            keyLength: b,
                            extractKey: io(h),
                            unique: !m && _.unique
                        });
                    if (E.push(x), x.isPrimaryKey || o.push(x), b > 1) {
                        var k = b === 2 ? h[0] : h.slice(0, b - 1);
                        a(k, g + 1, _)
                    }
                    return E.sort(function(C, I) {
                        return C.keyTail - I.keyTail
                    }), x
                }
                var s = a(r.primaryKey.keyPath, 0, r.primaryKey);
                i[":id"] = [s];
                for (var l = 0, u = r.indexes; l < u.length; l++) {
                    var c = u[l];
                    a(c.keyPath, 0, c)
                }

                function d(h) {
                    var g = i[Fn(h)];
                    return g && g[0]
                }

                function f(h, g) {
                    return {
                        type: h.type === 1 ? 2 : h.type,
                        lower: Ur(h.lower, h.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g),
                        lowerOpen: !0,
                        upper: Ur(h.upper, h.upperOpen ? e.MIN_KEY : e.MAX_KEY, g),
                        upperOpen: !0
                    }
                }

                function p(h) {
                    var g = h.query.index;
                    return g.isVirtual ? K(K({}, h), {
                        query: {
                            index: g,
                            range: f(h.query.range, g.keyTail)
                        }
                    }) : h
                }
                var v = K(K({}, n), {
                    schema: K(K({}, r), {
                        primaryKey: s,
                        indexes: o,
                        getIndexByKeyPath: d
                    }),
                    count: function(h) {
                        return n.count(p(h))
                    },
                    query: function(h) {
                        return n.query(p(h))
                    },
                    openCursor: function(h) {
                        var g = h.query.index,
                            _ = g.keyTail,
                            w = g.isVirtual,
                            E = g.keyLength;
                        if (!w) return n.openCursor(h);

                        function b(m) {
                            function x(C) {
                                C != null ? m.continue(Ur(C, h.reverse ? e.MAX_KEY : e.MIN_KEY, _)) : h.unique ? m.continue(m.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, _)) : m.continue()
                            }
                            var k = Object.create(m, {
                                continue: {
                                    value: x
                                },
                                continuePrimaryKey: {
                                    value: function(C, I) {
                                        m.continuePrimaryKey(Ur(C, e.MAX_KEY, _), I)
                                    }
                                },
                                primaryKey: {
                                    get: function() {
                                        return m.primaryKey
                                    }
                                },
                                key: {
                                    get: function() {
                                        var C = m.key;
                                        return E === 1 ? C[0] : C.slice(0, E)
                                    }
                                },
                                value: {
                                    get: function() {
                                        return m.value
                                    }
                                }
                            });
                            return k
                        }
                        return n.openCursor(p(h)).then(function(m) {
                            return m && b(m)
                        })
                    }
                });
                return v
            }
        })
    }
    var dh = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: ch
    };

    function mo(e, t, n, r) {
        return n = n || {}, r = r || "", ne(e).forEach(function(i) {
            if (!be(t, i)) n[r + i] = void 0;
            else {
                var o = e[i],
                    a = t[i];
                if (typeof o == "object" && typeof a == "object" && o && a) {
                    var s = Ri(o),
                        l = Ri(a);
                    s !== l ? n[r + i] = t[i] : s === "Object" ? mo(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i])
                } else o !== a && (n[r + i] = t[i])
            }
        }), ne(t).forEach(function(i) {
            be(e, i) || (n[r + i] = t[i])
        }), n
    }

    function fh(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey)
    }
    var ph = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
            return K(K({}, e), {
                table: function(t) {
                    var n = e.table(t),
                        r = n.schema.primaryKey,
                        i = K(K({}, n), {
                            mutate: function(o) {
                                var a = N.trans,
                                    s = a.table(t).hook,
                                    l = s.deleting,
                                    u = s.creating,
                                    c = s.updating;
                                switch (o.type) {
                                    case "add":
                                        if (u.fire === z) break;
                                        return a._promise("readwrite", function() {
                                            return d(o)
                                        }, !0);
                                    case "put":
                                        if (u.fire === z && c.fire === z) break;
                                        return a._promise("readwrite", function() {
                                            return d(o)
                                        }, !0);
                                    case "delete":
                                        if (l.fire === z) break;
                                        return a._promise("readwrite", function() {
                                            return d(o)
                                        }, !0);
                                    case "deleteRange":
                                        if (l.fire === z) break;
                                        return a._promise("readwrite", function() {
                                            return f(o)
                                        }, !0)
                                }
                                return n.mutate(o);

                                function d(v) {
                                    var h = N.trans,
                                        g = v.keys || fh(r, v);
                                    if (!g) throw new Error("Keys missing");
                                    return v = v.type === "add" || v.type === "put" ? K(K({}, v), {
                                        keys: g
                                    }) : K({}, v), v.type !== "delete" && (v.values = ki([], v.values, !0)), v.keys && (v.keys = ki([], v.keys, !0)), hh(n, v, g).then(function(_) {
                                        var w = g.map(function(E, b) {
                                            var m = _[b],
                                                x = {
                                                    onerror: null,
                                                    onsuccess: null
                                                };
                                            if (v.type === "delete") l.fire.call(x, E, m, h);
                                            else if (v.type === "add" || m === void 0) {
                                                var k = u.fire.call(x, E, v.values[b], h);
                                                E == null && k != null && (E = k, v.keys[b] = E, r.outbound || De(v.values[b], r.keyPath, E))
                                            } else {
                                                var C = mo(m, v.values[b]),
                                                    I = c.fire.call(x, C, E, m, h);
                                                if (I) {
                                                    var R = v.values[b];
                                                    Object.keys(I).forEach(function(O) {
                                                        be(R, O) ? R[O] = I[O] : De(R, O, I[O])
                                                    })
                                                }
                                            }
                                            return x
                                        });
                                        return n.mutate(v).then(function(E) {
                                            for (var b = E.failures, m = E.results, x = E.numFailures, k = E.lastResult, C = 0; C < g.length; ++C) {
                                                var I = m ? m[C] : g[C],
                                                    R = w[C];
                                                I == null ? R.onerror && R.onerror(b[C]) : R.onsuccess && R.onsuccess(v.type === "put" && _[C] ? v.values[C] : I)
                                            }
                                            return {
                                                failures: b,
                                                results: m,
                                                numFailures: x,
                                                lastResult: k
                                            }
                                        }).catch(function(E) {
                                            return w.forEach(function(b) {
                                                return b.onerror && b.onerror(E)
                                            }), Promise.reject(E)
                                        })
                                    })
                                }

                                function f(v) {
                                    return p(v.trans, v.range, 1e4)
                                }

                                function p(v, h, g) {
                                    return n.query({
                                        trans: v,
                                        values: !1,
                                        query: {
                                            index: r,
                                            range: h
                                        },
                                        limit: g
                                    }).then(function(_) {
                                        var w = _.result;
                                        return d({
                                            type: "delete",
                                            keys: w,
                                            trans: v
                                        }).then(function(E) {
                                            return E.numFailures > 0 ? Promise.reject(E.failures[0]) : w.length < g ? {
                                                failures: [],
                                                numFailures: 0,
                                                lastResult: void 0
                                            } : p(v, K(K({}, h), {
                                                lower: w[w.length - 1],
                                                lowerOpen: !0
                                            }), g)
                                        })
                                    })
                                }
                            }
                        });
                    return i
                }
            })
        }
    };

    function hh(e, t, n) {
        return t.type === "add" ? Promise.resolve([]) : e.getMany({
            trans: t.trans,
            keys: n,
            cache: "immutable"
        })
    }

    function Ws(e, t, n) {
        try {
            if (!t || t.keys.length < e.length) return null;
            for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) me(t.keys[i], e[o]) === 0 && (r.push(n ? kn(t.values[i]) : t.values[i]), ++o);
            return r.length === e.length ? r : null
        } catch {
            return null
        }
    }
    var vh = {
            stack: "dbcore",
            level: -1,
            create: function(e) {
                return {
                    table: function(t) {
                        var n = e.table(t);
                        return K(K({}, n), {
                            getMany: function(r) {
                                if (!r.cache) return n.getMany(r);
                                var i = Ws(r.keys, r.trans._cache, r.cache === "clone");
                                return i ? A.resolve(i) : n.getMany(r).then(function(o) {
                                    return r.trans._cache = {
                                        keys: r.keys,
                                        values: r.cache === "clone" ? kn(o) : o
                                    }, o
                                })
                            },
                            mutate: function(r) {
                                return r.type !== "add" && (r.trans._cache = null), n.mutate(r)
                            }
                        })
                    }
                }
            }
        },
        go;

    function yo(e) {
        return !("from" in e)
    }
    var it = function(e, t) {
        if (this) ve(this, arguments.length ? {
            d: 1,
            from: e,
            to: arguments.length > 1 ? t : e
        } : {
            d: 0
        });
        else {
            var n = new it;
            return e && "d" in e && ve(n, e), n
        }
    };
    tn(it.prototype, (go = {
        add: function(e) {
            return Or(this, e), this
        },
        addKey: function(e) {
            return Hn(this, e, e), this
        },
        addKeys: function(e) {
            var t = this;
            return e.forEach(function(n) {
                return Hn(t, n, n)
            }), this
        }
    }, go[Ai] = function() {
        return _o(this)
    }, go));

    function Hn(e, t, n) {
        var r = me(t, n);
        if (!isNaN(r)) {
            if (r > 0) throw RangeError();
            if (yo(e)) return ve(e, {
                from: t,
                to: n,
                d: 1
            });
            var i = e.l,
                o = e.r;
            if (me(n, e.from) < 0) return i ? Hn(i, t, n) : e.l = {
                from: t,
                to: n,
                d: 1,
                l: null,
                r: null
            }, Ys(e);
            if (me(t, e.to) > 0) return o ? Hn(o, t, n) : e.r = {
                from: t,
                to: n,
                d: 1,
                l: null,
                r: null
            }, Ys(e);
            me(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), me(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
            var a = !e.r;
            i && !e.l && Or(e, i), o && a && Or(e, o)
        }
    }

    function Or(e, t) {
        function n(r, i) {
            var o = i.from,
                a = i.to,
                s = i.l,
                l = i.r;
            Hn(r, o, a), s && n(r, s), l && n(r, l)
        }
        yo(t) || n(e, t)
    }

    function mh(e, t) {
        var n = _o(t),
            r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = _o(e), a = o.next(i.from), s = a.value; !r.done && !a.done;) {
            if (me(s.from, i.to) <= 0 && me(s.to, i.from) >= 0) return !0;
            me(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (a = o.next(i.from)).value
        }
        return !1
    }

    function _o(e) {
        var t = yo(e) ? null : {
            s: 0,
            n: e
        };
        return {
            next: function(n) {
                for (var r = arguments.length > 0; t;) switch (t.s) {
                    case 0:
                        if (t.s = 1, r)
                            for (; t.n.l && me(n, t.n.from) < 0;) t = {
                                up: t,
                                n: t.n.l,
                                s: 1
                            };
                        else
                            for (; t.n.l;) t = {
                                up: t,
                                n: t.n.l,
                                s: 1
                            };
                    case 1:
                        if (t.s = 2, !r || me(n, t.n.to) <= 0) return {
                            value: t.n,
                            done: !1
                        };
                    case 2:
                        if (t.n.r) {
                            t.s = 3, t = {
                                up: t,
                                n: t.n.r,
                                s: 0
                            };
                            continue
                        }
                    case 3:
                        t = t.up
                }
                return {
                    done: !0
                }
            }
        }
    }

    function Ys(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0),
            i = r > 1 ? "r" : r < -1 ? "l" : "";
        if (i) {
            var o = i === "r" ? "l" : "r",
                a = K({}, e),
                s = e[i];
            e.from = s.from, e.to = s.to, e[i] = s[i], a[i] = s[o], e[o] = a, a.d = Qs(a)
        }
        e.d = Qs(e)
    }

    function Qs(e) {
        var t = e.r,
            n = e.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1
    }
    var gh = {
        stack: "dbcore",
        level: 0,
        create: function(e) {
            var t = e.schema.name,
                n = new it(e.MIN_KEY, e.MAX_KEY);
            return K(K({}, e), {
                table: function(r) {
                    var i = e.table(r),
                        o = i.schema,
                        a = o.primaryKey,
                        s = a.extractKey,
                        l = a.outbound,
                        u = K(K({}, i), {
                            mutate: function(f) {
                                var p = f.trans,
                                    v = p.mutatedParts || (p.mutatedParts = {}),
                                    h = function(k) {
                                        var C = "idb://" + t + "/" + r + "/" + k;
                                        return v[C] || (v[C] = new it)
                                    },
                                    g = h(""),
                                    _ = h(":dels"),
                                    w = f.type,
                                    E = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [
                                        [], f.values
                                    ] : [],
                                    b = E[0],
                                    m = E[1],
                                    x = f.trans._cache;
                                return i.mutate(f).then(function(k) {
                                    if (pe(b)) {
                                        w !== "delete" && (b = k.results), g.addKeys(b);
                                        var C = Ws(b, x);
                                        !C && w !== "add" && _.addKeys(b), (C || m) && yh(h, o, C, m)
                                    } else if (b) {
                                        var I = {
                                            from: b.lower,
                                            to: b.upper
                                        };
                                        _.add(I), g.add(I)
                                    } else g.add(n), _.add(n), o.indexes.forEach(function(R) {
                                        return h(R.name).add(n)
                                    });
                                    return k
                                })
                            }
                        }),
                        c = function(f) {
                            var p, v, h = f.query,
                                g = h.index,
                                _ = h.range;
                            return [g, new it((p = _.lower) !== null && p !== void 0 ? p : e.MIN_KEY, (v = _.upper) !== null && v !== void 0 ? v : e.MAX_KEY)]
                        },
                        d = {
                            get: function(f) {
                                return [a, new it(f.key)]
                            },
                            getMany: function(f) {
                                return [a, new it().addKeys(f.keys)]
                            },
                            count: c,
                            query: c,
                            openCursor: c
                        };
                    return ne(d).forEach(function(f) {
                        u[f] = function(p) {
                            var v = N.subscr;
                            if (v) {
                                var h = function(x) {
                                        var k = "idb://" + t + "/" + r + "/" + x;
                                        return v[k] || (v[k] = new it)
                                    },
                                    g = h(""),
                                    _ = h(":dels"),
                                    w = d[f](p),
                                    E = w[0],
                                    b = w[1];
                                if (h(E.name || "").add(b), !E.isPrimaryKey)
                                    if (f === "count") _.add(n);
                                    else {
                                        var m = f === "query" && l && p.values && i.query(K(K({}, p), {
                                            values: !1
                                        }));
                                        return i[f].apply(this, arguments).then(function(x) {
                                            if (f === "query") {
                                                if (l && p.values) return m.then(function(R) {
                                                    var O = R.result;
                                                    return g.addKeys(O), x
                                                });
                                                var k = p.values ? x.result.map(s) : x.result;
                                                p.values ? g.addKeys(k) : _.addKeys(k)
                                            } else if (f === "openCursor") {
                                                var C = x,
                                                    I = p.values;
                                                return C && Object.create(C, {
                                                    key: {
                                                        get: function() {
                                                            return _.addKey(C.primaryKey), C.key
                                                        }
                                                    },
                                                    primaryKey: {
                                                        get: function() {
                                                            var R = C.primaryKey;
                                                            return _.addKey(R), R
                                                        }
                                                    },
                                                    value: {
                                                        get: function() {
                                                            return I && g.addKey(C.primaryKey), C.value
                                                        }
                                                    }
                                                })
                                            }
                                            return x
                                        })
                                    }
                            }
                            return i[f].apply(this, arguments)
                        }
                    }), u
                }
            })
        }
    };

    function yh(e, t, n, r) {
        function i(o) {
            var a = e(o.name || "");

            function s(u) {
                return u != null ? o.extractKey(u) : null
            }
            var l = function(u) {
                return o.multiEntry && pe(u) ? u.forEach(function(c) {
                    return a.addKey(c)
                }) : a.addKey(u)
            };
            (n || r).forEach(function(u, c) {
                var d = n && s(n[c]),
                    f = r && s(r[c]);
                me(d, f) !== 0 && (d != null && l(d), f != null && l(f))
            })
        }
        t.indexes.forEach(i)
    }
    var wo = function() {
            function e(t, n) {
                var r = this;
                this._middlewares = {}, this.verno = 0;
                var i = e.dependencies;
                this._options = n = K({
                    addons: e.addons,
                    autoOpen: !0,
                    indexedDB: i.indexedDB,
                    IDBKeyRange: i.IDBKeyRange
                }, n), this._deps = {
                    indexedDB: n.indexedDB,
                    IDBKeyRange: n.IDBKeyRange
                };
                var o = n.addons;
                this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
                var a = {
                    dbOpenError: null,
                    isBeingOpened: !1,
                    onReadyBeingFired: null,
                    openComplete: !1,
                    dbReadyResolve: z,
                    dbReadyPromise: null,
                    cancelOpen: z,
                    openCanceller: null,
                    autoSchema: !0,
                    PR1398_maxLoop: 3
                };
                a.dbReadyPromise = new A(function(s) {
                    a.dbReadyResolve = s
                }), a.openCanceller = new A(function(s, l) {
                    a.cancelOpen = l
                }), this._state = a, this.name = t, this.on = Nn(this, "populate", "blocked", "versionchange", "close", {
                    ready: [Ni, z]
                }), this.on.ready.subscribe = cs(this.on.ready.subscribe, function(s) {
                    return function(l, u) {
                        e.vip(function() {
                            var c = r._state;
                            if (c.openComplete) c.dbOpenError || A.resolve().then(l), u && s(l);
                            else if (c.onReadyBeingFired) c.onReadyBeingFired.push(l), u && s(l);
                            else {
                                s(l);
                                var d = r;
                                u || s(function f() {
                                    d.on.ready.unsubscribe(l), d.on.ready.unsubscribe(f)
                                })
                            }
                        })
                    }
                }), this.Collection = Op(this), this.Table = Tp(this), this.Transaction = Fp(this), this.Version = rh(this), this.WhereClause = jp(this), this.on("versionchange", function(s) {
                    s.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + r.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + r.name + "'. Closing db now to resume the delete request."), r.close()
                }), this.on("blocked", function(s) {
                    !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('" + r.name + "') was blocked") : console.warn("Upgrade '" + r.name + "' blocked by other connection holding version " + s.oldVersion / 10)
                }), this._maxKey = Bn(n.IDBKeyRange), this._createTransaction = function(s, l, u, c) {
                    return new r.Transaction(s, l, u, r._options.chromeTransactionDurability, c)
                }, this._fireOnBlocked = function(s) {
                    r.on("blocked").fire(s), Pn.filter(function(l) {
                        return l.name === r.name && l !== r && !l._state.vcFired
                    }).map(function(l) {
                        return l.on("versionchange").fire(s)
                    })
                }, this.use(dh), this.use(ph), this.use(gh), this.use(vh), this.vip = Object.create(this, {
                    _vip: {
                        value: !0
                    }
                }), o.forEach(function(s) {
                    return s(r)
                })
            }
            return e.prototype.version = function(t) {
                if (isNaN(t) || t < .1) throw new V.Type("Given version is not a positive number");
                if (t = Math.round(t * 10) / 10, this.idbdb || this._state.isBeingOpened) throw new V.Schema("Cannot add version when database is open");
                this.verno = Math.max(this.verno, t);
                var n = this._versions,
                    r = n.filter(function(i) {
                        return i._cfg.version === t
                    })[0];
                return r || (r = new this.Version(t), n.push(r), n.sort(Wp), r.stores({}), this._state.autoSchema = !1, r)
            }, e.prototype._whenReady = function(t) {
                var n = this;
                return this.idbdb && (this._state.openComplete || N.letThrough || this._vip) ? t() : new A(function(r, i) {
                    if (n._state.openComplete) return i(new V.DatabaseClosed(n._state.dbOpenError));
                    if (!n._state.isBeingOpened) {
                        if (!n._options.autoOpen) {
                            i(new V.DatabaseClosed);
                            return
                        }
                        n.open().catch(z)
                    }
                    n._state.dbReadyPromise.then(r, i)
                }).then(t)
            }, e.prototype.use = function(t) {
                var n = t.stack,
                    r = t.create,
                    i = t.level,
                    o = t.name;
                o && this.unuse({
                    stack: n,
                    name: o
                });
                var a = this._middlewares[n] || (this._middlewares[n] = []);
                return a.push({
                    stack: n,
                    create: r,
                    level: i == null ? 10 : i,
                    name: o
                }), a.sort(function(s, l) {
                    return s.level - l.level
                }), this
            }, e.prototype.unuse = function(t) {
                var n = t.stack,
                    r = t.name,
                    i = t.create;
                return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(o) {
                    return i ? o.create !== i : r ? o.name !== r : !1
                })), this
            }, e.prototype.open = function() {
                return lh(this)
            }, e.prototype._close = function() {
                var t = this._state,
                    n = Pn.indexOf(this);
                if (n >= 0 && Pn.splice(n, 1), this.idbdb) {
                    try {
                        this.idbdb.close()
                    } catch {}
                    this._novip.idbdb = null
                }
                t.dbReadyPromise = new A(function(r) {
                    t.dbReadyResolve = r
                }), t.openCanceller = new A(function(r, i) {
                    t.cancelOpen = i
                })
            }, e.prototype.close = function() {
                this._close();
                var t = this._state;
                this._options.autoOpen = !1, t.dbOpenError = new V.DatabaseClosed, t.isBeingOpened && t.cancelOpen(t.dbOpenError)
            }, e.prototype.delete = function() {
                var t = this,
                    n = arguments.length > 0,
                    r = this._state;
                return new A(function(i, o) {
                    var a = function() {
                        t.close();
                        var s = t._deps.indexedDB.deleteDatabase(t.name);
                        s.onsuccess = J(function() {
                            ah(t._deps, t.name), i()
                        }), s.onerror = qe(o), s.onblocked = t._fireOnBlocked
                    };
                    if (n) throw new V.InvalidArgument("Arguments not allowed in db.delete()");
                    r.isBeingOpened ? r.dbReadyPromise.then(a) : a()
                })
            }, e.prototype.backendDB = function() {
                return this.idbdb
            }, e.prototype.isOpen = function() {
                return this.idbdb !== null
            }, e.prototype.hasBeenClosed = function() {
                var t = this._state.dbOpenError;
                return t && t.name === "DatabaseClosed"
            }, e.prototype.hasFailed = function() {
                return this._state.dbOpenError !== null
            }, e.prototype.dynamicallyOpened = function() {
                return this._state.autoSchema
            }, Object.defineProperty(e.prototype, "tables", {
                get: function() {
                    var t = this;
                    return ne(this._allTables).map(function(n) {
                        return t._allTables[n]
                    })
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.transaction = function() {
                var t = uh.apply(this, arguments);
                return this._transaction.apply(this, t)
            }, e.prototype._transaction = function(t, n, r) {
                var i = this,
                    o = N.trans;
                (!o || o.db !== this || t.indexOf("!") !== -1) && (o = null);
                var a = t.indexOf("?") !== -1;
                t = t.replace("!", "").replace("?", "");
                var s, l;
                try {
                    if (l = n.map(function(c) {
                            var d = c instanceof i.Table ? c.name : c;
                            if (typeof d != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                            return d
                        }), t == "r" || t === Xi) s = Xi;
                    else if (t == "rw" || t == Ji) s = Ji;
                    else throw new V.InvalidArgument("Invalid transaction mode: " + t);
                    if (o) {
                        if (o.mode === Xi && s === Ji)
                            if (a) o = null;
                            else throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                        o && l.forEach(function(c) {
                            if (o && o.storeNames.indexOf(c) === -1)
                                if (a) o = null;
                                else throw new V.SubTransaction("Table " + c + " not included in parent transaction.")
                        }), a && o && !o.active && (o = null)
                    }
                } catch (c) {
                    return o ? o._promise(null, function(d, f) {
                        f(c)
                    }) : ie(c)
                }
                var u = zs.bind(null, this, s, l, o, r);
                return o ? o._promise(s, u, "lock") : N.trans ? ln(N.transless, function() {
                    return i._whenReady(u)
                }) : this._whenReady(u)
            }, e.prototype.table = function(t) {
                if (!be(this._allTables, t)) throw new V.InvalidTable("Table " + t + " does not exist");
                return this._allTables[t]
            }, e
        }(),
        _h = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable",
        wh = function() {
            function e(t) {
                this._subscribe = t
            }
            return e.prototype.subscribe = function(t, n, r) {
                return this._subscribe(!t || typeof t == "function" ? {
                    next: t,
                    error: n,
                    complete: r
                } : t)
            }, e.prototype[_h] = function() {
                return this
            }, e
        }();

    function Zs(e, t) {
        return ne(t).forEach(function(n) {
            var r = e[n] || (e[n] = new it);
            Or(r, t[n])
        }), e
    }

    function bh(e) {
        var t = !1,
            n = void 0,
            r = new wh(function(i) {
                var o = Ui(e);

                function a(g) {
                    o && sn();
                    var _ = function() {
                            return gt(e, {
                                subscr: g,
                                trans: null
                            })
                        },
                        w = N.trans ? ln(N.transless, _) : _();
                    return o && w.then(nt, nt), w
                }
                var s = !1,
                    l = {},
                    u = {},
                    c = {
                        get closed() {
                            return s
                        },
                        unsubscribe: function() {
                            s = !0, bt.storagemutated.unsubscribe(v)
                        }
                    };
                i.start && i.start(c);
                var d = !1,
                    f = !1;

                function p() {
                    return ne(u).some(function(g) {
                        return l[g] && mh(l[g], u[g])
                    })
                }
                var v = function(g) {
                        Zs(l, g), p() && h()
                    },
                    h = function() {
                        if (!(d || s)) {
                            l = {};
                            var g = {},
                                _ = a(g);
                            f || (bt(jn, v), f = !0), d = !0, Promise.resolve(_).then(function(w) {
                                t = !0, n = w, d = !1, !s && (p() ? h() : (l = {}, u = g, i.next && i.next(w)))
                            }, function(w) {
                                d = !1, t = !1, i.error && i.error(w), c.unsubscribe()
                            })
                        }
                    };
                return h(), c
            });
        return r.hasValue = function() {
            return t
        }, r.getValue = function() {
            return n
        }, r
    }
    var bo;
    try {
        bo = {
            indexedDB: Y.indexedDB || Y.mozIndexedDB || Y.webkitIndexedDB || Y.msIndexedDB,
            IDBKeyRange: Y.IDBKeyRange || Y.webkitIDBKeyRange
        }
    } catch {
        bo = {
            indexedDB: null,
            IDBKeyRange: null
        }
    }
    var Vt = wo;
    tn(Vt, K(K({}, pr), {
        delete: function(e) {
            var t = new Vt(e, {
                addons: []
            });
            return t.delete()
        },
        exists: function(e) {
            return new Vt(e, {
                addons: []
            }).open().then(function(t) {
                return t.close(), !0
            }).catch("NoSuchDatabaseError", function() {
                return !1
            })
        },
        getDatabaseNames: function(e) {
            try {
                return ih(Vt.dependencies).then(e)
            } catch {
                return ie(new V.MissingAPI)
            }
        },
        defineClass: function() {
            function e(t) {
                ve(this, t)
            }
            return e
        },
        ignoreTransaction: function(e) {
            return N.trans ? ln(N.transless, e) : e()
        },
        vip: ho,
        async: function(e) {
            return function() {
                try {
                    var t = vo(e.apply(this, arguments));
                    return !t || typeof t.then != "function" ? A.resolve(t) : t
                } catch (n) {
                    return ie(n)
                }
            }
        },
        spawn: function(e, t, n) {
            try {
                var r = vo(e.apply(n, t || []));
                return !r || typeof r.then != "function" ? A.resolve(r) : r
            } catch (i) {
                return ie(i)
            }
        },
        currentTransaction: {
            get: function() {
                return N.trans || null
            }
        },
        waitFor: function(e, t) {
            var n = A.resolve(typeof e == "function" ? Vt.ignoreTransaction(e) : e).timeout(t || 6e4);
            return N.trans ? N.trans.waitFor(n) : n
        },
        Promise: A,
        debug: {
            get: function() {
                return Ke
            },
            set: function(e) {
                ms(e, e === "dexie" ? function() {
                    return !0
                } : Ps)
            }
        },
        derive: nn,
        extend: ve,
        props: tn,
        override: cs,
        Events: Nn,
        on: bt,
        liveQuery: bh,
        extendObservabilitySet: Zs,
        getByKeyPath: et,
        setByKeyPath: De,
        delByKeyPath: Jf,
        shallowClone: ps,
        deepClone: kn,
        getObjectDiff: mo,
        cmp: me,
        asap: ds,
        minKey: Zi,
        addons: [],
        connections: Pn,
        errnames: Pi,
        dependencies: bo,
        semVer: Os,
        version: Os.split(".").map(function(e) {
            return parseInt(e)
        }).reduce(function(e, t, n) {
            return e + t / Math.pow(10, n * 2)
        })
    })), Vt.maxKey = Bn(Vt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (bt(jn, function(e) {
        if (!ot) {
            var t;
            Sr ? (t = document.createEvent("CustomEvent"), t.initCustomEvent(wt, !0, !0, e)) : t = new CustomEvent(wt, {
                detail: e
            }), ot = !0, dispatchEvent(t), ot = !1
        }
    }), addEventListener(wt, function(e) {
        var t = e.detail;
        ot || Dr(t)
    }));

    function Dr(e) {
        var t = ot;
        try {
            ot = !0, bt.storagemutated.fire(e)
        } finally {
            ot = t
        }
    }
    var ot = !1;
    if (typeof BroadcastChannel < "u") {
        var Pr = new BroadcastChannel(wt);
        typeof Pr.unref == "function" && Pr.unref(), bt(jn, function(e) {
            ot || Pr.postMessage(e)
        }), Pr.onmessage = function(e) {
            e.data && Dr(e.data)
        }
    } else if (typeof self < "u" && typeof navigator < "u") {
        bt(jn, function(e) {
            try {
                ot || (typeof localStorage < "u" && localStorage.setItem(wt, JSON.stringify({
                    trig: Math.random(),
                    changedParts: e
                })), typeof self.clients == "object" && ki([], self.clients.matchAll({
                    includeUncontrolled: !0
                }), !0).forEach(function(t) {
                    return t.postMessage({
                        type: wt,
                        changedParts: e
                    })
                }))
            } catch {}
        }), typeof addEventListener < "u" && addEventListener("storage", function(e) {
            if (e.key === wt) {
                var t = JSON.parse(e.newValue);
                t && Dr(t.changedParts)
            }
        });
        var Xs = self.document && navigator.serviceWorker;
        Xs && Xs.addEventListener("message", Eh)
    }

    function Eh(e) {
        var t = e.data;
        t && t.type === wt && Dr(t.changedParts)
    }
    A.rejectionMapper = lp, ms(Ke, Ps);
    var dn = (e => (e.ReadyForUpload = "ReadyForUpload", e.UploadComplete = "UploadComplete", e))(dn || {}),
        jt = (e => (e.After = "after", e.Before = "before", e.BeforeAndAfter = "beforeAndAfter", e))(jt || {});
    const Eo = "sprig.sessionId",
        Js = "sprig.disableReplayRecording",
        xh = 30,
        el = () => {
            vt.setItem(Js, "disabled")
        },
        Bt = () => !!vt.getItem(Js),
        Ch = ["did not allow mutations", "called in an invalid security context"],
        Sh = e => {
            if (!e) return !0;
            for (const t of Ch)
                if (e.toLowerCase().includes(t)) return !1;
            return !0
        },
        Ih = (e, t, n) => {
            Bt() || t instanceof Error && (el(), Sh(t == null ? void 0 : t.message) && (window.UserLeap.reportError(e, t, n), Th()))
        },
        kh = async (e, t) => {
            var r;
            let n;
            try {
                if ((r = window.navigator.storage) != null && r.estimate) {
                    const {
                        quota: i,
                        usage: o
                    } = await window.navigator.storage.estimate();
                    n = {
                        availableSpaceInMB: i && o ? (i - o) / (1024 * 1024) : void 0,
                        quota: i,
                        usage: o
                    }
                }
            } catch (i) {
                window.UserLeap.reportError("Error getting storage estimate", i)
            }
            Ih(e, t, n)
        },
        ge = (() => {
            const e = vt.getItem(Eo);
            return e ? (vt.removeItem(Eo), e) : Qe()
        })();
    window.addEventListener("beforeunload", () => {
        vt.setItem(Eo, ge)
    });
    const Th = async () => {
            try {
                await Promise.allSettled([G.events.clear(), G.chunkUploads.clear(), G.pendingCaptures.clear()])
            } catch {}
        },
        xo = (e, t, n = () => !0) => G.table(t).where("timestamp").below(e).and(n).delete(),
        Lh = () => {
            G.events.where("sessionId").equals(ge).delete(), G.pendingCaptures.where("sessionId").equals(ge).delete()
        },
        Rh = e => {
            const t = e.map(n => {
                var r;
                return { ...n,
                    sessionId: (r = n.sessionId) != null ? r : ge
                }
            });
            return G.events.bulkAdd(t)
        },
        Ah = (e, t) => G.events.where("[sessionId+timestamp]").between([ge, e], [ge, t]).toArray(),
        Uh = (e, t, n) => {
            const r = new Date,
                i = r.setMinutes(r.getMinutes() + (n != null ? n : xh));
            return G.events.where("[sessionId+timestamp]").between([ge, e], [ge, t]).modify({
                expiredAt: i
            })
        },
        Oh = e => {
            var t;
            return G.chunkUploads.add({ ...e,
                sessionId: (t = e.sessionId) != null ? t : ge
            })
        },
        Dh = (e, t) => G.chunkUploads.update(e, {
            data: null,
            etag: t,
            status: dn.UploadComplete
        }),
        Ph = ({
            status: e,
            uploadId: t
        }) => t ? G.chunkUploads.where({
            uploadId: t,
            status: e
        }).toArray() : G.chunkUploads.where({
            sessionId: ge,
            status: e
        }).toArray(),
        Nh = e => G.chunkUploads.where({
            uploadId: e,
            status: dn.UploadComplete
        }).toArray(),
        Mh = e => G.chunkUploads.where({
            uploadId: e,
            status: dn.UploadComplete
        }).delete(),
        Vh = e => {
            var t;
            return G.pendingCaptures.add({ ...e,
                sessionId: (t = e.sessionId) != null ? t : ge,
                canUpload: !1
            })
        },
        jh = () => G.pendingCaptures.where("sessionId").equals(ge).and(e => e.targetTimestamp < Date.now()).toArray(),
        Bh = () => G.pendingCaptures.where("sessionId").equals(ge).toArray(),
        Fh = e => G.pendingCaptures.where("sessionId").equals(ge).and(t => t.captureParams.responseGroupId === e).modify({
            canUpload: !0
        }),
        Hh = async e => {
            var t;
            if ((t = window.navigator.storage) != null && t.estimate) {
                const {
                    quota: n,
                    usage: r
                } = await window.navigator.storage.estimate();
                if (n && r && (n - r) / 1073741824 < e) return !1
            }
            return !0
        };
    class $h extends wo {
        constructor() {
            super("replayStorage", {
                autoOpen: !1
            });
            ue(this, "events");
            ue(this, "chunkUploads");
            ue(this, "pendingCaptures")
        }
    }
    const G = new $h;
    G.version(1).stores({
        events: "uuid, timestamp, [sessionId+timestamp]",
        chunkUploads: "uuid, timestamp, [sessionId+status], [uploadId+status], [sessionId+status+uploadId]",
        pendingCaptures: "uuid, timestamp, [sessionId+targetTimestamp]"
    }), G.open().catch(() => {
        el()
    });
    const Kh = async (e, t, n) => new Promise((r, i) => {
        const o = e.createElement("script");
        o.src = t, o.onload = r, o.onerror = i, n && (o.nonce = n), e.head.appendChild(o)
    });
    let tl = 1,
        nl = 5e3,
        Co = 6e4;
    const qh = 5,
        rl = 1e3,
        il = 30,
        Nr = il + qh,
        So = "sprig.pendingCount";
    let ol = 0,
        al = Date.now(),
        Io = !1;
    var ko = (e => (e.Left = "left_click", e.Right = "right_click", e))(ko || {});
    const Gh = async (e, t, n, r = 2, i) => {
        try {
            if (Bt() || !t || (i != null && i.minAvailableGb && (tl = i.minAvailableGb), !await Hh(tl))) return;
            i != null && i.minDuration && (nl = i.minDuration), i != null && i.batchDuration && (Co = i.batchDuration), Gf(r), Jh(), Yh(t + Nr, 30 * 60, t + Nr), Qh(), window.rrwebRecord || await Kh(e, "https://cdn.sprig.com/dependencies/record-2.0.0-alpha.6.min.js", n);
            const o = window.rrwebRecord;
            if (!o) return;
            let a = !0;
            o({
                checkoutEveryNms: il * 1e3,
                sampling: {
                    input: "last",
                    scroll: 250,
                    media: 800
                },
                emit: (s, l) => {
                    if (Bt()) return;
                    al = Date.now();
                    const u = a || !!l;
                    a = !1, zh({
                        uuid: Qe(),
                        event: JSON.stringify(s),
                        isValidStart: u,
                        timestamp: Date.now()
                    })
                },
                ...i
            }), Io = !0, ol || (ol = window.setInterval(() => {
                Date.now() - al > rl && st("Sprig_Noop", {})
            }, rl))
        } catch (o) {
            return Pe("Error initializing replay", o)
        }
    };
    let To = !1,
        Lo = [];
    const zh = e => {
            Lo.push(e), To || Wh()
        },
        Wh = () => {
            To = !0, setTimeout(async () => {
                if (Bt()) return;
                const e = Lo;
                Lo = [], To = !1;
                try {
                    await Rh(e)
                } catch (t) {
                    Pe("Error storing replay events", t)
                }
            }, 500)
        },
        Yh = (e = 6 * 60, t = 30 * 60, n = 4 * 60) => {
            const r = setInterval(() => {
                const i = Date.now();
                Bt() || G.transaction("rw!", G.events, G.chunkUploads, G.pendingCaptures, () => {
                    xo(i - e * 1e3, "events", o => o.expiredAt === void 0 || o.expiredAt < i - e * 1e3), xo(i - t * 1e3, "chunkUploads"), xo(i - n * 1e3, "pendingCaptures", o => o.canUpload === void 0 || o.canUpload === !1)
                }).catch(o => {
                    clearInterval(r), Pe("Error deleting table rows", o)
                })
            }, 3e4)
        },
        Qh = (e = 5) => {
            setInterval(iv, e * 1e3)
        },
        Zh = async (e, t, n, r, i) => {
            try {
                const o = Math.min(e + i, n),
                    a = await Ah(e, o);
                if (!(a != null && a.length)) return [r, []];
                if (!r) {
                    let s = -1;
                    return a == null || a.forEach((l, u) => {
                        if (!l.isValidStart) return;
                        const c = l.timestamp <= t;
                        (s < 0 || c) && (s = u)
                    }), s < 0 ? [] : [!0, a == null ? void 0 : a.slice(s)]
                }
                return [r, a]
            } catch (o) {
                Pe("Error getting events batch", o)
            }
        },
        Xh = (e, t, n) => {
            const r = e.length,
                i = t * 1024 * 1024,
                o = Math.ceil(r / n),
                a = Math.max(i, o),
                s = [];
            let l = 0;
            for (; l < r;) s.push(e.slice(l, l + a)), l += a;
            return s
        },
        sl = e => Promise.all(e.map(async t => {
            const n = await Wf(t);
            return await Dh(t.uuid, n), t.uploadId
        })),
        ll = async e => {
            const t = await Nh(e);
            if (!(t != null && t.length)) return;
            const n = t.reduce((o, a) => (o.find(s => s.chunkIndex === a.chunkIndex) || o.push(a), o), []);
            n.sort((o, a) => o.chunkIndex - a.chunkIndex);
            const r = n.map(o => ({
                    ETag: o.etag,
                    PartNumber: o.chunkIndex
                })).filter(o => o.ETag !== null),
                i = n[0];
            await ls({
                apiUrl: i.apiUrl,
                surveyId: i.surveyId,
                uploadId: e,
                responseGroupUuid: i.responseGroupId,
                etags: r,
                headers: i.completeUploadHeaders,
                replayDuration: i.replayDuration
            }), await Mh(e)
        },
        Jh = async () => {
            try {
                let e = [];
                if (await G.transaction("rw", G.chunkUploads, async () => {
                        e = await Ph({
                            status: dn.ReadyForUpload
                        }).catch(n => {
                            Pe("chunkUploads transaction error", n)
                        })
                    }), !(e != null && e.length)) return;
                const t = await sl(e);
                t != null && t.length && await Promise.all(t.map(async n => {
                    n && await ll(n)
                }))
            } catch (e) {
                Pe("Error getting chunk upload uuids", e)
            }
        },
        ev = async (e, t) => {
            await sl(t), await Promise.all(e.map(n => ll(n)))
        },
        tv = e => {
            let t = 0;
            e.forEach(i => {
                t += i.length
            });
            const n = new Uint8Array(t);
            let r = 0;
            return e.forEach(i => {
                n.set(i, r), r += i.length
            }), n
        },
        ul = async (e, t, n) => {
            const r = new TextEncoder;
            let i = null,
                o = null,
                a = null,
                s = !1,
                l = !1,
                [u, c] = [0, 0];
            const d = e - Nr * 1e3,
                f = [];
            let p = [];
            for (let h = d; h < t; h += Co) {
                if ([l, p] = await Zh(h, e, t, l, Co), !(p != null && p.length)) continue;
                u === 0 && (u = p[0].timestamp), c = p[p.length - 1].timestamp;
                const g = `${s?",":"["}${p.map(w=>w.event).join(",")}`,
                    _ = r.encode(g);
                n ? (o === null && (a = new window.CompressionStream("gzip"), o = a.writable.getWriter()), o.write(_)) : f.push(_), s = !0
            }
            if (c - u < nl) return null;
            const v = r.encode("]");
            return o && a ? (o.write(v), o.close(), i = new Uint8Array(await new Response(a.readable).arrayBuffer())) : (f.push(v), i = tv(f)), i
        },
        nv = async (e, t) => {
            const n = window.CompressionStream !== void 0;
            let r = null;
            const i = t != null ? t : Date.now(),
                o = i - e;
            try {
                r = await ul(o, i, n)
            } catch (a) {
                if (a instanceof Error && window.UserLeap.reportError("Error compressing replay", a), n) try {
                    r = await ul(o, i, !1)
                } catch (s) {
                    Pe("fileData fallback failed", s)
                }
            }
            return r
        },
        cl = async e => {
            const {
                surveyId: t,
                responseGroupId: n,
                visitorId: r,
                apiUrl: i,
                completeUploadHeaders: o,
                replayParams: a,
                triggerTimestamp: s
            } = e, l = await nv(a.replayDurationSeconds * 1e3, s);
            if (!(l != null && l.length)) return;
            const u = Xh(l, a.minimumChunkSizeMb, a.signedUrls.length),
                c = await Promise.all(u.map(async (d, f) => {
                    const p = Qe(),
                        v = {
                            apiUrl: i,
                            chunkIndex: f + 1,
                            completeUploadHeaders: o,
                            etag: null,
                            responseGroupId: n,
                            status: dn.ReadyForUpload,
                            surveyId: t,
                            timestamp: s,
                            totalChunks: u.length,
                            data: d,
                            uploadId: a.uploadId,
                            uploadUrl: a.signedUrls[f].url,
                            uuid: p,
                            visitorId: r
                        };
                    return await Oh(v), v
                }));
            await ev([a.uploadId], c)
        },
        dl = async (e, t) => {
            try {
                if (Bt()) return;
                const {
                    isStandalone: n,
                    replayParams: r,
                    triggerTimestamp: i,
                    responseGroupId: o
                } = e, a = async () => {
                    setTimeout(() => B.removeListener(j.QuestionAnswered, a), 0), r.replayDurationType === jt.Before ? await cl(e) : await Fh(o)
                };
                if (r.replayDurationType === jt.After || r.replayDurationType === jt.BeforeAndAfter) {
                    n || B.on(j.QuestionAnswered, a), await rv(e);
                    return
                }
                if (n || t) await cl(e);
                else {
                    const s = Nr + r.replayDurationSeconds;
                    await Uh(i - s * 1e3, i, r.expirationTimeLimitMinutes), B.on(j.QuestionAnswered, a)
                }
            } catch (n) {
                Pe("Error scheduling or capturing replay", n)
            }
        },
        fl = () => {
            if (!Bt()) try {
                Lh()
            } catch (e) {
                Pe("Error clearing session event data", e)
            }
        };
    let at = vt.getItem(So);
    const rv = async e => {
            const {
                surveyId: t
            } = e, n = await Bh(), r = n == null ? void 0 : n.filter(a => a.captureParams.surveyId === t);
            if (r != null && r.length) return;
            const i = { ...e,
                replayParams: { ...e.replayParams
                }
            };
            e.replayParams.replayDurationType === jt.BeforeAndAfter && (i.replayParams.replayDurationSeconds *= 2), i.replayParams.replayDurationType = jt.Before;
            const o = e.triggerTimestamp + e.replayParams.replayDurationSeconds * 1e3;
            return i.triggerTimestamp = o, at = at ? (parseInt(at) + 1).toString() : "1", vt.setItem(So, at), Vh({
                uuid: Qe(),
                targetTimestamp: o,
                timestamp: Date.now(),
                captureParams: i
            })
        },
        iv = async () => {
            try {
                if (at && parseInt(at) > 0) {
                    const e = await jh();
                    e.length && await Promise.all(e.map(async t => {
                        await G.pendingCaptures.delete(t.uuid), await dl(t.captureParams, t.canUpload)
                    })), at = (parseInt(at) - e.length).toString(), vt.setItem(So, at)
                }
            } catch (e) {
                Pe("Error initiating pending captures", e)
            }
        },
        st = (e, t) => {
            var n, r;
            if (!!Io) try {
                (r = (n = window.rrwebRecord) == null ? void 0 : n.addCustomEvent) == null || r.call(n, e, t)
            } catch (i) {
                Pe("Error recording custom event", i)
            }
        },
        pl = e => {
            st("Sprig_PageView", e)
        },
        ov = e => {
            st("Sprig_TrackEvent", e)
        },
        av = e => {
            st("Sprig_ShowSurvey", e)
        },
        sv = e => {
            st("Sprig_SubmitSurvey", e)
        },
        lv = e => {
            st("Sprig_Click", e)
        },
        uv = () => {
            st("Sprig_Refresh", {})
        },
        cv = () => {
            st("Sprig_BackForward", {})
        },
        dv = e => {
            st("Sprig_Keystroke", e)
        },
        Pe = (e, t) => (Io = !1, kh(e, t)),
        Ro = {
            capture: !0
        },
        fv = ["a", "button", "input", "option", "li", "link"],
        pv = ["Escape", "Enter", "Backspace", "F5", "Tab"],
        hv = ["label", "type", "role", "title", "placeholder", "errormessage", "valuetext", "href"],
        hl = "aria-",
        vv = e => {
            const t = e.getAttribute("type");
            return t ? `${t} ${e.tagName.toLowerCase()}` : e.tagName.toLowerCase()
        },
        vl = e => {
            if (e.tagName.toLowerCase() === "html") return {
                element: "html"
            };
            const t = e.textContent,
                n = t ? {
                    text: t
                } : {};
            n.element = vv(e);
            for (const r of e.attributes) {
                let i = r.name;
                const o = r.value;
                i.startsWith(hl) && (i = i.substring(hl.length)), hv.includes(i) && (n[i] = o)
            }
            return n
        },
        mv = e => {
            if (!e) return {};
            const n = { ...vl(e)
                },
                r = e.parentElement;
            if (r && fv.includes(r.tagName.toLowerCase())) {
                const i = vl(r);
                Object.assign(n, i)
            }
            return n
        },
        ml = (e, t) => {
            lv({
                x: t.x,
                y: t.y,
                type: e,
                elementAttributes: mv(t.target)
            })
        },
        gv = e => t => ml(e, t),
        yv = e => {
            pv.includes(e.key) && dv({
                key: e.key
            })
        },
        _v = () => {
            window.performance.getEntriesByType("navigation").map(t => t.type).includes("reload") && uv()
        },
        wv = () => {
            window.performance.getEntriesByType("navigation").map(t => t.type).includes("back_forward") && cv()
        },
        bv = () => {
            window.addEventListener("click", gv(ko.Left), Ro), window.addEventListener("mousedown", e => {
                e.button === 2 && ml(ko.Right, e)
            }, Ro), window.addEventListener("keydown", yv, Ro), _v(), wv()
        };
    var L = (e => (e.ConsentLegal = "consentlegal", e.Likert = "likert", e.Matrix = "matrix", e.MultipleChoice = "multiplechoice", e.MultipleSelect = "multipleselect", e.NPS = "nps", e.Open = "open", e.RecordedTask = "recordedtask", e.TextUrlPrompt = "texturlprompt", e.Thanks = "thanks", e.Uploading = "uploading", e.VideoVoice = "videovoice", e))(L || {}),
        Ne = (e => (e.Answered = "answered", e.Contains = "contains", e.DoesNotContain = "notcontains", e.DoesNotInclude = "list_dni", e.Equal = "eq", e.GivenUp = "given_up", e.GreaterThan = "gt", e.GreaterThanOrEqual = "gte", e.LessThan = "lt", e.LessThanOrEqual = "lte", e.ListAll = "list_all", e.ListAtLeastOne = "list_alo", e.ListExact = "list_exact", e.NotEqual = "neq", e.Partial = "partial", e.Skipped = "skipped", e))(Ne || {}),
        fn = (e => (e.Camera = "camera", e.Microphone = "microphone", e.Screen = "screen", e))(fn || {}),
        Re = (e => (e.AvPermission = "av_permission", e.ScreenPermission = "screen_permission", e.StartTask = "start_task", e.CompleteTask = "complete_task", e))(Re || {}),
        Ft = (e => (e.Number = "number", e.Smiley = "smiley", e.Star = "star", e))(Ft || {}),
        $n, P, gl, pn, Ht, yl, _l, wl, Mr = {},
        bl = [],
        Ev = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function lt(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function El(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function ee(e, t, n) {
        var r, i, o, a = {};
        for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? $n.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
            for (o in e.defaultProps) a[o] === void 0 && (a[o] = e.defaultProps[o]);
        return Kn(e, a, r, i, null)
    }

    function Kn(e, t, n, r, i) {
        var o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: i == null ? ++gl : i
        };
        return i == null && P.vnode != null && P.vnode(o), o
    }

    function xl() {
        return {
            current: null
        }
    }

    function xe(e) {
        return e.children
    }

    function xv(e, t, n, r, i) {
        var o;
        for (o in n) o === "children" || o === "key" || o in t || Vr(e, o, null, n[o], r);
        for (o in t) i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Vr(e, o, t[o], n[o], r)
    }

    function Cl(e, t, n) {
        t[0] === "-" ? e.setProperty(t, n == null ? "" : n) : e[t] = n == null ? "" : typeof n != "number" || Ev.test(t) ? n : n + "px"
    }

    function Vr(e, t, n, r, i) {
        var o;
        e: if (t === "style")
            if (typeof n == "string") e.style.cssText = n;
            else {
                if (typeof r == "string" && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || Cl(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || Cl(e.style, t, n[t])
            }
        else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Il : Sl, o) : e.removeEventListener(t, o ? Il : Sl, o);
        else if (t !== "dangerouslySetInnerHTML") {
            if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
                e[t] = n == null ? "" : n;
                break e
            } catch {}
            typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
    }

    function Sl(e) {
        pn = !0;
        try {
            return this.l[e.type + !1](P.event ? P.event(e) : e)
        } finally {
            pn = !1
        }
    }

    function Il(e) {
        pn = !0;
        try {
            return this.l[e.type + !0](P.event ? P.event(e) : e)
        } finally {
            pn = !1
        }
    }

    function Me(e, t) {
        this.props = e, this.context = t
    }

    function qn(e, t) {
        if (t == null) return e.__ ? qn(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
        return typeof e.type == "function" ? qn(e) : null
    }

    function kl(e) {
        var t, n;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if ((n = e.__k[t]) != null && n.__e != null) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return kl(e)
        }
    }

    function Cv(e) {
        pn ? setTimeout(e) : _l(e)
    }

    function Ao(e) {
        (!e.__d && (e.__d = !0) && Ht.push(e) && !jr.__r++ || yl !== P.debounceRendering) && ((yl = P.debounceRendering) || Cv)(jr)
    }

    function jr() {
        var e, t, n, r, i, o, a, s;
        for (Ht.sort(function(l, u) {
                return l.__v.__b - u.__v.__b
            }); e = Ht.shift();) e.__d && (t = Ht.length, r = void 0, i = void 0, a = (o = (n = e).__v).__e, (s = n.__P) && (r = [], (i = lt({}, o)).__v = o.__v + 1, Uo(s, o, i, n.__n, s.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? qn(o) : a, o.__h), Ul(r, o), o.__e != a && kl(o)), Ht.length > t && Ht.sort(function(l, u) {
            return l.__v.__b - u.__v.__b
        }));
        jr.__r = 0
    }

    function Tl(e, t, n, r, i, o, a, s, l, u) {
        var c, d, f, p, v, h, g, _ = r && r.__k || bl,
            w = _.length;
        for (n.__k = [], c = 0; c < t.length; c++)
            if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Kn(null, p, null, null, p) : Array.isArray(p) ? Kn(xe, {
                    children: p
                }, null, null, null) : p.__b > 0 ? Kn(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
                if (p.__ = n, p.__b = n.__b + 1, (f = _[c]) === null || f && p.key == f.key && p.type === f.type) _[c] = void 0;
                else
                    for (d = 0; d < w; d++) {
                        if ((f = _[d]) && p.key == f.key && p.type === f.type) {
                            _[d] = void 0;
                            break
                        }
                        f = null
                    }
                Uo(e, p, f = f || Mr, i, o, a, s, l, u), v = p.__e, (d = p.ref) && f.ref != d && (g || (g = []), f.ref && g.push(f.ref, null, p), g.push(d, p.__c || v, p)), v != null ? (h == null && (h = v), typeof p.type == "function" && p.__k === f.__k ? p.__d = l = Ll(p, l, e) : l = Rl(e, p, f, _, v, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = qn(f))
            }
        for (n.__e = h, c = w; c--;) _[c] != null && (typeof n.type == "function" && _[c].__e != null && _[c].__e == n.__d && (n.__d = Al(r).nextSibling), Dl(_[c], _[c]));
        if (g)
            for (c = 0; c < g.length; c++) Ol(g[c], g[++c], g[++c])
    }

    function Ll(e, t, n) {
        for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Ll(r, t, n) : Rl(n, r, r, i, r.__e, t));
        return t
    }

    function ut(e, t) {
        return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
            ut(n, t)
        }) : t.push(e)), t
    }

    function Rl(e, t, n, r, i, o) {
        var a, s, l;
        if (t.__d !== void 0) a = t.__d, t.__d = void 0;
        else if (n == null || i != o || i.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(i), a = null;
            else {
                for (s = o, l = 0;
                    (s = s.nextSibling) && l < r.length; l += 1)
                    if (s == i) break e;
                e.insertBefore(i, o), a = o
            }
        return a !== void 0 ? a : i.nextSibling
    }

    function Al(e) {
        var t, n, r;
        if (e.type == null || typeof e.type == "string") return e.__e;
        if (e.__k) {
            for (t = e.__k.length - 1; t >= 0; t--)
                if ((n = e.__k[t]) && (r = Al(n))) return r
        }
        return null
    }

    function Uo(e, t, n, r, i, o, a, s, l) {
        var u, c, d, f, p, v, h, g, _, w, E, b, m, x, k, C = t.type;
        if (t.constructor !== void 0) return null;
        n.__h != null && (l = n.__h, s = t.__e = n.__e, t.__h = null, o = [s]), (u = P.__b) && u(t);
        try {
            e: if (typeof C == "function") {
                if (g = t.props, _ = (u = C.contextType) && r[u.__c], w = u ? _ ? _.props.value : u.__ : r, n.__c ? h = (c = t.__c = n.__c).__ = c.__E : ("prototype" in C && C.prototype.render ? t.__c = c = new C(g, w) : (t.__c = c = new Me(g, w), c.constructor = C, c.render = Iv), _ && _.sub(c), c.props = g, c.state || (c.state = {}), c.context = w, c.__n = r, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), C.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = lt({}, c.__s)), lt(c.__s, C.getDerivedStateFromProps(g, c.__s))), f = c.props, p = c.state, c.__v = t, d) C.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
                else {
                    if (C.getDerivedStateFromProps == null && g !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, w), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, w) === !1 || t.__v === n.__v) {
                        for (t.__v !== n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(I) {
                                I && (I.__ = t)
                            }), E = 0; E < c._sb.length; E++) c.__h.push(c._sb[E]);
                        c._sb = [], c.__h.length && a.push(c);
                        break e
                    }
                    c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, w), c.componentDidUpdate != null && c.__h.push(function() {
                        c.componentDidUpdate(f, p, v)
                    })
                }
                if (c.context = w, c.props = g, c.__P = e, b = P.__r, m = 0, "prototype" in C && C.prototype.render) {
                    for (c.state = c.__s, c.__d = !1, b && b(t), u = c.render(c.props, c.state, c.context), x = 0; x < c._sb.length; x++) c.__h.push(c._sb[x]);
                    c._sb = []
                } else
                    do c.__d = !1, b && b(t), u = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++m < 25);
                c.state = c.__s, c.getChildContext != null && (r = lt(lt({}, r), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(f, p)), k = u != null && u.type === xe && u.key == null ? u.props.children : u, Tl(e, Array.isArray(k) ? k : [k], t, n, r, i, o, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), h && (c.__E = c.__ = null), c.__e = !1
            } else o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sv(n.__e, t, n, r, i, o, a, l);
            (u = P.diffed) && u(t)
        }
        catch (I) {
            t.__v = null, (l || o != null) && (t.__e = s, t.__h = !!l, o[o.indexOf(s)] = null), P.__e(I, t, n)
        }
    }

    function Ul(e, t) {
        P.__c && P.__c(t, e), e.some(function(n) {
            try {
                e = n.__h, n.__h = [], e.some(function(r) {
                    r.call(n)
                })
            } catch (r) {
                P.__e(r, n.__v)
            }
        })
    }

    function Sv(e, t, n, r, i, o, a, s) {
        var l, u, c, d = n.props,
            f = t.props,
            p = t.type,
            v = 0;
        if (p === "svg" && (i = !0), o != null) {
            for (; v < o.length; v++)
                if ((l = o[v]) && "setAttribute" in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
                    e = l, o[v] = null;
                    break
                }
        }
        if (e == null) {
            if (p === null) return document.createTextNode(f);
            e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f), o = null, s = !1
        }
        if (p === null) d === f || s && e.data === f || (e.data = f);
        else {
            if (o = o && $n.call(e.childNodes), u = (d = n.props || Mr).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !s) {
                if (o != null)
                    for (d = {}, v = 0; v < e.attributes.length; v++) d[e.attributes[v].name] = e.attributes[v].value;
                (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
            }
            if (xv(e, f, d, i, s), c) t.__k = [];
            else if (v = t.props.children, Tl(e, Array.isArray(v) ? v : [v], t, n, r, i && p !== "foreignObject", o, a, o ? o[0] : n.__k && qn(n, 0), s), o != null)
                for (v = o.length; v--;) o[v] != null && El(o[v]);
            s || ("value" in f && (v = f.value) !== void 0 && (v !== e.value || p === "progress" && !v || p === "option" && v !== d.value) && Vr(e, "value", v, d.value, !1), "checked" in f && (v = f.checked) !== void 0 && v !== e.checked && Vr(e, "checked", v, d.checked, !1))
        }
        return e
    }

    function Ol(e, t, n) {
        try {
            typeof e == "function" ? e(t) : e.current = t
        } catch (r) {
            P.__e(r, n)
        }
    }

    function Dl(e, t, n) {
        var r, i;
        if (P.unmount && P.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ol(r, null, t)), (r = e.__c) != null) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (o) {
                P.__e(o, t)
            }
            r.base = r.__P = null, e.__c = void 0
        }
        if (r = e.__k)
            for (i = 0; i < r.length; i++) r[i] && Dl(r[i], t, n || typeof e.type != "function");
        n || e.__e == null || El(e.__e), e.__ = e.__e = e.__d = void 0
    }

    function Iv(e, t, n) {
        return this.constructor(e, n)
    }

    function hn(e, t, n) {
        var r, i, o;
        P.__ && P.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Uo(t, e = (!r && n || t).__k = ee(xe, null, [e]), i || Mr, Mr, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? $n.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Ul(o, e)
    }

    function Pl(e, t) {
        hn(e, t, Pl)
    }

    function kv(e, t, n) {
        var r, i, o, a = lt({}, e.props);
        for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
        return arguments.length > 2 && (a.children = arguments.length > 3 ? $n.call(arguments, 2) : n), Kn(e.type, a, r || e.key, i || e.ref, null)
    }

    function Nl(e, t) {
        var n = {
            __c: t = "__cC" + wl++,
            __: e,
            Consumer: function(r, i) {
                return r.children(i)
            },
            Provider: function(r) {
                var i, o;
                return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
                    return o
                }, this.shouldComponentUpdate = function(a) {
                    this.props.value !== a.value && i.some(function(s) {
                        s.__e = !0, Ao(s)
                    })
                }, this.sub = function(a) {
                    i.push(a);
                    var s = a.componentWillUnmount;
                    a.componentWillUnmount = function() {
                        i.splice(i.indexOf(a), 1), s && s.call(a)
                    }
                }), r.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }
    $n = bl.slice, P = {
        __e: function(e, t, n, r) {
            for (var i, o, a; t = t.__;)
                if ((i = t.__c) && !i.__) try {
                    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a) return i.__E = i
                } catch (s) {
                    e = s
                }
            throw e
        }
    }, gl = 0, pn = !1, Me.prototype.setState = function(e, t) {
        var n;
        n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = lt({}, this.state), typeof e == "function" && (e = e(lt({}, n), this.props)), e && lt(n, e), e != null && this.__v && (t && this._sb.push(t), Ao(this))
    }, Me.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), Ao(this))
    }, Me.prototype.render = xe, Ht = [], _l = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, jr.__r = 0, wl = 0;
    const Ml = e => {
            let t;
            const n = new Set,
                r = (l, u) => {
                    const c = typeof l == "function" ? l(t) : l;
                    if (!Object.is(c, t)) {
                        const d = t;
                        t = (u != null ? u : typeof c != "object") ? c : Object.assign({}, t, c), n.forEach(f => f(t, d))
                    }
                },
                i = () => t,
                s = {
                    setState: r,
                    getState: i,
                    subscribe: l => (n.add(l), () => n.delete(l)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, s), s
        },
        Tv = e => e ? Ml(e) : Ml;
    var Et, Q, Oo, Vl, vn = 0,
        jl = [],
        Br = [],
        Bl = P.__b,
        Fl = P.__r,
        Hl = P.diffed,
        $l = P.__c,
        Kl = P.unmount;

    function $t(e, t) {
        P.__h && P.__h(Q, e, vn || t), vn = 0;
        var n = Q.__H || (Q.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({
            __V: Br
        }), n.__[e]
    }

    function se(e) {
        return vn = 1, Do(Ql, e)
    }

    function Do(e, t, n) {
        var r = $t(Et++, 2);
        if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ql(void 0, t), function(o) {
                var a = r.__N ? r.__N[0] : r.__[0],
                    s = r.t(a, o);
                a !== s && (r.__N = [s, r.__[1]], r.__c.setState({}))
            }], r.__c = Q, !Q.u)) {
            Q.u = !0;
            var i = Q.shouldComponentUpdate;
            Q.shouldComponentUpdate = function(o, a, s) {
                if (!r.__c.__H) return !0;
                var l = r.__c.__H.__.filter(function(c) {
                    return c.__c
                });
                if (l.every(function(c) {
                        return !c.__N
                    })) return !i || i.call(this, o, a, s);
                var u = !1;
                return l.forEach(function(c) {
                    if (c.__N) {
                        var d = c.__[0];
                        c.__ = c.__N, c.__N = void 0, d !== c.__[0] && (u = !0)
                    }
                }), !(!u && r.__c.props === o) && (!i || i.call(this, o, a, s))
            }
        }
        return r.__N || r.__
    }

    function Ae(e, t) {
        var n = $t(Et++, 3);
        !P.__s && Mo(n.__H, t) && (n.__ = e, n.i = t, Q.__H.__h.push(n))
    }

    function Gn(e, t) {
        var n = $t(Et++, 4);
        !P.__s && Mo(n.__H, t) && (n.__ = e, n.i = t, Q.__h.push(n))
    }

    function xt(e) {
        return vn = 5, Fr(function() {
            return {
                current: e
            }
        }, [])
    }

    function ql(e, t, n) {
        vn = 6, Gn(function() {
            return typeof e == "function" ? (e(t()), function() {
                return e(null)
            }) : e ? (e.current = t(), function() {
                return e.current = null
            }) : void 0
        }, n == null ? n : n.concat(e))
    }

    function Fr(e, t) {
        var n = $t(Et++, 7);
        return Mo(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
    }

    function Gl(e, t) {
        return vn = 8, Fr(function() {
            return e
        }, t)
    }

    function zl(e) {
        var t = Q.context[e.__c],
            n = $t(Et++, 9);
        return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(Q)), t.props.value) : e.__
    }

    function Po(e, t) {
        P.useDebugValue && P.useDebugValue(t ? t(e) : e)
    }

    function Lv(e) {
        var t = $t(Et++, 10),
            n = se();
        return t.__ = e, Q.componentDidCatch || (Q.componentDidCatch = function(r, i) {
            t.__ && t.__(r, i), n[1](r)
        }), [n[0], function() {
            n[1](void 0)
        }]
    }

    function Wl() {
        var e = $t(Et++, 11);
        if (!e.__) {
            for (var t = Q.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++
        }
        return e.__
    }

    function Rv() {
        for (var e; e = jl.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(Hr), e.__H.__h.forEach(No), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], P.__e(t, e.__v)
            }
    }
    P.__b = function(e) {
        Q = null, Bl && Bl(e)
    }, P.__r = function(e) {
        Fl && Fl(e), Et = 0;
        var t = (Q = e.__c).__H;
        t && (Oo === Q ? (t.__h = [], Q.__h = [], t.__.forEach(function(n) {
            n.__N && (n.__ = n.__N), n.__V = Br, n.__N = n.i = void 0
        })) : (t.__h.forEach(Hr), t.__h.forEach(No), t.__h = [])), Oo = Q
    }, P.diffed = function(e) {
        Hl && Hl(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (jl.push(t) !== 1 && Vl === P.requestAnimationFrame || ((Vl = P.requestAnimationFrame) || Av)(Rv)), t.__H.__.forEach(function(n) {
            n.i && (n.__H = n.i), n.__V !== Br && (n.__ = n.__V), n.i = void 0, n.__V = Br
        })), Oo = Q = null
    }, P.__c = function(e, t) {
        t.some(function(n) {
            try {
                n.__h.forEach(Hr), n.__h = n.__h.filter(function(r) {
                    return !r.__ || No(r)
                })
            } catch (r) {
                t.some(function(i) {
                    i.__h && (i.__h = [])
                }), t = [], P.__e(r, n.__v)
            }
        }), $l && $l(e, t)
    }, P.unmount = function(e) {
        Kl && Kl(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach(function(r) {
            try {
                Hr(r)
            } catch (i) {
                t = i
            }
        }), n.__H = void 0, t && P.__e(t, n.__v))
    };
    var Yl = typeof requestAnimationFrame == "function";

    function Av(e) {
        var t, n = function() {
                clearTimeout(r), Yl && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        Yl && (t = requestAnimationFrame(n))
    }

    function Hr(e) {
        var t = Q,
            n = e.__c;
        typeof n == "function" && (e.__c = void 0, n()), Q = t
    }

    function No(e) {
        var t = Q;
        e.__c = e.__(), Q = t
    }

    function Mo(e, t) {
        return !e || e.length !== t.length || t.some(function(n, r) {
            return n !== e[r]
        })
    }

    function Ql(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Zl(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Vo(e, t) {
        for (var n in e)
            if (n !== "__source" && !(n in t)) return !0;
        for (var r in t)
            if (r !== "__source" && e[r] !== t[r]) return !0;
        return !1
    }

    function jo(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t
    }

    function $r(e) {
        this.props = e
    }

    function Xl(e, t) {
        function n(i) {
            var o = this.props.ref,
                a = o == i.ref;
            return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : Vo(this.props, i)
        }

        function r(i) {
            return this.shouldComponentUpdate = n, ee(e, i)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    }($r.prototype = new Me).isPureReactComponent = !0, $r.prototype.shouldComponentUpdate = function(e, t) {
        return Vo(this.props, e) || Vo(this.state, t)
    };
    var Jl = P.__b;
    P.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Jl && Jl(e)
    };
    var Uv = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function eu(e) {
        function t(n) {
            var r = Zl({}, n);
            return delete r.ref, e(r, n.ref || null)
        }
        return t.$$typeof = Uv, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
    }
    var tu = function(e, t) {
            return e == null ? null : ut(ut(e).map(t))
        },
        nu = {
            map: tu,
            forEach: tu,
            count: function(e) {
                return e ? ut(e).length : 0
            },
            only: function(e) {
                var t = ut(e);
                if (t.length !== 1) throw "Children.only";
                return t[0]
            },
            toArray: ut
        },
        Ov = P.__e;
    P.__e = function(e, t, n, r) {
        if (e.then) {
            for (var i, o = t; o = o.__;)
                if ((i = o.__c) && i.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
        }
        Ov(e, t, n, r)
    };
    var ru = P.unmount;

    function iu(e, t, n) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
            typeof r.__c == "function" && r.__c()
        }), e.__c.__H = null), (e = Zl({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
            return iu(r, t, n)
        })), e
    }

    function ou(e, t, n) {
        return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
            return ou(r, t, n)
        }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
    }

    function zn() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function au(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }

    function su(e) {
        var t, n, r;

        function i(o) {
            if (t || (t = e()).then(function(a) {
                    n = a.default || a
                }, function(a) {
                    r = a
                }), r) throw r;
            if (!n) throw t;
            return ee(n, o)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    }

    function mn() {
        this.u = null, this.o = null
    }
    P.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), ru && ru(e)
    }, (zn.prototype = new Me).__c = function(e, t) {
        var n = t.__c,
            r = this;
        r.t == null && (r.t = []), r.t.push(n);
        var i = au(r.__v),
            o = !1,
            a = function() {
                o || (o = !0, n.__R = null, i ? i(s) : s())
            };
        n.__R = a;
        var s = function() {
                if (!--r.__u) {
                    if (r.state.__a) {
                        var u = r.state.__a;
                        r.__v.__k[0] = ou(u, u.__c.__P, u.__c.__O)
                    }
                    var c;
                    for (r.setState({
                            __a: r.__b = null
                        }); c = r.t.pop();) c.forceUpdate()
                }
            },
            l = t.__h === !0;
        r.__u++ || l || r.setState({
            __a: r.__b = r.__v.__k[0]
        }), e.then(a, a)
    }, zn.prototype.componentWillUnmount = function() {
        this.t = []
    }, zn.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = iu(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var i = t.__a && ee(xe, null, e.fallback);
        return i && (i.__h = null), [ee(xe, null, t.__a ? null : e.children), i]
    };
    var lu = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
            for (n = e.u; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2]
            }
    };

    function Dv(e) {
        return this.getChildContext = function() {
            return e.context
        }, e.children
    }

    function Pv(e) {
        var t = this,
            n = e.i;
        t.componentWillUnmount = function() {
            hn(null, t.l), t.l = null, t.i = null
        }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(r) {
                this.childNodes.push(r), t.i.appendChild(r)
            },
            insertBefore: function(r, i) {
                this.childNodes.push(r), t.i.appendChild(r)
            },
            removeChild: function(r) {
                this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r)
            }
        }), hn(ee(Dv, {
            context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }

    function uu(e, t) {
        var n = ee(Pv, {
            __v: e,
            i: t
        });
        return n.containerInfo = t, n
    }(mn.prototype = new Me).__a = function(e) {
        var t = this,
            n = au(t.__v),
            r = t.o.get(e);
        return r[0]++,
            function(i) {
                var o = function() {
                    t.props.revealOrder ? (r.push(i), lu(t, e, r)) : i()
                };
                n ? n(o) : o()
            }
    }, mn.prototype.render = function(e) {
        this.u = null, this.o = new Map;
        var t = ut(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }, mn.prototype.componentDidUpdate = mn.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach(function(t, n) {
            lu(e, n, t)
        })
    };
    var cu = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
        Nv = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Mv = typeof document < "u",
        Vv = function(e) {
            return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
        };

    function du(e, t, n) {
        return t.__k == null && (t.textContent = ""), hn(e, t), typeof n == "function" && n(), e ? e.__c : null
    }

    function fu(e, t, n) {
        return Pl(e, t), typeof n == "function" && n(), e ? e.__c : null
    }
    Me.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
        Object.defineProperty(Me.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var pu = P.event;

    function jv() {}

    function Bv() {
        return this.cancelBubble
    }

    function Fv() {
        return this.defaultPrevented
    }
    P.event = function(e) {
        return pu && (e = pu(e)), e.persist = jv, e.isPropagationStopped = Bv, e.isDefaultPrevented = Fv, e.nativeEvent = e
    };
    var hu, vu = {
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        mu = P.vnode;
    P.vnode = function(e) {
        var t = e.type,
            n = e.props,
            r = n;
        if (typeof t == "string") {
            var i = t.indexOf("-") === -1;
            for (var o in r = {}, n) {
                var a = n[o];
                Mv && o === "children" && t === "noscript" || o === "value" && "defaultValue" in n && a == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Vv(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Nv.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = a)
            }
            t == "select" && r.multiple && Array.isArray(r.value) && (r.value = ut(n.children).forEach(function(s) {
                s.props.selected = r.value.indexOf(s.props.value) != -1
            })), t == "select" && r.defaultValue != null && (r.value = ut(n.children).forEach(function(s) {
                s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value
            })), e.props = r, n.class != n.className && (vu.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", vu))
        }
        e.$$typeof = cu, mu && mu(e)
    };
    var gu = P.__r;
    P.__r = function(e) {
        gu && gu(e), hu = e.__c
    };
    var yu = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(e) {
                        return hu.__n[e.__c].props.value
                    }
                }
            }
        },
        Hv = "17.0.2";

    function _u(e) {
        return ee.bind(null, e)
    }

    function Bo(e) {
        return !!e && e.$$typeof === cu
    }

    function wu(e) {
        return Bo(e) ? kv.apply(null, arguments) : e
    }

    function bu(e) {
        return !!e.__k && (hn(null, e), !0)
    }

    function Eu(e) {
        return e && (e.base || e.nodeType === 1 && e) || null
    }
    var xu = function(e, t) {
            return e(t)
        },
        Cu = function(e, t) {
            return e(t)
        },
        Su = xe;

    function Fo(e) {
        e()
    }

    function Iu(e) {
        return e
    }

    function ku() {
        return [!1, Fo]
    }
    var Tu = Gn;

    function Lu(e, t) {
        var n = t(),
            r = se({
                h: {
                    __: n,
                    v: t
                }
            }),
            i = r[0].h,
            o = r[1];
        return Gn(function() {
            i.__ = n, i.v = t, jo(i.__, t()) || o({
                h: i
            })
        }, [e, n, t]), Ae(function() {
            return jo(i.__, i.v()) || o({
                h: i
            }), e(function() {
                jo(i.__, i.v()) || o({
                    h: i
                })
            })
        }, [e]), n
    }
    var $v = {
        useState: se,
        useId: Wl,
        useReducer: Do,
        useEffect: Ae,
        useLayoutEffect: Gn,
        useInsertionEffect: Tu,
        useTransition: ku,
        useDeferredValue: Iu,
        useSyncExternalStore: Lu,
        startTransition: Fo,
        useRef: xt,
        useImperativeHandle: ql,
        useMemo: Fr,
        useCallback: Gl,
        useContext: zl,
        useDebugValue: Po,
        version: "17.0.2",
        Children: nu,
        render: du,
        hydrate: fu,
        unmountComponentAtNode: bu,
        createPortal: uu,
        createElement: ee,
        createContext: Nl,
        createFactory: _u,
        cloneElement: wu,
        createRef: xl,
        Fragment: xe,
        isValidElement: Bo,
        findDOMNode: Eu,
        Component: Me,
        PureComponent: $r,
        memo: Xl,
        forwardRef: eu,
        flushSync: Cu,
        unstable_batchedUpdates: xu,
        StrictMode: Su,
        Suspense: zn,
        SuspenseList: mn,
        lazy: su,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yu
    };
    const Kv = Object.freeze(Object.defineProperty({
        __proto__: null,
        Children: nu,
        PureComponent: $r,
        StrictMode: Su,
        Suspense: zn,
        SuspenseList: mn,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yu,
        cloneElement: wu,
        createFactory: _u,
        createPortal: uu,
        default: $v,
        findDOMNode: Eu,
        flushSync: Cu,
        forwardRef: eu,
        hydrate: fu,
        isValidElement: Bo,
        lazy: su,
        memo: Xl,
        render: du,
        startTransition: Fo,
        unmountComponentAtNode: bu,
        unstable_batchedUpdates: xu,
        useDeferredValue: Iu,
        useInsertionEffect: Tu,
        useSyncExternalStore: Lu,
        useTransition: ku,
        version: Hv,
        Component: Me,
        Fragment: xe,
        createContext: Nl,
        createElement: ee,
        createRef: xl,
        useCallback: Gl,
        useContext: zl,
        useDebugValue: Po,
        useEffect: Ae,
        useErrorBoundary: Lv,
        useId: Wl,
        useImperativeHandle: ql,
        useLayoutEffect: Gn,
        useMemo: Fr,
        useReducer: Do,
        useRef: xt,
        useState: se
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var Ru = {
            exports: {}
        },
        Au = {};
    const Uu = Tt(Kv);
    var Ou = {
            exports: {}
        },
        Du = {};
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var gn = Uu;

    function qv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Gv = typeof Object.is == "function" ? Object.is : qv,
        zv = gn.useState,
        Wv = gn.useEffect,
        Yv = gn.useLayoutEffect,
        Qv = gn.useDebugValue;

    function Zv(e, t) {
        var n = t(),
            r = zv({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            i = r[0].inst,
            o = r[1];
        return Yv(function() {
            i.value = n, i.getSnapshot = t, Ho(i) && o({
                inst: i
            })
        }, [e, n, t]), Wv(function() {
            return Ho(i) && o({
                inst: i
            }), e(function() {
                Ho(i) && o({
                    inst: i
                })
            })
        }, [e]), Qv(n), n
    }

    function Ho(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Gv(e, n)
        } catch {
            return !0
        }
    }

    function Xv(e, t) {
        return t()
    }
    var Jv = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Xv : Zv;
    Du.useSyncExternalStore = gn.useSyncExternalStore !== void 0 ? gn.useSyncExternalStore : Jv,
        function(e) {
            e.exports = Du
        }(Ou);
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Kr = Uu,
        em = Ou.exports;

    function tm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var nm = typeof Object.is == "function" ? Object.is : tm,
        rm = em.useSyncExternalStore,
        im = Kr.useRef,
        om = Kr.useEffect,
        am = Kr.useMemo,
        sm = Kr.useDebugValue;
    Au.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
            var o = im(null);
            if (o.current === null) {
                var a = {
                    hasValue: !1,
                    value: null
                };
                o.current = a
            } else a = o.current;
            o = am(function() {
                function l(p) {
                    if (!u) {
                        if (u = !0, c = p, p = r(p), i !== void 0 && a.hasValue) {
                            var v = a.value;
                            if (i(v, p)) return d = v
                        }
                        return d = p
                    }
                    if (v = d, nm(c, p)) return v;
                    var h = r(p);
                    return i !== void 0 && i(v, h) ? v : (c = p, d = h)
                }
                var u = !1,
                    c, d, f = n === void 0 ? null : n;
                return [function() {
                    return l(t())
                }, f === null ? void 0 : function() {
                    return l(f())
                }]
            }, [t, n, r, i]);
            var s = rm(e, o[0], o[1]);
            return om(function() {
                a.hasValue = !0, a.value = s
            }, [s]), sm(s), s
        },
        function(e) {
            e.exports = Au
        }(Ru);
    const lm = Ye(Ru.exports),
        {
            useSyncExternalStoreWithSelector: um
        } = lm;

    function cm(e, t = e.getState, n) {
        const r = um(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
        return Po(r), r
    }
    const Pu = e => {
            const t = typeof e == "function" ? Tv(e) : e,
                n = (r, i) => cm(t, r, i);
            return Object.assign(n, t), n
        },
        Nu = e => e ? Pu(e) : Pu;
    window.UserLeap && window.Sprig && (window.Sprig._gtm ? window.Sprig = window.UserLeap : window.UserLeap = window.Sprig), window.UserLeap || (window.UserLeap = window.Sprig), window.Sprig || (window.Sprig = window.UserLeap);
    const dm = "rgba(255,255,255, 0.95)",
        fm = "rgba(0,0,0,0.9)",
        Mu = "360px",
        $o = "0px",
        Vu = () => {
            window.UserLeap.container = document.createElement("div"), window.UserLeap.container.className = "ul-container", document.body.appendChild(window.UserLeap.container)
        },
        ju = e => {
            gm();
            const t = window.UserLeap.container;
            if (!(!t || !t.parentNode)) try {
                t.parentNode.removeChild(t), window.UserLeap.container = null, Ce("trackStartUrl", null), B.emit(j.SurveyLifeCycle, {
                    state: "dismissed"
                }), B.emit(j.SurveyClosed, {
                    name: j.SurveyClosed,
                    initiator: e
                })
            } catch (n) {
                console.warn(`[Sprig] (ERR-412) Error removing UserLeap container by ${e} ` + t), n instanceof Error && window.UserLeap.reportError("dismissActiveSurvey", n)
            }
        },
        Bu = () => {
            B.on(j.SurveyWillClose, ({
                initiator: e
            }) => {
                ju(e)
            })
        },
        pm = (e, t) => {
            const r = { ...{
                        position: "fixed",
                        overflow: "auto",
                        top: "0px",
                        left: "0px",
                        display: "none",
                        height: "100%",
                        width: "100%",
                        transition: "background-color 0.3s ease-out",
                        zIndex: 2147483646
                    }
                },
                i = t ? e.overlayStyleMobile : e.overlayStyle;
            r["background-color"] = i === "light" ? dm : fm, t || (r.margin = "auto"), window.UserLeap.container && Object.assign(window.UserLeap.container.style, r)
        },
        hm = (e, t, n) => {
            var s, l;
            const r = {
                    position: "fixed",
                    bottom: "0px",
                    right: $o,
                    border: 0,
                    backgroundColor: "rgba(0,0,0,0)",
                    zIndex: 2147483646,
                    transition: "width 0.2s ease-in-out, height 0.2s ease-in-out"
                },
                i = Object.assign({}, t, window.UserLeap);
            let o, a = !1;
            return n ? ((s = window.UserLeap.windowDimensions) != null && s.width ? r.width = `${window.UserLeap.windowDimensions.width}px` : r.width = "100%", (l = window.UserLeap.windowDimensions) != null && l.height ? r.maxHeight = `${window.UserLeap.windowDimensions.height-20}px` : window.UserLeap.maxHeight ? r.maxHeight = window.UserLeap.maxHeight : r.maxHeight = `${document.body.clientHeight-20}px`, ["light", "dark"].includes(i.overlayStyleMobile) && (a = !0)) : (r.width = Mu, r.maxHeight = window.UserLeap.maxHeight || "66vh", i.framePosition === xn.BottomLeft ? o = {
                left: $o
            } : i.framePosition === xn.TopLeft ? o = {
                left: $o,
                top: 0
            } : i.framePosition === xn.TopRight ? o = {
                top: 0
            } : i.framePosition === xn.Center && (a = !0, o = {
                margin: "auto",
                position: "static"
            }, r.maxHeight = null)), a && pm(i, n), Object.assign(e.style, r, o), a
        },
        vm = (e, t, n) => {
            var l, u;
            const r = "ul-frame";
            Vu(), mm();
            const i = document.createElement("iframe");
            i.id = r, i.setAttribute("title", "Sprig User Feedback Dialog");
            const o = hm(i, e, t);
            Bu(), i.setHeight = c => {
                parseInt(i.style.height) != c && (i.style.height = `${c}px`, B.emit(j.SurveyHeight, {
                    name: j.SurveyHeight,
                    contentFrameHeight: c
                }))
            }, i.setWidth = c => {
                parseInt(i.style.width) != c && (i.style.width = `${c}px`, B.emit(j.SurveyWidth, {
                    name: j.SurveyWidth,
                    contentFrameWidth: c
                }))
            }, (l = window.UserLeap.container) == null || l.appendChild(i), e && (t ? e.exitOnOverlayClickMobile : e.exitOnOverlayClick) && window.UserLeap.container && (window.UserLeap.container.onclick = () => {
                B.emit(j.CloseSurveyOnOverlayClick)
            }), B.emit(j.SurveyLifeCycle, {
                state: "presented"
            }), B.emit(j.SurveyPresented, {
                name: j.SurveyPresented,
                [En.SurveyId]: n
            });
            const a = (u = i.contentWindow) == null ? void 0 : u.document;
            a && (a.open("text/html", "replace"), a.write("<!doctype html><head></head><body></body></html>"), a.close());
            const s = a == null ? void 0 : a.head;
            return {
                frameId: r,
                contentWinDocHead: s,
                contentWindow: i.contentWindow,
                hasOverlay: o,
                iframe: i
            }
        },
        Fu = {
            [j.SurveyFadingOut]: () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    "background-color": "rgba(0,0,0,0)"
                })
            }
        },
        mm = () => {
            Object.entries(Fu).forEach(([e, t]) => {
                B.on(e, t)
            })
        },
        gm = () => {
            Object.entries(Fu).forEach(([e, t]) => {
                B.off(e, t)
            })
        };
    var Ko = (e => (e[e.And = 1] = "And", e[e.Or = 2] = "Or", e))(Ko || {});
    const Hu = 1,
        qo = {
            eq(e, t) {
                return e == t
            },
            neq(e, t) {
                return !this.eq(e, t)
            },
            gt(e, t) {
                return e > t
            },
            gte(e, t) {
                return e >= t
            },
            lt(e, t) {
                return e < t
            },
            lte(e, t) {
                return e <= t
            },
            list_exact(e, t) {
                return !Array.isArray(e) || !Array.isArray(t) ? !1 : e.slice().sort().join(",") === t.slice().sort().join(",")
            },
            list_all(e, t) {
                return !Array.isArray(e) || !Array.isArray(t) ? !1 : !t.some(n => e.indexOf(n) === -1)
            },
            list_alo(e, t) {
                if (!Array.isArray(t)) return !1;
                const n = Array.isArray(e) ? e : [e],
                    r = new Set(n);
                return t.some(i => r.has(i))
            },
            list_dni(e, t) {
                if (!Array.isArray(t)) return !1;
                const n = Array.isArray(e) ? e : [e],
                    r = new Set(n);
                return t.every(i => !r.has(i))
            },
            contains(e, t) {
                const n = e.toLowerCase(),
                    r = t.toLowerCase();
                return n.includes(r)
            },
            notcontains(e, t) {
                return !this.contains(e, t)
            }
        },
        ym = (e, t, n) => {
            switch (t) {
                case L.VideoVoice:
                    return Boolean(e && e.value);
                case L.Open:
                    return !!n;
                case L.MultipleSelect:
                    return Boolean(n && !!Object.keys(n).length);
                case L.RecordedTask:
                    return (n == null ? void 0 : n.taskStatus) === Le.Completed;
                case L.TextUrlPrompt:
                    return !e.value;
                case L.ConsentLegal:
                    return n !== null;
                case L.MultipleChoice:
                    return n !== void 0;
                case L.Matrix:
                    return Boolean(n && Object.values(n).every(r => r !== null));
                case L.NPS:
                    return n !== null;
                case L.Likert:
                    return n !== null;
                default:
                    return !0
            }
        },
        $u = (e, t) => {
            if (t === L.Matrix) {
                const n = Object.keys(e).length,
                    r = Object.values(e).filter(i => i !== null).length;
                return r > 0 && r < n
            }
            return !1
        },
        Ku = ({
            cards: e,
            index: t,
            hasEndCard: n,
            allResponses: r,
            uploadProgress: i = {}
        }) => {
            if (t >= e.length || t < 0) return null;
            const o = e[t];
            let a = t + 1;
            const s = o.props.routingOptions || [];
            for (let c = 0; c < s.length; c++) {
                const {
                    group: d,
                    target: f
                } = s[c];
                if (!(d != null && d.length)) continue;
                const p = d[0];
                if (p.questionIndex === void 0 || p.questionIndex > r.length) continue;
                let v = qu({
                    comparator: p.comparator,
                    response: r[p.questionIndex],
                    type: o.type,
                    value: p.value
                });
                for (let h = 1; h < d.length; h += 2) {
                    const g = d[h],
                        _ = d[h + 1],
                        w = qu({
                            comparator: _.comparator,
                            response: r[_.questionIndex],
                            type: e[_.questionIndex].type,
                            value: _.value
                        });
                    g === Ko.And ? v && (v = w) : g === Ko.Or && (v || (v = w))
                }
                if (v) {
                    a = f === -1 && n ? e.length - 1 : f;
                    break
                }
            }
            const l = e.findIndex(c => c.type === L.Uploading);
            let u;
            return l > 0 ? u = n ? e.length - 3 : e.length - 2 : u = e.length - 1, t >= u || a === -1 || a !== null && a > u ? l > 0 && Object.values(i).some(d => d.isSubmitted && !d.isComplete) ? l : n ? e.length - 1 : null : a === -1 ? null : a
        },
        qu = ({
            comparator: e,
            response: t,
            type: n,
            value: r
        }) => {
            if (e === Ne.Answered) switch (n) {
                case L.TextUrlPrompt:
                    return t === void 0;
                case L.ConsentLegal:
                    return t && t.submitted === !0;
                case L.RecordedTask:
                    return "taskStatus" in t && t.taskStatus === Le.Completed;
                case L.Likert:
                    return Number.isInteger(t);
                case L.Open:
                    return t && t.length > 0;
                case L.MultipleChoice:
                case L.MultipleSelect:
                    return Object.keys(t).length > 0;
                case L.Matrix:
                    return Object.values(t).every(i => i !== null);
                case L.NPS:
                    return Number.isInteger(t);
                case L.VideoVoice:
                    return !!(t != null && t.mediaRecordingUid);
                default:
                    return !1
            }
            if (e === Ne.GivenUp) return n === L.RecordedTask ? "taskStatus" in t && t.taskStatus === Le.GivenUp : !0;
            if (e === Ne.Partial) return n === L.Matrix ? $u(t, n) : !1;
            if (e === Ne.Skipped) switch (n) {
                case L.TextUrlPrompt:
                    return t == null ? void 0 : t.skipped;
                case L.ConsentLegal:
                    return t === null;
                case L.RecordedTask:
                    return "taskStatus" in t && t.taskStatus === Le.Abandoned;
                case L.Likert:
                    return t === null;
                case L.Open:
                    return (t == null ? void 0 : t.length) === 0;
                case L.MultipleChoice:
                    return t === void 0;
                case L.MultipleSelect:
                    return (t == null ? void 0 : t.length) === 0;
                case L.Matrix:
                    return Object.values(t).every(i => i === null);
                case L.NPS:
                    return t === null;
                case L.VideoVoice:
                    return t === null;
                default:
                    return !1
            }
            return qo[e](t, r)
        },
        _m = 13,
        wm = (e, t) => e.reduce((n, r) => n.concat(n.map(i => [...i, r])), [
            []
        ]).filter(n => t || n.length > 0),
        bm = e => {
            var t, n, r;
            switch (e.type) {
                case L.MultipleSelect:
                    return !e || !e.props || !e.props.options ? null : e.props.options.length > _m ? e.props.options.map(i => [i.value]) : wm(e.props.options.map(i => i.value), !e.props.properties.required);
                case L.MultipleChoice:
                    {
                        if (!e || !e.props || !e.props.options) return null;
                        const i = e.props.options.map(o => o.value);
                        return e.props.properties.required || i.push(void 0),
                        i
                    }
                case L.Matrix:
                    {
                        if (!((t = e == null ? void 0 : e.props) != null && t.options)) return null;
                        const i = e.props.properties.matrixColumn,
                            o = e.props.options,
                            a = o.reduce((c, d) => (c[d.id] = null, c), {}),
                            s = { ...a,
                                [o[0].id]: i[0].value
                            },
                            l = o.reduce((c, d) => (c[d.id] = i[0].value, c), {}),
                            u = [s, l];
                        return e.props.properties.required || u.push(a),
                        u
                    }
                case L.Likert:
                    {
                        const i = Number((r = (n = e.props) == null ? void 0 : n.properties) == null ? void 0 : r.range) || 5;
                        return [...Array.from(Array(i).keys()).map(a => a + 1), ...e.props.properties.required ? [] : [null]]
                    }
                case L.NPS:
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...e.props.properties.required ? [] : [null]];
                case L.VideoVoice:
                case L.Open:
                    return ["1", ...e.props.properties.required ? [] : [""]];
                case L.RecordedTask:
                    return [{
                        taskStatus: Le.Completed
                    }, {
                        taskStatus: Le.GivenUp
                    }, ...e.props.properties.required ? [] : [{
                        taskStatus: Le.Abandoned
                    }]];
                case L.TextUrlPrompt:
                    return [void 0, ...e.props.properties.required ? [] : [{
                        skipped: !0
                    }]];
                case L.ConsentLegal:
                    return [Hu, ...e.props.properties.required ? [] : [null]];
                default:
                    return [Hu]
            }
        },
        Em = e => e in qo,
        xm = e => typeof e == "object" && e !== null && "taskStatus" in e,
        Cm = (e, t = []) => t.reduce((n, r) => {
            const {
                group: i,
                target: o
            } = r;
            if (!(i != null && i.length)) return [...n];
            const a = i.filter(s => Number(s) ? !0 : typeof s == "object" ? s.questionIndex === e : !1).map(s => {
                const {
                    comparator: l,
                    value: u
                } = s;
                return {
                    comparator: l,
                    target: o,
                    value: u
                }
            });
            return [...n, ...a]
        }, []),
        Sm = (e, t) => {
            const n = new Set([L.Thanks, L.Uploading]);
            if (t >= e.length || t < 0 || n.has(e[t].type)) return 0;
            const r = e.filter(o => !n.has(o.type));
            if (t === r.length - 1) return 1;
            const i = {
                [r.length - 1]: 1,
                [-1]: 0
            };
            for (let o = r.length - 2; o >= t; o--) {
                const a = r[o],
                    s = Cm(o, a.props.routingOptions);
                if (s.length === 0) {
                    i[o] = i[o + 1] + 1;
                    continue
                }
                let l = 0,
                    u = bm(a);
                if (u === null) return r.length - 1 - t;
                for (let c = 0; c < s.length && u.length !== 0; c++) {
                    const {
                        comparator: d,
                        target: f,
                        value: p
                    } = s[c], v = u.filter(h => {
                        const g = ym({
                                value: h
                            }, a.type, h),
                            _ = $u(h, a.type);
                        return !(g && d === Ne.Answered || _ && d === Ne.Partial || !g && !_ && d === Ne.Skipped || d === Ne.GivenUp && xm(h) && h.taskStatus === Le.GivenUp || g && a.type === L.Open && (d === Ne.Contains || d === Ne.DoesNotContain) || g && Em(d) && qo[d](h, p))
                    });
                    if (v.length < u.length) {
                        const h = parseInt(String(f), 10);
                        if (h !== -1 && h <= o || h >= r.length) return r.length - 1 - t;
                        l = Math.max(i[h] + 1, l)
                    }
                    u = v
                }
                u.length > 0 && (l = Math.max(i[o + 1] + 1, l)), i[o] = l
            }
            return i[t]
        },
        Im = e => !(e.type === L.Thanks || e.type === L.Uploading),
        Z = Nu()((e, t) => ({
            allResponses: [],
            answers: void 0,
            apiURL: "",
            border: "#000000",
            cards: [],
            close: async (n = Jt) => {
                const r = t(),
                    {
                        fadeout: i,
                        remove: o,
                        trackHistory: a
                    } = r;
                await i(n), Go(r) || a({
                    event: "closed"
                }), Ci.enable(), o({
                    initiator: Ze.Closed
                })
            },
            configureExitOnOverlayClick: () => {},
            customMetadata: {},
            destroy: async n => {
                const {
                    eventEmitFn: r,
                    fadeout: i,
                    remove: o
                } = t();
                r(ke.SurveyComplete), await i(n), Ci.enable(), o({
                    initiator: Ze.Complete
                })
            },
            endCard: {
                headline: ""
            },
            envId: "",
            eventEmitFn: B.emit.bind(B),
            fadeout: async n => {
                const {
                    eventEmitFn: r,
                    headers: i,
                    viewDocument: o
                } = t();
                return Cn(i) ? Promise.resolve() : (r(j.SurveyFadingOut), new Promise(a => {
                    const s = o.getElementById(n);
                    s ? (s.addEventListener("transitionend", () => {
                        a()
                    }), s.classList.remove("ul-app--visible")) : a()
                }))
            },
            forceBrandedLogo: !1,
            frame: document.createElement("iframe"),
            handleClickEmbedButton: n => {
                const {
                    cards: r,
                    eventEmitFn: i,
                    index: o
                } = t();
                i(n, {
                    [Rt.QuestionId]: r[o].name,
                    [Rt.Props]: r[o].props
                }), e(() => ({
                    hasViewedEmbed: !0
                }))
            },
            handleUploadUpdate: ({
                mediaRecordingUid: n,
                isComplete: r,
                progressPct: i,
                isSubmitted: o
            }) => {
                var p, v, h;
                const {
                    cards: a,
                    destroy: s,
                    index: l,
                    uploadProgress: u
                } = t(), c = r || ((p = u[n]) == null ? void 0 : p.isComplete), d = { ...u,
                    [n]: {
                        progressPct: c ? 100 : i || ((v = u[n]) == null ? void 0 : v.progressPct),
                        isComplete: c,
                        isSubmitted: o || ((h = u[n]) == null ? void 0 : h.isSubmitted)
                    }
                };
                if (e({
                        uploadProgress: d
                    }), a[l].type !== L.Uploading) return;
                const f = Object.entries(u).every(([g, _]) => !_.isSubmitted || _.isComplete || n == g && r);
                if (f && l >= a.length - 1) return s(Jt);
                e({
                    index: f ? l + 1 : l,
                    uploadingCardViewed: !0
                })
            },
            hasViewedEmbed: !1,
            headers: {
                Authorization: "",
                "Content-Type": "",
                "userleap-platform": At.Web,
                "x-ul-environment-id": "",
                "x-ul-installation-method": ht.Snippet,
                "x-ul-sdk-version": "",
                "x-ul-visitor-id": ""
            },
            index: 0,
            isPreview: !1,
            marketingUrl: "https://sprig.com",
            meta: {
                ch: 0,
                cw: 0,
                l: "",
                mode: null,
                p: "",
                sh: 0,
                sw: 0
            },
            mode: void 0,
            next: n => {
                const {
                    allResponses: r,
                    cards: i,
                    eventEmitFn: o,
                    index: a,
                    responseGroupUid: s,
                    submit: l,
                    trackHistory: u,
                    uploadProgress: c,
                    viewedCardCount: d
                } = t(), f = Date.now(), p = [...i], v = p[a], {
                    type: h
                } = n.data, g = { ...n.data
                }, _ = g.value;
                Im(v) && (v.value = _), g.answeredAt = f, delete g.type;
                const w = {
                    response: g,
                    responseGroupUid: s,
                    questionIndex: a
                };
                let E = h === L.MultipleChoice ? Object.values(_).find(C => C !== !1) : _;
                h === L.MultipleSelect && (E = p[a].props.options.reduce((C, I) => (_[I.id] && C.push(I.value), C), []));
                const b = r.slice(0);
                b[a] = E, e({
                    allResponses: b
                });
                const m = Ku({
                    cards: p,
                    index: a,
                    hasEndCard: !!n.endCard,
                    uploadProgress: c,
                    allResponses: b
                });
                if (m === null) {
                    w.completedAt = f, l(w), n.completeSurvey();
                    return
                } else [L.Thanks, L.Uploading].includes(p[m].type) && (w.completedAt = f);
                const x = l(w);
                [L.Thanks, L.Uploading].includes(p[m].type) || x.finally(() => {
                    u({
                        event: "seen",
                        index: m
                    })
                });
                const k = p[m];
                p[m] && o && o(ke.CurrentQuestion, {
                    [Rt.QuestionId]: k.name,
                    [Rt.Props]: k.props
                }), e({
                    cards: p,
                    hasViewedEmbed: !1,
                    index: m,
                    viewedCardCount: d + 1
                })
            },
            pendingRemoveIframeReason: null,
            previewKey: null,
            recorder: () => {},
            recorderEventEmitter: B,
            resolveTrackedPromise: () => {
                const {
                    removeIframeIfReady: n
                } = t();
                e(r => ({
                    unresolvedRequestCount: r.unresolvedRequestCount - 1
                })), n()
            },
            responseGroupUid: "",
            remove: ({
                initiator: n
            }) => {
                const {
                    removeIframeIfReady: r
                } = t();
                e({
                    pendingRemoveIframeReason: n
                }), r()
            },
            removeIframeIfReady: () => {
                const {
                    eventEmitFn: n,
                    pendingRemoveIframeReason: r,
                    unresolvedRequestCount: i
                } = t();
                r && i === 0 && (n(j.SurveyWillClose, {
                    name: j.SurveyWillClose,
                    initiator: r
                }), e({
                    pendingRemoveIframeReason: null
                }))
            },
            seen: async () => {
                const {
                    trackHistory: n
                } = t();
                return n({
                    event: "seen",
                    isNew: !0
                })
            },
            slugName: null,
            showStripes: !1,
            showSurveyBrand: !1,
            styleNonce: "",
            submit: async ({
                completedAt: n,
                questionIndex: r,
                response: i,
                responseGroupUid: o
            }) => {
                const a = t();
                if (!o || Go(a)) return;
                const s = {
                    responseGroupUid: o,
                    meta: a.meta,
                    customMetadata: a.customMetadata,
                    responses: [i],
                    completedAt: n,
                    previewKey: a.previewKey
                };
                n && sv({
                    id: a.surveyId
                });
                const l = await a.trackPromise(Xe(`${a.apiURL}/sdk/1/environments/${a.envId}/visitors/${a.userId}/responses/submit`, {
                    body: JSON.stringify(s),
                    headers: a.headers,
                    method: "POST"
                }));
                if (!l.ok) {
                    l.reportError && (console.warn("[Sprig] (ERR-427) Failed to submit response", l.error), await a.trackPromise(Gu(a, "submitResponse", l.error)));
                    return
                }
                a.eventEmitFn(j.QuestionAnswered, { ...i,
                    questionIndex: r
                })
            },
            surveyId: 0,
            tabTitle: "",
            trackHistory: async ({
                event: n,
                index: r,
                isNew: i = !1
            }) => {
                const o = t();
                if (Go(o)) return;
                const {
                    cards: a,
                    index: s
                } = o, l = r !== void 0 ? a[r] : a[s], u = {
                    sid: o.surveyId,
                    qid: l.name,
                    action: n,
                    vid: o.userId,
                    eid: o.envId,
                    isNew: i,
                    responseGroupUid: o.responseGroupUid,
                    previewKey: o.previewKey
                }, c = await o.trackPromise(Xe(`${o.apiURL}/sdk/1/visitors/${o.userId}/surveys/${o.surveyId}/history`, {
                    body: JSON.stringify(u),
                    headers: o.headers,
                    method: "POST"
                }));
                !c.ok && c.reportError && (console.warn("[Sprig] (ERR-428) Failed to track survey event", c.error), await o.trackPromise(Gu(o, "trackHistory", c.error)))
            },
            trackPromise: async n => {
                let {
                    resolveTrackedPromise: r
                } = t();
                return e(i => ({
                    unresolvedRequestCount: i.unresolvedRequestCount + 1
                })), n.then(i => (r(), i)).catch(i => {
                    throw r(), i
                })
            },
            unresolvedRequestCount: 0,
            update: () => {
                const {
                    cards: n,
                    index: r,
                    headers: i,
                    eventEmitFn: o,
                    frame: a,
                    viewDocument: s
                } = t(), u = n[r].type === L.Matrix;
                setTimeout(() => {
                    var f, p;
                    const [c, d] = Xa(s);
                    Cn(i) ? o(j.SurveyHeight, {
                        name: j.SurveyHeight,
                        contentFrameHeight: c
                    }) : ((f = a.setHeight) == null || f.call(a, c), (p = a.setWidth) == null || p.call(a, u ? d : parseInt(Mu)))
                }, 100)
            },
            uploadingCardViewed: !1,
            uploadProgress: {},
            useDesktopPrototype: void 0,
            useMobileStyling: !1,
            userId: "",
            viewDocument: window.document,
            viewedCardCount: 0
        })),
        Go = e => !e.userId || e.meta && e.meta.mode === "test" || e.isPreview,
        Gu = async (e, t, n) => {
            const {
                mode: r,
                userId: i,
                envId: o,
                apiURL: a,
                headers: s,
                viewDocument: l
            } = e, u = l.documentElement, c = {
                mode: r,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: u.clientWidth,
                clientHeight: u.clientHeight,
                location: window.location.href,
                language: window.navigator.language
            }, d = {
                action: t,
                err: {
                    message: n == null ? void 0 : n.message,
                    stack: n == null ? void 0 : n.stack
                },
                meta: c,
                vid: i,
                envId: o
            };
            (await Xe(`${a}/sdk/1/errors`, {
                method: "POST",
                headers: Object.assign({
                    "x-ul-error": window.btoa(`userleap-${Date.now()}-error`)
                }, s),
                body: JSON.stringify(d)
            })).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", n)
        },
        km = async (e, t) => {
            var r;
            const n = await fetch(t, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            });
            if (n.ok) {
                const i = await n.json();
                return (r = i == null ? void 0 : i.upload) == null ? void 0 : r.url
            } else return null
        },
        zu = () => MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4",
        Wu = e => {
            const t = {
                audioBitsPerSecond: 128e3,
                videoBitsPerSecond: 25e5,
                mimeType: zu()
            };
            return new MediaRecorder(e, t)
        },
        Yu = (e, t, n) => {
            n[t] = [], e.ondataavailable = function(r) {
                n[t].push(r.data)
            }, e.currentMediaRecordingUid = t, e.start()
        };

    function Qu(e, t, n, r, i, o) {
        if (e && e.state !== "inactive") {
            const {
                [$.BeginCallback]: a
            } = r, s = e.currentMediaRecordingUid;
            if (!s) return;
            a && a(s), e.onstop = () => Tm(t, e, n, r, s, i, o), e.stop()
        }
    }
    async function Tm(e, t, n, r, i, o, a) {
        const s = Z.getState().viewDocument,
            {
                [$.UploadCallback]: l,
                [$.ProgressCallback]: u
            } = r,
            c = {
                mediaType: n,
                updatedAt: new Date().toISOString(),
                mediaRecordingUid: i,
                ...r[$.PassthroughData]
            },
            d = await km(c, e);
        if (!d) {
            l && l(null, {
                message: "failed to get upload url"
            });
            return
        }
        const f = new Blob(a, {
            type: zu()
        });
        if (!s.defaultView) return;
        const p = new s.defaultView.File([f], `recording video ${Date.now()}`),
            v = o.createUpload({
                endpoint: d,
                file: p,
                chunkSize: 5120
            });
        v.on("error", h => {
            l && l(null, h)
        }), v.on("progress", h => {
            u && u(i, h)
        }), v.on("success", () => {
            l && l(i, !0)
        })
    }
    const Lm = {
            state: { ...{
                    chunks: {}
                }
            },
            stopRecording(e) {
                const {
                    uploadApiEndpoint: t,
                    avRecorder: n,
                    screenRecorder: r,
                    UpChunk: i
                } = this.state, o = this.state.avStream && this.state.avStream.getVideoTracks().length > 0 ? Te.Video : Te.Audio;
                this.state.chunks && t && i && (n != null && n.currentMediaRecordingUid && Qu(n, t, o, e, i, this.state.chunks[n == null ? void 0 : n.currentMediaRecordingUid]), r != null && r.currentMediaRecordingUid && Qu(r, t, Te.Screen, e, i, this.state.chunks[r == null ? void 0 : r.currentMediaRecordingUid]))
            },
            handleCancelledStream(e) {
                const t = e.getVideoTracks(),
                    n = e.getAudioTracks();
                let r = t.length && t[0];
                r = r || n.length && n[0], r && r.addEventListener("ended", () => {
                    [this.state.avRecorder, this.state.screenRecorder].map(i => {
                        i && (i.state === "recording" && i.stop(), i.stream.getTracks().map(o => {
                            o.readyState === "live" && o.stop()
                        }))
                    }), Object.assign(this.state, {
                        avStream: null,
                        captureStream: null,
                        avRecorder: null,
                        screenRecorder: null
                    })
                })
            },
            taskDurationMillisecond() {
                return this.state.startTime ? new Date().getTime() - this.state.startTime.getTime() : 0
            },
            setUpChunk(e) {
                this.state.UpChunk = e
            },
            configure(e, t) {
                Object.assign(this.state, t), this.state.uploadApiEndpoint = `${t.apiURL}/2/environments/integrations/upload`, this.state.chunks = {}, e.on(fe.PermissionStatus, this.permissionStatusCallback.bind(this)), e.on(fe.AvPermission, async n => {
                    this.avPermissionCallback(n)
                }), e.on(fe.BeginRecording, this.beginRecordingCallback.bind(this)), e.on(fe.StartTask, this.startTaskCallback.bind(this)), e.on(fe.ScreenPermission, async n => {
                    this.screenPermissionCallback(n)
                }), e.on(fe.FinishTask, async n => {
                    this.finishTaskCallback(n)
                })
            },
            async avPermissionCallback(e) {
                var r, i, o;
                const {
                    [$.StreamReadyCallback]: t, [$.PermissionDescriptors]: n
                } = e;
                try {
                    (r = this.state.avStream) != null && r.active && (this.state.avStream.getTracks().map(a => a.readyState === "live" && a.stop()), ((i = this.state.captureStream) == null ? void 0 : i.getAudioTracks().length) === 1 && this.state.captureStream.removeTrack(this.state.captureStream.getAudioTracks()[0])), this.state.avStream = await navigator.mediaDevices.getUserMedia({
                        video: n.includes(fn.Camera),
                        audio: !0
                    }), ((o = this.state.captureStream) == null ? void 0 : o.getAudioTracks().length) === 0 && this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]), this.handleCancelledStream(this.state.avStream)
                } catch (a) {
                    console.warn("Error: failed to get permissions: " + a), t && t(null, null);
                    return
                }
                t && t(this.state.avStream, this.state.captureStream)
            },
            async screenPermissionCallback(e) {
                const {
                    [$.ScreenPermissionRequested]: t, [$.StreamReadyCallback]: n
                } = e;
                t == null || t(!0);
                try {
                    this.state.captureStream = await navigator.mediaDevices.getDisplayMedia({
                        video: !0,
                        cursor: "always",
                        displaySurface: "browser",
                        preferCurrentTab: !0
                    })
                } catch (r) {
                    t == null || t(!1), console.warn("Error: failed to get permissions: " + r), n && n(null, null);
                    return
                }
                t == null || t(!1), this.state.avStream && this.state.avStream.getAudioTracks().length > 0 && this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]), this.handleCancelledStream(this.state.captureStream), n && n(this.state.avStream || null, this.state.captureStream)
            },
            beginRecordingCallback(e) {
                const {
                    [$.RecordingMediaTypes]: t, [$.StartRecordingCallback]: n
                } = e;
                if (!t) return;
                const r = [];
                if (t.includes(Te.Video) && this.state.avStream) {
                    this.state.avRecorder = Wu(this.state.avStream);
                    const i = Qe();
                    Yu(this.state.avRecorder, i, this.state.chunks), r.push(i)
                }
                if (t.includes(Te.Screen) && this.state.captureStream) {
                    this.state.screenRecorder = Wu(this.state.captureStream);
                    const i = Qe();
                    Yu(this.state.screenRecorder, i, this.state.chunks), r.push(i)
                }
                r && n && n(r)
            },
            async finishTaskCallback(e) {
                const {
                    [$.CurrentIndex]: t, [$.TaskResponse]: n, [$.TaskCompleteCallback]: r
                } = e;
                await this.stopRecording(e), r && r(this.taskDurationMillisecond()), this.state.cards && this.state.hasEndCard !== void 0 && this.lookAheadAndStopStream(t, n, this.state.cards, this.state.hasEndCard)
            },
            startTaskCallback() {
                this.state.startTime = new Date
            },
            permissionStatusCallback(e) {
                var r;
                const {
                    [$.PermissionStatusCallback]: t
                } = e, n = this.state.avStream;
                t && t(n, n ? (n == null ? void 0 : n.getVideoTracks().length) > 0 : !1, !!((r = this.state.captureStream) != null && r.active), this.state.captureStream)
            },
            lookAheadAndStopStream(e, t, n, r) {
                const {
                    avRecorder: i,
                    screenRecorder: o
                } = this.state, {
                    allResponses: a
                } = Z.getState(), s = Ku({
                    cards: n,
                    index: e,
                    hasEndCard: r,
                    allResponses: a
                });
                s !== null && n[s].type === L.RecordedTask || [i, o].map(l => {
                    l && (l.state === "recording" && l.stop(), l.stream.getTracks().map(u => {
                        u.readyState === "live" && u.stop()
                    }))
                })
            }
        },
        qr = Object.create(Lm);
    Object.freeze(qr);

    function Zu(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object")
            if (Array.isArray(e))
                for (t = 0; t < e.length; t++) e[t] && (n = Zu(e[t])) && (r && (r += " "), r += n);
            else
                for (t in e) e[t] && (r && (r += " "), r += t);
        return r
    }

    function F() {
        for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Zu(e)) && (r && (r += " "), r += t);
        return r
    }
    var Rm = 0;

    function y(e, t, n, r, i, o) {
        var a, s, l = {};
        for (s in t) s == "ref" ? a = t[s] : l[s] = t[s];
        var u = {
            type: e,
            props: l,
            key: n,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --Rm,
            __source: i,
            __self: o
        };
        if (typeof e == "function" && (a = e.defaultProps))
            for (s in a) l[s] === void 0 && (l[s] = a[s]);
        return P.vnode && P.vnode(u), u
    }
    const ye = e => y("button", { ...e,
            className: F("ul-card-text__button", e.className),
            id: "ul-card-text__button"
        }),
        Ve = ({
            message: e,
            properties: t
        }) => {
            const n = t == null ? void 0 : t.captionText;
            return y(xe, {
                children: [e && y("h1", {
                    className: U.QuestionHeader,
                    id: U.QuestionHeader,
                    ...n ? {} : {
                        style: {
                            marginBottom: "15px"
                        }
                    },
                    children: e
                }), n && y("p", {
                    className: U.Caption,
                    id: U.Caption,
                    children: n
                })]
            })
        },
        Xu = ({
            buttonText: e = "View Prototype",
            handleClick: t
        }) => y("button", {
            className: "prototype-button",
            onClick: t,
            children: e
        }, "prototype-btn"),
        ct = ({
            defaultBody: e,
            embeddedType: t = "prototype",
            properties: n
        }) => {
            var d;
            const {
                handleClickEmbedButton: r,
                hasViewedEmbed: i,
                headers: o,
                useDesktopPrototype: a
            } = Z(f => ({
                handleClickEmbedButton: f.handleClickEmbedButton,
                hasViewedEmbed: f.hasViewedEmbed,
                headers: f.headers,
                useDesktopPrototype: f.useDesktopPrototype
            })), s = (n == null ? void 0 : n.conceptUrl) || ((d = n == null ? void 0 : n.consentDocument) == null ? void 0 : d.url), l = window.innerWidth < Nf, u = o["userleap-platform"], c = (f, p) => {
                f.preventDefault(), r(p)
            };
            if (!a && l && !i && s && ["email", "link"].includes(u)) {
                if (t === "prototype") return y(Xu, {
                    handleClick: f => {
                        c(f, ke.ViewPrototypeClick)
                    }
                });
                if (t === "pdf") return y(Xu, {
                    buttonText: (n == null ? void 0 : n.viewDocumentText) || "View Document",
                    handleClick: f => {
                        c(f, ke.ViewAgreementClick)
                    }
                })
            }
            return e()
        },
        Ju = (e, t) => {
            const n = xt(0),
                r = () => {
                    if (e.current) {
                        const i = e.current;
                        i.style.height = "1px";
                        const o = i.scrollHeight,
                            a = i.offsetHeight - i.clientHeight,
                            s = o + a,
                            l = parseInt(window.getComputedStyle(i).getPropertyValue("max-height")),
                            u = s <= l ? s : l;
                        n.current !== u && t(), n.current = u, i.style.height = `${u}px`
                    }
                };
            return Ae(r, []), r
        },
        zo = ({
            ariaLabel: e,
            border: t,
            choiceStyle: n = {},
            label: r,
            isSelected: i,
            value: o,
            text: a,
            id: s,
            isRadio: l,
            useMobileStyling: u,
            error: c,
            allowTextEntry: d,
            promptText: f,
            onUserInputChanged: p
        }) => {
            const {
                styleNonce: v,
                viewDocument: h
            } = Z(T => ({
                styleNonce: T.styleNonce,
                viewDocument: T.viewDocument
            })), [g, _] = se(!1);
            Om(h, t, v);
            const w = ({
                    isSelected: T,
                    userText: D
                }) => {
                    p && p({
                        id: s || "",
                        selected: T,
                        value: o,
                        userText: D
                    })
                },
                E = T => {
                    T.stopPropagation(), w({
                        isSelected: l || !i,
                        userText: a
                    }), _(!1)
                },
                b = () => {
                    g || _(!0)
                },
                m = () => {
                    g && _(!1)
                },
                x = T => {
                    (T.key === "Enter" || T.key === " ") && E(T)
                },
                k = {
                    onClick: T => E(T),
                    onKeyPress: T => x(T)
                };
            "ontouchstart" in h.documentElement ? (k.onTouchStart = m, k.onTouchCancel = m, k.onTouchEnd = m) : (k.onMouseDown = b, k.onMouseLeave = m);
            const C = l ? `radio-${s}` : `checkbox-${s}`,
                I = i || g ? [Gr] : [],
                R = [...c ? [tc] : [], ...I],
                O = r ? {
                    "aria-labelledby": `label-${s}`
                } : {
                    "aria-label": e
                };
            return y("div", {
                className: F([...re(U.Choice, u), ...R]),
                id: `choice-div-${s}`,
                style: { ...n,
                    ...c ? {
                        borderColor: bn
                    } : {}
                },
                ...k,
                children: [y("div", {
                    className: F([U.ChoiceLabelContainer]),
                    children: [l ? y("div", { ...O,
                        className: F([U.ChoiceRadio, ...I]),
                        id: C,
                        role: "radio",
                        tabIndex: 0
                    }) : y("div", {
                        "aria-checked": i,
                        "aria-labelledby": `label-${s}`,
                        className: U.ChoiceCheckbox,
                        id: C,
                        role: "checkbox",
                        style: i ? {
                            backgroundColor: t,
                            borderColor: t,
                            boxShadow: "none"
                        } : {},
                        tabIndex: 0,
                        children: i && y("svg", {
                            fill: "none",
                            height: "10",
                            viewBox: "0 0 10 10",
                            width: "10",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: y("path", {
                                d: "M9.15377 1.30774L4.07685 8.23082L1.30762 5.00005",
                                stroke: "white",
                                strokeLinecap: "round",
                                strokeWidth: "2"
                            })
                        })
                    }), r && y("label", {
                        className: F(re(U.ChoiceLabel, u)),
                        htmlFor: C,
                        id: `label-${s}`,
                        children: r
                    })]
                }), d && i && y("div", {
                    className: F([U.ChoiceTextEntryContainer, ...I]),
                    children: y(Am, {
                        onTextChange: T => w({
                            isSelected: i,
                            userText: T
                        }),
                        promptText: f || "Please specify",
                        textValue: a,
                        useMobileStyling: u
                    })
                })]
            })
        },
        Am = ({
            promptText: e,
            textValue: t,
            onTextChange: n,
            useMobileStyling: r
        }) => {
            const i = xt(null),
                {
                    update: o
                } = Z(s => ({
                    update: s.update
                })),
                a = Ju(i, () => o());
            return Ae(() => {
                i.current && i.current.focus()
            }, []), y("textarea", {
                "aria-label": e,
                "aria-multiline": "true",
                "aria-placeholder": e,
                className: F(re(U.ChoiceTextInput, r)),
                "data-gramm": "false",
                maxLength: 5e3,
                name: "text",
                onChange: s => {
                    a(), s.stopPropagation(), n(s.currentTarget.value)
                },
                onClick: s => {
                    s.stopPropagation()
                },
                onKeyPress: s => {
                    s.stopPropagation()
                },
                placeholder: e,
                ref: i,
                role: "textbox",
                rows: 1,
                value: t
            })
        },
        ec = "ul-select-style-element",
        Gr = "ul-select-active-dynamic-style",
        tc = "ul-select-error-dynamic-style",
        Um = e => e.tagName.toLowerCase() === "style",
        Om = (e, t, n) => {
            let r = e.getElementById(ec),
                i = !1;
            r || (r = e.createElement("style"), i = !0), Um(r) && (r.id = ec, n && (r.nonce = n), r.textContent = Dm(t), i && e.head.appendChild(r))
        },
        Dm = e => `
    .${Gr} {
      border-color: ${e};
    }
    .${Gr} .${U.ChoiceRadio}, .${Gr}.${U.ChoiceRadio} {
      border: 6px solid ${e};
      box-shadow: none;
    }
    .${tc} {
      border-color: ${bn};
    }
  `,
        Kt = e => (e == null ? void 0 : e.buttonText) || "Next",
        Wo = e => (e == null ? void 0 : e.skipButtonText) || "Skip",
        Pm = ({
            className: e,
            message: t,
            next: n,
            properties: r,
            questionId: i,
            type: o
        }) => {
            const {
                useMobileStyling: a,
                border: s
            } = Z(I => ({
                useMobileStyling: I.useMobileStyling,
                border: I.border
            })), [l, u] = se(!1), [c, d] = se(""), [f, p] = se(!1), v = r == null ? void 0 : r.collectName, h = (r == null ? void 0 : r.nameLabelText) || "Full Name", g = (r == null ? void 0 : r.consentText) || "I agree to the stated conditions", _ = (r == null ? void 0 : r.submitButtonText) || "Submit", w = !!c.trim(), E = l && (!v || w), b = (I, R = !1) => {
                I.preventDefault(), I.stopPropagation();
                let O = null;
                if (!R) {
                    if (!E) {
                        p(!0);
                        return
                    }
                    O = {
                        submitted: !0
                    }, v && (O.name = c)
                }
                n({
                    value: O,
                    questionId: i,
                    type: o
                })
            }, m = I => {
                I.preventDefault(), I.stopPropagation(), d(I.currentTarget.value)
            }, x = I => {
                I.currentTarget.style.borderColor = f && !w ? bn : s
            }, k = I => {
                I.currentTarget.style.borderColor = f && !w ? bn : xi
            }, C = () => y("div", {
                children: [y(zo, {
                    allowTextEntry: !1,
                    border: s,
                    error: f && !l,
                    isRadio: !1,
                    isSelected: l,
                    label: g,
                    onUserInputChanged: ({
                        selected: I
                    }) => {
                        I !== l && u(!l)
                    },
                    useMobileStyling: a
                }), v && y("input", {
                    "aria-label": h,
                    "aria-placeholder": h,
                    className: F(re(U.ConsentLegalNameInput, a)),
                    "data-gramm": "false",
                    maxLength: 250,
                    name: "name",
                    onBlur: k,
                    onFocus: x,
                    onInput: m,
                    placeholder: h,
                    style: f && !w ? {
                        borderColor: bn
                    } : {},
                    tabIndex: 0,
                    value: c
                }), y("div", {
                    className: "ul-card__button-wrapper ul-card-vertical__button-wrapper",
                    children: [y(ye, {
                        className: E ? "" : U.ButtonDisabled,
                        onClick: b,
                        children: _
                    }), r.required === !1 && y("button", {
                        className: U.SkipButton,
                        onClick: I => b(I, !0),
                        children: Wo(r)
                    })]
                })]
            });
            return y("div", {
                className: F([e, "ul-card__consent-legal", U.FadeInTransition]),
                children: [y(Ve, {
                    message: t
                }), y("div", {
                    className: "ul-rich-text-body",
                    dangerouslySetInnerHTML: r && r.richTextBody ? {
                        __html: r && r.richTextBody
                    } : void 0,
                    id: "ul-card__consent-legal-body-container"
                }), y(ct, {
                    properties: r,
                    defaultBody: C,
                    embeddedType: "pdf"
                })]
            }, i)
        },
        Nm = ({
            activeValue: e,
            border: t,
            icon: n,
            isPressed: r,
            onSubmit: i,
            range: o,
            scaleLabelType: a,
            setActiveValue: s,
            setIsPressed: l,
            useMobileStyling: u,
            value: c
        }) => {
            const d = `option-${c}`,
                f = a === Ft.Number,
                p = a === Ft.Star,
                v = f && c === e,
                [h, g] = (() => c <= e && p || c === e ? r ? [t, 1] : [t, .3] : ["", 1])(),
                _ = () => {
                    switch (a) {
                        case Ft.Star:
                            return F([...re(U.LikertStar, u), ...re(`${U.LikertStar}-${c}`, u)]);
                        case Ft.Smiley:
                            return F([...re(U.LikertSmiley, u), ...re(`${U.LikertSmiley}-${c}`, u)]);
                        default:
                            return F(c === o ? [...re(U.LikertNumber, u), ...re(`${U.LikertNumber}-${c}`, u), ...re("likert-last-option", u)] : [...re(U.LikertNumber, u), ...re(`${U.LikertNumber}-${c}`, u)])
                    }
                },
                w = () => {
                    s(-1), l(!1)
                };
            return y("div", {
                "aria-label": f ? void 0 : String(c),
                className: _(),
                dangerouslySetInnerHTML: {
                    __html: n
                },
                id: d,
                onClick: () => i(),
                onPointerDown: () => l(!0),
                onPointerEnter: () => s(c),
                onPointerLeave: w,
                role: "radio",
                style: {
                    color: f ? "" : h,
                    borderColor: v ? h : "",
                    fillOpacity: v ? "" : g,
                    zIndex: v ? 3 : "auto"
                },
                tabIndex: 0
            })
        },
        Mm = ({
            className: e,
            labels: t,
            message: n,
            next: r,
            properties: i,
            questionId: o,
            type: a
        }) => {
            const {
                border: s,
                useMobileStyling: l
            } = Z(C => ({
                border: C.border,
                useMobileStyling: C.useMobileStyling
            })), [u, c] = se(-1), [d, f] = se(!1), p = t && t.left, v = t && t.right;
            let h;
            const {
                range: g,
                scaleLabelType: _,
                ratingIcons: w
            } = i;
            g && (h = Number(g));
            const E = h || 5,
                b = C => {
                    var I, R;
                    switch (_) {
                        case Ft.Star:
                            return (I = w[0]) == null ? void 0 : I.svg;
                        case Ft.Smiley:
                            return (R = w[C]) == null ? void 0 : R.svg;
                        default:
                            return String(C + 1)
                    }
                },
                m = [...Array(E)].map((C, I) => {
                    const R = I + 1;
                    return y(Nm, {
                        activeValue: u,
                        border: s,
                        icon: b(I),
                        isPressed: d,
                        onSubmit: () => r({
                            value: R,
                            questionId: o,
                            type: a
                        }),
                        range: E,
                        scaleLabelType: _,
                        setActiveValue: c,
                        setIsPressed: f,
                        useMobileStyling: l,
                        value: R
                    }, I)
                }),
                x = C => {
                    C.preventDefault(), C.stopPropagation(), r({
                        value: null,
                        questionId: o,
                        type: a
                    })
                },
                k = () => y(xe, {
                    children: [y("div", {
                        "aria-label": `Rating (1 - ${E})`,
                        className: "ul-card--likert__numbers",
                        role: "radiogroup",
                        children: m
                    }), y("div", {
                        className: "ul-card--likert__labels",
                        children: [y("span", {
                            children: p
                        }), y("span", {
                            children: v
                        })]
                    }), !i.required && y("div", {
                        className: "ul-vertical-centered-container",
                        children: y(ye, {
                            onClick: x,
                            children: Kt(i)
                        })
                    })]
                });
            return y("form", {
                className: F([e, "ul-card--likert", U.FadeInTransition]),
                children: [y(Ve, {
                    message: n,
                    properties: i
                }), y(ct, {
                    properties: i,
                    defaultBody: k
                })]
            }, o)
        },
        Vm = ({
            className: e,
            message: t,
            next: n,
            options: r,
            properties: i,
            questionId: o,
            type: a
        }) => {
            const {
                border: s,
                useMobileStyling: l
            } = Z(m => ({
                border: m.border,
                useMobileStyling: m.useMobileStyling
            })), u = i.matrixColumn, c = r.length, d = u.length, f = i.required, p = m => {
                m.preventDefault(), m.stopPropagation(), n({
                    value: h,
                    questionId: o,
                    type: a
                })
            }, v = r.reduce((m, x) => (m[x.id] = null, m), {}), [h, g] = se(v), _ = (m, x) => {
                g(k => ({ ...k,
                    [m]: x
                }))
            }, w = f && Object.values(h).every(m => m == null), E = r.map(m => y(xe, {
                children: [y("div", {
                    "aria-label": m.label,
                    className: "ul-matrix-row-label",
                    children: m.label
                }, m.label), y("div", {
                    className: "ul-matrix-row-options",
                    role: "radiogroup",
                    children: u.map((x, k) => {
                        const C = k === d - 1;
                        return y("div", {
                            className: F("ul-matrix-option-wrapper", C && "ul-matrix-last-option"),
                            children: y(zo, {
                                allowTextEntry: !1,
                                ariaLabel: `${m.label}-${x.label}`,
                                border: s,
                                choiceStyle: {
                                    background: "transparent",
                                    border: "none",
                                    marginBottom: "0",
                                    padding: "0"
                                },
                                error: !1,
                                id: `${m.id}-${x.value}`,
                                isRadio: !0,
                                isSelected: h[m.id] === x.value,
                                onUserInputChanged: () => _(m.id, x.value),
                                useMobileStyling: l
                            })
                        }, x.value)
                    })
                })]
            })), b = () => y("div", {
                children: [y("div", {
                    className: "ul-card--matrix_container",
                    style: `--maxWidth: ${Za()-74}px`,
                    children: y("div", {
                        className: "ul-card--matrix_grid",
                        style: `--numColumns: ${d}; --numRows: ${c+1}`,
                        children: [y("div", {}), " ", u.map(m => y("div", {
                            className: "ul-matrix-column-label",
                            children: m.label
                        }, m.label)), E]
                    })
                }), y("div", {
                    className: "ul-card__button-wrapper",
                    children: y(ye, {
                        disabled: w,
                        children: Kt(i)
                    })
                })]
            });
            return y("form", {
                className: F([e, U.FadeInTransition, "ul-card__matrix"]),
                id: "text-form",
                onSubmit: p,
                children: [y(Ve, {
                    message: t,
                    properties: i
                }), y(ct, {
                    properties: i,
                    defaultBody: b
                })]
            }, o)
        },
        nc = ({
            className: e,
            message: t,
            onSubmit: n,
            options: r = [],
            properties: i,
            questionId: o,
            type: a
        }) => {
            const {
                border: s,
                useMobileStyling: l
            } = Z(m => ({
                border: m.border,
                useMobileStyling: m.useMobileStyling
            })), u = r.reduce((m, x) => (m[x.id] = {
                isSelected: !1
            }, m), {}), [c, d] = se(u), f = a === L.MultipleChoice, p = i.required, v = Object.entries(c).some(([m, x]) => {
                var I;
                const k = r.find(R => `${R.id}` === m),
                    C = x.userText === void 0 || x.userText.trim() === "";
                return ((I = k == null ? void 0 : k.optionProperties) == null ? void 0 : I.allowsTextEntry) && C && x.isSelected
            }), h = Object.values(c).some(m => m.isSelected), g = v || p && !h, _ = r.map(({
                id: m,
                label: x,
                value: k,
                optionProperties: C
            }) => {
                var O, T;
                const I = `${m}`,
                    {
                        allowsTextEntry: R
                    } = C || {
                        allowsTextEntry: !1
                    };
                return y(zo, {
                    allowTextEntry: R,
                    border: s,
                    error: !1,
                    id: I,
                    isRadio: f,
                    isSelected: !!((O = c[I]) != null && O.isSelected),
                    label: x,
                    onUserInputChanged: D => E(D.id, D.selected, D.userText),
                    promptText: "Please specify",
                    text: (T = c[m]) == null ? void 0 : T.userText,
                    useMobileStyling: l,
                    value: k
                }, I)
            }), w = m => {
                m.preventDefault(), m.stopPropagation(), n(c)
            }, E = (m, x, k) => {
                const C = Object.assign({}, c);
                if (f && x)
                    for (const I of Object.values(C)) I.isSelected = !1, delete I.userText;
                C[m] = {
                    isSelected: x,
                    userText: k
                }, d(C)
            }, b = () => y("div", {
                children: [y("div", {
                    className: F(re(U.ChoiceGroup, l)),
                    role: f ? "radiogroup" : "group",
                    children: _
                }), y("div", {
                    className: "ul-card__button-wrapper",
                    children: y(ye, {
                        disabled: g,
                        onClick: w,
                        children: Kt(i)
                    })
                })]
            });
            return y("form", {
                className: F([e, "ul-card--multiple", U.FadeInTransition]),
                id: "text-form",
                onSubmit: w,
                children: [y(Ve, {
                    message: t,
                    properties: i
                }), y(ct, {
                    properties: i,
                    defaultBody: b
                })]
            }, o)
        },
        jm = e => {
            const {
                questionId: t,
                type: n,
                next: r,
                options: i
            } = e;
            return y(nc, { ...e,
                onSubmit: a => {
                    const s = Object.entries(a).find(([, f]) => f.isSelected) || [void 0, void 0],
                        [l, u] = s,
                        c = i.find(f => `${f.id}` === l),
                        d = u != null && u.userText ? {
                            [l]: {
                                userText: u.userText
                            }
                        } : null;
                    r({
                        value: c && l ? {
                            [l]: c.value
                        } : {},
                        secondaryValue: d,
                        questionId: t,
                        type: n
                    })
                }
            })
        },
        Bm = e => {
            const {
                questionId: t,
                type: n,
                next: r
            } = e;
            return y(nc, { ...e,
                onSubmit: o => {
                    const a = {},
                        s = Object.entries(o).reduce((u, [c, d]) => (u[c] = d.isSelected, u), a),
                        l = Object.entries(o).reduce((u, [c, d]) => {
                            if (!d.userText) return u;
                            const f = u || {};
                            return f[c] = {
                                userText: d.userText
                            }, f
                        }, null);
                    r({
                        value: s,
                        secondaryValue: l,
                        questionId: t,
                        type: n
                    })
                }
            })
        },
        Fm = ({
            className: e,
            props: {
                labels: t,
                message: n,
                properties: r
            },
            next: i,
            questionId: o,
            type: a
        }) => {
            const {
                border: s,
                useMobileStyling: l
            } = Z(v => ({
                border: v.border,
                useMobileStyling: v.useMobileStyling
            })), u = t && t.left, c = t && t.right, d = [...Array(11)].map((v, h) => y("div", {
                className: F([...re(U.NPSNumber, l), ...re(`${U.NPSNumber}-${h}`, l)]),
                id: `option-${h}`,
                onClick: () => i({
                    value: h,
                    questionId: o,
                    type: a
                }),
                onKeyPress: g => {
                    g.preventDefault(), (g.key === "Enter" || g.key === " ") && i({
                        value: h,
                        questionId: o,
                        type: a
                    })
                },
                onPointerDown: g => {
                    g.currentTarget.style.zIndex = "2", g.currentTarget.style.borderColor = s
                },
                onPointerLeave: g => {
                    g.currentTarget.style.zIndex = "auto", g.currentTarget.style.borderColor = xi
                },
                role: "radio",
                tabIndex: 0,
                children: h
            }, h)), f = v => {
                v.preventDefault(), v.stopPropagation(), i({
                    value: null,
                    questionId: o,
                    type: a
                })
            }, p = () => y("div", {
                children: [y("div", {
                    className: "ul-card--nps__numbers",
                    children: d
                }), y("div", {
                    className: "ul-card--nps__labels",
                    children: [y("span", {
                        children: u
                    }), y("span", {
                        children: c
                    })]
                }), !r.required && y("div", {
                    className: "ul-vertical-centered-container",
                    children: y(ye, {
                        onClick: f,
                        children: Kt(r)
                    })
                })]
            });
            return y("form", {
                className: F([e, "ul-card--nps", U.FadeInTransition]),
                children: [y(Ve, {
                    message: n,
                    properties: r
                }), y(ct, {
                    properties: r,
                    defaultBody: p
                })]
            }, o)
        },
        Hm = ({
            className: e,
            message: t,
            next: n,
            properties: r,
            questionId: i,
            type: o
        }) => {
            const {
                border: a,
                useMobileStyling: s,
                update: l
            } = Z(m => ({
                border: m.border,
                useMobileStyling: m.useMobileStyling,
                update: m.update
            })), [u, c] = se(""), d = xt(null), f = u.trim(), p = r.required === !0 && !f, v = Ju(d, () => l()), h = m => {
                v(), m.preventDefault(), m.stopPropagation(), c(m.currentTarget.value)
            }, g = m => {
                m.preventDefault(), m.stopPropagation(), n({
                    value: u,
                    questionId: i,
                    type: o
                })
            }, _ = r && r.openTextPlaceholder ? r.openTextPlaceholder : "", w = m => {
                m.currentTarget.style.borderColor = a
            }, E = m => {
                m.currentTarget.style.borderColor = xi
            }, b = () => y("div", {
                className: "ul-card-text",
                children: [y("div", {
                    className: "ul-card-text__container",
                    children: y("textarea", {
                        "aria-label": _,
                        "aria-labelledby": U.QuestionHeader,
                        "aria-multiline": "true",
                        "aria-placeholder": _,
                        className: F(re(U.OpenTextInput, s)),
                        "data-gramm": "false",
                        maxLength: 5e3,
                        name: "text",
                        onBlur: E,
                        onChange: h,
                        onFocus: w,
                        placeholder: _,
                        ref: d,
                        role: "textbox",
                        tabIndex: 0
                    })
                }), y(ye, {
                    disabled: p,
                    onClick: g,
                    style: {
                        backgroundColor: p ? "" : a
                    },
                    children: Kt(r)
                })]
            });
            return y("form", {
                className: F([e, "ul-card--text", U.FadeInTransition]),
                id: "text-form",
                children: [y(Ve, {
                    message: t,
                    properties: r
                }), y(ct, {
                    defaultBody: b,
                    properties: r
                })]
            }, i)
        };
    var Ct = (e => (e[e.RequestNeeded = 1] = "RequestNeeded", e[e.TryAgain = 2] = "TryAgain", e[e.Ready = 3] = "Ready", e))(Ct || {});
    const zr = e => e.type === Re.AvPermission,
        rc = e => e.type === Re.ScreenPermission,
        $m = (e, t) => !(zr(t) ? t.permissionDescriptors : []).includes(fn.Camera) || e.getVideoTracks().length > 0,
        ic = (e, t) => {
            if (e === void 0) return Ct.RequestNeeded;
            if (e) {
                if (!$m(e, t)) return Ct.RequestNeeded
            } else return Ct.TryAgain;
            return Ct.Ready
        },
        oc = {
            avStream: null,
            currentPage: null,
            mediaRecordingUids: null,
            nextQuestion: () => {},
            passthroughData: void 0,
            recordingMediaTypes: void 0,
            screenPermissionRequested: !1,
            type: void 0
        },
        Ge = Nu(e => ({ ...oc,
            reset: () => {
                e(oc)
            },
            updatePage: t => {
                e(t)
            }
        }));

    function Yo({
        currentPage: e,
        pages: t
    }) {
        const {
            avStream: n,
            recordingMediaTypes: r,
            updatePage: i
        } = Ge.getState(), {
            recorderEventEmitter: o
        } = Z.getState();
        o.emit(fe.AvPermission, {
            [$.PermissionDescriptors]: e.permissionDescriptors,
            [$.StreamReadyCallback]: (a, s) => {
                if (n === a) return;
                let l = e;
                if (a && !e.permissionDescriptors.includes(fn.Camera)) {
                    const u = t.indexOf(e),
                        c = s != null && s.active ? u + 2 : u + 1;
                    (s == null ? void 0 : s.active) && r && o.emit(fe.BeginRecording, {
                        [$.RecordingMediaTypes]: r,
                        [$.StartRecordingCallback]: d => i({
                            mediaRecordingUids: d
                        })
                    }), l = t[c]
                }
                i({
                    currentPage: l,
                    avStream: a
                })
            }
        })
    }

    function Km({
        pages: e,
        userId: t,
        responseGroupUid: n,
        surveyId: r,
        questionId: i,
        next: o
    }) {
        const {
            updatePage: a
        } = Ge.getState(), {
            eventEmitFn: s,
            recorderEventEmitter: l
        } = Z.getState(), u = {
            questionId: i,
            surveyId: r,
            visitorId: t,
            responseGroupUid: n
        };
        let c = 0;
        l.emit(ke.RecordedTaskPermissionScreen), s(ke.RecordedTaskPermissionScreen), l.emit(fe.PermissionStatus, {
            [$.PermissionStatusCallback]: (f, p, v, h) => {
                const g = e[c],
                    {
                        type: _
                    } = g,
                    w = [Te.Screen];
                if (zr(g)) {
                    const {
                        permissionDescriptors: E
                    } = g, b = E == null ? void 0 : E.includes(fn.Microphone), m = E == null ? void 0 : E.includes(fn.Camera);
                    b && w.push(Te.Audio), m && w.push(Te.Video);
                    const x = (f == null ? void 0 : f.active) && !m,
                        k = (f == null ? void 0 : f.active) && p;
                    (x || k) && c++
                }
                rc(e[c]) && v && (c++, l.emit(fe.BeginRecording, {
                    [$.RecordingMediaTypes]: w,
                    [$.StartRecordingCallback]: E => a({
                        mediaRecordingUids: E
                    })
                })), a({
                    currentPage: e[c],
                    avStream: f,
                    screenPermissionRequested: v,
                    nextQuestion: o,
                    type: _,
                    passthroughData: u,
                    recordingMediaTypes: w,
                    captureStream: h
                })
            }
        });
        const d = e[c];
        return d.type === Re.AvPermission && Yo({
            currentPage: d,
            pages: e
        }), d
    }

    function Qo({
        status: e
    }) {
        const {
            nextQuestion: t,
            passthroughData: n,
            mediaRecordingUids: r,
            reset: i
        } = Ge.getState(), {
            recorderEventEmitter: o,
            handleUploadUpdate: a,
            index: s
        } = Z.getState(), l = {
            value: {
                taskStatus: e
            },
            type: L.RecordedTask,
            questionId: (n == null ? void 0 : n.questionId) || 1
        };
        !n || o.emit(fe.FinishTask, {
            [$.BeginCallback]: u => {
                a({
                    mediaRecordingUid: u,
                    isSubmitted: !0,
                    progressPct: 0,
                    isComplete: !1
                })
            },
            [$.ProgressCallback]: (u, c) => {
                a({
                    mediaRecordingUid: u,
                    progressPct: c.detail,
                    isSubmitted: !1,
                    isComplete: !1
                })
            },
            [$.UploadCallback]: u => {
                u && a({
                    mediaRecordingUid: u,
                    isComplete: !0,
                    isSubmitted: !0,
                    progressPct: 100
                })
            },
            [$.PassthroughData]: n,
            [$.CurrentIndex]: s,
            [$.TaskResponse]: l,
            [$.TaskCompleteCallback]: u => {
                l.value.taskDurationMillisecond = u, r && (l.value.mediaRecordingUids = r), i(), t(l)
            }
        })
    }

    function Zo({
        pages: e,
        setIsRequestingPermission: t
    }) {
        const {
            recorderEventEmitter: n,
            eventEmitFn: r
        } = Z.getState(), {
            updatePage: i,
            currentPage: o,
            recordingMediaTypes: a,
            screenPermissionRequested: s
        } = Ge.getState();
        if (!o) return;
        const l = e.indexOf(o);
        switch (o.type) {
            case Re.AvPermission:
                {
                    const u = s ? l + 2 : l + 1;s && a && n.emit(fe.BeginRecording, {
                        [$.RecordingMediaTypes]: a,
                        [$.StartRecordingCallback]: c => {
                            i({
                                mediaRecordingUids: c
                            })
                        }
                    }),
                    i({
                        currentPage: e[u]
                    });
                    return
                }
            case Re.ScreenPermission:
                n.emit(fe.ScreenPermission, {
                    [$.ScreenPermissionRequested]: t,
                    [$.StreamReadyCallback]: (u, c) => {
                        const d = c ? e[l + 1] : o;
                        c && a && n.emit(fe.BeginRecording, {
                            [$.RecordingMediaTypes]: a,
                            [$.StartRecordingCallback]: f => {
                                i({
                                    captureStream: c,
                                    mediaRecordingUids: f
                                })
                            }
                        }), i({
                            currentPage: d,
                            screenPermissionRequested: !0,
                            captureStream: c
                        })
                    }
                });
                return;
            case Re.StartTask:
                r(ke.RecordedTaskStart), n.emit(ke.RecordedTaskStart), n.emit(fe.StartTask), i({
                    currentPage: e[l + 1],
                    screenPermissionRequested: !0
                });
                return;
            case Re.CompleteTask:
                return
        }
    }
    const ac = "ul-permission-graphics-container",
        sc = "ul-permission-body",
        lc = F([ac, "ul_recorded-task-inset-spacing"]),
        Wr = F(["ul-horizontal-button-container", "ul-horizontal-button-container-left"]),
        uc = ({
            richTextBody: e
        }) => y("div", {
            className: "ul-rich-text-body",
            dangerouslySetInnerHTML: {
                __html: e
            },
            id: "ul-task-detail-container"
        }),
        Yr = ({
            required: e,
            skipButtonText: t,
            bottom: n = !1
        }) => e ? null : y(ye, {
            className: F([n && "ul-skip-button-below", U.InactiveButton]),
            onClick: Qo.bind(null, {
                status: Le.Abandoned
            }),
            children: t || "Skip"
        }),
        Xo = e => {
            const {
                avStream: t,
                captureStream: n,
                recordingMediaTypes: r,
                updatePage: i
            } = Ge.getState(), o = (r == null ? void 0 : r.includes(Te.Audio)) || (r == null ? void 0 : r.includes(Te.Video));
            Ae(() => {
                const a = setInterval(() => {
                    o && t && !t.active ? i({
                        avStream: null,
                        currentPage: e[0]
                    }) : (!n || !n.active) && i({
                        captureStream: void 0,
                        currentPage: e[o ? 1 : 0]
                    })
                }, 1e3);
                return () => clearInterval(a)
            }, [t, n, o, e, r, i])
        },
        qm = ({
            content: e,
            pages: t,
            required: n
        }) => {
            const {
                buttonText: r,
                skipButtonText: i,
                taskDetail: o
            } = e;
            return Xo(t), y("div", {
                className: "ul-task-page",
                children: [y(uc, {
                    richTextBody: o
                }), y("div", {
                    className: Wr,
                    children: [y(ye, {
                        onClick: Zo.bind(null, {
                            pages: t
                        }),
                        children: r
                    }), y(Yr, {
                        required: n,
                        skipButtonText: i
                    })]
                })]
            }, "start-task")
        },
        Gm = ({
            content: e,
            pages: t,
            properties: n
        }) => {
            const {
                buttonText: r,
                skipButtonText: i
            } = e;
            Xo(t);
            const a = y(ct, {
                properties: n,
                defaultBody: () => y("div", {
                    className: Wr,
                    children: [y(ye, {
                        className: "ul-complete-task-button",
                        onClick: Qo.bind(null, {
                            status: Le.Completed
                        }),
                        children: r
                    }), y(ye, {
                        className: F([U.InactiveButton]),
                        onClick: Qo.bind(null, {
                            status: Le.GivenUp
                        }),
                        children: i
                    })]
                })
            });
            return y("div", {
                className: "ul-task-page",
                children: [y(uc, {
                    richTextBody: e.taskDetail
                }), a]
            }, "complete-task")
        },
        zm = ({
            content: e,
            pages: t,
            required: n
        }) => {
            const {
                buttonText: r,
                skipButtonText: i
            } = e, [o] = Z(l => [l.tabTitle]), [a, s] = se(!1);
            return y("div", {
                children: [y("div", {
                    className: lc,
                    children: [y("p", {
                        style: {
                            marginTop: "auto"
                        },
                        children: e.selectTabText
                    }), y("div", {
                        className: "ul-select-tab-container",
                        children: y("p", {
                            className: sc,
                            children: o
                        })
                    })]
                }), y("div", {
                    className: n ? "" : Wr,
                    children: [y(ye, {
                        disabled: a,
                        onClick: Zo.bind(null, {
                            pages: t,
                            setIsRequestingPermission: s
                        }),
                        children: r
                    }), y(Yr, {
                        required: n,
                        skipButtonText: i
                    })]
                })]
            })
        },
        Wm = ({
            content: e
        }) => y("div", {
            className: F([ac, "ul_permission_svg_container", "ul_recorded-task-inset-spacing", "ul-center-horizontally"]),
            dangerouslySetInnerHTML: {
                __html: e.svg
            }
        }, "ul-permission-request-graphic"),
        Ym = ({
            content: e,
            pages: t,
            required: n
        }) => {
            const {
                permissionDeniedHeadline: r,
                permissionDeniedBody: i,
                skipButtonText: o,
                tryAgainButtonText: a
            } = e, s = zr(t[0]) ? t[0] : null;
            return Ae(() => {
                const l = setInterval(() => {
                    s !== null && Yo({
                        currentPage: s,
                        pages: t
                    })
                }, 1e3);
                return () => clearInterval(l)
            }, [s, t]), s ? y("div", {
                children: [y("div", {
                    className: lc,
                    children: y("p", {
                        className: "ul-av-permission-denied-paragraph",
                        children: [y("span", {
                            className: "ul-av-permission-denied-headline",
                            children: r
                        }), y("span", {
                            className: sc,
                            children: i
                        })]
                    })
                }), y("div", {
                    className: Wr,
                    children: [y(ye, {
                        onClick: Yo.bind(null, {
                            currentPage: s,
                            pages: t
                        }),
                        children: a
                    }), y(Yr, {
                        required: n,
                        skipButtonText: o
                    })]
                })]
            }) : null
        },
        Qm = ({
            stream: e
        }) => y("video", {
            autoPlay: !0,
            className: F(["ul_recorded-task-inset-spacing"]),
            id: "ul-record-task-video-preview",
            muted: !0,
            ref: t => {
                t && (t.srcObject = e || null)
            }
        }),
        Zm = ({
            content: e,
            pages: t,
            required: n
        }) => {
            const {
                skipButtonText: r
            } = e, {
                avStream: i
            } = Ge.getState();
            return Xo(t), y("div", {
                children: [y(Qm, {
                    stream: i
                }), y("div", {
                    className: "ul-vertical-button-container-center",
                    children: [y(ye, {
                        onClick: Zo.bind(null, {
                            pages: t
                        }),
                        children: e.buttonText
                    }), y(Yr, {
                        bottom: !0,
                        required: n,
                        skipButtonText: r
                    })]
                })]
            })
        },
        Xm = ({
            properties: e
        }) => {
            const {
                pages: t,
                required: n
            } = e, {
                avStream: r,
                currentPage: i
            } = Ge.getState();
            if (i === void 0) return null;
            switch (i == null ? void 0 : i.type) {
                case Re.AvPermission:
                    {
                        const o = ic(r, i);
                        return o === Ct.RequestNeeded ? y(Wm, {
                            content: i
                        }) : o === Ct.TryAgain ? y(Ym, {
                            content: i,
                            pages: t,
                            required: n
                        }) : y(Zm, {
                            content: i,
                            pages: t,
                            required: n
                        })
                    }
                case Re.ScreenPermission:
                    return y(zm, {
                        content: i,
                        pages: t,
                        required: n
                    });
                case Re.StartTask:
                    return y(qm, {
                        content: i,
                        pages: t,
                        required: n
                    });
                case Re.CompleteTask:
                    return y(Gm, {
                        content: i,
                        pages: t,
                        properties: e
                    });
                default:
                    return null
            }
        },
        Jm = ({
            className: e,
            properties: t,
            next: n,
            questionId: r
        }) => {
            const i = Z(),
                {
                    surveyId: o,
                    responseGroupUid: a,
                    userId: s
                } = i,
                l = Ge(),
                {
                    screenPermissionRequested: u
                } = l,
                c = Ge(h => h.avStream);
            let d = Ge(h => h.currentPage);
            d || (d = Km({
                questionId: r,
                surveyId: o,
                next: h => {
                    n(h)
                },
                pages: t.pages,
                responseGroupUid: a,
                userId: s
            }));
            let f = d.headline,
                p = d.captionText;
            const v = ic(c, d);
            return rc(d) && u && (f = d.permissionDeniedHeadline, p = d.permissionDeniedCaptionText), zr(d) && v === Ct.Ready && (f = d.permissionGrantedHeadline, p = d.permissionGrantedCaptionText), y("div", {
                className: F([e, "ul-center-horizontally", U.FadeInTransition]),
                children: [y(Ve, {
                    message: f,
                    properties: {
                        captionText: p
                    }
                }), y(Xm, {
                    properties: t
                })]
            })
        },
        eg = {
            "{{user_id}}": "externalUserId",
            "{{email}}": "email"
        },
        tg = (e = void 0, t = {}) => {
            if (!e) return e;
            let n = e;
            const r = [];
            for (const [l, u] of Object.entries(eg))
                if (n.toLowerCase().includes(l))
                    if (t[u]) {
                        const c = new RegExp(l, "gi");
                        n = n.replace(c, t[u])
                    } else r.push(l);
            if (r.length === 0 || !n.includes("?")) return n;
            const i = n.slice(0, n.indexOf("?")),
                a = n.slice(n.indexOf("?") + 1).split("&").map(l => l.split("=")).filter(l => !r.includes(l[1]));
            if (a.length === 0) return i;
            const s = a.map(l => l.join("=")).join("&");
            return `${i}?${s}`
        },
        ng = ({
            className: e,
            message: t,
            next: n,
            properties: r,
            questionId: i,
            type: o
        }) => {
            const {
                visitorAttributes: a
            } = Z(d => ({
                visitorAttributes: d.visitorAttributes
            })), s = (d, f = !1) => {
                n({
                    value: f ? {
                        skipped: !0
                    } : void 0,
                    questionId: i,
                    type: o
                })
            }, l = d => {
                (d.key === "Enter" || d.key === " ") && n({
                    value: void 0,
                    questionId: i,
                    type: o
                })
            }, u = () => {
                const d = tg(r && r.buttonUrl, a);
                return y("div", {
                    className: "ul-card-button-group",
                    children: [y("a", {
                        className: "ul-card-text__button ul-card__text-url-prompt-button",
                        href: d,
                        id: "ul-card-text__button",
                        onClick: s,
                        onKeyPress: l,
                        rel: "noreferrer",
                        role: d ? "link" : "button",
                        tabIndex: 0,
                        target: "_blank",
                        children: Kt(r)
                    }), r.required === !1 && y("button", {
                        className: U.SkipButton,
                        onClick: f => s(f, !0),
                        children: Wo(r)
                    })]
                })
            }, c = (d, f) => d ? y("div", {
                className: "ul-rich-text-body",
                dangerouslySetInnerHTML: {
                    __html: d
                },
                id: "ul-card__text-url-body-container"
            }) : y("div", {
                className: "ul-rich-text-body",
                id: "ul-card__text-url-body-container",
                children: (f ? f.split(/\n\s*\n/g) : []).map((p, v) => y("p", {
                    children: p
                }, v))
            });
            return y("div", {
                className: F([e, "ul-card__text-url-prompt", U.FadeInTransition]),
                children: [y(Ve, {
                    message: t
                }), c(r && r.richTextBody, r && r.body), y(ct, {
                    defaultBody: u,
                    properties: r
                })]
            }, i)
        },
        rg = ({
            className: e,
            questionId: t
        }) => {
            const {
                border: n,
                destroy: r,
                endCard: i,
                forceBrandedLogo: o
            } = Z(l => ({
                border: l.border,
                destroy: l.destroy,
                endCard: l.endCard,
                forceBrandedLogo: l.forceBrandedLogo
            }));
            Ae(() => {
                setTimeout(() => {
                    r(Jt)
                }, o ? 4e3 : 2e3)
            }, [r, o]);
            const a = i && i.subheader ? y("p", {
                    className: U.Caption,
                    children: i.subheader
                }) : null,
                s = i && i.headline ? i.headline : "";
            return y("div", {
                className: F([e, "ul-card--thanks", U.FadeInTransition]),
                children: y("div", {
                    children: y("div", {
                        className: "ul-card--thanks-content",
                        children: [y("div", {
                            className: "ul-thanks-check",
                            children: y("svg", {
                                "aria-labelledby": "title",
                                fill: "none",
                                height: "99",
                                viewBox: "0 0 81 99",
                                width: "81",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [y("path", {
                                    clipRule: "evenodd",
                                    d: "M40.5 77C60.9345 77 77.5 60.4345 77.5 40C77.5 19.5655 60.9345 3 40.5 3C20.0655 3 3.5 19.5655 3.5 40C3.5 60.4345 20.0655 77 40.5 77ZM80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40Z",
                                    fill: n,
                                    fillRule: "evenodd"
                                }), y("path", {
                                    clipRule: "evenodd",
                                    d: "M55.025 22.9046C55.6299 23.4705 55.6616 24.4198 55.0956 25.0247C54.8724 25.2634 54.6109 25.5285 54.3157 25.8277C52.2547 27.9168 48.5549 31.667 44.8135 39.6658C43.2818 42.9406 42.0864 45.8386 41.0823 48.2729C40.6539 49.3116 40.2603 50.2659 39.8902 51.129C39.287 52.5359 38.7248 53.7508 38.1744 54.625C37.8997 55.0613 37.5806 55.4905 37.2017 55.8245C36.8201 56.1607 36.2613 56.5 35.5457 56.5C34.6742 56.5 34.0892 55.9692 33.7774 55.6083C33.4502 55.2296 33.1752 54.7511 32.9396 54.301C32.7305 53.9013 32.5088 53.4367 32.2797 52.9565C32.2429 52.8794 32.2059 52.8019 32.1688 52.7243C31.8942 52.1499 31.5959 51.534 31.2537 50.8868C29.8886 48.305 27.8539 45.2878 24.2343 43.1382C23.522 42.7152 23.2875 41.7949 23.7105 41.0826C24.1335 40.3703 25.0539 40.1358 25.7662 40.5588C30.0556 43.1062 32.4149 46.6647 33.9058 49.4845C34.2776 50.1876 34.5973 50.8487 34.8753 51.4302C34.9147 51.5124 34.9529 51.5926 34.9902 51.6707C35.2222 52.1567 35.4164 52.5637 35.5978 52.9102C35.6151 52.9434 35.6321 52.9754 35.6485 53.0061C36.0565 52.3531 36.5341 51.3434 37.133 49.9468C37.4781 49.1418 37.8572 48.2229 38.2761 47.2074C39.2886 44.7532 40.5339 41.7347 42.0961 38.3948C46.0591 29.9221 50.0641 25.8648 52.1535 23.7482C52.4423 23.4556 52.6944 23.2002 52.9048 22.9753C53.4708 22.3703 54.42 22.3387 55.025 22.9046ZM35.1994 53.5892C35.1994 53.5892 35.2 53.5888 35.2012 53.5879C35.2 53.5889 35.1994 53.5893 35.1994 53.5892ZM36.0666 53.6682C36.0732 53.674 36.0765 53.6775 36.0765 53.6777C36.0765 53.678 36.0732 53.6751 36.0666 53.6682Z",
                                    fill: n,
                                    fillRule: "evenodd"
                                }), y("path", {
                                    d: "M69.5 97C69.5 98.1046 56.2924 99 40 99C23.7076 99 10.5 98.1046 10.5 97C10.5 95.8954 23.7076 95 40 95C56.2924 95 69.5 95.8954 69.5 97Z",
                                    fill: "black",
                                    fillOpacity: "0.2"
                                })]
                            })
                        }), y(Ve, {
                            message: s
                        }), a]
                    })
                })
            }, t)
        },
        qt = "https://cdn.sprig.com",
        M = {
            document: void 0,
            videojs: void 0
        },
        ig = `/* progress control styles */
.video-js .vjs-control {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 0px;
}

.video-js .vjs-progress-control {
  position: absolute;
  height: 3px;
  width: 100%;
}
/* position and align the buttons and button texts */
.ul-control-panel {
  bottom: 0;
  width: 100%;
  flex-direction: column;
  background-color: white;
  height: fit-content;
  z-index: 2;
}

.ul-buttons-panel {
  color: black;
  display: flex;
  gap: 20px;
  height: 50px;
  justify-content: center;
  margin: 10px;
  padding: 2px 14px 0;
}

.video-js .vjs-volume-panel {
  height: 30px;
  width: 40px;
}

.ul-inactive {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}

/* buttons */
.ul-buttons-panel > .vjs-button {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  height: 3em;
  justify-content: center;
  width: 3em;
}

.vjs-button>.vjs-icon-placeholder:before {
  align-items: center;
  display: flex;
  font-size: unset;
  line-height: 0.5;
  justify-content: center;
}

span.ul-button-text {
  align-self: flex-end;
  position: relative;
  top: 14px;
}

#ul-camera-button {
  white-space: nowrap;
}

.video-js .vjs-volume-control.vjs-volume-horizontal {
  background-color: #fff;
  z-index: 1;
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  background-color: black;
}

.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
  width: 40px;
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,
.video-js .vjs-volume-panel .vjs-volume-control:active,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,
.video-js .vjs-volume-panel:active .vjs-volume-control,
.video-js .vjs-volume-panel:focus .vjs-volume-control {
  visibility: visible;
  left: 40px;
  position: absolute;
  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;
}

/* play button customization */
.video-js .vjs-play-control {
  color: black;
}

.video-js .vjs-play-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* position and style the current timer */
.ul-time-panel {
  position: absolute;
  bottom: 80px;
  left: 10px;
  height: 22px;
  color: black;
  border: 1px solid #e0e0eb;
  border-radius: 23px;
  background-color: white;
  width: fit-content;
}

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
  display: flex;
  align-items: center;
  text-align: center;
}

/* remove the dot progress indicator */
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before,
.vjs-icon-circle:before,
.vjs-seek-to-live-control .vjs-icon-placeholder:before {
  content: none;
}

.video-js .vjs-mute-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.825.324A.75.75 0 019.25 1v11.667a.75.75 0 01-1.219.585l-3.96-3.169H1a.75.75 0 01-.75-.75v-5a.75.75 0 01.75-.75h3.07L8.031.414a.75.75 0 01.794-.09zM7.75 2.56L4.802 4.92a.75.75 0 01-.469.164H1.75v3.5h2.583a.75.75 0 01.469.165l2.948 2.358V2.56zM14.911.47a.75.75 0 011.061 0 9.084 9.084 0 010 12.844.75.75 0 01-1.06-1.06 7.584 7.584 0 000-10.724.75.75 0 010-1.06zM11.97 3.41a.75.75 0 011.06 0 4.917 4.917 0 010 6.953.75.75 0 11-1.06-1.06 3.417 3.417 0 000-4.832.75.75 0 010-1.06z' fill='%23262136'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 1.167L4.333 4.5H1v5h3.333L8.5 12.833V1.167zM17.17 4.5l-5 5M12.17 4.5l5 5' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9698 3.41124C12.2627 3.11839 12.7376 3.11846 13.0304 3.4114C13.9521 4.33341 14.4699 5.58376 14.4699 6.88748C14.4699 8.19121 13.9521 9.44156 13.0304 10.3636C12.7376 10.6565 12.2627 10.6566 11.9698 10.3637C11.6768 10.0709 11.6767 9.596 11.9696 9.30307C12.6101 8.66235 12.9699 7.79346 12.9699 6.88748C12.9699 5.98151 12.6101 5.11262 11.9696 4.4719C11.6767 4.17896 11.6768 3.70409 11.9698 3.41124Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-volume-control:hover .vjs-mouse-display {
  display: none !important;
}

.video-js .vjs-play-progress {
  background-color: black;
}

/* position video player inside the container */
.video-js .vjs-tech {
  position: static;
}

.video-js .vjs-time-tooltip {
  padding: 0.25em 0.75em;
  align-items: center;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -25px;
  font-size: 12px !important;
  width: 50px !important;
}

.video-js .vjs-play-progress.vjs-slider-bar .vjs-time-tooltip {
  visibility: hidden !important;
}

.video-js .vjs-progress-control .vjs-mouse-display {
  z-index: 2;
}

.ul-video-player {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border: 1px solid #E6E6E6;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  background-clip: border-box;
  overflow: hidden;
}

.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {
  border: none;
}

#video-response-player-secondary-video-player {
  max-width: 200px;
  margin-right: 20px;
  background-color: transparent;
}

#ul-card-video__player_recorder-video-recorder.vjs-fullscreen {
  display: table;
}

.video-js div.vjs-progress-control {
  margin-top: -3px;
}

.video-js .vjs-progress-control .vjs-slider {
  background-color: #B2BBBD;
}

.vjs-record.video-js .vjs-control.vjs-button.vjs-fullscreen-control {
  position:relative;
}

.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.82143 2.54004L12.2614 2.54004C12.9242 2.54004 13.4614 3.0773 13.4614 3.74004L13.4614 6.18004' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.17955 13.46L3.73955 13.46C3.07681 13.46 2.53955 12.9227 2.53955 12.26L2.53955 9.81996' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.7772 3.22266L9.36475 6.63516' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.29434 9.70605L2.88184 13.1186' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.583 9.813H5.25a1 1 0 011 1v3.666M5.375 10.688L1 15.061M14.917 5.813H11.25a1 1 0 01-1-1V1.146M15.063 1l-4.376 4.375' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before, .video-js .vjs-icon-replay:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before, .vjs-icon-pause:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3.61885' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3Crect x='9.21797' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  padding: 2px;
}

.vjs-error-display {
  display: none;
}

.ul-video-player-video {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

.ul-video-container {
  width: 100%;
  height: auto;
  left: 0px;
  top: 0px;

  background-color: transparent;
  border-radius: 4px;

  align-items: start;
  display: flex;
  flex-direction: column;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
  position: relative;
}

.vjs-record button.vjs-device-button.vjs-control {
  background: rgba(255, 255, 255, 96);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  border-radius: 0;
  line-height: 0.6;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}

.vjs-record .vjs-device-button.vjs-control:before {
  font-size: 14px !important;
  color: #333;
  content: "Your browser needs to access your camera and microphone for video recording";
  line-height: 135%;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:before {
  font-size: 16px !important;
  color: #262136;
  content: "Unable to access your camera and microphone";
}

.vjs-record .vjs-device-button.vjs-control:after {
  display: inline-block;
  background: #F0F0F5;
  font-size: 13px;
  border-radius: 4px;
  content: "Request Permissions";
  padding: 1em 2em;
  color: #333;
  margin-top: 20px;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:after {
  display: inline-block;
  background: white;
  font-size: 13px;
  content: "Please go to your browser settings and update permissions to enable recording";
  padding: 1em;
  color: #4B575D;
  margin: 5px;
  line-height: 135%;
  text-align: center;
}

.vjs-control.vjs-button.ul-video-recorder-delete-button, .vjs-control.vjs-button.ul-video-recorder-toggle-button, .vjs-control.vjs-button.ul-video-recorder-camera-off-button-audio-only, .vjs-control.vjs-button.ul-video-recorder-camera-off-button {
  cursor: pointer;
}

.ul-video-recorder-delete-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.21234 7.37549V11.1193M2.53931 4.25595H13.4593H2.53931ZM5.57234 4.25595V3.00833C5.57222 2.84433 5.60354 2.68192 5.6645 2.53038C5.72546 2.37884 5.81488 2.24115 5.92762 2.12519C6.04037 2.00922 6.17424 1.91726 6.32158 1.85456C6.46892 1.79185 6.62683 1.75964 6.78628 1.75977H9.21234C9.37179 1.75964 9.5297 1.79185 9.67703 1.85456C9.82437 1.91726 9.95824 2.00922 10.071 2.12519C10.1837 2.24115 10.2732 2.37884 10.3341 2.53038C10.3951 2.68192 10.4264 2.84433 10.4263 3.00833V4.25595H5.57234ZM12.2463 4.25595V12.9912C12.2463 13.3223 12.1184 13.6399 11.8907 13.8741C11.6631 14.1082 11.3543 14.2398 11.0323 14.2398H4.96628C4.64432 14.2398 4.33555 14.1082 4.10789 13.8741C3.88023 13.6399 3.75234 13.3223 3.75234 12.9912V4.25595H12.2463ZM6.78628 7.37549V11.1193V7.37549Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-toggle-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z' fill='%23D15153'/%3E%3C/svg%3E");
}

.ul-video-recorder-toggle-button.ul-recording-in-session .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L12 2C12 0.89543 11.1046 -4.85396e-07 10 -4.37114e-07L2 -8.74228e-08C0.89543 -3.91405e-08 -4.85396e-07 0.895431 -4.37114e-07 2L-8.74228e-08 10C-3.91405e-08 11.1046 0.895431 12 2 12L10 12C11.1046 12 12 11.1046 12 10Z' fill='%23D15153'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-camera-off-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.ul-video-recorder-camera-off-button-audio-only .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='22' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.75 3A2.75 2.75 0 013.5.25h9.081A2.75 2.75 0 0115.331 3v9a2.75 2.75 0 01-2.75 2.75H3.5A2.75 2.75 0 01.75 12V3zM3.5 1.75c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h9.081c.69 0 1.25-.56 1.25-1.25V3c0-.69-.56-1.25-1.25-1.25H3.5z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.53 2.03l-12 12-1.06-1.06 12-12 1.06 1.06zM20.87 1.525a.75.75 0 01.38.652v10.588a.75.75 0 01-1.134.644l-5.92-3.53a.75.75 0 01-.365-.643v-3.53a.75.75 0 01.366-.644l5.919-3.53a.75.75 0 01.754-.007zm-5.539 4.607V8.81l4.419 2.635V3.497l-4.419 2.635z' fill='%23262136'/%3E%3C/svg%3E");
  transform: scale(0.75);
}

.ul-upload-progress-label {
  padding: 0.15em 0.75em;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 75px;
  left: calc(50% - 65px);
  width: 130px;
  z-index: 5;
}

.ul-upload-progress-label__time {
  display: inline-flex;
  margin-left: 0.8em;
  align-items: center;
}

.ul-upload-progress-label__time:before {
  content: "";
  display: inline-flex;
  width: 1px;
  height: 12px;
  background-color: #E0E0EB;
  margin-right: 0.8em;
}

@keyframes grow {
  0% {
    transform: scale(1);
    background-color: #EEECFC;
  }
  50%  {
    transform: scale(1.2);
    background-color: #E1DFF4;
  }
  100% {
    transform: scale(1);
    background-color: #EEECFC;
  }
}

.ul-audio-recorder-placeholder:before {
  width: 80px;
  height: 80px;
  border-radius: 120px;
  background-color: #EEECFC;
  content: "";
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  animation: 6s infinite grow;
  transform-origin: 50% 60%;
}

.ul-audio-recorder-placeholder:after {
  content: url("data:image/svg+xml,%3Csvg width='98' height='98' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='98' height='98'%3E%3Ccircle cx='49' cy='49' r='49' fill='%23EDECF8'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Ccircle cx='49' cy='49' r='50' fill='%23645CC2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.422 81.812c5.405-15.547 20.187-26.706 37.576-26.706 17.39 0 32.172 11.159 37.577 26.707-9.164 10.43-22.601 17.013-37.576 17.013-14.976 0-28.414-6.583-37.577-17.014z' fill='%23fff' fill-opacity='.6'/%3E%3Ccircle cx='49' cy='29' r='17' fill='%23fff' fill-opacity='.7'/%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%) scale(0.6);
}

.ul-audio-recorder-placeholder {
  min-height: 150px;
  width: 100%;
  background-color: #fcfcfd;
  display: block;
  position: relative;
}

.vjs-fullscreen .ul-audio-recorder-placeholder {
  vertical-align: middle;
  display: table-cell;
}

.vjs-fullscreen .ul-control-panel {
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  background-color: #F8F8F8;
}

.vjs-playback-rate .vjs-playback-rate-value {
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: center;
}

.vjs-playback-rate .vjs-menu {
  left: -5px;
  bottom: 3px;
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
}

.vjs-menu li {
  font-size: 12px;
  padding: 5px 0;
}

.vjs-menu li.vjs-selected {
  color: lightgray;
}

.vjs-menu li.vjs-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.vjs-fullscreen .ul-buttons-panel {
  top: calc(50% - 30px);
  position: relative;
}

.vjs-fullscreen .vjs-record-indicator.vjs-control {
  bottom: 90px !important;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator {
  padding: 0.3em 0.75em 0.15em 15px;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 75px;
  top: auto;
  left: calc(50% - 21px);
  width: 43px;
  height: 16px;
  z-index: 4;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:after {
  content: "";
  background-color: #EB5757;
  width: 6px;
  height: 6px;
  border-radius: 8px;
  animation: none;
  top: 4px;
  left: 5px;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:before {
  position: relative;
  font-size: 9px;
  animation: none;
  opacity: 1;
  color: #333;
  top: auto;
  left: auto;
}

.ul-video-player-loading {
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 6rem;

}
.ul-video-player-loading div {
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 80%;
  height: 80%;
  margin: 5px;
  border: 5px solid #666;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #666 transparent transparent transparent;
}

.first {
  animation-delay: -0.45s;
}
.second {
  animation-delay: -0.3s;
}
.third {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ul-video-btn {
  width: 100%;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 8px;
  font-weight: 500;
  font-size: 15px;
}

.ul-record-response-btn:before, .ul-record-response-btn:after, .ul-back-question-btn:before, .ul-back-question-btn:after {
  margin: 0 5px;
  vertical-align: middle;
}

.ul-record-response-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  display: inline-block;
  transform: translate(0px, 2px);
}

.ul-record-response-btn:after {
  content: 'Record your Response';
}

.ul-back-question-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.8757 8.22361L1.1118 14.6056C0.945578 14.6887 0.75 14.5678 0.75 14.382V1.61803C0.75 1.43219 0.945579 1.31131 1.1118 1.39443L13.8757 7.77639C14.06 7.86852 14.06 8.13148 13.8757 8.22361Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  display: inline-block;
  transform: scale(0.85) translate(0, 1px);
  -moz-transform: scale(0.85) translate(0, 2px);
}

.ul-back-question-btn:after {
  content: 'Back to Question';
}

.hidden {
  display: none !important;
  opacity: 0;
  visibility: hidden;
}

.visible {
  visibility: visible;
  opacity: 1;
  animation: fade 0.3s;
}

@keyframes fade {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
}

#ul-recording-countdown-screen {
  width: 100%;
  height: 100%;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  text-align: center;
  font-size: 15px;
  z-index: 1;
  display: table;
}

.ul-countdown-text {
  vertical-align: middle;
  display: table-cell;
  transform: translate(0, -25px);
}

.vjs-fullscreen > #ul-recording-countdown-screen {
  font-size: 25px;
  transform: unset;
}

.vjs-poster {
  background-size: cover;
}
`,
        og = e => {
            const t = M.document.createElement("div");
            return t.className = "ul-video-player-loading", t.id = Jo(e), ["first", "second", "third", "fourth"].map(n => {
                const r = M.document.createElement("div");
                r.className = n, t.appendChild(r)
            }), t
        },
        Jo = e => e + "-loading-spiner",
        le = "hidden",
        cc = ".m3u8",
        ea = "questionId",
        ta = "ul-video-recorder-camera-off-button",
        na = "ul-recording-in-session",
        ag = [{
            type: "link",
            content: `${qt}/dependencies/videojs-record-4.5.0.min.css`
        }, {
            type: "script",
            content: `${qt}/dependencies/RecordRTC-5.6.2.js`
        }, {
            type: "script",
            content: `${qt}/dependencies/adapter.8.0.0.min.js`
        }, {
            type: "script",
            content: `${qt}/dependencies/videojs-record-4.5.0.min.js`
        }, {
            type: "script",
            content: `${qt}/userleap-web-upchunk-v2.2.2.js`
        }],
        dc = [{
            type: "link",
            content: `${qt}/dependencies/video-js-7.18.0.min.css`
        }, {
            type: "script",
            content: `${qt}/dependencies/video-js-7.18.0.min.js`
        }, {
            type: "style",
            content: ig
        }],
        fc = "-video-player",
        pc = "-secondary-video-player",
        hc = "-video-recorder";
    let ze, vc;
    const St = async ({
            event: e,
            apiBase: t,
            headers: n,
            visitorId: r,
            envId: i,
            metadata: o
        }) => {
            const a = M.document.documentElement;
            if (!r || !i) return;
            const s = {
                event: `SDK - ${e}`,
                visitorId: r,
                environmentId: i,
                metadata: { ...o || {},
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    clientWidth: a.clientWidth,
                    clientHeight: a.clientHeight,
                    location: window.location.href,
                    language: navigator.language
                }
            };
            (await fetch(`${t}/sdk/1/visitors/${r}/analytics`, {
                method: "POST",
                cache: "no-cache",
                headers: n,
                body: JSON.stringify(s)
            })).ok || console.warn("[Sprig] (ERR-444) Failed to track analytics", e)
        },
        dt = async (e, t, n, r, i, o) => {
            St({
                event: `Video Error ${t}`,
                apiBase: n,
                headers: r,
                visitorId: i,
                envId: o,
                metadata: {
                    errorMessage: e.message
                }
            });
            const a = M.document.documentElement,
                s = {
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    clientWidth: a.clientWidth,
                    clientHeight: a.clientHeight,
                    location: window.location.href,
                    language: navigator.language
                },
                l = {
                    action: t,
                    err: {
                        message: e.message,
                        stack: e.stack
                    },
                    meta: s,
                    vid: i,
                    envId: o
                };
            (await fetch(`${n}/sdk/1/errors`, {
                method: "POST",
                cache: "no-cache",
                headers: { ...r,
                    "userleap-platform": "video_recorder",
                    "x-ul-error": window.btoa(`userleap-${Date.now()}-error`)
                },
                body: JSON.stringify(l)
            })).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", e)
        },
        sg = (e, {
            type: t,
            content: n
        }) => new Promise(function(r, i) {
            let o;
            t === "script" ? (o = M.document.createElement("script"), o.src = n) : t === "link" ? (o = M.document.createElement("link"), o.rel = "stylesheet", o.href = n, o.type = "text/css") : (o = M.document.createElement("style"), o.innerHTML = n), o.onload = function() {
                r(n)
            }, o.onerror = function() {
                i(n)
            }, o.async = !1, o.id = btoa(n), e.appendChild(o)
        }),
        mc = (e, t) => {
            if (e.length === 0) return t && t();
            Promise.all(e.reduce((n, r) => (n.push(sg(M.document.head, r)), n), [])).then(() => {
                M.videojs = M.document.defaultView.videojs, t && t()
            }).catch(function(n) {
                console.log(n + " failed to load")
            })
        },
        gc = (e, t, n) => {
            if (t === "start" && (e.style.visibility = "visible"), t === "none") e.style.visibility = le;
            else if (t === "success") e.style.visibility = le, e.innerHTML = "Upload succeeded!";
            else {
                const r = Math.round(parseFloat(n));
                e.innerHTML = `Uploading <span class="ul-upload-progress-label__time">${r}%</span>`, e.style.background = `linear-gradient(to right, #E0E0EB 0%, #E0E0EB ${r}%, #FCFCFD ${r}%, #FCFCFD 100%)`
            }
        },
        ra = (e, t) => {
            const n = M.videojs(e.id());
            return n == null ? void 0 : n.payload[t]
        },
        lg = (e, t, n, r, i) => {
            const {
                surveyId: o,
                responseGroupUid: a,
                visitorId: s,
                envId: l
            } = e.payload;
            e.on("deviceError", function() {
                console.warn("device error: ", e.deviceErrorCode), e.deviceErrorCode.message === "Permission denied" ? (e.deviceButton.addClass("permission-denied"), n && n(H.ERROR, {
                    type: H.PERMISSION_DENIED
                }), St({
                    event: "Video Permission Denied",
                    apiBase: t,
                    headers: i,
                    visitorId: s,
                    envId: l,
                    metadata: {
                        questionId: ra(e, ea),
                        responseGroupUid: a,
                        surveyId: o
                    }
                })) : (n && n(H.ERROR, {
                    type: H.OTHER
                }), dt(new Error(e.deviceErrorCode.message), "recorderDeviceError", t, i, s, l))
            }), e.on("error", function(u, c) {
                dt(c || e.error(), "recorderError", t, i, s, l)
            }), e.on("startRecord", function(u, c) {
                r(e.uploadProgressLabel, "none"), St({
                    event: "Video Record Start",
                    apiBase: t,
                    headers: i,
                    visitorId: s,
                    envId: l,
                    metadata: {
                        questionId: ra(e, ea),
                        responseGroupUid: a,
                        surveyId: o
                    }
                })
            }), e.on("finishRecord", async function() {
                r(e.uploadProgressLabel, "start", 0);
                const u = ra(e, ea);
                if (!o) {
                    const h = "internal error: missing fields in payload";
                    return n && n(H.ERROR, {
                        type: H.OTHER
                    }), dt(new Error(h), "finishRecord", t, i, s, l), null
                }
                e.record().stopDevice();
                const c = e.cameraOff ? H.MEDIA_TYPE_AUDIO : H.MEDIA_TYPE_VIDEO,
                    d = Qe();
                St({
                    event: "Video Record Finish",
                    apiBase: t,
                    headers: i,
                    visitorId: s,
                    envId: l,
                    metadata: {
                        mediaRecordingUid: d,
                        questionId: u,
                        responseGroupUid: a,
                        surveyId: o,
                        mediaType: c
                    }
                });
                const f = {
                    surveyId: o,
                    updatedAt: new Date().toISOString(),
                    mediaType: c,
                    mediaRecordingUid: d
                };
                u && (f.questionId = u), a && (f.responseGroupUid = a), s && (f.visitorId = s);
                const v = await (async () => {
                    const h = await fetch(`${t}/2/environments/integrations/upload`, {
                        method: "POST",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(f)
                    });
                    if (h.ok) {
                        const g = await h.json();
                        return n && n(H.UPLOAD_STARTED, {
                            [H.UPLOAD_ID]: g.upload.id,
                            [H.MEDIA_TYPE]: c,
                            [H.MEDIA_RECORDING_UID]: d
                        }), g.upload.url
                    } else return n && n(H.ERROR, {
                        type: H.OTHER,
                        response: h
                    }), dt(new Error("failed to get upload response with url"), "finishRecord", t, i, s, l), null
                })();
                !v || (ze = M.document.defaultView.UpChunk.createUpload({
                    endpoint: v,
                    file: new M.document.defaultView.File([e.recordedData], `recording ${c} ${Date.now()}`),
                    chunkSize: 5120
                }), ze.startTime = Date.now(), St({
                    event: "Video Upload Start",
                    apiBase: t,
                    headers: i,
                    visitorId: s,
                    envId: l,
                    metadata: {
                        mediaRecordingUid: d,
                        questionId: u,
                        responseGroupUid: a,
                        surveyId: o,
                        mediaType: c,
                        url: v
                    }
                }), ze.on("error", h => {
                    r(e.uploadProgressLabel, "none"), n && n(H.UPLOAD_FINISHED, {
                        [H.MEDIA_RECORDING_UID]: d
                    }), dt(h, "finishRecord", t, i, s, l)
                }), ze.on("progress", h => {
                    n && n(H.UPLOAD_PROGRESS, {
                        [H.MEDIA_RECORDING_UID]: d,
                        [H.UPLOAD_PROGRESS_PCT]: h.detail
                    }), r(e.uploadProgressLabel, "progress", h.detail)
                }), ze.on("success", () => {
                    r(e.uploadProgressLabel, "success"), n && n(H.UPLOAD_FINISHED, {
                        [H.MEDIA_RECORDING_UID]: d
                    }), St({
                        event: "Video Upload Success",
                        apiBase: t,
                        headers: i,
                        visitorId: s,
                        envId: l,
                        metadata: {
                            mediaRecordingUid: d,
                            questionId: u,
                            responseGroupUid: a,
                            surveyId: o,
                            mediaType: c,
                            url: v,
                            elapsedMs: ze.startTime && Date.now() - ze.startTime
                        }
                    })
                }))
            })
        },
        yc = (e, t) => {
            const n = new(M.videojs.getComponent("Component"))(e);
            return n.addClass("ul-buttons-panel"), t.map(r => {
                n.addChild(r)
            }), ug(n), n
        },
        ug = e => {
            e.children().forEach(t => {
                if (je[t.name_]) {
                    const n = Qr(je[t.name_], `ul-${je[t.name_]}`);
                    t.el_.appendChild(n)
                }
            })
        },
        Qr = (e, t = "") => {
            const n = M.document.createElement("span");
            return n.className = "ul-button-text", n.innerHTML = e, n.id = t, n
        },
        _c = (e, t, n, r, i = !1, o) => {
            e.addClass("ul-video-player");
            const a = new(M.videojs.getComponent("Component"))(e);
            a.addClass("ul-control-panel"), e.progressBar = a.addChild("ProgressControl"), n && e.src(n), e.audioPlayerPlaceholder = new(M.videojs.getComponent("Component"))(e), e.audioPlayerPlaceholder.addClass("ul-audio-recorder-placeholder");
            const s = n && n.src ? gg(n.src) : null;
            n && (i || !s) ? (e.children()[0].classList.add("vjs-hidden"), M.document.getElementById(`${e.id()}_html5_api`).style.height = "0px") : (e.audioPlayerPlaceholder.hide(), M.document.getElementById(`${e.id()}_html5_api`).style.height = "100%", s && e.poster(s)), e.on("play", () => {
                !i && n && !s && fg(e, !1), o == null || o.play()
            }), e.on("pause", () => {
                o == null || o.pause()
            }), e.on("seeked", () => {
                o == null || o.currentTime(e.currentTime())
            }), e.on("ratechange", () => {
                o == null || o.playbackRate(e.playbackRate())
            }), e.addChild(e.audioPlayerPlaceholder, {}, 1), a.addChild(t), e.addChild(a), r && r(e)
        },
        cg = (e, t, n) => {
            e.addClass(`ul${pc}`);
            const r = new(M.videojs.getComponent("Component"))(e);
            t && e.src(t), e.addChild(r), n && n(e)
        },
        dg = (e, t, n, r, i, o, a, s = !1) => {
            vc = Date.now();
            const u = Zr(t, {
                controls: !1,
                bigPlayButton: !1,
                fluid: !1,
                width: 1280,
                height: 720,
                playsinline: !0,
                plugins: {
                    record: {
                        audio: !0,
                        video: {
                            mandatory: {
                                minWidth: 1280,
                                minHeight: 720
                            }
                        },
                        frameWidth: 1280,
                        frameHeight: 720,
                        maxLength: 600,
                        autoMuteDevice: !0
                    }
                }
            });
            if (!u) return;
            u.payload = n;
            const {
                surveyId: c,
                questionId: d,
                responseGroupUid: f,
                visitorId: p,
                envId: v
            } = n;
            let h;
            const g = O => {
                    const T = ta,
                        D = ta + "-audio-only";
                    gc(u.uploadProgressLabel, "none"), ze && ze.startTime >= vc && ze.abort();
                    const W = M.document.getElementById("ul-camera-button");
                    O ? (u.children()[0].classList.add("vjs-hidden"), b.removeClass(T), b.addClass(D), W.innerHTML = je.TurnOnCamera, u.audioPlayerPlaceholder.removeClass("vjs-hidden"), h == null || h.getTracks().forEach(S => {
                        S.stop()
                    }), window.navigator.mediaDevices.getUserMedia({
                        video: !0,
                        audio: !0
                    }).then(S => {
                        h = S, S.getVideoTracks().forEach(X => {
                            X.enabled = !1
                        }), u.record().onDeviceReady(S)
                    }).catch(u.record().onDeviceError.bind(u.record()))) : (h == null || h.getVideoTracks().forEach(S => {
                        S.enabled = !0
                    }), u.children()[0].classList.remove("vjs-hidden"), u.record().getDevice(), b.removeClass(D), b.addClass(T), W.innerHTML = je.TurnOffCamera, u.audioPlayerPlaceholder.addClass("vjs-hidden"))
                },
                _ = new(M.videojs.getComponent("Button"))(u, {
                    clickHandler: () => {
                        _.hasClass(le) || (St({
                            event: "Video Delete Button Clicked",
                            apiBase: r,
                            headers: a,
                            visitorId: p,
                            envId: v,
                            metadata: {
                                questionId: d,
                                responseGroupUid: f,
                                surveyId: c
                            }
                        }), g(u.cameraOff), i(H.DELETE, {}), b.removeClass(le), _.addClass(le))
                    }
                });
            _.addClass("ul-video-recorder-delete-button"), _.el_.appendChild(Qr(je.DeleteButton, "ul-delete-button"));
            const w = M.document.getElementById(t),
                E = () => {
                    w.classList.contains("vjs-fullscreen") && u.cameraOff ? w.style.display = "table" : w.style.display = "flex"
                };
            E();
            const b = new(M.videojs.getComponent("Button"))(u, {
                clickHandler: () => {
                    u.record().isRecording() || (u.cameraOff = !u.cameraOff, St({
                        event: "Video Camera Button Clicked",
                        apiBase: r,
                        headers: a,
                        visitorId: n.visitorId,
                        envId: n.envId,
                        metadata: {
                            questionId: d,
                            responseGroupUid: f,
                            surveyId: c,
                            cameraOff: u.cameraOff
                        }
                    }), g(u.cameraOff), !_.hasClass(le) && _.addClass(le), i(H.DELETE, {}), E())
                }
            });
            b.addClass(ta), b.el_.appendChild(Qr(je.TurnOffCamera, "ul-camera-button"));
            const m = new(M.videojs.getComponent("Button"))(u, {
                clickHandler: () => {
                    const O = M.document.getElementById("ul-recorder-toggle");
                    if (u.record().isRecording()) u.record().stop(), O && (O.innerHTML = je.RecordButton), m.removeClass(na), _.removeClass(le);
                    else {
                        const T = M.document.getElementById("ul-recording-countdown-screen");
                        if (T) T.remove(), O && (O.innerHTML = je.RecordButton), g(u.cameraOff), i(H.DELETE, {}), b.removeClass(le), _.addClass(le), m.removeClass(na), C.show();
                        else {
                            m.addClass(na), C.hide(), b.addClass(le), _.addClass(le), O && (O.innerHTML = je.StopButton);
                            const D = M.document.createElement("div");
                            D.id = "ul-recording-countdown-screen", w.insertBefore(D, w.children[1]), D.style.height = `${w.offsetHeight}px`, wc(u, 3)
                        }
                    }
                }
            });
            m.addClass("ul-video-recorder-toggle-button"), m.el_.appendChild(Qr(je.RecordButton, "ul-recorder-toggle"));
            const x = M.document.createElement("p");
            x.style.visibility = "hidden", x.className = "ul-upload-progress-label", e.appendChild(x), u.uploadProgressLabel = x;
            const k = yc(u, [_, b, "PlayToggle", m, "FullscreenToggle"]),
                C = k.children().find(O => O.name_ === "FullscreenToggle");
            C.hasClass("vjs-disabled") && C.hide();
            const I = k.children().find(O => O.name_ === "PlayToggle");
            I.hide(), o && b.addClass(le), !o && _.addClass(le), _c(u, k, o, !1, s), u.on("stopRecord", () => {
                m.hide(), I.show(), C.show(), _.removeClass(le)
            }), u.on("deviceReady", () => {
                m.show(), I.hide(), _.addClass(le)
            }), lg(u, r, i, gc, a), o && (u.deviceButton && u.deviceButton.hide(), u.src(o), I.show(), m.hide(), _.removeClass(le));
            const R = [{
                name: "microphone"
            }];
            !u.cameraOff && R.push({
                name: "camera"
            }), Promise.all(R.map(O => {
                var T;
                return (T = navigator == null ? void 0 : navigator.permissions) == null ? void 0 : T.query(O)
            })).then(O => {
                O.reduce((D, W) => D & W.state === "granted", !0) && u && (u.deviceButton && u.deviceButton.hide(), !o && u.record().getDevice())
            }).catch(O => {})
        },
        wc = (e, t = 3) => {
            const n = M.document.getElementById("ul-recording-countdown-screen");
            n && t === 0 ? (n.remove(), e.record().start()) : n && (n.innerHTML = `<span class='ul-countdown-text'>Recording in... ${t}</span>`, setTimeout(() => {
                wc(e, t - 1)
            }, 1e3))
        },
        bc = e => {
            const t = M.document.createElement("div");
            return t.className = "ul-video-container", t.appendChild(og(e)), t
        },
        ia = (e, t) => {
            const n = M.document.createElement("video");
            n.id = e, n.className = "video-js vjs-default-skin ul-video-player-video";
            const r = M.document.createElement("p");
            r.className = "vjs-no-js", r.innerHTML = "To view this video please enable JavaScript, and consider upgrading to a web browser that";
            const i = M.document.createElement("a");
            return i.href = "https://videojs.com/html5-video-support/", i.target = "_blank", i.innerHTML = "supports HTML5 video", r.appendChild(i), n.appendChild(r), t.appendChild(n), t
        },
        fg = (e, t) => {
            t ? (e.children()[0].classList.add("vjs-hidden"), e.audioPlayerPlaceholder.show(), M.document.getElementById(`${e.id()}_html5_api`).style.height = "0px") : (e.children()[0].classList.remove("vjs-hidden"), e.audioPlayerPlaceholder.hide(), M.document.getElementById(`${e.id()}_html5_api`).style.height = "100%")
        },
        Zr = (e, t) => M.document.getElementById(e) ? t ? M.videojs(e, t) : M.videojs(e) : (console.error(`Error in finding player element with ID, ${e}`), null),
        pg = (e, t, n, r = !1, i = "https://api.sprig.com", o = document, a = null, s = null) => {
            M.document = o;
            const l = e + fc,
                u = bc(l);
            return M.document.addEventListener("securitypolicyviolation", c => {
                dt(new Error(`Voice & Video feature violates ${c.violatedDirective} web page CSP policies for the question player.`), "playerDeviceError", i, {})
            }), mc(dc, () => {
                M.document.getElementById(Jo(l)).remove(), ia(l, u);
                const c = {
                    playsinline: !0,
                    playbackRates: [.5, 1, 1.5, 2],
                    fill: !0
                };
                try {
                    const d = e + pc;
                    ia(d, u);
                    const f = Zr(l, c),
                        p = Zr(d, {
                            muted: !0,
                            ...c
                        });
                    if (!f || !p) return;
                    cg(p, a, s), a || p.addClass(le);
                    const v = yc(f, ["PlaybackRateMenuButton", "PlayToggle", "FullscreenToggle"]),
                        h = v.children().find(g => g.name_ === "FullscreenToggle");
                    h.hasClass("vjs-disabled") && h.hide(), _c(f, v, t, n, r, p)
                } catch (d) {
                    dt(new Error(`Error when creating video player object ${d}`), "playerDeviceError", i, {});
                    return
                }
            }), u
        },
        hg = (e, t = {}, n = "https://api.userleap.com", r, i, o, a = !1, s = document) => {
            M.document = s;
            const l = e + hc,
                u = bc(l);
            return M.document.addEventListener("securitypolicyviolation", c => {
                dt(new Error(`Voice & Video feature violates ${c.violatedDirective} web page CSP policies for the recorder player.`), "recorderDeviceError", n, o, t.visitorId, t.envId)
            }), mc(dc.concat(ag), () => {
                ia(l, u), M.document.getElementById(Jo(l)).remove();
                try {
                    dg(u, l, t, n, r, i, o, a)
                } catch (c) {
                    dt(new Error(`Error when creating video recorder player object ${c}`), "recorderDeviceError", n, o, t.visitorId, t.envId);
                    return
                }
            }), u
        },
        vg = e => {
            const t = e + hc;
            if (!!M.document.getElementById(t) && !!M.videojs) {
                try {
                    if (!M.videojs(t).record().stream) return
                } catch {
                    return
                }
                M.videojs(t).record().stop(), M.videojs(t).record().stopDevice()
            }
        },
        mg = e => {
            const t = Zr(e + fc);
            t == null || t.pause()
        },
        gg = e => {
            if (!e) return null;
            const t = e.match(/https:\/\/stream.mux.com\/(.*)/);
            let n = t ? t[1] : null;
            return n.includes(cc) && (n = n.replace(cc, "")), n ? `https://image.mux.com/${n}/thumbnail.jpg?time=0` : null
        },
        H = {
            UPLOAD_STARTED: "upload.started",
            UPLOAD_PROGRESS: "upload.progress",
            UPLOAD_FINISHED: "upload.finished",
            DELETE: "delete",
            ERROR: "error",
            MEDIA_TYPE: "media.type",
            PERMISSION_DENIED: "permission_denied",
            OTHER: "other",
            UPLOAD_ID: "upload.id",
            UPLOAD_PROGRESS_PCT: "upload.progress.pct",
            MEDIA_RECORDING_UID: "media.recording.uid",
            MEDIA_TYPE_VIDEO: "video",
            MEDIA_TYPE_AUDIO: "audio"
        },
        je = {
            PlaybackRateMenuButton: "Speed",
            PlayToggle: "Play",
            FullscreenToggle: "Expand",
            TurnOnCamera: "Turn on",
            TurnOffCamera: "Turn off",
            DeleteButton: "Delete",
            RecordButton: "Record",
            StopButton: "Stop",
            PauseButton: "Pause"
        },
        Wn = "ul-card-video__player_recorder",
        yg = "ul-card-video__skip_button",
        _g = "ul-video-interview-form",
        Ec = "ul-video-btn",
        wg = ({
            className: e,
            message: t,
            next: n,
            properties: r,
            questionId: i,
            type: o
        }) => {
            const {
                apiURL: a,
                envId: s,
                handleUploadUpdate: l,
                headers: u,
                responseGroupUid: c,
                surveyId: d,
                viewDocument: f,
                visitorId: p
            } = Z(T => ({
                apiURL: T.apiURL,
                envId: T.envId,
                handleUploadUpdate: T.handleUploadUpdate,
                headers: T.headers,
                responseGroupUid: T.responseGroupUid,
                surveyId: T.surveyId,
                viewDocument: T.viewDocument,
                visitorId: T.userId
            })), [v, h] = se(!1), [g, _] = se(null), [w, E] = se(null), [b, m] = se(0), x = r && r.videoUrl, k = (T, D) => {
                T === H.UPLOAD_STARTED ? (_(D[H.UPLOAD_ID]), E(D[H.MEDIA_RECORDING_UID]), h(!0)) : T === H.DELETE ? (_(null), E(null), h(!1)) : T === H.UPLOAD_PROGRESS ? isNaN(D[H.UPLOAD_PROGRESS_PCT]) ? l({
                    mediaRecordingUid: D[H.MEDIA_RECORDING_UID],
                    isComplete: !0
                }) : l({
                    mediaRecordingUid: D[H.MEDIA_RECORDING_UID],
                    progressPct: D[H.UPLOAD_PROGRESS_PCT]
                }) : T === H.UPLOAD_FINISHED && l({
                    mediaRecordingUid: D[H.MEDIA_RECORDING_UID],
                    isComplete: !0
                })
            }, C = T => {
                if (T && T.children.length === 0) {
                    const D = pg(Wn, {
                        src: x,
                        type: "application/x-mpegURL"
                    }, void 0, r.mediaType === H.MEDIA_TYPE_AUDIO, a, f);
                    T.appendChild(D)
                }
            }, I = T => {
                if (T && T.children.length === 0) {
                    const D = hg(Wn, {
                        surveyId: d,
                        responseGroupUid: c,
                        questionId: i,
                        visitorId: p,
                        envId: s
                    }, a, k, void 0, { ...u,
                        "x-ul-video-recorder-origin": "sdk"
                    }, r.mediaType === H.MEDIA_TYPE_AUDIO, f);
                    T.appendChild(D)
                }
            }, R = T => {
                T.preventDefault(), T.stopPropagation(), vg(Wn), g && w ? (l({
                    mediaRecordingUid: w,
                    isSubmitted: !0
                }), n({
                    value: {
                        mediaRecordingUid: w
                    },
                    questionId: i,
                    type: o
                })) : n({
                    value: null,
                    questionId: i,
                    type: o
                })
            }, O = () => y(ct, {
                defaultBody: () => y("button", {
                    className: `${Ec} ul-record-response-btn`,
                    onClick: T => {
                        T.preventDefault(), T.stopPropagation(), mg(Wn), m(1)
                    }
                }),
                properties: r
            });
            return y("form", {
                className: F([e, U.VideoCard, U.FadeInTransition]),
                id: _g,
                children: [y(Ve, {
                    message: t,
                    properties: r
                }), y("div", {
                    id: "ul-card-voice__video",
                    children: [y("div", {
                        children: [y("div", {
                            id: "ul-question-player-container",
                            style: {
                                display: b === 0 ? "" : "none"
                            },
                            children: [y("div", {
                                id: Wn,
                                ref: C
                            }), O()]
                        }), y("div", {
                            style: {
                                display: b === 1 ? "block" : "none"
                            },
                            children: [y("button", {
                                className: `${Ec} ul-back-question-btn`,
                                onClick: T => {
                                    T.preventDefault(), T.stopPropagation(), m(0)
                                }
                            }), y("div", {
                                id: "ul-recorder-player-container",
                                ref: I
                            })]
                        })]
                    }), y(ye, {
                        disabled: !v,
                        onClick: R,
                        children: Kt(r)
                    }), y("button", {
                        className: `ul-card-text__button ${U.InactiveButton} ${U.SkipButton}`,
                        id: yg,
                        onClick: R,
                        style: {
                            display: r.required ? "none" : "block",
                            ...v ? {
                                display: "none"
                            } : {}
                        },
                        children: Wo(r)
                    })]
                })]
            })
        },
        bg = ({
            className: e
        }) => {
            const {
                uploadProgress: t
            } = Z(o => ({
                uploadProgress: o.uploadProgress
            }));
            let n, r;
            Object.values(t).filter(o => o.isSubmitted).length > 1 ? (n = "Your responses are processing", r = "Please keep this tab open until your responses are fully processed.") : (n = "Your response is processing", r = "Please keep this tab open until your response is fully processed.");
            const i = Math.round(Math.min(99, ...Object.values(t).filter(o => o.isSubmitted).map(o => o.progressPct || 0)));
            return y("div", {
                className: F([e, "ul-card--uploading", U.FadeInTransition]),
                children: [y("div", {
                    "aria-busy": "true",
                    "aria-label": "Processing...",
                    "aria-live": "polite",
                    className: U.LoadingSpinnerContainer,
                    role: "progressbar",
                    children: y("div", {
                        className: U.LoadingSpinner,
                        children: [y("div", {
                            className: U.LoadingSpinnerFirst
                        }), y("div", {
                            className: U.LoadingSpinnerSecond
                        }), y("div", {
                            className: U.LoadingSpinnerThird
                        }), y("div", {
                            className: U.LoadingSpinnerFourth
                        })]
                    })
                }), y(Ve, {
                    message: `${n} (${i}% complete)`
                }), y("p", {
                    className: U.Caption,
                    children: r
                })]
            })
        },
        xc = ({
            logoOnly: e = !1,
            style: t = {}
        }) => y("svg", {
            alt: `${e?"Powered by ":""}Sprig`,
            width: e ? "35" : "112",
            height: "15",
            viewBox: e ? "79 0 31 15" : "0 0 112 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                display: "block",
                ...t
            },
            children: [!e && y("path", {
                d: "M0.648926 12.0181V2.8584H4.21631C6.0127 2.8584 7.25684 4.06445 7.25684 5.86084V5.87354C7.25684 7.66357 6.0127 8.88867 4.21631 8.88867H2.0708V12.0181H0.648926ZM3.86084 4.05811H2.0708V7.69531H3.86084C5.09229 7.69531 5.80957 7.02881 5.80957 5.87988V5.86719C5.80957 4.72461 5.09229 4.05811 3.86084 4.05811ZM11.6621 12.1514C9.63721 12.1514 8.39941 10.7993 8.39941 8.57764V8.56494C8.39941 6.34961 9.64355 4.99121 11.6621 4.99121C13.6743 4.99121 14.9185 6.34326 14.9185 8.56494V8.57764C14.9185 10.7993 13.6807 12.1514 11.6621 12.1514ZM11.6621 11.0024C12.8428 11.0024 13.5156 10.1011 13.5156 8.57764V8.56494C13.5156 7.03516 12.8428 6.14014 11.6621 6.14014C10.4751 6.14014 9.80859 7.03516 9.80859 8.56494V8.57764C9.80859 10.1074 10.4751 11.0024 11.6621 11.0024ZM17.6226 12.0181L15.7183 5.12451H17.1021L18.3398 10.4438H18.4414L19.8633 5.12451H21.1709L22.5928 10.4438H22.7007L23.9321 5.12451H25.2969L23.3989 12.0181H21.9834L20.5552 6.87646H20.4473L19.0254 12.0181H17.6226ZM29.334 12.1514C27.3154 12.1514 26.0967 10.7739 26.0967 8.59033V8.58398C26.0967 6.43213 27.3408 4.99121 29.2642 4.99121C31.1875 4.99121 32.3682 6.38135 32.3682 8.45068V8.93311H27.4805C27.5059 10.2534 28.2295 11.0215 29.3657 11.0215C30.248 11.0215 30.7749 10.5835 30.9399 10.228L30.9653 10.1772L32.292 10.1709L32.2793 10.228C32.0508 11.1357 31.0986 12.1514 29.334 12.1514ZM29.2705 6.12109C28.3311 6.12109 27.6201 6.76221 27.4995 7.94922H31.0034C30.8955 6.71777 30.2036 6.12109 29.2705 6.12109ZM34.0059 12.0181V5.12451H35.3833V6.16553H35.4849C35.7324 5.43555 36.3735 5.00391 37.2939 5.00391C37.5161 5.00391 37.7573 5.03564 37.897 5.06738V6.33691C37.6494 6.28613 37.4146 6.25439 37.1543 6.25439C36.1006 6.25439 35.3833 6.90186 35.3833 7.89844V12.0181H34.0059ZM41.9277 12.1514C39.9092 12.1514 38.6904 10.7739 38.6904 8.59033V8.58398C38.6904 6.43213 39.9346 4.99121 41.8579 4.99121C43.7812 4.99121 44.9619 6.38135 44.9619 8.45068V8.93311H40.0742C40.0996 10.2534 40.8232 11.0215 41.9595 11.0215C42.8418 11.0215 43.3687 10.5835 43.5337 10.228L43.5591 10.1772L44.8857 10.1709L44.873 10.228C44.6445 11.1357 43.6924 12.1514 41.9277 12.1514ZM41.8643 6.12109C40.9248 6.12109 40.2139 6.76221 40.0933 7.94922H43.5972C43.4893 6.71777 42.7974 6.12109 41.8643 6.12109ZM49.1133 12.1323C47.3804 12.1323 46.2568 10.7422 46.2568 8.57764V8.56494C46.2568 6.38135 47.3613 5.00391 49.1133 5.00391C50.0591 5.00391 50.8652 5.47363 51.2334 6.21631H51.3413V2.42041H52.7124V12.0181H51.3413V10.9326H51.2334C50.8335 11.688 50.0781 12.1323 49.1133 12.1323ZM49.5068 10.958C50.6558 10.958 51.3604 10.0503 51.3604 8.57764V8.56494C51.3604 7.09229 50.6494 6.18457 49.5068 6.18457C48.3516 6.18457 47.6597 7.08594 47.6597 8.56494V8.57764C47.6597 10.0566 48.3516 10.958 49.5068 10.958ZM61.98 12.1323C61.0151 12.1323 60.2598 11.688 59.8599 10.9326H59.7583V12.0181H58.3809V2.42041H59.7583V6.21631H59.8599C60.228 5.47363 61.0342 5.00391 61.98 5.00391C63.7319 5.00391 64.8364 6.38135 64.8364 8.56494V8.57764C64.8364 10.7422 63.7192 12.1323 61.98 12.1323ZM61.5928 10.958C62.7417 10.958 63.4336 10.0566 63.4336 8.57764V8.56494C63.4336 7.08594 62.7417 6.18457 61.5928 6.18457C60.4438 6.18457 59.7329 7.09229 59.7329 8.56494V8.57764C59.7329 10.0503 60.4438 10.958 61.5928 10.958ZM66.8867 14.4429C66.7153 14.4429 66.5122 14.4302 66.3345 14.4111V13.3257C66.4678 13.3447 66.6392 13.3511 66.7979 13.3511C67.439 13.3511 67.8262 13.0781 68.0293 12.3799L68.1309 12.0244L65.6299 5.12451H67.1152L68.8418 10.6343H68.9624L70.6826 5.12451H72.1299L69.5654 12.2847C68.9814 13.9287 68.2832 14.4429 66.8867 14.4429Z",
                fill: "black",
                fillOpacity: "0.7"
            }), y("path", {
                d: "M81.1088 6.63629C79.6878 6.32154 78.9672 5.76865 78.9672 4.99369C78.9672 4.19299 79.736 3.5886 80.7556 3.5886C81.8066 3.5886 82.5995 4.25285 82.5995 5.13336V5.20352H84.0518V5.13336C84.0518 3.52424 82.6405 2.30774 80.7693 2.30774C79.8676 2.30774 79.0414 2.58451 78.4433 3.08655C78.1463 3.33144 77.9077 3.63818 77.7448 3.98479C77.5818 4.33141 77.4984 4.70934 77.5005 5.09153C77.4946 5.44197 77.5675 5.78934 77.714 6.10857C77.8605 6.42779 78.0769 6.71092 78.3475 6.93752C78.8512 7.37584 79.5659 7.70024 80.4709 7.90299C81.9949 8.23898 82.7676 8.81054 82.7676 9.60094C82.7676 10.4576 81.9258 11.1032 80.813 11.1032C79.6571 11.1032 78.7854 10.3856 78.7854 9.43424V9.36408H77.3318V9.43424C77.3318 11.1167 78.8219 12.3847 80.7973 12.3847C81.7421 12.3847 82.6093 12.0983 83.2393 11.5769C83.5519 11.3237 83.8034 11.0048 83.9753 10.6433C84.1472 10.2818 84.2352 9.88702 84.2329 9.48766C84.2329 8.05875 83.1833 7.09907 81.1088 6.63629Z",
                fill: "black",
                fillOpacity: "0.7"
            }), y("path", {
                d: "M89.2394 4.68276C88.6963 4.67605 88.1596 4.79915 87.6751 5.04156C87.1905 5.28397 86.7725 5.63851 86.4566 6.07497V4.85204H85.0747V14.8479H86.4566V11.0356C86.7725 11.472 87.1906 11.8265 87.6751 12.0688C88.1596 12.3111 88.6963 12.434 89.2394 12.4272C91.3836 12.4272 93 10.7627 93 8.55495C93 6.34723 91.3836 4.68276 89.2394 4.68276ZM91.5608 8.84202C91.5057 9.41605 91.2512 9.95356 90.8406 10.3633C90.4299 10.773 89.8883 11.0296 89.3078 11.0896C88.5363 11.1669 87.8177 10.9461 87.2841 10.4692C86.7505 9.99222 86.4566 9.3106 86.4566 8.55495C86.4566 7.10159 87.5538 6.00546 89.0087 6.00546C89.7619 6.00546 90.4421 6.29124 90.9171 6.81002C91.407 7.34232 91.6357 8.06385 91.5608 8.84202Z",
                fill: "black",
                fillOpacity: "0.7"
            }), y("path", {
                d: "M109.95 4.85407V6.06349C109.298 5.18298 108.292 4.68286 107.153 4.68286C105.017 4.68286 103.406 6.31709 103.406 8.48426C103.406 10.6514 105.017 12.285 107.153 12.285C108.296 12.285 109.303 11.79 109.95 10.9185V11.1046C109.95 12.6101 108.993 13.5826 107.513 13.5826C106.513 13.5826 105.68 13.1494 105.284 12.424L105.264 12.3867H103.838L103.871 12.48C104.112 13.1892 104.583 13.8001 105.211 14.2179C105.841 14.6324 106.637 14.8512 107.513 14.8512C108.637 14.8512 109.594 14.4972 110.28 13.8285C110.967 13.1597 111.332 12.2194 111.332 11.1213V4.85407H109.95ZM109.175 10.3502C108.588 10.905 107.752 11.138 106.879 10.9887C106.361 10.8984 105.886 10.6475 105.523 10.2725C105.16 9.89751 104.927 9.41787 104.859 8.90328C104.736 8.03757 104.999 7.21756 105.581 6.655C106.069 6.19093 106.723 5.93643 107.401 5.94699C107.565 5.94713 107.729 5.96026 107.891 5.98625C108.946 6.15489 109.781 7.01609 109.921 8.0852C110.039 8.96507 109.766 9.78958 109.175 10.3502Z",
                fill: "black",
                fillOpacity: "0.7"
            }), y("path", {
                d: "M101.89 2.12378C101.63 2.06766 101.358 2.11486 101.133 2.25518C100.908 2.39551 100.747 2.61769 100.687 2.87371C100.626 3.12973 100.67 3.39902 100.809 3.62339C100.947 3.84775 101.17 4.00917 101.428 4.07275C101.503 4.08936 101.58 4.09778 101.657 4.09786C101.906 4.09824 102.146 4.0083 102.331 3.84518C102.517 3.68206 102.636 3.45714 102.664 3.21327C102.693 2.9694 102.63 2.72361 102.487 2.5227C102.344 2.32179 102.132 2.17981 101.89 2.12378Z",
                fill: "black",
                fillOpacity: "0.7"
            }), y("path", {
                d: "M100.967 10.934H99.7755C98.9285 10.934 98.4196 10.3644 98.4196 9.40982C98.4196 8.4791 98.8757 7.36945 99.8054 6.01778L99.8178 5.99976V5.61807L95.8571 5.06453C95.8585 4.90331 95.8162 4.74466 95.7346 4.60501C95.653 4.46536 95.5352 4.34979 95.3932 4.27027C95.0381 4.07718 94.6498 4.07717 94.3279 4.26383C94.1667 4.35799 94.035 4.4945 93.9476 4.65816C93.8602 4.82182 93.8205 5.00623 93.8328 5.19087C93.8452 5.37552 93.9092 5.55315 94.0176 5.70402C94.1261 5.85489 94.2748 5.97309 94.4472 6.04546L93.2151 12.258H94.5833L95.7196 6.35891L97.8593 6.7155C97.284 7.73439 96.9921 8.68442 96.9921 9.53919C96.9921 11.1168 97.9577 12.1498 99.5187 12.2496V12.258H102.346V4.87723H100.967V10.934Z",
                fill: "black",
                fillOpacity: "0.7"
            })]
        }),
        Eg = () => {
            const {
                border: e,
                cards: t,
                forceBrandedLogo: n,
                headers: r,
                index: i,
                marketingUrl: o,
                showSurveyBrand: a,
                slugName: s,
                surveyId: l,
                viewedCardCount: u
            } = Z(E => ({
                border: E.border,
                cards: E.cards,
                forceBrandedLogo: E.forceBrandedLogo,
                headers: E.headers,
                index: E.index,
                marketingUrl: E.marketingUrl,
                showSurveyBrand: E.showSurveyBrand,
                slugName: E.slugName,
                surveyId: E.surveyId,
                viewedCardCount: E.viewedCardCount
            })), c = xt(null), d = t.filter(E => E.type !== L.Uploading && E.type !== L.Thanks), f = Sm(t, i), p = u + 1, v = p / (p + f), h = `${o}?utm_source=survey_branding&utm_medium=website&utm_campaign=${s}&utm_content=${l}${n&&"&utm_term=poweredby_pill"}`;
            Ae(() => {
                c.current && (c.current.style.width = `${v*100}%`)
            }, [v]);
            const g = () => y(xe, {
                    children: [d.length > 1 && y("div", {
                        id: "ul-progress-bar-container",
                        children: y("div", {
                            id: "ul-progress-bar-current",
                            ref: c,
                            style: {
                                border: `1px solid ${e||"#000"}`
                            }
                        })
                    }), a ? y("div", {
                        className: n ? "yellow-footer-logo" : "",
                        style: {
                            marginTop: "4px"
                        },
                        children: y("a", {
                            href: h,
                            rel: "noreferrer",
                            target: "_blank",
                            children: y("div", {
                                style: {
                                    display: "flex"
                                },
                                children: [y(xc, {
                                    logoOnly: !1
                                }), n && y(Cc, {
                                    style: {
                                        display: "block",
                                        margin: "auto 0 auto 4px",
                                        transform: "rotateY(0deg) rotate(-45deg)"
                                    }
                                })]
                            })
                        })
                    }) : null]
                }),
                _ = () => y("a", {
                    dir: "ltr",
                    href: h,
                    rel: "noreferrer",
                    target: "_blank",
                    children: y("div", {
                        className: "thank-you-card-link",
                        children: [y("div", {
                            className: "sprig-box-logo",
                            children: y(xc, {
                                logoOnly: !0,
                                style: {
                                    margin: "auto"
                                }
                            })
                        }), y("div", {
                            children: y("p", {
                                children: ["Capture insights about your own product", y(Cc, {
                                    style: {
                                        display: "inline-flex",
                                        marginInlineStart: "4px",
                                        verticalAlign: "middle"
                                    }
                                })]
                            })
                        })]
                    })
                }),
                w = t[i].type === L.Thanks;
            return y("footer", {
                className: `ul-footer ${r["userleap-platform"]==="link"?"ul-footer__link":""}`,
                style: a ? {} : {
                    marginBottom: "10px"
                },
                children: w && n ? _() : g()
            })
        },
        Cc = ({
            style: e
        }) => y("svg", {
            fill: "none",
            height: "10",
            style: e,
            viewBox: "0 0 12 10",
            width: "12",
            xmlns: "http://www.w3.org/2000/svg",
            children: [y("path", {
                d: "M1.47839 5.2085L10.9384 5.2085",
                stroke: "black",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.35"
            }), y("path", {
                d: "M7.0686 1.15845L10.9386 5.20845L7.0686 9.25845",
                stroke: "black",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.35"
            })]
        }),
        xg = () => {
            const {
                answers: e,
                border: t,
                cards: n,
                close: r,
                configureExitOnOverlayClick: i,
                destroy: o,
                endCard: a,
                eventEmitFn: s,
                fontFamily: l,
                headers: u,
                index: c,
                next: d,
                showStripes: f,
                surveyId: p,
                update: v,
                useMobileStyling: h,
                viewDocument: g
            } = Z(S => ({
                answers: S.answers,
                border: S.border,
                cards: S.cards,
                close: S.close,
                configureExitOnOverlayClick: S.configureExitOnOverlayClick,
                destroy: S.destroy,
                endCard: S.endCard,
                eventEmitFn: S.eventEmitFn,
                fontFamily: S.fontFamily,
                headers: S.headers,
                index: S.index,
                next: S.next,
                showStripes: S.showStripes,
                surveyId: S.surveyId,
                update: S.update,
                useMobileStyling: S.useMobileStyling,
                viewDocument: S.viewDocument
            })), _ = xt(null), w = xt(!1), E = u["userleap-platform"], {
                props: b,
                type: m,
                name: x
            } = n[c], k = n.length;
            Ae(() => {
                _.current && (_.current.classList.contains("ul-app--visible") || _.current.classList.add("ul-app--visible"), !w.current && s && (w.current = !0, s(j.SurveyAppeared, {
                    name: j.SurveyAppeared,
                    [En.SurveyId]: p
                })))
            }, [s, p]), Ae(() => {
                v()
            }, [c, v]), Ae(() => {
                i(() => r())
            }, [r, i]);
            const C = () => r(Jt),
                I = S => {
                    S.key === "Enter" && C()
                },
                R = async function(S) {
                    d({
                        data: S,
                        completeSurvey: () => {
                            o(Jt)
                        },
                        endCard: a
                    }), Vf(g)
                };
            if (e) {
                for (const S of e)
                    if (S.questionId === x) {
                        let X;
                        if (m === L.MultipleChoice) {
                            const oe = b.options.find(({
                                value: Ue
                            }) => Ue === S.value);
                            if (!oe) break;
                            X = {
                                [oe.id]: oe.value
                            }
                        } else X = S.value;
                        R({
                            value: X,
                            type: m,
                            questionId: S.questionId
                        });
                        break
                    }
            }
            const O = () => [At.Email, At.Link].includes(u["userleap-platform"]) ? !1 : !a || c + 1 !== k,
                T = () => h ? {
                    borderColor: t
                } : {
                    borderColor: t,
                    margin: "15px"
                },
                D = () => {
                    const S = {
                        className: "ul-card",
                        next: R,
                        questionId: x,
                        type: m
                    };
                    switch (m) {
                        case L.ConsentLegal:
                            return ee(Pm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.Likert:
                            return ee(Mm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.Matrix:
                            return ee(Vm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.MultipleChoice:
                            return ee(jm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.MultipleSelect:
                            return ee(Bm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.NPS:
                            return ee(Fm, { ...S,
                                key: x,
                                props: b
                            });
                        case L.Open:
                            return ee(Hm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.RecordedTask:
                            return ee(Jm, { ...S,
                                ...b,
                                key: x
                            });
                        case L.TextUrlPrompt:
                            return ee(ng, { ...S,
                                ...b,
                                key: x
                            });
                        case L.Thanks:
                            return ee(rg, { ...S,
                                ...b,
                                key: x
                            });
                        case L.Uploading:
                            return ee(bg, { ...S,
                                ...b,
                                key: x
                            });
                        case L.VideoVoice:
                            return ee(wg, { ...S,
                                ...b,
                                key: x
                            });
                        default:
                            return null
                    }
                },
                W = S => {
                    var Se;
                    const X = window.sprigAPI,
                        oe = S.target;
                    if (!X || !oe) return;
                    const Ue = [oe, oe.parentElement];
                    for (const de of Ue)
                        if (((Se = de == null ? void 0 : de.tagName) == null ? void 0 : Se.toLowerCase()) === "a") {
                            S.preventDefault(), X == null || X.openUrl(de.href);
                            return
                        }
                };
            return y("div", {
                className: F("ul-app", Cn(u) ? "ul-app--visible" : "ul-app--overlay"),
                dir: "auto",
                id: Jt,
                onClick: W,
                ref: _,
                style: {
                    "--theme": t,
                    ...l ? {
                        fontFamily: l.replace(";", "")
                    } : {}
                },
                children: y("div", {
                    className: "ul-app__container",
                    children: y("div", {
                        className: F(re(U.CardContainer, h)),
                        style: T(),
                        children: [O() && y("div", {
                            className: F(re(U.CloseContainer, h)),
                            children: y("div", {
                                "aria-label": "Close button",
                                className: U.CloseButton,
                                onClick: C,
                                onKeyPress: I,
                                role: "button",
                                tabIndex: 0,
                                children: y("svg", {
                                    fill: "none",
                                    height: "18px",
                                    viewBox: "0 0 13 13",
                                    width: "18px",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: y("path", {
                                        d: "M2.54964 1.78369L1.78369 2.54964L5.73405 6.5L1.78369 10.4504L2.54964 11.2163L6.5 7.26595L10.4504 11.2163L11.2163 10.4504L7.26595 6.5L11.2163 2.54964L10.4504 1.78369L6.5 5.73405L2.54964 1.78369Z",
                                        fill: "#262136"
                                    })
                                })
                            })
                        }), f && y("div", {
                            className: "ul-header__container",
                            dir: "ltr",
                            children: y("div", {
                                className: "ul-header",
                                children: "For development purposes only"
                            })
                        }), y("div", {
                            className: F(Bf(U.CardMainContent, E)),
                            children: D()
                        }), y(Eg, {})]
                    })
                })
            })
        },
        Cg = `html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ol,ul{padding-inline-start:1em}.ul-card{flex:1 1 auto;border-radius:2px;display:flex;flex-direction:column;font-size:17px;line-height:19px;text-align:start;margin:auto}.ul-card__container--desktop{border:2px solid #fff;box-shadow:0 0 15px #00000026}.ul-card__container--mobile{border-width:0;box-shadow:0 0 5px #00000040;margin-top:5px}.ul-card__container{background:#ffffff;border-radius:6px;display:flex;flex-direction:column;flex-grow:1;flex:1 1 auto;font-size:17px;line-height:23px;overflow:auto;padding:20px 20px 5px;position:relative;text-align:center;word-break:break-word}.ul-card-vertical__button-wrapper{flex-direction:column;align-items:center}.ul-card__button-wrapper{margin-top:4px;margin-bottom:3px;display:flex;gap:16px;justify-content:center}.ul-rich-text-body{min-height:2em}.ul-rich-text-body,.ul-rich-text-body p{margin-top:10px;margin-bottom:10px}.ul-rich-text-body li{margin:5px 0}.ul-rich-text-body p,.ul-rich-text-body li{font-size:15px;line-height:130.35%;letter-spacing:.02em;color:#343442;text-align:start;white-space:pre-line}.ul-rich-text-body:last-child,.ul-rich-text-body li:last-child{margin-bottom:15px}.ul-card-main-content__link,.ul-card-main-content__email{flex-grow:55;display:flex}.ul-card-main-content__web,.ul-card-main-content__android,.ul-card-main-content__ios{margin-bottom:5px}.ul-question{color:#343442;display:block;font-size:20px;line-height:125%;font-weight:500;cursor:default;text-align:start}.ul-caption{flex:1 0 auto;margin-top:8px;margin-bottom:15px;font-size:15px;line-height:130.35%;letter-spacing:.02em;color:#6c6c6e;text-align:start}.ul-card__choices{margin:5px 0 0;flex:1 0}.choice--mobile{border:2px solid #e6e6e6}.choice--desktop{border:1px solid #e6e6e6}.choice{align-items:flex-start;color:#262136;cursor:pointer;display:flex;justify-content:flex-start;flex-direction:column;box-sizing:border-box;border-radius:3px;margin-bottom:7px;font-size:15px;line-height:20px;padding:10px 20px 10px 15px;background-color:#00000003}.choice--desktop:hover,.choice--desktop:active,.choice--mobile:active{background-color:#0000000d}.choice-label-container{align-items:center;display:flex;flex-direction:row;flex:0 0 fit-content;gap:15px;height:fit-content;justify-content:flex-start;width:100%}.choice-text-entry-container{width:100%;height:fit-content;flex:0 1 fit-content;overflow:hidden}.choice .choice-text-input--mobile{max-height:63px}.choice .choice-text-input--desktop{max-height:150px}.choice .choice-text-input{box-sizing:border-box;background-color:transparent;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:20px;max-height:60px;padding:0;margin-top:8px;resize:none;width:100%;font-size:14px;line-height:20px;outline:none;border:none;overflow-wrap:break-word}.choice .choice-text-input::placeholder{color:#6c6c6e80}.ul-thanks-check{text-align:center;margin-bottom:20px}.ul-card--thanks-content{padding:20px 0 10px}.ul-card--thanks .ul-question{padding-top:0;text-align:center}.ul-card--thanks .ul-caption{padding-top:0;text-align:center;overflow-wrap:break-word;hyphens:auto;hyphenate-limit-lines:no-limit}.ul-card--uploading .ul-question{padding-top:15px;text-align:center}.ul-card--uploading .ul-caption{padding-top:5px;text-align:center;overflow-wrap:break-word}.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.select-checkbox{height:16px;width:16px;border-radius:3px;border:1px solid #323232;display:flex;box-sizing:border-box;box-shadow:inset 3px 3px #0000001a;background-color:"transparent";align-items:center;justify-content:center}.select-radio{height:16px;width:16px;border-radius:16px;border:1px solid #323232;display:flex;box-sizing:border-box;box-shadow:inset 2px 2px #0000001a;background-color:"transparent";align-items:center;justify-content:center}.fade-in-transition{animation:fadeIn .4s ease-in;-webkit-animation:fadeIn .4s ease-in;-moz-animation:fadeIn .4s ease-in;-o-animation:fadeIn .4s ease-in;-ms-animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}to{opacity:1}}[class^=CenteredSurveyLayout] .ul-header__container,[class^=QuestionConceptTestLayout] .ul-header__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{margin-bottom:unset}[class^=CenteredSurveyLayout] .ul-card__container,[class^=QuestionConceptTestLayout] .ul-card__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{align-self:center;box-shadow:unset;border-radius:unset;border:none!important;position:unset;width:100%}@media only screen and (min-height: 600px) and (width: 600px){.ul-card{position:relative;top:-20px}}.ul-vertical-centered-container{display:flex;flex-direction:column;align-items:center}.ul-consent-legal__name-input--mobile{border:2px solid #e6e6e6}.ul-consent-legal__name-input--desktop{border:1px solid #e6e6e6}.ul-consent-legal__name-input{background:rgba(0,0,0,.01);box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;padding:10px 20px 10px 15px;border-radius:3px;font-size:15px;line-height:20px;margin-bottom:7px;width:100%}.ul-consent-legal__name-input::placeholder{color:#6c6c6e80}.ul-consent-legal__name-input:focus{outline:none;background:white}.ul-consent-legal__name-input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__consent-legal .choice{font-size:15px;padding:10px 15px;background-color:#00000003}.ul-card__consent-legal .choice--desktop:hover,.ul-card__consent-legal .choice--desktop:active,.ul-card__consent-legal .choice--mobile:active{background-color:#0000000d}.ul-card--likert__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.likert-number--mobile{border:2px solid #e6e6e6}.likert-number--mobile:not(:first-child){margin-inline-start:-2px}.likert-number--desktop{border:1px solid #e6e6e6}.likert-number--desktop:not(:first-child){margin-inline-start:-1px}.likert-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px}.likert-number:first-child{border-start-start-radius:5px;border-end-start-radius:5px}.likert-number:last-child{border-start-end-radius:5px;border-end-end-radius:5px}.likert-number:active,.likert-number--desktop:hover{background-color:#0000000d;font-weight:500}.likert-star--mobile:not(:first-child){margin-inline-start:-2px}.likert-star--desktop:not(:first-child){margin-inline-start:-1px}.likert-star{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;font-size:18px;line-height:24px;height:67px}.likert-smiley--mobile:not(:first-child){margin-inline-start:-2px}.likert-smiley--desktop:not(:first-child){margin-inline-start:-1px}.likert-smiley{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;line-height:24px;height:67px}.likert-smiley circle:not(:first-child){fill-opacity:1}.ul-card--likert__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card--matrix_grid{display:grid;grid-template-columns:max-content repeat(var(--numColumns),minmax(93px,1fr));grid-template-rows:repeat(var(--numRows),min-content);margin:0 auto;row-gap:4px;width:max-content}.ul-matrix-row-options{display:grid;grid-column:2/-1;grid-template-columns:subgrid}.ul-matrix-column-label{font-size:15px;max-width:150px;padding:10px 12px;text-align:center}.ul-card--matrix_container{margin-bottom:16px;max-width:var(--maxWidth);overflow:auto}.ul-matrix-option-wrapper{align-items:center;background:#f9f9f8;display:flex;justify-content:center;padding:10px 12px}.ul-matrix-last-option{border-start-end-radius:4px;border-end-end-radius:4px}.ul-matrix-row-label{align-items:center;background:#f9f9f8;border-end-start-radius:4px;border-start-start-radius:4px;display:flex;font-size:15px;left:0;right:0;max-width:200px;min-width:100px;padding:10px 12px;position:sticky}.ul-matrix-option-selected{border:6px solid var(--border);box-shadow:none}.ul-card__matrix{min-width:min-content}.select-label{cursor:pointer;flex:1;overflow-wrap:anywhere;text-align:start}.ul-card--nps__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.nps-number--mobile{border:2px solid #e6e6e6}.nps-number--mobile:not(:first-child){margin-inline-start:-2px}.nps-number--desktop{border:1px solid #e6e6e6}.nps-number--desktop:not(:first-child){margin-inline-start:-1px}.nps-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px}.nps-number:first-child{border-start-start-radius:5px;border-end-start-radius:5px}.nps-number:last-child{border-start-end-radius:5px;border-end-end-radius:5px}.nps-number:active,.nps-number--desktop:hover{background-color:#0000000d;font-weight:500}.ul-card--nps__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card-text{flex:1 0 auto;margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0}.ul-card-text__container{align-items:center;box-sizing:border-box;border-radius:3px;display:flex;justify-content:center;margin-bottom:12px;flex:1 0 100%}.ul-card-text__input--mobile{border:2px solid #e6e6e6;max-height:63px}.ul-card-text__input--desktop{border:1px solid #e6e6e6;max-height:150px}.ul-card-text__input{background:rgba(0,0,0,.01);box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:63px;overflow:auto;padding:12px;resize:none;width:100%;border-radius:3px;font-size:15px;line-height:20px;overflow-wrap:break-word}.ul-card-text__input::placeholder{color:#6c6c6e80}.ul-card-text__input:focus{outline:none;background:white}.ul-card-text__input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__text-url-prompt-button{text-decoration:none;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:-webkit-fill-available}#ul-card-voice__video{align-items:center;display:flex;flex-direction:column}#ul-card-voice__video>div{margin-bottom:10px;width:100%}#ul-card-video__player_recorder{width:100%;width:-moz-available;width:-webkit-fill-available;width:fill-available}.ul-card-record__task{flex:1 0 auto;margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0}#ul-record-task-upload-progress,#ul-record-task-video-preview{width:100%;height:150px}.ul-permission-graphics-container{width:100%;height:150px;background-color:#0000000d;text-align:center;flex-direction:column;margin-left:auto;margin-right:auto;border-radius:5px;display:flex;align-items:center;font-size:15px;color:#000000b3}.ul-av-permission-denied-paragraph{margin:auto 15px;font-size:12px}.ul-av-permission-denied-headline{font-size:14px;color:#262136;text-decoration:underline;font-size:12px}.ul-permission-body{color:#000;margin:5px auto 5px 5px;line-height:135%;text-align:center}.ul-select-tab-container{width:240px;height:46px;background:#ffffff;border-radius:5px;text-align:start;align-items:center;display:flex;padding:0 5px;margin-top:20px;margin-bottom:auto}.ul-select-tab-text{color:#4b575d;margin:5px;line-height:135%;text-align:center}button.ul-task-skip-button{color:#000;background-color:#fff}#ul-task-detail-container{margin-top:0;margin-bottom:0;overflow:auto}#ul-task-detail-container.ul-rich-text-body p,#ul-task-detail-container.ul-rich-text-body li,#ul-task-detail-container.ul-rich-text-body{color:#4c4c4c}#ul-task-detail-container :first-child{margin-top:0}#ul-task-detail-container :last-child{margin-bottom:20px}.ul-horizontal-button-container{width:100%;display:flex;flex-direction:row}.ul-skip-button-below{margin-top:5px}.ul-horizontal-button-container-center{justify-content:center}.ul-vertical-button-container-center{display:flex;flex-direction:column;align-items:center}.ul-horizontal-button-container-left{justify-content:flex-start}.ul_recorded-task-inset-spacing{margin-top:5px;margin-bottom:24px}.ul_permission_svg_container{justify-content:center}.ul-card-text__button{background-color:var(--theme);border-radius:3px;border:none;color:#fff;cursor:pointer;font-size:15px;font-weight:500;line-height:18px;padding:10.5px 21px}.ul-card-text__button:disabled,.ul-card-text__button.sprig-button-disabled{background-color:#0000001a;color:#0003}.ul-card-text__button.ul-button-inactive{background-color:#fff!important;color:#5d696f!important}.ul-card-skip__button{color:#00000080;background:none;border:none;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;cursor:pointer}.ul-card-button-group{align-items:center;display:flex;gap:15px;justify-content:center;flex-direction:column}html,body{cursor:default;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;height:100%;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-webkit-touch-callout:none}b{font-weight:500}#ul-app{opacity:0;width:100%;flex-grow:2;display:flex}#ul-app.ul-app--overlay{position:absolute;bottom:0;transition:opacity .1s ease-out;transition-delay:.1s}#ul-app.ul-app--visible{opacity:1;bottom:0}.ul-app__container{width:100%;display:flex;flex-direction:column;max-height:100vh}.ul-header__container{margin-bottom:15px}.ul-header{align-items:center;background:repeating-linear-gradient(120deg,#ebebeb,#ebebeb 24px,#fff 24px,#fff 48px);border-bottom:2px solid #ebebeb;display:flex;font-size:14px;font-weight:500;height:40px;justify-content:center;left:0;position:absolute;top:0;width:100%}.ul-footer{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:auto;flex-grow:1;width:100%}.ul-footer>.yellow-footer-logo{background:#fad133;border:1px solid #f9c600;border-radius:14px;padding:6px 12px}.ul-footer>.yellow-footer-logo:hover{background:#f9c600}.ul-footer .thank-you-card-link{background:rgba(0,0,0,.01);border:1px solid #e6e6e6;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;gap:12px;margin-bottom:15px;padding:12px;text-align:initial;width:280px}.ul-footer .thank-you-card-link:hover{background:rgba(0,0,0,.03)}.ul-footer>a{color:inherit}.ul-footer-bubble{display:inline-block;margin:0 3px;width:7px;height:7px;border-radius:3px;border:1px solid transparent}.sprig-box-logo{background:rgba(249,198,0,1);border-radius:5px;display:flex;padding:4px}.close-container{display:flex;justify-content:flex-end;width:100%}.close-btn{cursor:pointer;height:18px;margin-inline-end:-10px;position:relative;top:-10px;width:18px;z-index:1}.ul-app__container{transition:opacity .3s ease-out}.ul-center-horizontally{text-align:center}#ul-progress-bar-container{width:100%;height:2px;background-color:#0000001a;border-radius:2px;max-width:250px;margin:25px 0}#ul-progress-bar-current{transition:width 1s ease;width:0%;height:0;border-radius:2px}.prototype-button{width:100%;background:rgba(0,0,0,.01);border:1.5px solid #e6e6e6;border-radius:4px 0 0 4px;flex:none;flex-grow:1;margin:0;padding:20px 0;font-size:14px;font-family:inherit;text-decoration:underline}.prototype-button:hover{cursor:pointer}
`,
        Sg = (e, t) => {
            const n = [...e],
                r = new Set([L.VideoVoice, L.RecordedTask]);
            return e.some(i => r.has(i.type)) && n.push({
                name: -2,
                props: {
                    routingOptions: []
                },
                type: L.Uploading
            }), t && n.push({
                name: -1,
                props: {
                    routingOptions: []
                },
                type: L.Thanks
            }), n
        },
        Ig = ({
            mode: e = null,
            viewWindow: t,
            viewDocument: n
        }) => {
            const r = n.documentElement;
            return {
                mode: e,
                sw: t.screen.width,
                sh: t.screen.height,
                cw: r.clientWidth,
                ch: r.clientHeight,
                p: t.location.href,
                l: t.navigator.language
            }
        };

    function kg(e, t = !0) {
        var m;
        const {
            answers: n,
            apiURL: r,
            customStyles: i,
            endCard: o,
            eventEmitFn: a,
            fontFamilyURL: s,
            frame: l,
            previewKey: u,
            viewDocument: c,
            viewWindow: d
        } = e, f = Cn(e.headers) ? e.frame : c.body, p = e.UpChunk || window.UpChunk, v = B, h = Sg(e.cards, !!o);
        qr.configure(v, {
            cards: h,
            hasEndCard: !!o,
            apiURL: r,
            UpChunk: p
        }), Z.setState({
            apiURL: r,
            answers: n,
            border: e.border,
            index: e.startingQuestionIdx || 0,
            cards: h,
            configureExitOnOverlayClick: e.configureExitOnOverlayClick,
            customMetadata: e.customMetadata,
            endCard: e.endCard,
            envId: e.envId,
            eventEmitFn: a,
            fontFamily: e.fontFamily,
            forceBrandedLogo: e.forceBrandedLogo,
            frame: l,
            headers: e.headers,
            hasViewedEmbed: !1,
            isPreview: e.isPreview,
            marketingUrl: "https://sprig.com",
            meta: Ig({
                mode: e.mode,
                viewWindow: d,
                viewDocument: c
            }),
            mode: e.mode,
            previewKey: u,
            recorder: qr,
            recorderEventEmitter: v,
            responseGroupUid: e.responseGroupUid,
            showStripes: e.showStripes,
            showSurveyBrand: e.showSurveyBrand,
            slugName: e.slugName,
            styleNonce: e.styleNonce,
            surveyId: e.surveyId,
            tabTitle: e.tabTitle,
            uploadingCardViewed: !1,
            uploadProgress: {},
            useMobileStyling: e.useMobileStyling,
            useDesktopPrototype: e.useDesktopPrototype,
            userId: e.userId,
            viewDocument: e.viewDocument,
            visitorAttributes: e.visitorAttributes,
            viewedCardCount: e.startingQuestionIdx || 0
        });
        const {
            seen: g
        } = Z.getState();
        g();
        const {
            head: _
        } = c, w = c.createElement("style");
        if (w.id = "sprig-style", w.textContent = Cg, w.nonce = e.styleNonce, _.appendChild(w), e.fontFamily && s && parent) {
            const x = c.createElement("link");
            x.rel = "stylesheet", x.href = s, _.appendChild(x)
        }
        if (e.customStyles && Qa(c, i, e.styleNonce), !p)
            if (e.installationMethod !== ht.Npm) {
                const x = c.createElement("script");
                x.src = "https://cdn.sprig.com/userleap-web-upchunk-v2.2.2.js", x.onload = () => {
                    qr.setUpChunk(d.UpChunk)
                }, x.onerror = () => {
                    console.warn("[Sprig] - recording functionality not configured due to UpChunk library load failure")
                }, _.appendChild(x)
            } else console.warn("[Sprig] - recording functionality not configured due to missing UpChunk dependency");
        const E = "2.26.0",
            b = a || ((m = l.eventEmitter) == null ? void 0 : m.emit);
        b == null || b(ke.VerifyViewVersion, {
            [Rt.ViewVersion]: E
        }), f && t && hn(y(xg, {}), f)
    }
    const Tg = {
            configure: kg
        },
        Lg = "!launch_darkly_";
    class Rg {
        constructor() {
            ue(this, "_ldData", {})
        }
        getAllLaunchDarklyVariations() {
            return this._ldData
        }
        setLDFlagsVariations(t) {
            try {
                return !t || typeof t != "object" || Array.isArray(t) ? !1 : (Object.keys(this._ldData).forEach(n => {
                    delete this._ldData[n]
                }), Object.keys(t).forEach(n => {
                    var r;
                    return this._ldData[`${Lg}${n}`] = ((r = t[n]) != null ? r : 0) + 1
                }), !0)
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("setAllLDFlagsVariations", n), console.warn("[Sprig] An issue had occured when setting LaunchDarkly flags and variations."), !1
            }
        }
    }
    const oa = new Rg;
    Object.freeze(oa);
    const Ag = "!optimizely_experiments_";
    class Ug {
        constructor() {
            ue(this, "_optimizelyData", {})
        }
        setOptimizelyExperiment(t, n = !0) {
            if (!t || typeof t != "object") return !1;
            const {
                experiments: r
            } = t;
            try {
                return n && Object.keys(this._optimizelyData).map(i => {
                    delete this._optimizelyData[i]
                }), r && r.map(i => {
                    const {
                        id: o,
                        variation: a
                    } = i, s = this.transformExperimentId(o);
                    a && typeof a == "string" && (this._optimizelyData[s] = a)
                }), !0
            } catch (i) {
                return i instanceof Error && window.UserLeap.reportError("setOptimizelyExperiment", i), !1
            }
        }
        getAllOptimizelyExperiments() {
            return this._optimizelyData
        }
        getOptimizelyVariationName(t) {
            return this._optimizelyData[this.transformExperimentId(t)]
        }
        transformExperimentId(t) {
            return Ag + t
        }
        getAndSetWebOptimizelyExperiments() {
            var t;
            try {
                if (window && window.optimizely && typeof window.optimizely.get == "function") {
                    const n = (t = window.optimizely.get("state")) == null ? void 0 : t.getExperimentStates({
                        isActive: !0
                    });
                    if (n) {
                        const r = Object.keys(n).map(i => {
                            var o, a;
                            return (o = n[i].variation) != null && o.name ? {
                                id: i,
                                variation: (a = n[i].variation) == null ? void 0 : a.name
                            } : {
                                id: i,
                                variation: "Original"
                            }
                        });
                        return this.setOptimizelyExperiment({
                            experiments: r
                        }, !1), !0
                    }
                    return !1
                }
                return !1
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("getAndSetWebOptimizely", n), !1
            }
        }
    }
    const Xr = new Ug;
    Object.freeze(Xr);
    class Og {
        constructor(t, n) {
            ue(this, "paused");
            ue(this, "queue");
            ue(this, "ul");
            this.ul = t, this.paused = !1, this.queue = [], this.flush(n)
        }
        flush(t) {
            const n = t.length;
            if (n)
                for (let r = 0; r < n; r++) this.push(t[r])
        }
        isPaused() {
            return this.paused
        }
        pause() {
            this.paused = !0
        }
        unpause() {
            this.paused = !1;
            const t = this.queue.slice();
            this.empty(), this.flush(t)
        }
        push(t) {
            if (this.paused) this.queue.push(t);
            else if (t instanceof Function) t();
            else {
                const n = Array.prototype.slice.call(t, 1),
                    r = t[0],
                    i = this.ul[r];
                i instanceof Function ? i.apply(this.ul, n) : r && console.warn("[Sprig] (ERR-100) No valid UserLeap action called", r)
            }
        }
        perform(t) {
            if (this.paused) {
                let n = () => {};
                const r = new Promise(function(i) {
                    n = function() {
                        i(t())
                    }
                });
                return this.queue.push(n), r
            } else return t()
        }
        empty() {
            this.queue.length = 0
        }
    }
    var Be = (e => (e.Ready = "ready", e.NoSurvey = "no survey", e))(Be || {}),
        Sc = (e => (e.Preview = "sprigPreviewKey", e))(Sc || {});
    const Dg = ["popState", "pushState", "replaceState"],
        Pg = {
            test: "test"
        },
        Yn = "!email",
        Ng = ["ios", "android"],
        Gt = "environments",
        aa = "pageUrl",
        zt = "visitors",
        Ic = "ul-view-sdk-script",
        kc = Object.freeze({
            contains: (e, t) => t.includes(e),
            notContains: (e, t) => !t.includes(e),
            exactly: (e, t) => t === e,
            notExactly: (e, t) => t !== e,
            startsWith: (e, t) => t.startsWith(e),
            endsWith: (e, t) => t.endsWith(e),
            regex: (e, t) => new RegExp(e).test(t),
            legacy: (e, t) => new RegExp(e, "i").test(t)
        });

    function sa(e, t) {
        const {
            matchType: n,
            pattern: r
        } = e, i = n ? kc[n] : kc.legacy;
        let o = !1;
        try {
            o = i(r, t)
        } catch (a) {
            const s = `[Sprig] (ERR-445) Failed to check url match with pattern ${r}`;
            a instanceof Error && (console.warn(s, a), a.stack = JSON.stringify(e), window.UserLeap.reportError(s, a))
        }
        return o
    }

    function Mg(e, t) {
        const {
            pageUrlEvents: n,
            interactiveEvents: r,
            dismissOnPageChange: i
        } = window.UserLeap._config;
        if (!i) return !0;
        const o = [];
        n && n.length && o.push(...n), r && r.length && o.push(...r);
        const a = e && o.find(s => s.id === e);
        return a ? sa(a, window.location.href) : t === window.location.href
    }

    function Qn(e) {
        const {
            pageUrlEvents: t,
            interactiveEvents: n,
            dismissOnPageChange: r,
            platform: i
        } = window.UserLeap._config;
        if (i && i !== At.Web) return;
        const o = Wt("trackStartUrl"),
            a = o ? String(o) : null;
        t && Ac(window.location.href), n && (Lc(), Vg()), r && a && a !== window.location.href && e && Dg.includes(e.type) && window.UserLeap("dismissActiveSurvey", Ze.PageChange)
    }
    const Tc = {
            capture: !0
        },
        Vg = () => {
            const t = window.UserLeap._config.interactiveEvents.filter(r => sa(r, window.location.href)).map(r => {
                    const {
                        name: i,
                        properties: o
                    } = r, {
                        selector: a,
                        innerText: s
                    } = o;
                    return a ? l => {
                        if (Ya(l.target)) try {
                            l.target.closest(a) && window.UserLeap("track", i)
                        } catch {}
                        return !1
                    } : l => (Ya(l.target) && l.target.innerText === s && window.UserLeap("track", i), !1)
                }),
                n = r => t.forEach(i => i(r));
            window.UserLeap._config.interactiveEventsHandler = n, window.addEventListener("click", n, Tc)
        },
        Lc = () => {
            window.UserLeap._config.interactiveEventsHandler && window.removeEventListener("click", window.UserLeap._config.interactiveEventsHandler, Tc), delete window.UserLeap._config.interactiveEventsHandler
        };

    function jg() {
        ["hashchange", "popstate"].forEach(e => window.addEventListener(e, Qn, !0))
    }

    function Bg() {
        ["hashchange", "popstate"].forEach(e => window.removeEventListener(e, Qn, !0)), window.UserLeap._config.interactiveEvents && Lc()
    }

    function ft(e, t, n) {
        const r = [window.UserLeap._API_URL, "sdk", e];
        return t && t.forEach(i => {
            r.push(i), i === Gt ? r.push(window.UserLeap.envId) : i === zt && r.push(la())
        }), n && r.push(n), r.join("/")
    }

    function Fg(e, t) {
        let n = ft("1", [Gt], "questions?");
        return e != null && (n += `&vid=${e}`), t && (t.surveyId && (n += `&surveyid=${t.surveyId}`), t.surveyTemplateId && (n += `&surveytemplateid=${t.surveyTemplateId}`), t.previewLanguage && (n += `&previewLanguage=${encodeURIComponent(t.previewLanguage)}`)), n
    }

    function Wt(e) {
        const t = we.getItem(_e.Credentials);
        if (t) try {
            const r = JSON.parse(t)[window.UserLeap.envId];
            return r && r[e] || null
        } catch (n) {
            n instanceof Error && (n.stack = t, window.UserLeap.reportError("Failed to parse local storage credentials", n)), console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", n)
        }
        return null
    }

    function Ce(e, t) {
        const n = we.getItem(_e.Credentials);
        let r = {};
        if (n) try {
            r = JSON.parse(n)
        } catch (o) {
            o instanceof Error && (o.stack = n, window.UserLeap.reportError("Failed to parse local storage credentials", o)), console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", o)
        }
        let i = r[window.UserLeap.envId];
        i ? i[e] = t : i = {
            [e]: t
        }, r[window.UserLeap.envId] = i;
        try {
            we.setItem(_e.Credentials, JSON.stringify(r))
        } catch (o) {
            o instanceof Error && console.warn(`[Sprig] (ERR-426) Unable to write to Local Storage:: ${o.message}`)
        }
    }

    function Rc() {
        window.previewMode || (window.UserLeap.visitorId = Qe(), Ce("vid", window.UserLeap.visitorId), B.emit(j.VisitorIDUpdated, {
            visitorId: window.UserLeap.visitorId
        }))
    }

    function la() {
        return window.previewMode ? "0" : window.UserLeap.visitorId || ""
    }

    function Ac(e, t, n) {
        if (e.endsWith("mock_snippet.html")) return;
        const r = window.UserLeap._config.pageUrlEvents;
        let i = !1;
        if (r && r.length)
            for (let c = 0; c < r.length && (i = sa(r[c], e), !i); c++);
        if (!i) return;
        window.UserLeap.debugMode && console.info("[DEBUG] Sprig trackPageView", e);
        const o = 10,
            a = 1;
        let s = [];
        const l = {
                viewedAt: Date.now(),
                location: e
            },
            u = we.getItem(_e.PageViews);
        try {
            if (s = u ? JSON.parse(u) : [], Array.isArray(s) || (s = []), s.length > 0) {
                const c = s[s.length - 1],
                    d = (Date.now() - c.viewedAt) / 1e3;
                c.location != e && d > a && pl({
                    url: e,
                    referrer: document.referrer,
                    description: document.title
                }), (c.location != e && d > a || d > o) && (window.UserLeap._queue.push(["track", aa, t, {
                    url: e
                }, n]), s.push(l))
            } else window.UserLeap._queue.push(["track", aa, t, {
                url: e
            }, n]), s.push(l), pl({
                url: e
            });
            s.length > 5 && s.splice(0, s.length - 5), we.setItem(_e.PageViews, JSON.stringify(s))
        } catch (c) {
            c instanceof Error && window.UserLeap.reportError("trackPageView", c, {
                pageViewsStorage: u
            }), console.warn("[Sprig] (ERR-425) Failed to update page views in local storage")
        }
    }

    function Hg() {
        const e = "Backbone" in window && window.Backbone && window.Backbone.history ? window.Backbone.history : window.history;
        "pushState" in e && (e.pushState = (t => function(...r) {
            const i = t.apply(this, r),
                o = new Event("pushState");
            return window.dispatchEvent(o), Qn(o), i
        })(e.pushState)), "replaceState" in e && (e.replaceState = (t => function(...r) {
            const i = t.apply(this, r),
                o = new Event("replaceState");
            return window.dispatchEvent(o), Qn(o), i
        })(e.replaceState)), jg()
    }
    async function ua(e, t) {
        const n = la();
        e && !t && (window.UserLeap._config.mode = Pg.test);
        const r = await It(Fg(n, { ...e,
            previewLanguage: window.UserLeap._config.previewLanguage
        }), {}, 0, !0);
        return r.ok ? (r.json.delay && await lr(r.json.delay), Uc(r.json)) : (r.reportError && r.error && (console.warn("[Sprig] (ERR-414) Failed to request questions from the server", r.error), window.UserLeap.reportError("getQuestions", r.error)), {
            success: !1,
            surveyState: Be.NoSurvey
        })
    }
    const Uc = async e => {
        var T, D, W;
        const {
            context: t,
            forceBrandedLogo: n,
            endCard: r,
            locale: i,
            productConfig: o,
            questions: a,
            responseGroupUid: s,
            surveyId: l,
            uuid: u,
            vid: c,
            sessionReplay: d
        } = e, f = en(window.UserLeap), p = ca(f), v = $g(f);
        if (d)
            if (p) {
                const S = {
                    mediaRecordingUid: Qe(),
                    mediaType: Te.Screen,
                    questionId: 1,
                    responseGroupUid: s,
                    surveyId: l,
                    updatedAt: new Date().toISOString(),
                    visitorId: window.UserLeap.visitorId,
                    isReplay: !0
                };
                B.emit(j.ReplayCapture, {
                    responseGroupUid: s,
                    hasQuestions: !!(a != null && a.length),
                    surveyId: l,
                    uploadId: d.uploadId,
                    replayType: (T = d.replayDurationType) != null ? T : jt.Before,
                    seconds: d.replayDurationSeconds,
                    generateVideoUploadUrlPayload: S
                })
            } else dl({
                responseGroupId: s,
                surveyId: l,
                visitorId: c,
                replayParams: d,
                completeUploadHeaders: f,
                apiUrl: window.UserLeap._API_URL,
                triggerTimestamp: Date.now(),
                isStandalone: a.length === 0
            });
        if (c == null || !a || !a.length) return {
            success: !1,
            message: "[Sprig] no survey found",
            surveyState: Be.NoSurvey
        };
        if (window.UserLeap.container) {
            const S = "[Sprig] (ERR-409) Found an existing Survey container, aborting rendering of this survey";
            return console.warn(S), {
                success: !1,
                message: S,
                surveyState: Be.NoSurvey
            }
        }
        if (c !== window.UserLeap.visitorId && u !== window.UserLeap.visitorId && !window.previewMode) {
            const S = "Attempted to display survey to a different visitor";
            return window.UserLeap.reportError("DisplaySurvey", new Error(S)), {
                success: !1,
                message: S,
                surveyState: Be.NoSurvey
            }
        }
        av({
            id: l
        }), Ci.disable(), B.emit(j.SurveyWillPresent, {
            name: j.SurveyWillPresent,
            [En.SurveyId]: l
        });
        let h, g = document.createElement("div"),
            _, w, E;
        const b = S => {
            const {
                [Rt.ViewVersion]: X
            } = S;
            X !== f["x-ul-sdk-version"] && ju(), B.removeListener(ke.VerifyViewVersion, b)
        };
        B.on(ke.VerifyViewVersion, b), Cn(f) ? (h = "ul-direct-embeded-frame", _ = document.head, w = window, E = !1, p && (Vu(), g.id = h, window.UserLeap.container.appendChild(g), Bu(), B.emit(j.SurveyLifeCycle, {
            state: "presented"
        }), B.emit(j.SurveyPresented, {
            name: j.SurveyPresented,
            [En.SurveyId]: l
        }))) : {
            frameId: h,
            contentWinDocHead: _,
            contentWindow: w,
            hasOverlay: E,
            iframe: g
        } = vm(o, v, l), window.UserLeap.frameId = h, window.UserLeap.useMobileStyling = v;
        const m = S => {
                B.on(j.CloseSurveyOnOverlayClick, S)
            },
            x = Object.assign({
                frame: g,
                envId: window.UserLeap.envId,
                surveyId: l,
                userId: u,
                visitorAttributes: {
                    externalUserId: window.UserLeap.userId,
                    email: window.UserLeap.email
                },
                cards: a,
                context: t,
                locale: i,
                fontFamily: window.UserLeap.fontFamily,
                fontFamilyURL: window.UserLeap.fontFamilyURL,
                apiURL: window.UserLeap._API_URL,
                responseGroupUid: s,
                headers: f,
                endCard: r,
                useMobileStyling: v,
                mobileSDKVersion: window.UserLeap.mobileSDKVersion,
                configureExitOnOverlayClick: m,
                eventEmitFn: B.emit.bind(B),
                ulEvents: Ga,
                viewDocument: w == null ? void 0 : w.document,
                viewWindow: w,
                tabTitle: document.title,
                startingQuestionIdx: (D = window.UserLeap.config) == null ? void 0 : D.startingQuestionIdx,
                styleNonce: window.UserLeap.styleNonce,
                previewKey: we.getItem(_e.Preview),
                forceBrandedLogo: n
            }, window.UserLeap._config);
        (W = window.UserLeap.config) != null && W.startingQuestionIdx && (window.UserLeap.config = { ...window.UserLeap.config,
            startingQuestionIdx: null
        }), window.UserLeap.customStyles && (x.customStyles = window.UserLeap.customStyles), w && (w.__cfg = x);

        function k() {
            const S = document.createElement("script");
            return window.UserLeap.nonce && S.setAttribute("nonce", window.UserLeap.nonce), S.id = Ic, S
        }
        const C = window.UserLeap.viewSDKURL ? window.UserLeap.viewSDKURL : x.path,
            I = document.getElementById(Ic);
        I && I.remove();
        const R = k(),
            O = () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    display: "flex"
                })
            };
        return x.installationMethod === ht.Npm || x.installationMethod === ht.NpmBundled ? (Tg.configure(x), E && window.UserLeap.container && O()) : C && (R.src = C, E && R.addEventListener("load", () => {
            window.UserLeap.container && O()
        }), w == null || w.addEventListener("error", S => {
            S.target instanceof HTMLScriptElement && S.target.src === C && window.UserLeap.reportError("loadFrameScript", new Error("Frame script failed to load"))
        }, {
            capture: !0,
            once: !0
        })), _ == null || _.appendChild(R), {
            success: !0,
            surveyState: Be.Ready,
            surveyId: l,
            responseGroupUid: s
        }
    };

    function $g(e) {
        if (window.UserLeap.useMobileStyling !== void 0) return window.UserLeap.useMobileStyling;
        const t = window.UserLeap.windowDimensions && window.UserLeap.windowDimensions.width || document.body.clientWidth;
        return ca(e) || t > 10 && t < Pf
    }

    function ca(e) {
        return Ng.includes(e[$e.Platform])
    }

    function Kg(e) {
        let t = e.length;
        for (; t;) {
            const n = Math.floor(Math.random() * t);
            t -= 1;
            const r = e[t];
            e[t] = e[n], e[n] = r
        }
    }

    function qg(e) {
        if (!e) return;
        window.UserLeap._config = e, e.mute && window.UserLeap._queue.pause();
        const {
            interactiveEvents: t,
            pageUrlEvents: n,
            dismissOnPageChange: r
        } = e;
        t && Kg(t), (t || n || r) && (Hg(), Qn())
    }
    async function It(e, t, n = 0, r = !1) {
        var o, a;
        t.headers = Object.assign(en(window.UserLeap), t.headers);
        const i = await Xe(e, t, n, r);
        if (i.ok) {
            const s = (o = i.headers) == null ? void 0 : o.get("Authorization"),
                l = s ? s.split(" ") : void 0,
                u = l && l.length === 2 ? l[1] : void 0,
                c = (a = i.headers) == null ? void 0 : a.get($e.VisitorID);
            u && c && (c !== window.UserLeap.visitorId || window.UserLeap.token !== u) && (Ce("token", u), Ce("vid", c), B.emit(j.VisitorIDUpdated, {
                visitorId: c
            }), window.UserLeap.token = u, window.UserLeap.visitorId = c)
        }
        return i.json && i.json.logMessage && console.warn(`[Sprig] ${i.json.logMessage}`), i
    }
    async function Gg(e, t) {
        var r, i;
        let n = !0;
        return t && ((r = e == null ? void 0 : e.json) == null ? void 0 : r.surveyId) && (window.UserLeap.delayingSurvey = !0, n = await t(e.json.surveyId), window.UserLeap.delayingSurvey = !1, !n) ? !1 : ((i = e == null ? void 0 : e.json) != null && i.delay && (window.UserLeap.delayingSurvey = !0, await lr(e.json.delay), window.UserLeap.delayingSurvey = !1), n)
    }
    const zg = function(e) {
        if (!window.UserLeap) return;
        const t = async (r = {}) => {
                var h, g, _, w, E;
                const {
                    userId: i,
                    anonymousId: o,
                    metadata: a = {},
                    properties: s,
                    showSurveyCallback: l
                } = r;
                let {
                    eventName: u
                } = r;
                if (window.UserLeap.debugMode && u !== aa && console.info("[DEBUG] Sprig track", r), e.mode === "test") return;
                const c = (h = we.getItem(_e.Preview)) != null ? h : void 0;
                if (e.requireUserIdForTracking && !window.UserLeap.userId && !i) {
                    const b = "[Sprig] - Skipping tracking without userId";
                    return console.warn(b), {
                        success: !1,
                        message: b,
                        surveyState: Be.NoSurvey
                    }
                }
                if (!u || u.trim().length === 0) {
                    u = u ? String(u) : "";
                    const b = "[Sprig] - Invalid event name " + u;
                    return console.warn(b), {
                        success: !1,
                        message: b,
                        surveyState: Be.NoSurvey
                    }
                }
                const d = window.location.href;
                if (a.url || (a.url = d), Ce("trackStartUrl", d), (_ = (g = window.UserLeap) == null ? void 0 : g._config) != null && _.optimizelyEnabled) {
                    const b = en(window.UserLeap);
                    ca(b) || Xr.getAndSetWebOptimizelyExperiments(), a.optimizelyExperiments = Object.assign({}, Xr.getAllOptimizelyExperiments())
                }(E = (w = window.UserLeap) == null ? void 0 : w._config) != null && E.launchDarklyEnabled && (a.launchDarklyFlags = oa.getAllLaunchDarklyVariations()), i && (window.UserLeap.userId = i), o && (window.UserLeap.partnerAnonymousId = o), s && (a.eventProperties = s), ov({
                    name: u,
                    url: a.url
                });
                const f = window.UserLeap.delayingSurvey ? await It(ft("1", [zt], "events/batch"), {
                    body: JSON.stringify({
                        events: [{
                            event: u,
                            metadata: a
                        }],
                        previewKey: c
                    }),
                    method: "POST"
                }, 0, !0) : await It(ft("1", [zt], "events"), {
                    body: JSON.stringify({
                        event: u,
                        metadata: a,
                        previewKey: c
                    }),
                    method: "POST"
                }, 0, !0);
                if (!f.ok) {
                    const b = "[Sprig] (ERR-421) Failed to track event";
                    return f.reportError && (console.warn(b, f.error), f.error && window.UserLeap.reportError("track", f.error)), {
                        success: !1,
                        message: b,
                        error: f.error,
                        surveyState: Be.NoSurvey
                    }
                }
                i && Ce("uid", i), o && Ce("aid", o);
                const p = f.json;
                return p.invalidPreviewKey && we.removeItem(_e.Preview), await Gg(f, l) ? Mg(p.eventId, d) ? Uc(p) : {
                    success: !1,
                    message: "Study should not be displayed after page navigation",
                    surveyState: Be.NoSurvey
                } : {
                    success: !1,
                    message: "[Sprig] Callback returned false, aborting rendering of survey",
                    surveyState: Be.NoSurvey
                }
            },
            n = {
                async displaySurvey(r) {
                    return console.warn("[Sprig] displaySurvey should only be used to debug your studies; not intended for production usage."), window.UserLeap("dismissActiveSurvey", Ze.Override), ua({
                        surveyId: r
                    }, !0)
                },
                _previewSurvey(r) {
                    window.UserLeap("dismissActiveSurvey", Ze.Override), ua({
                        surveyTemplateId: r
                    }, !1)
                },
                _reviewSurvey(r) {
                    window.UserLeap("dismissActiveSurvey", Ze.Override), ua({
                        surveyId: r
                    }, !1)
                },
                previewSurvey(r) {
                    n._previewSurvey(r)
                },
                reviewSurvey(r) {
                    n._reviewSurvey(r)
                },
                mute() {
                    window.UserLeap._queue.pause()
                },
                unmute() {
                    window.UserLeap._queue.unpause()
                },
                setVisitorToken() {
                    console.warn("[Sprig] setVisitorToken is deprecated.")
                },
                dismissActiveSurvey(r = Ze.API) {
                    B.emit(j.SurveyWillClose, {
                        name: j.SurveyWillClose,
                        initiator: r
                    })
                },
                async setAttribute(r, i) {
                    if (!r || !i && i !== 0) {
                        const o = "[Sprig] - Disregarding empty attribute / value provided";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    return this.setAttributes({
                        [r]: i
                    })
                },
                async setAttributes(r) {
                    if (r == null || Object.keys(r).length === 0) {
                        const i = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(i), {
                            success: !1,
                            message: i
                        }
                    }
                    return this.identifyAndSetAttributes({
                        attributes: r
                    })
                },
                async identifyAndSetAttributes(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig identifyAndSetAttributes", r), e.mode === "test") return;
                    if (r === null || typeof r != "object" || !(r.userId || r.anonymousId || r.attributes)) {
                        const u = "[Sprig] - Disregarding empty payload provided";
                        return console.warn(u), {
                            success: !1,
                            message: u
                        }
                    }
                    const {
                        userId: i,
                        anonymousId: o,
                        attributes: a
                    } = r;
                    if (e.requireUserIdForTracking && !window.UserLeap.userId && !i) {
                        const u = "[Sprig] - Skipping tracking without userId";
                        return console.warn(u), {
                            success: !1,
                            message: u
                        }
                    }
                    if (!a && (!i || window.UserLeap.userId === i) && (!o || window.UserLeap.partnerAnonymousId === o)) return {
                        success: !0
                    };
                    const s = {};
                    i && (s.userId = window.UserLeap.userId = i), o && (s.partnerAnonymousId = window.UserLeap.partnerAnonymousId = o);
                    let l;
                    return a ? (a.email && !Object.prototype.hasOwnProperty.call(a, Yn) && (a[Yn] = a.email, delete a.email), l = await It(ft("1", [Gt, zt], "attributes"), {
                        body: JSON.stringify(a),
                        method: "PUT"
                    }), !l.ok && l.reportError && (console.warn("[Sprig] (ERR-432) identifyAndSetAttributes failed", l.error), l.error && window.UserLeap.reportError("identifyAndSetAttributes", l.error))) : l = await It(ft("1", [Gt, zt]), {
                        body: JSON.stringify(s),
                        method: "PUT"
                    }), a && a[Yn] && (window.UserLeap.email = a[Yn]), l.ok && (i && Ce("uid", i), o && Ce("aid", o)), {
                        success: !!l.ok
                    }
                },
                async removeAttributes(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig removeAttributes", r), e.mode === "test") return;
                    if (r == null || r.length === 0) {
                        const o = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    if (e.requireUserIdForTracking && !window.UserLeap.userId) {
                        const o = "[Sprig] - Skipping tracking without userId";
                        return console.warn(o), {
                            success: !1,
                            message: o
                        }
                    }
                    const i = await It(ft("1", [Gt, zt], "attributes"), {
                        body: JSON.stringify({
                            delete: r
                        }),
                        method: "DELETE"
                    });
                    return !i.ok && i.reportError && (console.warn("[Sprig] (ERR-433) Remove attributes failed", i.error), i.error && window.UserLeap.reportError("removeAttributes", i.error)), {
                        success: !!i.ok
                    }
                },
                async addSurveyListener(r) {
                    B.on(j.SurveyLifeCycle, r)
                },
                async removeSurveyListener(r) {
                    B.removeListener(j.SurveyLifeCycle, r)
                },
                async addListener(r, i) {
                    B.on(r, i)
                },
                async removeListener(r, i) {
                    B.removeListener(r, i)
                },
                async removeAllListeners() {
                    B.removeAllListeners()
                },
                setPreviewKey(r) {
                    !r || typeof r != "string" || we.isStorageAvailable && r && we.setItem(_e.Preview, r)
                },
                async setUserId(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setUserId", r), r == null) {
                        const a = `[Sprig] - Invalid userId ${r}`;
                        return console.warn(a), {
                            success: !1,
                            message: a
                        }
                    }
                    if (e.mode === "test" || r === window.UserLeap.userId) return;
                    window.UserLeap.userId = r;
                    const i = window.UserLeap.visitorId,
                        o = await It(ft("1", [Gt, zt]), {
                            body: JSON.stringify({
                                userId: r
                            }),
                            method: "PUT"
                        });
                    if (!o.ok) {
                        o.reportError && (console.warn("[Sprig] (ERR-420) Failed to set user id", o.error), o.error && window.UserLeap.reportError("setUserId", o.error));
                        return
                    }
                    i !== window.UserLeap.visitorId && fl(), Ce("uid", r)
                },
                async setPartnerAnonymousId(r) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setPartnerAnonymousId", r), r == null) {
                        const i = `[Sprig] - Invalid partnerAnonymousId ${r}`;
                        return console.warn(i), {
                            success: !1,
                            message: i
                        }
                    }
                    return window.UserLeap.partnerAnonymousId = r, Ce("aid", r), {
                        success: !0
                    }
                },
                async track(r, i, o = {}, a = void 0) {
                    return t({
                        eventName: r,
                        properties: i,
                        metadata: o,
                        showSurveyCallback: a
                    })
                },
                async identifyAndTrack(r) {
                    return await t(r)
                },
                trackPageView(r, i = void 0, o = void 0) {
                    Ac(r, i, o)
                },
                applyStyles(r) {
                    if (window.UserLeap.customStyles = r, window.UserLeap.container) {
                        const i = window.UserLeap.container.children[0].contentDocument;
                        if (i) {
                            const o = i.getElementById(U.CustomStyle);
                            o ? o.textContent = r : Qa(i, r, window.UserLeap.styleNonce)
                        }
                    }
                },
                setWindowDimensions(r, i) {
                    var l, u;
                    const o = typeof r == "string" ? parseInt(r, 10) : r,
                        a = typeof i == "string" ? parseInt(i, 10) : i;
                    if (!isNaN(o) && !isNaN(a) && (window.UserLeap.windowDimensions = {
                            width: o,
                            height: a
                        }), !window.UserLeap.frameId) return;
                    const s = document.getElementById(window.UserLeap.frameId);
                    !s || (window.UserLeap.useMobileStyling && ((l = window.UserLeap.windowDimensions) != null && l.width && (s.style.width = `${window.UserLeap.windowDimensions.width}px`), (u = window.UserLeap.windowDimensions) != null && u.height && (s.style.maxHeight = `${window.UserLeap.windowDimensions.height-20}px`), s.contentDocument && (s.style.height = String(Xa(s.contentDocument)[0]) + "px")), B.emit(j.SurveyDimensions, {
                        name: j.SurveyDimensions,
                        contentFrameWidth: s.clientWidth,
                        contentFrameHeight: s.clientHeight
                    }))
                },
                logoutUser() {
                    window.UserLeap.debugMode && console.info("[DEBUG] Sprig logout"), window.UserLeap.visitorId = null, window.UserLeap.userId = null, window.UserLeap.partnerAnonymousId = null, window.UserLeap.token = null, window.UserLeap.email = null, we.removeItem(_e.Credentials), we.removeItem(_e.PageViews), window.UserLeap._queue.isPaused() && window.UserLeap._queue.empty(), Rc(), fl(), window.UserLeap._queue.unpause()
                },
                teardown() {
                    Bg(), window.UserLeap("dismissActiveSurvey", Ze.API), delete window.UserLeap, delete window.Sprig, delete window._Sprig
                },
                integrateOptimizely(r, i = !0) {
                    var o, a;
                    if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                        console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                        return
                    }
                    try {
                        const s = typeof r == "string" ? JSON.parse(r) : r;
                        Xr.setOptimizelyExperiment(s, i)
                    } catch (s) {
                        console.warn("[Sprig] Error with integrating Optimizely data"), s instanceof Error && window.UserLeap.reportError("integrateOptimizely", s)
                    }
                },
                integrateOptimizelyClient(r) {
                    var o, a;
                    if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                        console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                        return
                    }
                    const i = ({
                        experiment: s,
                        variation: l
                    }) => {
                        const u = {
                            experiments: [{
                                id: s.id,
                                variation: l.key
                            }]
                        };
                        window.UserLeap("integrateOptimizely", u, !1)
                    };
                    r.notificationCenter.addNotificationListener(Rf.NOTIFICATION_TYPES.ACTIVATE, i)
                },
                importLaunchDarklyData(r) {
                    var i, o;
                    if (!((o = (i = window.UserLeap) == null ? void 0 : i._config) != null && o.launchDarklyEnabled)) {
                        console.warn("[SPRIG] LaunchDarkly integration is currently not enabled for your product.");
                        return
                    }
                    oa.setLDFlagsVariations(r)
                },
                setVisitorAttribute(r, i) {
                    return console.warn("[Sprig] setVisitorAttribute is deprecated. Please use setAttribute"), n.setAttribute(r, i)
                },
                async setEmail(r) {
                    return n.setAttribute(Yn, r)
                },
                async setVisitorEmail(r) {
                    return console.warn("[Sprig] setVisitorEmail is deprecated. Please use setEmail"), n.setEmail(r)
                },
                async _generateVideoUploadUrl(r) {
                    return Zg(r)
                },
                async _completeSessionReplay({
                    surveyId: r,
                    responseGroupUuid: i,
                    eventDigest: o
                }) {
                    if (!r || !i) return;
                    const a = window.UserLeap._API_URL;
                    try {
                        await ls({
                            surveyId: r,
                            responseGroupUuid: i,
                            eventDigest: o,
                            apiUrl: a,
                            headers: en(window.UserLeap)
                        }, !0)
                    } catch (s) {
                        console.warn("[Sprig] Error with completing session replay"), s instanceof Error && window.UserLeap.reportError("completeSessionReplay", s)
                    }
                }
            };
        Object.assign(window.UserLeap, n)
    };
    async function Wg(e) {
        const t = en(window.UserLeap);
        document.addEventListener("securitypolicyviolation", Si);
        const n = await Xe(ft("1", [Gt], "config"), {
                headers: t
            }),
            r = "TypeError";
        if (window.UserLeap.error = n.error, !n.ok && n.error && n.error.name === r ? (window.UserLeap._API_URL = "https://api.sprig.com", window.UserLeap.reportError("sprigDomainRequest", n.error)) : document.removeEventListener("securitypolicyviolation", Si), !n.ok) return n.reportError && (console.warn("[Sprig] (ERR-422) Failed to load configuration", n.error), n.error && window.UserLeap.reportError("applyRemoteConfig", n.error)), Ii("Disabled: failed to fetch configuration"), e;
        const i = n.json;
        return i != null && i.disabled ? (Ii(`Disabled: ${i.disabled}`), {
            disabled: i.disabled
        }) : Object.assign({}, i, e)
    }
    const Yg = e => typeof e == "object" && e && "inner" in e && !!e.inner && typeof e.inner == "object";
    async function Qg(e, t, n = {}) {
        var d, f;
        const r = window.__cfg && window.__cfg.mode,
            i = la(),
            o = window.UserLeap.envId,
            a = window.document.documentElement,
            s = Yg(t) ? {
                inner: {
                    message: (d = t.inner) == null ? void 0 : d.message,
                    stack: (f = t.inner) == null ? void 0 : f.stack
                }
            } : {},
            l = {
                mode: r,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: a.clientWidth,
                clientHeight: a.clientHeight,
                location: window.location.href,
                language: window.navigator.language,
                ...n,
                ...s
            },
            u = {
                action: e,
                err: {
                    message: t.message,
                    stack: t.stack
                },
                meta: l,
                vid: i,
                envId: o
            };
        (await It(ft("1", null, "errors"), {
            method: "POST",
            headers: {
                [$e.Error]: window.btoa(`userleap-${Date.now()}-error`)
            },
            body: JSON.stringify(u)
        }, 0, !0)).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", t)
    }
    async function Zg(e) {
        var n;
        if (!e) return;
        const t = `${window.UserLeap._API_URL}/2/environments/integrations/upload`;
        try {
            const r = await fetch(t, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            });
            if (r.ok) {
                const i = await r.json();
                return (n = i == null ? void 0 : i.upload) == null ? void 0 : n.url
            } else return null
        } catch (r) {
            console.warn("[Sprig] Error with generating video upload url"), r instanceof Error && window.UserLeap.reportError("generateVideoUploadUrl", r)
        }
    }

    function Xg(e = {}) {
        var r;
        const t = (r = new URLSearchParams(window.location.search).get(Sc.Preview)) != null ? r : "";
        window.UserLeap.UPDATES = Ga, window.UserLeap("setPreviewKey", t);
        async function n() {
            if (window.UserLeap.loaded) return;
            if (window.UserLeap.reportError = Qg, window.UserLeap.loaded = !0, window.UserLeap._config = Object.assign({}, e, window.UserLeap.config), window.UserLeap.delayingSurvey = !1, window.UserLeap._config && typeof window.UserLeap._config == "object")
                for (const l in window.UserLeap._config) window.UserLeap[l] = window.UserLeap._config[l];
            if (!window.UserLeap.envId)
                if (window.UserLeap.appId) window.UserLeap.envId = window.UserLeap.appId;
                else throw new Error("Missing Environment id");
            window.UserLeap.debugMode && console.info("[DEBUG] Sprig debug mode enabled");
            const i = window.UserLeap.sampleRate;
            if (i) {
                let l = Wt("sampled");
                if (l === null && (l = Math.random() < i, Ce("sampled", l)), !l) return
            } else Wt("sampled") !== null && Ce("sampled", null);
            window.UserLeap._API_URL || (window.UserLeap._API_URL = "https://api.sprig.com");
            const o = [...window.UserLeap._queue];
            window.UserLeap._queue = new Og(window.UserLeap, []), window.UserLeap._queue.pause();
            for (let l = 0; l < o.length; l++) window.UserLeap._queue.push(o[l]);
            const a = Wt("token");
            a ? (window.UserLeap.token = a, window.UserLeap.visitorId = Wt("vid"), window.UserLeap.userId = Wt("uid"), window.UserLeap.partnerAnonymousId = Wt("aid")) : (we.removeItem(_e.Credentials), Rc());
            const s = await Wg(e);
            Gh(window.document, s.maxReplayDurationSeconds, window.UserLeap.replayNonce, window.UserLeap.maxInflightReplayRequests, s.replaySettings).then(() => {
                bv()
            }), zg(s), await qg(s), window.UserLeap._queue.unpause(), B.emit(j.SDKReady, {
                maxMobileReplayDurationSeconds: s.maxMobileReplayDurationSeconds,
                mobileReplaySettings: s.mobileReplaySettings
            }), B.emit(j.VisitorIDUpdated, {
                visitorId: window.UserLeap.visitorId
            })
        }
        document.readyState === "complete" ? n() : window.attachEvent ? window.attachEvent("onload", n) : window.addEventListener("load", () => {
            n()
        }, !1)
    }
    const Jg = "sprig-web-view-sdk";
    let Oc;
    Oc = {
        path: `https://cdn.sprig.com/${Jg}-v2.26.0.js`
    }, Xg(Oc)
})();
//# sourceMappingURL=shim.js.map