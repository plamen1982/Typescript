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
