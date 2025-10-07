 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
var cursor=document .querySelector(".cursor");
document.addEventListener('mousemove',function(e) {
	cursor.style.left= e.clientX + 'px';
	cursor.style.top= e.clientY + 'px';
});	

$(document).ready(function(){

	// setTimeout(function(){
	// 	$(".loader").hide();
	// },800);
	$(".right").click(function(){
		$(this).toggleClass("right1")

$(".contact-detail").toggleClass("contact-detail1");
	});
	$("nav ul li:not(a.menu)").click(function(){
		$("nav ul li:not(a.menu) span").toggleClass("rotation");
	$("nav ul li  span.span1").toggleClass("rotation1");
$(".nav").slideToggle();
	});
$("nav ul li a.menu").hover(function(){
$(this).text("Open");
},function(){
$(this).text("Menu");
});
$("nav  ul li:not(.menu)").on({
click:function(){
	 $("nav ul li a.menu").text("close");
	},mouseleave:function(){
		$("nav ul li a.menu").text("Menu");
	}

});
 $(window).scroll(function(){
var x=$(window).scrollTop();
// 	if(x>40){
// 		$('.gallery').addClass('maintain');
// 		// $('.about').addClass('animate');
// 	}
// 	else{
// $('.gallery').removeClass('maintain');
// $('.about').removeClass('animate');
// }
		

    var height = $(document).height();

        var scrollPercent =
         Math.floor((x/ height)*118)
$('span.per').html(
	scrollPercent +'%');
$('.scroll_top img').toggleClass('scroll_topimg');
if(x>300 && x<3500){
$('.scroll_top img').addClass('scroll_topimg');	
}

else
{
	$('.scroll_top img').removeClass('scroll_topimg');
}
if(x>200){
$('.left_scroll').css('left','20px');
}
else{
	$('.left_scroll').css('left','-200px');
}
if(x>400){
	$('nav').slideUp();
	}
else{
	$('nav').slideDown();

	}

});	

// $('footer_social ul li').hover(function(){

// $('.cursor').css({
// 	'transform': 'scale(3)'
// });

// },function(){
// 	$('.cursor').css({
// 	'transform': 'scale(1)'
// });

// });
});