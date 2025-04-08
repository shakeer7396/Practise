
// import React from "react";

// function ProfileCardChild({ name, age, image }) {

//     return (
//         <div style={{border:"1px solid blue", padding:"10px", margin:"10px",textAlign:"center",width:"25%"}}>
//             <img src={image} alt={name} width="200" />
//             <h3>{name}</h3>
//             <p>Age : {age}</p>
//         </div>
//     )
// }

// export default ProfileCardChild;


import React from "react";

const ProfileCardChildren = ({ image, name, age }) => {

    return (
        <div style={{border: "2px solid violet",padding: "10px", margin: "10px", textAlign:"center",width:"25%"}}>
            <img src={image} alt="name" width="200" />
            <h2>{name}</h2>
            <p>Age : {age}</p>
        </div>
    )
}

export default ProfileCardChildren;