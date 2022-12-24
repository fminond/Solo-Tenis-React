import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const description = product.description.slice(0, 100);
  const img = useGetItemImg(product.img);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  if (!img) {
    return <Loading />;
  }

  return (
    <div
      onClick={handleNavigate}
    >
      <Card style={{ width: '18rem' }} className="cardStyle">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          {`${description} (more)`}

          </Card.Text>
          <Card.Text><span><strong>${product.price}</strong></span></Card.Text>
          <Card.Text><span>
            {product.stock === 0
              ? " Run out of stock"
              : quantityAdded
                ? ` Added: ${quantityAdded}`
                : ` Stock: ${product.stock}`}
          </span></Card.Text>
          <Button variant="primary">Check Item</Button>
        </Card.Body>
      </Card>


    </div>
  );
};