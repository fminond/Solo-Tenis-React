import { raqueta } from '../assets/IMG/portada-tenis.jpg';
const Item = ({ listProduct }) => {
    return (

        <div>
            <img src={listProduct.image} />
            <li>{listProduct.name}</li>
        </div>
    )

}

export default Item;