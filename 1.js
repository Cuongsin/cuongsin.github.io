 $(function(){
 	$(window).scroll(function(){
 		if($('body').scrollTop() > 100){
	 		$('.navbar').addClass('nentrang')
 		}
 		else{
	 		$('.navbar').removeClass('nentrang')
 		}
 	})
 	$(".nav-item a").click(function(){
 		layhref = $(this).attr('href');
 		console.log(layhref);


 	  	$('body,html').animate({scrollTop:$(layhref).offset().top});
 	  	return false ; 
 	  
 	 })
})  
 