var loadState = {
    
    preload: function () {
        
        
        
        game.load.image('diamond', 'assets/diamond.png');
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform5.png');
        game.load.image('bubble', 'assets/bubble.png');
        game.load.image('panel', 'assets/panel.png');
        game.load.spritesheet('dude', 'assets/robo1.png', 48, 64);
        game.load.image('menu', 'assets/MenuScreen.png');
        game.load.image('startbutton', 'assets/startbutton.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('directions', 'assets/directions.png');
        game.load.image('playagain', 'assets/playagainbutton.png');
        game.load.image('movebutton', 'assets/invisiblebutton.png');
        game.load.image('settings', 'assets/settingsbutton.png');
        game.load.image('settingspanel', 'assets/settingspanel.png');
        game.load.image('submit', 'assets/submitbutton.png');
        game.load.image('clear', 'assets/clearbutton.png');
    },
    
    create: function () {
        
        game.add.sprite(0,0,'menu');
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        game.scale.setScreenSize( true )
        
        var loadingText = game.add.text(300,150, 'Loading...', { fill: '#ffffff', fontSize: '60px' });
        
        var timerload = game.time.create(false);
    
        timerload.start();
        
    
        timerload.add(2000, startMenu, this);
        
       
     //   game.state.start('menu');
        
        
        
        
    }
    
    
    
};


function  startMenu () {
        
        game.state.start('menu');
        
}