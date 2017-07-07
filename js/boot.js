var bootState = {
    
    preload: function () {
        
        this.game.load.image('menu', 'assets/menuScreen.png');
        this.game.load.image('planetIce', 'assets/planetIce.png');
        this.game.load.image('runnerShip', 'assets/runnerShip.png');
        this.game.load.image('spaceBackground', 'assets/spaceBackground.png');
        this.game.load.image('fadeOutPanel', 'assets/fadeOutPanel.png');
        
    },
    
    create: function (){
        
           this.game.physics.startSystem(Phaser.Physics.ARCADE);
           
           this.game.add.sprite(0,0,'menu');
           
           
           var loadingText = this.game.add.text(300,150, 'Just a moment ^^', { fill: '#ffffff', fontSize: '60px' });
           
           
           
           this.game.state.start('load');
           
          
        
    }
    
    
    
    
};