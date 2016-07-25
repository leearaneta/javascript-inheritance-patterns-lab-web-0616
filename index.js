function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position.x = x
  this.position.y = y
}

function Circle(radius) {
  // Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
  return this.radius * 2
}
Circle.prototype.area = function() {
  return (this.radius * this.radius * Math.PI)
}
Circle.prototype.circumference = function() {
  return (this.radius * 2 * Math.PI)
}

function Side(length) {
  this.length = length
}


function Polygon(sideLengths) {
  // Shape.call(this) only use when instantiating polygon with properties of shape
  this.sides = []
  for (let x = 0; x < sideLengths.length; x++) {
    this.sides.push(new Side(sideLengths[x]))
  }
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Shape
Polygon.prototype.perimeter = function() {
  var perimeter = 0
  for (let x = 0; x < this.sides.length; x++) {
    perimeter += this.sides[x].length
  }
  return perimeter
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, arguments)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

function Triangle(side1, side2, side3) {
  Polygon.call(this, arguments)
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
