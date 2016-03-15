describe("Grid Game Client", function() {
  Client = require('../Client.js');
  Display = require('../Display.js');

  beforeEach(function() {
    client = new Client();
  });

  it("should install a display", function() {
    var display = new Display({'width' : 100, 'height' : 100, 'tileSize' : 10});
    client.installDisplay(display);
    expect(client.display.width).toEqual(100);
    expect(client.display.height).toEqual(100);
    expect(client.display.tileSize).toEqual(10);
  });

  it("should know its grid size")
});

