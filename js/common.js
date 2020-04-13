$(document).on('click', 'a.b', c).on('click', 'nav a', l).on('click', '.swiper-slide a', b).on('click', '.closelb', cl);

function c(){
	$('header').toggleClass('on');
}

function l(){
	var d = $(this).data('link') + ".html";
	$('header').removeClass('on');
	$.ajax({ url: d, success: o });
}

function o(result){
	$('article div.wrap').html(result);
}

function b(){
	var img = $(this).parents('.swiper-wrapper').find('img');
	var ind = $(this).parents('.swiper-slide').index();
	var clone = '';
	var cont = '';
	$('.lb .swiper-wrapper').html('');
	for(i=0; i<img.length; i++){
		clone += '<div class="swiper-slide">'+'<img src="'+img.eq(i).attr('src')+'"></div>';
	}
	cont = '<div class="swiper-container sub"><div class="swiper-wrapper">'+clone+'</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div><a href="javascript:;" class="closelb"><span>Close Lightbox</span></a>'
	$('.lb').html(cont);
	$('.dim').css('display','block');
	var swipersub = new Swiper('.swiper-container.sub', {
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		initialSlide: ind
	});
}

function cl(){
	$('.lb').html('');
	$('.dim').css('display','none');
}