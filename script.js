
$(document).ready(function(){

	var clientes = cargarDatos();

	for (var i=0; i < clientes.length; i++) {
		// $("ul#clientes").append("<li><a href='#pag2?id=" + clientes[i].id + "'>" + clientes[i].nombre + "</a></li>");

		var li = $("<li/>");
		var anchor = $("<a/>", {
			href: "#",
			text: clientes[i].nombre
		});

		anchor.appendTo(li);
		li.appendTo("ul#clientes");
		$("ul#clientes").listview("refresh");
		anchor.data("id", clientes[i].id);
	}

	/* 
		Refresh: para agregar las clases a los elementos
		agregados dinámicamente
	*/
	
	
});


function cargarDatos()
{
	var clientes = new Array();

	var cli1 = { id: 1, nombre: "Lucas Domínguez", edad: '10', sexo: 'M' };
	var cli2 = { id: 2, nombre: "Mauro Carrero", edad: '4', sexo: 'M' };
	var cli3 = { id: 3, nombre: "Pepe Corvina", edad: '60', sexo: 'M' };
	var cli4 = { id: 4, nombre: "Juana de Ibarbourou", edad: '32', sexo: 'F' }; 
	var cli5 = { id: 5, nombre: "Marguerite Duras", edad: '25', sexo: 'F' };
	var cli6 = { id: 6, nombre: "Annie Hall", edad: '36', sexo: 'F' };
	var cli7 = { id: 7, nombre: "Ignacio Carrero", edad: '4', sexo: 'M' };

	clientes[0] = cli1;
	clientes[1] = cli2;
	clientes[2] = cli3;
	clientes[3] = cli4;
	clientes[4] = cli5;
	clientes[5] = cli6;
	clientes[6] = cli7;

	return clientes;
}

