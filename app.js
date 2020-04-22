{
    /*console.log("test");

    let gameCharacter = {
        name: 'Hung',
        class: 'Human',
        health: 100,
        get title() {
            return this.name + ' the ' + this.class;
        },
        set maxHealth(h) {
            this.health = h;
        },
        xPos: 0,
        items: ['knife', 'food'],
        move: function(x) {
            this.xPos += x;
        }
    }
    let name = gameCharacter.name;
    gameCharacter.items = ['Axe', 'Bread']
    gameCharacter.yPos = 0;
    gameCharacter.move = function (x,y) {
        this.xPos += x;
        this.yPos += y;
    }
    console.log(gameCharacter);

    let hung = gameCharacter;
    console.log(hung.title);

    hung.maxHealth = 150;
    console.log(hung.maxHealth); // undefined due to being a setter
    console.log(hung.health); // it was changed due to us using setter eariler

*/

    function GameCharacter(name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
        this.move = function (x) {
            this.xPos += x;
        }
        this.class = 'Human';
        this.getTitle = () => {
            return this.name + " the " + this.class;
        }
    }

    let char1 = new GameCharacter(
        'hung',
        0,
        100
    );

    console.log(char1.name);
    console.log(char1.getTitle());

    let heal = function(amount) {
        this.health += amount;
    }

    GameCharacter.prototype.weapon = 'Dagger';
    console.log(char1.weapon);

    let char2 = new GameCharacter('joe', 0, 140);
    GameCharacter.prototype.heal = heal;

    char1.heal(500);
    console.log(char1.health);
    char2.heal(1);
    console.log(char2.health);


}
