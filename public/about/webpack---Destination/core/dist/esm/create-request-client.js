import addBasicAuthHeader from "./middleware/before-request/add-basic-auth-header";
import prepareHeaders from "./middleware/after-response/prepare-headers";
import prepareResponse from "./middleware/after-response/prepare-response";
import createInstance, {
    DEFAULT_REQUEST_TIMEOUT
} from "./request-client";
const baseClient = createInstance({
    timeout: DEFAULT_REQUEST_TIMEOUT,
    headers: {
        "user-agent": "Segment (Actions)"
    },
    beforeRequest: [addBasicAuthHeader],
    afterResponse: [prepareResponse, prepareHeaders]
});
export default function createRequestClient(...e) {
    let r = baseClient;
    for (const t of e ? ? []) r = r.extend(t);
    return (e, t) => r(e, t)
}