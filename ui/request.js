// const fetch = require('node-fetch');
import fetch from "node-fetch";

const url = 'https://workwithus.lucioai.com/look-around';

const headers = {
  'Cache-Control': 'no-cache',
  'User-Agent': 'mr.robot',
  'Accept': '*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hhc2h3YXRoIEJDIiwiZW1haWwiOiJzaGFzaHdhdGhiY0BnbWFpbC5jb20iLCJkYXRlIjoiMjAyNS0wNC0yOSAwNzozOToxNSJ9.W8TPgPDmqNBNmyfZ7yQDho1zT1SZ1yqGBid-wwMJGds',
  'Origin': 'https://lucioai.com'
};

export async function makeRequest() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // console.log('Response:', data);
  } catch (error) {
    // console.error('Error:', error.message);
  }
}

makeRequest();