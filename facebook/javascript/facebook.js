var MIAPP = {
	publicar : function(mensaje) {
		FB.api("/me","get",function(response){
			var nombre = response.name;
			var mensajefinal = nombre + mensaje;
			FB.api("/me/feed","post",{
				link: "https://apps.facebook.com/upiitahtml",
				picture: "https://appfacebook-codeismo.rhcloud.com/images/player.png",
				name: "Juego Quintus",
				message: mensajefinal
			},function(){});
		});
	},

	muestraLogin : function() {
		FB.login(function(response) {
			if (response.authResponse) {
				alert("vamos a jugar");
				jugar();
			} else {
				alert("no acepto");
			}
		}, {
			scope : 'email, publish_actions'
		});

	}
};

$(function() {
	FB.init({
		appId : '388909914580236',
		xfbml : true,
		version : 'v2.0'
	});

	//si es usuario esta conectado (connected) ->Jugar!
	//sino hay que mostrarle el login
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			//inicia al app
			alert("Iniciar Juego");
			jugar();
		} else {
			MIAPP.muestraLogin();
		}
	});

});
