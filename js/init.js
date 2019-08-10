(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// side-nav init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

//check if user is offline
function online(){
  if(window.confirm("Connection retrieved. Click on OK to redirect to CampWays (Online)")){
    window.location.href = "../index.html";
  }
}

function offline(){
  if(window.confirm("Connection lost. Click on OK to redirect to CampWays (Offline).")){
    window.location.href = "./offline/offline.html";
  }
}

const status = window.navigator.onLine;
if(status){
  console.log("HHIHIHI");
  window.addEventListener('offline',offline);
}else{
  window.addEventListener('online',online);
}

// display map based on FROM and TO values
var fromOption = document.getElementById("from");
var toOption = document.getElementById("to");
var x = [];
function logic(){
    if((fromOption.value == "1" && toOption.value == "2") || (fromOption.value == "2" && toOption.value == "1")) {
      window.location.href="sameFloor.html?x=0";
    }
    else if((fromOption.value == "1" && toOption.value == "3") || (fromOption.value == "3" && toOption.value == "1")){
      window.location.href="sameFloor.html?x=1";
    }
    else if((fromOption.value == "2" && toOption.value == "3") || (fromOption.value == "3" && toOption.value == "2")){
      window.location.href="sameFloor.html?x=2";
    }
    else if((fromOption.value == "1" && toOption.value == "5") || (fromOption.value == "5" && toOption.value == "1")){
      window.location.href="multiFloor.html?x=3";
    }
    else if((fromOption.value == "2" && toOption.value == "5") || (fromOption.value == "5" && toOption.value == "2")){
      window.location.href="multiFloor.html?x=4";
    }
    else if((fromOption.value == "3" && toOption.value == "5") || (fromOption.value == "5" && toOption.value == "3")){
      window.location.href="multiFloor.html?x=5";
    }
    else if((fromOption.value == "4" && toOption.value == "5") || (fromOption.value == "5" && toOption.value == "4")){
      window.location.href="multiFloor.html?x=6";
    }
    else if((fromOption.value == "1" && toOption.value == "4") || (fromOption.value == "4" && toOption.value == "1")){
      window.location.href="multiFloor.html?x=7";
    }
    else if((fromOption.value == "2" && toOption.value == "4") || (fromOption.value == "4" && toOption.value == "2")){
      window.location.href="multiFloor.html?x=8";
    }
    else if((fromOption.value == "3" && toOption.value == "4") || (fromOption.value == "4" && toOption.value == "3")){
      window.location.href="multiFloor.html?x=9";
    }
    else{
      alert("Please select different FROM and TO locations");
    }
}

function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
      });
      return vars;
    }
    var number = getUrlVars()["x"];
    console.log(number);
    function displayImg(userChoice){  
      var output = document.getElementById("display_here");
      output.innerHTML = "";
      var maps = ["LIB_CAED.png","CCPLAB_LIB.png","CCPLAB_CAED.png"];
      var img = '<div class="row"><div class="col s12 m12 l10 offset-l1"><img src="maps/' + maps[userChoice] + '" style="width:100%;" align="center"></div></div>';
      output.innerHTML = img;
      console.log(img);
    }




var Card = function(title, rules, imgSrc){
	this.title = title;
	this.rules = rules;
	this.imgSrc = imgSrc;
}

var library = new Card('Library', '<li>Make sure to have your College ID card with you</li><li>Upon entering the Library, enter your USN in the Library database</li><li>Get your books entered in the records after getting it issued by the authorised personnel</li><li>Remember to return the books before the due date to avoid paying for late return charges</li>', 'library.png');
var caed = new Card('CAED Lab',"<li>Remove your footwear before entering the lab</li><li>Make sure that you're carrying your CAED Sketchbook</li><li>No usage of mobile phones inside the lab</li><li>Save your .dft files before closing the software</li>",'caed.jpg');
var ccp = new Card('CCP Lab',"<li>Remove your footwear before entering the lab</li><li>Make sure that you're carrying your CCP Record and observation notebook</li><li>No usage of mobile phones inside the lab</li><li>Save your .c files before closing the system</li><li>Switch off your systems before leaving the lab</li>",'ccp.png');
var chem = new Card('Chemistry Lab',"<li>Make sure that you're carrying your Chemistry Record and observation notebook</li><li>No usage of mobile phones inside the lab</li><li>Wash all the instruments and put them in place before leaving the lab</li><li>Please handle the instruments with care</li>",'chemlab.jpg');
var oldSem = new Card('Old Seminar Hall',"<li>Make sure to have your College ID card with you</li><li>Upon entering the seminar hall, kindly maintain the decorum in the hall</li><li>Please maintain silence until the event is commenced</li><li>Keep all the chairs in position after the event is over</li>",'oldSeminar.jpg');
var cardSentence = "Click on the <b><em>three-dots</em></b> to know about the Do's and Don'ts when entering the ";

function cardContents(data1, data2){
	document.getElementById("card-title1").innerHTML = data1.title + '<i class="material-icons right">more_vert</i>';
	document.getElementById("card-rules1").innerHTML = data1.rules;
	document.getElementById("card-dest1").innerHTML = cardSentence + data1.title;
	document.getElementById("card-img1").innerHTML = '<img class="activator" src="' + data1.imgSrc + '">';

	document.getElementById("card-title2").innerHTML = data2.title + '<i class="material-icons right">more_vert</i>';
	document.getElementById("card-rules2").innerHTML = data2.rules;
	document.getElementById("card-dest2").innerHTML = cardSentence + data2.title;
	document.getElementById("card-img2").innerHTML = '<img class="activator" src="' + data2.imgSrc + '">';
}


if(number == 0){
	cardContents(library, caed);
}else if(number == 1){
	cardContents(library, ccp);
}else if(number == 2){
	cardContents(caed, ccp);
}else if(number == 3){
	cardContents(library, oldSem);
}else if(number == 4){
	cardContents(caed, oldSem);
}else if(number == 5){
	cardContents(ccp, oldSem);
}else if(number == 6){
	cardContents(chem, oldSem);
}else if(number == 7){
	cardContents(library, chem);
}else if(number == 8){
	cardContents(caed, chem)
}else if(number == 9){
	cardContents(ccp, chem);
}

var redirectLink = "navEnd.html?x=" + number;
document.getElementById("redirect").setAttribute("href",redirectLink);

//document.getElementById("card-title").innerHTML = 'YOLO<i class="material-icons right">more_vert</i>';