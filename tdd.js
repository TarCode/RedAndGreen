var assert = {


			equals : function(msg, result){
				var rg = new RedOrGreen("square");
				if(msg === result){
					
					rg.makeGreen();
				}
				else{
					rg.makeRed();
				}
			}
		}


var TestMyCode = {

	 run: function(name, testPar){

		this.name = name;
		testPar(assert);
		}

	}


