/*
 * @name: Spotify Premium JSON Handler
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze) - Based on app2smile
 * @homepage: https://github.com/ekaznyra/NguyenNgocAnhTu
 * @date: 2026-05-13
 */

(function () {
    const body = $response && $response.body;
    if (!body) {
        $done({});
        return;
    }

    const headers = ($request && $request.headers) || {};
    const ua = headers["user-agent"] || headers["User-Agent"] || "";
    const url = ($request && $request.url) || "";

    if (!ua.includes("Spotify")) {
        $done({});
        return;
    }

    let obj;
    try {
        obj = JSON.parse(body);
    } catch (e) {
        $done({});
        return;
    }

    try {
        if (url.includes("/artistview/")) {
            obj.creator_about = Object.assign({}, obj.creator_about, {
                monthly_listeners: 999999999,
                following_count: 999999999
            });
        }
        if (url.includes("/album-entity-view/")) {
            obj.album_metadata = Object.assign({}, obj.album_metadata, {
                is_premium_only: false
            });
        }
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        $done({});
    }
})();
