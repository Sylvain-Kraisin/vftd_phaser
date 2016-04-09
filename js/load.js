Game = {};

var w = 700;
var h = 450;
var score = 0;
var best_score = 0;
var sound = 1;
var dead_s;

function rand(num) {
    return Math.floor(Math.random() * num)
};

Game.Boot = function (game) {};

Game.Boot.prototype = {
    preload: function () {
        game.load.image('loading', 'images/loading.png');
    },
    create: function () {
        this.game.stage.scale.minWidth = 700;
        this.game.stage.scale.minHeight = 450;
        this.game.stage.scale.setSize();

        this.game.state.start('Load');
    }
};

Game.Load = function (game) {};

Game.Load.prototype = {
    preload: function () {
        game.stage.backgroundColor = '#63b7d9';
        label2 = game.add.text(Math.floor(w / 2) + 0.5, Math.floor(h / 2) - 15 + 0.5, 'loading...', {
            font: '30px Arial',
            fill: '#fff'
        });
        label2.anchor.setTo(0.5, 0.5);

        preloading = game.add.sprite(w / 2, h / 2 + 15, 'loading');
        preloading.x -= preloading.width / 2;
        game.load.setPreloadSprite(preloading);

        game.load.image('sky', 'images/sky-3.png');
        game.load.image('brick', 'images/brick.png');
        game.load.image('bg', 'images/bg-3.png');
        game.load.spritesheet('player', 'images/player.png', 40, 46);
        game.load.spritesheet('enemy', 'images/mario-anim.png', 26, 30);
        game.load.image('coin', 'images/cartridge.png');
        game.load.audio('jump', 'sounds/jump.wav');
        game.load.audio('kill', 'sounds/hurt3.wav');
        game.load.audio('dead', 'sounds/dead.wav');
        game.load.audio('coin', 'sounds/coin.wav');
        game.load.audio('music', 'sounds/music.ogg');
    },
    create: function () {
        game.state.start('Menu');
    }
};