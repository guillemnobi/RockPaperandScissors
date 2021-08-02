
// console.log("ejercicio prompt")
// var msg = prompt("Elige tu opción");
// alert("tu opción es" + msg);

console.log(window);
var answer = window.confirm("Save data?");
if (answer) {
    console.log("Saved")
}
else {
    console.log("Not Saved")
}