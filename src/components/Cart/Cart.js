import React from 'react';


import './Cart.css'

const Cart = (props) => {
    

    const { cart } = props;
    const totalReducer = (previous, university) => previous + university.ApplicationFee;
    const total = cart.reduce(totalReducer, 0);
    
    return (
        <div className="d-block">
            <h2>Select and Fee</h2>
            <h3 className="mt-3"> Select: {props.cart.length}</h3>
            <ul>{
                cart.map(university => <li>{university.name}</li>)  
            }
            </ul>
            <h4 className="mt-3" >Total Fee: ৳ {total}</h4>
            <button className="btn btn-primary mt-5">Pay Now</button>
        </div> 
    );
};

export default Cart;