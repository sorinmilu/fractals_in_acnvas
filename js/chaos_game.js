
function clearCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function drawTriangle() {
    const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        clearCanvas();
        const shape = [
          { x: 250, y: 0 },
          { x: 500, y: 400 },
          { x: 0, y: 400 },
        ];
        ctx.fillStyle = "#bef6fb";
        let point = {
          x: Math.round(Math.random() * 800),
          y: Math.round(Math.random() * 800),
        };

        let count = 0;

        while (count < 15000) {
          let rand = Math.floor(Math.random() * shape.length);
          let corner = shape[rand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
}

function drawSquare1() {
    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      clearCanvas();
      const shape = [
        { x: 0, y: 0 },
        { x: 0, y: 800 },
        { x: 800, y: 800 },
        { x: 800, y: 0 },
      ];

      ctx.fillStyle = "#fde1b8";

      let point = {
        x: Math.round(Math.random() * 800),
        y: Math.round(Math.random() * 800),
      };

      let count = 0;
      let previousRand = null;

      while (count < 15000) {
        let currentRand = Math.floor(Math.random() * shape.length);

        if (currentRand !== previousRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      }
}

function drawSquare2() {
    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      clearCanvas();
      const shape = [
        { x: 0, y: 0 },
        { x: 0, y: 500 },
        { x: 500, y: 500 },
        { x: 500, y: 0 },
      ];

      let point = {
        x: Math.round(Math.random() * 500),
        y: Math.round(Math.random() * 500),
      };

    ctx.fillStyle = "#f5ee08";

      let count = 0;
      let previousRand = null;

      while (count < 15000) {
        let currentRand = Math.floor(Math.random() * shape.length);

        if ((previousRand + 2) % 4 !== currentRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      }
}

function drawSquare3() {
    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      clearCanvas();
      const shape = [
        { x: 0, y: 0 },
        { x: 0, y: 500 },
        { x: 500, y: 500 },
        { x: 500, y: 0 },
      ];

      ctx.fillStyle = "#9bff88";

      let point = {
        x: Math.round(Math.random() * 500),
        y: Math.round(Math.random() * 500),
      };

      let count = 0;
      let previousRand = null;

      while (count < 15000) {
        let currentRand = Math.floor(Math.random() * shape.length);

        if ((previousRand + 1) % 4 !== currentRand) {
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      }
}

function drawSquare4() {
    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      clearCanvas();
      const shape = [
        { x: 0, y: 0 },
        { x: 0, y: 500 },
        { x: 500, y: 500 },
        { x: 500, y: 0 },
      ];

      ctx.fillStyle = "#ff92a3";

      let point = {
        x: Math.round(Math.random() * 500),
        y: Math.round(Math.random() * 500),
      };

      let count = 0;
      let previousRand = null;
      let perviousPreviousRand = null;

      while (count < 15000) {
        let currentRand = Math.floor(Math.random() * shape.length);

        if ((previousRand + 3) % 4 !== currentRand && (perviousPreviousRand + 1) % 4 !== currentRand) {
          perviousPreviousRand = previousRand;
          previousRand = currentRand;

          let corner = shape[currentRand];
          point.x = (point.x + corner.x) / 2;
          point.y = (point.y + corner.y) / 2;
          ctx.fillRect(point.x, point.y, 1, 1);
          count++;
        }
      }
}


function drawPentagon() {
    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      clearCanvas();
      const shape = [
        { x: 250, y:0 },
        { x:500, y:200 },
        { x:420, y:500 },
        { x:80, y:500 },
        { x:0, y:200 },
      ];

      ctx.fillStyle = "#f7d3bb";

      let point = {
        x: Math.round(Math.random() * 500),
        y: Math.round(Math.random() * 500),
      };

      let count = 0;
      let previousRand = null;

      while (count < 15000) {
        let currentRand = Math.floor(Math.random() * shape.length);

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

