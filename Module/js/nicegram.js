/*
 * @name: Nicegram Premium Unlock (Full)
 * @desc: Unlock Nicegram Premium via all 3 endpoints - nicegram.cloud / restore-access / api.mbrx
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09 (auto-synced)
 */

const url = $request.url;
const isQX = typeof $task !== "undefined";
var ddm = JSON.parse($response.body);

if (/user\/info/.test(url)) {
  ddm.data.user = {
    ...ddm.data.user,
    "subscription": true,
    "store_subscription": true,
    "subscriptionPlus": true,
    "lifetime_subscription": true
  };
}

if (/unblock-feature\/get-settings/.test(url)) {
  ddm.premium = true;
}

if (/restoreAccess/.test(url)) {
  ddm["data"] = {"premiumAccess": true};
}

if (/transaction/.test(url)) {
  ddm.subscriptions = [{"premiumAccess": true}];
}


function finalizeResponse(content) {
  return { status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(content) };
}

$done(isQX ? finalizeResponse(ddm) : ddm);
