//This is our Player class. We'll use this in practically every scene, since it controls the player.

class Player extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, "player");
        this.scene.add.existing(this);

        //Create the listeners to allow player movement
        this.scene.input.keyboard.on("keydown-NUMPAD_SIX", this.key6, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_FOUR", this.key4, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_TWO", this.key2, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_EIGHT", this.key8, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_NINE", this.key9, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_THREE", this.key3, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_ONE", this.key1, this);
        this.scene.input.keyboard.on("keydown-NUMPAD_SEVEN", this.key7, this);
    }

    //The functions to be called to move the player

    //Right
    key6(){
        this.setPosition(this.x + 64, this.y);
    }
    //Left
    key4(){
        this.setPosition(this.x - 64, this.y);
    }
    //Down
    key2(){
        this.setPosition(this.x, this.y + 64);
    }
    //Up
    key8(){
        this.setPosition(this.x, this.y - 64);
    }
    //Diagonal right-up
    key9(){
        this.setPosition(this.x + 64, this.y - 64);
    }
    //Right-down
    key3(){
        this.setPosition(this.x + 64, this.y + 64);
    }
    //Left-down
    key1(){
        this.setPosition(this.x - 64, this.y + 64);
    }
    //Left-up
    key7(){
        this.setPosition(this.x - 64, this.y - 64);
    }
    
}

export default Player;