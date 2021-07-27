var arreglo = [];
var colores = ['red','black','yellow','pink','white'];
arreglo.push('cooc');
arreglo.push('cocoquito');
arreglo.push('ugly');
arreglo.push('ugly2021');
arreglo.push('pompis');

arreglo.shift();
arreglo.pop();
for(var i =0;i<colores.length;i++){
  document.getElementById('demo').innerHTML += colores[i]+'<br>';
}
for(var i = 0; i<arreglo.length;i++){
  document.getElementById('demog').innerHTML += arreglo[i]+'<br>';
}
var nros = [10,20,30,40,50,60];
for(var i = 0; i<nros.length;i++){
  document.getElementById('opo').innerHTML += nros[i]+'->';
  
}

for(col of colores){
  console.log(col);
}
