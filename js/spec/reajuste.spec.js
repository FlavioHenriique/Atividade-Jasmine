describe("Testes reajuste",function(){

	var calculo = new reajuste();

	it("Até 280,00",function(){
		expect(336).toBe(calculo.calculaReajuste(280));
	});

	it("Acima de 280,00 até 700,00",function(){
		expect(575).toBe(calculo.calculaReajuste(500));
	});

	it("Acima de 700,00 até 1500,00",function(){
		expect(880).toBe(calculo.calculaReajuste(800));
	});

	it("Acima de 1500,00",function(){
		expect(2100).toBe(calculo.calculaReajuste(2000));
	});
});