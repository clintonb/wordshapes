$(document).ready(function () {

  var canvas = document.getElementById("canvas");
  var saveBtn = document.getElementById("saveBtn");
  var $text = $("#text");

  /**
   * Draw the value of the text field
   */
  var drawWrapper = function (_event) {
    app.wordshape(canvas, $text.val());
  };

  // Draw after every keystroke and when the draw button is clicked
  $("#drawBtn").click(drawWrapper);
  $text.keyup(drawWrapper);

  // Update the save button after drawing finishes
  $(document).on(app.evtDrawingComplete, function (event, text) {
    app.updateDownloadLink(saveBtn, canvas, text);
  });

  // Move the cursor to the text field for immediate usage
  $text.focus();

  // Start by drawing the app name
  $text.val("wordshapes");
  drawWrapper();
});
