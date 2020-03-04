$(document).ready(function(){
    
    $(":input").on("keyup blur change",function(){
        myFunction();
    });

    function myFunction(){
        // 10% Operational Cost 
        var invoice_amount =  $("#invoice_amount").val();
        var Ten_P_OC =  $("#10pOC").val(invoice_amount*10/100); 
        //Total Meterial Expense + 10%
        var TME10 = $("#TME10").val();   
        var TME10 = parseFloat(TME10)+parseFloat(TME10*10/100); $("#TME10R").text(TME10);
        //Total Labor Expense + 30%
        var TLE10 = $("#TLE10").val();   
        var TLE10 = parseFloat(TLE10)+parseFloat(TLE10*30/100); $("#TLE10R").text(TLE10);
        var radioValue = $("input[name='exampleRadios']:checked").val();
        var radioValue = invoice_amount*radioValue/100; $("#CCS").text(radioValue);
        console.log(radioValue);
    }
});