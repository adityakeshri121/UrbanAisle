import React from 'react'

const Products = () => {
    return (
        <div>
            <div className="left">
                <div className="filter-item">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Cap</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='2' value={2} />
                        <label htmlFor="2">Tshirt</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='3' value={3} />
                        <label htmlFor="3">Skirts</label>
                    </div>
                </div>
                <div className="filter-item">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1500} />
                        <span>100</span>
                    </div>
                </div>
                <div className="filter-item">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value="asc" name='price' />
                        <label htmlFor="asc">low to high(Price) </label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='des' value="des" name="price" />
                        <label htmlFor="des">high to low(Price)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
        </div>
    )
}

export default Products