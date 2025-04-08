
// import React from "react";
// import { ChildComponent } from "../ChildComponent";

// function ParentComponent() {
//     const data = "Hello child";
//     const greetings = "How are you";
//     return (
//         <div>
//             <h2>Props handling</h2>
//             <ChildComponent
//                 message1={data} message2={greetings} />
//         </div>
//     )
// }


// export default ParentComponent;

import React from "react";
import { ChildComponent } from "../ChildComponent";

function ParentComponent() {

    const greet = "Hai Friends";
    const replay = "How are you";
    return (
        <div>
            <h2>Introduction</h2>
            <ChildComponent message1={greet} message2={replay} />
        </div>
    );
}

export default ParentComponent;