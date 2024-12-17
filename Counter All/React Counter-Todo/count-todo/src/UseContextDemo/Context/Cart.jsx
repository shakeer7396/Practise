import React,{createContext,useState} from 'react' //all come from react library, createContext used for creating the context

const CartContext =createContext(null); //Assigning the new name as CartContext for createContext;

export const CartProvider = (props) => {  //Function 
const [items,setItems] = useState([]);

  return (
    <CartContext.Provider value={{items,setItems}}> {/*Wraped with Provider*/}
        {props.children}  {/* Accessing all props */}
    </CartContext.Provider>
    
  )
}

export default CartContext;