// getting name from model
const getName = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#email-login").value.trim();

  if (username) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: { "Content-Type": "application/json" },
    });
  }
};
