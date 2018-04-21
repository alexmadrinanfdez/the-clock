// Input characters interpreted in UTF-8
process.stdin.setEncoding('utf8');

function getTime() {
    let time = new Date();
    return "Time: " + time.getHours() + "h " + time.getMinutes() + "min "
        + time.getSeconds() + "s "  + time.getMilliseconds() + "ms";
}

let salir = false; // variable de control para cortar la ejecución fácilmente

process.stdout.write(" Introduce un tiempo de refresco (en milisegundos): ");
process.stdin.on('data',function (line) {
    if (!Number(line)){
        if (salir){
            process.exit(0);
        }
        line = 90; // Por defecto, el tiempo de refresco son 90 ms
    }
    // Actualización del reloj
    setInterval(
        function () {
            process.stdout.write(`\r ${getTime()}   `); // El reloj sobreescribe siempre la misma línea
        },
        line
    );
    salir = !salir;
    console.log("\n        THE CLOCK\n");
    }
);
