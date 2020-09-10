import React from 'react';
import CarouselContent from './CarouselContent';
import FlexContent from './FlexContent';
import { data } from '../../assets/data'  

const HomePage = () => {
    return (
        <>
        <CarouselContent />
        <FlexContent data={data} />
        </>
    )
}
export default HomePage;