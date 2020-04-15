import Player from "./assets/imports/player.js";
import Enemy from "./assets/imports/enemy.js";

class Test extends Phaser.Scene{

    constructor(){
        super({key: "test", active:true});
    }

    preload(){
        //Image used for our tileset.
        this.load.image("tileMap", "./GateWaysToTheMultiverse/scenes/assets/images/basicTileset.png");
        this.load.image("player", "./GateWaysToTheMultiverse/scenes/assets/images/basicPlayer.png");
        this.load.image("enemy", "./GateWaysToTheMultiverse/scenes/assets/images/basicEnemy.png");
    }

    create(){
        //Tried to use a for loop to create an array to load the file. Gave me an "invalid ID" error. Maybe export to JSON and then load that?
        //This WOULD make it easier too for custom maps that we don't want randomly generated.
/*
        var level = new Array(10);

        for(var i = 0; i < level.length; i++){
            for(var x = 0; x < level.length; x++){
                var level = [i][x] = 1;
            }
        }
*/

        //Our level
        var levelFloor = [
        [0, 0, 0, 0,  1, 0, 0, 0,  0],
        [0, 0, 0, 0,  1, 0, 0, 0,  0],
        [0, 0, 0, 0,  0, 0, 0, 0,  0],
        [0, 0, 0, -1, 0, 0, 0, 0,  0],
        [0, 0, 0, 0,  0, 0, 0, -1, 0],
        [0, 0, 0, 0,  1, 0, 0, 0,  0],
        [0, 0, 0, 0,  1, 0, 0, 0,  0]
        ];

        //What loads our map.
        var map = this.make.tilemap({data: levelFloor, tileWidth: 64, tileHeight: 64});
        var tiles = map.addTilesetImage("tileMap");

        //0, 0 is where we place the layer. We can use this to make rooms!!!
        var floor = map.createStaticLayer(0, tiles);

        //We need to name the layer 'floor' so our pathfinding knows where to look for it.
        floor.name = "floor";

        var player = new Player(this, 32, 32);
        var enemy = new Enemy(this, 160, 160);
        var enemy2 = new Enemy(this, 416, 224);
        
    }

    update(){

    }

}

export default Test;