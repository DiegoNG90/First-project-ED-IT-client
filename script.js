var employees = [
  {Name: "Marta", Last name: "Sanchez", Age: 35},
  {Name: "Agustin", Last name: "Hererara", Age: 40},
  {Name: "Diego", Last name: "Rodriguez", Age: 22},
  {Name: "Manuel", Last name: "Olivares", Age: 28}
  ];

let table = document.getElementById("tabla")
let headerTableData = Object.keys(empleados[0]);


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
  } else {
    window.location.replace("error_page.html"); 
  }
}else {
  window.location.replace("error_page.html"); // this allowss to take user to other page different from index.html
}
