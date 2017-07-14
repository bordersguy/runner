var planet1;
var planet2;
var planet3;
var planet4;

var shipPanel;
var solarPanel;
var launchButton;
var cursors;
var warpTravel;
var windowSpace;
var warpTimer;
var warps = 0;
var spaceBackground;
var planets = ["planetBrown", "planetRed", "planetIce", "planetEnergy"];
var contractType = ['ROCK', 'FIRERON', 'ICE', 'PLASMA'];
var typeImage = ['asteroid', 'asteroidFire', 'asteroidIce', 'asteroidEnergy'];
var warpPlanet;
var warpBackground;

var appButtons;
var starChartButton;
var contractButton;
var recordsButton;
var backButton;
var screen = 0;

var contractPanel;
var recordsPanel;
var textGroup;
var computerPanel;

var cameraLock = false;

var selectState = {
    

    create: function () {
        
        this.game.world.setBounds(0, 0, 1200, 1200);     
        this.game.camera.focusOnXY(600, 900);   
        
        warpTimer = this.game.time.create(false);
        
        windowSpace = this.game.add.group();
        warpTravel = this.game.add.group();
        shipPanel = this.game.add.sprite(0,0, "shipPanel");
        appButtons = this.game.add.group();
        computerPanel = this.game.add.group();
        // solarPanel = this.game.add.group();
        // contractPanel = this.game.add.group();
        // recordsPanel = this.game.add.group();
        textGroup = this.game.add.group();
        //shipPanel.fixToCamera = true;
        
        spaceBackground = windowSpace.create(0,0,"windowSpace");
        
        LoadApps();
        //LoadPlanets();
        
        //SetUpText();
        cursors = this.game.input.keyboard.createCursorKeys();
    
            
            
            
    },
    
    update: function () {
        
        AutoCamera();
        
        MoveCamera();
        
        
        
        
    }
    
    
    
};

function AutoCamera() {
    
    if (cameraLock == true) {
        
        this.game.camera.y -= 20;
        
    }
    
    
}

function DestroyGroupChildren(thisGroup) {
    
    var groupLength = thisGroup.length;
    
    for (var i = 0; i < groupLength; i++) {
        
        thisGroup.getChildAt(0).destroy();
        
    }
    
}

function ExplainContract(pick) {
    
    if (typeof launchButton !== "undefined") {
        
        launchButton.destroy();
        
    }
        
    if (pick == planet1) {
        
        this.game.pickPlanet = 0;   
        
    } else if (pick == planet2) {
        
        this.game.pickPlanet = 1;   
        
    } else if (pick == planet3) {
        
        this.game.pickPlanet = 2;   
        
    } else if (pick == planet4) {
        
        this.game.pickPlanet = 3;  
        
    }
    
    launchButton = this.game.add.button (pick.x - 30, pick.y - 60, 'launchButton', WarpOut, this, 2,1,0);
    computerPanel.addChild(launchButton);
    
    
}

function GoBack() {
    
    DestroyGroupChildren(textGroup);
    DestroyGroupChildren(computerPanel);
    backButton.kill();
    LoadApps();
    
    
    
    // switch (screen) {
        
    //     case 1:
    //         KillGroupChildren(solarPanel);
    //         break;
        
    //     case 2:
    //         KillGroupChildren(contractPanel);
    //         break;
            
    //     case 3:
    //         KillGroupChildren(recordsPanel);
    //         break;
        
    // }
    
    
}

function KillGroupChildren(thisGroup) {
    
    for (var i = 0; i < thisGroup.length; i++) {
        
        thisGroup.getChildAt(i).kill();
        
    }
    
}

function LoadApps() {
    
    contractButton = this.game.add.button (500, 700, 'contractButton', LoadContractPanel, this, 2,1,0);
    recordsButton = this.game.add.button (800, 700, 'recordsButton', LoadRecords, this, 2,1,0);
    starChartButton = this.game.add.button (200, 700, 'starChartButton', LoadPlanets, this, 2,1,0);
    
    appButtons.addChild(contractButton);
    appButtons.addChild(recordsButton);
    appButtons.addChild(starChartButton);
    
    
}

function LoadContractPanel() {
    
    screen = 2;
    KillGroupChildren(appButtons);
    SetUpBackButton();
    LoadContracts();
    
    
}

