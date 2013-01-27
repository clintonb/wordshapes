$(document).ready ->
  $text = $("#texts")
  $canvas = $("#renderings")
  $no_renderings = $("#renderings-outer .no-renderings")
  processingInstance = null

  # Listen for the drawFinished event
  $(document).bind('drawFinished', (e) ->
    $no_renderings.hide()
  )

  draw = () ->
    value = $text.val()
    texts = value.split(/\r\n|\r|\n/);
    $no_renderings.show()
    $canvas.empty()
    processingInstance = app.wordshapeMulti(texts, $canvas)


  # Draw handlers
  drawWrapper = (evt) ->
    draw()

  $("#multiDrawBtn").click drawWrapper

  # Set focus on input field
  $text.focus()
