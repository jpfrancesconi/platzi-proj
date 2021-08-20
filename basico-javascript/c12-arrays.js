// Arrays iterations and methods
let articles = [
    { item: "T-Shirt", price: 34},
    { item: "Skirt", price: 442},
    { item: "Jean", price: 547},
    { item: "Jacket", price: 222}
];

// Filter method test
filterArticles = articles.filter((article) => { return article.price > 100 })
filterArticles.map((article) => { console.log(`art: ${article.item} - $${article.price}`) })

// Map method test - NOTE: this method returns a new array with all mapped elements.
articles.map((article) => { console.log(`art: ${article.item} - $${article.price}`) })
let articlesPrices = articles.map((article) => { return article.price })
console.log(articlesPrices)

