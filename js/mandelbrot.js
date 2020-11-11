// ------------------------------------------------------------------------
// Drawing Mandelbrot Fractals With HTML5 Canvas And JavaScript
// (c) 2015 Rembound.com
// http://rembound.com/articles/drawing-mandelbrot-fractals-with-html5-canvas-and-javascript
// ------------------------------------------------------------------------

// The function gets called when the window is fully loaded







function mandelbrot(panx, pany, zoom) {

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var imagew = canvas.width;
        var imageh = canvas.height;

        // Image Data (RGBA)
        var imagedata = context.createImageData(imagew, imageh);

        // Pan and zoom parameters
        // var panx = -100;
        // var pany = 0;
        // var zoom = 180;

        // Palette array of 256 colors
        var palette = [];

        // The maximum number of iterations per pixel
        var maxiterations = 50;



        console.log(palette);

        var settings = {
            imagew : imagew,
            imageh : imageh,
            imagedata : imagedata,
            panx : panx,
            pany: pany,
            zoom: zoom,
            maxiterations: maxiterations
        };

        var imgdata = generateImage(settings);

        // Enter main loop
         context.putImageData(imgdata, 0, 0);
    }

    // Main loop
    // function main(tframe) {
    //     context.putImageData(imagedata, 0, 0);
    // }

    // Generate palette
    function generatePalette() {
        // Calculate a gradient
        var roffset = 24;
        var goffset = 16;
        var boffset = 0;
        var palette = new Array();
        for (var i=0; i<256; i++) {
            palette[i] = { r:roffset, g:goffset, b:boffset};

            if (i < 64) {
                roffset += 3;
            } else if (i<128) {
                goffset += 3;
            } else if (i<192) {
                boffset += 3;
            }
        }
        return palette;
    }

    // Generate the fractal image
    function generateImage(settings) {
        // Iterate over the pixels
        settings.palette = generatePalette();
        for (var y=0; y<settings.imageh; y++) {
            for (var x=0; x<settings.imagew; x++) {
                imgdata = iterate(x, y, settings);
                for (var pindex in imgdata) {
                    settings.imagedata.data[pindex] = imgdata[pindex];
                }
            }
        }
        return settings.imagedata;
    }

    // Calculate the color of a specific pixel
    function iterate(x, y, settings) {
        // Convert the screen coordinate to a fractal coordinate
        var offsetx = -settings.imagew/2;
        var offsety = -settings.imageh/2;

        var x0 = (x + offsetx + settings.panx) / settings.zoom;
        var y0 = (y + offsety + settings.pany) / settings.zoom;

        // Iteration variables
        var a = 0;
        var b = 0;
        var rx = 0;
        var ry = 0;

        // Iterate
        var iterations = 0;
        while (iterations < settings.maxiterations && (rx * rx + ry * ry <= 4)) {
            rx = a * a - b * b + x0;
            ry = 2 * a * b + y0;

            // Next iteration
            a = rx;
            b = ry;
            iterations++;
        }

        // Get palette color based on the number of iterations
        var color;
        if (iterations == settings.maxiterations) {
            color = { r:0, g:0, b:0}; // Black
        } else {
            var index = Math.floor((iterations / (settings.maxiterations-1)) * 255);
            color = settings.palette[index];
        }
        // Apply the color


        var pixelindex = (y * settings.imagew + x) * 4;
        var imgdata = {};
        imgdata[pixelindex] = color.r;
        imgdata[pixelindex+1] = color.g;
        imgdata[pixelindex+2] = color.b;
        imgdata[pixelindex+3] = 255;
        return imgdata;
    }

    // Zoom the fractal
    function zoomFractal(x, y, factor, zoomin) {
        if (zoomin) {
            // Zoom in
            zoom *= factor;
            panx = factor * (x + offsetx + panx);
            pany = factor * (y + offsety + pany);
        } else {
            // Zoom out
            zoom /= factor;
            panx = (x + offsetx + panx) / factor;
            pany = (y + offsety + pany) / factor;
        }
    }



    // Get the mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }
