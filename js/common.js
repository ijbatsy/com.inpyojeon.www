$(document).on('click', 'a.b', c).on('click', 'nav a', l);

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