function LoadContracts() {
    
    var contractName = [Math.floor(Math.random() * contractType.length)];
    var contractSheet = this.game.add.button(150, 700, 'contractSheet', SelectContract, this, 2,1,0);
    var contractText = this.game.add.text(contractSheet.x + 50,contractSheet.y + 20, contractType[contractName], { fill: '#ffffff', fontSize: '40px' });
    var contractImage = this.game.add.sprite(contractSheet.x + 40,contractSheet.y + 50, typeImage[contractName]);
    
    console.log("ci = " + contractImage.x + ' and ' + contractImage.y);
    
    computerPanel.addChild(contractSheet);
    computerPanel.addChild(contractText);
    computerPanel.addChild(contractImage);
    
}

function LoadPlanets() {
    
    screen = 1;
    
    KillGroupChildren(appButtons);
 
    planet1 = this.game.add.button (300, 740, 'planetBrown', ExplainContract, this, 2,1,0);
    planet1.width = 80;
    planet1.height = 80;
    
    planet2 = this.game.add.button (160, 720, 'planetRed', ExplainContract, this, 2,1,0);
    planet2.width = 60;
    planet2.height = 60;
    
    planet3 = this.game.add.button (470, 825, 'planetIce', ExplainContract, this, 2,1,0);
    planet3.width = 50;
    planet3.height = 50;
    
    planet4 = this.game.add.button (440, 720, 'planetEnergy', ExplainContract, this, 2,1,0);
    planet4.width = 75;
    planet4.height = 65;
    
    var solarSystem = this.game.add.sprite (100,600, "solar1");
    
    computerPanel.addChild(solarSystem);
    computerPanel.addChild(planet1);
    computerPanel.addChild(planet2);
    computerPanel.addChild(planet3);
    computerPanel.addChild(planet4);
    
    
    SetUpText();
    
    SetUpBackButton();
    
}

function LoadRecords() {
    
    screen = 3;
    KillGroupChildren(appButtons);
    SetUpBackButton();
    
}

function MoveCamera() {
    
    if (cameraLock == false) {
        
        if (cursors.up.isDown) {
        
            this.game.camera.y -= 10;
            
        }
        
        if (cursors.down.isDown) {
            
            
            this.game.camera.y += 10;
            
        }
  
    }
}

function SelectContract() {
    
    
    
}

function SetUpBackButton() {
    
    backButton = this.game.add.button (1000, 900, 'backButtonComputer', GoBack, this, 2,1,0);
    
}




function SetUpText() {
    
    var text1;
    var text2;
    var text3;
    
    if (screen == 1) {
        
        text1 = this.game.add.text(900, 625, 'Contract', { fill: '#ffffff', fontSize: '60px' });
        text2 = this.game.add.text(900, 950, 'Warning', { fill: '#ffffff', fontSize: '60px' });
        text3 = this.game.add.text(300,950, 'Mission', { fill: '#ffffff', fontSize: '60px' });
        
    }
    
    
    textGroup.addChild(text1);
    textGroup.addChild(text2);
    textGroup.addChild(text3);
    
    
}

function  startGame () {
    
    warps = 0;
    cameraLock = false;
    this.game.state.start('play');
        
}

function WarpOut() {
    
    cameraLock = true;
    //console.log("cL = " + cameraLock);
    
    warpBackground = windowSpace.create(0,0,"warpBackground");
    this.game.world.sendToBack(spaceBackground);
    warpBackground.alpha = 0;
    var warpAlpha = this.game.add.tween(warpBackground).to({ alpha: 1.0}, 2000, null, true);
    warpAlpha.onComplete.add(function () {   this.game.add.tween(warpBackground).to({ alpha: 0}, 2000, null, true);   }, this);
    
    warpTimer.add(2000, WarpPlanet, this);

    warpTimer.add(500, WarpEffect, this);
    warpTimer.start();
    
    
    
    
}

function WarpEffect() {
    
    var tunnel = warpTravel.create(375, 20, "warpTravel");
    
    var tunnelScale = this.game.add.tween(tunnel.scale).to({ x: 5, y: 5}, 2000, null, true);
    this.game.add.tween(tunnel).to({ x: -500, y: -400}, 2000, null, true);
    
    tunnelScale.onComplete.add(function () {    tunnel.destroy();   }, this);
    
    warps += 1;
    
    
    if (warps < 20) {
        
        warpTimer.add(200, WarpEffect, this);    
        
    }
    
    
    
}

function WarpPlanet() {
    
    spaceBackground.loadTexture("planetSpace");
    warpPlanet = windowSpace.create(600, 150, planets[this.game.pickPlanet] );
    warpPlanet.scale.setTo(0.25, 0.25);
    this.game.world.sendToBack(spaceBackground);
    this.game.add.tween(warpPlanet.scale).to({ x: .75, y: .75}, 2000, null, true);
    this.game.add.tween(warpBackground).to({ alpha: 0}, 2000, null, true);  
    
    warpTimer.add(5000, startGame, this);
   
}


