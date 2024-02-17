import {
    AggregateAjvError
} from "@segment/ajv-human-errors";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import dayjs from "dayjs";
import {
    arrifyFields
} from "./arrify";
const ajv = addFormats(new Ajv({
    coerceTypes: "array",
    allErrors: !0,
    allowUnionTypes: !0,
    verbose: !0,
    removeAdditional: !0
}));
ajv.addFormat("text", !0), ajv.addFormat("date-like", (r => {
    let a = dayjs(r);
    return String(Number(r)) === r && (13 === r.length && (a = dayjs(Number(r))), a = dayjs.unix(Number(r))), a.isValid()
}));
export function validateSchema(r, a, e) {
    const {
        schemaKey: t,
        throwIfInvalid: o = !0,
        statsContext: s
    } = e ? ? {};
    let m;
    m = t ? ajv.getSchema(t) || ajv.addSchema(a, t).getSchema(t) : ajv.compile(a), arrifyFields(r, a);
    const i = m(r);
    if (o && !i && m.errors) throw s ? .statsClient ? .incr("ajv.discard", 1, s.tags), new AggregateAjvError(m.errors);
    return i
}