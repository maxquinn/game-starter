import 'phaser';
import GameScene from './scenes/GameScene';

const config = {
    type: Phaser.WEBGL,
    parent: 'root',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);
