// Import Express
const express = require("express");

// Create the Express app
const app = express();

// Tell the server which port to listen on
const PORT = 3000;

// Data for collectibles
const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

// Data for shoes
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomes", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



// 1. Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  // Get the username from the URL
  const username = req.params.username;

  // Send a friendly greeting
  res.send(`Hello there, ${username}!`);
});

// http://localhost:3000/greetings/Thara


// 2. Rolling the Dice
app.get("/roll/:number", (req, res) => {
    const max = Number(req.params.number);

    // Check if the parameter is NOT a number
    if (isNaN(max)) {
        res.send("You must specify a number.");
        return;
    }

    // Generate a random whole number between 0 and max
    const roll = Math.floor(Math.random() * (max + 1));

    res.send(`You rolled a ${roll}.`);
});

// http://localhost:3000/roll/6
// http://localhost:3000/roll/20
// http://localhost:3000/roll/potato


// 3. I Want THAT One!
app.get("/collectibles/:index", (req, res) => {
    const index = Number(req.params.index);

    // Validate that index is a real number
    if (isNaN(index)) {
        res.send("This item is not yet in stock. Check back soon!");
        return;
    }

    const item = collectibles[index];

    // Validate that the index exists in the array
    if (!item) {
        res.send("This item is not yet in stock. Check back soon!");
        return;
    }

    res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);
});


// http://localhost:3000/collectibles/0
// http://localhost:3000/collectibles/1
// http://localhost:3000/collectibles/5

// 4️. Hello with Query Parameters
app.get("/hello", (req, res) => {
    const name = req.query.name;

    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.send("Hello there!");
    }
});

// http://localhost:3000/hello?name=Thara
// http://localhost:3000/hello


// 5️. Shoes filter route
app.get("/shoes", (req, res) => {
    let filteredShoes = shoes;

    const minPrice = Number(req.query["min-price"]);
    const maxPrice = Number(req.query["max-price"]);
    const type = req.query.type ? req.query.type.toLowerCase() : null;


    // Filter by minimum price
    if (!isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(
            (shoe) => shoe.price >= minPrice
        );
    }

    // Filter by maximum price
    if (!isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(
            (shoe) => shoe.price <= maxPrice
        );
    }

    // Filter by type
    if (type) {
        filteredShoes = filteredShoes.filter(
            (shoe) => shoe.type === type
        );
    }

    res.json(filteredShoes);
});

// http://localhost:3000/shoes
// http://localhost:3000/shoes?type=sneaker
// http://localhost:3000/shoes?min-price=100
// http://localhost:3000/shoes?min-price=100&max-price=200


// Start listening for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

