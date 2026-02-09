// Import Express
const express = require("express");

// Create the Express app
const app = express();

// Tell the server which port to listen on
const PORT = 3000;

// Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  // Get the username from the URL
  const username = req.params.username;

  // Send a friendly greeting
  res.send(`Hello there, ${username}!`);
});

// http://localhost:3000/greetings/Thara


// Start listening for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

