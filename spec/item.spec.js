describe("Item", function () {
  it("constructor: name as expected", function () {
    let item = new Item("Mana Potion", 0, 0);

    expect(item.name).toEqual("Mana Potion");
  });

  it("sell_in decrements by one per update call", function () {
    let item = new Item("Mana Potion", 5, 2);
    item.update();
    expect(item.sell_in).toEqual(4);
  });

  it("quality decrements by one per update call", function () {
    let item = new Item("Mana Potion", 5, 2);
    item.update();
    expect(item.quality).toEqual(1);
  });

  it("quality cannot be negative", function () {
    let item = new Item("Mana Potion", 5, 0);
    item.update();
    expect(item.quality).toEqual(0);
  });
});
