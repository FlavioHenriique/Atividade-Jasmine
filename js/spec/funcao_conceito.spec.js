describe("Testes conceitos",function(){

	var fConceito = new funcao_conceito();

	it("Entre 9 e 10",function(){
		expect("A").toBe(fConceito.conceito(9.5,9.8));
	});

	it("Entre 7,5 e 8,9",function(){
		expect("B").toBe(fConceito.conceito(7.9,8.1));
	});	

	it("Entre 6 e 7,4",function(){
	expect("C").toBe(fConceito.conceito(6.8,7.4));
	});	

	it("Valores inválidos",function(){
	expect("Valores inválidos").toBe(fConceito.conceito(1,5.9));
	});	


});