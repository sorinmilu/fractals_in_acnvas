
function clearCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function doChaosGame(stype, version = 1) {
  var shape = [];


  const iterationCount = 150000;

  if (stype == 'triangle') {
    shape = [
          { x: 250, y: 0 },
          { x: 500, y: 400 },
          { x: 0, y: 400 },
    ];
  } else if (stype == 'square') {
   shape = [
        { x: 0, y: 0 },
        { x: 0, y: 500 },
        { x: 500, y: 500 },
        { x: 500, y: 0 },
      ];
  } else if (stype == 'pentagon') {
     shape = [
        { x: 250, y:0 },
        { x:500, y:200 },
        { x:420, y:500 },
        { x:80, y:500 },
        { x:0, y:200 },
      ];
  }

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  clearCanvas();

  ctx.fillStyle = "#ff0000";

  for (i = 0; i < shape.length; i++) {
      ctx.fillRect(shape[i].x-2, shape[i].y-2, 5, 5);
  }


  let point = {
        x: Math.round(Math.random() * 500),
        y: Math.round(Math.random() * 500),
  };

  let count = 0;
  let previousRand = null;

  ctx.fillStyle = "#f7d3bb";

  while (count < iterationCount) {

      let currentRand = Math.floor(Math.random() * shape.length);

      if (stype == 'triangle') {
          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
      } else if (stype == 'square' && version == 1) {
          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
      } else if (stype == 'square' && version == 2) {
        if (currentRand !== previousRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      } else if (stype == 'square'  && version == 3) {
         if ((previousRand + 1) % 4 !== currentRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      } else if (stype == 'square'  && version == 4) {
          if ((previousRand + 2) % 4 !== currentRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      } else if (stype == 'pentagon') {
        if ((previousRand + 1) % 5 !== currentRand && (previousRand + 4) % 5 !== currentRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;

        }
      }

  }



}