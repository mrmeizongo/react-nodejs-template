"use strict";

// Dependencies
//------------------------------------------------------------
const express = require("express");
const path = require("path");
//------------------------------------------------------------

// Constants
//------------------------------------------------------------
const PORT = process.env.PORT || 3000;
const app = express();
//------------------------------------------------------------

// Middlewares
//------------------------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
//------------------------------------------------------------

// Routes
//------------------------------------------------------------
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
//------------------------------------------------------------

// Server
//------------------------------------------------------------
app.listen(PORT, (error) => {
	if (error) return console.log(`There was an error: ${error}`);
	console.log(
		`Server started successfully`,
		`\nOn local machine: http://localhost:${PORT}`,
		`\nOn other devices(same network): http://local-ip-address:${PORT}`
	);
});

//------------------------------------------------------------
