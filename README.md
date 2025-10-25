# ACW.js – All-in-One Cool Web Bundle

**ACW.js** is a lightweight, standalone, and ultra-cool JavaScript bundle that makes your webpages look slick and modern **without any frameworks**. It’s packed with features like a responsive navbar, floating dark mode toggle, stylish form elements, and global typography. Yes… it’s very much bla bla bla, but also very functional!  

---

## 🔥 Features

- **CoolPage Styling** – Applies smooth, readable, and modern styles to headings, paragraphs, links, lists, buttons, inputs, and more.  
- **Dark Mode Toggle** – Floating button that lets users switch to dark mode with animated rotation. Persists across sessions using `localStorage`.  
- **Navbar** – Fixed top navbar that can display custom text, the default `"ACW"`, or be omitted entirely.  
- **Responsive Forms** – Inputs, textareas, selects, checkboxes, radios, and range sliders are styled to fit modern web design.  
- **Typography** – Uses **[Google Fonts – Outfit](https://fonts.google.com/specimen/Outfit)** for a clean and readable typeface.  
- **Icons** – Integrates **[Font Awesome 6.7](https://cdnjs.com/libraries/font-awesome)** for icons in links and dark mode button.  
- **Standalone** – No dependencies, just include the single JS file, add a `data-acw-*` attribute, and you’re done.  
- **Smooth Scroll** – Anchors automatically scroll smoothly.  

---

## ⚡ CDN & Implementation

You can use the latest ACW.js directly via CDN:

```html
<script
  src="https://cdn.jsdelivr.net/gh/exotic-atif/acw@main/acw-v1.1.3.js" id="acwScript"
  data-acw-navbar="false"
  data-acw-darkModeBtn="false"
  data-acw-coolPage="false"
></script>
```

### ✅ Attribute Options:

| Attribute | Options | Description |
|-----------|---------|-------------|
| `data-acw-navbar` | `false` / omit → hide, `true` → show default `"ACW"`, `"Custom Text"` → show custom title | Adds a top navbar |
| `data-acw-darkModeBtn` | `true` / `false` | Shows floating dark mode toggle button |
| `data-acw-coolPage` | `true` / `false` | Applies modern styles to body, headings, paragraphs, forms, buttons, links, and more |

> **Example:** Show navbar with custom title, enable dark mode, and apply CoolPage styling:

```html
<script
  src="https://cdn.jsdelivr.net/gh/exotic-atif/acw@main/acw-v1.1.3.js"
  id="acwScript"
  data-acw-navbar="Hello World"
  data-acw-darkModeBtn="true"
  data-acw-coolPage="true"
></script>
```

---

## 🎨 Built With

- **[Font Awesome](https://cdnjs.com/libraries/font-awesome)** – For icons in buttons and links  
- **[Google Fonts – Outfit](https://fonts.google.com/specimen/Outfit)** – Sleek and modern typography  
- Pure **vanilla JavaScript** – No frameworks, zero dependencies  

---

## 🚀 Usage Notes

1. Add the `<script>` tag at the **end of `<head>` or just before `</body>`**.  
2. Customize features with `data-acw-*` attributes.  
3. Enjoy modern styling and user-friendly UI instantly!  

---

**ACW.js** – Because your web pages deserve to look **cool, stylish, and functional**

