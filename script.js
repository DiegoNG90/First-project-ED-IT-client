
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