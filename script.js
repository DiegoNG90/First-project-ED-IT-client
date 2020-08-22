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
      console.log("The employee N° " + (i+1) + " name is " + employees[i].Name + " " + employees[i].Lastname+ ", and is " + employees[i].Lastname + " years old.");
    }
  } else {
    window.location.replace("error_page.html"); 
  }
}else {
  window.location.replace("error_page.html"); // this allows to take user to other page different from index.html
}

var formValues = ['Nombre','Apellido','Edad'];
function createForm(){
    let formulario = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        const parrafo = document.createElement('p');
        formulario.appendChild(parrafo);
        const entrada = document.createElement('input');
        formulario.appendChild(entrada);
        var enter = document.createElement('br');
        formulario.appendChild(enter);
        parrafo.innerText = `${formValues[i]}`;  
        entrada.value = `${formValues[i]}`; 
    }
  
    const boton = document.createElement('button');
    boton.innerHTML = "Load employee";
    boton.style = "margin-top: 25PX";
    formulario.appendChild(boton);
    document.body.appendChild(formulario);
}

createForm();
