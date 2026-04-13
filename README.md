# Alton Michaux — Portfolio

Personal portfolio website for Alton Michaux, web developer. Built with React.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero intro and personal projects |
| `/about` | Bio and background |
| `/experience` | Professional experience at Code The Dream Labs (Vamos & Datos) |
| `/contact` | Links to email, GitHub, and LinkedIn |

## Tech Stack

- **React 18** with React Router v6
- **CSS Modules** for scoped component styling
- **Space Grotesk** (Google Fonts) for typography
- **React Bootstrap** (partially used)
- Deployed via **Netlify**

## Getting Started

```bash
npm install
npm start
```

Opens at `http://localhost:3000`. The page hot-reloads on save.

## Available Scripts

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

## Project Structure

```
src/
├── assets/          # Images and documents (resume)
├── components/
│   ├── routes/      # Page-level components (Home, About, Experience, Contact)
│   ├── Nav.js       # Sticky top navigation
│   ├── Footer.js    # Fixed bottom footer
│   ├── AppGrid.js   # Project card grid
│   └── Dropdown.js  # Project filter dropdown
├── css/             # CSS Modules (one per component)
├── App.js           # Route definitions
└── index.js         # React entry point
```
