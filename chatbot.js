// Chatbot JS file

// Reference to the chat are and user input field from html. Declared and references to the DOM

const chatContainer = document.getElementById("chatcontainer");
const userInput = document.getElementById("textbox");
const sendBtn = document.getElementById("sendBtn");

let user = { message: "" };

// Array with message/response objects

const arrayOfPossibleMessages = [
  { message: "how are you?", response: "i'm great" },
  { message: "hi", response: "hi !" },
  { message: "what are you doing?", response: "not much. u ?" },
  { message: "whats new?", response: "nothin. u ?" },
  { message: "yo!", response: "sup?" },
  { message: "whats good ?", response: "i cant call it. " },
  { message: "whats up ?", response: "chillin " },
  { message: "whats up ", response: "chillin " },
  { message: "what up ", response: "chillin " },
  { message: "what up? ", response: "chillin " },
  { message: "what up ?", response: "chillin " },
  { message: "sup? ", response: "good.u ? " },
  { message: "what is your name?", response: "I'm Claude 😁" },
  { message: "hi", response: "hi !" },
  { message: "what are you doing?", response: "not much. u ?" },
  { message: "whats new?", response: "nothin. u ?" },
  { message: "yo!", response: "sup?" },
  { message: "whats good ?", response: "i cant call it. " },
  { message: "whats up ?", response: "chillin " },
  { message: "whats up ", response: "chillin " },
  { message: "what up ", response: "chillin " },
  { message: "what up? ", response: "chillin " },
  { message: "what up ?", response: "chillin " },
  { message: "sup? ", response: "good.u ? " },
];

// Initial greeting

setTimeout(function () {
  chatbotSendMessage("How are you ?");
}, 6000);

//  Function that creates the chatbot div. The "MESSAGE TEXT" is a PERAMETER and "How are you?" is passed through as an ARGUMENT. "
//  Add CSS to messageElement
//  Set the innerHTML of the messageElement using TEMPLATE LITERAL (IS THERE A BETTER WAT TO WRITE THIS ?)
//  use the animate() method to create a simple fade-in effect for the messageElement
//  Get reference to HTML element w/ id "chatContainer" and append messageElement to it (append to DOM)

// THIS IS WHAT THE BOT SAYS

function chatbotSendMessage(messageText) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-left");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML = `<span>Chatbot:</span> <span>${messageText} </span>`;

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.1 }, { opacity: 1 }],
    { duration: 1000 }
  );
  chatContainer.appendChild(messageElement);
}

//THIS IS WHAT THE USER SAYS

function sendMessage(messageText) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-right");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML = `<span>You:</span> <span>${messageText} </span>`;

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.1 }, { opacity: 1 }],
    { duration: 500 }
  );
  chatContainer.appendChild(messageElement);
}

// THIS IS HOW THE BUTTON WORKS
//Add a click event listener. Adds an event listener to the "Send"(sendBtn) button. When the button is clicked, the "sendMessage" function is called. The 'sendMessage' in the parenthesis is called a callback function.
//

sendBtn.addEventListener("click", function (e) {
  if (textbox.value == "") {
    alert("Please type in a mesage.");
  } else {
    ///// HERE IS ====>>>>> messageText <<<<<========

    let messageText = textbox.value; // Takes what the user entered (textbox.value) and puts it in a variable
    user.message = messageText; // User message is stored in the "user" OBJECT and specificaly the the "message" PROPERTY
    sendMessage(messageText); // This function creates and displays the message that the user inputs. sendMessage function is CALLED with messageText as an ARGUMENT
    textbox.value = ""; // This clears the user's message input field

    processMessage(); // Call the processMessage function
  }
});

// Define a function named processMessage
// Filter arrayOfPossibleMessages based on whether each element's message includes the user's message in a case-insensitive manner
// Access the response property of the first element in the filtered result array
// Set a timeout function that will execute after 1000 milliseconds (1 second)
// Call the chatbotSendMessage function with the obtained response as an argument

// Putting it all together, the arrow function (val) => val.message.includes(user.message.toLowerCase()) can be read as "for each element val in the array, check if the message property of that element includes the lowercase version of user.message."

//***** val represents the things in the array. It could be named item,thing,stuff, etc.
// Uses filter METHOD on array to find elements that match the user's message. // Result is NEW array contains elements that match the user's input)
// Val represents things in the array. Checks lowercase version of user messages in the array.
// Result is the NEW array that contains everything that was filtered out of arrayOfPossibleMessages.

function processMessage() {
  let result = arrayOfPossibleMessages.filter((val) =>
    val.message.includes(user.message.toLowerCase())
  );

  // Retreves the RESPONSE property for the matching MESSAGE. If it matches the chatbot will respond
  let response = result[0].response;

  //Sets a timeout to send the chatbot's response after 1 second
  setTimeout(function () {
    chatbotSendMessage(response);
  }, 1000);
}
