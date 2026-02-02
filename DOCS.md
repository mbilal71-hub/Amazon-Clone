# Documentation

Detailed technical breakdown of the Amazon Clone project components and functionality.

## 🏗️ Architecture

The project follows a standard frontend structure, separating concerns between content (HTML), presentation (CSS), and behavior (JS).

### 1. HTML (`index.html`)
- **Navbar**: Contains the logo, delivery location, search bar, account info, and cart.
- **Hero Section**: Large promotional banner with a gradient overlay.
- **Shop Section**: Grid layout for product categories (Health & Care, Fashion, Electronics, etc.).
- **Footer**: Multi-panel footer with navigation links and copyright information.

### 2. CSS (`style.css`)
- **Design System**: Uses a color palette inspired by Amazon (#0f1111, #232f3e, #febd68).
- **Layout**: Utilizes Flexbox and CSS Grid for alignment.
- **Responsiveness**:
  - Desktop: 4 items per row (default).
  - Tablet: 3 items per row (<1024px).
  - Mobile: 2 items per row (<768px), 1 item per row (<480px).

### 3. JavaScript (`script.js`)
- **Cart Logic**: Manages `cartCount` state and updates the UI when "Add to Cart" is clicked.
- **Search Engine**: A manual implementation of a search filter that highlights/hides grid items based on `input` events.
- **DOM Manipulation**: Dynamically injects "Add to Cart" buttons into product containers during initialization.

## 🔄 Functionality Details

### Shopping Cart
When the "Add to Cart" button is clicked, the `cartCount` variable increments, and the text in the navbar is updated. A brief "Added!" feedback message is shown on the button.

### Live Search
The search input listens for `input` events. It compares the user's query against the text in `<h2>` tags within product boxes. Non-matching items are hidden, and matching items are highlighted with a border.
