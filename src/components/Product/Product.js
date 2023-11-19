import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className='product'>
            <div>
             <img src={img} alt="" />
            </div>

            <div>
            <h4 className='product-name'></h4>
            <br />
            <p><small>by:{seller}</small></p>
            <p><small>Price ${price}</small></p>
            <br />
            <p>Only {stock} left in stock</p>
            <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShippingFast}/>
            add to cart
            </button>
            </div>
            
        </div>
    );
};

export default Product;