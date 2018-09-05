class Star extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
    }
}

export default Star;
