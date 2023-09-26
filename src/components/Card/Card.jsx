import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    console.log(item);
    return (

        <Link to={`/products/${item.id}`}>
            <div className="w-60 flex flex-col gap-2">
                <div className="img-box w-[100%] h-[300px] overflow-hidden relative">
                    <img className="main-img img-tag" src={item.img} alt="" />
                    <img className="second-img img-tag" src={item.img2} alt="" />
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