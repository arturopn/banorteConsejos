$(document).ready(function() {

	//fix html5 placeholder attribute for ie7 & ie8
	if (jQuery.browser.msie && jQuery.browser.version.substr(0,1) < 9) { // ie7&ie8
		jQuery('input[placeholder], textarea[placeholder]').each(function(){          
			var input = $(this);        
			
			$(input).val(input.attr('placeholder'));
							
			$(input).focus(function(){
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
			
			$(input).blur(function(){
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.val(input.attr('placeholder'));
				}
			});
		});
	}


	$('#new_user').submit(function(event){
		$('.required').each(function(){
			if(!$.trim($(this).val()))
			{
				$(this).addClass('emptyField');
				event.preventDefault();
			}
		});
	});

	$('.fotologin').click(function(){	$('div.fotobg').toggle(400); });

	$("#actreciente img").click(function(){ $('div.menuActividad').toggle(400); });

});