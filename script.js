let shapes={
  1: "circle",
  2: "semi-circle",
  3: "triangle",
  4:	"square",
  5:	"pentagon",
  6:	"hexagon",
  7:	"heptagon",
  8:	"octagon",
  9:	"nonagon",
  10: "decagon",
}
function callShapes(obj,val){
  return obj[val];
}
num=prompt("Please enter number")
console.log(callShapes(shapes, num));