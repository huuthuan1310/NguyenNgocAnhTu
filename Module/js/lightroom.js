/*
 * @name: Lightroom Premium Unlock
 * @desc: Patch entitlement + storage 1TB; giữ nguyên các field khác của response gốc
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

// Adobe prefix each response với "while(1);\n" để chống JSON hijacking — bỏ trước khi parse
let body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);

obj.entitlement.status = "subscriber";

obj.current_subs = {
    "product_id": "lightroom",
    "store": "adobe",
    "purchase_date": "2019-10-10T16:32:10.254954Z",
    "sao": {
        "inpkg_CCES": "0",
        "inpkg_CCLE": "1",
        "inpkg_CCSN": "0",
        "inpkg_CCSV": "0",
        "inpkg_LCCC": "0",
        "inpkg_LPES": "0",
        "inpkg_LRBRL": "0",
        "inpkg_LRMAC": "0",
        "inpkg_LRMC": "0",
        "inpkg_LRMP": "0",
        "inpkg_LRTB": "0",
        "inpkg_PHLT": "0",
        "inpkg_PHLT2": "0",
        "inpkg_PLES": "0",
        "storage_quota": "100"
    }
};

obj.entitlement.storage = {
    "used": 0,
    "limit": 1154487209165,
    "display_limit": 1099511627776,
    "warn": 992137445376
};

if (obj.avatar) {
    obj.avatar.placeholder = true;
}

body = JSON.stringify(obj);
$done({ body });
