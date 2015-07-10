var computerChoice;
function computerThink(){
	computerChoice = Math.floor(Math.random()*100);
	if(computerChoice < 5){
		computerChoice = Diamond;
		diamondPoint++;
			alert("You Got Diamond");
}

// asdnbiygrfuoiqpwmeg9u1noi3pg8h9ui31nipt9-gyir80ugewhub12ru0uewgfbhfe9-i
	else if(computerChoice > 31){
		computerChoice = Nothing;
		nothingPoint++;	
			alert("You Got Nothing");	
}
	else if(computerChoice > 5 && computerChoice < 16){
		computerChoice = Gold;
		goldPoint++;
			alert("You Got Gold");	
}
	else if(computerChoice > 15 && computerChoice < 31){
		computerChoice = Silver;
		silverPoint++;
			alert("You Got Silver");	
}
}

Score = diamondPoint*50 + silverPoint*10 + goldPoint*25 + nothingPoint*1;

var diamondPoint = 1;

var silverPoint = 1;

var goldPoint = 1;

var nothingPoint = 1;

var Score = 0;

var press = function(){
	score++;
	document.getElementById('score').innerHTML = "Your Score: " + score;
};



