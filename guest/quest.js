window.onload = inites;

    function inites() {
		function handKeyPress(e){
			var cliKS = document.getElementById('checkup');
		if (e.keyCode === 13){
				cliKS.click();
				return false;
			}
		}
		var arclic = [0];
		
		var guessInput = document.getElementById('formResult');
		guessInput.onkeypress = handKeyPress;
		var cliKS = document.getElementById('checkup');
        cliKS.onclick = function () {
			document.getElementById('sResult').innerHTML = " ";
            var answer = guessInput.value.toLowerCase();
			

            if (answer === "шалтай" && arclic.length === 1) {
				
                document.getElementById('pege1').style.display = 'none';
                document.getElementById('pege3').style.display = 'none';
                document.getElementById('pege4').style.display = 'none';
                document.getElementById('pege2').style.display = 'block';              
				arclic.push(1);
				return ;
			
				

            }
            if (answer === "болтай" && arclic.length === 2) {
				
                document.getElementById('pege1').style.display = 'none';
                document.getElementById('pege2').style.display = 'none';
                document.getElementById('pege4').style.display = 'none';
                document.getElementById('pege3').style.display = 'block';
                        
				arclic.push(2);
				return ;
				
            }
            if (answer === "сидел" && arclic.length === 3) {
				document.getElementById('formClik').style.display = 'none';
                document.getElementById('pege1').style.display = 'none';
                document.getElementById('pege2').style.display = 'none';
                document.getElementById('pege3').style.display = 'none';
                document.getElementById('pege4').style.display = 'block';
				return ;
                
					
            }
            if (answer === "") {
                document.getElementById('sResult').innerHTML = "Введите ваш ответ";
               
            }
            else {
                document.getElementById('sResult').innerHTML = "Вы дали неверный ответ.Попробуйте еще раз.";
				console.log("ошибка");
				
				
            
            }

        }
		
		
    }