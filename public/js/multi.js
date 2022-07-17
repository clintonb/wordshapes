// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var $renderings, $instructions, $no_renderings, $text, draw, drawWrapper, processingInstance;
    $text = $("#texts");
    $renderings = $("#renderings");
    $no_renderings = $("#renderings-outer .no-renderings");
    $instructions = $("#renderings-outer .instructions");
    processingInstance = null;
    $(document).bind(app.evtDrawingComplete, function(e) {
      $no_renderings.hide();
      return $instructions.show();
    });

    draw = function() {
      // Get the texts and split on newlines
      var texts = $text.val().split(/\r\n|\r|\n/);
      console.log(texts);

      // Inform the user that no renderings exist
      $no_renderings.show();

      // Hide download instructions
      $instructions.hide();

      // Clear the rendering location of all elements
      $renderings.empty();

      // Render
      app.wordshapeMulti(texts, $renderings);
    };

    $("#multiDrawBtn").click(draw);

    $text.focus();
  });

}).call(this);