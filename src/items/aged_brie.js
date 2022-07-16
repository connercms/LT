class AgedBrie extends Item {
  constructor(sell_in, quality) {
    super("Aged Brie", sell_in, quality);
  }

  update() {
    this.sell_in -= 1;
    if (this.quality < 50) this.quality += 1;
  }
}
