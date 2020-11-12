// The HTML elements we are using


function drawJulia(real,imaginar) {

    settext().then(value => {
            doJulia(real,imaginar);
       }
    ).then(value => {
        var statusdiv = document.getElementById("mstatus");
        statusdiv.innerText = 'Julia Set: real: ' + real + ' imaginar: ' + imaginar;
    })
}


function settext() {
    var statusdiv = document.getElementById("mstatus");
     statusdiv.innerText = 'Calculez ....';
       return new Promise(function(resolve, reject) {
        setTimeout(function() {
              resolve();
        },300);
  });
}

function doJulia(real,imaginar) {
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

      var rgb = pointToColor(point, maxIterations, constant);
      ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
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

  var iterations = julia(point, 0, maxIterations, constant);
  var percentage = iterations/maxIterations;
  var red = Math.floor(percentage*255);
  var green = Math.floor(percentage*85);
  var blue = Math.floor(percentage*45);
  var color = [];
  color[0] = red;
  color[1] = green;
  color[2] = blue;
  return color;

}

// Turn XY pixel coordinates into a point on the complex plane
function pixelToPoint(x, y, imagew, imageh) {
  // Map percentage of total width/height to a value from -1 to +1
  var zx = (x/imagew)*2-1
  var zy = 1-(y/imageh)*2

  // Create a complex number based on our new XY values
  return math.complex(zx, zy)
}


