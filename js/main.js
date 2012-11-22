// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var $canvas, $text, draw, drawWrapper, processingInstance, save;
    $canvas = $("#canvas1")[0];
    $text = $("#text");
    processingInstance = null;
    draw = function(value) {
      value = value || $text.val();
      if (value) {
        return processingInstance = app.wordshape(value, $canvas);
      }
    };
    save = function() {
      return processingInstance.save("test.png");
    };
    drawWrapper = function(evt) {
      return draw();
    };
    $("#drawBtn").click(drawWrapper);
    $text.keyup(drawWrapper);
    $("#saveBtn").click(save);
    $text.focus();
    return draw("Wordshapes");
  });

}).call(this);