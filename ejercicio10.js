const palabra = "MARIONETA";
const letras = {};

for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    console.log(palabra[i]);

    if (letras.hasOwnProperty(letra)) {
        letras[letra] = letras[letra]+1;

    } else {
        letras[letra] = 1;
    }
}
console.log(letras);
console.table(letras);