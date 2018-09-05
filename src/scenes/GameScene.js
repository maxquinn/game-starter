import Dude from '../sprites/Dude';
import Star from '../sprites/Star';
import Ground from '../sprites/Ground';

class GameScene extends Phaser.Scene {
    constructor(handle) {
        super(handle);
        this.cursors;
        this.platforms;
        this.player;
        this.starts;
    }

    preload() {
        this.load.image('sky', 'public/assets/sky.png');
        this.load.image('ground', 'public/assets/platform.png');
        this.load.image('star', 'public/assets/star.png');
        this.load.image('bomb', 'public/assets/bomb.png');
        this.load.spritesheet('dude', 'public/assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        this.add.image(400, 300, 'sky');
        this.buildLevel();

        this.player = new Dude(this, 100, 450, 'dude');
        this.stars = this.physics.add.group({
            classType: Star,
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.stars.children.iterate(function(child) {
            child.body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    }

    buildLevel() {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.createFromConfig({
            classType: Ground,
            key: 'ground',
            setXY: { x: 400, y: 568 },
            setScale: { x: 2, y: 2 }
        });
        this.platforms.createFromConfig({
            classType: Ground,
            key: 'ground',
            setXY: { x: 600, y: 400 }
        });
        this.platforms.createFromConfig({
            classType: Ground,
            key: 'ground',
            setXY: { x: 50, y: 250 }
        });
        this.platforms.createFromConfig({
            classType: Ground,
            key: 'ground',
            setXY: { x: 750, y: 220 }
        });
    }

    update() {
        this.player.update();
    }
}

export default GameScene;
