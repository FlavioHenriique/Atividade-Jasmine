function posto_combustivel(){

	this.valorCombustivel=function(litros,tipo){
		if(tipo=="A"){

			if(litros<=20){
				return (3.2 - 3.2*0.03)* litros;
			}else return (3.2 - 3.2*0.05)*litros;

		}else if(tipo=="G"){

		if(litros<=20){
				return (3.7 - 3.7*0.04)* litros;
			}else return (3.7 - 3.7*0.06)*litros;			

		}else return "Tipo inválido";
	};
};