class Clock {
  visor;
  engine;
  ctx;
  width;
  height;

  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context that will render the clock
   * @param {Number} width The clock width
   * @param {Number} height The clock height
   */
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.visor = new Visor(width / 4);
    this.engine = new Engine(width, height);
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.visor.draw(this.ctx, this.width, this.height);
    this.engine.run(this.ctx, this.width, this.height);

    requestAnimationFrame(this.animate);
  };
}
