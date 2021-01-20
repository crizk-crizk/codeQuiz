/* <th>
<td>Initials </td>
<td>Scores </td>
</th> */
//scores appear in scores page by getting the info from allData and displaying it.
function displayScores() {
    var allData = localStorage.getItem('allData') || "[]";
    allData = JSON.parse(allData);
    //reference table from scores.html
    var scoreTable = document.getElementById('scoreDisplay');
    scoreTable.innerHTML = JSON.stringify(allData);
}

displayScores(); 
