import "./assets/css/index.css";

import { Clock } from "./core/clock";
import { config, bindScreenSize } from "./core/config";

function init() {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.getElementById("canvas");

  bindScreenSize(canvas);

  /**
   * @type {CanvasRenderingContext2D}
   */
  const ctx = canvas.getContext("2d");

  new Clock(ctx, config).animate();
}

window.addEventListener("load", init);
