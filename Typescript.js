//Create class Shape with id, x and y coodrinates and method move
var Shape = (function () {
    function Shape(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    Shape.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        return ("This is your x coordinate: " + this.x + "/n This is your y coordinate: " + this.y);
    };
    return Shape;
}());
var shape = new Shape(1, 15, 20);
shape.move(20, 25);
