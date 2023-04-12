const cubo6 = {
  caras: 6,
  colores: 6,
  filas: 3,
  columnas: 3,
  nombre: "rubik"
};

console.log(cubo6.nombre + " tiene "+ cubo6.colores+" colores");

const auto = {
   ruedas: 4,
   color: "red",
   usable: true,
   armas: [
      "pistola"
      "minigun"
      "misiles"
   ]
   conductor: {
      nombre: "Manuel",
      edad: 81,
   }


}

console.log("Mis armas son: ")
auto.armas.forEach(element =>{
   console.log(element)
}
  
  )
