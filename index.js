
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
    list.innerHTML += "<tr onclick=\"location.href='docs/"+files[i]+"/index.html'\" class='docListItem'><td style=\"width:20%\"><b>"+json.docName+"</b></td><td>"+json.description+"</td></tr>";
  }
}

function fillNav(){
  var fs = require('fs');
  var json = JSON.parse(fs.readFileSync('map.json','utf8'));
  for(var i = 0; i < json.pages.length; i++){
    var catagory = json.pages[i].catagory;
    Document.getElementById(catagory+"List").innerHTML += "<li class='subList' onclick=href\"location.href='"+json.pages[i].path+"'\">"+json.pages[i].name+"</li>";
  }
}


function mkdown(){
    var MarkdownIt = require('markdown-it');
    const fs = require('fs')
    var content = "";
    fs.readFile('docs/MKDocs/document.md', (err, data) => {
    if (err) throw err;
      content = data.toString();
      console.log(content);
      md = new MarkdownIt();
      var result = md.render(content);
      document.getElementById("mkdown").innerHTML = result;
    })

}
