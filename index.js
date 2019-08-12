
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


//Function to get the list of documents in the docs folder and list them
function getDocs(){
  var fs = require('fs');
  var files = fs.readdirSync('docs');
  var list = document.getElementById("docList");
  for(var i = 0; i < files.length; i++){
    //Each folder needs to contain an info.json to interpret, with the file name, description and the entry file for that piece of documentation
    var json = JSON.parse(fs.readFileSync('docs/'+files[i]+'/info.json', 'utf8'));
    list.innerHTML += "<tr onclick=\"location.href='docs/"+files[i]+"/index.html'\" class='docListItem'><td><b>"+json.docName+"</b></td><td>"+json.description+"</td></tr>";
  }
}
