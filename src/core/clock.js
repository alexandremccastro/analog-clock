class Clock {
  /**
   * @type {Visor}
   */
  visor;

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

    this.visor = new Visor(width / 4);
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.visor.draw(this.ctx, this.width, this.height);

    requestAnimationFrame(this.animate);
  };
}
