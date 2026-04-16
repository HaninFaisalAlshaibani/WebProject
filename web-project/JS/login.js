document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginErrorMessage = document.getElementById("loginErrorMessage");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const usernameError = username.closest(".form-group").querySelector(".error-message");
    const passwordError = password.closest(".form-group").querySelector(".error-message");

    usernameError.textContent = "";
    passwordError.textContent = "";
    loginErrorMessage.style.display = "none";
    loginErrorMessage.textContent = "";

    if (username.value.trim() === "") {
      usernameError.textContent = "يرجى إدخال اسم المستخدم";
      isValid = false;
    }

    if (password.value.trim() === "") {
      passwordError.textContent = "يرجى إدخال كلمة المرور";
      isValid = false;
    }

    if (!isValid) {
      loginErrorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
      loginErrorMessage.style.display = "block";
      return;
    }

    window.location.href = "dashboard.html";
  });
});