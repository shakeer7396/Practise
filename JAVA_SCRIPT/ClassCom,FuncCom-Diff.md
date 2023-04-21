Functional Components: Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.

Syntax:

const Car=()=> {
  return <h2>Hi, I am also a Car!</h2>;
}
Example:


import React, { useState } from "react";
 
const FunctionalComponent=()=>{
    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }
 
    return (
        <div style={{margin:'50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Functional Component : </h3>
          <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
} 
 
 
export default FunctionalComponent;
 Output: counter


 CLASS COMPONENTS
 Class Component: This is the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application).

Syntax:

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
Example:

import React, { Component } from "react";
 
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>Welcome to Geeks for Geeks </h1>
               <h3>Counter App using Class Component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
 
            </div>
        )
    }
}
 
export default ClassComponent;
Output:



Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.

In the above example, for functional components, we use hooks (useState) to manage the state. If you write a function component and realise you need to add some state to it, previously you had to convert it to a class component. Now you can use a Hook inside the existing function component to manage the state and no need to convert it into the Class component. Instead of Classes, one can use Hooks in the Functional component as this is a much easier way of managing the state. Hooks can only be used in functional components, not in-class components.

