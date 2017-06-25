var panel;
var player;
var platforms;
var cursors;
var ground;
var ground2;
var singleGround;
var ledge;
var currentHeight;
var hitPlatform
var planet;
var background;

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
var enemyCreated = false;
var planetCreated = false;
var ufo;
var delayTimer;
var totalEnemies = 0;


var playState = {
 
create: function () {
    cursors = this.game.input.keyboard.createCursorKeys();
 
    //create background

    background = this.game.add.sprite(0,0, 'spaceBackground');
    
    CreatePlatforms();
    currentHeight = this.game.world.height - 64;
    CreatePlatforms2();


    CreateIntroText();
    CreatePlayer();
    
    MakeBubbles();

    //score
    scoreText = this.game.add.text(16, 16, 'score: 0',{fontSize: '32px', fill: 'yellow'});

    //timer
    timer = this.game.time.create(false);
    timer2 = this.game.time.create(false);
    
    total = 180;
    timeText = this.game.add.text(600, 16, 'time: 180',{fontSize: '32px', fill: 'yellow'});
    
    timer.loop(1000, updateCounter, this);
    SetUpEmitters();

 
    directions = this.game.add.sprite(this.game.world.centerX - 125, 400, 'directions');
    
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
    this.scale.setScreenSize( true );

},

update: function() {

    hitPlatform = this.game.physics.arcade.collide(player, platforms);
    this.game.physics.arcade.collide(bubbles, platforms);
    this.game.physics.arcade.collide(bubbles,bubbles);
    this.game.physics.arcade.overlap(player, bubbles, collectBubble, null, this);
    this.game.physics.arcade.overlap(player, ufo, gameOver, null, this);
    
    CheckEnemy();
    
    CheckJump();
    
    CheckShortJump();

    CheckFallingDown();
    
    CheckBackwards();
    
    MovePlayer();
    
    MovePlatforms();

    CheckDeath();
  
    DestroyPlatforms();
    
    CreatePlanet();
    
}
  
};

function CreatePlanet() {
    
    if (total % 55 == 0 && planetCreated == false) {
        
        var planetList = ["planetBrown", "planetRed"];
        
        var pickPlanet = Math.floor(Math.random() * planetList.length);
        console.log("pickplanet = " + pickPlanet);
        
        planet = this.game.add.sprite(1400, 200, planetList[pickPlanet]);
        planetCreated = true;
        
        this.game.world.sendToBack(planet);
        this.game.world.sendToBack(background);
        //RunDelay(SetToFalse, 1500, "planet");
        
        this.game.physics.arcade.enable(planet);

        planet.body.gravity.y = 0;
        planet.body.collideWorldBounds = false;

        planet.body.velocity.x = -25;
    } 
    
}

function CheckEnemy() {
    
    if (total % 25 == 0 && enemyCreated == false) {
        
        if (totalEnemies > 0) {
            
            ufo.destroy();
            
        }
        
        CreateEnemy();
        enemyCreated = true;
        
        RunDelay(SetToFalse, 1500, "ufo");
    } 
    
}

function CreateEnemy() {
    
    
    totalEnemies += 1;
    ufo = this.game.add.sprite(1400, player.y, "ufo");

    this.game.physics.arcade.enable(ufo);
    // player.scale.setTo(2,2);
    //player.body.bounce.y = 0.2;
    ufo.body.gravity.y = 0;
    ufo.body.collideWorldBounds = false;
    //player.body.moves = false;
    //player.body.kinematic = true;
    ufo.body.velocity.x = -200;
    
}

function MakeBubbles() {
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
    
}

function SetUpEmitters() {
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
}

function CreateIntroText() {
    
    introText = this.game.add.text(300, 300,
    'Collect the bubbles in order for the most points.\n Click here to start!',
    {fontSize: '60px', fill: 'yellow', align: 'center',
    backgroundColor: '#fff'});
    
    introText.inputEnabled = true;
    introText.events.onInputDown.add(startGame, this);
}

function CreatePlayer() {
    player = this.game.add.sprite(32, this.game.world.height - 125, 'dude');
    this.game.physics.arcade.enable(player);
    // player.scale.setTo(2,2);
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = false;
    player.body.moves = false;
    player.body.kinematic = true;
    player.animations.add('left', [0,1,2,3,4,5], 13, true);
    player.animations.add('right', [7,8,9,10,11,12], 13, true);
    player.animations.add('jump', [13], 1, true);
}

function CreatePlatforms() {
    
    platforms = this.game.add.group();
    platforms.enableBody = true;
    platforms.kinematic = true;
    ground = platforms.create(0, this.game.world.height - 64, 'ground');
    ground.scale.setTo(3,3);
    ground.body.immovable = true;

}

function CheckBackwards() {
    
    if (cursors.left.isDown || leftClick == true)
    {
        player.body.velocity.x = -50;
        player.animations.play('left');
    }
}

function CreatePlatforms2() {
    
    
    
    var heightAdjustment = Math.floor((Math.random() * 30) + 90);
    
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
    //console.log("CH = " + currentHeight);
}

function DestroyPlatforms() {
 
    for (var i = 0; i < platforms.children.length; i++) {
        
        if (platforms.children[i].x < -900) {
            
            //console.log("platform " + i + " destroyed");
            platforms.children[i].destroy();
            
            
        }
        
        
    }
 
}

function MovePlayer() {
   
   if (player.body.velocity.y < 0 && !cursors.left.isDown) {
        
        player.body.velocity.x = 0;
        player.animations.play("jump");

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
}

function CheckDeath() {
    
    if (player.y > 650 && isDead == false) {
        
        gameOver();
        isDead = true;
        
    }
    
 
}

function CheckFallingDown() {
    
    if (!hitPlatform && cursors.up.isUp && player.body.velocity.y > 0) {
        
        player.body.gravity.y = 900;
        
        
    }
    
}

function CheckJump() {
    
    if (cursors.up.isDown && player.body.touching.down && hitPlatform || jumpClick == true && hitPlatform )
    {
        player.body.velocity.y = -350;

    } 
}

function CheckShortJump() {
    
    if (cursors.up.isUp && player.body.velocity.y < 0) {
        
        player.body.gravity.y = 500;
        
    } 
}

function MovePlatforms() {
    if (gameStarted == true && player.body.moves == true) {
    
        platforms.x -= .01;
    
    } 
    
    
}

function startGame() {
    timer.start();
    
    timer2.loop(2750, CreatePlatforms2, this);
    timer2.start();

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
    
   for (var i = 0; i < platforms.children.length; i++) {
        
        platforms.children[i].body.velocity.setTo(0,0);
        
    }
    
    
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
        enemyCreated = false;
        planetCreated = false;
        totalEnemies = 0;
        this.game.state.start('play');
        
}

function RunDelay(doThis, time, passThis) {
    delayTimer = this.game.time.create(false);
   
    if (passThis == "none") {
        
        delayTimer.add(time, doThis, this);    
        
    } else {
        
        delayTimer.add(time, doThis, this, passThis);
        console.log("rd ran");
    }
    
    delayTimer.start();
    
}

function SetToFalse(falseThis) {
    
    switch (falseThis) {
        case 'ufo':
            enemyCreated = false;
            console.log("ec = " + enemyCreated);
            break;
        
         case 'planet':
            planetCreated = false;
            break;
    }
    
    

}