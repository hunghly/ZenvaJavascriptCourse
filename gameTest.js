{
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    console.log(canvas);
    console.log(context);

    let screenWidth = 1000;
    let screenHeight = 500;
    let width = 50;
    let isGameLive = true;

    class GameCharacter {
        constructor(x, y, width, height, color, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.speed = speed;
            this.maxSpeed = 4;
        }
        moveHorizontally() {
            this.x += this.speed;
        }
        moveVertically() {
            if (this.y > screenHeight - 50 || this.y < 0) {
                this.speed = -this.speed;
            }
            this.y += this.speed;
        }
    }

    let rectangle = new GameCharacter(50, 50, 50, 50, 'rgb(0, 0, 255)');

    let draw = function () {
        context.clearRect(0, 0, screenWidth, screenHeight);
        // draw background
        context.drawImage(sprites.background, 0, 0);

        // context.fillStyle = player.color;
        // context.fillRect(player.x, player.y, player.width, player.height);

        // draw the player
        context.drawImage(sprites.player, player.x, player.y)

        // context.fillStyle = goal.color;
        // context.fillRect(goal.x, goal.y, goal.width, goal.height);

        //draw goal
        context.drawImage(sprites.goal, goal.x, goal.y);

        enemies.forEach((element) => {
            // context.fillStyle = element.color;
            // context.fillRect(element.x, element.y, element.width, element.height)

            //draw enemy
            context.drawImage(sprites.enemy, element.x, element.y);
        })
        // context.fillStyle = rectangle.color;
        // context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        //
        // context.fillRect(rectangle.x + 200, rectangle.y, rectangle.width, rectangle.height);
        //
        // context.fillRect(rectangle.x + 400, rectangle.y, rectangle.width, rectangle.height);
    }

    let enemies = [
        new GameCharacter(200, 225, width, width, 'rgb(0,0,255)', 2),
        new GameCharacter(450, screenHeight - 100, width, width, 'rgb(0,0,255)', 3),
        new GameCharacter(700, 50, width, width, 'rgb(0,0,255)', 4)];

    let player = new GameCharacter(50, 225, width, width, 'rgb(0, 255, 0)', 0);
    let goal = new GameCharacter(screenWidth - width, 225, width, width, 'rgb(0,0,0)', 0);
    let sprites = {};

    let loadSprites = function() {
        sprites.player = new Image();
        sprites.player.src = 'images/hero.png';

        sprites.background = new Image();
        sprites.background.src = 'images/floor.png';

        sprites.enemy = new Image();
        sprites.enemy.src = 'images/enemy.png';

        sprites.goal = new Image();
        sprites.goal.src = 'images/chest.png';
    }


    let checkCollisions = function(rect1, rect2) {
        let xOverlap = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.width, rect2.width);
        let yOverlap = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.width, rect2.width);
        // console.log(rect1 + " x: " + rect1.x);
        // console.log(rect1 + " y: " + rect1.y);
        // console.log(rect2 + " y: " + rect2.x);
        // console.log(rect2 + " y: " + rect2.y);
        return xOverlap && yOverlap;
    }

    let endGameLogic = function(text) {
        alert(text);
        window.location = "";
    }

    let update = function () {
        if (checkCollisions(player,goal)) {
            isGameLive = false;
            endGameLogic('You win!');
        }
        // move horizontally at all times
        player.moveHorizontally();
        // depending on the left or right arrow clicked, the direction changes
        document.onkeydown = function(event) {
            let keyPressed = event.keyCode;
            if (keyPressed === 39) {
                player.speed = player.maxSpeed;
            }
            if (keyPressed === 37) {
                player.speed = -player.maxSpeed;
            }
        };
        // if key is not pressed then nothing is moved
        document.onkeyup = function(event) {
            let keyPressed = event.keyCode;
            if (keyPressed === 39 || keyPressed === 37) {
                player.speed = 0;
            }
        }

        enemies.forEach(function(enemy) {
            if (checkCollisions(player, enemy)) {
                isGameLive = false;
                endGameLogic('You lose!')
            }
            enemy.moveVertically();
        })

    }

    // Set up the step aka 'update' function
    let step = function () {
        update();
        draw();

        if (isGameLive) {
            window.requestAnimationFrame(step);
        }
    }

    loadSprites();
    step();
}