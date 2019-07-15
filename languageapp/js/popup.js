// Connecting to LocalStorage
var score = localStorage.getItem("Total User Score");
var newScore = parseInt(score);

// Verfication of User Score
console.log("New Score: " + newScore);

// Progress bar integers
var maxLevel1 = 10;
var minLevel1 = 0;
var maxLevel2 = 20;
var minLevel2 = 10;
var maxLevel3 = 30;
var minLevel3 = 20;
var maxLevel4 = 50;
var minLevel4 = 30;
var maxLevel5 = 70;
var minLevel5 = 50;
var maxLevel6 = 90;
var minLevel6 = 70;
var maxLevel7 = 120;
var minLevel7 = 90;
var maxLevel8 = 150;
var minLevel8 = 120;
var maxLevel9 = 180;
var minLevel9 = 150;
var maxLevel10 = 200;
var minLevel10 = 180;


// LocalStorage is empty
if (localStorage.getItem("Total User Score") === null) {
    // First time user interaction with popup
    document.getElementById("levelText").innerHTML = "Level 1";
    document.getElementById("xpTotal").innerHTML = "Total XP : 0";
    document.getElementById("xpText").innerHTML = "10 XP required to Level Up";
    // Percentage of Progress Bar
    document.getElementsByClassName("progress-bar")[0].style.width = 0;

    // Change colour of the progress bar - White
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#FFD700";


};

// Level 1
if (newScore < maxLevel1) {
    var scoreLeft = maxLevel1 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel1 - minLevel1) - (maxLevel1 - newScore)) / (maxLevel1 - minLevel1)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 1";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel1;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    // Percentage of Progress Bar
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    // Display Percentage in the form of a String
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - White
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a5a5a5";
};

// Level 2
if (newScore >= minLevel2 && newScore < maxLevel2) {
    var scoreLeft = maxLevel2 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel2 - minLevel2) - (maxLevel2 - newScore)) / (maxLevel2 - minLevel2)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 2";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel2;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - White
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a5a5a5";

};

// Level 3
if (newScore >= minLevel3 && newScore < maxLevel3) {
    var scoreLeft = maxLevel3 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel3 - minLevel3) - (maxLevel3 - newScore)) / (maxLevel3 - minLevel3)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 3";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel3;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - White
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a5a5a5";
};

// Level 4
if (newScore >= minLevel4 && newScore < maxLevel4) {
    var scoreLeft = maxLevel4 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel4 - minLevel4) - (maxLevel4 - newScore)) / (maxLevel4 - minLevel4)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 4";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel4;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Blue
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#166ebb";
};

// Level 5
if (newScore >= minLevel5 && newScore < maxLevel5) {
    var scoreLeft = maxLevel5 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel5 - minLevel5) - (maxLevel5 - newScore)) / (maxLevel5 - minLevel5)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 5";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel5;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Blue
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#166ebb";
};

// Level 6
if (newScore >= minLevel6 && newScore < maxLevel6) {
    var scoreLeft = maxLevel6 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel6 - minLevel6) - (maxLevel6 - newScore)) / (maxLevel6 - minLevel6)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 6";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel6;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Blue
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#166ebb";
};

// Level 7
if (newScore >= minLevel7 && newScore < maxLevel7) {
    var scoreLeft = maxLevel7 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel7 - minLevel7) - (maxLevel7 - newScore)) / (maxLevel7 - minLevel7)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 7";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel7;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Purple
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a53ed1";
};

// Level 8
if (newScore >= minLevel8 && newScore < maxLevel8) {
    var scoreLeft = maxLevel8 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel8 - minLevel8) - (maxLevel8 - newScore)) / (maxLevel8 - minLevel7)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 8";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel8;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Purple
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a53ed1";
};

// Level 9
if (newScore >= minLevel9 && newScore < maxLevel9) {
    var scoreLeft = maxLevel9 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel9 - minLevel9) - (maxLevel9 - newScore)) / (maxLevel9 - minLevel9)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 9";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel9;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Purple
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a53ed1";
};

// Level 10
if (newScore >= minLevel10 && newScore < maxLevel10) {
    var scoreLeft = maxLevel10 - newScore;

    // Progress Bar Calculations
    var progressCalculation = ((((maxLevel10 - minLevel10) - (maxLevel10 - newScore)) / (maxLevel10 - minLevel10)) * 100).toFixed(0);
    progressCalculation.toString();
    var progressPercentage = progressCalculation + "%";

    // Reveal Level + XP Progress
    document.getElementById("levelText").innerHTML = "Level 10";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + maxLevel10;
    document.getElementById("xpText").innerHTML = scoreLeft + " XP required to Level Up";
    document.getElementsByClassName("progress-bar")[0].style.width = progressPercentage;
    document.getElementsByClassName("progress-bar")[0].innerHTML = progressPercentage;

    // Change colour of the progress bar - Purple
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#a53ed1";
};

// Max Level
if (newScore >= maxLevel10) {
    document.getElementById("levelText").innerHTML = "Max Level!";
    document.getElementById("xpTotal").innerHTML = "Total XP : " + newScore + " / " + newScore;
    document.getElementsByClassName("progress-bar")[0].style.width = "100%";
    document.getElementsByClassName("progress-bar")[0].innerHTML = "100%";
    document.getElementById("xpText").innerHTML ="Congratulations on reaching Max Level!";

    // Change colour of the progress bar - Gold
    document.getElementsByClassName("progress-bar")[0].style.backgroundColor = "#FFD700";
};




