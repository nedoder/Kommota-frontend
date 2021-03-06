import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom"; 
import Slider from "react-slick";
import './ProductsGrid.css';
import axios from 'axios';

class AllProducts extends React.Component {
    state = {
    allProducts: [],
    sliderSettings : {
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
                    slidesToScroll: 2,
                    dots: false
                }
            }
            
        ]
    }
    
    }
    componentDidMount() {
    axios({
        method: 'get',
        url: 'https://kommota.herokuapp.com/products'
      }).then((response) => {
        response.data.map((data) => {
            let  image = data.image.slice(0,-18);
            image =  image.replace("file/d/", "thumbnail?id=");
            data.image = image;
        })
        this.setState({
            allProducts: response.data,
          })
      })
    }
    render() {
    return (
            
            <Slider {...this.state.sliderSettings} className="products-grid">
            
            {this.state.allProducts.map((product) => {
                
                    return (
                        <Link to={`/product/${product._id}`} key={product._id}>
                        <React.Fragment>
                        
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

export default AllProducts;
