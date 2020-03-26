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
        if (this.checkWalkableTile(this.x + 64, this.y)){
            this.setPosition(this.x + 64, this.y);
        }
    }
    //Left
    key4(){
        if (this.checkWalkableTile(this.x - 64, this.y)){
            this.setPosition(this.x - 64, this.y);
        }
    }
    //Down
    key2(){
        if (this.checkWalkableTile(this.x, this.y + 64)){
            this.setPosition(this.x, this.y + 64);
        }
    }
    //Up
    key8(){
        if (this.checkWalkableTile(this.x, this.y - 64)){
            this.setPosition(this.x, this.y - 64);
        }
    }
    //Diagonal right-up
    key9(){
        if (this.checkWalkableTile(this.x + 64, this.y - 64)){
            this.setPosition(this.x + 64, this.y - 64);
        }
    }
    //Right-down
    key3(){
        if (this.checkWalkableTile(this.x + 64, this.y + 64)){
            this.setPosition(this.x + 64, this.y + 64);
        }
    }
    //Left-down
    key1(){
        if (this.checkWalkableTile(this.x - 64, this.y + 64)){
            this.setPosition(this.x - 64, this.y + 64);
        }
    }
    //Left-up
    key7(){
        if (this.checkWalkableTile(this.x - 64, this.y - 64)){
            this.setPosition(this.x - 64, this.y - 64);
        }
    }

    //Function that will detect whether or not the tile the player is trying to move in is walkable (i.e. a floor tile. Not a wall, or the abyss)

    checkWalkableTile(x, y){

        //Start with the assumption we can move.
        var canMove = true;

        //Find the tilemap of the scene we're in. We fetch all of the children of the scene and look for the tilemap.
        var children = this.scene.children.getAll();
        var floor = children.find(element => element.isTilemap == true && element.name == "floor");

        //See if we have a tile to where we want to move.
        var searchTile = floor.hasTileAtWorldXY(x, y);

        //If searchTile returned false, which means we couldn't find a tile, set canMove to false to prevent movement.
        if (!searchTile){
            canMove = false;
        }

        //If we have a tile, check if it's a wall (index 1). If it is, set canMove to false and prevent movement.
        if (searchTile){
            var tile = floor.getTileAtWorldXY(x, y);
            if (tile.index == 1){
                canMove = false;
            }
        }

        //If nothing says we can't move, allow movement.
        //We COULD just search if we have an index of 0, meaning the floor tile. However, we could have other terrain that isn't a floor but is still walkable.
        return canMove;
    }
    
}

export default Player;