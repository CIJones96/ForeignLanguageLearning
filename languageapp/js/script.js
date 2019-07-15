// Replace() + Highlighing
// Word "the" translated on webpages
chrome.storage.local.get(['hello'], function (result) {
    console.log("result.hello: " + result.hello);
    if (result.hello == "hola") {
        var html = document.body.innerHTML;
        html = html.replace(/hello/gmi, "<span style='background-color: yellow;'>hola</span>");
        document.body.innerHTML = html;
    }
});

chrome.storage.local.get(['the'], function (result) {
    console.log("result.the: " + result.the);
    if (result.the == "el") {
        var html = document.body.innerHTML;
        html = html.replace(/ the /gmi, "<span style='background-color: yellow;'> de </span>");
        document.body.innerHTML = html;  
    }
});


// Word "of" translated on webpages
chrome.storage.local.get(['of'], function (result) {
    console.log("result.of: " + result.of);
    if (result.of == "de") {
        var html = document.body.innerHTML;
        html = html.replace(/ of /gmi, "<span style='background-color: yellow;'> de </span>");
        document.body.innerHTML = html;  
    }
});



// Word "from" translated on webpages
chrome.storage.local.get(['from'], function (result) {
    console.log("result.from: " + result.from);
    if (result.from == "de") {
        var html = document.body.innerHTML;
        html = html.replace(/ from /gmi, "<span style='background-color: yellow;'> de </span>");
        document.body.innerHTML = html;
    }
});



// Word "very" translated on webpages
chrome.storage.local.get(['very'], function (result) {
    console.log("result.very: " + result.very);
    if (result.very == "muy") {
        var html = document.body.innerHTML;
        html = html.replace(/ very /gmi, "<span style='background-color: yellow;'> muy </span>");
        document.body.innerHTML = html;
    }
});



// Word "new" translated on webpages
chrome.storage.local.get(['new'], function (result) {
    console.log("result.new: " + result.new);
    if (result.new == "nuevo") {
        var html = document.body.innerHTML;
        html = html.replace(/ new /gmi, "<span style='background-color: yellow;'> nuevo </span>");
        document.body.innerHTML = html;
    }
});



// Word "less" translated on webpages
chrome.storage.local.get(['less'], function (result) {
    console.log("result.less: " + result.less);
    if (result.less == "menos") {
        var html = document.body.innerHTML;
        html = html.replace(/ less /gmi, "<span style='background-color: yellow;'> menos </span>");
        document.body.innerHTML = html;
    }
});



// Word "life" translated on webpages
chrome.storage.local.get(['life'], function (result) {
    console.log("result.life: " + result.life);
    if (result.life == "vida") {
        var html = document.body.innerHTML
        html = html.replace(/ life /gmi, "<span style='background-color: yellow;'> vida </span>");
        document.body.innerHTML = html;
    }
});



// Word "stay" translated on webpages
chrome.storage.local.get(['stay'], function (result) {
    console.log("result.stay: " + result.stay);
    if (result.stay == "quedar") {
        var html = document.body.innerHTML;
        html = html.replace(/ stay /gmi, "<span style='background-color: yellow;'> quedar </span>");
        document.body.innerHTML = html;
    }
});



// Word "now" translated on webpages
chrome.storage.local.get(['now'], function (result) {
    console.log("result.now: " + result.now);
    if (result.now == "ahora") {
        var html = document.body.innerHTML;
        html = html.replace(/ now /gmi, "<span style='background-color: yellow;'> ahora </span>");
        document.body.innerHTML = html;
    }
});



// Word "where" translated on webpages
chrome.storage.local.get(['where'], function (result) {
    console.log("result.where: " + result.where);
    if (result.where == "donde") {
        var html = document.body.innerHTML;
        html = html.replace(/ where /gmi, "<span style='background-color: yellow;'> donde </span>");
        document.body.innerHTML = html;
    }
});



// Word "our" translated on webpages
chrome.storage.local.get(['our'], function (result) {
    console.log("result.our: " + result.our);
    if (result.our == "nuestro") {
        var html = document.body.innerHTML;
        html = html.replace(/ our /gmi, "<span style='background-color: yellow;'> nuestro </span>");
        document.body.innerHTML = html;
    }
});



// Word "man" translated on webpages
chrome.storage.local.get(['man'], function (result) {
    console.log("result.man: " + result.man);
    if (result.man == "hombre") {
        var html = document.body.innerHTML;
        html = html.replace(/ man /gmi, "<span style='background-color: yellow;'> hombre </span>");
        document.body.innerHTML = html;
    }
});


console.log(localStorage);
console.log("This is still working!");

chrome.storage.local.get(function (result) {
    console.log(result)
})