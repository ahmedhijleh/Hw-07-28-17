

    
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var userguess=event.key;
	var userletterguess=[];
	var userlimit=9;
	var guesses=9;
	var wins=0;
	var losses=0;	
	var computerguess = letters[Math.floor(Math.random() * letters.length)];


	function updateguesses() { 
		  document.querySelector('Number Of Guesses').innerHTML = "Guesses left: " + guesses;
		};
		function newcomputerguess(){
			computerguess= letters[Math.floor(Math.random() * letters.length)];
		}

		function reset()
		{
			userguess=null;
			userletterguess=[];
			userlimit=9;
			guess=9;
			updateguesses();
			newcomputerguess();
		}
		document.onkeyup = function(event) {

    	guesses--;
    	

 		


		    userletterguess.push(userguess.toLowerCase);
       		var Char = userguess.toLowerCase();
      

            if (userguess == computerguess){

                wins++;

                document.querySelector('#wins').innerHTML = "Wins: " + wins;

                alert("You did it");

                reset();

            }
        		else (userguess!=comnputerguess){
        			losses++;
        			document.querySelector('#wins').innerHTML = "Loses: " + loses;
        			alert("try again");
        			reset();

        		}










