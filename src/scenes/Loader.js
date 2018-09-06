import assets from '../config/assets';

class Loader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Loader',
            pack: { assets }
        });
    }

    // preload() {
    //     this.load.image('sky', 'public/assets/sky.png');
    //     this.load.image('ground', 'public/assets/platform.png');
    //     this.load.image('star', 'public/assets/star.png');
    //     this.load.image('bomb', 'public/assets/bomb.png');
    //     this.load.spritesheet('dude', 'public/assets/dude.png', {
    //         frameWidth: 32,
    //         frameHeight: 48
    //     });
    // }
    create() {
        this.add.image(400, 300, 'sky');
    }

    // init() {
    //     this.scene.start('Game');
    // }
}

export default Loader;
