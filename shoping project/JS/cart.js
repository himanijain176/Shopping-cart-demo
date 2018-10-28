/*Code to Add to cart and delete from Cart*/

var fetchcartData=function(){
    var totalprice=0;
    var proddetail=localStorage.getItem('cart').split(',');
$.getJSON("./Productdata.json", function (result) {
    
        for(var d of result)
        {
            for(var item of proddetail){
            if(item==d.id)
            {
                console.log(item);
                var cartItem = document.createElement('div');
                    cartItem.setAttribute("class", "cartItem");
                    cartItem.setAttribute("id", "cartItem" + d.id);
                    document.getElementById('display-cart').appendChild(cartItem);
                    
                    var img = document.createElement('img');
                    img.setAttribute('id', 'cartimg' + d.id);
                    img.setAttribute('src', d.image[0]);
                    document.getElementById('cartItem' + d.id).appendChild(img);

                    var itemDesc = document.createElement('div');
                    itemDesc.setAttribute("class", "itemDesc");
                    itemDesc.setAttribute("id", "items" + d.id);
                    document.getElementById('cartItem' + d.id).appendChild(itemDesc);

                    var cartab = document.createElement('table');
                    cartab.setAttribute("id", "cartab" + d.id);
                    document.getElementById('items' + d.id).appendChild(cartab);

                    document.getElementById('cartab' + d.id).innerHTML = '<tr><th><h3 id="name' + d.id + '">Name :</h3></th></tr ><tr><th><h3 id="price' + d.id + '">Price :</h3></th></tr><tr><th><h3 id="brand' + d.id + '">Brand :</h3></th></tr><tr><td><input type="button" class="btn btn-danger remove" value="delete" onClick="DeleteProduct('+d.id+')" id = '+d.id+'/></td><td><input type="button" class="btn btn-success success" value="Buy Now" /></td></tr>'
                    document.getElementById('name'+d.id).innerHTML = "Name : "+d.name;
                    document.getElementById('price'+d.id).innerHTML = "Price : "+d.price;
                    document.getElementById('brand'+d.id).innerHTML = "Brand : "+d.brand;
                    totalprice+=eval(d.price);
                /*document.getElementById("hello").src=d.image[0];
                document.getElementById("itemname").innerHTML=""+d.name;
                document.getElementById("pricedetail").innerHTML=+d.price;
                document.getElementById("brandinfo").innerHTML=""+d.brand;*/
             
			

}

        }
    }
var pricedis=document.createElement('div');

document.getElementById('totalPrice').innerHTML="Total Price : "+totalprice;
});
}
function DeleteProduct(item)
{
    console.log(item);
    //var pid=item.slice(-2);
    //console.log(pid);
    var itemdata="0"+item;
    console.log(itemdata);
    var newprod=[];
   
        var proddetail=localStorage.getItem('cart').split(',');
       
        console.log(proddetail);
             newprod=proddetail.remove(itemdata);
            console.log(newprod);
            

    


    //fetchcartData();

    }
