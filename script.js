// --- REGISTER PAGE HANDLER ---
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.onsubmit = function(e) {
    e.preventDefault();

    let uname = document.getElementById("uname1").value;
    let email = document.getElementById("email").value;
    let pw1 = document.getElementById("upswd1").value;
    let pw2 = document.getElementById("upswd2").value;

    if (pw1 !== pw2) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Save in localStorage
    localStorage.setItem("username", uname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pw1);

    alert("✅ Registration Successful! Please login.");
    window.location.href = "login.html";
  };
}

// --- LOGIN PAGE HANDLER ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();

    let uname = document.getElementById("uname").value;
    let pw = document.getElementById("upswd").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (uname === storedUser && pw === storedPass) {
      alert("✅ Login Successful!");
      window.location.href = "data.html";  // go to data page
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };
}
