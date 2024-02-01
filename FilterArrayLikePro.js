const pets = ["Dog","Cat","Dog","Cow", "Snake", "Bird", "Snake", "Mouse", "Horse","Pony", "Cow"];
console.log("Original array",pets, "size", pets.length)

// aplicamos metodo de filtrado
const uniqueElements = Array.from(new Set(pets));
console.log("Filtered Array",uniqueElements, "new size", uniqueElements.length);
