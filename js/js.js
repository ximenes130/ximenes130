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
				$('#targetElement').html(data);
			}
		});
	}));
});