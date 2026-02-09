function cal()
{
    var qty1=document.getElementById("qty1").value;
    var price1=document.getElementById( "price1").value;
    var total1=qty1*price1;
     document.getElementById("total1").value=total1;

  var qty2=document.getElementById("qty2").value;
    var price2=document.getElementById( "price2").value;
    var total2=qty2*price2;
    document.getElementById("total2").value=total2

    var qty3=document.getElementById("qty3").value;
    var price3=document.getElementById( "price3").value;
    var total3=qty3*price3;
    document.getElementById("total3").value= total3;

  var qty4=document.getElementById("qty4").value;
    var price4=document.getElementById( "price4").value;
    var total4=qty4*price4;
    document.getElementById("total4").value= total4;

  var qty5=document.getElementById("qty5").value;
    var price5=document.getElementById( "price5").value;
    var total5=qty5*price5;
   document.getElementById("total5").value = total5;

   var grandtotal=(total1)+(total2)+(total3)+(total4)+(total5);
   document.getElementById("grandtotal").value =grandtotal;
    
   var discount=grandtotal*0.1;
   document.getElementById("discount").value=discount;

  
  
}
  cal()

