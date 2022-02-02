import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './FoodCard.css';


function FoodCard() {
    const [food, setFood] = useState([
        {
            name: "Pizza",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg",
        },
        {
            name: "Ramen",
            url: "http://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760",
        },
        {
            name: "Steak",
            url: "https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12.jpg",
        }
    ]);
    return (
    <div>
        <div className="foodCard__container">
            {food.map((dish) => (
                <TinderCard
                    className="swipe"
                    key={dish.name}
                    >
                        <div
                        style={{backgroundImage: `url(${dish.url})`}}
                        className="card">
                            <h3>{dish.name}</h3>
                        </div>
                </TinderCard>
            ))}
        </div>
    </div>
    );
}

export default FoodCard;
