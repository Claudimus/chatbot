// Chatbot JS file

// Reference to the chat are and user input field.

const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input-box");
const sendButton = document.getElementById("send-button");

//Add a click event listener. Adds an event listener to the "Send" button. When the button is clicked, the "sendMessage" function is called. The 'sendMessage' in the parenthesis is called a callback function.
sendButton.addEventListener("click", sendMessage);

// sendMessage Function: When the user clicks "Send," this function gets what the user typed, shows it in the chat, generates a simple bot response, shows that in the chat, and then clears the input field for the next message.

// Define the function that gets called ehen the "Send" button is clicked.
// Get what the user typed in the input field
// Generate a simpele response based on what the user said.
// Show the user's message in the chat
// Show the bot's response in the chat
// Clear the input field for the next message

function sendMessage() {
  const userMessage = userInput.value;
  const botResponse = generateResponse(userMessage);
  displayMessage("You", userMessage);
  displayMessage("Bot", botResponse);
  userInput.value = "";
}

// generateResponse Function: This function makes a simple response from the bot, including what the user said.

// Function to create a simple response from the bot
// Return a response that includes what the user said

function generateResponse(userMessage) {
  return `You said: ${userMessage}`;
}

// displayMessage Function: This function creates a new message, sets what it says, and adds it to the chat.
// Function to display a message in the chat
// Create a message element
// Set the text content of the message element
// Add the message element to the chat area

function displayMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${sender}: ${message}`;
  chatContainer.appendChild(messageElement);
}
