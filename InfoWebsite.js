// JavaScript
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    info1.innerHTML = "Bryson Tiller";
    info2.innerHTML = "Bryson Tiller's birth name is Bryson Djuan Tiller. He was born on Janusry 2, 1993 in Louisville, Kentucky. Tiller writes R&B, Alternative R&B, and Hip Hop. His main occupation is a songwriter,singer and rapper.<br> He has four brothers. When he was four, his mother died. Tiller dropped out of high school and wanted to pursue his dream of becoming a musician. He worked at Papa John's and UPS. He later found out that he had a daughter, in result made him have to work multiple jobs. He continued to pursue his dream of music,so he released his hit song Dont which put him on the map and made his career kickstart. Since then, he released his first album TRAPSOUL and he has toured the United States and Europe as well.";
});    
item2.addEventListener("click", function(){
    info1.innerHTML = "P-Lo";
    info2.innerHTML = "Paolo Rodriquez, also known as P-Lo, was born and raised in Richmond, California. He was born on May 7, 1991 and is currently 24 years old. P-Lo was the co-founder of a music group called The Heartbreak Gang, or The HBK Gang, that produces hip-hop/ rap music.";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "Chris Brown";
    info2.innerHTML = "Christopher 'Chris' Maurice Brown was born on May 5, 1989 in Tappahannock, Virginia. His hip-hop, R&B, and pop music that he writes has resulted in him earning many awards. Currently, Chris also has a daugther named Royalty, that was his main inspiration for his most recent booming album.";
});
item4.addEventListener("click", function(){
    info1.innerHTML = "Kehlani";
    info2.innerHTML = "Kehlani Parrish was born on April 24, 1995 in Oakland, California. Her soulful and meaningful hip-hop and R&B music has turned her into an uncoming artist to one of the most popular female singer/songwriters in our generation. ";
});    