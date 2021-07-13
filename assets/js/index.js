class Kundali {
  constructor(fontStyle) {
    this.kundali = document.getElementById("kundali");
    this.context = this.kundali.getContext("2d");
    this.context.strokeRect(0, 0, 500, 500);
    this.context.font = fontStyle;
  }
  setCanvas(color, height, width) {
    this.context.fillStyle = color;
  }

  lineDrawer(x1, y1, x2, y2) {
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }
  textEmbedder(text, x, y) {
    this.context.fillText(text, x, y);
  }
}
const kundaliCoordinates = [
  [0, 0, 500, 500],
  [0, 500, 500, 0],
  [0, 250, 250, 0],
  [250, 0, 500, 250],
  [0, 250, 250, 500],
  [250, 500, 500, 250],
];
const kundaliCoordinateForText = [
  ["१", 31, 370],
  ["२", 132, 460],
  ["३", 252, 384],
  ["४", 377, 456],
  ["५", 460, 376],
  ["६", 372, 244],
  ["७", 464, 124],
  ["८", 375, 45],
  ["९", 249, 110],
  ["१०", 128, 50],
  ["११", 40, 123],
  ["१२", 134, 257],
];

const planetaryCoordinates = [
  ["शुक्र", 127, 23],
  ["सुर्य", 242, 135],
  ["राहु", 359, 18],
  ["गुरु", 249, 341],
  ["केतु", 127, 485],
  ["चन्द्र", 752, 440],
  ["मङ्गल", 444, 401],
  ["शनी", 465, 153],
];
document.querySelector(".kundaliGen").onclick = (e) => {
  document.getElementById("kundali").style.display = "inline-block";
  document.getElementById("download").style.display = "inline-block";
  e.target.style.display = "none";
  kundaliGenerator();
  e.preventDefault();
};

const kundaliGenerator = () => {
  let myKundali = new Kundali("18px Arial");
  myKundali.setCanvas("black", 500, 500);
  kundaliCoordinates.forEach((data) => {
    myKundali.lineDrawer(data[0], data[1], data[2], data[3]);
  });
  kundaliCoordinateForText.forEach((data) => {
    myKundali.textEmbedder(data[0], data[1], data[2]);
  });

  planetaryCoordinates.forEach((data) => {
    myKundali.textEmbedder(data[0], data[1], data[2]);
  });

  const downloadBtn = document.getElementById("download");
  downloadBtn.onclick = (e) => {
    let canvasImage = document.getElementById("kundali").toDataURL("image/png");
    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function () {
      let a = document.createElement("a");
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = "yourkundali.png";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    xhr.open("GET", canvasImage); // This is to download the canvas Image
    xhr.send();
    e.preventDefault();
  };
};
