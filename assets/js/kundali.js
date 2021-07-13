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
