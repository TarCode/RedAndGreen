

var assert = {

			count : 0,
			pass: 0,
			equals : function(msg, result){

				
	 			var nuBlock = document.createElement('div');
				nuBlock.id = 'square'+this.count;
				nuBlock.style.height = '150px';
				nuBlock.style.width = '150px';
				nuBlock.style.border = '3px solid black';
				nuBlock.style.display = 'inline-block';
				nuBlock.style.color = 'white';
				document.body.appendChild(nuBlock); 
	 			
				var rg = new RedOrGreen(nuBlock.id);
				if(msg === result){
					nuBlock.innerHTML = "PASS";
					this.pass++;
					rg.makeGreen();
				}
				else{
					nuBlock.innerHTML = "FAIL";
					rg.makeRed();
				}
				this.count++;
			}
		}


var TestMyCode = {

	 run: function(name, testPar){
	 		


			this.name = name;
			testPar(assert);
			
		}

	}


