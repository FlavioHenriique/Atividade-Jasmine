function verifica_triangulo(){

	this.verificar=function(a,b,c){
		if((b-c)<a<b+c || (a-c)<b<a+c || (a-b)<c<a+b){

			if(a==b && b==c){
				return "Triângulo Equilátero";
			}
			else if(a==b || b==c || a==c){
				return "Triângulo Isósceles";
			}
			else return "Triângulo Escaleno";
		}else return "Valores inválidos para um triângulo";
	};
};