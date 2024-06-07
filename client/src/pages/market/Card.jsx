import React, { useState } from "react"
import './Market.css';

export default function Card({ image, title, price }){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        console.log("I got clicked");
    };

    return (
        // <div className="productcard col-md-4 align-items-stretch">
          <div className="card col-3 m-2 p-2 text-center">
            <img src={ image } alt={ title } className="card-image card-img-top " />
            <div className="card-content">
                <h3 className="card-title">{ title }</h3>
                <p className="card-price">${ price }</p>
                <button className="card-button" onClick={ handleClick }>
                    { isClicked ? "Added to Bag" : "Add to Bag" }
                </button>
          </div>
        </div>
    // </div>
    )
}