$(document).ready(function(){
	$('.header .content').css('height', rainbowlines.height);
	
	$(document).on('click', '.tab', (function(e){
		var url = $(this).find('a').attr('href');
		e.preventDefault();
		$.ajax({
			type: "GET",
			url: url,
			data: { },
			success: function(data){
				$('#page-content').html(data);
				$('.progress').css('display', 'none');
			},
			error: function(){
				$('#page-content').html('<h5>Error 404: Página não encontrada</h5>');
				$('.progress').css('display', 'none');
			}
		});
	}));
});