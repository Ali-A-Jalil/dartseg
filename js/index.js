$(document).ready(function() {
    $(".home").skitter();
  });
  
  var options = {
    strings: ['Welcome To ...', '<img class="testey" src="img/Darts Logo_Logo_Orange BG.png" alt="">  We Are Darts Woodn Furniture'],
    typeSpeed: 80,
    backSpeed: 50,
  };
  
  var typed = new Typed('.elementOne', options);


/* */

let featuresOffset = $("#about-us").offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > featuresOffset)
    {
        $("#navbary").css("backgroundColor","rgba(0,0,0,0.7)")
    }
    else
    {
        $("#navbary").css("backgroundColor","transparent")
    }
})


let aboutOffset = $("#about-us").offset().top;
$(window).scroll(function(){

    let wScroll =  $(window).scrollTop(); 
   if(wScroll > aboutOffset)   
    {
        $("#btnUp").fadeIn(500);

        $("#navbar").css("backgroundColor","rgba(0,0,0,0.7)");

    }
    else
    {
        $("#btnUp").fadeOut(500);

        
        $("#navbar").css("backgroundColor","transparent");
    }

})

$("#btnUp").click(function(){

    $("html,body").animate({scrollTop:'0'} , 3000)
})


$("#navbary a").click(function () {
    let aHref = $(this).attr("href");
    let listOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:listOffset} , 4000)
})





/*------ Contact us ----------*/
function toggleMsg() {
    var cont_msg = document.getElementById("cont-msg");
    if (cont_msg.style.display === "none") {
      cont_msg.style.display = "block";
    } else {
      cont_msg.style.display = "none";
    }
}
function closeForm() {
    document.getElementById("cont-msg").style.display = "none";
}
/*----------------------------*/
