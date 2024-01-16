import React from 'react'
import { CarouselBanner } from '../Components/Carousel-Banner/Carousel-Banner'
import { CardGrid } from '../Components/CardGrid/CardGrid'
import { MainDiv } from './style'
import { CarouselCategories } from '../Components/CarouselCategories/CarouselCategories'
import { Suggestions } from '../Components/Suggestions/Suggestions'

export const Home = () => {
    return (
        <MainDiv>
            <CarouselBanner />
            <div className='grid-items'>
                <CardGrid title="title" />
                <CardGrid title="title" />
                <CardGrid title="title" />
            </div>

            <CarouselCategories />

            <Suggestions/>
        </MainDiv>
    )
}
