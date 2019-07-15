var contextMenuItem = {
    "id": "answerPopup",
    "title": "Linguify",
    "contexts": ["selection"]
};

chrome.runtime.onInstalled.addListener(function () {
    alert('\nThank you for installing Linguify, A learning-while-browsing experience!\n\nTo get you started, you will need to add Spanish words with the English equivalents onto your own personal Vocabulary List.\n\nYou are about to be redirected to our tutorial page for all details!\n\n');
    chrome.tabs.create({
        url: '/help.html',
        active: true
    });
    return false;
});



chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function () {

    // if this word is in localStorage
    if (localStorage.getItem("hello") === "hola") {
        var word1 = "hello";
    }

    if (localStorage.getItem("the") === "el") {
        var word2 = "the";
    }

    if (localStorage.getItem("of") === "de") {
        var word3 = "of";
    }

    if (localStorage.getItem("from") === "de") {
        var word4 = "from";
    }

    if (localStorage.getItem("very") === "muy") {
        var word5 = "very";
    }

    if (localStorage.getItem("to find") === "encontrar") {
        var word6 = "to find";
    }

    if (localStorage.getItem("new") === "nuevo") {
        var word7 = "new";
    }

    if (localStorage.getItem("less") === "menos") {
        var word8 = "less";
    }

    if (localStorage.getItem("to follow") === "seguir") {
        var word9 = "to follow";
    }

    if (localStorage.getItem("life") === "vida") {
        var word10 = "life";
    }

    if (localStorage.getItem("stay") === "quedar") {
        var word11 = "stay";
    }

    if (localStorage.getItem("now") === "ahora") {
        var word12 = "now";
    }

    if (localStorage.getItem("where") === "donde") {
        var word13 = "where";
    }

    if (localStorage.getItem("our") === "nuestro") {
        var word14 = "our";
    }

    if (localStorage.getItem("man") === "hombre") {
        var word15 = "man";
    }

    // add word to chrome.storage.local 
    // repeat for all words in json file.

    var score = localStorage.getItem("Total User Score");
    var upScore = parseInt(score) + 1;
    var downScore = parseInt(score) - 1;

    var englishWord = prompt("Translate the Spanish Words", "Enter English Words...");

    if (englishWord === word1 || englishWord === word2 || englishWord === word3 || englishWord === word4 || englishWord === word5 || englishWord === word6
        || englishWord === word7 || englishWord === word8 || englishWord === word9 || englishWord === word10 || englishWord === word11
        || englishWord === word12 || englishWord === word13 || englishWord === word14 || englishWord === word15 || englishWord === word16) {
        window.alert("Correct Word! Well Done. 1XP for correct answer! You now have " + upScore + " XP");

        // Adding XP for correct input
        localStorage.setItem("Total User Score", upScore);

    } else if (englishWord === null) {

    } else {
        window.alert("Incorrect Word, Keep trying! 1XP deduced for incorrect answer. You now have " + downScore + " XP");

        // Deducting XP for incorrect input
        localStorage.setItem("Total User Score", downScore);
    };
});