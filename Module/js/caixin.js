/*
 * @name: Caixin Premium Unlock
 * @desc: Unlock Caixin article reading and audio playback limitations
 * @author: Nguyễn Ngọc Anh Tú (z3rokaze)
 * @homepage: https://github.com/z3rokaze/NguyenNgocAnhTu
 * @date: 2026-05-09
 */

const headers = $request.headers;
headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.3 deviceType/1";

const url = $request.url
    .replace(/uid=(\d+|)/g, "uid=8401805")
    .replace(/code=(\w+|)/g, "code=4DC3A37D00671789D41F17E77E46A89F")
    .replace(/device=(\w+|)/g, "device=699440d159f8b18216b678d3261c91afa3a8a444")
    .replace(/deviceType=(\d+|)/g, "deviceType=1");

if ($request.url.indexOf("validateAudioAuth") !== -1) {
    headers["appinfo"] = "75SU0e5TW70SSqRtJ/F6dN60qhTR/VmZTj9JQB4m3Uwq7sM2Mqb98OoOmr%2BJGjxMer45axESuqqrtjbo%2Bm5AYRzduI5eFvoYMcmS35ifWwfGXmPy6G3ZfPagiTWEn%2BM%2BPAUiArgEuqyBgwc3OMuvj5jYaliJKDZ6LuUieXHIFRTu/7a7DCFvIxZFQkeQjA4dDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWBz8n8d4JbNklAPNWS7sjK3umhjWq70j8MbjSCItzxFw88h49NsDs8fH47fALaZvQR63FgsF/Ab0HP46n/5Q0sDF2C9WTk/r6tIh/Rg%2BMTQZVSYimZ6XctG8QciSjRKgNs/xQUwYap6FnT2XT6QNtNzdutTVUUH43crJm51OyLzYC66vdKsBdZQAT5SRD9TLgA41tQIv/ixuxeSREnoZVBoVFTe2PIQ2IdmbE12Hjz8F38ZIgJbXNKzysRQwi7RRhrc9fGcRRcUQYFW0nCxMl/SkT42OtjQklw%3D";
}

$done({ url, headers });
