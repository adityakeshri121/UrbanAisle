import React from 'react'
import './FeaturedProducts.css'
import Card from '../Card/Card'
const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            itNew: true,
            oldPrice: 19,
            newPrice: 12,
            title: 'Hoodie'
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            itNew: true,
            oldPrice: 19,
            newPrice: 12,
            title: 'Shirt',
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/2531097/pexels-photo-2531097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            itNew: false,
            oldPrice: 19,
            newPrice: 12,
            title: 'Crop Top'
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/1552547/pexels-photo-1552547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            itNew: false,
            oldPrice: 19,
            newPrice: 12,
            title: 'Bra'
        },
    ]
    return (
        <div className="mx-[200px] my-[100px]">
            <div className="flex items-center justify-center mb-12">
                <h1 className="capitalize">{type} products</h1>
                <p className="space">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat temporibus eum eos error placeat officiis expedita, consectetur non aspernatur excepturi maiores reiciendis.</p>
            </div>

            <div className="bottom flex justify-center">
                {data.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts