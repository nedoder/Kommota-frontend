import React from "react";

import Headline from "../../../components/Headline";
import './PopularCategories.css';
import Slider from "react-slick";

function PopularCategories() {
    const sliderSettings = {
        arrows: true,
        infinite: false,
        swipeToSlide: true,
        speed: 400,
        mobileFirst: true,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 1174,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };
    return (
        <section className="container py-50">
            <Headline headlineTitle='Popularne kategorije'/>
            <Slider {...sliderSettings} className="popular-categories">
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M4.5 12.5V10.607C4.5 9.61099 3.82 8.68699 2.836 8.52699C2.54896 8.47825 2.25475 8.49273 1.97388 8.56943C1.69302 8.64612 1.43228 8.78318 1.20985 8.97105C0.987422 9.15891 0.80867 9.39305 0.686067 9.65712C0.563464 9.9212 0.499965 10.2088 0.5 10.5C0.5 11.238 0.905 11.876 1.5 12.223V16C1.5 16.3978 1.65804 16.7793 1.93934 17.0607C2.22064 17.342 2.60218 17.5 3 17.5H21C21.3978 17.5 21.7794 17.342 22.0607 17.0607C22.342 16.7793 22.5 16.3978 22.5 16V12.223C22.8504 12.0233 23.132 11.7219 23.3074 11.3586C23.4828 10.9954 23.5438 10.5875 23.4824 10.1888C23.4209 9.79019 23.2399 9.41959 22.9632 9.12606C22.6866 8.83254 22.3273 8.62991 21.933 8.54499C21.6405 8.48051 21.3373 8.48248 21.0457 8.55075C20.7541 8.61901 20.4815 8.75184 20.248 8.93944C20.0145 9.12704 19.8261 9.36464 19.6967 9.63472C19.5672 9.9048 19.5 10.2005 19.5 10.5V12.5"
                                  stroke="#BFC4CA"/>
                            <path d="M11 14.5H4.5C4.23478 14.5 3.98043 14.3946 3.79289 14.2071C3.60536 14.0196 3.5 13.7652 3.5 13.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5H11C11.2652 12.5 11.5196 12.6054 11.7071 12.7929C11.8946 12.9804 12 13.2348 12 13.5C12 13.7652 11.8946 14.0196 11.7071 14.2071C11.5196 14.3946 11.2652 14.5 11 14.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M19.5 14.5H13C12.7348 14.5 12.4804 14.3946 12.2929 14.2071C12.1054 14.0196 12 13.7652 12 13.5C12 13.2348 12.1054 12.9804 12.2929 12.7929C12.4804 12.6054 12.7348 12.5 13 12.5H19.5C19.7652 12.5 20.0196 12.6054 20.2071 12.7929C20.3946 12.9804 20.5 13.2348 20.5 13.5C20.5 13.7652 20.3946 14.0196 20.2071 14.2071C20.0196 14.3946 19.7652 14.5 19.5 14.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M2.761 8.517C4.537 5.55 8.01 4.5 12 4.5C15.987 4.5 19.455 5.555 21.233 8.517" stroke="#BFC4CA"/>
                            <path d="M3.5 17.5V18.5C3.5 18.7652 3.60536 19.0196 3.79289 19.2071C3.98043 19.3946 4.23478 19.5 4.5 19.5C4.76522 19.5 5.01957 19.3946 5.20711 19.2071C5.39464 19.0196 5.5 18.7652 5.5 18.5V17.5"
                                  stroke="#BFC4CA"/>
                            <path d="M18.5 17.5V18.5C18.5 18.7652 18.6054 19.0196 18.7929 19.2071C18.9804 19.3946 19.2348 19.5 19.5 19.5C19.7652 19.5 20.0196 19.3946 20.2071 19.2071C20.3946 19.0196 20.5 18.7652 20.5 18.5V17.5"
                                  stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Dnevna soba
                    </h3>
                </a>
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M19.5 11C19.5 14.59 15.59 16.5 12 16.5C8.41 16.5 4.5 14.59 4.5 11C4.5 7.41 8.41 0.5 12 0.5C15.59 0.5 19.5 7.41 19.5 11Z" stroke="#BFC4CA"/>
                            <path d="M15.5 10.5C14.5 10.5 13.5 11.5 12 11.5C10.5 11.5 9.5 10.5 8.5 10.5C8.23478 10.5 7.98043 10.6054 7.79289 10.7929C7.60536 10.9804 7.5 11.2348 7.5 11.5C7.5 12.5 9 13.5 12 13.5C15 13.5 16.5 12.5 16.5 11.5C16.5 11.2348 16.3946 10.9804 16.2071 10.7929C16.0196 10.6054 15.7652 10.5 15.5 10.5Z" stroke="#BFC4CA"/>
                            <path d="M7.63 15.511L5.5 23.5" stroke="#BFC4CA"/>
                            <path d="M16.37 15.511L18.5 23.5" stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Stolice
                    </h3>
                </a>
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M0.5 3.5H23.5V5.5H0.5V3.5Z" stroke="#BFC4CA"/>
                            <path d="M1.5 5.5H22.5V7.5H1.5V5.5Z" stroke="#BFC4CA"/>
                            <path d="M2.5 7.5V20.5H3.5L4.5 7.5" stroke="#BFC4CA"/>
                            <path d="M21.5 7.5V20.5H20.5L19.5 7.5" stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Stolovi
                    </h3>
                </a>
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M19 21.5H5C4.60218 21.5 4.22064 21.342 3.93934 21.0607C3.65804 20.7794 3.5 20.3978 3.5 20V2C3.5 1.60218 3.65804 1.22064 3.93934 0.93934C4.22064 0.658035 4.60218 0.5 5 0.5H19C19.3978 0.5 19.7794 0.658035 20.0607 0.93934C20.342 1.22064 20.5 1.60218 20.5 2V20C20.5 20.3978 20.342 20.7794 20.0607 21.0607C19.7794 21.342 19.3978 21.5 19 21.5Z"
                                  stroke="#BFC4CA"
                            />
                            <path d="M12 0.5V21.5" stroke="#BFC4CA"/>
                            <path d="M13.5 11.5V12.5" stroke="#BFC4CA"/>
                            <path d="M10.5 11.5V12.5" stroke="#BFC4CA"/>
                            <path d="M5.5 21.5V23.5H7.5V21.5" stroke="#BFC4CA"/>
                            <path d="M16.5 21.5V23.5H18.5V21.5" stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Ormari
                    </h3>
                </a>
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M22 18.5H2C1.60218 18.5 1.22064 18.342 0.93934 18.0607C0.658035 17.7794 0.5 17.3978 0.5 17V15C0.5 14.6022 0.658035 14.2206 0.93934 13.9393C1.22064 13.658 1.60218 13.5 2 13.5H22C22.3978 13.5 22.7794 13.658 23.0607 13.9393C23.342 14.2206 23.5 14.6022 23.5 15V17C23.5 17.3978 23.342 17.7794 23.0607 18.0607C22.7794 18.342 22.3978 18.5 22 18.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M1.5 13.585V5C1.5 4.60218 1.65804 4.22064 1.93934 3.93934C2.22064 3.65804 2.60218 3.5 3 3.5H21C21.3978 3.5 21.7794 3.65804 22.0607 3.93934C22.342 4.22064 22.5 4.60218 22.5 5V13.586"
                                  stroke="#BFC4CA"/>
                            <path d="M2.5 18.5V20.5H3.5L4.5 18.5" stroke="#BFC4CA"/>
                            <path d="M21.5 18.5V20.5H20.5L19.5 18.5" stroke="#BFC4CA"/>
                            <path d="M3.5 12.5C3.948 11.86 4.556 11.5 5.19 11.5H8.81C9.444 11.5 10.052 11.86 10.5 12.5C10.052 13.14 9.444 13.5 8.81 13.5H5.19C4.556 13.5 3.948 13.14 3.5 12.5V12.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M13.5 12.5C13.948 11.86 14.556 11.5 15.19 11.5H18.81C19.444 11.5 20.052 11.86 20.5 12.5C20.052 13.14 19.444 13.5 18.81 13.5H15.19C14.556 13.5 13.948 13.14 13.5 12.5V12.5Z"
                                  stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Spavaća soba
                    </h3>
                </a>
                <a href="#" className="popular-categories__box">
                    <svg className="popular-categories__box-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M22 12.5H2C1.60218 12.5 1.22064 12.342 0.93934 12.0607C0.658035 11.7794 0.5 11.3978 0.5 11V6C0.5 5.60218 0.658035 5.22064 0.93934 4.93934C1.22064 4.65804 1.60218 4.5 2 4.5H22C22.3978 4.5 22.7794 4.65804 23.0607 4.93934C23.342 5.22064 23.5 5.60218 23.5 6V11C23.5 11.3978 23.342 11.7794 23.0607 12.0607C22.7794 12.342 22.3978 12.5 22 12.5V12.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M20 10.5H4C3.60218 10.5 3.22064 10.342 2.93934 10.0607C2.65804 9.77936 2.5 9.39782 2.5 9V8C2.5 7.60218 2.65804 7.22064 2.93934 6.93934C3.22064 6.65804 3.60218 6.5 4 6.5H20C20.3978 6.5 20.7794 6.65804 21.0607 6.93934C21.342 7.22064 21.5 7.60218 21.5 8V9C21.5 9.39782 21.342 9.77936 21.0607 10.0607C20.7794 10.342 20.3978 10.5 20 10.5Z"
                                  stroke="#BFC4CA"/>
                            <path d="M5.5 8.5H7.5" stroke="#BFC4CA"/>
                            <path d="M16.5 8.5H18.5" stroke="#BFC4CA"/>
                            <path d="M3.5 12.5V19.5H4.5L5.5 12.5" stroke="#BFC4CA"/>
                            <path d="M20.5 12.5V19.5H19.5L18.5 12.5" stroke="#BFC4CA"/>
                        </g>
                    </svg>
                    <h3 className="popular-categories__box-title">
                        Police
                    </h3>
                </a>
            </Slider>
        </section>
    );
}

export default PopularCategories;
