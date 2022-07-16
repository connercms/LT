describe("Sulfuras, Hand Of Ragnaros", function () {
  it("constructor: name as expected", function () {
    let item = new Sulfuras();

    expect(item.name).toEqual("Sulfuras, Hand of Ragnaros");
  });

  it("quality is 80", function () {
    let item = new Sulfuras();

    expect(item.quality).toEqual(80);
  });

  it("quality does not decrease", function () {
    let item = new Sulfuras();
    item.update();
    expect(item.quality).toEqual(80);
  });

  it("sell_in is 0", function () {
    let item = new Sulfuras();

    expect(item.sell_in).toEqual(0);
  });

  it("sell_in does not decrease", function () {
    let item = new Sulfuras();
    item.update();
    expect(item.sell_in).toEqual(0);
  });
});
