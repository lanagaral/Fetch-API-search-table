
function loadTable(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => printTable(json["products"]));
}
function printTable(data) {
    const table = document.querySelector("table");
    const tblHead = table.querySelector("thead");
    const tblBody = table.querySelector('tbody');
    tblHead.innerHTML = "<tr></tr>";
    tblBody.innerHTML = "";
    const headers = ["ID", "TITLE", "DESCRIPTION"]
    for (const headtxt of headers) {
        const headEle = document.createElement("th");
        headEle.textContent = headtxt;
        tblHead.querySelector("tr").appendChild(headEle);
    }
    for (const row of data) {
        const rowEle = document.createElement("tr");
        const rows = ["id", "title", "description"]
        for (const celltxt of rows) {
            const cellEle = document.createElement("td");
            cellEle.textContent = row[celltxt];
            rowEle.appendChild(cellEle);
        }
        tblBody.appendChild(rowEle);
    }
}

loadTable("https://dummyjson.com/products");
function search() {
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("nameInput");
filter = input.value.toUpperCase();
table = document.querySelector("table");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
td = tr[i].getElementsByTagName("td")[0];
if (td) {
txtValue = td.textContent || td.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}
}
}
