$(".img-item").click(function(e){

    let imgSrc = $(this).attr('src');
    $("#mainImage").attr("src" , imgSrc);   
})




