// window.setTimeout(function(){
var numSquares=6;

var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){
	numSquares=3;
	colors=generateRandomColor(numSquares);
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	numSquares=6;
	colors=generateRandomColor(numSquares);
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})
resetButton.addEventListener("click",function(){
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	message.textContent="";
	colorDisplay.textContent=pickedColor;
	this.textContent="New Game";
	h1.style.backgroundColor="steelblue";
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
})
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{  
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try again";
		}
	})
}
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var idx=Math.floor(Math.random()*colors.length)
	return colors[idx];
}

function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomGenerator());
	}
	return arr;
}
function randomGenerator(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}
// },500);