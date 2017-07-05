var loadState = {
    
    preload: function () {

        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform5.png');
        this.game.load.image('ground2', 'assets/ground2.png');
        this.game.load.image('singleGround', 'assets/singleGround.png');
        this.game.load.image('bubble', 'assets/bubble.png');
        this.game.load.image('asteroid', 'assets/asteroid.png');
        this.game.load.image('panel', 'assets/panel.png');
        this.game.load.spritesheet('dude', 'assets/runningSheet.png', 60, 68, 34);
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
        this.game.load.spritesheet('ufo', 'assets/ufoAnimation.png', 175 ,99);
        this.game.load.image('planetBrown', 'assets/planetBrown.png');
        this.game.load.image('planetRed', 'assets/planetRed.png');
        this.game.load.image('planetEnergy', 'assets/planetEnergy.png');
        this.game.load.image('latCollisionUFO', 'assets/latCollisionPanel.png');
        this.game.load.image('longCollisionUFO', 'assets/longCollisionPanel.png');
        this.game.load.image('playerCollisionPanel', 'assets/playerCollisionPanel.png');
        this.game.load.image('playerRollingCollisionPanel', 'assets/playerRollingCollisionPanel.png');
        this.game.load.image('asteroidBits', 'assets/asteroidBits.png');
        this.game.load.image('smallAsteroid', 'assets/smallAsteroid.png');
        this.game.load.image('mediumAsteroid', 'assets/mediumAsteroid.png');
        this.game.load.image('largeAsteroid', 'assets/largeAsteroid.png');
        this.game.load.image('energy', 'assets/energy.png');
        this.game.load.image('letterJar', 'assets/letterJar.png');
        this.game.load.image('asteroidIce', 'assets/asteroidIce.png');
        this.game.load.image('asteroidIceLarge', 'assets/asteroidIceLarge.png');
        this.game.load.image('asteroidEnergy', 'assets/asteroidEnergy.png');
        this.game.load.image('asteroidEnergyLarge', 'assets/asteroidEnergyLarge.png');
        this.game.load.image('asteroidFire', 'assets/asteroidFire.png');
        this.game.load.image('asteroidFireLarge', 'assets/asteroidFireLarge.png');
        this.game.load.image('planetIce', 'assets/planetIce.png');
        this.game.load.image('wormHole', 'assets/wormHole.png');
        this.game.load.image('teleportLoadingBar', 'assets/teleportLoadingBar.png');
        this.game.load.image('barFrame', 'assets/barFrame.png');
        this.game.load.image('foundWordCloud', 'assets/foundWordCloud.png');
        this.game.load.image('lifeBar', 'assets/lifeBar.png');
        this.game.load.image('playerLife', 'assets/playerLife.png');
        this.game.load.image('wormHoles', 'assets/wormHoles.png');
        this.game.load.image('extraHealth', 'assets/extraHealth.png');
        this.game.load.image('warpIn', 'assets/warpIn.png');
        this.game.load.image('rollSlide', 'assets/rollSlide.png');
     
        this.game.load.text('wordDictionary', 'wordlist/wordDictionary.txt');

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