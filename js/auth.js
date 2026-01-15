console.log("auth.js loaded");

/* ======================
   LOGIN (FRONTEND ONLY)
====================== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // ✅ FAKE LOGIN SUCCESS
    localStorage.clear();
    localStorage.setItem("token", "logged_in");
    localStorage.setItem("userEmail", email);

    // ✅ REDIRECT
    window.location.replace("index.html");
  });
}

/* ======================
   SIGNUP (DUMMY)
====================== */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Account created successfully. Please login.");
    window.location.href = "login.html";
  });
}
