import { Pointer } from "./pointer";

export class Engine {
  /**
   *
   * @param {Object} config
   */
  constructor(config) {
    this.config = config;

    this.hourPointer = new Pointer("#000", config, 5, 5);
    this.minutePointer = new Pointer("#000", config, 4, 3);
    this.secondPointer = new Pointer("red", config, 4, 2);
  }

  /**
   *
   * @param {Date} date
   * @returns The angle that the hour cursor will be drawed
   */
  getHourAngle(date) {
    const hourAngle = date.getHours() * 30 - 90 + (date.getMinutes() * 6) / 12;
    return (hourAngle * Math.PI) / 360;
  }

  /**
   *
   * @param {Date} date
   * @returns The angle that the minute cursor will be drawed
   */
  getMinuteAngle(date) {
    const minuteAngle =
      date.getMinutes() * 6 - 90 + (date.getSeconds() * 6) / 60;
    return (minuteAngle * Math.PI) / 360;
  }

  /**
   *
   * @param {Date} date
   * @returns The angle that the seconds cursor will be drawed
   */
  getSecondAngle(date) {
    const secondsAngle = date.getSeconds() * 6 - 90;
    return (secondsAngle * Math.PI) / 360;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx The context to draw the engine peaces
   */
  run(ctx) {
    const { width, height } = this.config;
    ctx.save();
    ctx.translate(width / 2, height / 2);

    const date = new Date();
    this.hourPointer.draw(ctx, this.getHourAngle(date));
    this.minutePointer.draw(ctx, this.getMinuteAngle(date));
    this.secondPointer.draw(ctx, this.getSecondAngle(date));

    ctx.restore();
  }
}
