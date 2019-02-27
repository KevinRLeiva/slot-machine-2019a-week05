var total=100;
function showReels(reel1, reel2, reel3){
 document.getElementById('reel1').innerHTML=reel1;
 document.getElementById('reel2').innerHTML=reel2;
 document.getElementById('reel3').innerHTML=reel3;
 console.log(reel1, reel2, reel3)

}

document.getElementById('min').addEventListener("click", function(){
//set reel values

 var reel1= spinReel()
 var reel2= spinReel()
 var reel3= spinReel()

 showReels(reel1, reel2, reel3);

console.log(reel1, reel2, reel3)
//conditional to update total value
if(checkReels(reel1,reel2,reel3)){
 total=total+25
}else{
 total=total-1
}
document.getElementById('totalMoney').innerHTML= "Total Wins: " + total;
});

document.getElementById('max').addEventListener("click", function(){
//set reel values
var reel1= spinReel()
var reel2= spinReel()
var reel3= spinReel()

showReels(reel1, reel2, reel3);

 //conditional to update total value
 if(checkReels(reel1,reel2,reel3)){
   total=total+250
 }else{
   total=total-25
 }
 document.getElementById('totalMoney').innerHTML= "Total Wins: " + total;
});
//choose random value for the reel
function spinReel(){

 var choice = Math.random()
 if(choice<=.2){
   choice="Cheery";
 }else if(choice<=.4){
   choice="Ace"
 }else if(choice<=.6){
   choice="King"
 }else if(choice<=.8){
   choice="Queen"
 }else{
   choice="Yumiko"
 }

 return choice;
}

function checkReels(reel1,reel2,reel3){
 if(reel1===reel2 && reel1===reel3){
   return true;
 }else{
   return false;
 }
}
