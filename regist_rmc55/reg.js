window.onload = inites;

    function inites() {
		function handKeyPress(e){
			var cliKS = document.getElementById('checkup');
		if (e.keyCode === 13){
				cliKS.click();
				return false;
			}
		}
		
		
		var guessInput = document.getElementById('formResult');
		guessInput.onkeypress = handKeyPress;
		var cliKS = document.getElementById('checkup');
        cliKS.onclick = function () {
			document.getElementById('sResult').innerHTML = " ";
            var answer = guessInput.value.toLowerCase();
			

            if (answer === "393047" ) {
				
                document.getElementById('pege1').style.display = 'none';
                document.getElementById('pege2').style.display = 'block'; 
				document.getElementById('formClik').style.display = 'none';
				
				return ;
			
				

            }
           
            if (answer === "") {
                document.getElementById('sResult').innerHTML = "Введите код доступа";
               
            }
            else {
                document.getElementById('sResult').innerHTML = "Код доступа " + answer + " неверный.  Попробуйте еще раз.";
				
				
				
            
            }

        }
		
		
    }