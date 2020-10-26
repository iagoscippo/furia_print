import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

// parametros iniciales
let available = 15;
let initial = 1;

// estados
let [counter, setCounter] = useState(initial);
let [stock, setStock] = useState(available);
let [cart, setCart] = useState(0);
let [exceed,setExceed] = useState(false);

/*
useEffect(() => {
  console.log("Initialized");
}, []); */

// handlers o callbacks

const handleClick = (amount)=>{
  return ()=>{
    let total = (amount < 0) ? 0 : amount;
    let limit = (stock < total) ? stock : total;
    setCounter(limit);
    setExceed(((stock - 1)< total) || (total === 0) ); //opcional
  }
 }

 const  handleAdd = ()=>{
  if (stock > 0) {
    let resto = stock - counter;
    setCart(counter + cart);
    setStock(resto);
    setCounter( (initial > resto) ? resto : initial); //opcional 
  } else {
    alert('no hay más items');
  }
 }

// Rendering

 const info = {
  width: '100%',
  marginTop: 50,
  textAlign: 'center'
 }

let itemCountProps = {stock, initial, handleAdd, handleClick, counter, exceed};

 return (
  <div className="App">
    <NavBar />
      <div className="info" style={info}>
        <ItemCount {...itemCountProps}/>
        <h3>stock: {stock}</h3>
        <h3>inicial: {initial}</h3>
        <h3>carrito: {cart}</h3>
        <ItemListContainer title="FURIA PRINT"/>
    </div>
  </div>
)
};

export default App;