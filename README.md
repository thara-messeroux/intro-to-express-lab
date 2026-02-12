# Intro to Express Lab

## Purpose
This lab teaches the basics of building a small web server using **Express** (a Node.js framework).

A web server is a program that listens for requests (URLs) and sends responses back (text or JSON).
Express helps us write those routes cleanly and quickly.

## Why this is important
Express is one of the most common tools used to build backend APIs.
Learning this helps you understand how:
- websites talk to servers
- servers read input from the URL
- servers respond with data

## What I practiced / learned
- How to start an Express server and listen on a port (`3000`)
- How to build routes using:
  - **Route parameters** (example: `/greetings/:username`)
  - **Query parameters** (example: `/hello?name=Thara`)
- How to validate user input (ex: handling “not a number”)
- How to return data as JSON for API-style routes

## How to Run This Project
1. Install dependencies:
```bash
   npm install
```

2. Start the server:

```bash
   node server.js
```

3. Open your browser and visit:
```bash
http://localhost:3000
```
---

## Route 1: Greet the User

**Route:**


**What it does**  
Takes a name from the URL and responds with a greeting.

**Why this matters**  
This demonstrates **route parameters** using `req.params`.

Route parameters allow the server to read dynamic values directly from the URL path.

**Examples**
- `/greetings/Thara` → `Hello there, Thara!`
- `/greetings/Alex` → `Hello there, Alex!`

---

## Route 2: Roll the Dice

**Route:**

**What it does**  
Takes a number from the URL and returns a random whole number between 0 and that number.

If the value is not a number, it responds with an error message.

**Why this matters**  
This demonstrates:
- Converting text to a number
- Validating user input
- Preventing server errors

It also shows how route parameters can influence program logic.

**Examples**
- `/roll/6` → `You rolled a 4.`
- `/roll/20` → `You rolled a 17.`
- `/roll/potato` → `You must specify a number.`


---

## Route 3: Collectibles

**Route:**


**What it does (in plain English)**  
Takes a number from the URL and returns an item from a predefined list of collectibles.

If the index does not exist, it returns a message saying the item is not in stock.

**Why this matters**  
This demonstrates:
- Accessing data from an array
- Validating indexes
- Handling out-of-range input safely

It simulates how a real online store might look up products by ID.

**Examples**
- `/collectibles/0` → shiny ball
- `/collectibles/1` → autographed picture of a dog
- `/collectibles/99` → This item is not yet in stock. Check back soon!

---

## Route 4: Hello (Query Parameters)

**Route:**


**What it does**  
Reads an optional name from the query string and responds with a greeting.

If no name is provided, it responds with a generic greeting.

**Why this matters**  
This demonstrates how to use **query parameters** (`req.query`).

Query parameters allow optional data to be passed into a route without changing the URL structure.

**Examples**
- `/hello?name=Thara` → `Hello, Thara!`
- `/hello` → `Hello there!`

---

## Route 5: Shoes (Filtering with Query Parameters)

**Route:**


**What it does**  
Returns a list of shoes.

The list can be filtered using optional query parameters:
- `min-price`
- `max-price`
- `type`

If no filters are provided, all shoes are returned.

**Why this matters**  
This simulates how real APIs filter data.

It demonstrates:
- Reading multiple query parameters
- Conditional filtering
- Returning structured data as JSON

**Examples**
- `/shoes` → returns all shoes
- `/shoes?type=sneaker` → returns only sneakers
- `/shoes?min-price=50` → returns shoes costing 50 or more
- `/shoes?min-price=50&max-price=200` → returns shoes within that price range

---

## Key Takeaways from This Lab

- Express allows you to map URLs to specific logic.
- Route parameters (`req.params`) come from the URL path.
- Query parameters (`req.query`) come after `?` in the URL.
- Converting and validating user input prevents unexpected behavior.
- Backend routes often return JSON instead of HTML.
- Small, focused routes make servers easier to understand and maintain.
