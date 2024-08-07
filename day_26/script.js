document.addEventListener("DOMContentLoaded", () => {
  const ws = new WebSocket("ws://localhost:8080");

  ws.onopen = () => {
    console.log("Connected to the WebSocket server");
  };

  ws.onmessage = (event) => {
    console.log(`Received: ${event.data}`);
    const messagesDiv = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.textContent = event.data;
    messagesDiv.appendChild(messageElement);
  };

  ws.onclose = () => {
    console.log("Disconnected from the WebSocket server");
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  const messageForm = document.getElementById("messageForm");
  const messageInput = document.getElementById("messageInput");

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (messageInput.value) {
      ws.send(messageInput.value);
      messageInput.value = "";
    }
  });
});
