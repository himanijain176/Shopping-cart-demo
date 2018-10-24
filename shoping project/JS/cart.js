var fetchcartData=function(){
var proddetail=localStorage.getItem('cart').split(',');
$.getJSON("./Productdata.json", function (result) {
    proddetail.forEach(function(item){
        for(var d of result)
        {
            if(item==d.id)
            {
                console.log(d.id);
                document.getElementById("hello").src=d.image[0];
                document.getElementById("itemname").innerHTML=""+d.name;
                document.getElementById("pricedetail").innerHTML=+d.price;
                document.getElementById("brandinfo").innerHTML=""+d.brand;
             }
    
        }

});
});
}
function deletedata(item)
{
       localStorage.removeItem('cart',item);
}
