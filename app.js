const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
    res.sendFile(__dirname + '/public/sitemap.xml');
});

// Serve robots.txt
app.get('/robots.txt', (req, res) => {
    res.sendFile(__dirname + '/public/robots.txt');
});

/*
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js!</h1>');
});*/

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});