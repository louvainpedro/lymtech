let nav2 = document.getElementById("nav2");
let services = document.getElementById("services");
let insights = document.getElementById("insights");

function ShowNav2() {
    nav2.style.display = "flex";
    nav2.style.flexDirection = "row";
    nav2.style.position = "absolute";
}

function HideNav2() {
    nav2.style.display = "none";
}

services.addEventListener("mouseover", ShowNav2);
services.addEventListener("mouseout", HideNav2);
insights.addEventListener("mouseover", ShowNav2);
insights.addEventListener("mouseout", HideNav2);