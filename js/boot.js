var bootState = {
    
    preload: function () {
        
        game.load.image('menu', 'assets/MenuScreen.png');
        
    },
    
    create: function (){
        
           game.physics.startSystem(Phaser.Physics.ARCADE);
           
           game.add.sprite(0,0,'menu');
           
           
           var loadingText = game.add.text(300,150, 'Enjoy!', { fill: '#ffffff', fontSize: '60px' });
           
           game.state.start('load');
           
          
        
    }
    
    
    
    
};