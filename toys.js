var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');
var computerChoice;
var cCount=0, pCount=0;
console.log(cPoint);
function play(playerChoice){
	//alert(playerChoice);
	pChoice.innerText="Player choice:"+playerChoice;
	var random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		cChoice.innerText = "Computer choice:chuluu";
		computerChoice="chuluu";
	}else if(random==1){
		cChoice.innerText = "Computer choice:haich";
		computerChoice="haich"
	}else if(random==2){
		cChoice.innerText = "Computer choice:daavuu";computerChoice="daavuu";
	} 
	if(playerChoice=="chuluu"  && computerChoice=="haich"){
		winner.innerText="Winner:Player"
        pCount++;		
	}else if
		(playerChoice=="haich"  && computerChoice=="chuluu"){
		winner.innerText="Winner:computer"
		cCount++;
	}else if
		(playerChoice=="daavuu"  && computerChoice=="chuluu"){
		winner.innerText="Winner:Player"
		pCount++;
	}else if
		(playerChoice=="chuluu"  && computerChoice=="daavuu"){
		winner.innerText="Winner:computer"
		cCount++;
	}else if
		(playerChoice=="haich"  && computerChoice=="daavuu"){
		winner.innerText="Winner:Player"
		pCount++;
	}else if
		(playerChoice=="daavuu"  && computerChoice=="haich"){
		winner.innerText="Winner:computer"
		cCount++;
	}else if
		(playerChoice=="daavuu"  && computerChoice=="daavuu"){
		winner.innerText="Winner:tentslee"
	}else if
		(playerChoice=="haich"  && computerChoice=="haich"){
		winner.innerText="Winner:tentslee"
	}else if
		(playerChoice=="chuluu"  && computerChoice=="chuluu"){
		winner.innerText="Winner:tentslee"
	}
	cPoint.innerText="Computer:"+cCount;
	pPoint.innerText="Player:"+pCount;	
}
function restart(){
	cPoint.innerText="computer:0"
	cCount=0;
	pPoint.innerText="player:0"
	pCount=0;
	cChoice.innerText="computerChoice:"
	pChoice.innerText="playerChoice:"
	winner.innerText="winner:"
}	
	