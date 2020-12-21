// Variables //
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

//obtiene el año actual (2020) y el minimo año para ventas (2010)
const max = new Date().getFullYear(); //al pasar de año, se cambiará automaticamente.
const min = max - 10;

// eventos //
document.addEventListener('DOMContentLoaded', () => {
	//Muestra los autos nadamas al cargar la página (para despues filtrar con otros metodos)
	mostrarAutos();

	//Llena las opciones de años
	llenarSelect();
});


// Funciones //
//Esta función mostrará los autos que se tendrán en una DB
//En este caso no tenemos una base de datos pero usaremos un objeto en JS
function mostrarAutos() {
	autos.forEach( (auto) => {
		
		const {marca, modelo, year, precio, puertas, color, transmision} = auto;
		const autoHTML = document.createElement('p');

		autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas
		- Trasmisión: ${transmision} - Precio: ${precio} - Color: ${color}
		
		`;

		//insertar en el html
		resultado.appendChild(autoHTML);
	});
}

//Generar los siguientes años del select
function llenarSelect() {
	for(let i = max; i >= min; i--){
		console.log(i);

		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;
		year.appendChild(opcion); //Agrega las opciones de año al select.
	}
}