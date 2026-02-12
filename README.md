# Intro to Express Lab

## Purpose (in plain English)
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
