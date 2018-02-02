function funcao_conceito(){

	this.conceito=function(nota1,nota2){

		if(nota1>=9 && nota2>=9 && nota1<=10 && nota2<=10){
			return "A";
		}else if(nota1>=7.5 && nota1<=8.9 && nota2>=7.5 && nota2<=8.9){
			return "B";
		}
		else if (nota1>=6 && nota1<=7.4 && nota2>=6 && nota2<=7.4){
			return "C";
		}
		else return "Valores inválidos";
	};
};