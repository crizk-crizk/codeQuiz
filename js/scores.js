//scores appear in scores page by getting the info from allData and displaying it.
function displayScores() {
  var allData = localStorage.getItem("allData") || "[]";
  allData = JSON.parse(allData);
  //reference table from scores.html
  var scoreTable = document.getElementById("table-body");
  // create one string with all scores
  var bodyTableString = "";
  allData.forEach((element) => {
    bodyTableString += `<tr>
        <td>${element.initials}</td>
        <td>${element.score}</td>
        </tr>`;
  });
  scoreTable.innerHTML = bodyTableString;
}

document.getElementById("clear-scores").addEventListener("click", function () {
  localStorage.removeItem("allData");
  // refreshes scores page upon clearing high scores
  location.reload();
});

displayScores();
