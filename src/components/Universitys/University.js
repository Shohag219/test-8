import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Versity from '../Versity/Versity';
import './University.css';

const University = () => {

    const [universitys, setUniversitys] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./university.JSON')
        .then(res => res.json())
        .then(data => setUniversitys(data))
    },[]);

    const handleAddToCard = (university) =>{
        const newCart = [...cart, university];
        setCart(newCart);
    }

    return (
        <div className="row">
            <div className="col-md-9 border-end mt-3">
                <div className="versity-container row">
                
                {
                    universitys.map(university => <Versity
                         university={university}
                         key={university.Website}
                         handleAddToCard={handleAddToCard}
                         >   
                         </Versity>)
                }
                </div>
            </div>
            <div className="col-md-3 mt-5 text-center">
                <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default University;