//defini una funcion para ordenar un  arreglo de cadenas acorde al ultimo caracter

function ordenarCadenaSugunUltimocaracter(cadenas) {
  if (!Array.isArray(cadenas)) {
    throw TypeError("El argumento tiene que se un arreglo");
  }

  if (!cadenas.every((e) => typeof e == "string")) {
    throw TypeError(
      "Todos los elementos del arreglo deben de ser cadena de caracteres (strings)"
    );
  }

  return cadenas.sort(
    (x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1)
  );
}

const pets = ["Dog","Cat","Dog","Cow", "Snake", "Bird", "Snake", "Mouse", "Horse","Pony", "Cow"];

try {
   let resultado =  ordenarCadenaSugunUltimocaracter(pets);
    console.log(resultado);
} catch (error) {
    console.log(`error, ${error}`)
}