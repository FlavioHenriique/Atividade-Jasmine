describe ("Testes verifica_triangulo",function(){

	var triangulo = new verifica_triangulo();

	it("Equilátero",function(){
		expect("Triângulo Equilátero").toBe(triangulo.verificar(3,3,3));
	});

	it("Isósceles",function(){
		expect("Triângulo Isósceles").toBe(triangulo.verificar(3,3,2));
	});

	it("Escaleno",function(){
		expect("Triângulo Escaleno").toBe(triangulo.verificar(1,2,3));
	});

});