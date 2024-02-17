import btoa from "btoa-lite";
const addBasicAuthHeader = a => {
    if (a.username || a.password) {
        const e = a.username || "",
            t = a.password || "";
        return {
            headers: {
                Authorization: `Basic ${btoa(`${e}:${t}`)}`
            }
        }
    }
};
export default addBasicAuthHeader;