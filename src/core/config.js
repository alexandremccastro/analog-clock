export const config = {};

const setSize = (config, canvas) => {
  const { innerWidth, innerHeight } = window;

  if (innerWidth > 300) {
    config.width = innerWidth < 500 ? innerWidth : 500;
    config.height = innerHeight < 500 ? innerHeight : 500;

    canvas.width = config.width;
    canvas.height = config.height;
  }
};

export const bindScreenSize = (canvas) => {
  setSize(config, canvas);

  window.addEventListener("resize", () => {
    setSize(config, canvas);
  });
};
