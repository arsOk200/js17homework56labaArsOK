import React from 'react';
import './items.css';

interface Props{
  name:string;
  price:number;
  image:string;
  key:string;
  count:number;
  // onDelete:React.MouseEventHandler;
  // onAdd:React.MouseEventHandler;
}

const Items:React.FC<Props> = (props) => {
  return (

      <div className="item">
        <div className="item-wrapper">
          <img src={props.image} alt={props.name} className="img"/>
            <p className="item-text">{props.name}</p>
        </div>
        <div className="item-wrapper">
          <strong className="item-text">{props.price}KGS x{props.count}</strong>
          <button className="btn">Delete</button>
        </div>
      </div>
  );
};

export default Items;