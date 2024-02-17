import AbortController from "abort-controller";
import {
    CustomError
} from "ts-custom-error";
import fetch, {
    Headers,
    Request,
    Response
} from "./fetch";
import {
    isObject
} from "./real-type-of";
const defaultRequestTimeout = 1e4;
if (null != globalThis.process && "object" == typeof globalThis.process.env && globalThis.process.env.DEFAULT_REQUEST_TIMEOUT) {
    const t = parseInt(globalThis.process.env.DEFAULT_REQUEST_TIMEOUT, 10);
    Number.isNaN(t)
}
export const DEFAULT_REQUEST_TIMEOUT = 1e4;
const isObjectLike = t => null !== t && "object" == typeof t;

function mergeHeaders(t, e) {
    const s = new Headers(t || {});
    return new Headers(e || {}).forEach(((t, e) => {
        "undefined" === t ? s.delete(e) : s.set(e, t)
    })), s
}

function merge(...t) {
    let e = {},
        s = {};
    for (const o of t) {
        if (Array.isArray(o)) Array.isArray(e) || (e = []), e = [...e, ...o];
        else if (isObjectLike(o)) {
            for (let [t, s] of Object.entries(o)) isObjectLike(s) && t in e && (s = merge(e[t], s)), e[t] = s;
            isObjectLike(o.headers) && (s = mergeHeaders(s, o.headers))
        }
        e.headers = s
    }
    return e
}

function mergeOptions(...t) {
    for (const e of t)
        if (!isObject(e)) throw new TypeError("The 'options' argument must be an object");
    return merge({}, ...t)
}

function getRequestMethod(t) {
    return t.toUpperCase()
}
export class HTTPError extends CustomError {
    constructor(t, e, s) {
        super(t.statusText ? ? String(t.status ? ? "Unknown response error")), this.response = t, this.request = e, this.options = s
    }
}
export class TimeoutError extends CustomError {
    constructor(t, e) {
        super("Request timed out"), this.request = t, this.options = e, this.code = "ETIMEDOUT"
    }
}

function timeoutFetch(t, e, s) {
    return new Promise(((o, r) => {
        const i = setTimeout((() => {
            e && e.abort(), r(new TimeoutError(t, s))
        }), s.timeout);
        fetch(t).then(o).catch(r).then((() => clearTimeout(i)))
    }))
}
class RequestClient {
    constructor(t, e = {}) {
        this.setOptions(t, e)
    }
    setOptions(t, e) {
        if (this.options = { ...e,
                method: getRequestMethod(e.method ? ? "get"),
                throwHttpErrors: !1 !== e.throwHttpErrors,
                timeout: e.timeout ? ? 1e4
            }, this.abortController = new AbortController, this.options.signal && this.options.signal.addEventListener("abort", (() => {
                this.abortController.abort()
            })), this.options.signal = this.abortController.signal, this.request = new Request(t, this.options), this.options.searchParams) {
            const t = new URLSearchParams(this.options.searchParams),
                e = new URL(this.request.url);
            e.search = t.toString(), this.request = new Request(new Request(e.toString(), this.request), this.options)
        }
        void 0 !== this.options.json && (this.options.body = JSON.stringify(this.options.json), this.request.headers.set("content-type", "application/json"), this.request = new Request(this.request, {
            body: this.options.body
        }))
    }
    async executeRequest() {
        let t = await this.fetch();
        for (const e of this.options.afterResponse ? ? []) {
            const s = await e(this.request, this.options, t);
            s instanceof Response && (t = s)
        }
        if (!t.ok && this.options.throwHttpErrors) throw new HTTPError(t, this.request, this.options);
        return t
    }
    async fetch() {
        for (const t of this.options.beforeRequest ? ? []) {
            const e = await t({ ...this.options
            });
            e && isObject(e) && this.setOptions(this.request.url, mergeOptions(this.options, e))
        }
        return !1 === this.options.timeout ? fetch(this.request.clone()) : timeoutFetch(this.request.clone(), this.abortController, this.options)
    }
}
export default function createInstance(t = {}) {
    const e = (e, s = {}) => new RequestClient(e, mergeOptions(t, s)).executeRequest();
    return e.extend = e => createInstance(mergeOptions(t, e)), e
}