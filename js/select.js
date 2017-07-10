var planet1;
var planet2;
var planet3;
var planet4;

var shipPanel;
var solarPanel;
var launchButton;

var selectState = {
    

    
    create: function () {
            
        solarPanel = this.game.add.sprite (00,0, "solar1");
        
        shipPanel = this.game.add.sprite(-5,0, "shipPanel");
        shipPanel.fixToCamera = true;
        
     
        SetUpButtons();
        
        SetUpText();
        
    
            
            
            
    },
    
    update: function () {
        
        
        
        
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

function SetUpButtons() {
    
    planet1 = this.game.add.button (300, 200, 'planetBrown', ExplainContract, this, 2,1,0);
    planet1.width = 100;
    planet1.height = 100;
    
    planet2 = this.game.add.button (50, 205, 'planetRed', ExplainContract, this, 2,1,0);
    planet2.width = 75;
    planet2.height = 75;
    
    planet3 = this.game.add.button (585, 325, 'planetIce', ExplainContract, this, 2,1,0);
    planet3.width = 50;
    planet3.height = 50;
    
    planet4 = this.game.add.button (600, 100, 'planetEnergy', ExplainContract, this, 2,1,0);
    planet4.width = 75;
    planet4.height = 65;
    
}


function SetUpText() {
    
    var contractText = this.game.add.text(900, 25, 'Contract', { fill: '#ffffff', fontSize: '60px' });
    var dangerText = this.game.add.text(900, 350, 'Warning', { fill: '#ffffff', fontSize: '60px' });
    var missionText = this.game.add.text(300,450, 'Mission', { fill: '#ffffff', fontSize: '60px' });
    
}

function  startGame (pick) {
    

        
    this.game.state.start('play');
        
}


