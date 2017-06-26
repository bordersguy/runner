var loadState = {
    
    preload: function () {
        
        
        
        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform5.png');
        this.game.load.image('ground2', 'assets/ground2.png');
        this.game.load.image('singleGround', 'assets/singleGround.png');
        this.game.load.image('bubble', 'assets/bubble.png');
        this.game.load.image('panel', 'assets/panel.png');
        this.game.load.spritesheet('dude', 'assets/runningSheet.png', 60, 64);
        this.game.load.image('menu', 'assets/menuScreen.png');
        this.game.load.image('startbutton', 'assets/startButton.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.image('directions', 'assets/directions.png');
        this.game.load.image('playagain', 'assets/playagainbutton.png');
        this.game.load.image('movebutton', 'assets/invisiblebutton.png');
        this.game.load.image('settings', 'assets/settingsbutton.png');
        this.game.load.image('settingspanel', 'assets/settingspanel.png');
        this.game.load.image('submit', 'assets/submitbutton.png');
        this.game.load.image('clear', 'assets/clearbutton.png');
        this.game.load.image('spaceBackground', 'assets/spaceBackground.png');
        this.game.load.spritesheet('jumping', 'assets/jumpingPlayer.png',50,74);
        this.game.load.image('ufo', 'assets/enemyUfo.png');
        this.game.load.image('planetBrown', 'assets/planetBrown.png');
        this.game.load.image('planetRed', 'assets/planetRed.png');

    },
    
    create: function () {
        
        this.game.add.sprite(0,0,'menu');
        
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        this.game.scale.setScreenSize( true )
        
        var loadingText = this.game.add.text(300,150, 'Loading...', { fill: '#ffffff', fontSize: '60px' });
        
        var timerload = this.game.time.create(false);
    
        timerload.start();
        
    
        timerload.add(2000, startMenu, this);
        
       
     //   game.state.start('menu');
        
        
        
        
    }
    
    
    
};


function  startMenu () {
        
        game.state.start('menu');
        
}