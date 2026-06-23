/*
 * @name: Emby Premiere Unlock
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

var objc;
try { objc = JSON.parse($response.body); } catch (e) {}

objc = {
    "cacheExpirationDays": 999,
    "message": "Device is valid",
    "resultCode": "GOOD"
};

$done({ body: JSON.stringify(objc) });
