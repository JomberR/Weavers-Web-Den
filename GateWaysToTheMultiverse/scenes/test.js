class Test extends Phaser.Scene{

    constructor(){
        super({key: "test", active:true});
    }

    preload(){
        //Image used for our tileset.
        this.load.image("tile", "./GateWaysToTheMultiverse/scenes/assets/images/basicTile.png");
        this.load.image("player", "./GateWaysToTheMultiverse/scenes/assets/images/basicPlayer.png")
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
        var level = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
        ];

        //What loads our map.
        var map = this.make.tilemap({data: level, tileWidth: 64, tileHeight: 64});
        var tiles = map.addTilesetImage("tile");

        //0, 0 is where we place the layer. We can use this to make rooms!!!
        var layer = map.createStaticLayer(0, tiles, 128, 128);

        //THIS WILL BE MIGRATED TO A SEPARATE FILE
        //Create the player
        var player = this.add.sprite(160, 160, "player");

        //Create the keys in order to control the player
        var key6 = this.input.keyboard.addKey("NUMPAD_SIX");
        key6.on("down", function(event){
            player.setPosition(player.x + 64, player.y);
        });

        var key4 = this.input.keyboard.addKey("NUMPAD_FOUR");
        key4.on("down", function(event){
            player.setPosition(player.x - 64, player.y);
        });

        var key2 = this.input.keyboard.addKey("NUMPAD_TWO");
        key2.on("down", function(event){
            player.setPosition(player.x, player.y + 64);
        });

        var key8 = this.input.keyboard.addKey("NUMPAD_EIGHT");
        key8.on("down", function(event){
            player.setPosition(player.x, player.y - 64);
        });
    }

    update(){

    }

}

export default Test;