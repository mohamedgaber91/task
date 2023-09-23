function launchUrl(content){
(() => {


let ua = navigator.userAgent.toLowerCase().replace(/^mozilla\/\d\.\d\W/, "");

let mobiles = {

        "iphone": /iphone/,
        "ipad": /ipad|macintosh/,
        "android": /android/

    };
    desktops = {

        "windows": /win/,
        "mac": /macintosh/,
        "linux": /linux/

    };

let os = Object.keys(mobiles)
.find(os => mobiles[os].test(ua) && navigator.maxTouchPoints >= 1)
||
Object.keys(desktops)
.find(os => desktops[os].test(ua));

let browserTest = ua.match(/(\w+)\/(\d+\.\d+(?:\.\d+)?(?:\.\d+)?)/g),
    browserOffset = browserTest.length && (browserTest.length > 2 && !(/^(ver|cri|gec)/.test(browserTest[1])) ? 1 : 0),
    browserResult = browserTest.length && browserTest[browserTest.length - 1 - browserOffset].split("/"),
    browser = browserResult && browserResult[0],
    version = browserResult && browserResult[1];
    console.log('https://wa.me/+201103789762?text='+content);
if(os=="android"||os=="ipad"||os=="iphone"){window.open('https://wa.me/+201103789762?text='+content, "_blank");}
else{window.open('https://wa.me/+201103789762?text='+content, "_blank");}
})();
window.open(content, "_blank");
}