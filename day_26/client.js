const WebSocket = require("ws");

const url = "ws://localhost:8080";
const connection = new WebSocket(url);

connection.onopen = () => {
  console.log("Connected to the server");
  // Send a test message
  connection.send("Hello, Server!");
};

connection.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};

connection.onclose = () => {
  console.log("Disconnected from the server");
};

connection.onerror = (error) => {
  console.error("WebSocket error:", error);
};
