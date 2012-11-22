app.wordshapeSketch = (text, width=800, height=373, fill=true, color=0) ->
  return (processing) ->
    coordinates = app.string2coords(app.LAYOUTS["QWERTY"], app.EXCLUDES, text)

    processing.setup = () ->
      processing.size(width, height)
      processing.background(255)

    processing.draw = () ->
      # Fill the shape, if so desired
      if fill
        processing.fill(color)

      # Draw something!
      processing.beginShape()
      for coord in coordinates
        processing.vertex(coord[0], coord[1])
      processing.endShape(processing.CLOSE)

      # No need to draw this again
      processing.noLoop()

app.wordshape = (text, canvas) ->
  height = canvas.offsetHeight
  width = canvas.offsetWidth
  processingInstance = new Processing(canvas, app.wordshapeSketch(text, width, height))