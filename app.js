{
    console.log("test");

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



}
