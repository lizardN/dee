const headersToObject = e => {
        const r = {};
        for (const [a, t] of e.entries()) r[a] = t;
        return r
    },
    prepareHeaders = async (e, r, a) => (Object.defineProperty(a.headers, "toJSON", {
        enumerable: !1,
        value: () => headersToObject(a.headers)
    }), a);
export default prepareHeaders;