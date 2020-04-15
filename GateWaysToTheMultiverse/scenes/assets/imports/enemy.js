class Enemy extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, "enemy");
        this.scene.add.existing(this);
        this.setData("entity", "mobile");
    }
}

export default Enemy;