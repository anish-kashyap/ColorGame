var noOfSquares=6;
var colors=[];
var squares= document.querySelectorAll(".square");
var pickedColor;
var colorDisplay= document.querySelector("#colorid");
var  messageDisplay= document.querySelector("#message")
var h1color=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");




init()

function init()
{
    modeButtonSetup();
    setupSquares();
    reset();

}

function modeButtonSetup()
{
    for(var i=0;i<modeButton.length;i++)
    {
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            if(this.textContent==="EASY")
            {noOfSquares=3;}
            else{noOfSquares=6;}
            reset();

        })
    }
}

function setupSquares()
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].addEventListener("click", function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
                messageDisplay.textContent="Correct!";
                changeColor(clickedColor);
                h1color.style.backgroundColor=pickedColor;
                resetButton.textContent="Play Again";
            }
            else
                {
                    this.style.backgroundColor="#232323";
                    messageDisplay.textContent="Try Again!";
                }
        })
    }
}



function reset()
{
    colors=generateRandomColors(noOfSquares);
    //pick new color
    pickedColor=pickColor();
    //assign picked color to colorDisplay
    colorDisplay.textContent=pickedColor;
    //set new colors to all the squares
    messageDisplay.textContent=" ";
    h1color.style.backgroundColor="steelblue";
    resetButton.textContent="New Colors";
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        
    }
}




function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length); 
    return colors[random];
}

function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(makeRandomColor());
    }


    return arr;
}

function makeRandomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
   // rgb(r, g, b)
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}


resetButton.addEventListener("click", function(){
    reset();
     
})