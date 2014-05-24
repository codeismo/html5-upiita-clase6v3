$(function() {
	//creamos un objeto que nos permite acceder a las funcionalidades de Quintus
	var Q = Quintus({
		development : true
	});

	//habilitamos los modulos a utilizar
	Q.include("Sprites, Scenes, Input, 2D, Touch");
	//indicamos la caja en la que va a pintar el juego y que se maximize
	Q.setup("contenedor-juego");
	//habilitamos los controles por teclado y touch
	Q.controls();
	Q.touch();

	//definimos la clase del jugador
	Q.Sprite.extend("Jugador", {
		//parametros de configuracion, asset, velocidad de salto
		init : function(p) {
			this._super(p, {
				asset : "player.png",
				x : 110,
				y : 50,
				jumpSpeed : -380
			});

		},
		//se ejecuta continuamente
		step : function() {

		}
	});

	//definimos la escena con sus capas
	Q.scene("nivel1", function(stage) {
		//definimos la capa de fondo, mapa, indice, sheet , tamaño de mosaico y tipo
		var background = new Q.TileLayer({
			layerIndex: 0,
			dataAsset: "nivel1.tmx",
			tileW: 70,
			tileH: 70,
			sheet: "mosaicos",
			type: Q.SPRITE_NONE
		});
		//insertamos la capa de fondo
		stage.insert(background);

		//definimos la capa de colisiones, mapa, indice, sheet y tamaño de mosaico
		var colisiones = new Q.TileLayer({
			layerIndex: 1,
			dataAsset: "nivel1.tmx",
			tileW: 70,
			tileH: 70,
			sheet: "mosaicos"
		});
		//insertamos la capa de colisiones
		stage.collisionLayer(colisiones);
		//insertamos un jugador
		var mario = stage.insert(new Q.Jugador());
		//hacemos que la camara lo siga

	});

	//una vez que los recursos se han caragado se ejecuta el juego
	Q.load("nivel1.tmx, enemigo.png, player.png, tiles_map.png", function() {
		//definimos el mapa nombre logico, imagen y tamaño del mosaico
		Q.sheet("mosaicos", "tiles_map.png", {
			tilew:70,
			tileh:70
		});
		//se ejecuta la escena 1
		Q.stageScene("nivel1");
	});

	//definir al enemigo cambiamos asset y nombre de la clase,  dar velocidad en x
	//cargar la imagen y quitar controles
	Q.Sprite.extend("Enemigo", {
		init : function(p) {
			this._super(p, {

			});
			this.add("2d, aiBounce");
			//colisiones para matar al enemigo

			//colisiones para matar al jugador

		},
		step : function() {

		}
	});

	//Escena Game Over, alert y despues inicia el nivel 1 de nuevo

	//Escena Ganar, alert y despues inicia el nivel 1 de nuevo
});
