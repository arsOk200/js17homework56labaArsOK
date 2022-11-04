import React from 'react';
import './countbtn.css';

interface Props{
  count:number;
  key:string;
  onDelete:React.MouseEventHandler;
}
const CountBtn:React.FC<Props> = (props)=> {
  return (
    <div className="item-container">
      <strong className="item-text">x{props.count}</strong>
      <button className="btn" onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default CountBtn;