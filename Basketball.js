// JavaScript File
var PointGuard = document.getElementById("PointGuard");
var ShootingGuard = document.getElementById("ShootingGuard");
var SmallFoward = document.getElementById("SmallFoward");
var Powerfoward = document.getElementById("PowerFoward");
var Center = document.getElementById("Center");

var PointGuard1 = document.getElementById("PointGuard1")
var ShootingGuard2 = document.getElementById("ShootingGuard2")
var SmallFoward3 = document.getElementById("SmallFoward3")
var PowerFoward4 = document.getElementById("PowerFoward4")
var Center5 = document.getElementById("Center5")

PointGuard.addEventListener("click", function(){
    PointGuard.innerHTML = "1. Point Guard";
});
ShootingGuard.addEventListener("click", function(){
    ShootingGuard.innerHTML = "2. Shooting Guard";
});
SmallFoward.addEventListener("click", function(){
    SmallFoward.innerHTML = "3. Small Foward";
});
Powerfoward.addEventListener("click", function(){
    Powerfoward.innerHTML = "4. Power Foward";
});
Center.addEventListener("click", function(){
    Center.innerHTML = "5. Center";
});