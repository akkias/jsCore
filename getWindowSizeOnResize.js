// Write a JavaScript program to get the width and height of the window (any time the window is resized).

function getWindowSize() {
  let docHeight = console.log(window.innerHeight);
  let docWidth = console.log(window.innerWidth);
  return {
    height: docHeight,
    width: docWidth,
  };
}

window.addEventListener("resize", getWindowSize);
