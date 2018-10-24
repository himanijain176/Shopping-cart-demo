var fetchcartData=function(){
var proddetail=localStorage.getItem('cart').split(',');
$.getJSON("./Productdata.json", function (result) {
    proddetail.forEach(function(item){
        for(var d of result){
            if(item==d.id)
            {
                /*console.log(d.id);
                document.getElementById("itemname").innerHTML=""+d.name;
                document.getElementById("pricedetail").innerHTML=+d.price;
                document.getElementById("brandinfo").innerHTML=""+d.brand;
                */
            var item = document.createElement('div');
			item.setAttribute("class", 'item');
			item.setAttribute("id", 'item' + d.id);
			document.getElementById('displaydata').appendChild(item);

	

			var image = document.createElement('img');
			
			image.setAttribute('src', d.image[0]);
			document.getElementById('item' + d.id).appendChild(src);

		

			var nameField = document.createElement('h4');
			nameField.setAttribute('class', 'title');
			nameField.setAttribute('id', 'cart-title' + d.id);
			document.getElementById('container' + d.id).appendChild(nameField);
			document.getElementById('cart-title' + d.id).innerHTML = d.name;

			var price = document.createElement('p');
			price.setAttribute('class', 'price');
			price.setAttribute('id', 'cart-price' + d.id);
			document.getElementById('cart' + d.id).appendChild(cart-price);
			document.getElementById('cart-price' + d.id).innerHTML = "Rs. " + d.price;

			var btn = document.createElement('button');
			btn.setAttribute('class', 'btn btn-info');
			btn.setAttribute('id', 'btncheck' + d.id);
			document.getElementById('container' + d.id).appendChild(btncheck);
			document.getElementById('btncheck' + d.id).innerHTML = "checkout";

			var Addbtn = document.createElement('button');
			Addbtn.setAttribute('class', 'btn btn-danger');
			Addbtn.setAttribute('id', 'btnremove' + d.id);
			
			document.getElementById('card' + d.id).appendChild(btnremove);
			document.getElementById('btnremove' + d.id).innerHTML = "delete";
            }
        }
      });
{
        
}

})
};