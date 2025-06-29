# PowerLab React Shopping Cart

## Overview

PowerLab is a simple, modern shopping cart application built with React, Vite, and Tailwind CSS. It demonstrates core e-commerce features such as product listing, cart management, coupon discounts, and persistent storage using localStorage.

---

## Features

- Product Listing: Browse a list of featured products.
- Add to Cart:Add products to your cart from the product grid.
- Cart Management: Increase/decrease quantity, remove items, and view subtotal.
- Coupon System: Apply the promo code `POWERLABSx` for a 13.2% discount.
- Persistent Cart: Cart contents are saved in localStorage.
- Alert Notifications: Success and error messages for cart actions and coupon input.
- Responsive UI: Styled with Tailwind CSS for mobile and desktop.

---

## Folder Structure

```
src/
├── App.jsx                # Main app with routing
├── main.jsx               # Entry point
├── products.js            # Static product data
├── index.css              # Tailwind and global styles
├── App.css                # App-specific styles
├── components/
│   ├── Navbar.jsx         # Top navigation bar
│   ├── Footer.jsx         # Footer section
│   ├── Alert.jsx          # Alert/notification component
│   └── Product/
│       ├── ProductCard.jsx# Single product display
│       └── ProductList.jsx# Product grid
├── context/
│   └── CartContext.jsx    # Cart state and logic (Context API)
├── pages/
│   ├── shop.jsx           # Product listing page
│   └── cart.jsx           # Cart and checkout page
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/D-future0/powerlab-shop.git
   cd powerlab-shop
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open in your browser:
   Visit [http://localhost:5173](http://localhost:5173)

---

## Usage

- Browse Products: Visit `/` to see all products.
- Add to Cart: Click "Add to Cart" on any product.
- View Cart: Click the cart icon or go to `/cart`.
- Update Quantities: Use +/– buttons in the cart.
- Remove Items: Click "Remove" in the cart.
- Apply Coupon: Enter `POWERLABSx` in the coupon field for a discount.
- Alerts: Success/error messages appear in the bottom right.

---

## Customization

- Products: Edit [`src/products.js`](src/products.js) to change product data or images.
- Coupon Logic: Adjust coupon code or discount in [`src/context/CartContext.jsx`](src/context/CartContext.jsx).
- Styling: Modify Tailwind classes in component files or global styles in [`src/index.css`](src/index.css).

---

## Technical Details

- State Management: React Context API ([`CartContext`](src/context/CartContext.jsx))
- Routing: React Router DOM
- Styling: Tailwind CSS
- Persistence: localStorage for cart state

---

## Author

Developed by Okafor Ifechukwu Collins  
