import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const products = [
  {
    id: 1,
    name: "Computadora Mac",
    price: 300000,
    img: "https://i.blogs.es/095562/mac/1366_2000.jpg",
    category: "Apple"
  },

  {
    id: 2,
    name: "Computadora Lenovo",
    price: 250000,
    img: "./images/lenovo-01-2.jpeg",
    category: "Otros"
  },

  {
    id: 3,
    name: "Computadora Asus",
    price: 200000,
    img: "./images/asus.jpg",
    category: "Otros"
  },
];
const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

//ItemListContainer define un estado y una promesa, resuelve la promesa
//luego de dos segundos, y setea el estado con los productos que devuelve
//la promesa. Despues, este mismo estado se lo pasa a ItemList
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    getItems()
      .then((result) => setItems(result))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(items)

  return (
    <section className="container ">
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
