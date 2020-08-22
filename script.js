var employees = [
  {Name: "Marta", Lastname: "Sanchez", Age: 35},
  {Name: "Agustin", Lastname: "Hererara", Age: 40},
  {Name: "Diego", Lastname: "Rodriguez", Age: 22},
  {Name: "Manuel", Lastname: "Olivares", Age: 28}
];

let table = document.getElementById("tabla")
let headerTableData = Object.keys(employees[0]);


function generateTableHead(table) {      
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (var i = 0; i < headerTableData.length; i++) {
    let th = document.createElement('th')
    let text = document.createTextNode(headerTableData[i]);
    th.append(text)
    row.append(th)
  }
}
function generateTable(table,headerTableData){
  for (let element of headerTableData){
    let row = table.insertRow();
    for (key in element){
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

var validation = prompt("Which is your rol?");
if (validation === 'admin' || validation === 'resource') {
  var password = prompt("Enter your password: ");
  if (password === "1234") {
    var user = prompt("What's your user name?");
    document.getElementsByTagName('h1').item(0).innerHTML = "Hello " + user + ", welcome to our page.";
    generateTableHead(table);
    generateTable(table, employees);
    for (var i = 0; i < employees.length; i++) {
      console.log("The employee N° " + (i+1) + " name is " + employees[i][0] + " " + employees[i][1]+ ", and is " + employees[i][2] + " years old.");
    }
  } else {
    window.location.replace("error_page.html"); 
  }
}else {
  window.location.replace("error_page.html"); // this allows to take user to other page different from index.html
}
