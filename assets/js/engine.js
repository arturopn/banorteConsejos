$(document).ready(function() {

	$(".hscroll").mCustomScrollbar({
		horizontalScroll:true,
		scrollInertia:250
	});
	$(".vscroll").mCustomScrollbar({
		scrollInertia:250
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
			setTimeout(function(){
	        $('#ascrail2000').show();}, 1000);
		$("#ascrail2000").css("z-index","999");
		$(".nicescroll-rails").css("z-index","690");
	}, function(){ 
		$(".temporaldrop").animate({height:"31px"},1000);
		$("#ascrail2000").hide();
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
	$("#cscroll").mCustomScrollbar({
		scrollInertia:250
	});
	$("#chat").click(function(){
		$("div.grupales, div.totales").hide();
		$("div.contactos").toggle("fast", function(){
			var customScrollbar=$("#cscroll").find(".mCSB_scrollTools");
			customScrollbar.css({"opacity":0});
			$("#cscroll").mCustomScrollbar("update");
			customScrollbar.animate({opacity:1},"slow");
		});
	});
	$("#grupales").click(function(){
		$("div.contactos, div.totales").hide();
		$("div.grupales").toggle("fast", function(){
			var customScrollbar=$("#gscroll").find(".mCSB_scrollTools");
			customScrollbar.css({"opacity":0});
			$("#gscroll").mCustomScrollbar("update");
			customScrollbar.animate({opacity:1},"slow");
		});
	});
	$("#totales").click(function(){
		$("div.contactos, div.grupales").hide();
		$("div.totales").toggle("fast", function(){
			var customScrollbar=$("#tscroll").find(".mCSB_scrollTools");
			customScrollbar.css({"opacity":0});
			$("#tscroll").mCustomScrollbar("update");
			customScrollbar.animate({opacity:1},"slow");
		});
	});
	
	$(".contacto").click(function(){
		nombreDeContacto = $("h2",this).text();
		consejoNombre = $("p", this).text();
		foto = $("img",this).attr("src");
		$('#ventanas').append('<div class="ventanachat relative"><div class="cerrarchat"></div><div class="floatL width15"><img class="floatL" src="' + foto +'"></div><div class="floatL width80 aleft"><h2>' + nombreDeContacto +'</h2><p>' + consejoNombre +'</p></div><div class="floatR tiempochat"><span>Ver más</span></div><div class="floatL conversacionarea"><div class="replymessage"><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft margin5t"><p class="font12 bold width65 floatL">Marcos</p><p class="floatR width30 font10 arigth">13/06/2013 13:13</p><p class="width100 font12 floatL">Si ya es nivel 7</p></div><div class="floatL width100 aleft margin5t"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:20</p><p class="width100 font12 floatL">Si lo veo te voy a saquear!</p></div></div></div><textarea class="comment"></textarea></div>');
		$( ".ventanachat" ).draggable();
		$('.ventanachat textarea').click(function(){ $( ".ventanachat" ).draggable("disable"); });
		$('.ventanachat textarea').blur(function(){ $( ".ventanachat" ).draggable("enable"); });
		$("#ventanas .replymessage:last").mCustomScrollbar({
			scrollInertia:250
		});	
		//$(".ventanachat h2").text(nombreDeContacto);
		//$(".ventanachat img").attr("src",foto);
		//$(".ventanachat").show(400);
	});
	$(".grupo").click(function(){
		nombreGrupo = $("h2",this).text();
		foto = $("img",this).attr("src");
		fblink = "openFB(880,442,'editar-grupal.html');";
		$('#ventanas').append('<div class="ventanagrupal relative clearfix"><div class="width10 floatL"><a class="block margin5b" onClick="' + fblink + '"><img src="assets/img/icons/chatmas.gif"> </a> <a onClick="' + fblink + '"><img src="assets/img/icons/docmas.gif"></a></div><div class="width85 floatR"><div class="cerrarchat"></div><div class="floatL width15"><img class="floatL" src="assets/img/photos/grupal.jpg"></div><div class="floatL width80 aleft"><h2>' + nombreGrupo + '</h2></div><div class="floatR tiempochat"><span>Ver más</span></div><div class="floatL conversacionarea"><div class="replymessage"><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">José Pedraza</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Mariano Barrientos</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:11</p><p class="width100 font12 floatL">Hola Marco ya subiste el ayuntamiento?</p></div><div class="floatL width100 aleft margin5t"><p class="font12 bold width65 floatL">Marcos</p><p class="floatR width30 font10 arigth">13/06/2013 13:13</p><p class="width100 font12 floatL">Si ya es nivel 7</p></div><div class="floatL width100 aleft margin5t"><p class="font12 bold width65 floatL">Israel Cantú</p><p class="floatR width30 font10 arigth">13/06/2013 13:20</p><p class="width100 font12 floatL">Si lo veo te voy a saquear!</p></div></div></div><textarea class="comment"></textarea></div></div>');
		$( ".ventanagrupal" ).draggable();
		$('.ventanagrupal textarea').click(function(){ $( ".ventanachat" ).draggable("disable"); });
		$('.ventanagrupal textarea').blur(function(){ $( ".ventanachat" ).draggable("enable"); });
		$("#ventanas .replymessage:last").mCustomScrollbar({
			scrollInertia:250
		});	
		//$(".ventanachat h2").text(nombreDeContacto);
		//$(".ventanachat img").attr("src",foto);
		//$(".ventanachat").show(400);
	});
	var z = 10;
	$('.ventanachat, .ventanagrupal').live('mousedown', function(){ $(this).css('z-index',z); z++; });

	$(".quienLike").click(function(){
		$('#quienVentana').append('<div class="quien-like scroll-like"><div class="cerrarchat"></div><div class="clearfix contacto borderb margin10t"><div class="floatL width15"><img class="floatL" src="assets/img/photos/fotohome2.png"></div><div class="floatL width80 aleft"><h2>Mariano Mario Barrientos</h2><p>Consejo Regional Metropolitano</p></div></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Luis Mario Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Area de Contabilidad</p></div><div class="clearfix contacto borderb"><img class="floatL" src="assets/img/photos/fotohome2.png"><h2 class="floatL">Juan Jose Gonzalez Barrientos</h2><p class="floatL margin10l margin5t margin0b">Consejo Regional MNorte</p></div></div>'
			);  
		$(".scroll-like").mCustomScrollbar({
			scrollInertia:250
		});
		//$(".ventanachat h2").text(nombreDeContacto);
		//$(".ventanachat img").attr("src",foto);
		//$(".ventanachat").show(400);
	});

	$(".cerrarchat").live('click',function(){
		$(this).parent().hide(400);
	});
	$(".ventanagrupal .cerrarchat").live('click',function(){
		$(this).parent().parent().hide(400);
	});
	
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("chatButton") && !$clicked.hasClass("chatButton") && ! $clicked.parents().hasClass("contacto") && !$clicked.hasClass("contacto")  && ! $clicked.parents().hasClass("contactos") && !$clicked.hasClass("contactos")  && ! $clicked.parents().hasClass("ventanachat") && !$clicked.hasClass("ventanachat") ){
			$("div.contactos").hide();
		}
		if (! $clicked.parents().hasClass("chatButton") && !$clicked.hasClass("chatButton") && ! $clicked.parents().hasClass("grupo") && !$clicked.hasClass("grupo")  && ! $clicked.parents().hasClass("grupales") && !$clicked.hasClass("grupales")  && ! $clicked.parents().hasClass("ventanachat") && !$clicked.hasClass("ventanachat") ){
			$("div.grupales").hide();
		}
		if (! $clicked.parents().hasClass("chatButton") && !$clicked.hasClass("chatButton") && ! $clicked.parents().hasClass("total") && !$clicked.hasClass("total")  && ! $clicked.parents().hasClass("totales") && !$clicked.hasClass("totales")  && ! $clicked.parents().hasClass("ventanachat") && !$clicked.hasClass("ventanachat") ){
			$("div.totales").hide();
		}
		if (! $clicked.parents().hasClass("menu3lines") && ! $clicked.parents().hasClass("actividadopen") && !$clicked.hasClass("actividadopen") && !$clicked.hasClass("menu3lines")){
			$(".actividadopen").hide();
		}
		if (! $clicked.parents().hasClass("fotologin") && !$clicked.hasClass("fotologin") && ! $clicked.parents().hasClass("fotobg") && !$clicked.hasClass("fotobg")){
			$(".fotobg").hide();
		}
		if (! $clicked.parents().hasClass("coment") && !$clicked.hasClass("coment")){
					$(".participa").animate({height:"24px"},1000);
		$(".participaBottom").hide(1000);
		$(".botonpublicar").show(400);
		
		}
		/*if (! $clicked.parents().hasClass("dropclick") && !$clicked.hasClass("dropclick")){
			$(".temporaldrop").animate({height:"31px"},1000);
			$(".nicescroll-rails").css("z-index","701")
		}*/
	});

});





