export class Pointer {
  /**
   *
   * @param {String} color
   * @param {Number} height
   * @param {Number} width
   */
  constructor(color, height, width) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context that the pointer will be drawed
   */
  draw(ctx, angle) {
    ctx.save();

    const x = (this.height - 15) * Math.cos(angle);
    const y = (this.height - 15) * Math.sin(angle);

    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = this.width;
    ctx.lineTo(x, y);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
    ctx.resetTransform();
    ctx.restore();
  }
}
