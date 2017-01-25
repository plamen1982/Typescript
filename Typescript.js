//Create class Shape with id, x and y coordinates and method move
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
    Shape.prototype.handleError = function (x, y) {
        if (!x || !y) {
            return console.log('Place both coordinates');
        }
    };
    return Shape;
}());
var shape = new Shape(1, 5, 10);
// Enums
var Todo = (function () {
    function Todo(task) {
        this.tast = task;
    }
    return Todo;
}());
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Open"] = 1] = "Open";
    TodoStatus[TodoStatus["Started"] = 2] = "Started";
    TodoStatus[TodoStatus["Done"] = 3] = "Done";
})(TodoStatus || (TodoStatus = {}));
var myTodo = new Todo("New task");
myTodo.status = TodoStatus.Open;
//Defining typed arrays, besides native datatypes we can use our own class types in TypeScript
var myArray;
myArray.push('New string');
var Car = (function () {
    function Car() {
        this.engineStarted = false;
    }
    Car.prototype.startEngine = function () {
        this.engineStarted = true;
    };
    return Car;
}());
