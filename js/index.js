$(".container .five_a").mouseover(function(){
	$(".five").css({
		background : "red"
	})

	$(".container .wrap")
	.show()	   
})
$(".container .five_a").mouseout(function(){
	$(".five").css({
		background : "white"
	})

	$(".container .wrap")
	.hide()	   
})

//-----------------banner图-----------------------
new Swiper(".swiper-container",{
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
            },
            pagination: {
                    el: '.swiper-pagination',
            },
            loop : true,
            autoplay:{
			        disableOnInteraction: true,
			        delay: 2000
            }

})
