const socket = require("socket.io");

const chatContainerEl = byId("roommate-chat-container");
const chatboxEl = byId("chat-box");
const chatInputEl = byId("chat-input");
const submitChatEl = byId("submit-chat-input");

// pull name from model
const userName = getName();

const updateHTML = (name, chat, sent) => {
  chatDialogEl.innerHTML += `
    <div class=" message${sent ? " sent" : ""}">
      <h4>${name}:</h4>
      <p>${chat}</p>
    </div>`;

  // Keeps chat scrolling down as new messages created/received.
  chatDialogEl.scrollTop = chatDialogEl.scrollHeight;
};

submitChatEl.addEventListener("click", () => {
  const chatInput = chatInputEl.value.trim();
  if (chatInput) {
    updateHTML(userName, chatInput, true);
    socket.emit("new-message", userName, chatInput);
    chatInputEl.value = "";
  }
});

//new-user enterring chat is
socket.on(
  "new-user",
  (arg) =>
    (chatDialogEl.innerHTML += `<p>New User ${arg}, has joined the chat ${date}</p>`)
);

// When a new message is received from the server(another user)
socket.on("new-message", (args) => updateHTML(args[0], args[1]));
