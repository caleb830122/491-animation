class Map {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./StarfallTown.png");
	};

	update() {

	};

	draw(ctx) {
        ctx.drawImage(this.spriteSheet, 250, 593, 310, 200, this.x, this.y, 1024, 768);
        
	};
};