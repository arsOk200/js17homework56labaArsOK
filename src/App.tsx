import React, {useState} from 'react';
import './App.css';
import meatImage from '../src/assets/Meat.png';
import cheeseImage from '../src/assets/Cheese.png';
import baconImage from '../src/assets/Bacon.png';
import saladImage from '../src/assets/salad.png';
import Gamburger from "./Gamburger/Gamburger";
import Price from "./Price/Price";
import NameImg from "./Name-Img/ NameImg";
import CountBtn from "./CountBtn/CountBtn";



function App() {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id:'1'},
    {name: 'Cheese', count: 0, id:'2'},
    {name: 'Salad', count: 0,id:'3'},
    {name: 'Bacon', count: 0,id:'4'},
]);

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage,id:'1'},
    {name: 'Cheese', price: 50, image: cheeseImage,id:'2'},
    {name: 'Salad', price: 10, image: saladImage,id:'3'},
    {name: 'Bacon', price: 60, image: baconImage,id:'4'},
  ];

  const [price, setPrice] = useState([
    {price: 30},
  ]);

  if(price[0].price < 0) {
    const priceCopy = [...price];
    const itemCopy = priceCopy[0];
    itemCopy.price = 30 ;
    setPrice([itemCopy]);
  }



  const onAdd = (id:string) => {
      setIngredients(prev => prev.map(item => {
        return item.id ===id ? {
          ...item,
          count: item.count + 1,
        }:item;
      }));
    const priceCopy = [...price];
    const itemCopy = priceCopy[0];
    itemCopy.price = INGREDIENTS[parseInt(id)-1].price + itemCopy.price ;
    setPrice([itemCopy]);

  };
  const onDelete = (id:string) => {
    setIngredients(prev => prev.map(item => {
      return item.id ===id ? {
        ...item,
        count: item.count--,
      }:item;
    }));
    const priceCopy = [...price];
    const itemCopy = priceCopy[0];
    itemCopy.price = itemCopy.price - INGREDIENTS[parseInt(id)-1].price ;
    setPrice([itemCopy]);
  };


  return (
    <div className="App">
      <Price price={price[0].price}/>
      <div className="constructor">
        <div className="items">
          <div className="item">
            <div className="imgs">
              {INGREDIENTS.map((item)=>
                <NameImg
                  price={item.price}
                  name={item.name}
                  image={item.image}
                  key={item.id}
                  onAdd={()=> onAdd(item.id)}/>)}
            </div>
            <div className="btns">
              {ingredients.map((item) =>
                <CountBtn
                  count={item.count}
                  key={item.id}
                  onDelete={()=>onDelete(item.id)}/>
              )}
            </div>
              </div>
        </div>

        <Gamburger count={ingredients.map((item) => {
          return item.count;
        })}/>
      </div>

    </div>
  );
}

export default App;
