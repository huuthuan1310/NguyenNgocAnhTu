/*
 * @name: LiuLiShuo Reading (流利说·阅读) Premium Unlock
 * @desc: Unlock LiuLiShuo Reading VIP — 999 days + audio/reading privileges
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

const url = $request.url;
let body = $response.body;

if (url.indexOf("/api/v2/member/subscription") !== -1) {
    body = JSON.stringify({
        expiredAt: 1893456000,    // 2030-01-01
        remainDays: 999,
        active: true,
        startedAt: 1642809855
    });
    $done({ body });
} else if (url.indexOf("/api/v2/user_goods_subscriptions/overall") !== -1) {
    body = JSON.stringify({
        items: [{
            startedAt: 1642284416,
            category: 4,
            status: 2,
            expiredAt: 1642809855,
            goodsTitle: "member",
            remainDays: 999,
            goodsUid: "XnV1EW",
            firstStartedAt: 1893456000
        }]
    });
    $done({ body });
} else {
    $done();
}
