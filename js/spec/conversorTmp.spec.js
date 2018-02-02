describe("Testes funções",function(){

		var conversor = new conversorTmp();

		it("Celsius para Fahrenheit",function(){
			expect(96.8).toBe(conversor.CelsiusToFahrenheit(36));
		});

		it("Fahrenheit para Celsius",function(){
			expect(0).toBe(conversor.FahrenheitToCelsius(32));
		});

		it("Celsius para Kelvin",function(){
			expect(283.15).toBe(conversor.CelsiusToKelvin(10));
		});

		it("Kelvin para Celsius",function(){
			expect(-263).toBe(conversor.KelvinToCelsius(10));
		});
});