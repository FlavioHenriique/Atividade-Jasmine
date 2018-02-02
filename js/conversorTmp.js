function conversorTmp(){

	this.CelsiusToFahrenheit=function(celsius){
		return (9/5)*celsius + 32;
	};

	this.FahrenheitToCelsius=function(fahrenheit){
		return (fahrenheit - 32)* 5/9;
	};

	this.CelsiusToKelvin=function(celsius){
		return celsius + 273.15;
	};
	this.KelvinToCelsius=function(kelvin){
		return kelvin - 273;
	};
};