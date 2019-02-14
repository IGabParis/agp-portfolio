$(document).ready(function(){
	var altura=$('.menu').offset().top;
	$(window).on('scroll',function(){
		if($(window).scrollTop()>altura){
			$('.menu').addClass('menuFixed');
		}else{
			$('.menu').removeClass('menuFixed');
		}
	});
});

	$('.modalShow1').on('click',function(){
		$('.modalContainer1').addClass('showModal1');
	});
	$('.closeModal1').on('click',function(){
		$('.modalContainer1').removeClass('showModal1');
	});
	$('.modalShow2').on('click',function(){
		$('.modalContainer2').addClass('showModal2');
	});
	$('.closeModal2').on('click',function(){
		$('.modalContainer2').removeClass('showModal2');
	});
	$('.modalShow3').on('click',function(){
		$('.modalContainer3').addClass('showModal3');
	});
	$('.closeModal3').on('click',function(){
		$('.modalContainer3').removeClass('showModal3');
	});$('.modalShow4').on('click',function(){
		$('.modalContainer4').addClass('showModal4');
	});
	$('.closeModal4').on('click',function(){
		$('.modalContainer4').removeClass('showModal4');
	});
	$('.modalShow5').on('click',function(){
		$('.modalContainer5').addClass('showModal5');
	});$('.closeModal5').on('click',function(){
		$('.modalContainer5').removeClass('showModal5');
	});

$(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
		if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
			var target=$(this.hash);
			target=target.length?target:$('[name='+this.hash.slice(5)+']');
			if(target.length){
				$('html, body').animate({scrollTop:target.offset().top},1000);
				return false;
			}
		}
	});
});

$(document).ready(function(){
	$('.up').click(function(){
		$('body, html').animate({
			scrollTop:'0px'
		},300);
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.up').slideDown(300);
		}else{	
			$('.up').slideUp(300);
		}
	});
});

$(document).ready(main);
var contador=1;
function main(){
	$('.menuBar').click(function(){
		if(contador==1){
			$('nav').animate({left:'0'});
			contador=0;
		} else{
			contador=1;
			$('nav').animate({left:'-100%'});
		}
	});
};