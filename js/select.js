var planet1;
var planet2;
var planet3;
var planet4;

var shipPanel;
var solarPanel;
var launchButton;
var cursors;

var selectState = {
    

    
    create: function () {
        
        this.game.world.setBounds(0, 0, 1200, 1200);     
        this.game.camera.focusOnXY(600, 900);   
        
        
        shipPanel = this.game.add.sprite(0,0, "shipPanel");
        solarPanel = this.game.add.sprite (100,600, "solar1");
        //shipPanel.fixToCamera = true;
        
     
        SetUpButtons();
        
        SetUpText();
        cursors = this.game.input.keyboard.createCursorKeys();
    
            
            
            
    },
    
    update: function () {
        
        MoveCamera();
        
        
    }
    
    
    
};



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
    
    launchButton = this.game.add.button (pick.x - 30, pick.y - 60, 'launchButton', startGame, this, 2,1,0);

    
    
}

function MoveCamera() {
    
    if (cursors.up.isDown) {
        
        this.game.camera.y -= 10;
        
    }
    
    if (cursors.down.isDown) {
        
        
        this.game.camera.y += 10;
        
    }
    
    
}

function SetUpButtons() {
    
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
    
}


function SetUpText() {
    
    var contractText = this.game.add.text(900, 625, 'Contract', { fill: '#ffffff', fontSize: '60px' });
    var dangerText = this.game.add.text(900, 950, 'Warning', { fill: '#ffffff', fontSize: '60px' });
    var missionText = this.game.add.text(300,950, 'Mission', { fill: '#ffffff', fontSize: '60px' });
    
}

function  startGame (pick) {
    

        
    this.game.state.start('play');
        
}


