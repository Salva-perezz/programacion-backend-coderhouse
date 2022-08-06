const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");

async function submitHandler(e) {
  e.preventDefault();
  console.log(usernameInput.value);
  try {
    await fetch(`/api/login?username=${usernameInput.value}`);

    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
}

loginForm.addEventListener("submit", submitHandler);
