var loadingText;
var planet;
var ufo;
var fadeOutPanel;

var loadState = {
    
    
    init: function () {
        
        this.game.load.onFileComplete.add(fileComplete, this);
        
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        this.game.scale.setScreenSize( true );
        
        
        
        this.game.add.sprite(0, 0,'spaceBackground');
        planet = this.game.add.sprite(400, 400,'planetIce');
        ufo = this.game.add.sprite(-100, 250,'runnerShip');
        loadingText = this.game.add.text(300,150, 'Loading...', { fill: '#ffffff', fontSize: '60px' });
        fadeOutPanel = this.game.add.sprite(0,0,"fadeOutPanel");
        fadeOutPanel.alpha = 0;
        this.game.add.tween(ufo).to( { x: 1100, y: 600 }, 3000, null, true);
        var scaleUfo = this.game.add.tween(ufo.scale).to({ x: .2, y: .2}, 3000, null, true);
        
        //scaleUfo.onComplete.add(function () {  Fade();  }, this);


    },
    
    preload: function () {

        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform5.png');
        this.game.load.image('ground2', 'assets/ground2.png');
        this.game.load.image('singleGround', 'assets/singleGround.png');
        this.game.load.image('singleGroundBits', 'assets/singleGroundBits.png');
        this.game.load.image('bubble', 'assets/bubble.png');
        this.game.load.image('asteroid', 'assets/asteroid.png');
        this.game.load.image('panel', 'assets/panel.png');
        this.game.load.spritesheet('dude', 'assets/runningSheet.png', 60, 68, 34);
        this.game.load.spritesheet('droppingVirus', 'assets/droppingVirus.png', 60, 69);
        //this.game.load.image('menu', 'assets/menuScreen.png');
        this.game.load.image('startbutton', 'assets/startButton.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.image('directions', 'assets/directions.png');
        this.game.load.image('playagain', 'assets/playagainbutton.png');
        this.game.load.image('movebutton', 'assets/invisiblebutton.png');
        this.game.load.image('settings', 'assets/settingsbutton.png');
        this.game.load.image('settingspanel', 'assets/settingspanel.png');
        this.game.load.image('submit', 'assets/submitbutton.png');
        this.game.load.image('clear', 'assets/clearbutton.png');
//        this.game.load.image('spaceBackground', 'assets/spaceBackground.png');
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
        this.game.load.image('asteroidIceBits', 'assets/asteroidIceBits.png');
        this.game.load.image('asteroidEnergy', 'assets/asteroidEnergy.png');
        this.game.load.image('asteroidEnergyBits', 'assets/asteroidEnergyBits.png');
        this.game.load.image('asteroidEnergyLarge', 'assets/asteroidEnergyLarge.png');
        this.game.load.image('asteroidFire', 'assets/asteroidFire.png');
        this.game.load.image('asteroidFireBits', 'assets/asteroidFireBits.png');
        this.game.load.image('asteroidFireLarge', 'assets/asteroidFireLarge.png');
        this.game.load.image('planetIce', 'assets/planetIce.png');
        this.game.load.image('wormHole', 'assets/wormHole.png');
        this.game.load.image('teleportLoadingBar', 'assets/teleportLoadingBar.png');
        this.game.load.image('barFrame', 'assets/barFrame.png');
        this.game.load.image('foundWordCloud', 'assets/foundWordCloud.png');
        this.game.load.image('wordKeyCloud', 'assets/wordKeyCloud.png');
        this.game.load.image('lifeBar', 'assets/lifeBar.png');
        this.game.load.image('playerLife', 'assets/playerLife.png');
        this.game.load.image('wormHoles', 'assets/wormHoles.png');
        this.game.load.image('runnerShip', 'assets/runnerShip.png');
        this.game.load.image('shipPanel', 'assets/shipPanel.png');
        this.game.load.image('solar1', 'assets/solar1.png');
        this.game.load.image('launchButton', 'assets/launchButton.png');
        this.game.load.image('tryAgainButton', 'assets/tryAgainButton.png');
        this.game.load.image('newMissionButton', 'assets/newMissionButton.png');
        this.game.load.image('endGamePanel', 'assets/endGamePanel.png');
        
        this.game.load.image('extraHealth', 'assets/extraHealth.png');
        this.game.load.image('warpIn', 'assets/warpIn.png');
        this.game.load.image('rollSlide', 'assets/rollSlide.png');
        this.game.load.image('warpTravel', 'assets/warpTravel.png');
        this.game.load.image('windowSpace', 'assets/windowSpace.png');
        this.game.load.image('warpBackground', 'assets/warpBackground.png');
        this.game.load.image('planetSpace', 'assets/planetSpace.png');
        
        this.game.load.image('contractButton', 'assets/contractButton.png');
        this.game.load.image('recordsButton', 'assets/recordsButton.png');
        this.game.load.image('starChartButton', 'assets/starChartButton.png');
        this.game.load.image('backButtonComputer', 'assets/backButtonComputer.png');
        this.game.load.image('contractSheet', 'assets/contractSheet.png');
        this.game.load.image('selectContractButton', 'assets/selectContractButton.png');
        this.game.load.image('selectedFrame', 'assets/selectedFrame.png');
        this.game.load.image('dataButton', 'assets/dataButton.png');
        this.game.load.image('dataLine', 'assets/dataLine.png');
     
        this.game.load.text('wordDictionary', 'wordlist/wordDictionary.txt');

    },
    
    create: function () {
        
        //this.game.add.sprite(0,0,'menu');
        
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        this.game.scale.setScreenSize(true);
        
        //loadingText = this.game.add.text(300,150, 'Loading...', { fill: '#ffffff', fontSize: '60px' });
        
        // var timerload = this.game.time.create(false);
    
        // timerload.start();
        
    
        // timerload.add(2000, startMenu, this);
        
       
     //   game.state.start('menu');
        
        
        
        
    },
    
    update: function () {
        
        
        
        
    }
    
    
    
};


function  startMenu () {
        
    this.game.state.start('menu');
        
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	loadingText.setText("Loading " + progress + "%");
    if (progress == 100) {
        
        Fade();
        
    }

}

function Fade() {
    
    var fadeOut = this.game.add.tween(fadeOutPanel).to( { alpha: 1.0 }, 3000, null, true);
    
    fadeOut.onComplete.add(function () {  startMenu();  }, this);
   
    
}