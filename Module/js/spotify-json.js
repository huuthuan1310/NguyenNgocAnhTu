/*
 * @name: Spotify JSON URL Rewriter
 * @desc: Switch platform=iphone → platform=ipad for artistview / album-entity-view
 *        so the iPad layout is returned (shows full artist/album listings).
 * @source: https://github.com/app2smile/rules/blob/master/js/spotify-json.js
 * @type: http-request (URL rewrite only, does NOT read body)
 */
console.log(`spotify-json-2025.06.20`);
let url = $request.url;
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('无需处理');
}
$done({ url });
