import Item from "../Item/Items";

//ItemList recibe el estado que guarda tus productos, los mapea, y por cada producto
//llama a Item pasandole las props para que este los muestre
const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.length > 0 && items.map( item => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
