$(document).on('click', 'a.b', c);

function c(){
	$('header').toggleClass('on');
	
	return false;
}

$(function(){
});