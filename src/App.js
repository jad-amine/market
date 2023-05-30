import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling

const Navbar = () => (
  <nav>
    <h1>Website Title</h1>
    {/* Add other navbar elements here */}
  </nav>
);

const Footer = () => (
  <footer>
    <p>Plastic</p>
    <p>Cups</p>
    <p>Bags</p>
    {/* Add other footer elements here */}
  </footer>
);

const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <div className="product-grid">
      {products.map((product, index) => <Product key={index} product={product} />)}
    </div>
    <Footer />
  </div>
);

export default App;

const products = [
    {
      title: 'Plastic',
      description: 'Restaurant supplies',
      image: 'https://via.placeholder.com/150?text=Product+1'
    },
    {
      title: 'Bags',
      description: 'All colors',
      image: 'https://via.placeholder.com/150?text=Product+2'
    },
    {
      title: 'Cups',
      description: 'Paper and plastic',
      image: 'https://via.placeholder.com/150?text=Product+3'
    },
    {
      title: 'Product 4',
      description: 'This is product 4',
      image: 'https://via.placeholder.com/150?text=Product+4'
    },
    {
      title: 'Product 5',
      description: 'This is product 5',
      image: 'https://via.placeholder.com/150?text=Product+5'
    },
    {
      title: 'Product 6',
      description: 'This is product 6',
      image: 'https://via.placeholder.com/150?text=Product+6'
    },
    {
      title: 'Product 7',
      description: 'This is product 7',
      image: 'https://via.placeholder.com/150?text=Product+7'
    },
    {
      title: 'Product 8',
      description: 'This is product 8',
      image: 'https://via.placeholder.com/150?text=Product+8'
    },
    {
      title: 'Product 9',
      description: 'This is product 9',
      image: 'https://via.placeholder.com/150?text=Product+9'
    },
    {
      title: 'Product 10',
      description: 'This is product 10',
      image: 'https://via.placeholder.com/150?text=Product+10'
    },
  ];
  