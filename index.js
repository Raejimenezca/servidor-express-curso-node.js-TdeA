const {obtenerPromedio, argv} = require('./datos.js');
const express = require('express')
const app = express()


console.log(argv);
console.log(argv.m);
console.log(argv.i);
console.log(argv.p);
if(argv._[0] == 'promedio'){
    texto = ('El promedio de ' + argv.n + ' es ' + obtenerPromedio(argv.m, argv.i, argv.p));
}
else {
    console.log(' promedio no calculado');
}

app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)