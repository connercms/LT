function clamp(num, min, max) {
  return Math.min(Math.max(num));
}

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

Item.prototype.update = function () {
  this.sell_in -= 1;
  if (this.quality > 0) {
    // If sell in date > 0, decrement quality by 1
    // if sell in date <= 0, decrement quality by 2
    // if quality is negative, use Math.max to clamp it to 0.
    this.quality = Math.max(0, this.quality - (this.sell_in > 0 ? 1 : 2));
  }
};
