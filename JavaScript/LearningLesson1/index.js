// getters and setters

// getters = special method that makes a property readable
// setters = special method that makes a property writable

// used validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){                    //setter, writable but not readable
        if(newWidth > 0){                   // validating if it's above zero
            this._width = newWidth;         // using underscore _ in _width tells other developers that this is a private property
        }
        else{
            console.error("width must be a positive number");       // .error to show an error message
        }
    }

    set height(newHeight){           
        if(newHeight > 0){           
            this._height = newHeight;
        }
        else{
            console.error("height must be a positive number");
        }
    }


    get width(){
        return this._width;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;     // can add addtional logic when returning a value
    }

    get area(){             // with get we can access a property thatv doesn't exist in the class definition or consstructor
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);