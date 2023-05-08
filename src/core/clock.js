import { Visor } from "./visor";
import { Engine } from "./engine";

export class Clock {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context that will render the clock

   */
  constructor(ctx, config) {
    this.ctx = ctx;
    this.config = config;

    this.visor = new Visor(config);
    this.engine = new Engine(config);
  }

  animate = () => {
    const { width, height } = this.config;
    this.ctx.clearRect(0, 0, width, height);

    this.visor.draw(this.ctx);
    this.engine.run(this.ctx);

    requestAnimationFrame(this.animate);
  };
}
