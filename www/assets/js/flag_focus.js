// variables
const br = document.getElementById("br");
const usa = document.getElementById("usa");
const esp = document.getElementById("esp");
const br_r = document.getElementById("br-r");
const usa_r = document.getElementById("usa-r");
const esp_r = document.getElementById("esp-r");

// functions
function addStyle(element) {
  element.style.transform = "scale(0.8)";
  element.style.filter = "grayscale(100%)";
}

function removeStyle(element) {
  element.style.transform = "scale(1)";
  element.style.filter = "grayscale(0%)";
}

// events
br.addEventListener("click", function () {
  console.log("oi");

  removeStyle(usa);
  removeStyle(esp);
  addStyle(br);
});

usa.addEventListener("click", function () {
  console.log("oi2");

  removeStyle(br);
  removeStyle(esp);
  addStyle(usa);
});

esp.addEventListener("click", function () {
  console.log("oi3");

  removeStyle(br);
  removeStyle(usa);
  addStyle(esp);
});

br_r.addEventListener("click", function () {
  console.log("oi");

  removeStyle(usa_r);
  removeStyle(esp_r);
  addStyle(br_r);
});

usa_r.addEventListener("click", function () {
  console.log("oi2");

  removeStyle(br_r);
  removeStyle(esp_r);
  addStyle(usa_r);
});

esp_r.addEventListener("click", function () {
  console.log("oi3");

  removeStyle(br_r);
  removeStyle(usa_r);
  addStyle(esp_r);
});
