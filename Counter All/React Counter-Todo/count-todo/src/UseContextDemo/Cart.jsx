import React,{useContext} from 'react';
import CartContext from './Context/Cart';



const Cart = () => {
    const cart =useContext(CartContext); //useContext ko cart k name me assign karre and createContext me ka CartContext component ko import karre & use bi karre, * vaha k items lene k liye first cart. use karna padta jaisa button me use kare 

    const total = cart.items.reduce((a,b)=>a+b.price,0);
    //Total ko calculate karre using cart ko reduce karre 1+1 adding intially 0
  return (
    <div className="cart">
        {/*Rendering dynamically stored data from UseContext */}
        <h1>Cart Details</h1>
        {cart && cart.items.map(item =>
             <li>
            {item.name} - $ {item.price}
        </li>
    )}
        


        <h4>Total Bill :- $ {total}</h4> {/*Total ko yaha render karre */}
        </div>
  )
}

export default Cart