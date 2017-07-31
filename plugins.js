

$(document).ready(function(){
    
    
   /* start anmiton when page start */ 
$(".hed").fadeToggle(1000,function(){
    $(".slid").fadeIn(1000,function(){
        $(".but").fadeIn(1000,function(){
            $(".ToUnd").fadeToggle(2000)
        })
    })
})
    
       /* End anmiton when page start */ 
    
    
       /*start  anmiton For Scroll To Hajwalh */ 
    
    
    $(".ToUnd").click(function(){
    $("html , body").animate({scrollTop : 662},2000);
    return false;
})

$(".myButton1").click(function(){
    $("html , body").animate({scrollTop : 662},1500);
    return false;
})
    
        
       /* End anmiton For Scroll To Hajwalh */

    
})


