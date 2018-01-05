var formula1words = ["Formula 1","F1","Hamilton","Vettel","Bottas","Raikkonen"
,"Ricciardo","Verstappen","Perez","Ocon","Sainz","Hulkenberg","Massa","Stroll",
"Grosjean","Magnussen","Alonso","Vandoorne","Palmer","Wherlein","Kvyat","Ericsson",
"Gasly","Giovinazzi","Hartley","Button","Resta","Williams","Mclaren","Mercedes",
"Red Bull","Force India","Renault","Toro Rosso","Ferrari","Honda","Sauber"];

function scanPage() {
  var pTags = document.getElementsByTagName("p");
  analyseTags(pTags);

  for (var i = 1; i < 6; i++) {
    var tag = "h" + i.toString();
    var hTags = document.getElementsByTagName(tag);
    analyseTags(hTags);

  }

  var aTags = document.getElementsByTagName("a");
  analyseTags(aTags);
  var spanTags = document.getElementsByTagName("span");
  analyseTags(spanTags);
}
function analyseTags(tags) {
  if (tags == undefined) {
    return;
  }

  for (var i = 0; i < tags.length; i++)
  {
    var text = (tags[i].innerHTML).toLowerCase();
    for (var j = 0; j < formula1words.length;j++) {
      if (text.indexOf(formula1words[j].toLowerCase()) != -1)
      {

        var color = tags[i].style.color;
        if (color != "") {
          var att = 'background-color:' + color;
        } else {
          var att = 'background-color: black;' + 'color: black';

        }
        tags[i].setAttribute('style',att );
          //tags[i].setAttribute('style',att2 );
          break;
      }
    }
  }
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "scan_page")) {
    scanPage();
  }

});
