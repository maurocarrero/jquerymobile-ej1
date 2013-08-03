$(document).ready(function(){

	var clientes = cargarDatos();
	cargarDetalles(clientes[0]);

	for (var i=0; i < clientes.length; i++) {

		var li = $("<li/>");
		li.addClass("cliente");
		var anchor = $("<a/>", {
			href: "#",
			text: clientes[i].nombre
		});
		anchor.data("id", clientes[i].id);
		anchor.appendTo(li);
		li.appendTo("ul#clientes");
		$("ul#clientes").listview("refresh");
	}

	$("li.cliente").on("click", "a", function(){
		var id = $(this).data("id");
		console.log("id: " + id);
		for (var j=0; j < clientes.length; j++) {
			if (clientes[j].id == id) {
				console.log("id del array: " + clientes[j].id);
				cargarDetalles(clientes[j]);
				break;
			}
		}
		$.mobile.changePage("#pag2");
	});
});


function cargarDetalles(cliente)
{
	var detalles = $(".detallescliente");
	detalles.empty();
	detalles.data("id", cliente.id);
	var nombre = $("<div/>", {
		text: "Nombre: " + cliente.nombre
	});
	var edad = $("<div/>", {
		text: "Edad: " + cliente.edad
	});
	var sexo = $("<div/>", {
		text: "Sexo: " + devolverSexo(cliente.sexo)
	});

	nombre.appendTo(detalles);
	edad.appendTo(detalles);
	sexo.appendTo(detalles);
}

function devolverSexo(sexo)
{
	if (sexo == "M")
		return "Masculino";
	if (sexo == "F")
		return "Femenino";
	return "WTF!";
}

function cargarDatos()
{
	var clientes = new Array();

	var cli1 = { id: 1, nombre: "Lucas Domínguez", edad: '10', sexo: 'M' };
	var cli2 = { id: 2, nombre: "Mauro Carrero", edad: '36', sexo: 'M' };
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

