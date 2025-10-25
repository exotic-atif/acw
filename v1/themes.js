(function() {
  // Load Font Awesome 7 if not already loaded
  if (!document.getElementById("fa7-cdn")) {
    const fa7 = document.createElement("link");
    fa7.id = "fa7-cdn";
    fa7.rel = "stylesheet";
    fa7.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    document.head.appendChild(fa7);
  }

  // Check localStorage for dark mode
  const darkModeLS = localStorage.getItem("acw-darkMode") === "true";
  if (darkModeLS) document.body.classList.add("acw-dark-mode");

  // Dark mode styles
  const style = document.createElement("style");
  style.textContent = `
    body.acw-dark-mode {
      background-color: #000012;
      color: #f5f5f5;
      transition: background 0.5s, color 0.5s;
    }
    body.acw-dark-mode a { color: #bb86fc; }
    body.acw-dark-mode button { filter: brightness(1.1); }

    /* Dimmed input/textarea in dark mode */
    body.acw-dark-mode input[type=text],
    body.acw-dark-mode input[type=password],
    body.acw-dark-mode textarea,
    body.acw-dark-mode select {
      background-color: #1f1f31;
      color: #f5f5f5;
      border-color: #333;
    }
    body.acw-dark-mode input::placeholder,
    body.acw-dark-mode textarea::placeholder {
      color: #aaa;
    }
  `;
  document.head.appendChild(style);

  // Floating dark mode button
  const btn = document.createElement("button");
  btn.id = "acw-darkModeBtn";
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "all 0.5s ease",
    zIndex: "9999"
  });

  // Set initial button style & icon
  const setBtnStyle = () => {
    if (document.body.classList.contains("acw-dark-mode")) {
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#000";
      btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      btn.style.backgroundColor = "#000012";
      btn.style.color = "#fff";
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  };
  setBtnStyle();

  // Toggle dark mode with animation
  btn.addEventListener("click", () => {
    document.body.classList.toggle("acw-dark-mode");
    localStorage.setItem("acw-darkMode", document.body.classList.contains("acw-dark-mode"));

    // Animate rotation
    btn.style.transform = "rotate(90deg)";
    setTimeout(() => {
      btn.style.transform = "rotate(0deg)";
    }, 400);

    setBtnStyle();
  });

  document.body.appendChild(btn);
})();
