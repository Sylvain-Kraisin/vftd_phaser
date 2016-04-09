
var menuState = {

	create: function() {
		this.cursor = this.game.input.keyboard.createCursorKeys();

		var logo = game.add.text(w/2, -150, 'Pixel War 2', { font: '50px Arial', fill: '#fff' });
		logo.anchor.setTo(0.5, 0.5);
		game.add.tween(logo).to({ y: h/2-80 }, 1000, Phaser.Easing.Bounce.Out).start();

		if (score > bestScore)
			bestScore = score;

		if (bestScore != 0) {
			var scoreLabel = game.add.text(w/2, h/2+50, 'score: '+score+'\nbest score: '+bestScore, { font: '25px Arial', fill: '#fff', align: 'center' });
			scoreLabel.anchor.setTo(0.5, 0.5);
			scoreLabel.alpha = 0;
			game.add.tween(scoreLabel).delay(500).to({ alpha: 1}, 1000).start();
		}
		
		var label = game.add.text(w/2, h-60, 'use arrow keys to move and start the game', { font: '20px Arial', fill: '#fff' });
		label.anchor.setTo(0.5, 0.5);
		label.alpha = 0;
		game.add.tween(label).delay(500).to({ alpha: 1}, 1000).start();
		game.add.tween(label).to({y: h-70}, 500).to({y: h-50}, 500).loop().start();

		this.sound_toggle = this.game.add.button(w-50, 50, 'sound', this.toggle_sound, this);
		this.sound_toggle.anchor.setTo(1, 0);
		this.sound_toggle.alpha = 0;
		game.add.tween(this.sound_toggle).delay(500).to({ alpha: 1}, 500).start();
		if (!sound)
			this.sound_toggle.frame = 1;
	},

	update: function() {
		if (this.cursor.up.isDown || this.cursor.right.isDown || this.cursor.down.isDown || this.cursor.left.isDown)
			this.game.state.start('play');		
	},

	toggle_sound: function() {
		if (this.sound_toggle.frame == 0) {
			this.sound_toggle.frame = 1;
			sound = false;
		}
		else {
			this.sound_toggle.frame = 0;
			sound = true;			
		}
	}
};