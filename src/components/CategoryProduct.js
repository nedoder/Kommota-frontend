import React from 'react'
import Card from './Card'
import PopularCategories from '../pages/home/partials/PopularCategories'
import Filter from "../pages/home/partials/Filter"
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import './ProductsGrid.css'
import axios from 'axios'

class CategoryProduct extends React.Component {
  state = {
    allProducts: [],
    showProducts: [],
    sliderSettings: {
      infinite: false,
      dots: false,
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
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://kommota.herokuapp.com/products',
    }).then((response) => {
      response.data.map((data) => {
        let image = data.image.slice(0, -18)
        image = image.replace('file/d/', 'thumbnail?id=')
        data.image = image
      })
      this.setState({
        allProducts: response.data,
        showProducts: response.data,
      })
    })
  }

  filter = (e) => {
    let newProducts = this.state.allProducts.filter(
      (product) => product.category == e,
    )
    this.setState({
      showProducts: newProducts,
    })
  };

  filter1 = (newProducts) => {
    newProducts.map((data) => {
      let image = data.image.slice(0, -18)
      image = image.replace('file/d/', 'thumbnail?id=')
      data.image = image
    })
    this.setState({
      showProducts: newProducts,
    })
  };


  render() {
    return (
      <>
        <PopularCategories filter={this.filter} />
        {/* <Filter filter1={this.filter1} /> */}
        <Slider {...this.state.sliderSettings} className="products-grid">
          {this.state.showProducts.map((product) => {
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
      </>
    )
  }
}

export default CategoryProduct