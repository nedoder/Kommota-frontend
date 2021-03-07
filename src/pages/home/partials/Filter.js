import React from 'react'
import axios from 'axios'

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
      <div>
        <div>
          <h3>Kategorije</h3>
          <input
            type="checkbox"
            name="category"
            value="Dnevna soba"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Dnevna soba</label>
          <input
            type="checkbox"
            name="category"
            value="Stolice"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Stolice</label>
          <input
            type="checkbox"
            name="category"
            value="Stolovi"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Stolovi</label>
          <input
            type="checkbox"
            name="category"
            value="Ormari"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Ormari</label>
          <input
            type="checkbox"
            name="category"
            value="Spavaća soba"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Spavaća soba</label>
          <input
            type="checkbox"
            name="category"
            value="Police"
            onChange={this.onInputChange}
          />
          <label htmlFor="vehicle1"> Police</label>
        </div>
        <div>
          <h3>Cijena</h3>
          <div>
            <label htmlFor="minprice">Min cijena</label>
            <input
              type="number"
              name="minprice"
              onChange={this.onInputChange}
            />
            <label htmlFor="maxprice">Max cijena</label>
            <input
              type="number"
              name="maxprice"
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label htmlFor="minquantity">Min kolicina</label>
            <input
              type="number"
              name="minquantity"
              onChange={this.onInputChange}
            />
            <label htmlFor="maxquantity">Max kolicina</label>
            <input
              type="number"
              name="maxquantity"
              onChange={this.onInputChange}
            />
          </div>
          <button type="button" onClick={this.onFormSubmit}>
            Filtriraj
          </button>
        </div>
      </div>
    )
  }
}
export default Filter