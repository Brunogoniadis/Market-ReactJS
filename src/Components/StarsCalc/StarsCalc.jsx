import React, { useEffect, useState } from 'react';

import star from '../../assets/fullStar.png';
import halfstar from '../../assets/halfStar.png';
import { StarsWrapper } from './style'

export const StarsCalc = ({rating}) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        calculateStars();
        console.log('stars', rating)
    }, [rating]);


    const calculateStars = () => {
        const ratingInt = Math.floor(rating);
        const ratingDecimal = (rating - ratingInt).toFixed(2).substring(1);

        const starsArray = [];

        for (let i = 0; i < ratingInt; i++) {
            starsArray.push(<img key={i} src={star} alt="Full Star" />);
        }

        if (ratingDecimal >= 0.5) {
            starsArray.push(<img key="half" src={halfstar} alt="Half Star" />);
        }

        setStars(starsArray);
    };


    return (
        <StarsWrapper>
            {stars}
        </StarsWrapper>
    );
}
