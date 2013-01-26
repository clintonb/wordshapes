// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var $canvas, $multiText, $text, draw, drawWrapper, multiDraw, multiDrawWrapper, processingInstance, save;
    $canvas = $("#canvas1")[0];
    $text = $("#text");
    $multiText = $("#multiText");
    processingInstance = null;
    draw = function(value) {
      value = value || $text.val();
      if (value) {
        return processingInstance = app.wordshape(value, $canvas);
      }
    };
    multiDraw = function() {
      var values;
      values = $multiText.val();
      values = values.split('\\n');
      if (values) {
        return processingInstance = app.multiWordshape(values, $canvas);
      }
    };
    save = function() {
      return processingInstance.save("test.png");
    };
    drawWrapper = function(evt) {
      return draw();
    };
    multiDrawWrapper = function(evt) {
      return multiDraw();
    };
    $("#drawBtn").click(drawWrapper);
    $text.keyup(drawWrapper);
    $multiText.keyup(multiDrawWrapper);
    $("#saveBtn").click(save);
    $text.focus();
    return draw("Wordshapes");
  });

}).call(this);
