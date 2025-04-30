// import express from 'express';
// import { makeRequest } from './request.js';

// const app = express();

// // Middleware to add CORS headers (to allow test.html to make requests)
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Allow Live Server origin
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// // Handle preflight OPTIONS requests for /api/look-around
// app.options('/api/look-around', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.sendStatus(200);
// });

// // Add a default route for the root path to display the API response
// app.get('/', async (req, res) => {
//   try {
//     const data = await makeRequest();
//     res.json(data); // Send the API response as JSON
//   } catch (error) {
//     console.error('Error in / route:', error.message);
//     res.status(500).json({ error: 'Failed to fetch API data', details: error.message });
//   }
// });

// // Optional: Keep the /api/look-around route for test.html compatibility
// app.get('/api/look-around', async (req, res) => {
//   try {
//     const data = await makeRequest();
//     res.json(data); // Send the API response as JSON
//   } catch (error) {
//     console.error('Error in /api/look-around route:', error.message);
//     res.status(500).json({ error: 'Failed to fetch API data', details: error.message });
//   }
// });

// // Catch unhandled promise rejections to prevent server crashes
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// // Start the server with error handling
// const server = app.listen(3000, () => {
//   console.log('Proxy server running on http://localhost:3000');
// }).on('error', (err) => {
//   console.error('Server startup error:', err.message);
//   if (err.code === 'EADDRINUSE') {
//     console.error('Port 3000 is already in use. Try a different port.');
//   }
//   process.exit(1);
// });

import express from 'express';
import { makeRequest } from './request.js';

const app = express();

// Middleware to add CORS headers (to allow test.html to make requests)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Allow Live Server origin
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, User-Agent, Accept, Accept-Encoding, Connection, Origin, Content-Type, Authorization'); // Include all headers
  next();
});

// Handle preflight OPTIONS requests for /api/look-around
app.options('/api/look-around', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, User-Agent, Accept, Accept-Encoding, Connection, Origin, Content-Type, Authorization'); // Include all headers
  res.sendStatus(200);
});

// Add a default route for the root path to display the API response
app.get('/', async (req, res) => {
  try {
    const data = await makeRequest();
    res.json(data); // Send the API response as JSON
  } catch (error) {
    console.error('Error in / route:', error.message);
    res.status(500).json({ error: 'Failed to fetch API data', details: error.message });
  }
});

// Optional: Keep the /api/look-around route for test.html compatibility
app.get('/api/look-around', async (req, res) => {
  try {
    const data = await makeRequest();
    res.json(data); // Send the API response as JSON
  } catch (error) {
    console.error('Error in /api/look-around route:', error.message);
    res.status(500).json({ error: 'Failed to fetch API data', details: error.message });
  }
});

// Catch unhandled promise rejections to prevent server crashes
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Start the server with error handling
const server = app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
}).on('error', (err) => {
  console.error('Server startup error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error('Port 3000 is already in use. Try a different port.');
  }
  process.exit(1);
});