const chatContainerEl = byId("chat-container");
const chatDialogEl = byId("chat-dialog");
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

// emit the new-message event to be broadcast to other users by the server
submitChatEl.addEventListener("click", () => {
  const chatInput = chatInputEl.value.trim();
  if (chatInput) {
    updateHTML(userName, chatInput, true);
    socket.emit("new-message", userName, chatInput);
    chatInputEl.value = "";
  }
});

// When a new-user event is broadcast to the frontend(here) by the server
socket.on(
  "new-user",
  (arg) =>
    (chatDialogEl.innerHTML += `<p>New User ${arg}, has joined the chat!</p>`)
);

// When a new message is received from the server(another user)
socket.on("new-message", (args) => updateHTML(args[0], args[1]));
