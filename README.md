
# ShopShop GmbH

React-Frontend for a fullstack online shop, built with Vite, React, and Bootstrap as part of my vocational training as a Fachinformatikerin für Anwendungsentwicklung (FIAE).

**Author**: Gracia Kleijnen

**User:**
![User Flow](<user gif.gif>)

**Admin:**

## Tech Stack
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-7952B3?logo=bootstrap&logoColor=white) ![GitHub](https://img.shields.io/badge/Version%20Control-GitHub-181717?logo=github&logoColor=white) ![Sass](https://img.shields.io/badge/UI-Sass-C69?logo=sass&logoColor=fff)

## Pages with features

- **Home** page with animated carousel
- **Register** a new account, with progress bar
- **Login** using username & password
- **Products**
    - (user) View product cards with title, price & short description 
    - (user) Click the images to navigate to product detail pages
    - (admin) Add new product (title, description, price, image)
    - (admin) Delete product or edit product details 
- **Product detail page** 
    - View full product description and photo 
    - ATC (add to cart)
- **Cart**: 
    - Increment or decrement quantity per item 
    - Delete to remove item from cart 
    - Clicking **'Complete order'**:
        - Opens modal with an 'Order Overview'.
        - Cart in state resets (saved in App.jsx).
- **Dashboard**: Shows order history (planned)
- **My Profile**: 
    - View account data
    - Edit account data (planned) 


## Prerequisites
- Node.js 
- MariaDB (for backend)
- npm
- Make sure the backend server is running


## Installation
1. Install dependencies

```bash
npm install
```

2. Create .env for backend API

To allow access from other devices in the network use your own server address.
```bash
VITE_API_SERVER_URL=http://YOUR-IP-ADRESS:3001
```
Replace with your backend address.

3. Run frontend development server 

```bash
npm run dev
```

The frontend runs on: ``` http://YOUR-IP-ADDRESS:5173 ```


## Project structure

```
Frontend-OnlineShop-Kleijnen/
├── node_modules/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── carousel/
│   │   │   ├── AutoplayCarousel.jsx
│   │   │   ├── autoplaycaroussel.scss
│   │   │   ├── carousel-config.js
│   │   │   └── CarouselItem.jsx
│   │   ├── modals/
│   │   │   ├── AddProductModal.jsx
│   │   │   ├── EditProductModal.jsx
│   │   │   └── OrderOverviewModal.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── LogoutModal.jsx
│   │   ├── Navi.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Products.jsx
│   │   ├── Profile.jsx
│   │   ├── ProtextedRoute.jsx
│   │   └── Register.jsx
│   ├── styles/
│   │   └── Form.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .env.example
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

``` 