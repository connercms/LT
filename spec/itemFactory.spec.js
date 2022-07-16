describe("Item Factory", function () {
  const factory = new ItemFactory();

  it("should create item", function () {
    items = [factory.create("Mana Potion", 0, 0)];

    expect(items[0] instanceof Item).toBeTruthy();
  });

  it("sanity check: item is of type item only", function () {
    items = [factory.create("Mana Potion", 0, 0)];

    expect(items[0] instanceof Sulfuras).toBeFalsy();
  });

  it("should create aged brie", function () {
    items = [factory.create("Aged Brie", 0, 0)];

    expect(items[0] instanceof AgedBrie).toBeTruthy();
  });

  it("aged brie superclass should be item", function () {
    items = [factory.create("Aged Brie", 0, 0)];

    expect(items[0] instanceof Item).toBeTruthy();
  });

  it("sanity check: aged brie is of type aged brie only", function () {
    items = [factory.create("Aged Brie", 0, 0)];

    expect(items[0] instanceof Sulfuras).toBeFalsy();
  });

  it("should create backstage pass", function () {
    items = [factory.create("Backstage passes to a TAFKAL80ETC concert", 0, 0)];

    expect(items[0] instanceof BackstagePass).toBeTruthy();
  });

  it("should create conjured item", function () {
    items = [factory.create("Conjured Mana Cake", 0, 0)];

    expect(items[0] instanceof Conjured).toBeTruthy();
  });

  it("should create sulfuras", function () {
    items = [factory.create("Sulfuras, Hand of Ragnaros", 0, 0)];

    expect(items[0] instanceof Sulfuras).toBeTruthy();
  });
});
