import React,{useContext} from 'react';
import CartContext from './Context/Cart';
//useContext used for using the context

const Items =(props)=>{ // Nichhe values dainamically change karne k liye props ko use karte hai app.js me values add karte hai yaha bhejte props se
    const cart =useContext(CartContext); //useContext ko cart k name me assign karre and createContext me ka CartContext component ko import karre & use bi karre, * vaha k items lene k liye first cart. use karna padta jaisa button me use kare 
    console.log("Cart",cart);
    return(
        <div className='container'>
            <h3>{props.name}</h3>
            <p>Price : ${props.price}</p>
            {/* Click karne par Cart ko call karna vusse  setItems ko use karre provider me value meke and already purana cart me items lo lere and actual items ko b push karre  */}
            <button onClick={()=>cart.setItems([...cart.items, {name:props.name , price:props.price}])} >Add To Cart</button> {/* Sending Data into Contect and render data in Cart */}
        </div>
    )
}
export default Items