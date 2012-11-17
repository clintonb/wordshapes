window.app ?= {}

app.string2coords = (layout, excludes, text)->
  coordinates = []

  # Map string to coordinates
  for char,index in text.split('')
    # Upper-case all alphabet characters
    if /^[A-Za-z]$/.test(char)
      char = char.toUpperCase()

    # Don't bother with excluded characters
    if excludes and excludes.indexOf(char) != -1
      continue;

    # Get the coordinate
    coordinate = layout[char];
    if(coordinate)
      # Slice out the shift key
      coordinate = coordinate.slice(0, 2)
      coordinates.push(coordinate)

  # Return the coordinates
  return coordinates
