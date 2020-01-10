const canvasSketch = require("canvas-sketch");

// For good results make width from (height * 2.1) to (height * 2.3)

const settings = {
  dimensions: [720, 300],
  orientation: "landscape",
  units: "px",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "green";
    // Pitch
    context.fillRect(0, 0, width, height);
    context.fill();

    context.lineWidth = width * 0.004;
    context.strokeStyle = "white";
    context.stroke();

    // Outer Penalty line (left)
    context.moveTo(0, height / 5);
    context.lineTo(width * 0.122, height / 5);
    context.lineTo(width * 0.122, (4 * height) / 5);
    context.lineTo(0, (4 * height) / 5);

    // Inner Penalty line (left)
    context.moveTo(0, (1.5 * height) / 5);
    context.lineTo(width * 0.073242, (1.5 * height) / 5);
    context.lineTo(width * 0.073242, ((4 - 0.5) * height) / 5);
    context.lineTo(0, ((4 - 0.5) * height) / 5);

    // Outer Penalty line (right)
    context.moveTo(width, height / 5);
    context.lineTo(width - width * 0.122, height / 5);
    context.lineTo(width - width * 0.122, (4 * height) / 5);
    context.lineTo(width, (4 * height) / 5);
    context.stroke();

    // Inner Penalty line (right)
    context.moveTo(width, (1.5 * height) / 5);
    context.lineTo(width - width * 0.073242, (1.5 * height) / 5);
    context.lineTo(width - width * 0.073242, ((4 - 0.5) * height) / 5);
    context.lineTo(width, ((4 - 0.5) * height) / 5);
    context.stroke();

    // Big center circle
    context.beginPath();
    context.arc(width / 2, height / 2, height / 5, 0, Math.PI * 2, true);
    context.stroke();

    // Small center circle
    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.0048828, 0, Math.PI * 2, true);
    context.stroke();

    // Center line
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();

    // Penalty half circle (left)
    context.beginPath();
    context.arc(
      width * 0.122,
      height / 2,
      (0.5 * height) / 5,
      Math.PI / 2,
      Math.PI * 1.5,
      true
    );
    context.stroke();

    // Penalty half circle (left)
    context.beginPath();
    context.arc(
      width - width * 0.122,
      height / 2,
      (0.5 * height) / 5,
      Math.PI / 2,
      Math.PI * 1.5,
      false
    );
    context.stroke();

    // Out line
    context.moveTo(0, 0);
    context.lineTo(0, height);
    context.lineTo(width, height);
    context.lineTo(width, 0);
    context.closePath();
    context.stroke();

    context.font = `${width * 0.014648}px Helvetica`;
    context.fillStyle = "white";
    context.fillText(
      "By: Abdullah Ahmed",
      width - width * 0.17,
      height - height * 0.0555
    );

    context.font = `${width * 0.008789}px Helvetica`;
    context.fillText(
      "https://github.com/abdullahahmeda",
      width - width * 0.17,
      height - height * 0.0333
    );
  };
};

canvasSketch(sketch, settings);
