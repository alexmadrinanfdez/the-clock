// Input characters interpreted in UTF-8
process.stdin.setEncoding('utf8');

function getTime() {
    let time = new Date();
    return "Time: " + time.getHours() + "h " + time.getMinutes() + "min "
        + time.getSeconds() + "s "  + time.getMilliseconds() + "ms";
}

process.stdout.write(" Introduce un tiempo de refresco (en milisegundos): ");
process.stdin.on('data',function (line) {
    if (!Number(line)){
        throw new Error("Introduce un número!!")
    }
    // Actualización del reloj
    setInterval(
        function () {
            process.stdout.write(`\r ${getTime()}   `); // El reloj sobreescribe siempre la misma línea
        },
        line
    );
    console.log("\n        THE CLOCK\n");
    }
);
