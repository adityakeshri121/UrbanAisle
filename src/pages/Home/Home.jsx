import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
const Home = () => {
    return (
        <div>Home
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Slider />
            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
        </div>
    )
}

export default Home