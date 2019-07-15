$(document).ready(function () {

    const inpKey = document.getElementById("inpKey");
    const inpValue = document.getElementById("inpValue");
    const btnInsert = document.getElementById("btnInsert");
    const lsOutput = document.getElementById("lsOutput");
    const lsOutput1 = document.getElementById("lsOutput1");
    const allWords = document.getElementById("allWords");
    const allWords1 = document.getElementById("allWords1");

    if (localStorage.getItem("Total User Score") === null) {
        localStorage.setItem("Total User Score", "0");
    }


    $.getJSON("/js/list.json", function (dataList) {

        // User clicking button function
        btnInsert.onclick = function () {
            // User inputs + LocalStorage
            const key = inpKey.value;
            const value = inpValue.value;
            var score = localStorage.getItem("Total User Score");
            var newScore = parseInt(score) + 1;
            localStorage.setItem("Total User Score", newScore);

            // Console logs for validations
            console.log("Key: " + key);
            console.log("Value: " + value);
            console.log("Score: " + score);
            console.log("New Score: " + newScore);

            var dataWord = dataList[key];
            console.log("dataWord: " + dataWord);

            // Adding Vocabulary List to the Chrome Local Storage
            if (key == "hello") {
                chrome.storage.local.set({ "hello": value });
            } else if (key == "the") {
                chrome.storage.local.set({ "the": value });
            } else if (key == "of") {
                chrome.storage.local.set({ "of": value });
            } else if (key == "from") {
                chrome.storage.local.set({ "from": value });
            } else if (key == "very") {
                chrome.storage.local.set({ "very": value });
            } else if (key == "new") {
                chrome.storage.local.set({ "new": value });
            } else if (key == "less") {
                chrome.storage.local.set({ "less": value });
            } else if (key == "life") {
                chrome.storage.local.set({ "life": value });
            } else if (key == "stay") {
                chrome.storage.local.set({ "stay": value });
            } else if (key == "now") {
                chrome.storage.local.set({ "now": value });
            } else if (key == "where") {
                chrome.storage.local.set({ "where": value });
            } else if (key == "our") {
                chrome.storage.local.set({ "our": value });
            } else if (key == "man") {
                chrome.storage.local.set({ "man": value });
            } else if (key == "thing") {
                chrome.storage.local.set({ "thing": value });
            }

            

            // Vocabulary List validation for undefined variables
            if (dataWord == undefined) {
                window.alert("Incorrect Spanish Input - Please try again!");
                console.log("Not on the Verification Vocabulary List - Try again!");

                // Begin incrementation of localStorage + Validation
            } else if ((key && value) && (dataWord == value)) {
                localStorage.setItem(key, value);
                location.reload();
                window.alert("Successfully added values to the Vocabulary List!");
                // No user input
            } else {
                window.alert("Please enter correct values for both English and Spanish");
            }
        };

        if (localStorage.getItem("hello") === null) {
            allWords.innerHTML += `hello<br />`
            allWords1.innerHTML += `hola<br />`
        }

        if (localStorage.getItem("the") === null) {
            allWords.innerHTML += `the<br />`
            allWords1.innerHTML += `el<br />`
        }

        if (localStorage.getItem("of") === null) {
            allWords.innerHTML += `of<br />`
            allWords1.innerHTML += `de<br />`
        }

        if (localStorage.getItem("from") === null) {
            allWords.innerHTML += `from<br />`
            allWords1.innerHTML += `de<br />`
        }

        if (localStorage.getItem("very") === null) {
            allWords.innerHTML += `very<br />`
            allWords1.innerHTML += `muy<br />`
        }

        if (localStorage.getItem("new") === null) {
            allWords.innerHTML += `new<br />`
            allWords1.innerHTML += `nuevo<br />`
        }

        if (localStorage.getItem("less") === null) {
            allWords.innerHTML += `less<br />`
            allWords1.innerHTML += `life<br />`
        }

        if (localStorage.getItem("life") === null) {
            allWords.innerHTML += `life<br />`
            allWords1.innerHTML += `vida<br />`
        }

        if (localStorage.getItem("stay") === null) {
            allWords.innerHTML += `stay<br />`
            allWords1.innerHTML += `quedar<br />`
        }

        if (localStorage.getItem("now") === null) {
            allWords.innerHTML += `now<br />`
            allWords1.innerHTML += `ahora<br />`
        }

        if (localStorage.getItem("where") === null) {
            allWords.innerHTML += `where<br />`
            allWords1.innerHTML += `donde<br />`
        }

        if (localStorage.getItem("our") === null) {
            allWords.innerHTML += `our<br />`
            allWords1.innerHTML += `nuestro<br />`
        }

        if (localStorage.getItem("man") === null) {
            allWords.innerHTML += `man<br />`
            allWords1.innerHTML += `hombre<br />`
        }

        // Adding variable to localStorage + Points
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            if (key != "Total User Score") {
                lsOutput.innerHTML += `${key}<br />`
                lsOutput1.innerHTML += `${value}<br />`
            }
        }

        

        console.log(localStorage);

        chrome.storage.local.get(function (result) {
            console.log(result)
        })
    });
});