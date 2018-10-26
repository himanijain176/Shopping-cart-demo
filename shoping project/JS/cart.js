var fetchcartData=function(){
    
var proddetail=localStorage.getItem('cart').split(',');
$.getJSON("./Productdata.json", function (result) {
    proddetail.forEach(function(item){
        for(var d of result)
        {
            if(item==d.id)
            {
                console.log(item);
                /*document.getElementById("hello").src=d.image[0];
                document.getElementById("itemname").innerHTML=""+d.name;
                document.getElementById("pricedetail").innerHTML=+d.price;
                document.getElementById("brandinfo").innerHTML=""+d.brand;*/
                var cartitem = document.createElement('div');
			    cartitem.setAttribute('class', 'col-lg-4 col-md-4 col-sm-6 col-xs-12');
			    cartitem.setAttribute('id', 'cartitem' + d.id);
			    document.getElementById('display-cart').appendChild(cartitem);

			

			var cartimage = document.createElement('img');
			cartimage.setAttribute('class', 'cartimg');
            cartimage.setAttribute('src', d.image[0]);
         
			document.getElementById('cartitem' + d.id).appendChild(image);

             var cartdata=document.createElement('table');
			cartdata.setAttribute('class', 'carttable');
            cartdata.setAttribute('id', 'carttable' + d.id);
            document.getElementById('cartitem' + d.id).appendChild(carttable);
            document.getElementById('carttable' + d.id).innerHTML="<tr><td>Name:</td><td>"+d.name+"</td></tr><tr><td>Price</td><td>"+d.price+"</td></tr><tr><td>Brand:</td><td>"+d.brand+"</td></tr>";
 
            
			

}
        }
    });
});
}
