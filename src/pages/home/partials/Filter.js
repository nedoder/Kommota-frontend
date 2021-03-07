import React from 'react'
import axios from 'axios'
import './Filter.css'

class Filter extends React.Component {
  state = {
    category: [],
    minprice: '',
    maxprice: '',
    minquantity: '',
    maxquantity: '',
  }

  onInputChange = (event) => {
    if (event.target.name !== 'category') {
      this.setState({
        [event.target.name]: event.target.value,
      })
    } else {
      const newCategory = []
      const arr = document.getElementsByName('category')
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
          newCategory.push(arr[i].value)
        }
      }
      this.setState({
        category: newCategory,
      })
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    var obj = this.state

    if (obj.category.length === 0) {
      delete obj.category
    } else if (obj.minprice == '' && obj.maxprice == '') {
      delete obj.minprice
      delete obj.maxprice
    } else if (obj.minquantity == '' && obj.maxquantity == '') {
      delete obj.minquantity
      delete obj.maxquantity
    } else {
      var newObj = {}
      if (obj.category.length !== 0) {
        newObj.category = obj.category
      }
      if (obj.maxprice) {
        obj.maxprice = Number(obj.maxprice)
      }
      if (obj.minprice) {
        obj.minprice = Number(obj.minprice)
        var prices = []
        prices.push(obj.minprice, obj.maxprice)
        newObj.price = prices
      }
      if (obj.maxquantity) {
        obj.maxquantity = Number(obj.maxquantity)
      }
      if (obj.minquantity) {
        obj.minquantity = Number(obj.minquantity)
        var quantities = []
        quantities.push(obj.minquantity, obj.maxquantity)
        newObj.quantity = quantities
      }
      console.log(newObj)

      axios
        .post('http://kommota.herokuapp.com/filter', newObj)
        .then((response) => {
          console.log(response.data)
          this.props.filter1(response.data)
        })
    }
  }

  render() {
    return (
      <div  className="filter">
        <div>
          <h3 className="title">Kategorije</h3>
          <input
            type="checkbox"
            name="category"
            value="Dnevna soba"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Dnevna soba</label>
          <input
            type="checkbox"
            name="category"
            value="Stolice"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Stolice</label>
          <input
            type="checkbox"
            name="category"
            value="Stolovi"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Stolovi</label>
          <input
            type="checkbox"
            name="category"
            value="Ormari"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Ormari</label>
          <input
            type="checkbox"
            name="category"
            value="Spavaća soba"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Spavaća soba</label>
          <input
            type="checkbox"
            name="category"
            value="Police"
            className = "input"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1" className="labels"> Police</label>
        </div>
        <div>
          <div className="filterInput">
            <label htmlFor="minprice" className="labels">Min cijena</label>
            <input
              type="number"
              name="minprice"
              className = "input"
              onChange={this.onInputChange}
            />
            <label htmlFor="maxprice" className="labels">Max cijena</label>
            <input
              type="number"
              name="maxprice"
              className = "input"
              onChange={this.onInputChange}
            />
          </div>
          <div className="filterInput">
            <label htmlFor="minquantity" className="labels">Min kolicina</label>
            <input
              type="number"
              name="minquantity"
              className = "input"
              onChange={this.onInputChange}
            />
            <label htmlFor="maxquantity" className="labels">Max kolicina</label>
            <input
              type="number"
              name="maxquantity"
              className = "input"
              onChange={this.onInputChange}
            />
          </div>
          <button type="button" onClick={this.onFormSubmit} className="filterBtn">
            Filtriraj
          </button>
        </div>
      </div>
    )
  }
}
export default Filter