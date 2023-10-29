import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    console.log(item);
    return (

        <Link to={`/product/${item.id}`}>
            <div className="w-60 flex flex-col gap-2">


                <div className="img-box w-[100%] h-[300px] overflow-hidden relative">
                    {item.isNew && <span className="absolute z-[2] bg-white text-blue-500 font-medium ml-1 opacity-90">New Season</span>}
                    <img className="main-img img-tag" src={item.img} alt="" />
                    <img className="second-img img-tag" src={item.img2} alt="" />
                </div>

                <h2 className="font-medium">{item.title}</h2>
                <div className='flex gap-4 font-medium'>
                    <h3 className="line-through">Rs.{item.oldPrice}</h3>
                    <h3>Rs.{item.newPrice}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card