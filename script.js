var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyclothes");
var random = document.getElementById("randombtn")
var color = "";
changegradient();

random.addEventListener("click",setrandomcolor);
color1.addEventListener("input",changegradient);
color2.addEventListener("input",changegradient);

function randomcolor(){
	var letters = "0123456789ABCDEF";
	color ="#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() *16)];
	}
	// console.log(color);
	return color;
}

function setrandomcolor(){
	randomcolor();
	color1.value = color;
	console.log(color1.value);

	randomcolor();
	color2.value = color;
	console.log(color2.value);

	changegradient()
}

function changegradient(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")"
	;
	css.textContent = body.style.background + ";";
}
