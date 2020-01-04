const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 900],
  orientation: "landscape",
  units: "px",
  pixelsPerInch: 300
};

random.setSeed(random.getRandomSeed());
console.log(random.getSeed());

const sketch = () => {
  const colorCount = random.rangeFloor(1, 6);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
  const margin = 400;

  return ({ context, width, height }) => {
    const createGrid = () => {
      const points = [];
      const count = 6;

      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          const u = count <= 1 ? 0.5 : r / (count - 1);
          const v = count <= 1 ? 0.5 : c / (count - 1);
          const x = lerp(margin, width - margin, u);
          const y = lerp(margin, height - margin, v);
          points.push([x, y]);
        }
      }

      return points;
    };

    context.fillStyle = "green";
    context.fillRect(0, 0, 2048, 900);
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = "white";
    context.stroke();

    context.moveTo(0, 900 / 5);
    context.lineTo(250, 900 / 5);
    context.lineTo(250, (4 * 900) / 5);
    context.lineTo(0, (4 * 900) / 5);

    context.moveTo(0, (1.5 * 900) / 5);
    context.lineTo(150, (1.5 * 900) / 5);
    context.lineTo(150, ((4 - 0.5) * 900) / 5);
    context.lineTo(0, ((4 - 0.5) * 900) / 5);

    context.moveTo(2048, 900 / 5);
    context.lineTo(2048 - 250, 900 / 5);
    context.lineTo(2048 - 250, (4 * 900) / 5);
    context.lineTo(2048, (4 * 900) / 5);
    context.stroke();

    context.moveTo(2048, (1.5 * 900) / 5);
    context.lineTo(2048 - 150, (1.5 * 900) / 5);
    context.lineTo(2048 - 150, ((4 - 0.5) * 900) / 5);
    context.lineTo(2048, ((4 - 0.5) * 900) / 5);
    context.stroke();

    context.beginPath();
    context.arc(width / 2, height / 2, 900 / 5, 0, Math.PI * 2, true);
    context.stroke();

    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();

    context.beginPath();
    context.arc(
      250,
      height / 2,
      (0.5 * 900) / 5,
      Math.PI / 2,
      Math.PI * 1.5,
      true
    );
    context.stroke();

    context.beginPath();
    context.arc(
      width - 250,
      height / 2,
      (0.5 * 900) / 5,
      Math.PI / 2,
      Math.PI * 1.5,
      false
    );
    context.stroke();

    context.moveTo(0, 0);
    context.lineTo(0, height);
    context.lineTo(width, height);
    context.lineTo(width, 0);
    context.closePath();
    context.stroke();

    context.font = "30px Helvetica";
    context.fillStyle = "white";
    context.fillText("By: Abdullah Ahmed", width - 350, height - 50);

    context.font = "18px Helvetica";
    context.fillText(
      "https://github.com/abdullahahmeda",
      width - 350,
      height - 30
    );

    context.beginPath();
    context.arc(width / 2, height / 2, 10, 0, Math.PI * 2, true);
    context.stroke();
  };
};

canvasSketch(sketch, settings);
