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
var detailGroup;
var contracts = [];
var contractSelected = ["thisResource", 0, 0];
var selectedFrame;

var text1;
var text2;
var text3;

var cameraLock = false;
var keyZ;

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
        detailGroup = this.game.add.group();
        computerPanel.addChild(detailGroup);

        textGroup = this.game.add.group();

        spaceBackground = windowSpace.create(0,0,"windowSpace");
        
        LoadApps();

        cursors = this.game.input.keyboard.createCursorKeys();
        keyZ = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        keyZ.onDown.add(startGame, this);
      
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

function ContractDetail() {
    
    var pick = this.game.pickPlanet;
    var contractInfo;
    var cautionInfo;

    contractInfo = this.game.add.sprite(text1.x, text1.y + 60, contractSelected[0]);
    var contractCurrentText = this.game.add.text(contractInfo.x + 80, contractInfo.y, " x " + contractSelected[1].toString(), 
                        { fill: '#ffffff', fontSize: '40px', boundsAlignH: "center" }); 
    
    
    computerPanel.addChild(contractInfo);
    textGroup.addChild(contractCurrentText);
    
    //detailGroup.addChild(contractCurrentText);
    //detailGroup.addChild(contractInfo);
    
    
    
    
    
}

function DestroyGroupChildren(thisGroup) {
    
    var groupLength = thisGroup.length;
    
    for (var i = 0; i < groupLength; i++) {
        
        thisGroup.getChildAt(0).destroy();
        
    }
    
}

function ExplainContract(pick) {
    
    detailGroup.callAll('kill');
    
    var resourceInfo;
    
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
    
    computerPanel.addChild(detailGroup);
    
    resourceInfo = this.game.add.sprite(text3.x + 50, text3.y + 30, typeImage[this.game.pickPlanet] );
    detailGroup.addChild(resourceInfo);
    
    
}

function GoBack() {
    
    
    //DestroyGroupChildren(computerPanel);
    computerPanel.callAll('kill');
    //textGroup.callAll('destroy');
    DestroyGroupChildren(textGroup);
    computerPanel = this.game.add.group();
    textGroup = this.game.add.group();
    
    
    if (screen == 1) {
    
        detailGroup.callAll('kill');
        detailGroup = this.game.add.group();
    
    }
    
    backButton.kill();
    screen = 0;
    LoadApps();

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
    //KillGroupChildren(appButtons);
    appButtons.callAll('kill');
    SetUpBackButton();
    LoadContracts();
 
}

function LoadContracts() {
    
    appButtons.callAll('kill');
    
    var contractName;
    var contractSheet;
    var contractText;
    var contractImage;
    var contractQuantity;
    var contractPayout;
    var contractSelect;
    var getQuantity;
    var getPayout;
    
    
    for (var i = 0; i < 3; i++) {
        
        getQuantity = Math.floor(Math.random() * 50) + 100;
        getPayout = Math.floor(Math.random() * 50) + 50;
        
        contractName = [Math.floor(Math.random() * contractType.length)];
        contractSheet = this.game.add.sprite(250 * i + 250, 700, 'contractSheet');
        
        contractText = this.game.add.text(contractSheet.x + contractSheet.width/2,contractSheet.y + 50, contractType[contractName], 
                        { fill: '#ffffff', fontSize: '40px', boundsAlignH: "center" });
        contractText.anchor.x = Math.round(contractText.width * 0.5) / contractText.width;
        
        contractPayout = this.game.add.text(contractSheet.x + contractSheet.width/2,contractText.y + 40, getPayout.toString(),
                        { fill: 'green', fontSize: '40px', boundsAlignH: "center"});
        contractPayout.anchor.x = Math.round(contractPayout.width * 0.5) / contractPayout.width;
        
        contractImage = this.game.add.sprite(contractSheet.x + contractSheet.width/2,contractPayout.y + 60, typeImage[contractName]);
        contractImage.anchor.setTo(0.5, 0.5);
        
        contractQuantity = this.game.add.text(contractSheet.x + contractSheet.width/2,contractImage.y + 30, getQuantity.toString(), 
                        { fill: 'gray', fontSize: '40px', boundsAlignH: "center" });
        contractQuantity.anchor.x = Math.round(contractQuantity.width * 0.5) / contractQuantity.width;
        
        contractSelect = this.game.add.button (contractSheet.x, contractSheet.height + contractSheet.y, 'selectContractButton', SelectContract, this, 2,1,0);
        contractSelect.name = i.toString();
        
        contracts[i] = [typeImage[contractName], getQuantity, getPayout];
        console.log("contracts" + i + " is " + contracts[i]);
        computerPanel.addChild(contractSheet);
        textGroup.addChild(contractText);
        computerPanel.addChild(contractImage);
        textGroup.addChild(contractPayout);
        textGroup.addChild(contractQuantity);
        computerPanel.addChild(contractSelect);
        
    }

    
}

function LoadPlanets() {
    
    screen = 1;
    
    appButtons.callAll('kill');
 
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
    
    ContractDetail();
    
}

function LoadRecords() {
    
    screen = 3;
    appButtons.callAll('kill');
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



function SelectContract(thisButton) {
    
    if (typeof selectedFrame !== "undefined") {
        
        selectedFrame.destroy();
        
    }
    
    var contractNumber = parseInt(thisButton.name, 10);
    
    console.log("c# is " + contractNumber);
    contractSelected = [contracts[contractNumber][0], contracts[contractNumber][1], contracts[contractNumber][2]];
    selectedFrame = this.game.add.sprite(250 * (contractNumber) + 240, 670, "selectedFrame");
    console.log("cS 0 = " + contractSelected[0]);
    console.log("cS 1 = " + contractSelected[1]);
    console.log("cS 2 = " + contractSelected[2]);
    this.game.contractToComplete = contractSelected;
    computerPanel.addChild(selectedFrame);

}

function SetUpBackButton() {
    
    backButton = this.game.add.button (1000, 940, 'backButtonComputer', GoBack, this, 2,1,0);
    
}

function SetUpText() {
    
    text1;
    text2;
    text3;

    if (screen == 1) {
        
        text1 = this.game.add.text(800, 625, 'Contract', { fill: '#ffffff', fontSize: '60px' });
        text2 = this.game.add.text(800, 800, 'Danger', { fill: '#ffffff', fontSize: '60px' });
        text3 = this.game.add.text(300,925, 'Debris', { fill: '#ffffff', fontSize: '60px' });

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


