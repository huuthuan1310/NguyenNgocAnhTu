/*
 * @name: WPS Office Premium Unlock
 * @desc: Unlock WPS Super VIP + WPS VIP + DaoKe VIP; bypass all privilege checks
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

const template = {
    result: "ok",
    privilege: [],
    total_cost: 0,
    level: 88,
    wealth: 0,
    exp: 0,
    vip: { has_ad: 0, enabled: [] },
    total_buy: 0
};

const privilegeIds = ["data_recover", "ocr", "pdf2doc", "pdf_merge", "pdf_sign", "pdf_split"];
const vipTiers = [
    ["超级会员", 40],   // Super VIP
    ["WPS会员", 20],    // WPS VIP
    ["稻壳会员", 12]    // DaoKe VIP
];

const timestamp = 1893456000; // 2030-01-01

const body = JSON.parse(JSON.stringify(template));
body.server_time = timestamp;
body.userid = timestamp;
body.vip.name = vipTiers[0][0];
body.vip.memberid = vipTiers[0][1];
body.vip.expire_time = timestamp;

privilegeIds.forEach((spid, i) => {
    body.privilege[i] = { times: 0, expire_time: timestamp, spid };
});

vipTiers.forEach((tier, i) => {
    body.vip.enabled[i] = { name: tier[0], expire_time: timestamp, memberid: tier[1] };
});

console.log(`✅ WPS Premium unlocked until 2030 — ${privilegeIds.length}+ privileges active`);
$done({ body: JSON.stringify(body) });
