import React from 'react';
import './nameimg.css';

interface Props{
  name:string;
  image:string;
  price:number;
  key:string;
  onAdd:React.MouseEventHandler;
}

const NameImg:React.FC<Props> = (props) => {
  return (
    <div className="item-wrapper click" onClick={props.onAdd}>
      <img src={props.image} alt={props.name} className="img" />
      <p className="item-text">{props.name}-{props.price}KGS </p>
    </div>
  );
};

export default NameImg;