# Vibe-FE (Prelination)

A modern, responsive frontend application built with React, TypeScript, and Vite, featuring a sleek UI powered by shadcn-ui and Tailwind CSS.

## 🚀 Overview

This project is a frontend application created by VibeCoding for testing and development purposes. It leverages cutting-edge web technologies to deliver a fast, type-safe, and beautifully designed user experience.

## ✨ Features

- ⚡️ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎨 **Modern UI** - Styled with Tailwind CSS and shadcn-ui components
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🔒 **Type-Safe** - Fully typed with TypeScript
- 🎯 **Developer Friendly** - Excellent DX with ESLint and modern tooling

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **Vite** | Next-generation frontend build tool for blazing fast development |
| **React** | A JavaScript library for building user interfaces |
| **TypeScript** | Typed superset of JavaScript for enhanced developer experience |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development |
| **shadcn-ui** | Beautifully designed, accessible component library |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

> 💡 **Tip:** Use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node.js versions easily.

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShuvroShimuL/Vibe-FE.git
   cd Prelination
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8081` (or the port shown in your terminal)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 💻 Development Options

### Option 1: Local IDE

Work on your machine with your favorite code editor (VS Code, WebStorm, etc.):

```bash
# Clone, install, and start developing
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

### Option 2: GitHub Codespaces

Develop in the cloud without any local setup:

1. Go to your repository on GitHub
2. Click the **Code** button (green)
3. Select the **Codespaces** tab
4. Click **Create codespace on main**
5. Start coding in your browser!

### Option 3: Direct GitHub Editing

For quick changes:

1. Navigate to the file you want to edit
2. Click the **pencil icon** (✏️) to edit
3. Make your changes
4. Commit directly to the repository

## 📁 Project Structure

```
Prelination/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions and helpers
│   ├── pages/       # Page components
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Git Configuration

If this is your first time using Git on this machine, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 🐛 Troubleshooting

### Port Already in Use

If port 8081 is busy, Vite will automatically try another port. Check the terminal output for the actual URL.

### Module Not Found

Try removing `node_modules` and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure you're using the correct Node.js version:
```bash
node --version  # Should be v18 or higher
```

## 📄 License

This project is created by VibeCoding for testing purposes.

## 👨‍💻 Author

**ShamimulShimul**

---

<div align="center">
  Made with ❤️ by ShamimulShimul
</div>
