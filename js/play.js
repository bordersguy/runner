var panel;
var player;
var platforms;
var cursors;
var ground;
var ground2;
var singleGround;
var ledge;
var currentHeight;

var bubbles;
var score = 0;
var scoreText;

var timer;
var total;
var timeText;

var timer2;

var emitter;
var emitter2;
var emitter3;
var emitter4;

var letterText;
var wordList = ['GAMEDESIGN', 'HAVEFUN', 'EDUCATION'];

var word;
var scoreWord;

var introText;
var finalPoint;

var directions;
var leftButton;
var leftClick;
var rightButton;
var rightClick;
var jumpButton1;
var jumpButton2;
var jumpClick;

var isDead = false;
var gameStarted = false;


var playState = {
 
create: function () {
    cursors = this.game.input.keyboard.createCursorKeys();
 
    //create background

    this.game.add.sprite(0,0, 'sky');
    
    CreatePlatforms();
    currentHeight = this.game.world.height - 64;
    CreatePlatforms2();

    //create intro
    introText = this.game.add.text(300, 300,
    'Collect the bubbles in order for the most points.\n Click here to start!',
    {fontSize: '60px', fill: '#000', align: 'center',
    backgroundColor: '#fff'});
    
    introText.inputEnabled = true;
    introText.events.onInputDown.add(startGame, this);
    //here!
    //var intropanel = panel.create(introText.x,introText.y, 'panel');
    //create player
    player = this.game.add.sprite(32, this.game.world.height - 125, 'dude');
    this.game.physics.arcade.enable(player);
    // player.scale.setTo(2,2);
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = false;
    player.body.moves = false;
    player.body.kinematic = true;
    player.animations.add('left', [0,1,2,3], 10, true);
    player.animations.add('right', [5,6,7,8], 10, true);
    
    //make bubbles
    bubbles = this.game.add.group();
  
    bubbles.enableBody = true;
    
    
    if (window.localStorage.getItem("save") != null)
    {
        wordList = window.localStorage.getItem("save").split(" ");
    }
        
    word = wordList[Math.floor(Math.random() * wordList.length)];    
    scoreWord = word;        
    for (var i = 0; i < word.length; i++)
    {
        var bubble = bubbles.create(i * 70,40, 'bubble');
        bubble.body.gravity.setTo(0,0);
        bubble.body.bounce.setTo(0.7 + Math.random() * 0.2, 0.7 + Math.random() * 0.2);
     
        bubble.body.collideWorldBounds = true;
        var style = { font: "32px Arial", fill: "black", 
        wordWrap: true, wordWrapWidth: bubble.width,
        align: "center", backgroundColor: "transparent" };

        
        
        
        if (word.charAt(i) == 'I')
        {
             letterText = this.game.add.text(20, 9, "I", style );
        }
        else
        {
             letterText = this.game.add.text(11, 9, word.charAt(i), style );
        }
        bubble.addChild(letterText);
        
    }
    
    //score
    scoreText = this.game.add.text(16, 16, 'score: 0',{fontSize: '32px', fill: '#000'});

    //timer
    timer = this.game.time.create(false);
    timer2 = this.game.time.create(false);
    
    total = 60;
    timeText = this.game.add.text(600, 16, 'time: 60',{fontSize: '32px', fill: '#000'});
    
    timer.loop(1000, updateCounter, this);
    timer2.loop(2500, CreatePlatforms2, this);
    timer2.start();

    //explosion
    emitter = this.game.add.emitter(0,0,100);
    emitter.makeParticles('diamond');
    emitter.gravity = Math.floor((Math.random() * 200) + 1);
    
    emitter2 = this.game.add.emitter(0,0,100);
    emitter2.makeParticles('diamond');
    emitter2.gravity = Math.floor((Math.random() * -200) + 1);
    
    emitter3 = this.game.add.emitter(0,0,100);
    emitter3.makeParticles('star');
    emitter3.gravity = Math.floor((Math.random() * 200) + 1);
    
    emitter4 = this.game.add.emitter(0,0,100);
    emitter4.makeParticles('star');
    emitter4.gravity = Math.floor((Math.random() * -200) + 1);
 
    directions = this.game.add.sprite(this.game.world.centerX - 125, 400, 'directions');
    
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
    this.scale.setScreenSize( true );
    
    console.log("player y = " + player.y);
},

update: function() {

    var hitPlatform = this.game.physics.arcade.collide(player, platforms);
    this.game.physics.arcade.collide(bubbles, platforms);
    this.game.physics.arcade.collide(bubbles,bubbles);
    this.game.physics.arcade.overlap(player, bubbles, collectBubble, null, this);

    if (cursors.up.isDown && player.body.touching.down && hitPlatform || jumpClick == true && hitPlatform )
    {
        player.body.velocity.y = -350;

    } 
    
    if (cursors.up.isUp && player.body.velocity.y < 0) {
        
        player.body.gravity.y = 500;
        
    } 
    
    if (!hitPlatform && cursors.up.isUp && player.body.velocity.y > 0) {
        
        player.body.gravity.y = 900;
        
        
    }

    
    if (cursors.left.isDown || leftClick == true)
    {
        player.body.velocity.x = -50;
        player.animations.play('left');
    }
    
    if (player.body.velocity.y < 0 && !cursors.left.isDown) {
        
        player.body.velocity.x = 0;

    } else if (player.body.velocity.y == 0) {
        
        if (gameStarted == true) {
            
            player.body.gravity.y = 300;
            
            player.animations.play('right');
            
            if (player.x < 300) {
                
                 player.body.velocity.x = 350;
                
            } else if (player.x > 300 && player.x <= 600) {
                
                 player.body.velocity.x = 250;
                
            } else if (player.x > 600 ) {
                
                
                player.body.velocity.x = 200;
                
            }
           
            
            
        }
    }

    
    if (gameStarted == true) {
    
        platforms.x -= .01;
    
    }
    
    CheckDeath();
  
    
    
}
  
};


