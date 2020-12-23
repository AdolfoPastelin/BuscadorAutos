// Variables //
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//variable contenedora de los resultados
const resultado = document.querySelector('#resultado');

//obtiene el año actual (2020) y el minimo año para ventas (2010)
const max = new Date().getFullYear(); //al pasar de año, se cambiará automaticamente.
const min = max - 10;

//Generar un objeto en la busqueda
const datosBusqueda = { //objeto datosBusqueda
	marca: '',
	year: '',
	minimo: '',
	maximo: '',
	puertas: '',
	transmision: '',
	color: '',
}

// eventos //
document.addEventListener('DOMContentLoaded', () => {
	//Muestra los autos nadamas al cargar la página (para despues filtrar con otros metodos)
	mostrarAutos();

	//Llena las opciones de años
	llenarSelect();
});

//Event listeners para los select de búsqueda
marca.addEventListener('change', (e) => { //evento que se dispara cuando ocurre un cambio en el atributo
	datosBusqueda.marca = e.target.value;

	filtrarAuto();
});

year.addEventListener('change', (e) => {
	datosBusqueda.year = parseInt(e.target.value);
});

minimo.addEventListener('change', (e) => {
	datosBusqueda.minimo = parseInt(e.target.value);
});

maximo.addEventListener('change', (e) => {
	datosBusqueda.maximo = parseInt(e.target.value);
});

puertas.addEventListener('change', (e) => {
	datosBusqueda.puertas = parseInt(e.target.value);
});

transmision.addEventListener('change', (e) => {
	datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', (e) => {
	datosBusqueda.color = e.target.value;
	console.log(datosBusqueda);
});

// Funciones //
//Esta función mostrará los autos que se tendrán en una DB
//En este caso no tenemos una base de datos pero usaremos un objeto en JS
function mostrarAutos() {
	autos.forEach((auto) => {

		const { marca, modelo, year, precio, puertas, color, transmision } = auto;
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
	for (let i = max; i >= min; i--) {
		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;
		year.appendChild(opcion); //Agrega las opciones de año al select.
	}
}

//Función que filtra en base a la busqueda//
//	esta función se considera de alto nivel, ya que tiene 
//	como parametro otra función
function filtrarAuto() {
	const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

	console.log(resultado);
}

//Función que devuelve el auto buscado por el usuario en base a la marca
function filtrarMarca(auto) {
	const { marca } = datosBusqueda;

	if (marca) {
		return auto.marca === marca;
	}
	
	return auto;
}

//Función que devuelve el auto buscado por el usuario en base al año
function filtrarYear(auto) {
	const { year } = datosBusqueda;

	if (year) {
		return auto.year === year;
	}

	return auto
}
