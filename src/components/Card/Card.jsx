import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    console.log(item);
    return (

        <Link to={`/products/${item.id}`}>
            <div>
                <div>
                    <img src={item.img} alt="" />
                    {/* <img src={item.img} alt="" /> */}
                </div>
                <h2>{item.title}</h2>
                <div>
                    <h3>Rs.{item.oldPrice}</h3>
                    <h3>Rs.{item.newPrice}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card