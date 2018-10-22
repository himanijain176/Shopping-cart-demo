
/*filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/
function logform() {
	var username = document.forms["loginForm"]["usrname"].value;
	var password = document.forms["loginForm"]["psw"].value;
	if (username == "Himani" && password=="admin") {
		console.log("Hello");
		window.location="adminpage.html";
	}
	else
	{
    alert("Invalid username or password");
    document.getElementById("errordisplay").innerHTML="Invalid username or password."
	}
}
var fetchData = function(){
	$.get("./Productdata.json",function(data,status){

		for(var d of data){
      console.log(d)
			var item = document.createElement('div');
			item.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-12");
			item.setAttribute("id","item"+d.id);
			document.getElementById('display-row').appendChild(item);
			
			var card = document.createElement('div');
			card.setAttribute('class','card');
			card.setAttribute('id','card'+d.id);
			document.getElementById("item"+d.id).appendChild(card);
			
			var image = document.createElement('img');
			image.setAttribute('class','card-img-top');
			image.setAttribute('src',d.image[0]);
			document.getElementById('card'+d.id).appendChild(image);

			var cBody = document.createElement('div');
			cBody.setAttribute('class','card-body');
			cBody.setAttribute('id','body'+d.id);
			document.getElementById('card'+d.id).appendChild(cBody);

			var nameField = document.createElement('h4');
			nameField.setAttribute('class','title');
			nameField.setAttribute('id','card-title'+d.id);
			document.getElementById('card'+d.id).appendChild(nameField);
			document.getElementById('card-title'+d.id).innerHTML = d.name;

			var price = document.createElement('p');
			price.setAttribute('class','price');
			price.setAttribute('id','card-price'+d.id);
			document.getElementById('card'+d.id).appendChild(price);
			document.getElementById('card-price'+d.id).innerHTML ="Rs. "+ d.price;

			var btn = document.createElement('button');
			btn.setAttribute('class','btn btn-success');
			btn.setAttribute('id','btnWish'+d.id);
			document.getElementById('card'+d.id).appendChild(btn);
			document.getElementById('btnWish'+d.id).innerHTML = "Add to Wishlist";

			var Addbtn = document.createElement('button');
			Addbtn.setAttribute('class','btn btn-primary');
			Addbtn.setAttribute('id','btnCart'+d.id);
			document.getElementById('card'+d.id).appendChild(Addbtn);
			document.getElementById('btnCart'+d.id).innerHTML = "Add to Cart";

		}
	});
}
