function init() {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.getElementById("canvas");

  /**
   * @type {CanvasRenderingContext2D}
   */
  const ctx = canvas.getContext("2d");

  new Clock(ctx, canvas.width, canvas.height).animate();
}

window.addEventListener("load", init);
