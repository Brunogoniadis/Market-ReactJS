import React from 'react'
import { CarouselBanner } from '../../Components/Carousel-Banner/Carousel-Banner'
import { CardGrid } from '../../Components/CardGrid/CardGrid'
import { MainDiv } from './style'
import { CarouselCategories } from '../../Components/CarouselCategories/CarouselCategories'
import { Suggestions } from '../../Components/Suggestions/Suggestions'
import { UseHookBestItem } from '../../Service/CustomHooks'

export const Home = () => {
    const { bestItem: bestWatch, loading: loadingWatch, error: errorWatch } = UseHookBestItem('womens-watches');
    const { bestItem: bestSunglasses, loading: loadingSunglasses, error: errorSunglasses } = UseHookBestItem('sunglasses');
    const { bestItem: bestCards, loading: loadingCards, error: errorCards } = UseHookBestItem('cards');

    return (
        <MainDiv>
            <CarouselBanner />
            <div className='grid-items'>
                <CardGrid title="Best on Watch" img={bestWatch ? bestWatch.thumbnail : ''} />
                <CardGrid title="Best on Sunglasses" img={bestSunglasses ? bestSunglasses.thumbnail : ''} />
                <CardGrid />
            </div>

            <CarouselCategories />

            <Suggestions />
        </MainDiv>
    );
};