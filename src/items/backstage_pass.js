class BackstagePass extends Item {
  constructor(sell_in, quality) {
    super("Backstage passes to a TAFKAL80ETC concert", sell_in, quality);
  }

  update() {
    this.sell_in -= 1;

    if (this.sell_in <= 0) this.quality = 0;
    else if (this.sell_in > 0 && this.sell_in <= 5) this.quality += 3;
    else if (this.sell_in > 5 && this.sell_in <= 10) this.quality += 2;
    else this.quality += 1;

    this.quality = Math.min(this.quality, 50);
  }
}
