// Chatbot JS file

// Reference to the chat are and user input field from html.

const chatContainer = document.getElementById("chatcontainer");
const userInput = document.getElementById("textbox");
const sendBtn = document.getElementById("sendBtn");

let user = { message: "" };

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
];

//Add a click event listener. Adds an event listener to the "Send" button. When the button is clicked, the "sendMessage" function is called. The 'sendMessage' in the parenthesis is called a callback function.

setTimeout(function () {
  chatbotSendMessage("Hi ! Whats your name ?");
}, 6000);


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

sendBtn.addEventListener("click", function (e) {
  if (textbox.value == "") {
    alert("Please type in a mesage.");
  } else {
    let messageText = textbox.value;
    user.message = messageText;
    sendMessage(messageText);
    textbox.value = "";

    processMessage();
  }
});

// Define a function named processMessage
// Create a new variable named result
// Filter arrayOfPossibleMessages based on whether each element's message includes the user's message in a case-insensitive manner
// Access the response property of the first element in the filtered result array
// Set a timeout function that will execute after 1000 milliseconds (1 second)
// Call the chatbotSendMessage function with the obtained response as an argument

// Putting it all together, the arrow function (val) => val.message.includes(user.message.toLowerCase()) can be read as "for each element val in the array, check if the message property of that element includes the lowercase version of user.message."

//***** val represents the things in the array. It could be named item,thing,stuff, etc.

//

function processMessage() {
  let result = arrayOfPossibleMessages.filter((val) =>
    val.message.includes(user.message.toLowerCase())
  );

  let response = result[0].response;

  setTimeout(function () {
    chatbotSendMessage(response);
  }, 1000);
}
