console.log("auth.js loaded");

/* ======================
   PASSWORD VALIDATION
====================== */
function isStrongPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};:'",.<>\/\\]).{8,}$/;
  return regex.test(password);
}

/* ======================
   LOGIN
====================== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "index.html";

    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  });
}

/* ======================
   SIGNUP
====================== */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword =
      document.getElementById("confirmPassword")?.value.trim();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // ✅ CONFIRM PASSWORD CHECK
    if (confirmPassword !== undefined && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ STRONG PASSWORD CHECK
    if (!isStrongPassword(password)) {
      alert(
        "Password must be at least 8 characters and include:\n" +
        "• One uppercase letter\n" +
        "• One lowercase letter\n" +
        "• One number\n" +
        "• One special character"
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Signup failed");
        return;
      }

      alert("Account created successfully. Please login.");
      window.location.href = "login.html";

    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  });
}
