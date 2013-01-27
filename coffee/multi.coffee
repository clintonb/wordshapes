$(document).ready ->
  $text = $("#texts")
  $canvas = $("#renderings")
  $no_renderings = $("#renderings-outer .no-renderings")
  $instructions = $("#renderings-outer .instructions")
  processingInstance = null

  # Listen for the drawFinished event
  $(document).bind('drawFinished', (e) ->
    $no_renderings.hide()
    $instructions.show()
  )

  draw = () ->
    value = $text.val()
    texts = value.split(/\r\n|\r|\n/);
    $no_renderings.show()
    $instructions.hide()
    $canvas.empty()
    processingInstance = app.wordshapeMulti(texts, $canvas)


  # Draw handlers
  drawWrapper = (evt) ->
    draw()

  $("#multiDrawBtn").click drawWrapper

  # Set focus on input field
  $text.focus()
