class Clock {
  visor = new Visor(200);

  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /**
   * @type {Number}
   */
  width;

  /**
   * @type {Number}
   */
  height;

  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  animate = () => {
    this.ctx.clearRect(0, 0, 500, 500);

    this.visor.draw(this.ctx, this.width, this.height);

    requestAnimationFrame(this.animate);
  };
}
