describe ("Testes dia_semana",function(){
	var diaSemana = new dia_semana();

	it("Dia",function(){
		expect("Domingo").toBe(diaSemana.dia(1));
	});
	it("Resultado inválido",function(){
		expect("Inválido").toBe(diaSemana.dia("a"));
	});
});