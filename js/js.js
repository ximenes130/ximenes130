$(document).ready(function(){
	$('.header .content').css('height', rainbowlines.height);
	console.log(document.location.hash);

	if(document.location.hash != '')
		loadPCUrl(jQuery.Event("click"), document.location.hash);
	
	$(document).on('click', '.tab', loadPC);
});

var loadPC = function(e){
	loadPCUrl(e,$(this).find('a').attr('href'));
};
var loadPCUrl = function(e, url){
	$('.progress').css('display', 'block');
	e.preventDefault();
	$.ajax({
		type: "GET",
		url: url.slice(1) + '.html',
		data: { },
		success: function(data){
			$('#page-content').html(data);
			document.location.hash = url;
			$('.progress').css('display', 'none');
		},
		error: function(){
			$('#page-content').html('<h5>Error 404: Página não encontrada</h5>');
			document.location.hash = '';
			$('.progress').css('display', 'none');
		}
	});
};