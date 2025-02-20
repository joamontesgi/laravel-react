import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table() {
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                setProducts(data);
            })
            .catch(function (err) {
                console.log('Error:', err);
            });
    }

    function deleteProducts(id) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                fetchProducts();
            })
            .catch(function (err) {
                console.log('Error:', err);
            });
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Lista de Productos</h2>
            <button className="btn btn-primary mb-3" onClick={fetchProducts}>
                Obtener Productos
            </button>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(function (product) {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteProducts(product.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
