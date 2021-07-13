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