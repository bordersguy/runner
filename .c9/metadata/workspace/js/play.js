{"filter":false,"title":"play.js","tooltip":"/js/play.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":192,"column":45},"end":{"row":192,"column":46},"action":"insert","lines":[","],"id":12430}],[{"start":{"row":192,"column":46},"end":{"row":192,"column":47},"action":"insert","lines":[" "],"id":12431}],[{"start":{"row":192,"column":47},"end":{"row":192,"column":48},"action":"insert","lines":["l"],"id":12432}],[{"start":{"row":192,"column":48},"end":{"row":192,"column":49},"action":"insert","lines":["o"],"id":12433}],[{"start":{"row":192,"column":49},"end":{"row":192,"column":50},"action":"insert","lines":["n"],"id":12434}],[{"start":{"row":192,"column":47},"end":{"row":192,"column":50},"action":"remove","lines":["lon"],"id":12435},{"start":{"row":192,"column":47},"end":{"row":192,"column":63},"action":"insert","lines":["longCollisionUFO"]}],[{"start":{"row":192,"column":63},"end":{"row":192,"column":64},"action":"insert","lines":[")"],"id":12436}],[{"start":{"row":194,"column":22},"end":{"row":194,"column":23},"action":"insert","lines":[";"],"id":12437}],[{"start":{"row":191,"column":12},"end":{"row":191,"column":13},"action":"insert","lines":["t"],"id":12438}],[{"start":{"row":191,"column":13},"end":{"row":191,"column":14},"action":"insert","lines":["h"],"id":12439},{"start":{"row":191,"column":14},"end":{"row":191,"column":15},"action":"insert","lines":["i"]}],[{"start":{"row":191,"column":15},"end":{"row":191,"column":16},"action":"insert","lines":["s"],"id":12440}],[{"start":{"row":191,"column":16},"end":{"row":191,"column":17},"action":"insert","lines":["."],"id":12441}],[{"start":{"row":192,"column":12},"end":{"row":192,"column":13},"action":"insert","lines":["t"],"id":12442}],[{"start":{"row":192,"column":13},"end":{"row":192,"column":14},"action":"insert","lines":["h"],"id":12443},{"start":{"row":192,"column":14},"end":{"row":192,"column":15},"action":"insert","lines":["i"]}],[{"start":{"row":192,"column":15},"end":{"row":192,"column":16},"action":"insert","lines":["s"],"id":12444},{"start":{"row":192,"column":16},"end":{"row":192,"column":17},"action":"insert","lines":["."]}],[{"start":{"row":198,"column":0},"end":{"row":222,"column":0},"action":"remove","lines":["        var boundsA = playerCollisionPanel.getBounds();","        var boundsB = latCollisionUFO.getBounds();","        var boundsC = longCollisionUFO.getBounds();","        ","        intersects1 = Phaser.Rectangle.intersection(boundsA, boundsB);","        intersects2 = Phaser.Rectangle.intersection(boundsA, boundsC);","        ","        console.log(\"intersects = \" + intersects1);","        ","        if (intersects1 == true) {","            ","            gameOver();","            ","        }","        ","        if (intersects2 == true) {","            ","            gameOver();","            ","        }","    ","        ","    }","    ",""],"id":12445}],[{"start":{"row":198,"column":0},"end":{"row":199,"column":4},"action":"remove","lines":["","    "],"id":12446}],[{"start":{"row":196,"column":9},"end":{"row":197,"column":0},"action":"insert","lines":["",""],"id":12447},{"start":{"row":197,"column":0},"end":{"row":197,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":197,"column":4},"end":{"row":197,"column":8},"action":"remove","lines":["    "],"id":12448}],[{"start":{"row":197,"column":4},"end":{"row":197,"column":5},"action":"insert","lines":["}"],"id":12449}],[{"start":{"row":173,"column":0},"end":{"row":181,"column":1},"action":"remove","lines":["","checkOverlap: function(spriteA, spriteB) {","","        var boundsA = spriteA.getBounds();","        var boundsB = spriteB.getBounds();","","        return Phaser.Rectangle.intersects(boundsA, boundsB);","","}"],"id":12450}],[{"start":{"row":172,"column":1},"end":{"row":172,"column":2},"action":"remove","lines":[","],"id":12451}],[{"start":{"row":127,"column":2},"end":{"row":128,"column":0},"action":"insert","lines":["",""],"id":12452}],[{"start":{"row":128,"column":0},"end":{"row":129,"column":0},"action":"insert","lines":["",""],"id":12453}],[{"start":{"row":129,"column":0},"end":{"row":137,"column":1},"action":"insert","lines":["","checkOverlap: function(spriteA, spriteB) {","","        var boundsA = spriteA.getBounds();","        var boundsB = spriteB.getBounds();","","        return Phaser.Rectangle.intersects(boundsA, boundsB);","","}"],"id":12454}],[{"start":{"row":137,"column":1},"end":{"row":137,"column":2},"action":"insert","lines":[","],"id":12455}],[{"start":{"row":193,"column":30},"end":{"row":193,"column":31},"action":"insert","lines":["t"],"id":12456}],[{"start":{"row":193,"column":31},"end":{"row":193,"column":32},"action":"insert","lines":["h"],"id":12457}],[{"start":{"row":193,"column":32},"end":{"row":193,"column":33},"action":"insert","lines":["i"],"id":12458}],[{"start":{"row":193,"column":33},"end":{"row":193,"column":34},"action":"insert","lines":["s"],"id":12459}],[{"start":{"row":193,"column":34},"end":{"row":193,"column":35},"action":"insert","lines":["."],"id":12460}],[{"start":{"row":193,"column":57},"end":{"row":193,"column":58},"action":"insert","lines":["t"],"id":12461}],[{"start":{"row":193,"column":58},"end":{"row":193,"column":59},"action":"insert","lines":["h"],"id":12462}],[{"start":{"row":193,"column":59},"end":{"row":193,"column":60},"action":"insert","lines":["i"],"id":12463}],[{"start":{"row":193,"column":60},"end":{"row":193,"column":61},"action":"insert","lines":["s"],"id":12464}],[{"start":{"row":193,"column":61},"end":{"row":193,"column":62},"action":"insert","lines":["."],"id":12465}],[{"start":{"row":194,"column":52},"end":{"row":194,"column":53},"action":"insert","lines":["t"],"id":12466}],[{"start":{"row":194,"column":53},"end":{"row":194,"column":54},"action":"insert","lines":["h"],"id":12467}],[{"start":{"row":194,"column":54},"end":{"row":194,"column":55},"action":"insert","lines":["i"],"id":12468}],[{"start":{"row":194,"column":55},"end":{"row":194,"column":56},"action":"insert","lines":["s"],"id":12469}],[{"start":{"row":194,"column":56},"end":{"row":194,"column":57},"action":"insert","lines":["."],"id":12470}],[{"start":{"row":194,"column":30},"end":{"row":194,"column":31},"action":"insert","lines":["t"],"id":12471}],[{"start":{"row":194,"column":31},"end":{"row":194,"column":32},"action":"insert","lines":["h"],"id":12472}],[{"start":{"row":194,"column":32},"end":{"row":194,"column":33},"action":"insert","lines":["i"],"id":12473}],[{"start":{"row":194,"column":33},"end":{"row":194,"column":34},"action":"insert","lines":["s"],"id":12474}],[{"start":{"row":194,"column":34},"end":{"row":194,"column":35},"action":"insert","lines":["."],"id":12475}],[{"start":{"row":193,"column":79},"end":{"row":194,"column":79},"action":"remove","lines":["||","            this.checkOverlap(this.playerCollisionPanel, this.longCollisionUFO)"],"id":12476}],[{"start":{"row":193,"column":78},"end":{"row":193,"column":79},"action":"remove","lines":[" "],"id":12477}],[{"start":{"row":191,"column":4},"end":{"row":191,"column":7},"action":"insert","lines":["// "],"id":12478},{"start":{"row":193,"column":4},"end":{"row":193,"column":7},"action":"insert","lines":["// "]},{"start":{"row":195,"column":4},"end":{"row":195,"column":7},"action":"insert","lines":["// "]},{"start":{"row":197,"column":4},"end":{"row":197,"column":7},"action":"insert","lines":["// "]},{"start":{"row":198,"column":4},"end":{"row":198,"column":7},"action":"insert","lines":["// "]}],[{"start":{"row":156,"column":5},"end":{"row":157,"column":0},"action":"insert","lines":["",""],"id":12479},{"start":{"row":157,"column":0},"end":{"row":157,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":157,"column":4},"end":{"row":158,"column":0},"action":"insert","lines":["",""],"id":12480},{"start":{"row":158,"column":0},"end":{"row":158,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":158,"column":4},"end":{"row":165,"column":5},"action":"insert","lines":["   if (checkCollision == true) {","        ","        if (this.checkOverlap(this.playerCollisionPanel, this.latCollisionUFO)) {","            ","            gameOver();","            ","        }","    }"],"id":12481}],[{"start":{"row":158,"column":0},"end":{"row":158,"column":4},"action":"remove","lines":["    "],"id":12482}],[{"start":{"row":160,"column":30},"end":{"row":160,"column":31},"action":"remove","lines":["t"],"id":12483}],[{"start":{"row":160,"column":30},"end":{"row":160,"column":31},"action":"remove","lines":["h"],"id":12484}],[{"start":{"row":160,"column":30},"end":{"row":160,"column":31},"action":"remove","lines":["i"],"id":12485}],[{"start":{"row":160,"column":30},"end":{"row":160,"column":31},"action":"remove","lines":["s"],"id":12486}],[{"start":{"row":160,"column":30},"end":{"row":160,"column":31},"action":"remove","lines":["."],"id":12487}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["t"],"id":12488}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["h"],"id":12489}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["i"],"id":12490}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["s"],"id":12491}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["."],"id":12492}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"remove","lines":["l"],"id":12493}],[{"start":{"row":160,"column":52},"end":{"row":160,"column":53},"action":"insert","lines":["l"],"id":12494}],[{"start":{"row":130,"column":0},"end":{"row":137,"column":2},"action":"remove","lines":["checkOverlap: function(spriteA, spriteB) {","","        var boundsA = spriteA.getBounds();","        var boundsB = spriteB.getBounds();","","        return Phaser.Rectangle.intersects(boundsA, boundsB);","","},"],"id":12495}],[{"start":{"row":184,"column":1},"end":{"row":184,"column":2},"action":"insert","lines":[","],"id":12496}],[{"start":{"row":184,"column":2},"end":{"row":185,"column":0},"action":"insert","lines":["",""],"id":12497}],[{"start":{"row":185,"column":0},"end":{"row":192,"column":2},"action":"insert","lines":["checkOverlap: function(spriteA, spriteB) {","","        var boundsA = spriteA.getBounds();","        var boundsB = spriteB.getBounds();","","        return Phaser.Rectangle.intersects(boundsA, boundsB);","","},"],"id":12498}],[{"start":{"row":184,"column":2},"end":{"row":185,"column":0},"action":"insert","lines":["",""],"id":12499}],[{"start":{"row":193,"column":1},"end":{"row":193,"column":2},"action":"remove","lines":[","],"id":12500}],[{"start":{"row":138,"column":3},"end":{"row":139,"column":102},"action":"remove","lines":[" // this.game.physics.arcade.overlap(playerCollisionPanel, latCollisionUFO, gameOver, null, this);","    // this.game.physics.arcade.overlap(playerCollisionPanel, longCollisionUFO, gameOver, null, this);"],"id":12501}],[{"start":{"row":138,"column":3},"end":{"row":139,"column":4},"action":"remove","lines":["","    "],"id":12502}],[{"start":{"row":151,"column":68},"end":{"row":151,"column":69},"action":"insert","lines":[" "],"id":12503}],[{"start":{"row":151,"column":69},"end":{"row":151,"column":70},"action":"insert","lines":["|"],"id":12504}],[{"start":{"row":151,"column":70},"end":{"row":151,"column":71},"action":"insert","lines":["|"],"id":12505}],[{"start":{"row":151,"column":71},"end":{"row":151,"column":72},"action":"insert","lines":[" "],"id":12506}],[{"start":{"row":151,"column":72},"end":{"row":152,"column":0},"action":"insert","lines":["",""],"id":12507},{"start":{"row":152,"column":0},"end":{"row":152,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":152,"column":8},"end":{"row":152,"column":9},"action":"insert","lines":[" "],"id":12508}],[{"start":{"row":152,"column":9},"end":{"row":152,"column":10},"action":"insert","lines":[" "],"id":12509}],[{"start":{"row":152,"column":10},"end":{"row":152,"column":11},"action":"insert","lines":[" "],"id":12510}],[{"start":{"row":152,"column":11},"end":{"row":152,"column":12},"action":"insert","lines":[" "],"id":12511}],[{"start":{"row":152,"column":12},"end":{"row":152,"column":13},"action":"insert","lines":["t"],"id":12512}],[{"start":{"row":152,"column":13},"end":{"row":152,"column":14},"action":"insert","lines":["h"],"id":12513}],[{"start":{"row":152,"column":14},"end":{"row":152,"column":15},"action":"insert","lines":["i"],"id":12514}],[{"start":{"row":152,"column":15},"end":{"row":152,"column":16},"action":"insert","lines":["s"],"id":12515}],[{"start":{"row":152,"column":16},"end":{"row":152,"column":17},"action":"insert","lines":["."],"id":12516}],[{"start":{"row":152,"column":17},"end":{"row":152,"column":18},"action":"insert","lines":["c"],"id":12517}],[{"start":{"row":152,"column":18},"end":{"row":152,"column":19},"action":"insert","lines":["h"],"id":12518}],[{"start":{"row":152,"column":17},"end":{"row":152,"column":19},"action":"remove","lines":["ch"],"id":12519},{"start":{"row":152,"column":17},"end":{"row":152,"column":31},"action":"insert","lines":["checkOverlap()"]}],[{"start":{"row":152,"column":30},"end":{"row":152,"column":31},"action":"insert","lines":["p"],"id":12520}],[{"start":{"row":152,"column":31},"end":{"row":152,"column":32},"action":"insert","lines":["l"],"id":12521}],[{"start":{"row":152,"column":32},"end":{"row":152,"column":33},"action":"insert","lines":["a"],"id":12522}],[{"start":{"row":152,"column":30},"end":{"row":152,"column":33},"action":"remove","lines":["pla"],"id":12523},{"start":{"row":152,"column":30},"end":{"row":152,"column":50},"action":"insert","lines":["playerCollisionPanel"]}],[{"start":{"row":152,"column":50},"end":{"row":152,"column":51},"action":"insert","lines":[","],"id":12524}],[{"start":{"row":152,"column":51},"end":{"row":152,"column":52},"action":"insert","lines":[" "],"id":12525}],[{"start":{"row":152,"column":52},"end":{"row":152,"column":53},"action":"insert","lines":["l"],"id":12526}],[{"start":{"row":152,"column":53},"end":{"row":152,"column":54},"action":"insert","lines":["o"],"id":12527}],[{"start":{"row":152,"column":54},"end":{"row":152,"column":55},"action":"insert","lines":["n"],"id":12528}],[{"start":{"row":152,"column":55},"end":{"row":152,"column":56},"action":"insert","lines":["g"],"id":12529}],[{"start":{"row":152,"column":52},"end":{"row":152,"column":56},"action":"remove","lines":["long"],"id":12530},{"start":{"row":152,"column":52},"end":{"row":152,"column":68},"action":"insert","lines":["longCollisionUFO"]}]]},"ace":{"folds":[],"scrolltop":2184.1999683380127,"scrollleft":25.4425,"selection":{"start":{"row":162,"column":4},"end":{"row":162,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":142,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1498487625749,"hash":"f52e27332776327198957ed92a0bf8db39000cdc"}