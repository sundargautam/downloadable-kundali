/*
* Created by Sundar Gautam
*/
document.querySelector(".kundaliGen").onclick = (e) => {
  document.getElementById("kundali").style.display = "inline-block";
  document.getElementById("download").style.display = "inline-block";
  e.target.style.display = "none";
  kundaliGenerator();
  e.preventDefault();
};


