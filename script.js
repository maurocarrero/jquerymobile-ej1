
$(document).ready(function(){
	var clientes = cargarDatos();

	for (var i=0; i < clientes.length; i++) {
		$("ul#clientes").append("<li><a href='#pag2?id='" + i + "'>" + clientes[i] + "</a></li>");
	}
	
	$("ul#clientes").listview("refresh");
	
});


function cargarDatos()
{
	var clientes = new Array();

	clientes[0] = "Lucas Dom�nguez";
	clientes[1] = "Mauro Carrero";
	clientes[2] = "Pepe Corvina";
	clientes[3] = "Toto Mendez";
	clientes[4] = "Valeria P�rez";
	
	return clientes;
}

