//Create class Shape with id, x and y coordinates and method move
var Shape = (function () {
    function Shape(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    Shape.prototype.move = function (x, y) {
        this.handleError(this.x, this.y);
        this.x = x;
        this.y = y;
        return ("This is your x coordinate: " + this.x + "/n This is your y coordinate: " + this.y);
    };
    Shape.prototype.handleError = function (x, y) {
        if (!x || !y) {
            return console.log('Place both coordinates');
        }
    };
    return Shape;
}());
var shape = new Shape(1, 5, 10);
