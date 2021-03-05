import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom"; 
import Slider from "react-slick";
import './ProductsGrid.css';
import axios from 'axios';

class GiveawayProducts extends React.Component {
    state = {
    giveawayProducts: [],
    sliderSettings: {
        infinite: false,
        dots: true,
        swipeToSlide: true,
        speed: 400,
        mobileFirst: true,
        slidesToShow: 4,
        slidesToScroll: 3,
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
    }
    
    }
    componentDidMount() {
    axios({
        method: 'post',
        url: 'https://kommota.herokuapp.com/giveaway',
        data: { givaway : true },
      }).then((response) => {
        console.log(response.data)
        this.setState({
            giveawayProducts: response.data,
          })
      })
    }
    render() {
    return (
        
            <Slider {...this.state.sliderSettings} className="products-grid">
            {this.state.giveawayProducts.map((product) => {
                    return (
                    <Link to={`/product/${product._id}`}>
                    <React.Fragment key={product._id}>
                    <Card
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    />
                    </React.Fragment>
                    </Link>
                )

          })}
         
            </Slider>
    );
        }
}

export default GiveawayProducts;
