import React from 'react';
import './Price.css';
interface Props {
  price:number;
}


const Price:React.FC<Props> = (props) => {
  return (
    <div className="price-block">
      <p className="price-text">Price:</p>
      <span className="price">{props.price} KGS</span>
    </div>
  );
};

export default Price;