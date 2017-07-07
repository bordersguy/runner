var bootState = {
    
    preload: function () {
        
        this.game.load.image('menu', 'assets/menuScreen.png');
        this.game.load.image('planetIce', 'assets/planetIce.png');
        this.game.load.image('ufoSingle', 'assets/ufoSingle.png');
        this.game.load.image('spaceBackground', 'assets/spaceBackground.png');
        
    },
    
    create: function (){
        
           this.game.physics.startSystem(Phaser.Physics.ARCADE);
           
           this.game.add.sprite(0,0,'menu');
           
           
           var loadingText = this.game.add.text(300,150, 'Enjoy!', { fill: '#ffffff', fontSize: '60px' });
           
           
           
           this.game.state.start('load');
           
          
        
    }
    
    
    
    
};