function CreatePlatforms() {
    
    platforms = this.game.add.group();
    platforms.enableBody = true;
    platforms.kinematic = true;
    ground = platforms.create(0, this.game.world.height - 64, 'ground');
    ground.scale.setTo(3,3);
    ground.body.immovable = true;

}

function CreatePlatforms2() {
    
    var heightAdjustment = Math.floor((Math.random() * 90) + 90);
    
    var negativePositive = Math.floor((Math.random() * 2) + 1);
    
  
        
    if (currentHeight >= 300 && currentHeight <= 420 ) {
            
        if (negativePositive == 1) {
                
            heightAdjustment = heightAdjustment * -1; 
                
        } 
        
    } else if (currentHeight < 300) {
            
            heightAdjustment = heightAdjustment * -1;
            
        
    }
    
    var groundLength = Math.floor((Math.random() * 8) + 2);
    
    for (var i = 0; i < groundLength; i++) {
        
        ground = platforms.create(1300 + (i * 78), currentHeight - heightAdjustment, 'singleGround');
        ground.scale.setTo(3,3);
        ground.body.immovable = true;
        
    }

    
    currentHeight = currentHeight - heightAdjustment;
    console.log("CH = " + currentHeight);
}

function CheckDeath() {
    
    if (player.y > 650 && isDead == false) {
        
        gameOver();
        isDead = true;
        
    }
}

function startGame() {
    timer.start();
    gameStarted = true;
    bubbles.forEach(function (child) {
        child.body.velocity.setTo(200,200);
        
    });
    player.body.moves = true;
    
    jumpButton1 = this.game.add.sprite(200,125, 'movebutton');
    jumpButton1.anchor.setTo(0.5);
    jumpButton1.inputEnabled = true;
    jumpButton1.events.onInputDown.add(jumpUp, this);
    
    jumpButton2 = this.game.add.sprite(1000,125, 'movebutton');
    jumpButton2.anchor.setTo(0.5);
    jumpButton2.inputEnabled = true;
    jumpButton2.events.onInputDown.add(jumpUp, this);
    
    leftButton = this.game.add.sprite(200,475, 'movebutton');
    leftButton.anchor.setTo(0.5);
    leftButton.inputEnabled = true;
    leftButton.events.onInputDown.add(moveLeft, this);
    
    rightButton = this.game.add.sprite(1000,475, 'movebutton');
    rightButton.anchor.setTo(0.5);
    rightButton.inputEnabled = true;
    rightButton.events.onInputDown.add(moveRight, this);
    
    rightButton.events.onInputUp.add(stopRight, this);
    leftButton.events.onInputUp.add(stopLeft, this);
    jumpButton1.events.onInputUp.add(stopJump, this);
    jumpButton2.events.onInputUp.add(stopJump, this);
    
    score = 0;
    
    introText.destroy();
    
    directions.destroy();

}

