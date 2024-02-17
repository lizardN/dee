'use strict';
var r, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function u(a) {
    return ea(a())
}

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v = this || self;

function ha(a, b) {
    var c = x("CLOSURE_FLAGS");
    a = c && c[a];
    return null != a ? a : b
}

function x(a, b) {
    a = a.split(".");
    b = b || v;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function y(a, b) {
    a = a.split(".");
    var c = v;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ya = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.bc = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function na(a) {
    return a
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(oa, Error);
oa.prototype.name = "CustomError";

function pa() {};

function qa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ra(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function sa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ta(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ua(a) {
    for (const b in a) return !1;
    return !0
}

function va(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = va(a[c]);
    return b
}
const wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function xa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < wa.length; f++) c = wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var ya;

function za(a, b) {
    this.h = a === Aa && b || ""
}
za.prototype.toString = function() {
    return this.h
};

function Ba(a) {
    return new za(Aa, a)
}
var Aa = {};
Ba("");
var Ca = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    },
    Da = {};
var Ea = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Fa = ha(610401301, !1),
    Ga = ha(572417392, !0);

function Ha() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ia;
const Ja = v.navigator;
Ia = Ja ? Ja.userAgentData || null : null;

function Ka(a) {
    return Fa ? Ia ? Ia.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function z(a) {
    return -1 != Ha().indexOf(a)
};

function La() {
    return Fa ? !!Ia && 0 < Ia.brands.length : !1
}

function Ma() {
    return La() ? Ka("Chromium") : (z("Chrome") || z("CriOS")) && !(La() ? 0 : z("Edge")) || z("Silk")
};
var Na = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Oa(a) {
    return a ? decodeURI(a) : a
}

function Pa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Pa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Qa(a) {
    var b = [],
        c;
    for (c in a) Pa(c, a[c], b);
    return b.join("&")
};

function Ra() {
    this.l = this.l;
    this.i = this.i
}
Ra.prototype.l = !1;
Ra.prototype.dispose = function() {
    this.l || (this.l = !0, this.O())
};
Ra.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? void 0 !== b ? a.call(b) : a() : (this.i || (this.i = []), this.i.push(void 0 !== b ? la(a, b) : a))
};
Ra.prototype.O = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};

function Sa(a) {
    var b = x("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || v.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Ta(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ua[c]) c = Ua[c];
                else {
                    c = String(c);
                    if (!Ua[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ua[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ua[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Ta(a, b) {
    b || (b = {});
    b[Va(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Va(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Ta(a, b));
    return c
}

function Va(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Ua = {};
var Wa = La() ? !1 : z("Trident") || z("MSIE");

function Xa(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Ya {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Za(a) {
    v.setTimeout(() => {
        throw a;
    }, 0)
};
class $a {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = ab.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var ab = new Ya(() => new bb, a => a.reset());
class bb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let cb, db = !1,
    eb = new $a,
    gb = (a, b) => {
        cb || fb();
        db || (cb(), db = !0);
        eb.add(a, b)
    },
    fb = () => {
        const a = v.Promise.resolve(void 0);
        cb = () => {
            a.then(hb)
        }
    };
var hb = () => {
    let a;
    for (; a = eb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Za(b)
        }
        Xa(ab, a)
    }
    db = !1
};

function ib(a) {
    this.h = 0;
    this.A = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != pa) try {
        var b = this;
        a.call(void 0, function(c) {
            jb(b, 2, c)
        }, function(c) {
            jb(b, 3, c)
        })
    } catch (c) {
        jb(this, 3, c)
    }
}

function kb() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
kb.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var lb = new Ya(function() {
    return new kb
}, function(a) {
    a.reset()
});

function mb(a, b, c) {
    var d = lb.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function nb(a) {
    if (a instanceof ib) return a;
    var b = new ib(pa);
    jb(b, 2, a);
    return b
}
ib.prototype.then = function(a, b, c) {
    return ob(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
ib.prototype.$goog_Thenable = !0;
r = ib.prototype;
r.bb = function(a, b) {
    return ob(this, null, a, b)
};
r.catch = ib.prototype.bb;
r.cancel = function(a) {
    if (0 == this.h) {
        var b = new pb(a);
        gb(function() {
            qb(this, b)
        }, this)
    }
};

function qb(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? qb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : rb(c), sb(c, e, 3, b)))
            }
            a.j = null
        } else jb(a, 3, b)
}

function tb(a, b) {
    a.i || 2 != a.h && 3 != a.h || ub(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function ob(a, b, c, d) {
    var e = mb(null, null, null);
    e.h = new ib(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof pb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    tb(a, e);
    return e.h
}
r.cb = function(a) {
    this.h = 0;
    jb(this, 2, a)
};
r.eb = function(a) {
    this.h = 0;
    jb(this, 3, a)
};

function jb(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.cb,
                f = a.eb;
            if (d instanceof ib) {
                tb(d, mb(e || pa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            vb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.A = c, a.h = b, a.j = null, ub(a), 3 != b || c instanceof pb || wb(a, c))
    }
}

function vb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function ub(a) {
    a.s || (a.s = !0, gb(a.Ma, a))
}

function rb(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
r.Ma = function() {
    for (var a; a = rb(this);) sb(this, a, this.h, this.A);
    this.s = !1
};

function sb(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, xb(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : xb(b, c, d)
    } catch (e) {
        yb.call(null, e)
    }
    Xa(lb, b)
}

function xb(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function wb(a, b) {
    a.m = !0;
    gb(function() {
        a.m && yb.call(null, b)
    })
}
var yb = Za;

function pb(a) {
    oa.call(this, a)
}
ma(pb, oa);
pb.prototype.name = "cancel";

function zb() {
    throw Error("Invalid UTF8");
}

function Ab(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Bb = void 0,
    Cb;
const Db = "undefined" !== typeof TextDecoder;
!z("Android") || Ma();
Ma();
var Eb = z("Safari") && !(Ma() || (La() ? 0 : z("Coast")) || (La() ? 0 : z("Opera")) || (La() ? 0 : z("Edge")) || (La() ? Ka("Microsoft Edge") : z("Edg/")) || (La() ? Ka("Opera") : z("OPR")) || z("Firefox") || z("FxiOS") || z("Silk") || z("Android")) && !(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod"));
var Fb = {},
    Gb = null;

function Hb(a, b) {
    void 0 === b && (b = 0);
    Ib();
    b = Fb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Jb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Kb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Kb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                p = Gb[l];
            if (null != p) return p;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ib();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ib() {
    if (!Gb) {
        Gb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Fb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Gb[f] && (Gb[f] = e)
            }
        }
    }
};
var Lb = "undefined" !== typeof Uint8Array,
    Mb = !Wa && "function" === typeof btoa;

function Nb(a) {
    if (!Mb) return Hb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Ob = /[-_.]/g,
    Pb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Qb(a) {
    return Pb[a] || ""
}

function Rb(a) {
    if (!Mb) return Jb(a);
    Ob.test(a) && (a = a.replace(Ob, Qb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Sb(a) {
    return Lb && null != a && a instanceof Uint8Array
}
let Tb;
var Ub = {};
let Vb;

function Wb(a) {
    if (a !== Ub) throw Error("illegal external caller");
}

function Xb() {
    return Vb || (Vb = new Yb(null, Ub))
}

function Zb(a) {
    Wb(Ub);
    var b = a.T;
    b = null == b || Sb(b) ? b : "string" === typeof b ? Rb(b) : null;
    return null == b ? b : a.T = b
}
var Yb = class {
    constructor(a, b) {
        Wb(b);
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    ta() {
        return null == this.T
    }
    sizeBytes() {
        const a = Zb(this);
        return a ? a.length : 0
    }
};

function $b(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function ac() {
    return Error("Failed to read varint, encoding is invalid.")
}

function bc(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function cc(a) {
    if ("string" === typeof a) return {
        buffer: Rb(a),
        K: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        K: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        K: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        K: !1
    };
    if (a.constructor === Yb) return {
        buffer: Zb(a) || Tb || (Tb = new Uint8Array(0)),
        K: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        K: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function dc() {
    return "function" === typeof BigInt
}
var ec = !Ga;
const fc = "function" === typeof Uint8Array.prototype.slice;
let gc = 0,
    hc = 0;

function ic(a) {
    const b = 0 > a;
    a = Math.abs(a);
    let c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    if (b) {
        const [d, e] = jc(c, a);
        a = e;
        c = d
    }
    gc = c >>> 0;
    hc = a >>> 0
}

function kc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else dc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + lc(c) + lc(a));
    return c
}

function lc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function mc() {
    var a = gc,
        b = hc;
    if (b & 2147483648)
        if (dc()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else {
            const [c, d] = jc(a, b);
            a = "-" + kc(c, d)
        }
    else a = kc(a, b);
    return a
}

function jc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function nc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw ac();
    oc(a, c);
    return e
}

function oc(a, b) {
    a.h = b;
    if (b > a.i) throw bc(a.i, b);
}

function pc(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw bc(b, a.i - c);
    a.h = d;
    return c
}
var qc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ca: d = !1
        } = {}) {
            this.ca = d;
            a && (a = cc(a), this.j = a.buffer, this.m = a.K, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ca = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            oc(this, this.h + a)
        }
    },
    rc = [];

function sc(a, {
    qa: b = !1
} = {}) {
    a.qa = b
}

function tc(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = nc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw $b(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function uc(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) uc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        oc(a, b);
                        break a
                    }
                throw ac();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? uc(a) : (b = nc(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!tc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                uc(a)
            } while (1);
            break;
        default:
            throw $b(a.i, a.j);
    }
}

function vc(a, b, c) {
    const d = a.h.i,
        e = nc(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    0 >= g && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var wc = class {
        constructor(a, b) {
            if (rc.length) {
                const c = rc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new qc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            sc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    xc = [];
class yc {
    constructor(a, b, c) {
        this.ba = a;
        this.h = b;
        this.Aa = c
    }
};

function zc(a) {
    return Array.prototype.slice.call(a)
};
var A;
A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
[...Object.values({
    Nb: 1,
    Lb: 2,
    Kb: 4,
    Sb: 8,
    Rb: 16,
    Qb: 32,
    ib: 64,
    Xb: 128,
    pb: 256,
    ob: 512,
    Mb: 1024,
    mb: 2048,
    Wb: 4096,
    nb: 8192
})];
var Ac = A ? (a, b) => {
    a[A] |= b
} : (a, b) => {
    void 0 !== a.C ? a.C |= b : Object.defineProperties(a, {
        C: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
};

function Bc(a) {
    const b = C(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = zc(a)), D(a, b | 1))
}
var Cc = A ? (a, b) => {
    a[A] &= ~b
} : (a, b) => {
    void 0 !== a.C && (a.C &= ~b)
};

function Dc(a, b, c) {
    return c ? a | b : a & ~b
}
var C = A ? a => a[A] | 0 : a => a.C | 0,
    E = A ? a => a[A] : a => a.C,
    D = A ? (a, b) => {
        a[A] = b
    } : (a, b) => {
        void 0 !== a.C ? a.C = b : Object.defineProperties(a, {
            C: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function Ec() {
    var a = [];
    Ac(a, 1);
    return a
}

function Fc(a, b) {
    D(b, (a | 0) & -14591)
}

function Gc(a, b) {
    D(b, (a | 34) & -14557)
}

function Hc(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a
};
var Ic = {},
    Jc = {};

function Kc(a) {
    return !(!a || "object" !== typeof a || a.kc !== Jc)
}

function Lc(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let Mc, Nc = !Ga;

function Oc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = C(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    D(a, d | 1);
    return !0
}
var Pc;
const Qc = [];
D(Qc, 55);
Pc = Object.freeze(Qc);

function Rc(a) {
    if (a & 2) throw Error();
}
let Sc;

function Tc(a, b) {
    (b = Sc ? b[Sc] : void 0) && (a[Sc] = zc(b))
}
let Uc;
class Vc {}
class Wc {}
Object.freeze(new Vc);
Object.freeze(new Wc);

function Xc(a) {
    a = Error(a);
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a
};

function Yc(a) {
    return a.displayName || a.name || "unknown type name"
}
const Zc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function $c(a) {
    const b = typeof a;
    return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Zc.test(a)
}

function ad(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
        if (!a) return;
        a = +a
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
}

function bd(a, b) {
    b = !!b;
    if (!$c(a)) throw Xc("int64");
    if ("string" === typeof a)
        if ($c(a), b = Math.trunc(Number(a)), Number.isSafeInteger(b)) a = String(b);
        else {
            if (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), !cd(a)) {
                if (16 > a.length) ic(Number(a));
                else if (dc()) a = BigInt(a), gc = Number(a & BigInt(4294967295)) >>> 0, hc = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +("-" === a[0]);
                    hc = gc = 0;
                    var c = a.length;
                    for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
                        const f = Number(a.slice(d, e));
                        hc *= 1E6;
                        gc = 1E6 * gc + f;
                        4294967296 <= gc && (hc += Math.trunc(gc /
                            4294967296), hc >>>= 0, gc >>>= 0)
                    }
                    if (b) {
                        const [d, e] = jc(gc, hc);
                        gc = d;
                        hc = e
                    }
                }
                a = mc()
            }
        }
    else if (b) $c(a), a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), cd(b) ? a = b : (ic(a), a = mc()));
    else if ($c(a), a = Math.trunc(a), !Number.isSafeInteger(a)) {
        ic(a);
        b = gc;
        c = hc;
        if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
        b = 4294967296 * c + (b >>> 0);
        a = a ? -b : b
    }
    return a
}

function cd(a) {
    return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
}

function dd(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a
}

function ed(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Yc(b)} but got ${a&&Yc(a.constructor)}`);
    return a
}

function fd(a, b, c) {
    if (null != a && "object" === typeof a && a.X === Ic) return a;
    if (Array.isArray(a)) {
        var d = C(a),
            e = d;
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && D(a, e);
        return new b(a)
    }
};
let gd, hd, id;

function jd(a) {
    switch (typeof a) {
        case "boolean":
            return hd || (hd = [0, void 0, !0]);
        case "number":
            return 0 < a ? void 0 : 0 === a ? id || (id = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function kd(a, b, c) {
    null == a && (a = gd);
    gd = void 0;
    if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -16760833 | (b & 1023) << 14)
    } else {
        if (!Array.isArray(a)) throw Error();
        d = C(a);
        if (d & 64) return Uc && delete a[Uc], a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
            c = a;
            const e = c.length;
            if (e) {
                const f = e - 1;
                if (Lc(c[f])) {
                    d |= 256;
                    b = f - (+!!(d & 512) - 1);
                    if (1024 <= b) throw Error();
                    d = d & -16760833 | (b & 1023) << 14;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(d & 512) - 1));
                if (1024 < b) throw Error();
                d = d & -16760833 | (b & 1023) << 14
            }
        }
    }
    D(a, d);
    return a
};

function ld(a, b) {
    return md(b)
}

function md(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a) {
                if (Array.isArray(a)) return Nc || !Oc(a, void 0, 9999) ? a : void 0;
                if (Sb(a)) return Nb(a);
                if (a instanceof Yb) {
                    const b = a.T;
                    return null == b ? "" : "string" === typeof b ? b : a.T = Nb(b)
                }
            }
    }
    return a
};

function nd(a, b, c) {
    const d = zc(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Tc(d, a);
    return d
}

function od(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && C(a) & 1 ? void 0 : f && C(a) & 2 ? a : pd(a, b, c, void 0 !== d, e, f);
        else if (Lc(a)) {
            const g = {};
            for (let h in a) g[h] = od(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function pd(a, b, c, d, e, f) {
    const g = d || c ? C(a) : 0;
    d = d ? !!(g & 32) : void 0;
    const h = zc(a);
    for (let k = 0; k < h.length; k++) h[k] = od(h[k], b, c, d, e, f);
    c && (Tc(h, a), c(g, h));
    return h
}

function qd(a) {
    return a.X === Ic ? a.toJSON() : md(a)
};

function rd(a, b, c = Gc) {
    if (null != a) {
        if (Lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = C(a);
            if (d & 2) return a;
            b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? (D(a, (d | 34) & -12293), a) : pd(a, rd, d & 4 ? Gc : c, !0, !1, !0)
        }
        a.X === Ic && (c = a.o, d = E(c), a = d & 2 ? a : sd(a, c, d, !0));
        return a
    }
}

function sd(a, b, c, d) {
    a = a.constructor;
    gd = b = td(b, c, d);
    b = new a(b);
    gd = void 0;
    return b
}

function td(a, b, c) {
    const d = c || b & 2 ? Gc : Fc,
        e = !!(b & 32);
    a = nd(a, b, f => rd(f, e, d));
    Ac(a, 32 | (c ? 2 : 0));
    return a
}

function ud(a) {
    const b = a.o,
        c = E(b);
    return c & 2 ? sd(a, b, c, !1) : a
};

function vd(a, b) {
    a = a.o;
    return wd(a, E(a), b)
}

function wd(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= Hc(b)) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b]
    }
}

function xd(a, b, c) {
    const d = a.o;
    let e = E(d);
    Rc(e);
    F(d, e, b, c);
    return a
}

function F(a, b, c, d, e) {
    const f = Hc(b);
    if (c >= f || e) {
        let g = b;
        if (b & 256) e = a[a.length - 1];
        else {
            if (null == d) return g;
            e = a[f + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        e[c] = d;
        c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && D(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function yd(a) {
    return void 0 !== zd(a, H, 2)
}

function Ad(a, b, c, d) {
    var e = b & 2;
    let f = wd(a, b, c);
    Array.isArray(f) || (f = Pc);
    const g = !(d & 2);
    d = !(d & 1);
    const h = !!(b & 32);
    let k = C(f);
    0 !== k || !h || e || g ? k & 1 || (k |= 1, D(f, k)) : (k |= 33, D(f, k));
    e ? (a = !1, k & 2 || (Ac(f, 34), a = !!(4 & k)), (d || a) && Object.freeze(f)) : (e = !!(2 & k) || !!(2048 & k), d && e ? (f = zc(f), d = 1, h && !g && (d |= 32), D(f, d), F(a, b, c, f)) : g && k & 32 && !e && Cc(f, 32));
    return f
}

function Bd(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function Cd(a, b, c, d) {
    const e = a.o;
    let f = E(e);
    Rc(f);
    (c = Dd(e, f, c)) && c !== b && null != d && (f = F(e, f, c));
    F(e, f, b, d);
    return a
}

function Ed(a, b, c) {
    a = a.o;
    return Dd(a, E(a), b) === c ? c : -1
}

function Dd(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
        const f = c[e];
        null != wd(a, b, f) && (0 !== d && (b = F(a, b, d)), d = f)
    }
    return d
}

function Fd(a, b, c, d) {
    let e = E(a);
    Rc(e);
    const f = wd(a, e, c, d);
    let g;
    if (null != f && f.X === Ic) return b = ud(f), b !== f && F(a, e, c, b, d), b.o;
    if (Array.isArray(f)) {
        const h = C(f);
        h & 2 ? g = td(f, h, !1) : g = f;
        g = kd(g, b[0], b[1])
    } else g = kd(void 0, b[0], b[1]);
    g !== f && F(a, e, c, g, d);
    return g
}

function zd(a, b, c) {
    a = a.o;
    let d = E(a);
    const e = wd(a, d, c, !1);
    b = fd(e, b, d);
    b !== e && null != b && F(a, d, c, b, !1);
    return b
}

function Gd(a, b, c) {
    b = zd(a, b, c);
    if (null == b) return b;
    a = a.o;
    let d = E(a);
    if (!(d & 2)) {
        const e = ud(b);
        e !== b && (b = e, F(a, d, c, b, !1))
    }
    return b
}

function Hd(a, b, c, d, e, f) {
    var g = !!(2 & b),
        h = g ? 1 : 2;
    const k = 1 === h;
    h = 2 === h;
    e = !!e;
    f && (f = !g);
    g = wd(a, b, d);
    g = Array.isArray(g) ? g : Pc;
    var l = C(g);
    const p = !!(4 & l);
    if (!p) {
        var m = l;
        0 === m && (m = Id(m, b, e));
        m = Dc(m, 1, !0);
        l = g;
        var q = b;
        const n = !!(2 & m);
        n && (q = Dc(q, 2, !0));
        let t = !n,
            w = !0,
            B = 0,
            I = 0;
        for (; B < l.length; B++) {
            const G = fd(l[B], c, q);
            if (G instanceof c) {
                if (!n) {
                    const Z = !!(C(G.o) & 2);
                    t && (t = !Z);
                    w && (w = Z)
                }
                l[I++] = G
            }
        }
        I < B && (l.length = I);
        m = Dc(m, 4, !0);
        m = Dc(m, 16, w);
        m = Dc(m, 8, t);
        D(l, m);
        n && Object.freeze(l);
        l = m
    }
    c = !!(8 & l) || k && !g.length;
    if (f && !c) {
        Bd(l) &&
            (g = zc(g), l = Id(l, b, e), b = F(a, b, d, g));
        f = g;
        c = l;
        for (l = 0; l < f.length; l++) m = f[l], q = ud(m), m !== q && (f[l] = q);
        c = Dc(c, 8, !0);
        c = Dc(c, 16, !f.length);
        D(f, c);
        l = c
    }
    Bd(l) || (f = l, k ? l = Dc(l, !g.length || 16 & l && (!p || 32 & l) ? 2 : 2048, !0) : e || (l = Dc(l, 32, !1)), l !== f && D(g, l), k && Object.freeze(g));
    h && Bd(l) && (g = zc(g), l = Id(l, b, e), D(g, l), F(a, b, d, g));
    return g
}

function J(a, b, c, d) {
    null != d ? ed(d, b) : d = void 0;
    return xd(a, c, d)
}

function Jd(a, b, c, d, e) {
    null != e ? ed(e, b) : e = void 0;
    Cd(a, c, d, e)
}

function Id(a, b, c) {
    a = Dc(a, 2, !!(2 & b));
    a = Dc(a, 32, !!(32 & b) && c);
    return a = Dc(a, 2048, !1)
}

function Kd(a, b, c, d) {
    a = a.o;
    const e = E(a);
    Rc(e);
    b = Hd(a, e, c, b, !0);
    c = null != d ? ed(d, c) : new c;
    b.push(c);
    C(c.o) & 2 ? Cc(b, 8) : Cc(b, 16)
}

function Ld(a, b) {
    a = vd(a, b);
    return null == a || "string" === typeof a ? a : void 0
}

function Md(a, b) {
    a = Ld(a, b);
    return null != a ? a : ""
}

function Nd(a, b, c) {
    if (null != c) {
        if ("number" !== typeof c) throw Xc("int32");
        if (!Number.isFinite(c)) throw Xc("int32");
        c |= 0
    }
    return xd(a, b, c)
}

function Od(a, b, c) {
    xd(a, b, null == c ? c : bd(c))
}

function K(a, b, c) {
    return xd(a, b, dd(c))
}

function L(a, b, c) {
    if (null != c) {
        if (!Number.isFinite(c)) throw Xc("enum");
        c |= 0
    }
    return xd(a, b, c)
};
var M = class {
    constructor(a, b, c) {
        this.o = kd(a, b, c)
    }
    toJSON() {
        if (Mc) var a = Pd(this, this.o, !1);
        else a = pd(this.o, qd, void 0, void 0, !1, !1), a = Pd(this, a, !0);
        return a
    }
    clone() {
        const a = this.o;
        return sd(this, a, E(a), !1)
    }
    K() {
        return !!(C(this.o) & 2)
    }
};
M.prototype.X = Ic;

function Pd(a, b, c) {
    const d = a.constructor.v;
    var e = E(c ? a.o : b),
        f = Hc(e),
        g = !1;
    if (d && Nc) {
        if (!c) {
            b = zc(b);
            var h;
            if (b.length && Lc(h = b[b.length - 1]))
                for (g = 0; g < d.length; g++)
                    if (d[g] >= f) {
                        Object.assign(b[b.length - 1] = {}, h);
                        break
                    }
            g = !0
        }
        f = b;
        c = !c;
        h = E(a.o);
        a = Hc(h);
        h = +!!(h & 512) - 1;
        var k;
        for (let I = 0; I < d.length; I++) {
            var l = d[I];
            if (l < a) {
                l += h;
                var p = f[l];
                null == p ? f[l] = c ? Pc : Ec() : c && p !== Pc && Bc(p)
            } else {
                if (!k) {
                    var m = void 0;
                    f.length && Lc(m = f[f.length - 1]) ? k = m : f.push(k = {})
                }
                p = k[l];
                null == k[l] ? k[l] = c ? Pc : Ec() : c && p !== Pc && Bc(p)
            }
        }
    }
    k = b.length;
    if (!k) return b;
    let q, n;
    if (Lc(m = b[k - 1])) {
        a: {
            var t = m;f = {};c = !1;
            for (var w in t) {
                a = t[w];
                if (Array.isArray(a)) {
                    h = a;
                    if (Oc(a, d, +w) || !ec && Kc(a) && 0 === a.size) a = null;
                    a != h && (c = !0)
                }
                null != a ? f[w] = a : c = !0
            }
            if (c) {
                for (let I in f) {
                    t = f;
                    break a
                }
                t = null
            }
        }
        t != m && (q = !0);k--
    }
    for (e = +!!(e & 512) - 1; 0 < k; k--) {
        w = k - 1;
        m = b[w];
        if (!(null == m || Oc(m, d, w - e) || !ec && Kc(m) && 0 === m.size)) break;
        n = !0
    }
    if (!q && !n) return b;
    var B;
    g ? B = b : B = Array.prototype.slice.call(b, 0, k);
    b = B;
    g && (b.length = k);
    t && b.push(t);
    return b
};
const Qd = Symbol();

function Rd(a) {
    let b = a[Qd];
    if (!b) {
        const c = Sd(a),
            d = Td(a),
            e = d.h;
        b = e ? (f, g) => e(f, g, d) : (f, g) => {
            for (; tc(g) && 4 != g.i;) {
                var h = g.l,
                    k = d[h];
                if (!k) {
                    var l = d.extensions;
                    l && (l = l[h]) && (k = d[h] = Ud(l))
                }
                if (!k || !k(g, f, h)) {
                    k = g;
                    h = k.j;
                    uc(k);
                    if (k.qa) k = void 0;
                    else {
                        l = k.h.h - h;
                        k.h.h = h;
                        b: {
                            k = k.h;h = l;
                            if (0 == h) {
                                k = Xb();
                                break b
                            }
                            const p = pc(k, h);k.ca && k.m ? h = k.j.subarray(p, p + h) : (k = k.j, l = p, h = p + h, h = l === h ? Tb || (Tb = new Uint8Array(0)) : fc ? k.slice(l, h) : new Uint8Array(k.subarray(l, h)));k = 0 == h.length ? Xb() : new Yb(h, Ub)
                        }
                    }
                    h = f;
                    k && (Sc || (Sc = Symbol()), (l = h[Sc]) ? l.push(k) : h[Sc] = [k])
                }
            }
            c === Vd || c === Wd || c.Ua || (f[Uc || (Uc = Symbol())] = c)
        };
        a[Qd] = b
    }
    return b
}

function Ud(a) {
    a = Array.isArray(a) ? a[0] instanceof yc ? a : [Xd, a] : [a, void 0];
    const b = a[0].ba;
    if (a = a[1]) {
        const c = Rd(a),
            d = Td(a).W;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
let Vd, Wd;
const Yd = Symbol();

function Zd(a, b, c) {
    const d = c[1];
    let e;
    if (d) {
        const f = d[Yd];
        e = f ? f.W : jd(d[0]);
        a[b] = null != f ? f : d
    }
    e && e === hd ? (a.va || (a.va = [])).push(b) : c[0] && (a.xa || (a.xa = [])).push(b)
}

function $d(a, b) {
    return [a.h, !b || 0 < b[0] ? void 0 : b]
}

function Sd(a) {
    var b = a[Yd];
    if (b) return b;
    b = ae(a, a[Yd] = {}, $d, $d, Zd);
    if (!b.xa && !b.va) {
        let c = !0;
        for (let d in b) {
            isNaN(d) || (c = !1);
            break
        }
        c ? (b = jd(a[0]) === hd, b = a[Yd] = b ? Wd || (Wd = {
            W: jd(!0)
        }) : Vd || (Vd = {})) : b.Ua = !0
    }
    return b
}

function be(a, b, c) {
    a[b] = c
}

function ae(a, b, c, d, e = be) {
    b.W = jd(a[0]);
    let f = 0;
    var g = a[++f];
    g && g.constructor === Object && (b.extensions = g, g = a[++f], "function" === typeof g && (b.h = g, b.i = a[++f], g = a[++f]));
    const h = {};
    for (; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
        for (var k = 0; k < g.length; k++) h[g[k]] = g;
        g = a[++f]
    }
    for (k = 1; void 0 !== g;) {
        "number" === typeof g && (k += g, g = a[++f]);
        let m;
        var l = void 0;
        g instanceof yc ? m = g : (m = ce, f--);
        if (m.Aa) {
            g = a[++f];
            l = a;
            var p = f;
            "function" == typeof g && (g = g(), l[p] = g);
            l = g
        }
        g = a[++f];
        p = k + 1;
        "number" === typeof g && 0 > g && (p -=
            g, g = a[++f]);
        for (; k < p; k++) {
            const q = h[k];
            e(b, k, l ? d(m, l, q) : c(m, q))
        }
    }
    return b
}
const de = Symbol(),
    ee = Symbol();

function fe(a, b) {
    const c = a.ba;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function ge(a, b, c) {
    const d = a.ba;
    let e, f;
    return (g, h, k) => d(g, h, k, f || (f = Td(b).W), e || (e = Rd(b)), c)
}

function Td(a) {
    let b = a[ee];
    if (b) return b;
    Sd(a);
    b = ae(a, a[ee] = {}, fe, ge);
    ee in a && de in a && (a.length = 0);
    return b
}
var he;
he = new yc(function(a, b, c) {
    if (2 !== a.i) return !1;
    var d = nc(a.h) >>> 0;
    a = a.h;
    var e = pc(a, d);
    a = a.j;
    if (Db) {
        var f = a,
            g;
        (g = Cb) || (g = Cb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = 0 === e && d === f.length ? f : f.subarray(e, d);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (void 0 === Bb) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (p) {}
                try {
                    g.decode(new Uint8Array([97])), Bb = !0
                } catch (p) {
                    Bb = !1
                }
            }!Bb && (Cb = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let p;
        for (; h < d;) {
            var k = a[h++];
            128 > k ? e.push(k) : 224 > k ? h >= d ? zb() : (p = a[h++], 194 > k || 128 !== (p & 192) ?
                (h--, zb()) : e.push((k & 31) << 6 | p & 63)) : 240 > k ? h >= d - 1 ? zb() : (p = a[h++], 128 !== (p & 192) || 224 === k && 160 > p || 237 === k && 160 <= p || 128 !== ((g = a[h++]) & 192) ? (h--, zb()) : e.push((k & 15) << 12 | (p & 63) << 6 | g & 63)) : 244 >= k ? h >= d - 2 ? zb() : (p = a[h++], 128 !== (p & 192) || 0 !== (k << 28) + (p - 144) >> 30 || 128 !== ((g = a[h++]) & 192) || 128 !== ((f = a[h++]) & 192) ? (h--, zb()) : (k = (k & 7) << 18 | (p & 63) << 12 | (g & 63) << 6 | f & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : zb();
            8192 <= e.length && (l = Ab(l, e), e.length = 0)
        }
        h = Ab(l, e)
    }
    F(b, E(b), c, h);
    return !0
}, !1, !1);
var Xd = new yc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        vc(a, Fd(b, d, c, !0), e);
        return !0
    }, !1, !0),
    ce = new yc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        vc(a, Fd(b, d, c), e);
        return !0
    }, !1, !0),
    ie;
ie = new yc(function(a, b, c, d, e) {
    if (2 !== a.i) return !1;
    d = kd(void 0, d[0], d[1]);
    let f = E(b);
    Rc(f);
    let g = Ad(b, f, c, 3);
    f = E(b);
    C(g) & 4 && (g = zc(g), D(g, (C(g) | 1) & -2079), F(b, f, c, g));
    g.push(d);
    vc(a, d, e);
    return !0
}, !0, !0);
Ba("csi.gstatic.com");
Ba("googleads.g.doubleclick.net");
Ba("partner.googleadservices.com");
Ba("pubads.g.doubleclick.net");
Ba("securepubads.g.doubleclick.net");
Ba("tpc.googlesyndication.com");

function je(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function ke(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function le() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        p = l = 0
    }

    function b(m) {
        for (var q = g, n = 0; 64 > n; n += 4) q[n / 4] = m[n] << 24 | m[n + 1] << 16 | m[n + 2] << 8 | m[n + 3];
        for (n = 16; 80 > n; n++) m = q[n - 3] ^ q[n - 8] ^ q[n - 14] ^ q[n - 16], q[n] = (m << 1 | m >>> 31) & 4294967295;
        m = e[0];
        var t = e[1],
            w = e[2],
            B = e[3],
            I = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var G = B ^ t & (w ^ B);
                    var Z = 1518500249
                } else G = t ^ w ^ B, Z = 1859775393;
            else 60 > n ? (G = t & w | B & (t | w), Z = 2400959708) : (G = t ^ w ^ B, Z = 3395469782);
            G = ((m << 5 | m >>> 27) & 4294967295) + G + I + Z + q[n] & 4294967295;
            I = B;
            B = w;
            w = (t << 30 | t >>> 2) & 4294967295;
            t = m;
            m = G
        }
        e[0] = e[0] + m & 4294967295;
        e[1] = e[1] + t & 4294967295;
        e[2] =
            e[2] + w & 4294967295;
        e[3] = e[3] + B & 4294967295;
        e[4] = e[4] + I & 4294967295
    }

    function c(m, q) {
        if ("string" === typeof m) {
            m = unescape(encodeURIComponent(m));
            for (var n = [], t = 0, w = m.length; t < w; ++t) n.push(m.charCodeAt(t));
            m = n
        }
        q || (q = m.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < q;) b(m.slice(n, n + 64)), n += 64, p += 64;
        for (; n < q;)
            if (f[l++] = m[n++], p++, 64 == l)
                for (l = 0, b(f); n + 64 < q;) b(m.slice(n, n + 64)), n += 64, p += 64
    }

    function d() {
        var m = [],
            q = 8 * p;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = q & 255, q >>>= 8;
        b(f);
        for (n = q = 0; 5 > n; n++)
            for (var t = 24; 0 <= t; t -= 8) m[q++] = e[n] >> t & 255;
        return m
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, p;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        La: function() {
            for (var m = d(), q = "", n = 0; n < m.length; n++) q += "0123456789ABCDEF".charAt(Math.floor(m[n] / 16)) + "0123456789ABCDEF".charAt(m[n] % 16);
            return q
        }
    }
};

function me(a, b, c) {
    var d = String(v.location.href);
    return d && a && b ? [b, ne(ke(d), a, c || null)].join(" ") : null
}

function ne(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], qa(d, function(h) {
        e.push(h)
    }), oe(e.join(" "));
    var f = [],
        g = [];
    qa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    qa(d, function(h) {
        e.push(h)
    });
    a = oe(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function oe(a) {
    var b = le();
    b.update(a);
    return b.La().toLowerCase()
};
const pe = {};

function qe() {
    this.h = document || {
        cookie: ""
    }
}
r = qe.prototype;
r.isEnabled = function() {
    if (!v.navigator.cookieEnabled) return !1;
    if (!this.ta()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        wa: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
r.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.uc, g = c.vc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.wa);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
r.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Ea(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
r.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        wa: 0,
        path: b,
        domain: c
    });
    return d
};
r.ta = function() {
    return !this.h.cookie
};
r.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Ea(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function re() {
    return !!pe.FPA_SAMESITE_PHASE2_MOD || !1
}

function se(a, b, c, d) {
    (a = v[a]) || "undefined" === typeof document || (a = (new qe).get(b));
    return a ? me(a, c, d) : null
};
const te = self;
class ue {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function N(a) {
    Ra.call(this);
    this.A = 1;
    this.m = [];
    this.s = 0;
    this.h = [];
    this.j = {};
    this.G = !!a
}
ma(N, Ra);
r = N.prototype;
r.Fa = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.A;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.A = e + 3;
    d.push(e);
    return e
};
r.ja = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.j[b];
        0 != this.s ? (this.m.push(a), this.h[a + 1] = () => {}) : (c && sa(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
r.ha = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.G)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                ve(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.s++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.s--, 0 < this.m.length && 0 == this.s)
                        for (; c = this.m.pop();) this.ja(c)
                }
            }
        return 0 != e
    }
    return !1
};

function ve(a, b, c) {
    gb(function() {
        a.apply(b, c)
    })
}
r.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.ja, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
r.O = function() {
    N.Ya.O.call(this);
    this.clear();
    this.m.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let O = {};
var we = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
O.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
O.yc = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var xe = {
        Ia: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Na: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    ye = {
        Ia: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Na: function(a) {
            return [].concat.apply([], a)
        }
    };
O.Xa = function() {
    we ? (O.Da = Uint8Array, O.Ba = Uint16Array, O.Ca = Int32Array, O.assign(O, xe)) : (O.Da = Array, O.Ba = Array, O.Ca = Array, O.assign(O, ye))
};
O.Xa();
try {
    new Uint8Array(1)
} catch (a) {};

function ze(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
ze(Array(576));
ze(Array(60));
ze(Array(512));
ze(Array(256));
ze(Array(29));
ze(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ae = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Be = class {
    constructor(a) {
        this.name = a
    }
};
var Ce = new Be("rawColdConfigGroup");
var De = new Be("rawHotConfigGroup");

function Ee(a, b) {
    return Nd(a, 1, b)
}
var Fe = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ge = class extends M {
    constructor(a) {
        super(a)
    }
};
Ge.v = [1];
var He = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ie = class extends M {
    constructor(a) {
        super(a)
    }
};
var Je = class extends M {
    constructor(a) {
        super(a)
    }
};
Je.v = [2];
var Ke = class extends M {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = vd(this, 36);
        a = null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
        return null != a ? a : 0
    }
    setHomeGroupInfo(a) {
        return J(this, Je, 81, a)
    }
    clearLocationPlayabilityToken() {
        return xd(this, 89)
    }
};
Ke.v = [9, 66, 32, 86, 100, 101];
var Me = class extends M {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Md(this, 1)
        }
        J() {
            return Md(this, Ed(this, Le, 2))
        }
    },
    Le = [2, 3, 4, 5, 6];
var Ne = class extends M {
    constructor(a) {
        super(a)
    }
};
Ne.v = [15, 26, 28];
var Oe = class extends M {
    constructor(a) {
        super(a)
    }
};
Oe.v = [5];
var Pe = class extends M {
    constructor(a) {
        super(a)
    }
};
var Qe = class extends M {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return L(this, 5, a)
    }
};
Qe.v = [12];
var Re = class extends M {
    constructor(a) {
        super(a)
    }
    j(a) {
        return J(this, Ke, 1, a)
    }
};
Re.v = [12];
var Se = class extends M {
    constructor(a) {
        super(a)
    }
    getKey() {
        return Md(this, 1)
    }
    J() {
        return Md(this, 2)
    }
};
var Te = class extends M {
    constructor(a) {
        super(a)
    }
};
Te.v = [4, 5];
var Ue = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ve = class extends M {
        constructor(a) {
            super(a)
        }
    },
    We = [2, 3, 4, 5];
var Xe = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ye = class extends M {
    constructor(a) {
        super(a)
    }
};
var Ze = class extends M {
    constructor(a) {
        super(a)
    }
};
var $e = class extends M {
    constructor(a) {
        super(a)
    }
};
$e.v = [10, 17];
var af = class extends M {
    constructor(a) {
        super(a)
    }
};
var H = class extends M {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Yb(a, Ub) : Xb();
            else if (a.constructor !== Yb)
            if (Sb(a)) a = a.length ? new Yb(new Uint8Array(a), Ub) : Xb();
            else throw Error();
        return xd(this, 1, a)
    }
};
var bf = class extends M {
    constructor(a) {
        super(a)
    }
};
var cf = class extends M {
    constructor(a) {
        super(a)
    }
};
var df = class extends M {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return Gd(this, cf, 15)
    }
};
df.v = [4];

function ef(a, b) {
    J(a, H, 1, b)
}
var ff = class extends M {
    constructor(a) {
        super(a)
    }
};

function gf(a, b) {
    return J(a, H, 1, b)
}
var hf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 2, a)
    }
};

function jf(a, b) {
    return J(a, H, 2, b)
}
var kf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
};
kf.v = [3];
var lf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var mf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var nf = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var of = class extends M {
    constructor(a) {
        super(a)
    }
    h(a) {
        return K(this, 1, a)
    }
    hasVe() {
        return yd(this)
    }
};
var pf = class extends M {
    constructor(a) {
        super(a)
    }
};
var qf = class extends M {
    constructor(a) {
        super(a)
    }
};
var P = class extends M {
        constructor(a) {
            super(a, 496)
        }
    },
    rf = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486, 491, 495
    ];
var sf = {
    Jb: 0,
    qb: 1,
    wb: 2,
    xb: 4,
    Db: 8,
    yb: 16,
    zb: 32,
    Ib: 64,
    Hb: 128,
    sb: 256,
    ub: 512,
    Bb: 1024,
    tb: 2048,
    vb: 4096,
    rb: 8192,
    Ab: 16384,
    Eb: 32768,
    Cb: 65536,
    Fb: 131072,
    Gb: 262144
};
var tf = class extends M {
    constructor(a) {
        super(a)
    }
};
var vf = class extends M {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Cd(this, 1, uf, dd(a))
        }
        getPlaylistId() {
            return Ld(this, Ed(this, uf, 2))
        }
    },
    uf = [1, 2];
var wf = class extends M {
    constructor() {
        super()
    }
};
wf.v = [3];
var xf = new Be("recordNotificationInteractionsEndpoint");
var yf = ["notification/convert_endpoint_to_url"],
    zf = ["notification/record_interactions"],
    Af = ["notification_registration/set_registration"];
var Bf = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Cf = ["notifications_register", "notifications_check_registration"];
var Df = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Ef = null;

function Q(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Ff().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Gf() {
    return Q("IndexedDBCheck", "testing IndexedDB").then(() => Hf("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Hf(a) {
    const b = new Df("Error accessing DB");
    return Ff().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Ff() {
    return Ef ? Promise.resolve(Ef) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Ef = d, a(Ef);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Ff()
        };
        c.onupgradeneeded = If
    })
}

function If(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Jf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Kf(a) {
    if (1 === a.length) return a[0];
    var b = Jf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Jf).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Lf(a) {
    return `/youtubei/v1/${Kf(a)}`
};
var Mf = class extends M {
    constructor(a) {
        super(a)
    }
};
var Nf = class extends M {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const Of = v.window;
let Pf, Qf;
const Rf = (null == Of ? void 0 : null == (Pf = Of.yt) ? void 0 : Pf.config_) || (null == Of ? void 0 : null == (Qf = Of.ytcfg) ? void 0 : Qf.data_) || {};
y("yt.config_", Rf);

function R(...a) {
    a = arguments;
    1 < a.length ? Rf[a[0]] = a[1] : 1 === a.length && Object.assign(Rf, a[0])
}

function S(a, b) {
    return a in Rf ? Rf[a] : b
}

function Sf() {
    return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function Tf() {
    const a = Rf.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const Uf = [];

function Vf(a) {
    Uf.forEach(b => b(a))
}

function Wf(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Xf(b)
        }
    } : a
}

function Xf(a) {
    var b = x("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b));
    Vf(a)
}

function Yf(a) {
    var b = x("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b))
};
const Zf = /^[\w.]*$/,
    $f = {
        q: !0,
        search_query: !0
    };

function ag(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 === h.length && h[0] || 2 === h.length) try {
            const k = bg(h[0] || ""),
                l = bg(h[1] || "");
            if (k in c) {
                const p = c[k];
                Array.isArray(p) ? ta(p, l) : c[k] = [p, l]
            } else c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(ag);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: cg === l ? "unchanged" : l
            }];
            $f.hasOwnProperty(e) || Yf(d)
        }
    }
    return c
}
const cg = String(ag);

function dg(a) {
    "?" === a.charAt(0) && (a = a.substring(1));
    return ag(a, "&")
}

function eg(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = dg(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Qa(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function fg(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Na)[1] || null,
        d = Oa(a.match(Na)[3] || null);
    c && d ? (a = a.match(Na), b = b.match(Na), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Oa(b.match(Na)[3] || null) === d && (Number(b.match(Na)[4] || null) || null) === (Number(a.match(Na)[4] || null) || null) : !0;
    return a
}

function bg(a) {
    return a && a.match(Zf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function T(a) {
    a = gg(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function hg(a, b) {
    a = gg(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function ig() {
    return S("EXPERIMENTS_TOKEN", "")
}

function gg(a) {
    return S("EXPERIMENT_FLAGS", {})[a]
}

function jg() {
    const a = [],
        b = S("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = S("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function kg(a, b) {
    "function" === typeof a && (a = Wf(a));
    return window.setTimeout(a, b)
};
var lg = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    mg = [...lg, "client_dev_set_cookie"];
[...lg];
let ng = !1;

function og(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = pg(a, b);
    const d = qg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || v;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = p => {
                    p = p || {};
                    k ? b.onSuccess && b.onSuccess.call(e, p, h) : b.onError && b.onError.call(e, p, h);
                    b.onFinish && b.onFinish.call(e, p, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = kg(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || v))
    }, a))
}

function pg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = S("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = eg(a, b || {}, !0);
    return a
}

function qg(a, b) {
    const c = S("XSRF_FIELD_NAME"),
        d = S("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = S("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Oa(a.match(Na)[3] || null) && !b.withCredentials && Oa(a.match(Na)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (T("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = dg(e), xa(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Qa(e));
    f = e || f && !ua(f);
    !ng && f && "POST" != b.method && (ng = !0, Xf(Error("AJAX request with postData should use POST")));
    return e
};
const rg = [{
    fa: a => `Cannot read property '${a.key}'`,
    Y: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    fa: a => `Cannot call '${a.key}'`,
    Y: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    fa: a => `${a.key} is not defined`,
    Y: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var tg = {
    F: [],
    D: [{
        callback: sg,
        weight: 500
    }]
};

function sg(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function ug() {
    if (!vg) {
        var a = vg = new wg;
        a.F.length = 0;
        a.D.length = 0;
        xg(a, tg)
    }
    return vg
}

function xg(a, b) {
    b.F && a.F.push.apply(a.F, b.F);
    b.D && a.D.push.apply(a.D, b.D)
}
var wg = class {
        constructor() {
            this.D = [];
            this.F = []
        }
    },
    vg;
const yg = new N;

function zg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Ag(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Ag(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Ag(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Ag(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Bg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Cg(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = zg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Cg(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Cg(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Dg(a), d += c[b].length;
    else c[b] = Dg(a), d += c[b].length;
    return d
}

function Cg(a, b, c, d) {
    c += `.${a}`;
    a = Dg(b);
    d[c] = a;
    return c.length + a.length
}

function Dg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function Eg() {
    Fg.h || (Fg.h = new Fg);
    return Fg.h
}

function Gg(a, b) {
    a = {};
    var c = [],
        d = ke(String(v.location.href));
    var e = [];
    var f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__OVERRIDE_SID;
    re() && (f = f || v.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new qe;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            re() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? v.__SAPISID : v.__APISID, g || "undefined" ===
        typeof document || (g = new qe, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? me(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && re() && ((d = se("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = se("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(S("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), T("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in Rf || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in Rf && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
    return a
}
var Fg = class {
    constructor() {
        this.Za = !0
    }
};
var Hg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function Ig(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
y("ytglobal.prefsUserPrefsPrefs_", x("ytglobal.prefsUserPrefsPrefs_") || {});

function Jg() {
    if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
    throw new Df("Datasync ID not set", "unknown");
};

function Kg(a, b) {
    return Lg(a, 0, b)
}

function Mg(a) {
    const b = x("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var Ng = class {
    h(a) {
        Lg(a, 1)
    }
};

function Og() {
    Pg.h || (Pg.h = new Pg);
    return Pg.h
}

function Lg(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = x("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : kg(a, c || 0)
}
var Pg = class extends Ng {
        U(a) {
            if (void 0 === a || !Number.isNaN(Number(a))) {
                var b = x("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = x("yt.scheduler.instance.start");
            a && a()
        }
    },
    Qg = Og();
const Rg = [];
let Sg, Tg = !1;

function Ug(a) {
    Tg || (Sg ? Sg.handleError(a) : (Rg.push({
        type: "ERROR",
        payload: a
    }), 10 < Rg.length && Rg.shift()))
}

function Vg(a, b) {
    Tg || (Sg ? Sg.V(a, b) : (Rg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < Rg.length && Rg.shift()))
};

function Wg(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function Xg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const Yg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    Zg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    $g = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends Df {
        constructor(a, b = {}, c = Yg[a], d = Zg[a], e = $g[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    ah = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, Yg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, ah.prototype)
        }
    },
    bh = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, bh.prototype)
        }
    };
const ch = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function dh(a, b, c, d) {
    b = Xg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
    if (Eb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof bh) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && ch.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        lc: e.name
    })];
    e.level = "WARNING";
    return e
}

function eh(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function fh(a) {
    if (!a) throw Error();
    throw a;
}

function gh(a) {
    return a
}
var hh = class {
    constructor(a) {
        this.h = a
    }
};

function ih(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof jh ? kh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function lh(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof jh ? kh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function kh(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof jh ? kh(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var jh = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new jh(new hh((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) jh.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new jh(new hh((b, c) => {
            a instanceof jh ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : gh,
            d = null != b ? b : fh;
        return new jh(new hh((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                ih(this, this, c, e, f)
            }), this.i.push(() => {
                lh(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? ih(this, this, c, e, f) : "REJECTED" === this.state.status && lh(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function mh(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function nh(a) {
    return new Promise((b, c) => {
        mh(a, b, c)
    })
}

function V(a) {
    return new jh(new hh((b, c) => {
        mh(a, b, c)
    }))
};

function oh(a, b) {
    return new jh(new hh((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const ph = window;
var W = ph.ytcsi && ph.ytcsi.now ? ph.ytcsi.now : ph.performance && ph.performance.timing && ph.performance.now && ph.performance.timing.navigationStart ? () => ph.performance.timing.navigationStart + ph.performance.now() : () => (new Date).getTime();

function qh(a, b, c, d) {
    return u(function*() {
        const e = {
            mode: "readonly",
            B: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.B ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const p = Math.round(W());
            try {
                var k = a.h.transaction(b, e.mode),
                    l = d;
                const m = new rh(k),
                    q = yield sh(m, l), n = Math.round(W());
                th(a, p, n, g, void 0, b.join(), e);
                return q
            } catch (m) {
                l = Math.round(W());
                const q = dh(m, a.h.name, b.join(), a.h.version);
                if (q instanceof U && !q.h || g >= f) th(a, p, l, g, q, b.join(), e), h = q
            }
        }
        return Promise.reject(h)
    })
}

function uh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new vh(a)
}

function wh(a, b, c, d) {
    return qh(a, [b], {
        mode: "readwrite",
        B: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function th(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Vg("QUOTA_EXCEEDED", {
        dbName: Xg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), Vg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), xh(a, !1, d, f, b, g.tag), Ug(e)) : xh(a, !0, d, f, b, g.tag)
}

function xh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    Vg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var yh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return qh(this, [a], {
            mode: "readwrite",
            B: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return qh(this, [a], {
            mode: "readwrite",
            B: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return qh(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return qh(this, [a], {
            mode: "readwrite",
            B: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return qh(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return qh(this, [a], {
            mode: "readonly",
            B: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function zh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Ah(a).then(d => oh(d, c))
}

function Bh(a, b) {
    return zh(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function Ch(a, b, c) {
    const d = [];
    return zh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue()
    }).then(() => d)
}
var vh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Bh(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : Ch(this, a, b)
    }
    index(a) {
        try {
            return new Dh(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new bh(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function sh(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var rh = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new vh(a), this.j.set(a, b));
        return b
    }
};

function Eh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Ah(a).then(f => oh(f, c))
}

function Fh(a, b, c) {
    const d = [];
    return Eh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue()
    }).then(() => d)
}
var Dh = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Eh(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : Fh(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Ah(a) {
    return V(a).then(b => b ? new Gh(a, b) : null)
}
var Gh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Ah(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Ah(this.request)
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    J() {
        return this.cursor.value
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Hh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ja,
            h = c.blocking,
            k = c.ab,
            l = c.upgrade,
            p = c.closed;
        let m;
        const q = () => {
            m || (m = new yh(f.result, {
                closed: p
            }));
            return m
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && Vg("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: Xg(a)
                });
                const t = q(),
                    w = new rh(f.transaction);
                l && l(t, B => n.oldVersion < B && n.newVersion >= B, w);
                w.done.catch(B => {
                    e(B)
                })
            } catch (t) {
                e(t)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(q())
            });
            n.addEventListener("close", () => {
                Vg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: Xg(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(q())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Ih(a, b, c = {}) {
    return Hh(a, b, c)
}

function Jh(a, b = {}) {
    return u(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ja;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield nh(c)
        } catch (c) {
            throw dh(c, a, "", -1);
        }
    })
};

function Kh(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Lh(a, b) {
    if (!b) throw eh("openWithToken", Xg(a.name));
    return a.open()
}
var Mh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return Ih(a, b, c)
    }
    delete(a = {}) {
        return Jh(this.name, a)
    }
    open() {
        if (!this.j) throw Kh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                ab: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return u(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const p of Object.keys(h.M)) {
                            const {
                                L: m,
                                pc: q = Number.MAX_VALUE
                            } = h.M[p];
                            !(f.h.version >= m) || f.h.version >= q || f.h.objectStoreNames.contains(p) || l.push(p)
                        }
                        if (0 !== l.length) {
                            const p = Object.keys(e.options.M),
                                m = k.objectStoreNames();
                            if (e.m < hg("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), Ug(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: p,
                                foundObjectStores: m
                            })), d();
                            if (e.l < hg("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), Ug(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: p,
                                foundObjectStores: m
                            })), d();
                            throw new ah(m, p);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, Kh(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !T("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw dh(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const Nh = new Mh("YtIdbMeta", {
    M: {
        databases: {
            L: 1
        }
    },
    upgrade(a, b) {
        b(1) && uh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Oh(a, b) {
    return u(function*() {
        return qh(yield Lh(Nh, b), ["databases"], {
            B: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Ph(a, b) {
    return u(function*() {
        if (a) return (yield Lh(Nh, b)).delete("databases", a)
    })
};
let Qh;
const Rh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Sh() {
    return u(function*() {
        return !0
    })
}

function Th() {
    if (void 0 !== Qh) return Qh;
    Tg = !0;
    return Qh = Sh().then(a => {
        Tg = !1;
        return a
    })
}

function Uh() {
    return x("ytglobal.idbToken_") || void 0
}

function Vh() {
    const a = Uh();
    return a ? Promise.resolve(a) : Th().then(b => {
        (b = b ? Rh : void 0) && y("ytglobal.idbToken_", b);
        return b
    })
};
new ue;

function Wh(a) {
    try {
        Jg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), Ug(a), a;
    b = Jg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function Xh(a, b, c, d) {
    return u(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield Vh();
        if (!e) throw e = eh("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), Ug(e), e;
        Wg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : Wh(a);
        try {
            return yield Oh(f, e), yield Ih(f.actualName, b, d)
        } catch (g) {
            try {
                yield Ph(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function Yh(a, b, c = {}) {
    return Xh(a, b, !1, c)
}

function Zh(a, b, c = {}) {
    return Xh(a, b, !0, c)
}

function $h(a, b = {}) {
    return u(function*() {
        const c = yield Vh();
        if (c) {
            Wg(a);
            var d = Wh(a);
            yield Jh(d.actualName, b);
            yield Ph(d.actualName, c)
        }
    })
}

function ai(a, b = {}) {
    return u(function*() {
        const c = yield Vh();
        c && (Wg(a), yield Jh(a, b), yield Ph(a, c))
    })
};

function bi(a, b) {
    let c;
    return () => {
        c || (c = new ci(a, b));
        return c
    }
}
var ci = class extends Mh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Wg(a)
    }
    i(a, b, c = {}) {
        return (this.options.aa ? Zh : Yh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.aa ? ai : $h)(this.name, a)
    }
};

function di(a, b) {
    return bi(a, b)
};
var ei = di("ytGcfConfig", {
    M: {
        coldConfigStore: {
            L: 1
        },
        hotConfigStore: {
            L: 1
        }
    },
    aa: !1,
    upgrade(a, b) {
        b(1) && (uh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), uh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function fi(a) {
    return Lh(ei(), a)
}

function gi(a, b, c) {
    return u(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield fi(c);
        yield e.clear("hotConfigStore");
        return yield wh(e, "hotConfigStore", d)
    })
}

function hi(a, b, c, d) {
    return u(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield fi(d);
        yield f.clear("coldConfigStore");
        return yield wh(f, "coldConfigStore", e)
    })
}

function ii(a) {
    return u(function*() {
        let b = void 0;
        yield qh(yield fi(a), ["coldConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => Eh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.J()
        }));
        return b
    })
}

function ji(a) {
    return u(function*() {
        let b = void 0;
        yield qh(yield fi(a), ["hotConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => Eh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.J()
        }));
        return b
    })
};
var ki = class extends Ra {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = x("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], y("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    O() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            0 <= c && a.splice(c, 1)
        }
        this.j.length = 0;
        super.O()
    }
};

function li(a, b, c) {
    return u(function*() {
        if (T("start_client_gcf")) {
            c && (a.j = c, y("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            y("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = Uh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield ji(d)) ? void 0 : e.config
                }
                yield gi(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function mi(a, b, c) {
    return u(function*() {
        if (T("start_client_gcf")) {
            a.coldHashData = b;
            y("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = Uh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield ii(d)) ? void 0 : e.config
                }
                c && (yield hi(c, b, c.configData, d))
            }
        }
    })
}
var ni = class {
    constructor() {
        this.h = 0;
        this.i = new ki
    }
};

function oi() {
    return "INNERTUBE_API_KEY" in Rf && "INNERTUBE_API_VERSION" in Rf
}

function pi() {
    return {
        innertubeApiKey: S("INNERTUBE_API_KEY"),
        innertubeApiVersion: S("INNERTUBE_API_VERSION"),
        da: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Oa: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Pa: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        sa: S("INNERTUBE_CONTEXT_HL"),
        ra: S("INNERTUBE_CONTEXT_GL"),
        Qa: S("INNERTUBE_HOST_OVERRIDE") || "",
        Sa: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ra: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function qi(a) {
    const b = {
        client: {
            hl: a.sa,
            gl: a.ra,
            clientName: a.Oa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.da
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = v.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = ig();
    "" !== c && (b.client.experimentsToken = c);
    c = jg();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    ri(void 0, b);
    si(a, void 0, b);
    T("start_client_gcf") && ti(void 0, b);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: S("DELEGATED_SESSION_ID")
    });
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = S("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(dg(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" ===
            e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function ri(a, b) {
    const c = x("yt.embedded_player.embed_url");
    c && (a ? (b = Gd(a, Oe, 7) || new Oe, K(b, 4, c), J(a, Oe, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function si(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Gd(b, Ie, 62)) ? d : new Ie;
            K(c, 6, a.appInstallData);
            J(b, Ie, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function ui(a, b, c = {}) {
    let d = {};
    S("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.ac || S("AUTHORIZATION");
    b || (a ? b = `Bearer ${x("gapi.auth.getToken")().Zb}` : (a = Gg(Eg()), T("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function ti(a, b) {
    if (!ni.h) {
        var c = new ni;
        ni.h = c
    }
    c = ni.h;
    var d = W() - c.h;
    if (0 !== c.h && d < hg("send_config_hash_timer")) c = void 0;
    else {
        d = x("yt.gcf.config.coldConfigData");
        var e = x("yt.gcf.config.hotHashData"),
            f = x("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = Gd(a, Ie, 62)) ? g : new Ie;
                K(b, 1, c);
                K(b, 3, d);
                K(b, 5, e);
                J(a, Ie, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
"undefined" !== typeof TextEncoder && new TextEncoder;

function vi(a) {
    this.version = 1;
    this.args = a
};

function wi() {
    var a = xi;
    this.topic = "screen-created";
    this.h = a
}
wi.prototype.toString = function() {
    return this.topic
};
const yi = x("ytPubsub2Pubsub2Instance") || new N;
N.prototype.subscribe = N.prototype.Fa;
N.prototype.unsubscribeByKey = N.prototype.ja;
N.prototype.publish = N.prototype.ha;
N.prototype.clear = N.prototype.clear;
y("ytPubsub2Pubsub2Instance", yi);
const zi = x("ytPubsub2Pubsub2SubscribedKeys") || {};
y("ytPubsub2Pubsub2SubscribedKeys", zi);
const Ai = x("ytPubsub2Pubsub2TopicToKeys") || {};
y("ytPubsub2Pubsub2TopicToKeys", Ai);
const Bi = x("ytPubsub2Pubsub2IsAsync") || {};
y("ytPubsub2Pubsub2IsAsync", Bi);
y("ytPubsub2Pubsub2SkipSubKey", null);

function Ci(a, b) {
    const c = Di();
    c && c.publish.call(c, a.toString(), a, b)
}

function Ei(a) {
    var b = Fi;
    const c = Di();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = x("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (zi[d]) try {
                if (f && b instanceof wi && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.za) {
                            const n = new h;
                            h.za = n.version
                        }
                        var l = h.za
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var p = l.construct; {
                            var m = k.args;
                            const n = m.length;
                            if (0 < n) {
                                const t = Array(n);
                                for (k = 0; k < n; k++) t[k] = m[k];
                                var q = t
                            } else q = []
                        }
                        f = p.call(l, h, q)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                Xf(n)
            }
        }, Bi[b.toString()] ? x("yt.scheduler.instance") ? Qg.h(g) : kg(g, 0) : g())
    });
    zi[d] = !0;
    Ai[b.toString()] || (Ai[b.toString()] = []);
    Ai[b.toString()].push(d);
    return d
}

function Gi() {
    var a = Hi;
    const b = Ei(function(c) {
        a.apply(void 0, arguments);
        Ii(b)
    });
    return b
}

function Ii(a) {
    const b = Di();
    b && ("number" === typeof a && (a = [a]), qa(a, c => {
        b.unsubscribeByKey(c);
        delete zi[c]
    }))
}

function Di() {
    return x("ytPubsub2Pubsub2Instance")
};
let Ji = void 0,
    Ki = void 0;
var Li = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495
};
const Mi = ["client.name", "client.version"];

function Ni(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Mi.includes(b.key) : !1);
    return a
};
var Oi = di("ServiceWorkerLogsDatabase", {
    M: {
        SWHealthLog: {
            L: 1
        }
    },
    aa: !0,
    upgrade: (a, b) => {
        b(1) && uh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Pi(a, b) {
    return u(function*() {
        var c = yield Lh(Oi(), b), d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Ni(e.clientError));
        e.interface = d;
        return wh(c, "SWHealthLog", e)
    })
};
y("ytNetworklessLoggingInitializationOptions", v.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Qi(a, b, c, d) {
    !S("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Yf(new Df("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new Df("innertube xhrclient not ready", b, c, d), Xf(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (k, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (d.onSuccess) d.onSuccess(k)
        },
        onError: (k, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: k => {
            if (d.onError) d.onError(k)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Qa;
    f && (e = f);
    var g = a.config_.Sa || !1;
    f = ui(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let h = a.config_.Ra && f;
    h = h && f.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = eg(`${e}${b}`, g || {}, !0);
    try {
        og(a,
            c)
    } catch (k) {
        if ("InvalidAccessError" == k.name) Yf(Error("An extension is blocking network request."));
        else throw k;
    }
}
class Ri {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : oi() && (this.config_ = pi())
    }
    isReady() {
        !this.config_ && oi() && (this.config_ = pi());
        return !!this.config_
    }
};
let Si = 0;
y("ytDomDomGetNextId", x("ytDomDomGetNextId") || (() => ++Si));
y("ytEventsEventsListeners", v.ytEventsEventsListeners || {});
y("ytEventsEventsCounter", v.ytEventsEventsCounter || {
    count: 0
});

function Ti() {
    const a = x("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
v.ytPubsubPubsubInstance || new N;
var Ui = Symbol("injectionDeps"),
    Vi = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    Wi = class {
        constructor() {
            this.key = ni
        }
    };

function Xi(a) {
    var b = {
        ga: Yi,
        ya: Zi.h
    };
    a.i.set(b.ga, b);
    const c = a.j.get(b.ga);
    c && c.sc(a.resolve(b.ga))
}

function $i(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.ya) var e = d.ya;
    else if (d.gb) e = d[Ui] ? aj(a, d[Ui], c) : [], e = d.gb(...e);
    else if (d.fb) {
        e = d.fb;
        const f = e[Ui] ? aj(a, e[Ui], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.zc || a.h.set(b, e);
    return e
}

function aj(a, b, c) {
    return b ? b.map(d => d instanceof Wi ? $i(a, d.key, c, !0) : $i(a, d, c)) : []
}
var bj = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof Wi ? $i(this, a.key, [], !0) : $i(this, a, [])
    }
};
let cj;

function dj() {
    cj || (cj = new bj);
    return cj
};
let ej = window;

function fj() {
    let a, b;
    return "h5vcc" in ej && (null == (a = ej.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = ej.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in ej && ej.performance.mark && ej.performance.measure ? 2 : 0
}

function gj(a) {
    const b = fj();
    switch (b) {
        case 1:
            ej.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            ej.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            je(b, "unknown trace type")
    }
}

function hj(a) {
    var b = fj();
    switch (b) {
        case 1:
            ej.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            ej.performance.mark(c);
            ej.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            je(b, "unknown trace type")
    }
};
var ij = T("web_enable_lifecycle_monitoring") && 0 !== fj(),
    jj = T("web_enable_lifecycle_monitoring");

function kj(a) {
    let b;
    return null != (b = a.priority) ? b : 0
}

function lj(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => kj(a.h[d]) - kj(a.h[c]));
    for (const c of b) b = a.h[c], void 0 === b.jobId || b.Z || (a.scheduler.U(b.jobId), Lg(b.ea, 10))
}
var mj = class {
    constructor(a) {
        this.scheduler = Og();
        this.i = new ue;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.ea();
                this.h[b].Z = !0;
                this.h.every(e => !0 === e.Z) && this.i.resolve()
            };
            const d = Lg(a, kj(c));
            this.h[b] = Object.assign({}, c, {
                ea: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) void 0 === a.jobId || a.Z || this.scheduler.U(a.jobId), a.Z = !0;
        this.i.resolve()
    }
};

function nj(a, b, c) {
    jj && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function oj(a, b) {
    const c = b.filter(e => 10 === pj(a, e)),
        d = b.filter(e => 10 !== pj(a, e));
    return a.l.xc ? (...e) => u(function*() {
        yield qj(c, ...e);
        rj(a, d, ...e)
    }) : (...e) => {
        sj(c, ...e);
        rj(a, d, ...e)
    }
}

function pj(a, b) {
    let c, d;
    return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0
}

function qj(a, ...b) {
    return u(function*() {
        Og();
        for (const c of a) {
            let d;
            Mg(() => {
                tj(c.name);
                const e = c.callback(...b);
                "function" === typeof(null == e ? void 0 : e.then) ? d = e.then(() => {
                    uj(c.name)
                }): uj(c.name)
            });
            d && (yield d)
        }
    })
}

function rj(a, b, ...c) {
    b = b.map(d => ({
        ea: () => {
            tj(d.name);
            d.callback(...c);
            uj(d.name)
        },
        priority: pj(a, d)
    }));
    b.length && (a.i = new mj(b))
}

function sj(a, ...b) {
    Og();
    for (const c of a) Mg(() => {
        tj(c.name);
        c.callback(...b);
        uj(c.name)
    })
}

function tj(a) {
    ij && a && gj(a)
}

function uj(a) {
    ij && a && hj(a)
}
var vj = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        ij && gj(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        ij && hj(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.R === a) : d.from === this.state && d.R === a);
        if (c) {
            this.i && (lj(this.i), this.i = void 0);
            nj(this, a, b);
            this.state = a;
            ij && gj(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(oj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function wj() {
    xj || (xj = new yj);
    return xj
}
var yj = class extends vj {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    R: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    R: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    R: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    R: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = Kg(() => {
                "application_navigating" === this.currentState && this.transition("none")
            }, 5E3);
            a(null == b ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (Qg.U(this.h), this.h = null);
            a(null == b ? void 0 : b.event)
        }
    },
    xj;
let zj = [];
y("yt.logging.transport.getScrapedGelPayloads", function() {
    return zj
});

function Aj(a, b) {
    const c = Bj(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && Bj(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Cj(b.auth, h[0])) {
            var f = b.isJspb;
            Cj(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Cj(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Cj(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Cj(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Dj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = Bj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = Aj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = Aj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = Aj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Dj.prototype.getSequenceCount = Dj.prototype.getSequenceCount;
Dj.prototype.extractMatchingEntries = Dj.prototype.extractMatchingEntries;
Dj.prototype.smartExtractMatchingEntries = Dj.prototype.smartExtractMatchingEntries;
Dj.prototype.storePayload = Dj.prototype.storePayload;

function Bj(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};

function Ej(a, b) {
    if (a) return a[b.name]
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
const Fj = hg("initial_gel_batch_timeout", 2E3),
    Gj = hg("gel_queue_timeout_max_ms", 6E4),
    Hj = Math.pow(2, 16) - 1,
    Ij = hg("gel_min_batch_size", 5);
let Jj = void 0;
class Kj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const Lj = new Kj,
    Mj = new Kj,
    Nj = new Kj,
    Oj = new Kj;
let Pj, Qj = !0,
    Rj = 1;
const Sj = new Map,
    Tj = v.ytLoggingTransportTokensToCttTargetIds_ || {},
    Uj = v.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Vj = {};

function Wj() {
    let a = x("yt.logging.ims");
    a || (a = new Dj, y("yt.logging.ims", a));
    return a
}

function Xj(a, b) {
    if ("log_event" === a.endpoint) {
        Yj();
        var c = Zj(a),
            d = ak(a.payload) || "",
            e = bk(d),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = ck(e.tier);
            if (400 === f) {
                dk(a, b);
                return
            }
        }
        Vj[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        Wj().storePayload(e, a.payload);
        ek(b, c, !1, e, fk(d))
    }
}

function gk(a, b, c) {
    if ("log_event" === b.endpoint) {
        Yj();
        var d = Zj(b, !0),
            e = bk(a),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = ck(e.tier);
            if (400 === f) {
                hk(a, b, c);
                return
            }
        }
        Vj[d] = !0;
        e = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: f
        };
        Wj().storePayload(e, b.payload.toJSON());
        ek(c, d, !0, e, fk(a))
    }
}

function ek(a, b, c = !1, d, e = !1) {
    a && (Jj = new a);
    a = hg("tvhtml5_logging_max_batch_ads_fork") || hg("web_logging_max_batch") || 100;
    const f = W(),
        g = ik(c, d.tier),
        h = g.l;
    e && (g.j = !0);
    e = 0;
    d && (e = Wj().getSequenceCount(d));
    const k = () => {
        jk({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= e ? k() : e >= a ? Pj || (Pj = kk(() => {
        k();
        Pj = void 0
    }, 0)) : 10 <= f - h && (lk(c, d.tier), g.l = f)
}

function dk(a, b) {
    if ("log_event" === a.endpoint) {
        Yj();
        var c = Zj(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = ak(a.payload) || "";
        b && (Jj = new b);
        return new ib((f, g) => {
            Jj && Jj.isReady() ? mk(d, Jj, f, g, {
                bypassNetworkless: !0
            }, !0, fk(e)) : f()
        })
    }
}

function hk(a, b, c) {
    if ("log_event" === b.endpoint) {
        Yj();
        var d = Zj(b, !0),
            e = new Map;
        e.set(d, [b.payload.toJSON()]);
        c && (Jj = new c);
        return new ib(f => {
            Jj && Jj.isReady() ? nk(e, Jj, f, {
                bypassNetworkless: !0
            }, !0, fk(a)) : f()
        })
    }
}

function Zj(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new vf;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Cd(d, 2, uf, dd(c.playlistId));
            Uj[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Tj[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function jk(a = {}, b, c = !1, d) {
    new ib((e, f) => {
        const g = ik(c, d),
            h = g.j;
        g.j = !1;
        ok(g.i);
        ok(g.h);
        g.h = 0;
        Jj && Jj.isReady() ? void 0 === d && T("enable_web_tiered_gel") ? pk(e, f, a, b, c, 300, h) : pk(e, f, a, b, c, d, h) : (lk(c, d), e())
    })
}

function pk(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var h = Jj,
        k = new Map;
    const l = new Map,
        p = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = T("enable_web_tiered_gel") ? Wj().smartExtractMatchingEntries({
        keys: [p, m],
        sizeLimit: 1E3
    }) : Wj().extractMatchingEntries(m), k.set(d, b), nk(k, h, a, c, !1, g)) : (k = T("enable_web_tiered_gel") ? Wj().smartExtractMatchingEntries({
        keys: [p, m],
        sizeLimit: 1E3
    }) : Wj().extractMatchingEntries(m), l.set(d, k), mk(l, h, a, b, c, !1, g));
    else if (e) {
        for (const q of Object.keys(Vj)) b = T("enable_web_tiered_gel") ?
            Wj().smartExtractMatchingEntries({
                keys: [p, m],
                sizeLimit: 1E3
            }) : Wj().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: q
            }), 0 < b.length && k.set(q, b), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete Vj[q];
        nk(k, h, a, c, !1, g)
    } else {
        for (const q of Object.keys(Vj)) d = T("enable_web_tiered_gel") ? Wj().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: q,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: q
            }],
            sizeLimit: 1E3
        }) : Wj().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: q
        }), 0 < d.length && l.set(q,
            d), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete Vj[q];
        mk(l, h, a, b, c, !1, g)
    }
}

function lk(a = !1, b = 200) {
    const c = () => {
            jk({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = ik(a, b);
    var e = d === Oj || d === Nj ? 5E3 : Gj;
    T("web_gel_timeout_cap") && !d.h && (e = kk(() => {
        c()
    }, e), d.h = e);
    ok(d.i);
    e = S("LOGGING_BATCH_TIMEOUT", hg("web_gel_debounce_ms", 1E4));
    T("shorten_initial_gel_batch_timeout") && Qj && (e = Fj);
    e = kk(() => {
        0 < hg("gel_min_batch_size") ? Wj().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= Ij && c() : c()
    }, e);
    d.i = e
}

function mk(a, b, c, d, e = {}, f, g) {
    const h = Math.round(W());
    let k = a.size;
    const l = qk(g);
    for (const [p, m] of a) {
        a = p;
        g = m;
        const q = va({
            context: qi(b.config_ || pi())
        });
        if (!ia(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        q.events = g;
        (g = Tj[a]) && rk(q, a, g);
        delete Tj[a];
        const n = "visitorOnlyApprovedKey" === a;
        sk(q, h, n);
        tk(e);
        const t = I => {
            T("start_client_gcf") && Qg.h(() => u(function*() {
                yield uk(I)
            }));
            k--;
            k || c()
        };
        let w = 0;
        const B = () => {
            w++;
            if (e.bypassNetworkless && 1 === w) try {
                Qi(b, l, q, vk({
                    writeThenSend: !0
                }, n, t, B, f)), Qj = !1
            } catch (I) {
                Xf(I), d()
            }
            k--;
            k || c()
        };
        try {
            Qi(b, l, q, vk(e, n, t, B, f)), Qj = !1
        } catch (I) {
            Xf(I), d()
        }
    }
}

function nk(a, b, c, d = {}, e, f) {
    const g = Math.round(W()),
        h = {
            value: a.size
        };
    var k = new Map([...a]);
    for (const [I] of k) {
        var l = I,
            p = a.get(l);
        k = new wf;
        var m = b.config_ || pi(),
            q = new Re,
            n = new Ke;
        K(n, 1, m.sa);
        K(n, 2, m.ra);
        L(n, 16, m.Pa);
        K(n, 17, m.innertubeContextClientVersion);
        if (m.da) {
            var t = m.da,
                w = new Ie;
            t.coldConfigData && K(w, 1, t.coldConfigData);
            t.appInstallData && K(w, 6, t.appInstallData);
            t.coldHashData && K(w, 3, t.coldHashData);
            t.hotHashData && K(w, 5, t.hotHashData);
            J(n, Ie, 62, w)
        }
        if ((t = v.devicePixelRatio) && 1 != t) {
            if (null != t && "number" !==
                typeof t) throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);
            xd(n, 65, t)
        }
        t = ig();
        "" !== t && K(n, 54, t);
        t = jg();
        if (0 < t.length) {
            w = new Ne;
            for (let G = 0; G < t.length; G++) {
                const Z = new Me;
                K(Z, 1, t[G].key);
                Cd(Z, 2, Le, dd(t[G].value));
                Kd(w, 15, Me, Z)
            }
            J(q, Ne, 5, w)
        }
        ri(q);
        si(m, n);
        T("start_client_gcf") && ti(n);
        S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (m = new Qe, K(m, 3, S("DELEGATED_SESSION_ID")));
        !T("fill_delegate_context_in_gel_killswitch") && (t = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (w = Gd(q, Qe, 3) || new Qe, m = q, t = K(w, 18, t), J(m, Qe, 3, t));
        m = n;
        t = S("DEVICE", "");
        for (const [G, Z] of Object.entries(dg(t))) t = G, w = Z, "cbrand" === t ? K(m, 12, w) : "cmodel" === t ? K(m, 13, w) : "cbr" === t ? K(m, 87, w) : "cbrver" === t ? K(m, 88, w) : "cos" === t ? K(m, 18, w) : "cosver" === t ? K(m, 19, w) : "cplatform" === t && L(m, 42, Ig(w));
        q.j(n);
        J(k, Re, 1, q);
        if (n = Uj[l]) a: {
            if (Ld(n, Ed(n, uf, 1))) q = 1;
            else if (n.getPlaylistId()) q = 2;
            else break a;J(k, vf, 4, n);n = Gd(k, Re, 1) || new Re;m = Gd(n, Qe, 3) || new Qe;t = new Pe;K(t, 2, l);L(t, 1, q);Kd(m, 12, Pe, t);J(n, Qe, 3, m)
        }
        delete Uj[l];
        l = "visitorOnlyApprovedKey" === l;
        wk() || Od(k, 2, g);
        !l && (q = S("EVENT_ID")) && (n = xk(), m = new tf, K(m, 1, q), Od(m, 2, n), J(k, tf, 5, m));
        tk(d);
        if (T("jspb_serialize_with_worker")) {
            if (!Ki)
                if (q = S("WORKER_SERIALIZATION_URL")) {
                    if (q = q.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) {
                        if (void 0 === ya)
                            if (n = null, (m = v.trustedTypes) && m.createPolicy) {
                                try {
                                    n = m.createPolicy("goog#html", {
                                        createHTML: na,
                                        createScript: na,
                                        createScriptURL: na
                                    })
                                } catch (G) {
                                    v.console && v.console.error(G.message)
                                }
                                ya = n
                            } else ya = n;
                        q = (n = ya) ? n.createScriptURL(q) :
                            q;
                        q = new Ca(q, Da)
                    } else q = null;
                    Ki = q
                } else Ki = null;
            q = Ki || void 0;
            Ji || void 0 === q || (Ji = new Worker(q instanceof Ca && q.constructor === Ca ? q.h : "type_error:TrustedResourceUrl", void 0));
            if ((q = Ji) && d.writeThenSend) {
                Sj.set(Rj, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: e,
                    useVSSEndpoint: f,
                    dangerousLogToVisitorSession: l,
                    requestsOutstanding: h
                });
                q.postMessage({
                    op: "gelBatchToSerialize",
                    batchRequest: k.toJSON(),
                    clientEvents: p,
                    key: Rj
                });
                Rj++;
                break
            }
        }
        if (p) {
            q = [];
            for (n = 0; n < p.length; n++) try {
                q.push(new P(p[n]))
            } catch (G) {
                Xf(new Df("Transport failed to deserialize " +
                    String(p[n])))
            }
            p = q
        } else p = [];
        for (const G of p) Kd(k, 3, P, G);
        p = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        a: {
            Mc = !0;
            try {
                var B = JSON.stringify(k.toJSON(), ld);
                break a
            } finally {
                Mc = !1
            }
            B = void 0
        }
        k = B;
        p.ticks.geljspc = W();
        T("log_jspb_serialize_latency") && .001 > Math.random() && Ci("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            Ac: p
        });
        yk(k, b, c, d, e, f, l, h)
    }
}

function yk(a, b, c, d = {}, e, f, g, h = {
    value: 0
}) {
    f = qk(f);
    d = vk(d, g, k => {
        T("start_client_gcf") && Qg.h(() => u(function*() {
            yield uk(k)
        }));
        h.value--;
        h.value || c()
    }, () => {
        h.value--;
        h.value || c()
    }, e);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Qi(b, f, "", d);
    Qj = !1
}

function tk(a) {
    T("always_send_and_write") && (a.writeThenSend = !1)
}

function vk(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        cc: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: T("compress_gel") || T("compress_gel_lr")
    };
    wk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function sk(a, b, c) {
    wk() || (a.requestTimeMs = String(b));
    T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = S("EVENT_ID")) && (c = xk(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function xk() {
    let a = S("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Hj / 2));
    a++;
    a > Hj && (a = 1);
    R("BATCH_CLIENT_COUNTER", a);
    return a
}

function rk(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Yj() {
    var a;
    (a = x("yt.logging.transport.enableScrapingForTest")) || (a = gg("il_payload_scraping"), a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : ""));
    a || (zj = [], y("yt.logging.transport.enableScrapingForTest", !0), y("yt.logging.transport.scrapedPayloadsForTesting", zj), y("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), y("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        y("yt.logging.transport.scrapeClientEvent", !0))
}

function wk() {
    return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
}

function kk(a, b) {
    return !1 === T("embeds_transport_use_scheduler") ? kg(a, b) : T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation") ? Kg(() => {
        "none" === wj().currentState ? a() : wj().install({
            none: {
                callback: a
            }
        })
    }, b) : Kg(a, b)
}

function ok(a) {
    T("transport_use_scheduler") ? Qg.U(a) : window.clearTimeout(a)
}

function uk(a) {
    return u(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = Ej(c, De);
        const d = null == c ? void 0 : c.hotHashData,
            e = Ej(c, Ce);
        c = null == c ? void 0 : c.coldHashData;
        const f = dj().resolve(new Wi);
        f && (d && (b ? yield li(f, d, b): yield li(f, d)), c && (e ? yield mi(f, c, e): yield mi(f, c)))
    })
}

function ik(a, b = 200) {
    return a ? 300 === b ? Oj : Mj : 300 === b ? Nj : Lj
}

function bk(a) {
    if (T("enable_web_tiered_gel")) {
        a = Li[a || ""];
        var b, c;
        if (null == dj().resolve(new Wi)) var d = void 0;
        else {
            var e = null != (d = x("yt.gcf.config.hotConfigGroup")) ? d : S("RAW_HOT_CONFIG_GROUP");
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return b[c]
    }
}

function ak(a) {
    a = Object.keys(a);
    for (const b of a)
        if (Li[b]) return b
}

function ck(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function fk(a) {
    return "gelDebuggingEvent" === a
}

function qk(a = !1) {
    return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const zk = v.ytLoggingGelSequenceIdObj_ || {};

function Ak(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = Ti();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !T("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
        index: Bk(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete zk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? dk : Xj)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function Ck(a = !1) {
    jk(void 0, void 0, a)
}

function Bk(a) {
    zk[a] = a in zk ? zk[a] + 1 : 0;
    return zk[a]
};
let Dk = Ri,
    Ek = [];

function X(a, b, c = {}) {
    let d = Dk;
    S("ytLoggingEventsDefaultDisabled", !1) && Dk === Ri && (d = null);
    T("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = Ti(), c.timestamp = W());
    Ak(a, b, d, c)
};
const Fk = v.ytLoggingGelSequenceIdObj_ || {};

function Gk(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || W());
    Od(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new qf;
    if (d.lact) Od(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) Od(e, 1, -1);
    else {
        var f = Ti();
        Od(e, 1, isFinite(f) ? f : -1)
    }
    if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
        f = d.sequenceGroup;
        const g = Bk(f),
            h = new pf;
        Od(h, 2, g);
        K(h, 1, f);
        J(e, pf, 3, h);
        d.endOfSequence && delete Fk[d.sequenceGroup]
    }
    J(b, qf, 33, e);
    (d.sendIsolatedPayload ? hk : gk)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Hk(a, b, c = {}) {
    let d = !1;
    S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    Gk(a, b, d ? null : Ri, c)
};

function Ik(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, nf, 72, rf, a);
    c ? Gk("visualElementShown", d, c, b) : Hk("visualElementShown", d, b)
}

function Jk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, mf, 73, rf, a);
    c ? Gk("visualElementHidden", d, c, b) : Hk("visualElementHidden", d, b)
}

function Kk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, lf, 78, rf, a);
    c ? Gk("visualElementGestured", d, c, b) : Hk("visualElementGestured", d, b)
}

function Lk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, of , 208, rf, a);
    c ? Gk("visualElementStateChanged", d, c, b) : Hk("visualElementStateChanged", d, b)
}

function Mk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, hf, 156, rf, a);
    c ? Gk("screenCreated", d, c, b) : Hk("screenCreated", d, b)
}

function Nk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
    Jd(d, kf, 215, rf, a);
    c ? Gk("visualElementAttached", d, c, b) : Hk("visualElementAttached", d, b)
};
var Ok = new Set,
    Pk = 0,
    Qk = 0,
    Rk = 0,
    Sk = [];
const Tk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Uk(a) {
    Vk(a)
}

function Wk(a) {
    Vk(a, "WARNING")
}

function Vk(a, b = "ERROR") {
    var c = {};
    c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Xk(a, c, b)
}

function Xk(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (T("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Pk)) {
            d = Sk;
            var e = Sa(a);
            const m = e.message || "Unknown Error",
                q = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${q}: ${m}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let n = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(n = Bg(a.args[h], `params.${h}`, b, n), 500 <= n); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const t = a.params;
                if ("object" === typeof a.params)
                    for (h in t) {
                        if (!t[h]) continue;
                        const w = `params.${h}`,
                            B = Dg(t[h]);
                        b[w] = B;
                        n +=
                            w.length + B.length;
                        if (500 < n) break
                    } else b.params = Dg(t)
            }
            if (d.length)
                for (h = 0; h < d.length && !(n = Bg(d[h], `params.context.${h}`, b, n), 500 <= n); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: m,
                name: q,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = ug();
                for (k of a.F)
                    if (b.message && b.message.match(k.Ta)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.D)
                    if (l.callback(b)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var p of rg)
                if (p.Y[k.name]) {
                    l = p.Y[k.name];
                    for (const t of l)
                        if (l = k.message.match(t.u)) {
                            k.params["params.error.original"] = l[0];
                            a = t.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = p.fa(b);
                            break
                        }
                }
            k.params || (k.params = {});
            p = ug();
            k.params["params.errorServiceSignature"] = `msg=${p.F.length}&cb=${p.D.length}`;
            k.params["params.serviceWorker"] = "true";
            v.document && v.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Ba("sample").constructor !== za && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || Ok.has(k.message) || Yk(k, c)
        }
    }
}

function Yk(a, b = "ERROR") {
    if ("ERROR" === b) {
        yg.ha("handleError", a);
        if (T("record_app_crashed_web") && 0 === Rk && 1 === a.sampleWeight)
            if (Rk++, T("errors_via_jspb")) {
                var c = new af;
                c = L(c, 1, 1);
                if (!T("report_client_error_with_app_crash_ks")) {
                    var d = new $e;
                    var e = new Ze;
                    var f = new Ye;
                    var g = new Xe;
                    g = K(g, 1, a.message);
                    f = J(f, Xe, 3, g);
                    e = J(e, Ye, 5, f);
                    d = J(d, Ze, 9, e);
                    J(c, $e, 4, d)
                }
                d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
                Jd(d, af, 20, rf, c);
                Hk("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, T("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), X("appCrashed", c);
        Qk++
    } else "WARNING" === b && yg.ha("handleWarning", a);
    a: {
        if (T("errors_via_jspb")) {
            if (Zk()) var h = void 0;
            else {
                c = new Ue;
                K(c, 1, a.stack);
                a.fileName && K(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (Nd(c, 2, Number(k[0])), Nd(c, 3, Number(k[1]))) : Nd(c, 2, Number(k[0])));
                k = new Xe;
                K(k,
                    1, a.message);
                K(k, 3, a.name);
                Nd(k, 6, a.sampleWeight);
                "ERROR" === b ? L(k, 2, 2) : "WARNING" === b ? L(k, 2, 1) : L(k, 2, 0);
                var l = new Ve;
                xd(l, 1, !0);
                Jd(l, Ue, 3, We, c);
                c = new Te;
                K(c, 3, window.location.href);
                d = S("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    g = c.o;
                    e = d[f];
                    var p = E(g);
                    Rc(p);
                    g = Ad(g, p, 5, 2);
                    p = C(g);
                    e = bd(e, !!(4 & p) && !!(4096 & p));
                    g.push(e)
                }
                d = Sf();
                if (!Tf() && d)
                    for (var m of Object.keys(d)) e = new Se, K(e, 1, m), K(e, 2, String(d[m])), Kd(c, 4, Se, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new Se, K(d, 1, `client.${h}`), K(d, 2, String(m[h])),
                        Kd(c, 4, Se, d);
                m = S("SERVER_NAME");
                h = S("SERVER_VERSION");
                m && h && (d = new Se, K(d, 1, "server.name"), K(d, 2, m), Kd(c, 4, Se, d), m = new Se, K(m, 1, "server.version"), K(m, 2, h), Kd(c, 4, Se, m));
                h = new Ye;
                J(h, Te, 1, c);
                J(h, Ve, 2, l);
                J(h, Xe, 3, k)
            }
            if (!h) break a;
            m = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
            Jd(m, Ye, 163, rf, h);
            Hk("clientError", m)
        } else {
            h = {};
            if (Zk()) h = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== m.length && (1 !== m.length || isNaN(Number(m[0])) ?
                    2 !== m.length || isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? m.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                h.pageUrl = window.location.href;
                h.kvPairs = [];
                S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
                d = Sf();
                if (!Tf() && d)
                    for (l of Object.keys(d)) h.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) h.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = S("SERVER_NAME");
                l = S("SERVER_VERSION");
                k && l && (h.kvPairs.push({
                    key: "server.name",
                    value: k
                }), h.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: h,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!h) break a;
            X("clientError", h)
        }
        if ("ERROR" === b || T("errors_flush_gel_always_killswitch")) b: {
            if (T("web_fp_via_jspb")) {
                b = Ek;
                Ek = [];
                if (b)
                    for (const q of b) Ak(q.N, q.payload, Dk, q.options);
                Ck(!0);
                if (!T("web_fp_via_jspb_and_json")) break b
            }
            Ck()
        }
    }
    try {
        Ok.add(a.message)
    } catch (q) {}
    Pk++
}

function Zk() {
    for (const a of Tk) {
        const b = Ha();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function $k(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function al(a) {
    return u(function*() {
        var b = yield v.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new Nf(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function bl(a = !1) {
    const b = cl.h;
    return u(function*() {
        if (a || !b.h) b.h = al(b).then(b.j).catch(c => {
            delete b.h;
            Vk(c)
        });
        return b.h
    })
}
var cl = class {
    constructor() {
        this.i = dl("/sw.js_data")
    }
    j(a) {
        const b = Gd(a, Mf, 2);
        if (b) {
            var c = Md(b, 5);
            c && (v.__SAPISID = c);
            null != Ld(b, 10) ? R("EOM_VISITOR_DATA", Md(b, 10)) : null != Ld(b, 7) && R("VISITOR_DATA", Md(b, 7));
            if (null != ad(vd(b, 4))) {
                c = String;
                var d = ad(vd(b, 4));
                R("SESSION_INDEX", c(null != d ? d : 0))
            }
            null != Ld(b, 8) && R("DELEGATED_SESSION_ID", Md(b, 8));
            null != Ld(b, 11) && R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Md(b, 11))
        }
        return a
    }
};

function el(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var fl = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.H.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            el(this, a)
        }
    }
};
let gl = Date.now().toString();

function hl() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (gl)
        for (b = 1, c = 0; c < gl.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ gl.charCodeAt(c), b++;
    return a
}

function il() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return hl()
};
let jl = v.ytLoggingDocDocumentNonce_;
if (!jl) {
    const a = il(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    jl = b.join("")
}
var kl = jl;
var ll = {
    kb: 0,
    hb: 1,
    jb: 2,
    Ob: 3,
    lb: 4,
    Yb: 5,
    Pb: 6,
    Vb: 7,
    Tb: 8,
    Ub: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let ml = 1;

function nl(a) {
    return new ol({
        trackingParams: a
    })
}

function pl(a) {
    const b = ml++;
    return new ol({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var ol = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new H;
        void 0 !== this.h.trackingParams ? a.setTrackingParams(this.h.trackingParams) : (void 0 !== this.h.veType && Nd(a, 2, this.h.veType), void 0 !== this.h.veCounter && Nd(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && Nd(a, 3, this.h.elementIndex), this.h.isCounterfactual && xd(a, 5, !0));
        if (void 0 !== this.h.dataElement) {
            var b = this.h.dataElement.getAsJspb();
            J(a, H, 7, b)
        }
        void 0 !== this.h.youtubeData && J(a, He, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function ql(a = 0) {
    return S("client-screen-nonce-store", {})[a]
}

function rl(a, b = 0) {
    let c = S("client-screen-nonce-store");
    c || (c = {}, R("client-screen-nonce-store", c));
    c[b] = a
}

function sl(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function tl(a = 0) {
    return S(sl(a))
}

function ul(a = 0) {
    return (a = tl(a)) ? new ol({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function vl() {
    let a = S("csn-to-ctt-auth-info");
    a || (a = {}, R("csn-to-ctt-auth-info", a));
    return a
}

function wl() {
    return Object.values(S("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function xl(a = 0) {
    a = ql(a);
    if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function yl(a) {
    for (const b of Object.values(ll))
        if (xl(b) === a) return !0;
    return !1
}

function zl(a, b, c) {
    const d = vl();
    (c = xl(c)) && delete d[c];
    b && (d[a] = b)
}

function Al(a) {
    return vl()[a]
}

function Bl(a, b, c = 0, d) {
    if (a !== ql(c) || b !== S(sl(c)))
        if (zl(a, d, c), rl(a, c), R(sl(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (T("web_time_via_jspb")) {
                            const e = new bf;
                            K(e, 1, kl);
                            K(e, 2, a);
                            const f = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P;
                            Jd(f, bf, 111, rf, e);
                            Hk("foregroundHeartbeatScreenAssociated", f)
                        } else X("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: kl,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Cl() {
    var a = S("INNERTUBE_CONTEXT");
    if (!a) return Vk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = va(a);
    T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = ig();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    fl.h || (fl.h = new fl);
    b = fl.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Dl(a) {
    var b = a;
    if (a = S("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Na);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var El = class {};
const Fl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends El {})
};

function Gl(a = !0) {
    a = a ? il() : hl();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class xi extends vi {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Fi = new wi,
    Hl = [];
let Jl = Il,
    Kl = 0;
const Ll = new Map,
    Ml = new Map,
    Nl = new Map;

function Ol(a, b, c, d, e, f, g, h) {
    const k = Jl(),
        l = new ol({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = Pl({}, k);
    e && (f.cttAuthInfo = e);
    var p = () => {
        Wk(new Df("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (T("il_via_jspb")) {
        e = gf((new hf).h(k), l.getAsJspb());
        c && c.visualElement ? (p = new ff, c.clientScreenNonce && K(p, 2, c.clientScreenNonce), ef(p, c.visualElement.getAsJspb()), g && L(p, 4, sf[g]), J(e, ff, 5, p)) : c && p();
        d && K(e, 3, d);
        if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Ge;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var m of h) m.screenVeType && (h = Ee(new Fe, m.screenVeType), Kd(c, 1, Fe, h));
            J(e, Ge, 7, c)
        }
        Mk(e, f, a)
    } else m = {
            csn: k,
            pageVe: l.getAsJson()
        }, T("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (m.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (m.implicitGesture.gestureType = g)) : c && p(), d && (m.cloneCsn = d), a ? Ak("screenCreated", m, a, f) : X("screenCreated", m, f);
    Ci(Fi, new xi(k));
    Ll.clear();
    Ml.clear();
    Nl.clear();
    return k
}

function Ql(a, b, c, d, e = !1) {
    Rl(a, b, c, [d], e)
}

function Rl(a, b, c, d, e = !1) {
    const f = Pl({
        cttAuthInfo: Al(b) || void 0
    }, b);
    for (const h of d) {
        var g = h.getAsJson();
        (ua(g) || !g.trackingParams && !g.veType) && Wk(Error("Child VE logged with no data"));
        if (T("no_client_ve_attach_unless_shown")) {
            const k = Sl(h, b);
            if (g.veType && !Ml.has(k) && !Nl.has(k) && !e) {
                Ll.set(k, [a, b, c, h]);
                return
            }
            g = Sl(c, b);
            Ll.has(g) ? Tl(c, b) : Nl.set(g, !0)
        }
    }
    d = d.filter(h => {
        h.csn !== b ? (h.csn = b, h = !0) : h = !1;
        return h
    });
    if (T("il_via_jspb")) {
        const h = jf((new kf).h(b), c.getAsJspb());
        ra(d, k => {
            k = k.getAsJspb();
            Kd(h, 3, H, k)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, h) : Nk(h, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: ra(d, h => h.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? Ak("visualElementAttached", c, a, f) : X("visualElementAttached", c, f)
}

function Ul(a, b, c, d, e, f) {
    Vl(a, b, c, e, f)
}

function Vl(a, b, c, d, e) {
    Wl(c, b);
    const f = Pl({
        cttAuthInfo: Al(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new nf).h(b), c = c.getAsJspb(), c = J(d, H, 2, c), c = L(c, 4, 1), e && J(c, df, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : Ik(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? Ak("visualElementShown", e, a, f) : X("visualElementShown", e, f))
}

function Xl(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = Pl({
        cttAuthInfo: Al(b) || void 0,
        endOfSequence: d
    }, b);
    T("il_via_jspb") ? (e = (new mf).h(b), c = c.getAsJspb(), c = J(e, H, 2, c), L(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : Jk(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? Ak("visualElementHidden", d, a, f) : X("visualElementHidden", d, f))
}

function Yl(a, b, c, d) {
    var e = void 0;
    Wl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = Pl({
        cttAuthInfo: Al(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new lf).h(b), c = c.getAsJspb(), c = J(d, H, 2, c), L(c, 4, sf[e]), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, void 0, c) : Kk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, e) : a ? Ak("visualElementGestured", e, a, f) : X("visualElementGestured", e, f))
}

function Il() {
    if (T("enable_web_96_bit_csn")) var a = Gl();
    else if (T("enable_web_96_bit_csn_no_crypto")) a = Gl(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = Hb(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    Hl.push({
        N: a,
        payload: c,
        I: d,
        options: b
    });
    Kl || (Kl = Gi())
}

function Hi(a) {
    if (Hl) {
        for (const b of Hl)
            if (T("il_via_jspb") && b.I) switch (b.I.h(a.csn), b.N) {
                case "screenCreated":
                    Mk(b.I, b.options);
                    break;
                case "visualElementAttached":
                    Nk(b.I, b.options);
                    break;
                case "visualElementShown":
                    Ik(b.I, b.options);
                    break;
                case "visualElementHidden":
                    Jk(b.I, b.options);
                    break;
                case "visualElementGestured":
                    Kk(b.I, b.options);
                    break;
                case "visualElementStateChanged":
                    Lk(b.I, b.options);
                    break;
                default:
                    Wk(new Df("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, X(b.N, b.payload, b.options));
        Hl.length = 0
    }
    Kl = 0
}

function Sl(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function Wl(a, b) {
    if (T("no_client_ve_attach_unless_shown")) {
        var c = Sl(a, b);
        Ml.set(c, !0);
        Tl(a, b)
    }
}

function Tl(a, b) {
    a = Sl(a, b);
    Ll.has(a) && (b = Ll.get(a) || [], Ql(b[0], b[1], b[2], b[3], !0), Ll.delete(a))
}

function Pl(a, b) {
    T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
y("ytLoggingLatencyUsageStats_", v.ytLoggingLatencyUsageStats_ || {});
const Zl = window;
class $l {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var am = Zl.performance || Zl.mozPerformance || Zl.msPerformance || Zl.webkitPerformance || new $l;
la(am.clearResourceTimings || am.webkitClearResourceTimings || am.mozClearResourceTimings || am.msClearResourceTimings || am.oClearResourceTimings || pa, am);
const bm = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function cm(a) {
    var b = {
            ec: {}
        },
        c = Eg();
    if (void 0 !== Zi.h) {
        const d = Zi.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Df("InnerTubeTransportService is already initialized", a);
    } else Zi.h = new Zi(b, a, c)
}

function dm(a, b) {
    return u(function*() {
        var c;
        const d = null == a ? void 0 : null == (c = a.na) ? void 0 : c.sessionIndex;
        c = yield nb(Gg(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, em(b), c))
    })
}

function fm(a, b, c) {
    return u(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.H) ? 0 : d.context) {
            d = b.H.context;
            for (var e of []) yield e.oc(d)
        }
        var f;
        if (null == (f = a.i) ? 0 : f.wc(b.input, b.H)) return yield a.i.jc(b.input, b.H);
        var g;
        if ((f = null == (g = b.config) ? void 0 : g.qc) && a.h.has(f) && T("web_memoize_inflight_requests")) var h = a.h.get(f);
        else {
            g = JSON.stringify(b.H);
            let m;
            e = null != (m = null == (h = b.P) ? void 0 : h.headers) ? m : {};
            b.P = Object.assign({}, b.P, {
                headers: Object.assign({}, e, c)
            });
            h = Object.assign({}, b.P);
            "POST" === b.P.method && (h =
                Object.assign({}, h, {
                    body: g
                }));
            h = a.l.fetch(b.input, h, b.config);
            f && a.h.set(f, h)
        }
        h = yield h;
        var k;
        let l;
        if (h && "error" in h && (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)) {
            k = h.error.details;
            for (const m of k)(k = m["@type"]) && -1 < bm.indexOf(k) && (delete m["@type"], h = m)
        }
        f && a.h.has(f) && a.h.delete(f);
        let p;
        !h && (null == (p = a.i) ? 0 : p.dc(b.input, b.H)) && (h = yield a.i.ic(b.input, b.H));
        return h || void 0
    })
}

function gm(a, b, c) {
    var d = {
        na: {
            identity: Hg
        }
    };
    b.context || (b.context = Cl());
    return new ib(e => u(function*() {
        var f = Dl(c);
        f = fg(f) ? "same-origin" : "cors";
        if (a.j.Za) {
            var g, h = null == d ? void 0 : null == (g = d.na) ? void 0 : g.sessionIndex;
            g = Gg(0, {
                sessionIndex: h
            });
            f = Object.assign({}, em(f), g)
        } else f = yield dm(d, f);
        g = Dl(c);
        h = {};
        S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = S("INNERTUBE_API_KEY"));
        T("json_condensed_response") && (h.prettyPrint = "false");
        g = eg(g, h || {}, !1);
        h = {
            method: "POST",
            mode: fg(g) ? "same-origin" : "cors",
            credentials: fg(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const p of Object.keys(k)) k[p] && (l[p] = k[p]);
        0 < Object.keys(l).length && (h.headers = l);
        e(fm(a, {
            input: g,
            P: h,
            H: b,
            config: d
        }, f))
    }))
}

function em(a) {
    const b = {
        "Content-Type": "application/json"
    };
    S("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA") : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
    S("WEBVIEW_EOM", !1) && (b["X-Yt-Webview-Eom"] = "1");
    b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
    S("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
    "cors" !== a && ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) &&
        (b["X-Youtube-Client-Version"] = a), (a = S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var Zi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ia || (a.ia = {});
        a.ia = Object.assign({}, Fl, a.ia)
    }
};
var Yi = new Vi;
let hm;

function im() {
    if (!hm) {
        const a = dj();
        cm({
            fetch: (b, c) => nb(fetch(new Request(b, c)))
        });
        Xi(a);
        hm = a.resolve(Yi)
    }
    return hm
};

function jm(a) {
    return u(function*() {
        yield km();
        Wk(a)
    })
}

function lm(a) {
    return u(function*() {
        yield km();
        Vk(a)
    })
}

function mm(a) {
    u(function*() {
        var b = yield Vh();
        b ? yield Pi(a, b): (yield bl(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            N: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            N: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && X(b.N, b.payload))
    })
}

function km() {
    return u(function*() {
        try {
            yield bl()
        } catch (a) {}
    })
};

function nm() {
    om.h || (om.h = new om);
    return om.h
}

function pm(a, b, c) {
    const d = xl(c);
    return null === a.csn || d === a.csn || c ? d : (a = new Df("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), Wk(a), null)
}

function qm(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var om = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = xl()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    G(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = pm(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (qm(a) || g) {
                    d = a.visualElement ?
                        a.visualElement : nl(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? qm(a) & 4 ? f || (a = this.client, Wl(d, c), e = Pl({
                            cttAuthInfo: Al(c) || void 0
                        }, c), T("il_via_jspb") ? (f = (new nf).h(c), d = d.getAsJspb(), f = J(f, H, 2, d), f = L(f, 4, 4), b && J(f, df, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : Ik(f, e, a)) : (b = {
                            csn: c,
                            ve: d.getAsJson(),
                            eventType: 4
                        }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? Ak("visualElementShown", b, a, e) : X("visualElementShown", b, e))) :
                        qm(a) & 1 && !e && Vl(this.client, c, d, h, b) : Vl(this.client, c, d, h, b)
                }
            }
    }
    A(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = pm(this, a, c);
        if (!c || !qm(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : nl(d);
        qm(a) & 8 ? Xl(this.client, c, d) : qm(a) & 2 && !b && (a = this.client, b = Pl({
            cttAuthInfo: Al(c) || void 0
        }, c), T("il_via_jspb") ? (e = (new mf).h(c), d = d.getAsJspb(), d =
            J(e, H, 2, d), d = L(d, 4, 2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : Jk(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? Ak("visualElementHidden", d, a, b) : X("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b;
        const c = a.data || (null == (b = a.props) ? void 0 : b.data);
        let d, e;
        if (T("il_use_view_model_logging_context") && (null == c ? 0 : null == (d = c.context) ? 0 : null == (e = d.loggingContext) ? 0 : e.loggingDirectives)) return c.context.loggingContext.loggingDirectives.trackingParams ||
            "";
        let f, g;
        if (null == c ? 0 : null == (f = c.rendererContext) ? 0 : null == (g = f.loggingContext) ? 0 : g.loggingDirectives) return c.rendererContext.loggingContext.loggingDirectives.trackingParams || "";
        if (null == c ? 0 : c.loggingDirectives) return c.loggingDirectives.trackingParams || "";
        let h;
        return (null == (h = a.veContainer) ? 0 : h.trackingParams) ? a.veContainer.trackingParams : (null == c ? void 0 : c.trackingParams) || ""
    }
};

function rm() {
    sm.h || (sm.h = new sm)
}

function tm(a) {
    rm();
    Wf(nm().G).bind(nm())(a, void 0, 8)
}

function um(a) {
    rm();
    Wf(nm().A).bind(nm())(a, void 0, 8)
}
var sm = class {
    j(a) {
        Wf(nm().j).bind(nm())(a)
    }
    clear() {
        Wf(nm().clear).bind(nm())()
    }
};

function vm() {
    wm.h || (wm.h = new wm);
    return wm.h
}

function xm(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        ym(a, b, c);
        const d = ul(c.layer);
        if (d) {
            for (const e of a.G) zm(a, e[0], e[1] || d, c.layer);
            for (const e of a.S) Am(a, e[0], e[1])
        }
    };
    xl(c.layer) || a.m();
    if (c.pa)
        for (const d of c.pa) Bm(a, d, c.layer);
    else Vk(Error("Delayed screen needs a data promise."))
}

function ym(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = void 0 !== c.Va ? c.Va : c.layer;
    const e = xl(d);
    d = ul(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = S("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    T("combine_ve_grafts") && e && Cm(a, e);
    T("no_client_ve_attach_unless_shown") && d && e && Tl(d, e);
    let k;
    try {
        k = Ol(a.client, b, f, c.oa, c.cttAuthInfo, g, c.hc, c.loggingExpectations)
    } catch (m) {
        $k(m, {
            tc: b,
            rootVe: d,
            nc: void 0,
            fc: e,
            mc: f,
            oa: c.oa
        });
        Vk(m);
        return
    }
    Bl(k, b, c.layer, c.cttAuthInfo);
    e && "UNDEFINED_CSN" !== e && d && !yl(e) && Xl(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    rm();
    Wf(nm().s).bind(nm())();
    const l = ul(c.layer);
    e && "UNDEFINED_CSN" !== e && l && (T("web_mark_root_visible") || T("music_web_mark_root_visible")) && Wf(Ul)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let p;
    null == (p = a.Ea.get(c.layer)) || p.forEach((m, q) => {
        m ? zm(a, q, m, c.layer) :
            l && zm(a, q, l, c.layer)
    });
    Dm(a)
}

function Em(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    Wf(() => {
        [28631].includes(b) || (Wk(new Df("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.G = [];
        a.S = [];
        c.pa ? xm(a, b, c) : ym(a, b, c)
    })()
}

function Bm(a, b, c = 0) {
    Wf(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = xl(c),
                f = ul(c);
            if (e && f) {
                var g;
                (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && Ql(a.client, e, f, nl(d.response.trackingParams));
                var h;
                (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && Ql(a.client, e, f, nl(d.playerResponse.trackingParams))
            }
        })
    })()
}

function zm(a, b, c, d = 0) {
    Wf(() => {
        if (a.i.has(d)) return a.G.push([b, c]), !0;
        const e = xl(d),
            f = c || ul(d);
        if (e && f) {
            if (T("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.A.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.la || (a.la = Kg(() => {
                    Cm(a, e)
                }, 1200))
            } else Ql(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function Fm(a, b) {
    return Wf(() => {
        const c = nl(b);
        zm(a, c, void 0, 8);
        return c
    })()
}

function Cm(a, b) {
    if (void 0 === b) {
        const c = wl();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Cm(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.A.get(d)) && Rl(a.client, b, d, c)
    }), a.l.clear(), a.A.clear(), a.la = void 0
}

function Gm(a, b, c = 0) {
    (c = xl(c)) && Yl(a.client, c, b)
}

function Hm(a, b, c, d = 0) {
    if (!b) return !1;
    d = xl(d);
    if (!d) return !1;
    Yl(a.client, d, nl(b), c);
    return !0
}

function Im(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? Gm(a, b.visualElement, c) : (rm(), b = Wf(nm().i).bind(nm())(b), Hm(a, b, void 0, c))
}

function Am(a, b, c, d = 0) {
    const e = xl(d);
    d = b || ul(d);
    if (e && d)
        if (a = a.client, b = Pl({
                cttAuthInfo: Al(e) || void 0
            }, e), T("il_via_jspb")) {
            const f = new of ;
            f.h(e);
            c = f;
            d = d.getAsJspb();
            J(c, H, 2, d);
            "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, void 0, f) : Lk(f, b, a)
        } else c = {
            csn: e,
            ve: d.getAsJson(),
            clientData: c
        }, "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, c) : a ? Ak("visualElementStateChanged", c, a, b) : X("visualElementStateChanged", c, b)
}

function Dm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            Vk(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.ka.length; b++) {
        c = a.ka[b];
        try {
            c()
        } catch (d) {
            Vk(d)
        }
    }
}
var wm = class {
    constructor() {
        this.G = [];
        this.S = [];
        this.h = [];
        this.s = [];
        this.ka = [];
        this.l = new Map;
        this.A = new Map;
        this.i = new Set;
        this.Ea = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Hm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(nl(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.i.has(c) ? this.S.push([a, b]) : Am(this, a, b, c)
    }
};
const Jm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    Km = RegExp("^(?:[a-z]+:)?//", "i");

function Lm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Q("IDToken", b), Mm()) : "notifications_check_registration" === a && Nm(b)
}

function Om() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Pm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Qm(a) {
    return u(function*() {
        const b = Pm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Lf(yf);
        return Rm().then(e => gm(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Sm(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                lm(g);
                Promise.reject(g)
            })
        }))
    })
}

function Tm(a, b) {
    var c = xl(8);
    if (null == c || !b) return a;
    a = Km.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Sm(a, b) {
    a.deviceId && Q("DeviceId", a.deviceId);
    a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = vm();
    Em(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Tm(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Um(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: Fm(d, g.data.clickTrackingParams)
        }, tm(h);
        Vm(a.displayCap)
    }).catch(() => {})
}

function Um(a) {
    if (!Ej(a, xf)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: Ej(a, xf).serializedInteractionsRequest
        },
        c = Lf(zf);
    return Rm().then(d => gm(d, b, c)).then(d => d)
}

function Vm(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = nl(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    h = pl(82046),
                    k = vm();
                zm(k, h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                tm(c);
                Im(k, c);
                um(g)
            }
        }
    })
}

function Nm(a) {
    const b = [Wm(a), Hf("RegistrationTimestamp").then(Xm), Ym(), Zm(), $m()];
    Promise.all(b).catch(() => {
        Q("IDToken", a);
        Mm();
        return Promise.resolve()
    })
}

function Xm(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Wm(a) {
    return Hf("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Ym() {
    return Hf("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Zm() {
    return Hf("Endpoint").then(a => an().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function $m() {
    return Hf("application_server_key").then(a => bn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function cn() {
    var a = Notification.permission;
    if (Jm[a]) return Jm[a]
}

function Mm() {
    Q("RegistrationTimestamp", 0);
    Promise.all([an(), dn(), en(), bn()]).then(([a, b, c, d]) => {
        b = b ? Bf(b) : null;
        c = c ? Bf(c) : null;
        d = d ? Hb(new Uint8Array(d), 4) : null;
        fn(a, b, c, d)
    }).catch(() => {
        fn()
    })
}

function fn(a = null, b = null, c = null, d = null) {
    Gf().then(e => {
        e && (Q("Endpoint", a), Q("P256dhKey", b), Q("AuthKey", c), Q("application_server_key", d), Q("Permission", Notification.permission), Promise.all([Hf("DeviceId"), Hf("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Ae.length;
                for (k = 0; 256 > k; k++) f[k] = Ae[0 | Math.random() * h];
                h = f.join("")
            }
            gn(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function gn(a, b, c, d, e, f) {
    u(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: cn()
                    }
                }
            },
            h = Lf(Af);
        return Rm().then(k => gm(k, g, h).then(() => {
            Q("DeviceId", a);
            Q("RegistrationTimestamp", Date.now());
            Q("TimestampLowerBound", Date.now())
        }, l => {
            jm(l)
        }))
    })
}

function an() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function dn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function en() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function bn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Rm() {
    return u(function*() {
        try {
            return yield bl(!0), im()
        } catch (a) {
            return yield jm(a), Promise.reject(a)
        }
    })
};
let hn = self.location.origin + "/";

function dl(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? te.registration.scope : hn;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let jn = void 0;

function kn(a) {
    return u(function*() {
        jn || (jn = yield a.open("yt-appshell-assets"));
        return jn
    })
}

function ln(a, b) {
    return u(function*() {
        const c = yield kn(a), d = b.map(e => mn(c, e));
        return Promise.all(d)
    })
}

function nn(a, b) {
    return u(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function on(a, b) {
    return u(function*() {
        const c = yield kn(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function pn(a, b, c) {
    return u(function*() {
        yield(yield kn(a)).put(b, c)
    })
}

function qn(a, b) {
    u(function*() {
        yield(yield kn(a)).delete(b)
    })
}

function mn(a, b) {
    return u(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var rn = di("yt-serviceworker-metadata", {
    M: {
        auth: {
            L: 1
        },
        ["resource-manifest-assets"]: {
            L: 2
        }
    },
    aa: !0,
    upgrade(a, b) {
        b(1) && uh(a, "resource-manifest-assets");
        b(2) && uh(a, "auth")
    },
    version: 2
});
let sn = null;

function tn(a) {
    return Lh(rn(), a)
}

function un() {
    return u(function*() {
        const a = yield Vh();
        if (a) return vn.h || (vn.h = new vn(a)), vn.h
    })
}

function wn(a, b) {
    return u(function*() {
        yield qh(yield tn(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                sn = e;
                let f = !0;
                return zh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function xn(a, b) {
    return u(function*() {
        let c = !1,
            d = 0;
        yield qh(yield tn(a.token), ["resource-manifest-assets"], "readonly", e => zh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.J().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function yn(a) {
    return u(function*() {
        sn || (yield qh(yield tn(a.token), ["resource-manifest-assets"], "readonly", b => zh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            sn = c.getKey()
        })));
        return sn
    })
}
var vn = class {
    constructor(a) {
        this.token = a
    }
};

function zn() {
    return u(function*() {
        const a = yield Vh();
        if (a) return An.h || (An.h = new An(a)), An.h
    })
}

function Bn(a, b) {
    return u(function*() {
        yield wh(yield tn(a.token), "auth", b, "shell_identifier_key")
    })
}

function Cn(a) {
    return u(function*() {
        return (yield(yield tn(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Dn(a) {
    return u(function*() {
        yield(yield tn(a.token)).clear("auth")
    })
}
var An = class {
    constructor(a) {
        this.token = a
    }
};

function En() {
    u(function*() {
        const a = yield zn();
        a && (yield Dn(a))
    })
};
var Fn = class extends M {
        constructor(a) {
            super(a)
        }
        hasUrl() {
            return null != Ld(this, 1)
        }
    },
    Gn = [0, he];

function Hn(a) {
    a = a.o;
    const b = E(a);
    return Hd(a, b, Fn, 1, !1, !(2 & b))
}
var In = class extends M {
    constructor(a) {
        super(a)
    }
};
In.v = [1];
var Jn = function(a, b) {
    return (c, d) => {
        a: {
            if (xc.length) {
                const f = xc.pop();
                sc(f, d);
                f.h.init(c, void 0, void 0, d);
                c = f
            } else c = new wc(c, d);
            try {
                const f = new a,
                    g = f.o;
                Rd(b)(g, c);
                Uc && delete g[Uc];
                var e = f;
                break a
            } finally {
                c.h.clear(), c.l = -1, c.i = -1, 100 > xc.length && xc.push(c)
            }
            e = void 0
        }
        return e
    }
}(In, [0,
    ie, Gn
]);

function Kn(a) {
    return u(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Ln(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Ln(a) {
    return Hn(Jn(decodeURIComponent(a))).reduce((b, c) => {
        (c = Md(c, 1)) && b.push(c);
        return b
    }, [])
};

function Mn(a) {
    return u(function*() {
        const b = yield bl();
        if (b && null != Ld(b, 3)) {
            var c = yield zn();
            c && (c = yield Cn(c), Ld(b, 3) !== c && (qn(a.caches, a.h), En()))
        }
    })
}

function Nn(a) {
    return u(function*() {
        let b, c;
        try {
            c = yield On(a.i), b = yield Kn(c), yield ln(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Pn(), yield pn(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Qn(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Rn(a) {
    return u(function*() {
        yield Mn(a);
        return Nn(a)
    })
}

function On(a) {
    return u(function*() {
        try {
            return yield v.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Pn() {
    return u(function*() {
        var a = yield bl();
        let b;
        a && null != Ld(a, 3) && (b = Md(a, 3));
        return b ? (a = yield zn()) ? Promise.resolve(Bn(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Qn(a, b, c) {
    return u(function*() {
        const d = yield un();
        if (d) try {
            yield wn(d, b)
        } catch (e) {
            yield jm(e)
        }
        b.push(c);
        try {
            yield on(a.caches, b)
        } catch (e) {
            yield jm(e)
        }
        return Promise.resolve()
    })
}

function Sn(a, b) {
    return u(function*() {
        return nn(a.caches, b)
    })
}

function Tn(a) {
    return u(function*() {
        return nn(a.caches, a.h)
    })
}
var Un = class {
    constructor() {
        var a = self.caches;
        let b = dl("/app_shell");
        T("service_worker_forward_exp_params") && (b += self.location.search);
        var c = dl("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var Vn = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function Wn(a, b) {
    return u(function*() {
        const c = b.request,
            d = yield Sn(a.h, c.url);
        if (d) return mm({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        Xn(c);
        return Yn(b)
    })
}

function Zn(a, b) {
    return u(function*() {
        const c = yield $n(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield Tn(a.h);
        if (d) return ao(a), bo(d, b);
        co(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function eo(a, b) {
    b = new URL(b);
    if (!a.config.ma.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.Ha)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function fo(a, b) {
    return u(function*() {
        const c = yield Tn(a.h);
        if (!c) return co(a), Yn(b);
        ao(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return bo(c, b);
        d = yield $n(b);
        return d.response && d.response.ok ? d.response : bo(c, b)
    })
}

function Yn(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !go(b) ? b : v.fetch(a.request))
}

function Xn(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    un().then(c => {
        if (c) {
            var d = yn(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = xn(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                jm(e)
            }).finally(() => {
                mm({
                    appShellAssetLoadReport: b,
                    timestamp: W()
                })
            })
        } else mm({
            appShellAssetLoadReport: b,
            timestamp: W()
        })
    })
}

function ao(a) {
    mm({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function co(a) {
    mm({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function bo(a, b) {
    if (!T("sw_nav_preload_pbj")) return a;
    const c = new Vn,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !go(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function $n(a) {
    return u(function*() {
        try {
            return {
                response: yield Yn(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function go(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var po = class {
    constructor() {
        var a = ho;
        var b = {
            Ka: io,
            Wa: jo([ko, /\/signin/, /\/logout/]),
            ma: ["/", "/feed/downloads"],
            Ha: lo([{
                key: "feature",
                value: "ytca"
            }]),
            Ga: mo(T("kevlar_sw_app_wide_fallback") ? no : oo)
        };
        this.h = a;
        this.config = b
    }
};
const qo = /^\/$/,
    oo = [qo, /^\/feed\/downloads$/],
    no = [qo, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function mo(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const ro = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function jo(a) {
    a = mo(a);
    return new RegExp(`${ro.source}(${a.source})`)
}
const so = mo([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    io = new RegExp(`${ro.source}(${so.source})`),
    ko = /purge_shell=1/;

function lo(a = []) {
    const b = [];
    for (const c of mg) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
jo([ko]);
lo();
var uo = class {
    constructor() {
        var a = ho,
            b = to,
            c = self;
        if (v.URLPattern) {
            var d = [];
            T("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            T("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.S = Cf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.A.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.G.bind(this)
    }
    A(a) {
        this.h.skipWaiting();
        if (T("service_worker_static_routing_registration") && 0 < this.j.length && a.registerRouter) try {
            a.registerRouter(this.j)
        } catch (c) {}
        const b = Rn(this.i).catch(c => {
            jm(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), T("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return u(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Wa.test(e.url)) cl.h && (delete cl.h.h, v.__SAPISID = void 0, R("VISITOR_DATA", void 0), R("SESSION_INDEX", void 0), R("DELEGATED_SESSION_ID", void 0), R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, qn(c.caches, c.h), En(), c = Yn(a), d.call(a, c);
            else if (c.config.Ka.test(e.url)) a.respondWith(Wn(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.ma;
                (!T("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.Ga.test(f.pathname)) ? a.respondWith(Zn(c, a)): eo(c, e.url) ? a.respondWith(fo(c, a)) : d && a.respondWith(Yn(a))
            }
        })
    }
    G(a) {
        const b = a.data;
        this.S.includes(b.type) ? Lm(a) : "refresh_shell" === b.type && Nn(this.i).catch(c => {
            jm(c)
        })
    }
};

function vo() {
    let a = x("ytglobal.storage_");
    a || (a = new wo, y("ytglobal.storage_", a));
    return a
}
var wo = class {
    estimate() {
        return u(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return xo()
        })
    }
};

function xo() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
y("ytglobal.storageClass_", wo);

function yo(a, b) {
    vo().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: zo(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: zo(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Ao {
    constructor() {
        var a = Bo;
        this.handleError = Co;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= hg("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    V(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                T("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                yo(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= hg("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function zo(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
xg(ug(), {
    F: [{
        Ta: /Failed to fetch/,
        weight: 500
    }],
    D: []
});
var {
    handleError: Co = Uk,
    V: Bo = X
} = {
    handleError: lm,
    V: function(a, b) {
        return u(function*() {
            yield km();
            X(a, b)
        })
    }
};
for (Sg = new Ao; 0 < Rg.length;) {
    const a = Rg.shift();
    switch (a.type) {
        case "ERROR":
            Sg.handleError(a.payload);
            break;
        case "EVENT":
            Sg.V(a.eventType, a.payload)
    }
}
cl.h = new cl;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Um(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = nl(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = pl(74726);
            b = vm();
            zm(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            tm(c);
            Im(b, c)
        }
        um(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Hf("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Qm(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Om())
};
self.onpushsubscriptionchange = function() {
    Mm()
};
const ho = new Un,
    to = new po;
(new uo).init();