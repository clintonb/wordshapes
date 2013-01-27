app.wordshapeSketch = (text, width=800, height=373, fill=true, color=0, scale=1.0) ->
  return (processing) ->
    coordinates = app.string2coords(app.LAYOUTS["QWERTY"], app.EXCLUDES, text)

    processing.setup = () ->
      processing.size(width, height)
      processing.background(255)

    processing.draw = () ->
      # Fill the shape, if so desired
      if fill
        processing.fill(color)
      processing.scale(scale)

      # Draw something!
      processing.beginShape()
      for coord in coordinates
        processing.vertex(coord[0], coord[1])
      processing.endShape(processing.CLOSE)

      # No need to draw this again
      processing.noLoop()

      # Let the page know that the drawing is complete
      $(document).trigger('drawFinished')


app.wordshape = (text, canvas) ->
  height = canvas.offsetHeight
  width = canvas.offsetWidth
  return new Processing(canvas, app.wordshapeSketch(text, width, height))


app.wordshapeMulti = (texts, parent) ->
  height = 373
  width = 800
  texts = texts.filter (x) -> x.trim()
  for text in texts
    # Get rid of excess whitespace
    text = text.trim()

    # Create the parent element
    $rendering = $("<div class='rendering span3'><div class='text'>#{text}</div><canvas class='span3'></canvas></div>")
    $rendering.appendTo(parent)
    $canvas = $("canvas", $rendering)

    # Draw!
    processingInstance = new Processing($canvas[0], app.wordshapeSketch(text, width, height))

    do (processingInstance) ->
      # Add a handler for downloads
      $canvas.click((e) ->
        processingInstance.save('text.png')
      )

  return
