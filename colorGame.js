var numSquares=6;
var colors=generateColors(numSquares);
//var =colors[0];
var squares=document.querySelectorAll(".square");
var pickedColor=randomColor();
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var newColors=document.querySelector("#reset");

var colorDisplay=document.getElementById("colorDisplay");
var easyButton=document.querySelector("#easyLevel");
var hardButton=document.querySelector(".selected");

colorDisplay.textContent=pickedColor;

for(var i=0; i< squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click", function(){
            var clicked=this.style.backgroundColor;
            //alert(clicked);
            if (clicked == pickedColor){
                messageDisplay.textContent="Correct";
                changeColor(clicked);
                h1.style.backgroundColor=clicked;
                newColors.textContent="Play Again?";
            }
             else {
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again!";
            } 
        /* if( clickedColor == pickedColor)
            {alert("you won!");}

            else {
                alert("Wrong");

            } */
        
        /* pickedColor.style.backgroundColor=squares[i];
        colorDisplay.textContent=pickedColor;
         */
    });
}


newColors.addEventListener("click", function(){
     colors=generateColors(numSquares);
     pickedColor=randomColor();
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});
// EASY MODE
    easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3
    colors=generateColors(numSquares);
    pickedColor=randomColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i< squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
         else {
            squares[i].style.display="none";
        } 
    }
});


//HARD MODE
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");  
    numSquares=6;
    colors=generateColors(numSquares);
    pickedColor=randomColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i< squares.length;i++){
        
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
});

// FUNCTIONS!!
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}
   //PICK COLOR
 function randomColor(){
    var random=Math.floor(Math.random()*(colors.length));
    return colors[random];
}

function generateColors(num){
    var arr=[];
    for (var i=0; i<num;i++){
        arr.push(randomGeneratedColor());
    }

    return arr;
}

function randomGeneratedColor(){

    var r=Math.floor( Math.random()*256);
    var g=Math.floor( Math.random()*256);
    var b=Math.floor( Math.random()*256);
    return "rgb(" +r +", " + g +", " +r +")";

}
