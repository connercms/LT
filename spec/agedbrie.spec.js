describe("Aged Brie", function () {
  it("constructor: name as expected", function () {
    let item = new AgedBrie(0, 0);

    expect(item.name).toEqual("Aged Brie");
  });

  it("sell_in decrements by one per update call", function () {
    let item = new AgedBrie(5, 2);
    item.update();
    expect(item.sell_in).toEqual(4);
  });

  it("quality increments by one per update call", function () {
    let item = new AgedBrie(5, 2);
    item.update();
    expect(item.quality).toEqual(3);
  });

  it("quality does not surpass 50", function () {
    let item = new AgedBrie(5, 50);
    item.update();
    expect(item.quality).toEqual(50);
  });
});
