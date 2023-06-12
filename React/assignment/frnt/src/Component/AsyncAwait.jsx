import React, { useState, useEffect } from 'react';

const AsyncAwait = () => {

    const [data,setData]=useState(null);
    const [error,setError]=useState(null);


    const fetchData =async ()=>{
        try{
            let res=await fetch("https://fakestoreapi.com/products");
            let data=await res.json()
            return data;
        }
        catch(error){
            throw new Error(error);  
        }
    }
    useEffect(() => {
            fetchData()
              .then(data => {
                setData(data);
              })
              .catch(error => {
                setError(error);
              });
          }, []);

    if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!data) {
            return <div>Loading...</div>;
          } else {
            return (
              <div>
                {data.map((el)=>(
                    <div
                        key={el.id}
                        style={{ border: "2px solid purple", padding: "20px" }}>
                        <div>
                            <img src={el.image} alt="check" width="200px" />
                        </div>
                        <h2>Title : {el.title}</h2>
                        <h2>Price : {el.price}</h2>
                        <h3>Descripton : {el.description}</h3>

                    </div>
                ))}
              </div>
            );
          }
}

export default AsyncAwait

// import React, { useEffect, useState } from 'react';

// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// function DataComponent() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData()
//       .then(data => {
//         setData(data);
//       })
//       .catch(error => {
//         setError(error);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!data) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div>
//         {/* Display the fetched data */}
//       </div>
//     );
//   }
// }

// export default DataComponent;


// const [todo,setTodo]=useState([])
// //get method...........
// const getData=async ()=>{
//     try {
//         let res = await fetch(`http://localhost:6060/posts?_page=${page}`)
//         let data= await res.json()
        
//         console.log("Output",data)
//         setTodo(data)
//     } catch (error) {
//         console.log(error)
//     } 
// }
// useEffect (()=>{
//     getData()    
// },[page])

// return (
//     <div className={styles.btn}>
//         <TodoAdd mount={mount}/>
//         {todo.map((todo)=>(
//         <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>))}
//         <p>Page :{page}</p>
        
//         <button onClick={()=>{
//             if(page>1){
//                 setPage(page-1)
//             }  
//         }}>Prev</button>

//         <button onClick={()=>setPage(page+1)}>Next</button>
//     </div>
// )