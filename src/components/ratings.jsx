import {useState} from "react";
import React from 'react';
import "./ratings.scss";

//stateful function component

const ratings = (props) => {

    const {max_rating} = props;
    const ratingValues = new Array(max_rating).fill(false);
    const [rating, setRating] = useState(0);

    return (
        <div className="rating">
            {
                ratingValues.map((star, index) => {
                    return <span key={index} className={isRated(index)} onClick={() => setRating(max_rating - index)}>☆</span>
                })
            }
        </div>
    );

    function isRated(position) {
        let starClass = "star";
        if (position < rating) {
            starClass = starClass + " selected";
        }
        return starClass;
    }
};

export default ratings;