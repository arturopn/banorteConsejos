$(document).ready(function() {

	$('.camara').click(function(){
		window.location.href = 'http:google.com';
	}); 

	$('.eventos').click(function(){
		window.location.href = 'http:google.com';
	}); 

	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
		$("html").removeClass("dk_fouc");
		$(".drop").removeClass("drop");
	}

	$(".dk_toggle").click(function(){
		$(".dk_container").removeClass("dk_open");
	});


/*$(".dk_toggle").click(function(){
alert("hola");
});*/

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
			if(!$.trim($(this).val())){
				$(this).addClass('emptyField');
				event.preventDefault();
			}
		});
	});

	$('.fotologin').click(function(){	$('div.fotobg').toggle(400); });

	$(".menu3lines").click(function(){ 
		$('div.actividadopen').show(400); 
		$(".nicescroll-rails").css("z-index","690");
	});

	$(".cuadroinside").click(function(){ 
		$('div.actividadopen').hide(400);
		$(".nicescroll-rails").css("z-index","701"); 
	});

	$(".btnacerca").click(function(){
		texto = $(this).text();
		$("span.tituloacerca").text(texto);
	});

	$(".dropclick").toggle(function(){
		$(".temporaldrop").animate({height:"260px"},1000);
		$("#ascrail2000").show(1000);
		$("#ascrail2000").css("z-index","999");
		$(".nicescroll-rails").css("z-index","690");
	}, function(){ 
		$(".temporaldrop").animate({height:"31px"},1000);
		$(".nicescroll-rails").css("z-index","701")
	});

	$(".clickhelp").click(function(){$("div.help").show();});
	$(".cerrarhelp").click(function(){$("div.help").hide();})

	$(".coment").click(function(){
		$('.participa').animate({height:"230px"},1000); 

		$(".participaBottom").show(1000);
		$(".botonpublicar").hide(400);

		$(".nicescroll-rails").css("z-index","690");
	});

		
	



	/*$(".chatButton").toggle(function(){
		$("div.contactos").show(400);
	}, function(){
		$("div.contactos").hide(400);
	});*/
	$(".chatButton").click(function(){
		$("div.contactos").toggle();
	});
	$(".contacto").click(function(){
		nombreDeContacto = $("h2",this).text();
		consejoNombre = $("p", this).text();
		foto = $("img",this).attr("src");
		$('#ventanas').append('<div class="ventanachat relative"><div class="cerrarchat"></div><div class="floatL width90"><h2>' + nombreDeContacto +'</h2><p>' + consejoNombre +'</p></div><div class="floatL tiempochat"><span>Ver más</span></div><img class="floatL foto-contacto" src="' + foto +'"><textarea class="conversacion"></textarea><textarea class="comment"></textarea></div>');
		$( ".ventanachat" ).draggable();
		//$(".ventanachat h2").text(nombreDeContacto);
		//$(".ventanachat img").attr("src",foto);
		//$(".ventanachat").show(400);
	});

	$(".quienLike").click(function(){
		$('#quienVentana').append('<div class="quien-like scroll-like"><div class="cerrarchat"></div><div class="clearfix contacto borderb margin10t"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Juan Jose Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Consejo Regional MNorte</p></div></div>'
			);  $(".scroll-like").niceScroll();
		//$(".ventanachat h2").text(nombreDeContacto);
		//$(".ventanachat img").attr("src",foto);
		//$(".ventanachat").show(400);
	});

	$(".cerrarchat").live('click',function(){
		$(this).parent().hide(400);
	});
	
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("chatButton") && !$clicked.hasClass("chatButton") && ! $clicked.parents().hasClass("contacto") && !$clicked.hasClass("contacto") ){
			$("div.contactos").hide();
		}
		if (! $clicked.parents().hasClass("menu3lines") && !$clicked.hasClass("menu3lines")){
			$(".actividadopen").hide();
		}
		if (! $clicked.parents().hasClass("fotologin") && !$clicked.hasClass("fotologin")){
			$(".fotobg").hide();
		}
		if (! $clicked.parents().hasClass("coment") && !$clicked.hasClass("coment")){
					$(".participa").animate({height:"24px"},1000);
		$(".participaBottom").hide(1000);
		$(".botonpublicar").show(400);
		$(".nicescroll-rails").css("z-index","701");
		}
		/*if (! $clicked.parents().hasClass("dropclick") && !$clicked.hasClass("dropclick")){
			$(".temporaldrop").animate({height:"31px"},1000);
			$(".nicescroll-rails").css("z-index","701")
		}*/
	});

});





