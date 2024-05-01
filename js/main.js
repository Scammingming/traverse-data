// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let yesCounter = 0;
  let noCounter = 0;
  let maybeCounter = 0;
  for (let i = 0; i < surveyData.length; i++) {
    let curret = surveyData[i];
    if (curret.toLowerCase() == `yes`) yesCounter++;
    if (curret.toLowerCase() == `no`) noCounter++;
    if (curret.toLowerCase() == `maybe`) maybeCounter++;
  }

  outputEl.innerHTML = "Survey Data";

  console.log(surveyData);
  console.log(yesCounter);
  console.log(noCounter);
  console.log(maybeCounter);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let u18 = 0;
  let u35 = 0;
  let u65 = 0;
  let above65 = 0;
  for (let i = 0; i < ageData.length; i++) {
    let curretAge = ageData[i];
    if (curretAge < 18) u18++;
    if (curretAge <= 35) u35++;
    if (curretAge <= 65) u65++;
    if (curretAge > 65) above65++;
  }
  outputEl.innerHTML = "Age Data";
  console.log(ageData);
  console.log(u18);
  console.log(u35);
  console.log(u65);
  console.log(above65);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let even = 0;
  let odd = 0;
  for (let i = 0; i < numberData.length; i++) {
    let curretNum = numberData[i];
    if (curretNum % 2 == 0) even++;
    if (curretNum % 2 == 1 || curretNum % 2 == -1) odd++;
  }

  outputEl.innerHTML = "Number Data";
  console.log(numberData);
  console.log(even);
  console.log(odd);
}
