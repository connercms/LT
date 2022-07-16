describe("Backstage Pass", function () {
  it("constructor: name as expected", function () {
    let item = new BackstagePass(0, 0);

    expect(item.name).toEqual("Backstage passes to a TAFKAL80ETC concert");
  });

  it("sell_in decrements by one per update call", function () {
    let item = new BackstagePass(5, 2);
    item.update();
    expect(item.sell_in).toEqual(4);
  });

  it("quality increases by one per update call when sell_in is greater than 10", function () {
    let item = new BackstagePass(15, 2);
    item.update();
    expect(item.quality).toEqual(3);
  });

  it("quality increases by two per update call when sell_in is greater than 5 and less than or equal to 10", function () {
    let item = new BackstagePass(10, 2);
    item.update();
    expect(item.quality).toEqual(4);
  });

  it("quality increases by three per update call when sell_in is greater than 0 and less than or equal to 5", function () {
    let item = new BackstagePass(5, 2);
    item.update();
    expect(item.quality).toEqual(5);
  });

  it("quality is zero when sell_in date has passed", function () {
    let item = new BackstagePass(0, 2);
    item.update();
    expect(item.quality).toEqual(0);
  });

  it("quality can not be negative", function () {
    let item = new BackstagePass(0, 0);
    item.update();
    expect(item.quality).toEqual(0);
  });

  it("quality can not be greater than 50", function () {
    let item = new BackstagePass(3, 50);
    item.update();
    expect(item.quality).toEqual(50);
  });
});
