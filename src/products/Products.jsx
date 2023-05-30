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
    <p>Website Footer</p>
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

const App = ({ products }) => (
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
      title: 'Product 1',
      description: 'This is product 1',
      image: 'https://via.placeholder.com/150?text=Product+1'
    },
    {
      title: 'Product 2',
      description: 'This is product 2',
      image: 'https://via.placeholder.com/150?text=Product+2'
    },
    {
      title: 'Product 3',
      description: 'This is product 3',
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
  