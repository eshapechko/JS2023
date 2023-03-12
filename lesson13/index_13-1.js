class Figure {
    constructor(top, left, html) {
        this.top = top;
        this.left = left;
        this.html = html;
    }

    render() {
        this.html.style.top = `${this.top}px`;
        this.html.style.left = `${this.left}px`;
    }

    moveUp() {
        this.top -= 20;
        this.render();
    }

    moveDown() {
        this.top += 20;
        this.render();
    }

    moveLeft() {
        this.left -= 20;
        this.render();
    }

    moveRight() {
        this.left += 20;
        this.render();
    }
}

class Logo extends Figure {
    constructor(top, left, html, url) {
        super(top, left, html);
        this.width = 200;
        this.imgUrl = url;
    }

    init() {
        const img = document.createElement("img");
        img.src = this.imgUrl;

        document.body.style.backgroundColor = "black";
        img.style.position = "fixed";
        img.style.zIndex = "1";
        img.style.width = `${this.width}px`;

        document.body.appendChild(img);
        this.html = img;

        this.render(); // Отрисовываем элемент
    }
}

class Circle extends Figure {
    constructor(top, left, html, size, color) {
        super(top, left, html);
        this.width = size;
        this.height = size;
        this.color = color;
    }

    init() {
        const div = document.createElement("div");
        this.html = div;
        document.body.appendChild(div);
        div.style.position = "fixed";
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.borderRadius = "50%";
        div.style.backgroundColor = this.color;

        this.render(); // Отрисовываем элемент
    }
}

const imgUrl = "https://bit.ly/2tcDito";
const mfLogotip = new Logo(0, 0, null, imgUrl);
const mfCircle = new Circle(0, 0, null, 200, "yellow");
console.log("mfCircle: ", mfCircle);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();
mfCircle.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();

mfCircle.moveDown();
mfCircle.moveDown();
mfCircle.moveRight();
mfCircle.moveRight();
mfCircle.moveRight();
mfCircle.moveRight();
mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
// mfLogotip.moveDown();
