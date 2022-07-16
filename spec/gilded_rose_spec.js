describe("Gilded Rose", function () {
  it("should function", function () {
    items = [new Item("Mana Potion", 0, 0)];
    update_quality();
    expect(items[0].name).toEqual("Mana Potion");
  });
});
