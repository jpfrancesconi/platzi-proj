/* La diferencia entre find y filter:
El método find () devuelve el primer valor que coincide de la colección.
Una vez que coincida con el valor en los resultados, no verificará los valores
restantes en la colección de matriz.
El método filter () devuelve los valores coincidentes en una matriz de la colección.
Verificará todos los valores de la colección y devolverá los valores coincidentes
en una matriz.*/

/*
find() : Devuelve el primer elemento del array que cumpla con la condición dada
forEach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos. Retorna TRUE or FALSE
filter() : Devuelve todos los elementos del array que cumplan con la condición dada*/

// Arrays iterations and methods
let articles = [
    { item: "T-Shirt", price: 34},
    { item: "Skirt", price: 442},
    { item: "Jean", price: 547},
    { item: "Jacket", price: 222},
    { item: "Jacket black", price: 2232},
    { item: "Jacket yellow", price: 4322}
];

articles.forEach((article) => { console.log(`Art: ${article.item} = Price: ${article.price} `) })

let highlightedArt = articles.find((article) => { return article.price < 100 })

console.log(`Highlighted article: ${highlightedArt.item}`)

