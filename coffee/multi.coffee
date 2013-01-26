$(document).ready ->
  $text = $("#texts")
  $canvas = $("#renderings")
  processingInstance = null

  draw = () ->
    value = $text.val()
    texts = value.split(/\r\n|\r|\n/);
    processingInstance = app.wordshapeMulti(texts, $canvas)

  # Draw handlers
  drawWrapper = (evt) ->
    draw()

  $("#multiDrawBtn").click drawWrapper

  # Set focus on input field
  $text.focus()
