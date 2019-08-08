
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

function getDocs(){
  var fs = require('fs');
  var files = fs.readdirSync('docs');
  var list = document.getElementById("docList");
  for(var i = 0; i < files.length; i++){
    list.innerHTML += "<li><a href='docs/"+files[i]+"/index.html'>"+files[i]+"</a></li>";
  }
}
