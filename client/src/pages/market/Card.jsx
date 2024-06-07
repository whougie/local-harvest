import React, { useState } from "react"

export default function Card({ image, title, price }){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        console.log("I got clicked");
    };

    return (
        <div className="productcard col-md-4">
          <div className="card">
            <img src={ image } alt={ title } className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{ title }</h3>
                <p className="card-price">${ price }</p>
                <button className="card-button" onClick={ handleClick }>
                    { isClicked ? "Added to Bag" : "Add to Bag" }
                </button>
          </div>
        </div>
    </div>
    )
}