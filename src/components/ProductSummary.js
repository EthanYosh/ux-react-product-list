import React from "react";
import { withRouter} from "react-router-dom";

function ProductSummary(props) {

const userClicksProduct = (productID) => {
  props.history.push(`/products/${productID}`)
}

  return (
    <div 
      onClick={() => userClicksProduct(props.product.id)} 
      className="productSummary"
    >


      {props.product.name} - {props.product.price}{" "}
      <span className="productArrow">></span>
    </div>
  );
}

export default withRouter(ProductSummary);