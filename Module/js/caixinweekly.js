/*
 * @name: Caixin Weekly Premium Unlock
 * @desc: Unlock Caixin Weekly magazine membership until 2030
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

const articleApi = "//ipadcms.caixin.com/api/article/";
const articleTmp = "//ipadcms.caixin.com/tmp/articles/";
const myFreeV1 = "//ipadcms.caixin.com/power/myfree/";
const myFreeV3 = "//ipadcms.caixin.com/power/myfreev3/";

const url = $request.url;
let body = $response.body;

if (url.indexOf(articleApi) !== -1 || url.indexOf(articleTmp) !== -1) {
    body = body.replace(/"isfree":0/g, '"isfree":1');
}

if (url.indexOf(myFreeV1) !== -1) {
    body = '{"info":[{"type":2,"subscriptDescription":"通过财新通兑换码白嫖","uid":null,"endtime":1893427200,"magazineid":1000,"starttime":1656604800}],"list":[{"UID":null,"END_DT":1893427200,"subscriptDescription":"通过财新通兑换码白嫖","MAGAZINEID":1000,"START_DT":1656604800,"TYPE":2,"ID":null}]}';
}

if (url.indexOf(myFreeV3) !== -1) {
    body = '{"msg":"success","data":{"flag":true,"list":[{"goodsTypeId":20,"goodsCode":"TAG","permanent":0,"list":[{"endTime":"2030-01-01 00:00:00","startTime":"2022-07-01 00:00:00","status":1}]},{"goodsTypeId":11,"goodsCode":"QZSF","permanent":0,"list":[{"endTime":"2030-01-01 00:00:00","startTime":"2022-07-01 00:00:00","status":1}]}]},"code":0}';
}

console.log("✅ Caixin Weekly Premium unlocked until 2030");
$done({ body });
