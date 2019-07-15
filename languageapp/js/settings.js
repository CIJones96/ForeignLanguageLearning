$(document).ready(function () {

    const btnReset = document.getElementById("btnReset");

    btnReset.onclick = function () {
        console.log("Local Storage has been deleted!");
        window.alert("User login has now been put back to factory settings.");
        localStorage.clear();
        location.reload();
        console.log(localStorage);
    };

    darkMode.onclick = function () {
        console.log("Dark Mode Ready");
        window.alert("Light Mode will be released in Q4 2019. Stay tuned.");
    };
});