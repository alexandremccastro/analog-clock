export class Pointer {
  /**
   *
   * @param {String} color The color of the pointer
   * @param {Object} config Global clock config
   * @param {Number} lenght The lenght of the pointer
   * @param {Number} size The size of the pointer
   */
  constructor(color, config, lenght, size) {
    this.color = color;
    this.config = config;
    this.lenght = lenght;
    this.size = size;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context that the pointer will be drawed
   */
  draw(ctx, angle) {
    const { width } = this.config;
    ctx.save();

    const pointerSize = width / this.lenght;

    const x = (pointerSize - 15) * Math.cos(angle);
    const y = (pointerSize - 15) * Math.sin(angle);

    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = this.size;
    ctx.lineTo(x, y);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
    ctx.resetTransform();
    ctx.restore();
  }
}
