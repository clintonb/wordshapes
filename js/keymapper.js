app.string2coords = function (layout, excludes, text) {
  var coordinates = [];
  text = text.toUpperCase();

  // Map string to coordinates
  for (var i = 0, _len = text.length; i < _len; i++) {
    var char = text[i];

    // Don't bother with excluded characters
    if (excludes && excludes.indexOf(char) !== -1) {
      continue;
    }

    // Get the coordinate
    var coordinate = layout[char];
    if (coordinate) {
      coordinate = coordinate.slice(0, 2);
      coordinates.push(coordinate);
    }
  }

  return coordinates;
};