function jumpUp(){
    jumpClick = true;
 
}

function stopJump(){
    jumpClick = false;
    
}

function moveLeft(){
    leftClick = true;
    
}

function moveRight(){
    rightClick = true;
    
}

function stopLeft () {
    leftClick = false;
    
}

function stopRight () {
    rightClick = false;
    
}



function gameOver(){
    
    player.body.moves = false;
    
     bubbles.forEach(function (child) {
        child.body.velocity.setTo(0,0);
        
    });
    
    timer.stop();
    
    pointTotal();
    
    var playbutton = this.game.add.button (panel.x,panel.y + 60, 'playagain', start, this, 2,1,0);
    playbutton.anchor.setTo(0.5);
    
    
    
    // word = "GAMEDESIGN";
}

function pointTotal () {
    
    panel = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'panel');
    panel.anchor.setTo(0.5);
    
    finalPoint = this.game.add.text(panel.x, panel.y - 50, 
    'Collect the bubbles in order for the most points.\n Click here to start!',
    { font: '30px Helvetica', fil: '#000', align: 'center',
    backgroundColor: '#fff'});

    finalPoint.anchor.setTo(0.5);
    
    if (score < 100)
    {
        finalPoint.setText("Game Over\nThat was okay\n...but you can do better!");
        
        
    }
    else if (score > 99 && score < 200)
    {
        
        finalPoint.setText("Game Over\nPretty good!\n  Can you break 200?");
    }
    else if (score > 199 && score < 300)
    {
        finalPoint.setText("Game Over\nNice!!\n  Go for 300!");
        
    }
    else
    {
        finalPoint.setText("Game Over\nWow!!\n  You're Perfect!!");
        
    }
    
}

function updateCounter() {
    
    total -= 1;
    
    timeText.setText('Time: ' + total);
   
    if (total == 0)
    {
       timer.stop();
       
       gameOver();
        
    }
    
}

function collectBubble (player, bubble) {
    
    
    for (var i = 0; i < word.length; i++) 
    {
        var check = bubble.children[0];
            
        if (check.text == word[i])
        {
            diamondBurst(bubble.x, bubble.y);
            word = word.replace(check.text, "");
            bubble.kill();
            score += Math.ceil(300/scoreWord.length);
            scoreText.text = 'Score: ' + score;
            
            if (word.length == 0)
            {
                gameOver();
                
            }
            
            return;
            
        }
        else
        {
            starBurst(bubble.x, bubble.y);
            word = word.replace(check.text, "");
            bubble.kill();
            score += Math.ceil(300/(scoreWord.length * 3));
            scoreText.text = 'Score: ' + score;
            
            if (word.length == 0)
            {
                gameOver();
            }
            
            return;
        
        }
       
        
    }

}

function diamondBurst(x,y){
    emitter.x = x;
    emitter.y = y;
    emitter.start(true, 2000, null, 30);
    
    emitter2.x = x;
    emitter2.y = y;
    emitter2.start(true, 3000, null, 10);
    
}

function starBurst(x,y){
    emitter3.x = x;
    emitter3.y = y;
    emitter3.start(true, 2000, null, 3);
    
    emitter4.x = x;
    emitter4.y = y;
    emitter4.start(true, 3000, null, 5);
    
}

function  start () {
      
        word = wordList[Math.floor(Math.random() * wordList.length)];   
        isDead = false;
        gameStarted = false;
        this.game.state.start('play');
        
}
