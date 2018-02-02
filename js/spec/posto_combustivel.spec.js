describe("Testes posto_combustivel",function(){

	var posto = new posto_combustivel();

	describe("Gasolina",function(){
		it("Até 20 litros",function(){
			expect(3.552).toBe(posto.valorCombustivel(1,"G"));
		});

		it("Acima de 20 litros",function(){
			expect(86.95).toBe(posto.valorCombustivel(25,"G"));
		});
	});

	describe("Álcool",function(){

		it("Até 20 litros",function(){
			expect(46.56).toBe(posto.valorCombustivel(15,"A"));
		});

		it("Acima de 20 litros",function(){
			expect(91.2).toBe(posto.valorCombustivel(30,"A"));
		});
	});
});

