/**
 * This class renders the clock visor
 */
class Visor {
  /**
   * @type {Number}
   */
  radius;

  constructor(radius) {
    this.radius = radius;
  }

  /**
   *
   * @param {Number} radius
   */
  setRadius(radius) {
    this.radius = radius;
  }

  /**
   *
   * @returns {Number} The visor radius
   */
  getRadius() {
    return this.radius;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context that the visor will be drawed
   */
  draw(ctx, width, height) {
    ctx.translate(width / 2, height / 2);
    ctx.save();

    // draws the largest circle body
    ctx.beginPath();
    ctx.fillStyle = "#9e9e9e";
    ctx.arc(0, 0, this.radius + 20, 0, 360);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // draws the inner container
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(0, 0, this.radius, 0, 360);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // draws the points that refers seconds and minutes
    for (let i = 1; i <= 60; i++) {
      ctx.save();

      const angle = i * 6 - 90;
      const radians = (angle * Math.PI) / 180;

      const x1 = (this.radius - (i % 5 == 0 ? 12 : 10)) * Math.cos(radians);
      const y1 = (this.radius - (i % 5 == 0 ? 12 : 10)) * Math.sin(radians);
      const x2 = (this.radius - 5) * Math.cos(radians);
      const y2 = (this.radius - 5) * Math.sin(radians);

      ctx.beginPath();
      ctx.lineWidth = i % 5 == 0 ? 4 : 2;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.strokeStyle = "#000";

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // draws the hours numbers
    for (let i = 1; i <= 12; i++) {
      ctx.save();
      ctx.fillStyle = "#000";
      const angle = i * 30 - 90;
      const radians = (angle * Math.PI) / 180;

      const x = (this.radius - 25) * Math.cos(radians) - i + Math.PI;
      const y = (this.radius - 25) * Math.sin(radians) + 5;
      ctx.font = "14px Roboto";
      ctx.fillText(i, x, y);
      ctx.restore();
    }

    ctx.resetTransform();
  }
}
