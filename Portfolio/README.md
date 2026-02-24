# 🚀 Edison Hirwa — Personal Portfolio

A modern, responsive personal portfolio built with **React** and **Tailwind CSS**, featuring smooth animations, a dark theme, and a working contact form.

🔗 **Live:** [edisonhirwa.github.io/Myportfolio](https://edisonhirwa.github.io/Myportfolio) *(coming soon)*

---

## ✨ Features

- **Animated Hero** — Typewriter effect, floating tech icons, spinning gradient ring, and ambient particles
- **About Section** — Personal info card with profile photo and quick-fact chips
- **Skills Grid** — Tools & platforms displayed with official SVG icons
- **Projects Showcase** — Featured project cards with live demo and source links
- **Contact Form** — Functional email delivery via [EmailJS](https://www.emailjs.com/)
- **Fully Responsive** — Mobile-first design with smooth transitions
- **Dark Theme** — Sleek zinc/indigo color palette with glassmorphism cards

---

## 🛠 Tech Stack

| Category    | Technology                     |
| ----------- | ------------------------------ |
| Framework   | React 19                       |
| Build Tool  | Vite                           |
| Styling     | Tailwind CSS v3                |
| Icons       | Lucide React + Custom SVGs     |
| Email       | EmailJS                        |
| Deployment  | GitHub Pages *(planned)*       |

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/EdisonHirwa/Myportfolio.git
cd Myportfolio/Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** to send messages directly to your email.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and create a template using `{{name}}`, `{{email}}`, `{{message}}`
3. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart the dev server

---

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── assets/          # Profile image
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Edison Hirwa</strong>
</p>
