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

$(".btnacerca").click(function(){
texto = $(this).text();
$("span.tituloacerca").text(texto);
})

$(".temporaldrop").toggle(function(){
   $(this).animate({height:"240px"},1000);
 
}, function(){ $(this).animate({height:"31px"},1000);});

$(".clickhelp").click(function(){$("div.help").show();});
$(".cerrarhelp").click(function(){$("div.help").hide();})

$("textarea").focus(function(){
	 $(".participa").animate({height:"220px"},1000), 

	 $(".participaBottom").show(1000);
	 $(".botonpublicar").hide(400);

	});

$("textarea").blur(function(){
	 $(".participa").animate({height:"24px"},1000),
	  $(".participaBottom").hide(1000);
      $(".botonpublicar").show(400);
	});
});

$(".chatButton").toggle(function(){
	$("div.contactos").show(400);
}, function(){
	$("div.contactos").hide(400);
})

$(".contacto").click(function(){
 nombreDeContacto = $("h2",this).text();
 foto = $("img",this).attr("src");
 $(".ventanachat h2").text(nombreDeContacto);
 $(".ventanachat img").attr("src",foto);
 $(".ventanachat").show(400);
});

$(".cerrarchat").click(function(){
   $(".ventanachat").hide(400);
});

