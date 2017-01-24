//Create class Shape with id, x and y coordinates and method move

class Shape {
    id
    x
    y
    constructor(id, x, y){
        this.id = id
        this.move(x, y)
    }
    move(x, y){
        this.x = x
        this.y = y
        return("This is your x coordinate: " + this.x + "/n This is your y coordinate: " + this.y)
    }
}

