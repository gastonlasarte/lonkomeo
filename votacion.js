var btnAgregar = document.getElementById('btn-inscribir'),
	btnRojo = document.getElementById('btn-rojo'),
	btnAzul = document.getElementById('btn-azul'),
	btnEmpate = document.getElementById('btn-empate'),
	fotoRojo = document.getElementById('foto-rojo'),
	fotoAzul = document.getElementById('foto-azul'),
	wins1 = document.getElementById('wins-1'),
	wins2 = document.getElementById('wins-2'),
	ganador = document.getElementById('ganador'),
	votoParaElAzul = 0,
	votoEmpate = 0,
	votoParaElRojo = 0,
	rounds = 0,
	compeditores = [],
	resultadoBatalla = [],
	facebooks = [];

btnAgregar.addEventListener('click', agregarBboy, false);
btnAzul.addEventListener('click', votacionAzul, false);
btnEmpate.addEventListener('click', votacionEmpate, false);
btnRojo.addEventListener('click', votacionRojo, false);

function agregarBboy() {
	var apodoBboy = document.getElementById('apodo-bboy').value,
		facebookBboy = document.getElementById('url-facebook').value;

	if (apodoBboy !== '' && facebookBboy !== '') {
		compeditores.push(apodoBboy);
		facebooks.push(facebookBboy);
	}

	if (compeditores[0] !== undefined && facebooks[0] !== undefined) {
		var apodoBboy = document.getElementById('apodo-bboy-1');
			apodoBboy.innerHTML = compeditores[0];
			fotoAzul.setAttribute("style", "background-image: url(http://graph.facebook.com/" + facebooks[0] + "/picture?type=large);");
	}
	if (compeditores[1] !== undefined && facebooks[1] !== undefined) {
		var apodoBboy = document.getElementById('apodo-bboy-2');
			apodoBboy.innerHTML = compeditores[1];
			fotoRojo.setAttribute("style", "background-image: url(http://graph.facebook.com/" + facebooks[1] + "/picture?type=large);");
	}
}

function votacionAzul() {
	var nombreGanador = compeditores[0],
		apodoBboy = document.getElementById('apodo-bboy').value,
		facebookBboy = document.getElementById('url-facebook').value;

	if (apodoBboy !== '' && facebookBboy !== '') {
	
		votoParaElAzul++;
		rounds++;

		if (resultadoBatalla.length === 0) {

			if (rounds === 2 && votoParaElAzul === 2) {
				fotoRojo.className = fotoRojo.className + " perdio";
				ganador.innerHTML = "Ganó " + nombreGanador;
				resultadoBatalla.push(nombreGanador);
				wins1.innerHTML += "<span class='wins azul'>Round " + rounds + "</span>";

			} else if (rounds === 3) {
				if (votoParaElAzul === 2) {
					fotoRojo.className = fotoRojo.className + " perdio";
					ganador.innerHTML = "Ganó " + nombreGanador;
					wins1.innerHTML += "<span class='wins azul'>Round " + rounds + "</span>";
					resultadoBatalla.push(nombreGanador);
				} else if (votoEmpate === 2) {
					fotoRojo.className = fotoRojo.className + " perdio";
					ganador.innerHTML = "Ganó " + nombreGanador;
					wins1.innerHTML += "<span class='wins azul'>Round " + rounds + "</span>";
					resultadoBatalla.push(nombreGanador);
				} else {
					fotoAzul.className = fotoAzul.className + " perdio";
					fotoRojo.className = fotoRojo.className + " perdio";
					
					ganador.innerHTML = "Empate";
					resultadoBatalla.push("Empate");
					wins1.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
				}
			}		
			else {
				ganador.innerHTML = "Votaste a " + nombreGanador;
				wins1.innerHTML += "<span class='wins azul'>Round " + rounds + "</span>";
			}
			
		}
	} else {
		ganador.innerHTML = "Primero inscribí a dos BBOYs";
	}

}

function votacionEmpate() {
	var apodoBboy = document.getElementById('apodo-bboy').value,
		facebookBboy = document.getElementById('url-facebook').value;

	if (apodoBboy !== '' && facebookBboy !== '') {
		votoEmpate++;
		rounds++;

		if (resultadoBatalla.length === 0) {
			if (rounds === 3 && votoEmpate === 3) {
				fotoAzul.className = fotoAzul.className + " perdio";
				fotoRojo.className = fotoRojo.className + " perdio";
				
				ganador.innerHTML = "Empate";
				resultadoBatalla.push("Empate");
				wins1.innerHTML += "<span class='wins azul'>Empate</span>";
				wins2.innerHTML += "<span class='wins rojo'>Empate</span>";

			} else if (rounds === 3) {
				if (votoParaElRojo === 1 && votoParaElAzul === 1) {
					fotoAzul.className = fotoAzul.className + " perdio";
					fotoRojo.className = fotoRojo.className + " perdio";
					
					ganador.innerHTML = "Empate";
					resultadoBatalla.push("Empate");
					wins1.innerHTML += "<span class='wins azul'>Empate</span>";
					wins2.innerHTML += "<span class='wins rojo'>Empate</span>";
				} else if (votoParaElRojo === 1) {
					fotoAzul.className = fotoAzul.className + " perdio";
					ganador.innerHTML = "Ganó  " + compeditores[1];
					resultadoBatalla.push(compeditores[1]);
					wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
				} else if (votoParaElAzul === 1) {
					fotoRojo.className = fotoRojo.className + " perdio";
					ganador.innerHTML = "Ganó " + compeditores[0];
					resultadoBatalla.push(compeditores[0]);
					wins1.innerHTML += "<span class='wins azul'>Round " + rounds + "</span>";
				}
			} else {
				ganador.innerHTML = "Votaste Empate";
				wins1.innerHTML += "<span class='wins azul'>Empate</span>";
				wins2.innerHTML += "<span class='wins rojo'>Empate</span>";
			}
		}

	} else {
		ganador.innerHTML = "Primero inscribí a dos BBOYs";
	}
}

function votacionRojo() {
	var nombreGanador = compeditores[1],
		apodoBboy = document.getElementById('apodo-bboy').value,
		facebookBboy = document.getElementById('url-facebook').value;

	if (apodoBboy !== '' && facebookBboy !== '') {
	
		votoParaElRojo++;
		rounds++;

		if (resultadoBatalla.length === 0) {
			if (rounds === 2 && votoParaElRojo === 2) {
				fotoAzul.className = fotoAzul.className + " perdio";
				ganador.innerHTML = "Ganó  " + nombreGanador;
				resultadoBatalla.push(nombreGanador);
				wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
			} else if (rounds === 3) {
				if (votoParaElRojo === 2) {
					fotoAzul.className = fotoAzul.className + " perdio";
					ganador.innerHTML = "Ganó " + nombreGanador;
					resultadoBatalla.push(nombreGanador);
					wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
				} else if (votoEmpate === 2) {
					fotoAzul.className = fotoAzul.className + " perdio";
					ganador.innerHTML = "Ganó " + nombreGanador;
					resultadoBatalla.push(nombreGanador);
					wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
				} else {
					fotoAzul.className = fotoAzul.className + " perdio";
					fotoRojo.className = fotoRojo.className + " perdio";
					
					ganador.innerHTML = "Empate";
					resultadoBatalla.push("Empate");
					wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
				}
			} else {
				ganador.innerHTML = "Votaste a " + nombreGanador;
				wins2.innerHTML += "<span class='wins rojo'>Round " + rounds + "</span>";
			}
		}
	} else {
		ganador.innerHTML = "Primero inscribí a dos BBOYs";
	}
}