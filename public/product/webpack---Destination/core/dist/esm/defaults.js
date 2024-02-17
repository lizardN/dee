export function defaultValues(t) {
    const o = {};
    for (const e of Object.keys(t)) {
        const n = t[e].default;
        void 0 !== n && (o[e] = n)
    }
    return o
}