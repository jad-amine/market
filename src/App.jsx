import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Category from './components/Category';



const App = () => (
  <div>
    <Navbar />
    <div className="product-grid">
      {categories.map((product, index) => <Category key={index} product={product} />)}
    </div>
    <Footer />
  </div>
);

export default App;

const categories = [
    {
      title: 'Plastic',
      description: 'Restaurant supplies',
      image: 'https://3.imimg.com/data3/OF/EI/MY-1057541/1-kg-plastic-container-500x500.jpg'
    },
    {
      title: 'Bags',
      description: 'All colors',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2_pS4LPznMjdwkQIPQn5lONRupBDqzHld1MSh9j8ZTCQ7kac6ChLwiTQvkG_BFudzzA&usqp=CAU'
    },
    {
      title: 'Cups',
      description: 'Paper and plastic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZzoZuPavjkLb5oVzofDIwJxtcOIvGJxgzA&usqp=CAU'
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
  