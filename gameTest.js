{
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    console.log(canvas);
    console.log(context);

    let screenWidth = 1000;
    let screenHeight = 500;
    let width = 50;

    class GameCharacter {
        constructor(x, y, width, height, color, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.speed = speed;
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

        enemies.forEach((element) => {
            context.fillStyle = element.color;
            context.fillRect(element.x, element.y, element.width, element.height)
        })
        // context.fillStyle = rectangle.color;
        // context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        //
        // context.fillRect(rectangle.x + 200, rectangle.y, rectangle.width, rectangle.height);
        //
        // context.fillRect(rectangle.x + 400, rectangle.y, rectangle.width, rectangle.height);
    }

    let enemies = [
        new GameCharacter(200, 50, width, width, 'rgb(0,0,255)', 2),
        new GameCharacter(450, screenHeight - 100, width, width, 'rgb(0,0,255)', 2),
        new GameCharacter(700, 50, width, width, 'rgb(0,0,255)', 2)];

    let update = function () {
        enemies[0].moveVertically();
    }

    // Set up the step aka 'update' function
    let step = function () {
        update();
        draw();

        window.requestAnimationFrame(step);
    }

    step();
}