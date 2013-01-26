$(document).ready ->
  $canvas = $("#canvas1")[0]
  $text = $("#text")
  processingInstance = null

  draw = (value) ->
    value = value or $text.val()
    processingInstance = app.wordshape(value, $canvas)  if value

  save = ->
    processingInstance.save "test.png"

  # Draw handlers
  drawWrapper = (evt) ->
    draw()

  $("#drawBtn").click drawWrapper
  $text.keyup drawWrapper

  # Save handler
  $("#saveBtn").click save

  # Set focus on input field
  $text.focus()

  # Initial drawing
  draw "Wordshapes"
