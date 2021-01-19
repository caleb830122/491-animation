class SceneManager {
    constructor(game) {
        this.game = game;
        this.pikachu = new Pikachu(game);
        this.pokeman = new PokeMan(game, 300, 200);        
        this.loadBackground();
    };

    loadBackground() {
        // add background
        let background = new Map(this.game, 0, 0);
        this.game.addEntity(background);
        
        this.game.addEntity(this.pikachu);
        this.game.addEntity(this.pokeman);
    }
}