// Variables //
const resultado = document.querySelector('#resultado');

// eventos //
document.addEventListener('DOMContentLoaded', () => {
	mostrarAutos();
});


// funciones //
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