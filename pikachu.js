class Pikachu {
    constructor(game){
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./Pikachu.png");

        this.animations = [];
        this.animations.push(new Animator(this.spritesheet, 8, 9, 52, 50, 10, 0.1, 15, false, true));
    }
    
    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 600, 330, 2);
    }

    update() {

    }
   
}