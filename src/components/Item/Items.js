import './Item.css';
import { Link } from 'react-router-dom';
//Item recibe props y las muestra por pantalla
const Item = ({item}) => {

    const { id, name, img, price, stock } = item
    return(
        <div className='card'>
            <Link to={`/item/${id}`}>
            <h1>{name}</h1>
            <img src={img} alt='' width='700px' height='300px'/>
            <h2>${price}</h2>
            <h1>{stock}</h1>
            </Link>
        </div>
    )
}

export default Item;