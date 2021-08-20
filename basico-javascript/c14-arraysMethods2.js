/*
Agregar al final= .push()
Eliminar al final= .pop()

Agregar al inicio= .unshift()
Eliminar al inicio= .shift() */

// Arrays iterations and methods
let articles = [
    { item: "T-Shirt", price: 34},
    { item: "Skirt", price: 442},
    { item: "Jean", price: 547},
    { item: "Jacket", price: 222}
];

// Add to end
articles.push({ item: "Gloves", price: 506})
// Remove first
articles.shift()


articles.forEach((article) => { console.log(`Art: ${article.item} = Price: ${article.price} `) })
