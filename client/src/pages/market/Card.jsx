import React, {useState, useEffect } from "react";
import { useShoppingCart } from "../../providers/ShoppingCartContext";
import './Market.css';
let total = JSON.parse(sessionStorage.getItem('cart')) || [];

export default function Card({ image, title, price, description }) {
    const { addToCart } = useShoppingCart();
    const [cart, setCart] = useState()

    const handleClick = (e) => {
        addToCart({ image, title, price, description });
        // window.location.href
        console.log("Item added to cart:", title);

    // function addToCart(e) {
        total.push({ price: e.target.id, title: e.target.name, quantity: 1 })
        setCart(total)
        // window.location.href = '/bag'
    // }
    };
    useEffect(() => {
        if (cart) {
            sessionStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    return (
        <div className="card col-3 m-2 p-2 text-center">
            <img src={image} alt={title} className="card-image card-img-top" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <button className="card-button" id = {price} name={title} onClick={handleClick} >
                    Add to Bag
                </button>
            </div>
        </div>
    );
}