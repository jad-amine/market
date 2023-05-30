import React from 'react'

const Category = ({ product }) => (
    <div className="product">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
);

export default Category