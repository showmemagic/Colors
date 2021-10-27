document.querySelector("#color-change").addEventListener("click", () => {
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "";
for (var i = 0; i < 6; i++) {
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
}
  document.body.style.backgroundColor = bgColor;  
});

