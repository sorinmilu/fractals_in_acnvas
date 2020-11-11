// The HTML elements we are using




function drawJulia(real,imaginar) {
    var canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d')

// The size of our canvas
    var imagew = canvas.width;
    var imageh = canvas.height;

// Set the size of our canvas
    var constant = math.complex(real, imaginar);

// The maximum number of times we iterate a point to see if it escapes
    var maxIterations = 164;

   for (var y = 0; y < imageh; y++) {
    // Loop over every row of pixels
    for (var x = 0; x < imagew; x++) {

      var point = pixelToPoint(x, y, imagew, imageh);
      // Turn that point into a color
      var color = pointToColor(point, maxIterations, constant);

      // Draw over this pixel with that color
//      drawPixel(x, y, color)
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);

    }
  }

}


// Apply the Julia Set formula to see if point z "escapes"
function julia(z, i = 0, maxIterations, constant) {
    //var constant = math.complex(0.28, 0.01);

  // Apply the Julia Set formula: z*z+constant
    z = z.mul(z);
    z = z.add(constant);

  // Has our point escaped, or hit the iteration limit?
      if (math.abs(z) > 2 || i == maxIterations) {
          return i;
      } else {
          // If not, iterate again!
          return julia(z, i + 1, maxIterations, constant);
      }
}

// Turn a point on the complex plane into a color
function pointToColor(point, maxIterations, constant) {
  // How many iterations on this point before it escapes?
  var iterations = julia(point, 0, maxIterations, constant);

  // What percentage of our limit is that?
  var percentage = iterations/maxIterations;

  var red = percentage*255
  var green = percentage*85
  var blue = percentage*45

  // Create a color from that percentage
  // console.log(red);
  // console.log(green);
  // console.log(blue);
  return `rgb(${red}, ${green}, ${blue})`
}

// Turn XY pixel coordinates into a point on the complex plane
function pixelToPoint(x, y, imagew, imageh) {
  // Map percentage of total width/height to a value from -1 to +1
  var zx = (x/imagew)*2-1
  var zy = 1-(y/imageh)*2

  // Create a complex number based on our new XY values
  return math.complex(zx, zy)
}


