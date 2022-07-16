class ItemFactory {
  create(name, sell_in, quality) {
    let item;

    if (name === "Aged Brie") item = new AgedBrie(sell_in, quality);
    else if (name === "Backstage passes to a TAFKAL80ETC concert")
      item = new BackstagePass(sell_in, quality);
    else if (name === "Conjured Mana Cake") item = new Conjured(sell_in, quality);
    else if (name === "Sulfuras, Hand of Ragnaros") item = new Sulfuras();
    else item = new Item(name, sell_in, quality);

    return item;
  }
}
