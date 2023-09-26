import React from 'react'
import './FeaturedProducts.css'
import Card from '../Card/Card'
const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            // img: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23363392/2023/5/24/75f3ad32-d81c-4fef-ae0a-f9700cf1c3311684877169617RelaxedFitPrintedT-shirt1.jpg',
            img2: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23363392/2023/5/24/0c775465-0fea-45e6-ab9f-c61f6ae9ffe31684877169604RelaxedFitPrintedT-shirt2.jpg',
            itNew: true,
            oldPrice: 19,
            newPrice: 12,
            title: 'T Shirt'
        },
        {
            id: 2,
            // img: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24903906/2023/9/11/5856bce0-d857-4b1a-ab50-ef3557695bf71694440589439BLACKSCISSORBlackCropTop1.jpg',
            img2: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24903906/2023/9/11/0c0cd165-29e1-42ed-842c-8974865151721694440589475BLACKSCISSORBlackCropTop3.jpg',
            itNew: true,
            oldPrice: 19,
            newPrice: 12,
            title: 'Crop Top',
        },
        {
            id: 3,
            // img: 'https://images.pexels.com/photos/2531097/pexels-photo-2531097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780922/2020/4/3/0fe1f83f-4a92-4a9e-ac95-3559e4b978e61585905004166HIGHLANDERMenWhiteGreySlimFitPrintedCasualShirt1.jpg',
            img2: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11780922/2020/4/3/2d56b2e0-f60f-4faf-b2ba-8bffcc9385eb1585905004370HIGHLANDERMenWhiteGreySlimFitPrintedCasualShirt4.jpg',
            itNew: false,
            oldPrice: 19,
            newPrice: 12,
            title: 'Shirt'
        },
        {
            id: 4,
            // img: 'https://images.pexels.com/photos/1552547/pexels-photo-1552547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23816338/2023/6/30/85d02a02-11c7-4e01-a15f-3690df9735a41688067167989WROGNBrownTexturedCasualLeatherBeltforMen1.jpg',
            img2: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23816338/2023/6/30/33e192d3-bddf-4d1e-88bf-c868a12ee8c11688067168043WROGNBrownTexturedCasualLeatherBeltforMen6.jpg',
            itNew: false,
            oldPrice: 19,
            newPrice: 12,
            title: 'Belt'
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