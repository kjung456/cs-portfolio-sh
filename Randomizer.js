// JavaScript File
var display = document.getElementById("display")
var dropdown = document.getElementById("dropdown")
var redButton = document.getElementById("redButton")    
var musicans = ["Chris Brown", "Bryson Tiller", "Tory Lanez","Gallant", "Jhene Aiko", "Taylor Swift", "Drake", "Tupac",
"Beyonce", "Rihanna", "Ariana Grande", "Tinashe", "Nicki Minaj", "Ciara", "Big Sean", "William Singe", "Alex Aiono",
"Chance the Rapper", "Kendrick Lemar"];

//
var musician1 = musicans[Math.floor(Math.random()*musicans.length)];

//This has the computer continually activley listen to when someone clicks the button
redButton.addEventListener("click",randomize);

//This code picks random artist from the list above and gives it to the viewer based on how many peple they want in their band
musicans.addEventListener("click", function randomize){
        
});