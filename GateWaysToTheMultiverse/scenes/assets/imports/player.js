//This is our Player class. We'll use this in practically every scene, since it controls the player.

class Player extends Phaser.GameObjects.Sprite{

    constructor(config){
        super(config.scene, config.x, config.y, "player");
        config.scene.add.existing(this);

        this.setInteractive();

        this.on("keydown-NUMPAD_SIX", this.key6);
        /*
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
        */
    }

    key6(){
        this.setPosition(this.x + 64, this.y);
    }
    
}

export default Player;