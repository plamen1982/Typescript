//Create class Shape with id, x and y coordinates and method move

class Shape {
    id :number
    x :number
    y :number
    constructor(id :number, x :number, y :number){
        this.id = id
        this.move(x, y)
    }
    move(x :number, y :number){
        this.x = x
        this.y = y
        return("This is your x coordinate: " + this.x + "/n This is your y coordinate: " + this.y)
    }
    handleError(x :number, y :number){
        if(!x || !y)  {
            return console.log('Place both coordinates')
        }
    }
}

let shape = new Shape(1, 5, 10)

// Enums

class Todo {
    status: number
    tast :string
    constructor(task :string) {
        this.tast = task
    }
}

enum TodoStatus{Open = 1, Started, Done}
let myTodo :Todo = new Todo("New task")
myTodo.status = TodoStatus.Open

//Defining typed arrays, besides native datatypes we can use our own class types in TypeScript

let myArray: Array<string>;
myArray.push('New string')

//Defining interface

interface Vehicle {
    engineStarted :boolean
    startEngine()
}

class Car implements Vehicle {
    engineStarted :boolean
    constructor() {
        this.engineStarted = false
    }
    startEngine(){
        this.engineStarted = true;
    }
}