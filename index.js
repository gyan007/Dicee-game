//for first dice
var diceNumber1 = Math.floor(Math.random() * 6) + 1 ;
var diceImageSource1 = "images/dice" + diceNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceImageSource1);


//for second dice
var diceNumber2 = Math.floor(Math.random() * 6) + 1 ;
var diceImageSource2 = "images/dice" + diceNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImageSource2);


if(diceNumber1 > diceNumber2){
    document.querySelector("h1").innerHTML = "You won!";
}
else if(diceNumber1 < diceNumber2 ){
    document.querySelector("h1").innerHTML = "Computer won!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}