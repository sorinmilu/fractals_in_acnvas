//Adaptat din https://repl.it/talk/learn/Julia-Fractals-in-JavaScript/12806

//Algoritmul foloseste biblioteca math.js (https://mathjs.org/docs/datatypes/complex_numbers.html) pentru implementarea directa
//a numerelor complexe

//drawJulia este functia care este apelata de catre butonul din interfata. Aceasta primeste ca argumente
//partea reala si partea imaginara a constantei complexe care determina fractalul
//Functia cheama settext (care afiseaza mesajul de incepere a calculelor) iar apoi, dupa executia lui settext, functia doJulia care deseneaza fractalul

function drawJulia(real,imaginar) {

    settext().then(value => {
            doJulia(real,imaginar);
       }
    ).then(value => {
        var statusdiv = document.getElementById("mstatus");
        statusdiv.innerText = 'Julia Set: real: ' + real + ' imaginar: ' + imaginar;
    })
}

//settext este funcția care afiseaza mesajul de stare in pagina html. Aceasta returneaza o promisiune pentru a permite
//executia functiei doJulia dupa aceasta.

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

//dimensiunea canvasului in pixeli
    var imagew = canvas.width;
    var imageh = canvas.height;

//
    var constant = math.complex(real, imaginar);

// Numarul maxim de iteratii pentru testarea convergentei
    var maxIterations = 155;

   for (var y = 0; y < imageh; y++) {
    for (var x = 0; x < imagew; x++) {

      //ftransformam coordonatele punctului curent din pixeli in valorile din planul complex
      var point = pixelToPoint(x, y, imagew, imageh);

      //functia care obtine culoarea punctului curent, trimis in coordonate complexe
      var rgb = pointToColor(point, maxIterations, constant);
      ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      ctx.fillRect(x, y, 1, 1);

    }
  }
}

// PointToColor este functia care returneaza culoarea calculata a fiecarui punct din plan
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


// Aplicarea formulei Julia pentru testarea convergentei
// Aceasta functie este apelata de functia pointToColor
function julia(z, i = 0, maxIterations, constant) {
  // z = z*z+constanta

    z = z.mul(z);
    z = z.add(constant);

  // Testam daca punctul curent diverge sau a depasit numarul de iteratii
      if (math.abs(z) > 2 || i == maxIterations) {
          return i;
      } else {
          // Daca nu, reluam iteratia
          return julia(z, i + 1, maxIterations, constant);
      }
}

// Converteste coordonatele din pixeli in cele din planul complex
function pixelToPoint(x, y, imagew, imageh) {

  var zx = (x/imagew)*2-1
  var zy = 1-(y/imageh)*2

  // Creaza si returneaza un numar complex
  return math.complex(zx, zy)
}


