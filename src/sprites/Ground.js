class Ground extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene.add.existing(this);
    }
}

export default Ground;
