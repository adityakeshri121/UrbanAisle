import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-white">
            <div className="flex justify-around">
                <div>
                    <h1>Categories</h1>
                    <div><Link to='/products/2' />Men</div>
                    <div><Link to='/products/2' />Women</div>
                    <div><Link to='/products/2' />Shoes</div>
                    <div><Link to='/products/2' />Accessories</div>
                    <div><Link to='/products/2' />New Arrivals</div>
                </div>

                <div>
                    <h1>Links</h1>
                    <div><Link to='/products/2' />FAQ</div>
                    <div><Link to='/products/2' />Pages</div>
                    <div><Link to='/products/2' />Stores</div>
                    <div><Link to='/products/2' />Compare</div>
                    <div><Link to='/products/2' />Cookies</div>
                </div>

                <div className="w-[30vw]">
                    <h1>About</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis sit a obcaecati non id error adipisci odit distinctio cum! Sint rerum quia nobis iste doloribus harum corporis, cum similique ipsa quis obcaecati vitae autem cumque impedit reiciendis deleniti amet!</div>
                </div>

                <div className="w-[30vw]">
                    <h1>Concact Us</h1>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, autem. Vitae, maxime rerum consectetur debitis rem esse libero quidem id fugiat? Voluptates dolorum accusamus nulla nobis eum similique nostrum sequi.</div>
                </div>

            </div>

            <div className="flex justify-around items-center">
                <div className="h-20">
                    <img className="h-20" src="/img/logo footer.png" alt="footer-logo" />
                </div>
                <div className="">
                    <img className="h-20" src="/img/payment.png" alt="payment img" />
                </div>
            </div>
        </div>
    )
}

export default Footer