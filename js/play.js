//To Do

//Create more planets
//Create planet effects
//Change word puzzle
//Create transparent blocks to overlay over ufo as collision detectors


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
var playerHit;
var platformHit;
var slideTime = 0;
var slideWait = false;
var makeBubble = true;
var latCollisionUFO;
var longCollisionUFO;
var ufoGroup;
var playerCollisionPanel;
var playerGroup;
var intersects1;
var intersects2;
var checkCollision = false;
var collisionCounter = 0;


var playState = {
 
create: function () {
    cursors = this.game.input.keyboard.createCursorKeys();
    
    background = this.game.add.sprite(0,0, 'spaceBackground');
    
    
    SetUpBubbles();
    //create background
    
    
    
    CreatePlatforms();
    currentHeight = this.game.world.height - 64;
    CreatePlatforms2();


    CreateIntroText();
    
    
    CreatePlayer();
    
    

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
    
    // ufo = this.game.add.sprite(0, -500, "ufo");
    // player = this.game.add.sprite(32, this.game.world.height - 125, 'dude');            
    
    RunDelay(SetToFalse, 2000, "bubble");

},




update: function() {

    hitPlatform = this.game.physics.arcade.collide(player, platforms);
    this.game.physics.arcade.collide(bubbles, platforms);
    this.game.physics.arcade.collide(bubbles,bubbles);
    this.game.physics.arcade.overlap(player, bubbles, collectBubble, null, this);
   
    if (collisionCounter == 3) {
        
        checkCollision = true;
        
    } else {
        
        checkCollision = false;
        
    }
    
   if (checkCollision == true) {
        
        if (this.checkOverlap(playerCollisionPanel, latCollisionUFO) || 
            this.checkOverlap(playerCollisionPanel, longCollisionUFO)) {
            
            gameOver();
            
        }
    }
    
    CheckCollisions();
    
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
    
    MakeBubbles();

},

checkOverlap: function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

}

  
};



function CheckCollisions() {
    
    // if (checkCollision == true) {
        
    //     if (this.checkOverlap(this.playerCollisionPanel, this.latCollisionUFO)) {
            
    //         gameOver();
            
    //     }
    // }
        

}

function CreatePlanet() {
    
    if (total % 55 == 0 && planetCreated == false) {
        
        var planetList = ["planetBrown", "planetRed"];
        
        var pickPlanet = Math.floor(Math.random() * planetList.length);
        
        
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
            
            ufoGroup.destroy();
            collisionCounter -= 2;
            
        }
        
        CreateEnemy();
        enemyCreated = true;
        
        RunDelay(SetToFalse, 1500, "ufo");
    } 
    
}

function CreateEnemy() {
    
    
    totalEnemies += 1;
    ufoGroup = this.game.add.group();
    //ufoGroup.enableBody = true;

    ufo = ufoGroup.create(1400, player.y, "ufo");
    this.game.physics.arcade.enable(ufo);
    //ufo.enableBody = true;
    ufo.body.gravity.y = 0;
    ufo.body.collideWorldBounds = false;
    ufo.body.velocity.x = -200;

    latCollisionUFO = ufoGroup.create(40, 10, 'latCollisionUFO');
    longCollisionUFO = ufoGroup.create(10, 50, 'longCollisionUFO');
    
    collisionCounter += 2;
    // this.game.physics.arcade.enable(latCollisionUFO);
    // this.game.physics.arcade.enable(longCollisionUFO);
    ufo.addChild(latCollisionUFO);
    ufo.addChild(longCollisionUFO);
    // latCollisionUFO.body.velocity.x = -200;
    // latCollisionUFO.body.gravity.y = 0;
    
    // longCollisionUFO.body.velocity.x = -200;
    // longCollisionUFO.body.gravity.y = 0;
    
    console.log("cC = " + collisionCounter);
    
}

