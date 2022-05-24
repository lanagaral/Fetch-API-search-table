async function loadTable(url,table){
const tblHead = table.querySelector("thead");
const tblBody = table.querySelector('tbody');
const response = await fetch(url);

const { headers, rows} = await response.json();

tblHead.innerHTML = "<tr></tr>";
tblBody.innerHTML = "";

for(const headtxt of headers){
const headEle = document.createElement("th");
headEle.textContent = headtxt;
tblHead.querySelector("tr").appendChild(headEle);
}

for(const row of rows){
const rowEle = document.createElement("tr");

for (const celltxt of row){
const cellEle = document.createElement("td");
cellEle.textContent = celltxt;
rowEle.appendChild(cellEle);
}

tblBody.appendChild(rowEle);
}

}

loadTable("./data.json", document.querySelector("table"));

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
