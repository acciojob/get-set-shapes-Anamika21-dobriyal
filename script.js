//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	// Getter for width
	get width(){
		return this._width;
	}
	// Getter for height
	get height(){
		return this._height;
	}

	// Method to calculate the area
	getArea(){
		return this._width * this._height;
	}

}
// Square Class (subclass of Rectangle)
class Square extends Animal {
	constructor(side){
		  // Call the parent class constructor with the same value for width and height
		super(side,side);
	}
	 // Method to calculate the perimeter of the square
	getPerimeter(){
		return 4 * this._width;// Or this._height, since width and height are the same in a square
	}
}


const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);        // Output: 5
console.log(rectangle.height);       // Output: 10
console.log(rectangle.getArea());    // Output: 50

const square = new Square(7);
console.log(square.width);           // Output: 7
console.log(square.height);          // Output: 7
console.log(square.getArea());       // Output: 49
console.log(square.getPerimeter());  // Output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
