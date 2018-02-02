function reajuste(){
	
	this.calculaReajuste=function(salario){

		if (salario<=280){
			return salario + salario*0.2;
		}else if(salario>280 && salario<=700){
			return salario + salario*0.15;
		}else if(salario>700 && salario<=1500){
			return salario + salario*0.1;
		}
		else return salario + salario*0.05;
	};
};