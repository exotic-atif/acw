(function() {
  // Find the ACW script tag
  const scriptTag = document.currentScript || document.getElementById("acwScrpt");
  if (!scriptTag) return;

  const navbarTitle = scriptTag.getAttribute("data-acw-navbar");
  const darkMode = scriptTag.getAttribute("data-acw-darkModeBtn") === "true";
  const coolPage = scriptTag.getAttribute("data-acw-coolPage") === "true";

  // Load Font Awesome 6.7 if not loaded
  if (!document.getElementById("fa7-cdn")) {
    const fa7 = document.createElement("link");
    fa7.id = "fa7-cdn";
    fa7.rel = "stylesheet";
    fa7.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    document.head.appendChild(fa7);
  }

  // -------------------------------
  // coolPage styles
  // -------------------------------
  if (coolPage && !document.getElementById("acw-coolpage-style")) {
    const style = document.createElement("style");
    style.id = "acw-coolpage-style";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

      body, html { font-family: 'Outfit', sans-serif; margin:10px; line-height:1.6; text-align:justify; letter-spacing:0.5px; transition: all 0.3s ease; }
      h1,h2,h3,h4,h5,h6{ font-family:'Outfit',sans-serif; line-height:1.3; margin:1.5em 0 0.5em 0; font-weight:500; }
      p{ margin-bottom:1em; font-weight:300; }
      a{ text-decoration:none; transition: all 0.3s ease; position:relative; padding-left:18px; color:#007BFF; text-decoration:underline; }
      a::before{ content:"\\f0c1"; font-family:"Font Awesome 6 Free"; font-weight:900; position:absolute; left:0; top:50%; transform:translateY(-50%); font-size:0.8em; color:inherit; }
      a:hover{text-decoration:underline;}
      ul,ol{ margin-left:20px; margin-bottom:1em;}
      img{ max-width:100%; height:auto; display:block; margin:0.5em 0;}
      button,input[type=submit],input[type=reset],input[type=button]{ font-family:'Outfit',sans-serif; font-size:1em; padding:5px 10px; margin-bottom:0.8em; border-radius:5px; border:none; cursor:pointer; transition: all 0.3s ease; background-color:#007BFF; color:#fff;}
      button:hover,input[type=submit]:hover,input[type=reset]:hover,input[type=button]:hover{ background-color:#0056b3; }
      input[type=text], input[type=password], input[type=email], input[type=number], input[type=url], input[type=tel], input[type=search], textarea, select, input[type=file]{ font-family:'Outfit',sans-serif; font-size:1em; padding:8px 12px; margin-bottom:0.8em; border-radius:6px; border:1px solid #ccc; outline:none; transition: all 0.3s ease;}
      input:focus, textarea:focus, select:focus, input[type=file]:focus{ border-color:#4b6cb7; box-shadow:0 0 5px rgba(75,108,183,0.5);}
      input[type=radio], input[type=checkbox]{ accent-color:#007BFF; margin-right:6px;}
      input[type=range]{ accent-color:#007BFF; width:100%;}
      textarea{ resize:vertical; min-height:80px;}
      fieldset{ border:1px solid #ccc; padding:1em; border-radius:6px; margin-bottom:1em;}
      legend{ font-weight:500; }
      html{ scroll-behavior: smooth; }
      body.coolPage-override{ margin-left:initial; margin-right:initial; text-align:initial; font-family:initial; }
    `;
    document.head.appendChild(style);
  }

  // -------------------------------
  // Dark Mode Button
  // -------------------------------
  if (darkMode) {
    window.addEventListener("DOMContentLoaded", () => {
      if (document.getElementById("acw-darkModeBtn")) return;

      // Load from localStorage
      const darkModeLS = localStorage.getItem("acw-darkMode") === "true";
      if (darkModeLS) document.body.classList.add("acw-dark-mode");

      // Dark mode styles
      const style = document.createElement("style");
      style.textContent = `
        body.acw-dark-mode { background-color:#000012; color:#f5f5f5; transition: background 0.5s, color 0.5s; }
        body.acw-dark-mode a { color:#bb86fc; }
        body.acw-dark-mode button { filter: brightness(1.1); }
        body.acw-dark-mode input, body.acw-dark-mode textarea, body.acw-dark-mode select { background-color:#1f1f31; color:#f5f5f5; border-color:#333;}
        body.acw-dark-mode input::placeholder, body.acw-dark-mode textarea::placeholder { color:#aaa;}
      `;
      document.head.appendChild(style);

      const btn = document.createElement("button");
      btn.id = "acw-darkModeBtn";
      Object.assign(btn.style, {
        position:"fixed", bottom:"20px", right:"20px", width:"56px", height:"56px",
        borderRadius:"50%", border:"none", cursor:"pointer", fontSize:"24px",
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:"0 4px 12px rgba(0,0,0,0.4)", transition:"all 0.5s ease", zIndex:"9999"
      });

      const setBtnStyle = () => {
        if (document.body.classList.contains("acw-dark-mode")) {
          btn.style.backgroundColor="#fff"; btn.style.color="#000"; btn.innerHTML='<i class="fa-solid fa-sun"></i>';
        } else {
          btn.style.backgroundColor="#000012"; btn.style.color="#fff"; btn.innerHTML='<i class="fa-solid fa-moon"></i>';
        }
      };
      setBtnStyle();

      btn.addEventListener("click", () => {
        document.body.classList.toggle("acw-dark-mode");
        localStorage.setItem("acw-darkMode", document.body.classList.contains("acw-dark-mode"));
        btn.style.transform="rotate(90deg)";
        setTimeout(()=>{btn.style.transform="rotate(0deg)";},400);
        setBtnStyle();
      });

      document.body.appendChild(btn);
    });
  }

  // -------------------------------
  // Navbar
  // -------------------------------
  if (navbarTitle !== null) {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.getElementById("acw-navbar")) return;

      const nav = document.createElement("nav");
      nav.id = "acw-navbar";
      nav.textContent = navbarTitle || "ACW";
      Object.assign(nav.style, {
        position:"fixed", top:"0", left:"0", width:"100%", height:"50px",
        backgroundColor:"#007BFF", color:"#fff", display:"flex", alignItems:"center",
        justifyContent:"center", fontFamily:"'Outfit',sans-serif", fontSize:"1.2em",
        zIndex:"9999", boxShadow:"0 2px 6px rgba(0,0,0,0.2)"
      });
      document.body.style.paddingTop="50px";
      document.body.prepend(nav);
    });
  }

})();
