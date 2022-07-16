class Conjured extends Item {
  constructor(sell_in, quality) {
    super("Conjured Mana Cake", sell_in, quality);
  }

  update() {
    this.sell_in -= 1;

    if (this.quality > 0) {
      // If sell in date > 0, decrement quality by 2
      // if sell in date <= 0, decrement quality by 4
      // if quality is negative, use Math.max to clamp it to 0.
      this.quality = Math.max(0, this.quality - (this.sell_in > 0 ? 2 : 4));
    }
  }
}
