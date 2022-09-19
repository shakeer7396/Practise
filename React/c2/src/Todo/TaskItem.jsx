import React from 'react'

const TaskItem = ({title,status,color,fontSize}) => {
    
  return (
    <div style={{color, fontSize}} >
        <h2>{`${title} :- ${status}`}</h2>
    </div>
  )
}

export {TaskItem}