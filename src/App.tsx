import React, {useState} from 'react';
import './App.css';
import meatImage from '../src/assets/Meat.png';
import cheeseImage from '../src/assets/Cheese.png';
import baconImage from '../src/assets/Bacon.png';
import saladImage from '../src/assets/salad.png';
import Gamburger from "./Gamburger/Gamburger";
import Items from "./Items/Items";
import Price from "./Price/Price";


function App() {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
]);

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage,id:'1'},
    {name: 'Cheese', price: 50, image: cheeseImage,id:'2'},
    {name: 'Salad', price: 10, image: saladImage,id:'3'},
    {name: 'Bacon', price: 60, image: baconImage,id:'4'},
  ];
  console.log(INGREDIENTS);

  return (
    <div className="App">
      <Price/>
      <div className="constructor">
        <div className="items">
          {INGREDIENTS.map((item) =>
            <Items
              name={item.name}
              image={item.image}
              price={item.price}
              key={item.id}
              count={0}

              />)}
        </div>

        <Gamburger/>
      </div>

    </div>
  );
}

export default App;
