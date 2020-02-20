//Import JS files that contain scene data
import Test from "GateWaysToTheMultiverse/scenes/test.js";

//Create our scenes
var test = new Test(); //Change this when we create new files to import

var config = {
    type: Phaser.AUTO,
    parent: null,
    width: 1280,
    height: 720,
    scene: {
        Test
    }
};

//The "game" This runs all our scenes.
var game = new Phaser.Game(config);

//Load scenes
game.scene.add("testScene", test);

//START our initial scene (The title screen) LAUNCH is very different!
game.scene.start("testScene");
