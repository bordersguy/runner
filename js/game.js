var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'gamehere');


game.global = {
 
pickPlanet: 0,

contractToComplete: ["type", 0]

};

this.game.state.add('boot', bootState);
this.game.state.add('load', loadState);
this.game.state.add('menu', menuState);
this.game.state.add('select', selectState);
this.game.state.add('play', playState);


game.state.start('boot');
