let arrayRe;
try {
    arrayRe = new RegExp("\\[(?=\"|'|\\d)|\\.|(?<=\"|'|\\d)]+", "g")
} catch (r) {
    arrayRe = /\[|\.|]+/g
}
export function get(r, e) {
    if ("" === e || "." === e) return r;
    if (null === e || null == e) return;
    return (Array.isArray(e) ? e : e.split(arrayRe).filter((r => r)).map((r => r.replace(/'|"/g, "")))).reduce(((r, e) => r && r[e]), r)
}