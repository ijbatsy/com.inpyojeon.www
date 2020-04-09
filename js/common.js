$(document).on('click', 'a.b', c).on('click', 'nav a', l);

function c(){
	$('header').toggleClass('on');
	return false;
}

function l(){
	var d = $(this).data('link') + ".html";
	$('header').removeClass('on');
	$.ajax({ url: d, success: o });
	return false;
}

function o(result){
	$('article div.wrap').html(result);
	return false;
}