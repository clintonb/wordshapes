app.evtDrawingComplete = 'drawing-complete';

/**
 * Update the given link element with attributes to download the specified wordshape rendering
 * @param link
 * @param canvas
 * @param text
 */
app.updateDownloadLink = function (link, canvas, text) {
  var fileName = "wordshape-" + text + ".png";
  link.setAttribute('download', fileName);
  link.setAttribute('href', canvas.toDataURL());
};

/**
 * Draw the given text on the canvas
 */
app.wordshape = function (canvas, text) {
  if (text) {
    canvas.width = 800;
    canvas.height = 373;

    var coordinates = app.string2coords(app.LAYOUTS["QWERTY"], app.EXCLUDES, text);
    var ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.beginPath();

    // Move to the first point
    var coordinate = coordinates.shift();
    ctx.moveTo(coordinate[0], coordinate[1]);

    // Draw the rest
    for (var i = 0, _len = coordinates.length; i < _len; i++) {
      coordinate = coordinates[i];
      ctx.lineTo(coordinate[0], coordinate[1]);
    }

    // Fill in the shape
    ctx.fill();
    ctx.stroke();

    // Finished!
    ctx.closePath();

    // Fire an event
    $(canvas).trigger(app.evtDrawingComplete, text)
  }
};

/**
 * Create multiple wordshape renderings
 * @param texts
 * @param parent
 */
app.wordshapeMulti = function (texts, parent) {
  for (var i = 0, _len = texts.length; i < _len; i++) {
    var text = texts[i].trim();

    if (text) {
      var $rendering = $("<div class='rendering span3'><div class='text'>" + text + "</div><a><canvas class='span3'></canvas></a></div>");
      $rendering.appendTo(parent);

      var $canvas = $("canvas", $rendering);
      var canvas = $canvas[0];
      app.wordshape(canvas, text);
      app.updateDownloadLink($("a", $rendering)[0], canvas, text);
    }
  }
};
