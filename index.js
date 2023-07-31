// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define routes and their descriptions
const routes = [
    { path: '/', description: 'Home page -  direct you to the home.html page' },
    { path: '/about', description: 'About page - direct you to the about.html page' },
    { path: '/contact', description: 'Contact page - direct you to the contact.html page' },
    { path: '/product', description: 'Product page - direct you to the product.html page' },
    { path: '/products', description: 'Products page - direct you to the products.html page' },
  ];

// Route to display the descriptions of endpoints
app.get('/', (req, res) => {
  let response = '<h1>Web Server:</h1><ul>';
  routes.forEach((route) => {
    response += `<li><a href="${route.path}">${route.path}</a>: ${route.description}</li>`;
  });
  response += '</ul>';
  res.send(response);
});

// Serve the static HTML files for each endpoint
routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(`${__dirname}/public${route.path}.html`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
