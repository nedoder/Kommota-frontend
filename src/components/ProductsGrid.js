import React from "react";
import Card from "./Card";

import Slider from "react-slick";
import './ProductsGrid.css';

function ProductsGrid(props) {
    const sliderSettings = {
        infinite: false,
        dots: true,
        swipeToSlide: true,
        speed: 400,
        mobileFirst: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        props.listAllProducts ?
            <div className="products-grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div> :
            <Slider {...sliderSettings} className="products-grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Slider>

    );
}

export default ProductsGrid;
