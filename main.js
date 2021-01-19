var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Pokemon.png");
ASSET_MANAGER.queueDownload("./Pikachu.png");
ASSET_MANAGER.queueDownload("./StarfallTown.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	
	canvas.focus();
	gameEngine.init(ctx);
	new SceneManager(gameEngine);
	gameEngine.start();
});
