
class level3 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level3' });
    }

    preload() {

        var map = this.load.tilemapTiledJSON('room3','assets/room3.json')

        //this.load.image("cloud", "assets/Street32x32.png");


         this.load.image('pipopng', 'assets/pipo2.png')
         


        // Omar chars
        this.load.spritesheet('player', 'assets/alien.png', { frameWidth: 48, frameHeight: 48 });


    } // end of preload //

    create (){

    console.log("tiled3")

   var map = this.make.tilemap({key:'room3'});


    var tileset1= map.addTilesetImage('pipo2','pipopng');

    let tilesArray = [tileset1]

    this.groundLayer = map.createLayer('ground',tilesArray,0,0)
    this.treeLayer = map.createLayer('tree',tilesArray,0,0)
    this.obstacleLayer = map.createLayer('obstacle',tilesArray,0,0)


   this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 9, end: 13 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 7, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 6 }),
        frameRate: 10,
        repeat: -1
    });


    // load player into phytsics
    this.player = this.physics.add.sprite(400, 400, 'player')

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);


    } // end of create //

    update () {

    if (this.cursors.left.isDown) 
    {
        this.player.setVelocityX(-200);
        this.player.anims.play('left', true);
    } 
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(200);
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-200);
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(200);
        this.player.anims.play('down', true);
    } else {
        this.player.setVelocity(0);
    }


    } // end of update // 
}