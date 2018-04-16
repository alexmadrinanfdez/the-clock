function getTime() {
    let time = new Date();
    return "Time: " + time.getHours() + "h " + time.getMinutes() + "min "
        + time.getSeconds() + "s "  + time.getMilliseconds() + "ms";
}
// Actualización del reloj
setInterval(
    function () {
        process.stdout.write(`\r ${getTime()}`)// El reloj sobreescribe siempre la misma línea
    },
    90
);

console.log("\n        THE CLOCK\n")