function SetUpBubbles() {

    bubbles = this.game.add.group();
    bubbles.enableBody = true;
    
    if (window.localStorage.getItem("save") != null)
    {
        wordList = window.localStorage.getItem("save").split(" ");
    }
        
    word = wordList[Math.floor(Math.random() * wordList.length)];    
    scoreWord = word;   
}

function MakeBubbles() {
 
    if (makeBubble == false) {
        
        var pickLetter = Math.floor(Math.random() * word.length);
        var bubble = bubbles.create(1400, player.y - 100, 'bubble');
       
        bubble.body.gravity.setTo(0,0);
        bubble.body.bounce.setTo(0.7 + Math.random() * 0.2, 0.7 + Math.random() * 0.2);
        bubble.body.velocity.setTo(-100, 5);
        //bubble.body.collideWorldBounds = true;
        var style = { font: "32px Arial", fill: "black", 
        wordWrap: true, wordWrapWidth: bubble.width,
        align: "center", backgroundColor: "transparent" };

        if (word.charAt(pickLetter) == 'I')
        {
             letterText = this.game.add.text(20, 9, "I", style );
        }
        else
        {
             letterText = this.game.add.text(11, 9, word.charAt(pickLetter), style );
        }
        bubble.addChild(letterText);
        
        this.game.world.bringToTop(bubble);
        
        makeBubble = true;
        
        RunDelay(SetToFalse, 2000, "bubble");
        
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
    
    playerGroup = this.game.add.group();
    
    player = playerGroup.create(32, this.game.world.height - 125, 'dude');  
    
    this.game.physics.arcade.enable(player);
    // player.scale.setTo(2,2);
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = false;
    player.body.moves = false;
    //player.body.kinematic = true;
    player.animations.add('left', [0,1,2,3,4,5], 18, true);
    player.animations.add('right', [7,8,9,10,11,12], 18, true);
    player.animations.add('jump', [13], 1, true);
    player.animations.add('slide', [14], 1, true);
    
    playerCollisionPanel = playerGroup.create(player.x - 20, 0, "playerCollisionPanel");
    //this.game.physics.arcade.enable(playerCollisionPanel);
    
    player.addChild(playerCollisionPanel);
    collisionCounter += 1;


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
    
    if ((cursors.left.isDown && player.body.velocity.y !== 0) || (leftClick == true && player.body.velocity.y !== 0))
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

}

function DestroyPlatforms() {
 
    for (var i = 0; i < platforms.children.length; i++) {
        
        if (platforms.children[i].x < -900) {
            

            platforms.children[i].destroy();
            
            
        }
        
        
    }
 
}

function MovePlayer() {
   
   if (slideWait == true) {
       
       if (slideTime > -2) {
           
            slideTime -= 1;    
           
       }
  
   }

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
           
           
            // playerCollisionPanel.x = player.x + 16;
            // playerCollisionPanel.y = player.y;
            
            
            if (cursors.down.isDown) {
                
                if (slideTime > 60) {
                    
                    slideWait = true;
                    
                } else if (slideTime < 0) {
                    
                    slideWait = false;
                    
                }

                if (slideWait == false) {
                    
                    slideTime += 1;
                    player.animations.play('slide');
                        
                }
                
                
            } else if (!cursors.down.isDown) {
                
                slideWait = true;
                
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
    
    player.destroy();
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
        slideTime = 0;
        slideWait = false;
        makeBubble = true;
        collisionCounter = 0;
        checkCollision = false;
        
        this.game.state.start('play');
        
}

function RunDelay(doThis, time, passThis) {
    delayTimer = this.game.time.create(false);
   
    if (passThis == "none") {
        
        delayTimer.add(time, doThis, this);    
        
    } else {
        
        delayTimer.add(time, doThis, this, passThis);

    }
    
    delayTimer.start();
    
}

function SetToFalse(falseThis) {

    switch (falseThis) {
        case 'ufo':
            enemyCreated = false;
            break;
        
         case 'planet':
            planetCreated = false;
            break;
            
        case 'bubble':
            makeBubble = false;
            break;
    }
    
    

}