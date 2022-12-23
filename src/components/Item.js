import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";

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
      <div className="box">
        <img
          src={img}
          alt="Products"
        />
        <span className="nameProduct">
          {product.name}
        </span>
        <hr className="mb-1" />
        <p className="mb-1">
          {`${description} (more)`}
          </p>
      </div>
      <div >
        <hr className="mb-1" />
        <div>
          <span><strong>${product.price}</strong></span>
          <span>
            {product.stock === 0
              ? " Run out of stock"
              : quantityAdded
              ? ` Added: ${quantityAdded}`
              : ` Stock: ${product.stock}`}
          </span>
        </div>
      </div>
    </div>
  );
};