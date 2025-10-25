(function() {
  // Check if already injected
  if (document.getElementById("acw-coolpage-style")) return;

  //Fontawsome loading if not loaded
    if (!document.getElementById("fa7-cdn")) {
    const fa7 = document.createElement("link");
    fa7.id = "fa7-cdn";
    fa7.rel = "stylesheet";
    fa7.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    document.head.appendChild(fa7);
  }

  // Create style element
  const style = document.createElement("style");
  style.id = "acw-coolpage-style";

  // CSS content
  style.textContent = `
  /* Import Outfit font */
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

  /* Apply Outfit font globally */
  body, html {
      font-family: 'Outfit', sans-serif;
      margin-left: 10px;
      margin-right: 10px;
      line-height: 1.6;
      text-align: justify;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Outfit', sans-serif;
      line-height: 1.3;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      font-weight: 500;
  }

  /* Paragraphs */
  p {
      margin-bottom: 1em;
      font-weight: 300;
  }

  /* Links */
  a {
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 18px;
      color: #007BFF;
      text-decoration: underline;
  }

  a::before {
      content: "\\f0c1"; 
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.8em;
      color: inherit;
  }

  a:hover {
      text-decoration: underline;
  }

  /* Lists */
  ul, ol {
      margin-left: 20px;
      margin-bottom: 1em;
  }

  /* Images */
  img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0.5em 0;
  }

  /* Buttons */
  button, input[type="submit"], input[type="reset"], input[type="button"] {
      font-family: 'Outfit', sans-serif;
      font-size: 1em;
      padding: 5px 10px;
      margin-bottom: 0.8em;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: #007BFF;
      color: #fff;
  }

  button:hover, input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover {
      background-color: #0056b3;
  }

  /* Text Inputs */
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="number"],
  input[type="url"],
  input[type="tel"],
  input[type="search"],
  textarea,
  select,
  input[type="file"] {
      font-family: 'Outfit', sans-serif;
      font-size: 1em;
      padding: 8px 12px;
      margin-bottom: 0.8em;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      transition: all 0.3s ease;
  }

  input:focus, textarea:focus, select:focus, input[type="file"]:focus {
      border-color: #4b6cb7;
      box-shadow: 0 0 5px rgba(75,108,183,0.5);
  }

  /* Radios & Checkboxes */
  input[type="radio"], input[type="checkbox"] {
      accent-color: #007BFF;
      margin-right: 6px;
  }

  /* Range sliders */
  input[type="range"] {
      accent-color: #007BFF;
      width: 100%;
  }

  /* Textarea */
  textarea {
      resize: vertical;
      min-height: 80px;
  }

  /* Fieldsets and Legends */
  fieldset {
      border: 1px solid #ccc;
      padding: 1em;
      border-radius: 6px;
      margin-bottom: 1em;
  }

  legend {
      font-weight: 500;
  }

  /* Optional: smooth scroll for anchors */
  html {
      scroll-behavior: smooth;
  }

  /* Allow user overrides easily */
  body.coolPage-override {
      margin-left: initial;
      margin-right: initial;
      text-align: initial;
      font-family: initial;
  }
  `;

  // Append to head
  document.head.appendChild(style);
})();
