import React from "react";
import './Categories.css';
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div className="flex h-[80vh] gap-2 m-2">
            <div className="col flex-1">
                <div className="row1 relative">
                    <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button className="absolute">
                        <Link to='/products/1'>Sale</Link>
                    </button>
                </div>

                <div className="row2">
                    <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
            </div>
            <div className="col flex-1">
                <div className="row1">
                    <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
            </div>
            <div className="col flex-[2]">
                <div className="row1 flex">
                    <div className="col">
                        <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className="col">
                        <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                </div>
                <div className="row2">
                    <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Categories


