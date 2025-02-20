import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'

function Form() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const guardar = () => {
    const newProduct = {
      title: title,
      price: price,
      description: description
    }

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <label htmlFor="title">Ingrese el título:</label>
      <input
        type="text"
        id="title"
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="price">Ingrese el precio:</label>
      <input
        type="number"
        id='price'
        className='form-control'
        value={price}
        min={0}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="description">Ingrese la descripción:</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        className='form-control'
        placeholder='Ingrese la descripción del producto'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className='btn btn-primary mt-3' onClick={guardar}>
        Guardar
      </button>
    </div>
  )
}

export default Form
