import React from 'react';
import './Gamburger.css';
interface Props {
  count:number[];
}

const Gamburger:React.FC<Props> = (props) => {
  let Salad:string = 'Salad';
  let Meat:string = 'Meat';
  let Cheese:string = 'Cheese';

  if(props.count[0] < 1) {
   Meat = Meat + ' none'
  }
  if(props.count[1] < 1) {
    Cheese = Cheese + ' none'
  }
  if(props.count[2] < 1) {
    Salad = Salad + ' none'
  }

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <div className={Salad}></div>
      <div className={Cheese}></div>
      <div className={Meat}></div>
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Gamburger;