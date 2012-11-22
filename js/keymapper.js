// Generated by CoffeeScript 1.4.0
(function() {

  app.string2coords = function(layout, excludes, text) {
    var char, coordinate, coordinates, index, _i, _len, _ref;
    coordinates = [];
    _ref = text.split('');
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      char = _ref[index];
      if (/^[A-Za-z]$/.test(char)) {
        char = char.toUpperCase();
      }
      if (excludes && excludes.indexOf(char) !== -1) {
        continue;
      }
      coordinate = layout[char];
      if (coordinate) {
        coordinate = coordinate.slice(0, 2);
        coordinates.push(coordinate);
      }
    }
    return coordinates;
  };

}).call(this);
