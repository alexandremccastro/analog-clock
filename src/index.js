import "./assets/css/index.css";

import { Clock } from "./core/clock";

function init() {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.getElementById("canvas");

  const { innerWidth, innerHeight } = window;

  canvas.width = innerWidth < 500 ? innerWidth : 500;
  canvas.height = innerHeight < 500 ? innerHeight : 500;

  /**
   * @type {CanvasRenderingContext2D}
   */
  const ctx = canvas.getContext("2d");

  new Clock(ctx, canvas.width, canvas.height).animate();
}

window.addEventListener("load", init);
