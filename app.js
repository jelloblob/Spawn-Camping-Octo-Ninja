var score = 0;

var silverPoint = 10;

var goldPoint = 25;

var nothingPoint = 1;

var diamondPoint = 50;

var computerChoice;

var start = new Date();

setInterval(function() {
    $('#Timer').text((new Date() - start) / 1000 + " Seconds");
}, 1000);
	//Trying to change the timer to no decimal places//

$("#zane").click(function(){
	computerChoice = Math.floor(Math.random()*100);
	if(computerChoice < 5){
		computerChoice = "Diamond";
			$('#received').text("You got Diamond");
			score = diamondPoint + score;
			$('#Score').text('Your Score ' + score);
	}
	else if(computerChoice > 31){
		computerChoice = "Nothing";	
			$('#received').text("You got Rocks");
			score = nothingPoint + score;	
			$('#Score').text('Your Score ' + score);

	}	
	else if(computerChoice > 5 && computerChoice < 16){
		computerChoice = "Gold";
			$('#received').text("You got Gold");
			score = goldPoint + score;
			$('#Score').text('Your Score ' + score);
	}
	else if(computerChoice > 15 && computerChoice < 31){
		computerChoice = "Silver";
			$('#received').text("You got Silver");	
			score = silverPoint + score;
			$('#Score').text('Your Score ' + score);
	}
});








