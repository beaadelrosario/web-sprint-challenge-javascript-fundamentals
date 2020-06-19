// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker { 
    constructor(attributes) {
        this.paramlength = attributes.paramlength;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume = function() {
    this.paramlength * this.width * this.height;
    }; 
    surfaceArea = function() {
    2 * (this.paramength * this.width + this.paramlength * this.height + this.width * this.height);
    }
};

let cuboid = new CuboidMaker({
    paramlength: 4, 
    width: 5, 
    height: 5,
  });
  
  console.log(cuboid);


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume Math.pow(a, 3) and surface area. 6*(Math.pow(a, 2))

class CubeMaker extends CuboidMaker {
    constructor(attributes) {
        super(attributes);
    }
    cubevolume(a) {
        Math.pow(a, 3);
    }
    cubeSurfaceArea(a) {
        6*(Math.pow(a, 2));
    }
};

const cubeTwo = new CubeMaker({
    paramlength: 5, 
    width: 5, 
    height: 5,
});

console.log('classes stretch');
console.log(cubeTwo);