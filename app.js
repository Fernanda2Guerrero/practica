const express = require("express");
const app = express();
const port = 8080;

app.listen(port, function () {
	console.log("Running port ", port);
	

	console.log("Escribe una linea que imprima tu nombre abajo de esta.");
	console.log("Luis Felipe Cabrera Morales");
	console.log("Lucio Ramirez");
	console.log("Daniel Bueno");
	console.log("Janeth Araceli López Segundo");
})
