var wordList;
var settingsSwitch = 0;
var settingsPanel;
var currentList;
var totalWords = 0;
var saveText
var enter1;
var explain;
var submit;
var clear;
var instructions;
var settingsGroup;



var menuState = {

    create: function () {
      
    window.localStorage.clear();
        
    this.game.plugins.add(PhaserInput.Plugin);
    
    this.game.add.sprite(0,0,'menu');
    

    var button = this.game.add.button (400,300, 'startbutton', start, this, 2,1,0);
    
    //var button2 = this.game.add.button (1100,25, 'settings', showSettings, this, 2,1,0);
    
    //settingsGroup = this.game.add.group();
    
    }

};



//function  saveWord () {
    
//     if (totalWords == 0)
//     {
        
//         currentList.setText("");
//     }
    
//     if (totalWords < 5)
//     {
//         if (totalWords == 0)
//         {
//             saveText = wordList.value;
//         }
//         else
//         {
//             saveText = saveText + " " + wordList.value;    
//         }
        
        
    
//         window.localStorage["save"] = saveText;
        
//         currentList.setText(currentList.text + "\n" + wordList.value);    
        
//         totalWords += 1;
        
        
//     }
    
    
    
//     wordList.resetText();
    

    
//     wordList.startFocus();
    
// }


function  start () {
    
    this.game.state.start('play');
    
}




// function showSettings () {
    

//     if (settingsSwitch == 0)
//     {
//         explain = "Type in up to 5\n words you want\n your students\n to solve.";
//         settingsPanel = this.game.add.sprite(800,50, "settingspanel");
        
//         instructions = this.game.add.text(settingsPanel.x + 30, settingsPanel.y + 10, explain, { fill: '#ffffff', fontSize: '120px' });

//         wordList = this.game.add.inputField(settingsPanel.x + 50, settingsPanel.y + 130, {
//         font: '18px Arial',
//         fill: '#212121',
//         fontWeight: 'bold',
//         width: 150,
//         padding: 8,
//         borderWidth: 1,
//         borderColor: '#000',
//         placeHolder: 'Click Here To Type'
    
//         });

//         wordList.startFocus();
        
//         currentList = this.game.add.text(wordList.x ,wordList.y + 60, "Type one word\nin at a time", { fill: '#ffffff', fontSize: '120px' });   
        
//         submit = this.game.add.button (settingsPanel.x +25, settingsPanel.y + 400, 'submit', saveWord, this, 2,1,0);
        
        
//         clear = this.game.add.button (submit.x +130, settingsPanel.y + 400, 'clear', clearList, this, 2,1,0);

//         // enter1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
//         // enter1.onDown.add(saveWord,this);
//         settingsSwitch = 1;
        
//         return;
//     }
    
//     if (settingsSwitch == 1)
//     {
//         settingsPanel.destroy();
//         instructions.destroy();
//         currentList.destroy();
//         submit.destroy();
//         clear.destroy();
//         wordList.destroy();    
            
//         settingsSwitch = 0;
        
     
        
//     }  

// }



function clearList () {
        
   window.localStorage.clear();
   currentList.setText("");
   totalWords = 0;
                
}


    
