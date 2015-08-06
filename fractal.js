// The Heighway Dragon Fractal ~ Daily Programmer Challenge #223 [hard]

// Dependencies 
var _ = require('lodash');

// Point constructor
Point = function(x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.x = function() {
    return this.x;
};

Point.prototype.y = function() {
    return this.y;
};

// Graph constructor
Graph = function(points) {
    this.points = points;
}

// returns number of points in graph
Graph.prototype.length = function() {
    return this.points.length();
};

// TODO: fix getPivot
// returns current pivot point of graph
Graph.prototype.getPivot = function() {
    return Graph.points[(Graph.length()-1)/2];
};

// returns a point's vert distance from pivot point
Graph.prototype.verticalDistanceFromPivot(point) {
    return Graph.getPivot().x - point.x;
};

// returns a point's horiz distance from pivot point
Graph.prototype.horizontalDistanceFromPivot = function(point) {
    return Graph.getPivot().y - point.y;
};

// prints all of the points of a Graph
Graph.prototype.printGraph = function() {
    _.forEach(this.points, function(point) {
	console.log("[x: " + point.x + ", y: " + point.y + "]");
    });
};

// pivots a single point in Graph
Graph.prototype.pivot = function(point) {
    var tempPoint = point;
    point.x = this.getPivot().x + this.verticalDistanceFromPivot(tempPoint);
    point.y = this.getPivot().y + this.horizontalDistanceFromPivot(tempPoint);
};

// pivot each point in graph
// map all pivoted points to a new array
// append mapped points to original points
Graph.prototype.transform = function() {
    var newPoints = _.map(this.points, pivot);
    this.points += newPoints;
    this.points.splice((this.length()-1)/2);
};

// main loop
var iterate = function (graph, numberOfCycles) {
    this = graph;
    for (var i = 0; i < numberOfCycles; i++) {
	this.transform();
    }
};

console.log(iterate(new Graph([new Point(0, 0), new Point(1, 0)], 3));
