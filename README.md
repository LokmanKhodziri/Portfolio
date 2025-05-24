# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. This portfolio showcases my skills, projects, and provides a way for visitors to get in touch.

## 🚀 Features

- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎨 Modern and clean UI
- 📝 Contact form integration
- 🔍 SEO friendly

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **Form Handling:** Formspree
- **Version Control:** Git

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # React components
│   │   ├── common/      # Shared components
│   │   ├── Contact/     # Contact section
│   │   ├── Footer/      # Footer section
│   │   ├── Hero/        # Hero section
│   │   ├── Projects/    # Projects section
│   │   └── Skills/      # Skills section
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── public/             # Public assets
└── index.html          # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview production build

## 🎨 Theme Customization

The project uses CSS variables for theming. You can customize the colors by modifying the variables in the root CSS file:

```css
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  /* Add more variables as needed */
}
```

## 📝 Contact Form

The contact form is integrated with Formspree. To use your own form:

1. Create a Formspree account
2. Create a new form
3. Replace the form action URL in `Contact.tsx` with your form's URL

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

LokmanKhodziri
- GitHub: [@lokmankhodziri](https://github.com/lokmankhodziri)
- LinkedIn: [LokmanKhodziri](https://www.linkedin.com/in/lokmankhodziri/)
