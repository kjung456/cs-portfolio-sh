// JavaScript File
//This helps the var be recognized
var PointGuard = document.getElementById("PointGuard");
var ShootingGuard = document.getElementById("ShootingGuard");
var SmallFoward = document.getElementById("SmallFoward");
var Powerfoward = document.getElementById("PowerFoward");
var Center = document.getElementById("Center");

//this is for var so that the when the var above is clicked on it will display the information
var PointGuard1 = document.getElementById("PointGuard1")
var ShootingGuard2 = document.getElementById("ShootingGuard2")
var SmallFoward3 = document.getElementById("SmallFoward3")
var PowerFoward4 = document.getElementById("PowerFoward4")
var Center5 = document.getElementById("Center5")

//This tells the computer when the position is clicked to display the information and gif for that position
PointGuard.addEventListener("click", function(){
    PointGuard1.innerHTML = "The point guard obtains the number one position. A point guard is the team's best ball handler and passer. This allows them to get a great amount of assists because their passes set up their teammates so they can score. Their ability to read the court so well helps them on the defensive end. They can read the opponent's next move and steal the basketball from them. Point guards are very quick, making it difficult to guard them. They can also shoot from the three point making them an offensive threat. They are known as the leader of the team studying film, directing plays, and setting up other teammates to score.<br> <img style='width:500px; height:400px;' src='http://i.imgur.com/QDpKu5s.gif'><br/>"
});
ShootingGuard.addEventListener("click", function(){
    ShootingGuard2.innerHTML = "A shooting guard is the second postion in basketball. They are often called the two. The shooting guard is reffered to a wing. Most shooting guards are great three-point shooters. Also they are able to dribble the ball with ease making it easy for them dive to the hoop without getting picked. They can also create shots for themselves off of the dribble. Shooting guards are very versatile, having good passing skills are another trait of a shooting guard, because of this shooting guards are known as combo guards.<br> <img style='width:500px; height:400px;' src='http://esq.h-cdn.co/assets/15/52/480x270/gallery-1450898031-kobe.gif'><br/>"
});
SmallFoward.addEventListener("click", function(){
    SmallFoward3.innerHTML = "A small foward is known as the third position in basketball. This is the most versatile postion out of all five, they are often reffered to as the wing. The shooting guard and small foward can be interchangable and can play both postions. Small fowards are known for their speed and strength. This allows them to succeed inside of the key getting layups, dunks, post moves, and drawing fouls. This allows them to be a threat inside the paint and score a lot of points in the key. Besides being good inside of the key, some small fowards are also able to shoot the ball from long range, the three-point line. They are also great players on the otherside of the court, defense. Their versatility allows them to be a threat on both ends of the court.<br> <img style='width:500px; height:400px;' src='https://media.giphy.com/media/7Ee6I8ecvwFCU/giphy.gif'><br/>"
});
Powerfoward.addEventListener("click", function(){
    PowerFoward4.innerHTML = "A power foward is the forth is the fourth player in the rotation of five. This position often plays in the post. The small foward is able to score close to the basketball as well as from midrange. As basketball evolves, power fowards are expanding their shooting range and are starting to be able to shoot from the three point line. A power foward has the strength to guard bigger players such as the opposing center, but they are also pretty quick on their feet so they can guard quicker players.<br><img style='width:500px; height:400px;' src='https://media.giphy.com/media/3oEdvaAhIxot8KIKiI/giphy.gif'><br/>"
});
Center.addEventListener("click", function(){
    Center5.innerHTML = "The center the number five but is also known as the pivot. The center usually plays near the low blocks and the hoop. The center is typically the tallest player on the team. The majority of a center's point comes from the low post which is near the basket. Centers are very important to a team to get rebounds, block shots, and set screens plays. The center is the anchor of the team by getting blocks and rebounds to help get more offensive posessions. <img style='width:500px; height:400px;' src='http://stream1.gifsoup.com/view1/1322662/shaq-breaks-backboard-o.gif'><br/>"
});