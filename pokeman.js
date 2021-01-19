class PokeMan {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./Pokemon.png");
        this.animations = [];
        this.game = game;
        // direction
        // 0 = left, 1 = right, 2 = up, 3 = down
        this.direction = 3;
        this.x = 380;
        this.y = 280;
        
        this.animations.push(new Animator(this.spritesheet, 0, 564, 86, 136, 4, 0.1, 25, false, true));
        this.animations.push(new Animator(this.spritesheet, 0, 386, 86, 136, 4, 0.1, 25, false, true));
        this.animations.push(new Animator(this.spritesheet, 0, 199, 100, 150, 4, 0.1, 10, false, true));
        this.animations.push(new Animator(this.spritesheet, 6, 0, 100, 150, 4, 0.1, 10, false, true));
    };

    draw(ctx) {
        if(this.direction == 0) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.7);
        } else if (this.direction == 1) {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.7);
        } else if (this.direction == 2) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.7);
        } else if (this.direction == 3) {
            this.animations[3].drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.7);
        }
    };

    update() {
        if (this.game.left) {
            this.direction = 0;
            this.x -= 10;
        } 
        
        if (this.game.right) {
            this.direction = 1;
            this.x += 10;
        }

        if (this.game.up) {
            this.direction = 2;
            this.y -= 10;
        }

        if (this.game.down) {
            this.direction = 3;
            this.y = this.y + 10;
        }
    };

    
}
