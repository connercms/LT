describe("Conjured Item", function () {
  it("constructor: name as expected", function () {
    let item = new Conjured(0, 0);

    expect(item.name).toEqual("Conjured Mana Cake");
  });

  it("sell_in decrements by one per update call", function () {
    let item = new Conjured(5, 2);
    item.update();
    expect(item.sell_in).toEqual(4);
  });

  it("quality decreases by two per update call", function () {
    let item = new Conjured(5, 2);
    item.update();
    expect(item.quality).toEqual(0);
  });

  it("quality decreases by four per update call after sell_in reaches 0", function () {
    let item = new Conjured(2, 50);
    item.update(); // sell_in: 1, quality: 48
    item.update(); // sell_in 0, quality 44
    expect(item.quality).toEqual(44);
  });

  it("quality can't go negative", function () {
    let item = new Conjured(1, 2);
    item.update();
    expect(item.quality).toEqual(0);
  });
});
