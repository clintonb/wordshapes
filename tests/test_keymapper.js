describe("test_string2coords", function() {
  it("maps a string to keyboard coordinates", function() {
    expect(true).toBe(true);
    var actual = app.string2coords(app.LAYOUTS["QWERTY"], app.EXCLUDES, "hello");
    var expected = [[400, 225], [224, 174], [562, 225], [562, 225], [548, 174]];
    expect(actual).toEqual(expected);
  });
});
