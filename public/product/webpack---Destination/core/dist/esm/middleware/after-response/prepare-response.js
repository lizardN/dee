const prepareResponse = async (e, t, n) => {
    const s = t.statsContext ? .statsClient,
        o = n;
    let a;
    if (t.skipResponseCloning) a = await n.text();
    else {
        s ? .incr("before-response-clone", 1);
        const e = n.clone();
        a = await e.text(), s ? .incr("after-response-clone", 1)
    }
    const r = t.agent;
    let c;
    r && r.destroy();
    try {
        c = o.headers.get("content-type") ? .includes("application/json") ? JSON.parse(a) : a
    } catch (e) {}
    return o.content = a, o.data = c, o
};
export default prepareResponse;