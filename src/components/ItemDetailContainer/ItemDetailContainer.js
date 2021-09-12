import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';

//ItemDetailContainer recibe el id desde la URL con useParams(), crea una promesa, la resuelve
//y con el resultado de la promesa setea el estado local. Este estado se lo pasa a ItemDetail
const ItemDetailContainer = () => { 

    const [localProduct, setLocalProduct] = useState({});
    const { id } = useParams();
    

    useEffect(  () => {
        const productList = [
            {
              id: 1, 
              name: 'Computadora Mac',
              price: 300000,
              img:"./images/apple1.jpeg",
              description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."
            },
            {
              id: 2, 
              name: 'Computadora Lenovo',
              price: 250000,
              img:"./images/lenovo-01-2.jpeg",
              description:"Computadora Lenovo. Color gris oscuro, sin usar y con 258 espacio de memoria."
             },
             {
              id: 3, 
              name: 'Computadora Asus',
              price: 200000,
              img:"./images/asus.jpg",
              description:"Computadora Asus. Color gris claro, espaciado, usada con caja abierta, 13 inch ."
             }]

        const filteredProduct = productList.find(item => item.id == id);


        const getProducto = () =>{
         return new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve(filteredProduct);
                }, 2000);
            });
        }
        getProducto()
            .then(result =>setLocalProduct(result))
    },[])

    return (
        <div className='row'>
            <ItemDetail item = {localProduct} />
        </div>
      )
};

export default ItemDetailContainer;