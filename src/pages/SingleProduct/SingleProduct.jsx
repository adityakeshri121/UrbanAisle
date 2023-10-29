import React, { useState } from 'react'
import './SingleProduct.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
const SingleProduct = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const images = [
        'https://assets.ajio.com/medias/sys_master/root/20230613/wUEb/6488850842f9e729d73ecf3a/-473Wx593H-469484189-navy-MODEL.jpg',
        'https://assets.ajio.com/medias/sys_master/root/20230613/6Oin/648894f6d55b7d0c6367c5a9/-473Wx593H-469484189-navy-MODEL5.jpg',
    ];

    const increment = () => {
        setQuantity(currNumb => currNumb + 1);
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity((prevNumb) => prevNumb - 1);
        }
    }

    return (
        <div className='product'>

            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>

            <div className="right">
                <h1>Title</h1>
                <span>Rs.700</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates, sapiente nemo quidem beatae corporis dolor, perspiciatis at ducimus odit adipisci. Illum cum vitae dolores porro nulla delectus. Praesentium sequi est facere facilis optio temporibus, excepturi inventore quasi id laudantium?</p>
                <div className="quantity">
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct