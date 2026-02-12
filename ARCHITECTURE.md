# Project Architecture Documentation

This document outlines the file structure, CSS architecture, and data management patterns of the application. It serves as a guide for developers working on the codebase.

## 1. Project Overview

The project is a React-based web application built with Vite. It uses `react-router-dom` for client-side routing and relies on standard CSS for styling. The architecture is component-based, with a separation between reusable UI components and page-level views.

## 2. File Structure

The project follows a standard Vite + React structure:

```
aidlhcsy-thapar-main/
├── public/                 # Static assets (images, icons)
├── src/                    # Source code
│   ├── Components/         # Reusable UI components
│   │   ├── Footer/         # Footer component and styles
│   │   └── Header/         # Header component and styles
│   ├── Pages/              # Page-level components
│   │   ├── Authors/        # Authors page
│   │   ├── Keynotes/       # Keynotes page
│   │   ├── OrgCom/         # Organizational Committee pages and data
│   │   ├── Venue/          # Venue page
│   │   └── Home.jsx        # Home page
│   ├── info/               # Static data files (JSON/JS objects)
│   ├── App.css             # Global styles and variables
│   ├── App.jsx             # Main application component & Routing
│   └── main.jsx            # Entry point
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

### Key Directories

- **`src/Components`**: Contains "dumb" or presentational components that can be reused across pages. Each component typically has its own folder containing the `.jsx` file and a corresponding `.css` file.
- **`src/Pages`**: Contains the main views of the application. These components correspond to routes defined in `App.jsx`. Like components, pages often have dedicated CSS files.
- **`src/info`**: Contains JavaScript files exporting static data. This separates content from the UI components.

## 3. CSS Architecture

The project uses **Vanilla CSS** with a robust custom system for theming and consistency. There are no external CSS frameworks (like Tailwind or Bootstrap) currently in use.

### 3.1 Global Styles (`src/App.css`)

`App.css` serves as the foundation for the design system. It handles:

- **CSS Variables**: Defines the color palette and theme constants.
  ```css
  :root {
    --primary: #640000;       /* Main brand color */
    --primary2: #960000;      /* Darker/Secondary brand color */
    --lbg: #e6e6e6;           /* Light background */
    --lbg2: rgb(231, 216, 203); /* Alternative light background */
    --sec: rgb(206, 206, 206);  /* Secondary UI elements */
  }
  ```
- **Resets**: Standard reset for margins, paddings, and box-sizing.
- **Typography**: Sets global font families (`Inter`, `Figtree`, `Lato`) and responsive font sizes.
- **Utility Classes**:
  - `.page`: A wrapper class used on most page components to ensure consistent margins (`margin: 80px 5vw`) and text alignment.
  - Button styles: Default styling for `<button>` elements with variants (`.dark`, `.light`).

### 3.2 Component & Page Styling

Component-specific styles are co-located with their components. This keeps styles modular but allows for standard CSS cascading.

- **Naming Convention**: CSS files match the component name (e.g., `Header.jsx` -> `Header.css`).
- **Scoping**: While CSS modules are *not* explicitly used (files are imported as `import './File.css'`), developers typically use specific class names (e.g., `.home`, `.orgCom`, `.floater`) to minimize style collisions.

### 3.3 Layout Patterns

- **Page Layout**: Pages generally use the `.page` class from `App.css` to center content and provide standard padding.
- **Flexbox**: The application heavily relies on Flexbox for layout (e.g., `.home`, `.floater`, `.impDates`).

### 3.4 Responsive Design

- Media queries are handled in standard CSS.
- `App.css` includes a root-level font-size adjustment for smaller screens (`max-width: 1366px`), which scales `rem` based units globally.

## 4. Data Management

The application separates static content (like lists of people or dates) from the component logic, though the implementation is currently split across two locations:

1.  **`src/info/` Directory**:
    *   `Tracks.js`: Exports the conference tracks data.
    *   `Committee.js`: **Important Note**: This file currently exports *Important Dates*, not committee members. Access it via `import dates from ...`.

2.  **`src/Pages/OrgCom/` Directory**:
    *   `Committee.js`: This file contains the actual list of committee members. It is co-located with the page component that uses it (`OrgCom.jsx`).

## 5. Routing

Routing is managed by `react-router-dom` in `App.jsx`.
- **Structure**:
  - `Header` (Persistent)
  - `Routes` (Dynamic content)
  - `Footer` (Persistent)

## 6. Recommendations for Improvement

Since you are taking over this project for "betterment", here are identified areas for improvement:

1.  **Standardize Data Location**: Move `src/Pages/OrgCom/Committee.js` to `src/info/` to centralize all static data.
2.  **Rename Confusing Files**: Rename `src/info/Committee.js` to `src/info/Dates.js` since it contains dates, not committee members. This will prevent confusion with the actual committee member list.
3.  **CSS Modules**: Consider switching from standard CSS imports (`import './Page.css'`) to CSS Modules (`import styles from './Page.module.css'`) to guarantee scoped styling and prevent class name collisions as the project grows.
4.  **Responsive Images**: Optimize images in `public/` and implement lazy loading for the committee member images to improve load times.
