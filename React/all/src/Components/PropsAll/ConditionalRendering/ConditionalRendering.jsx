

import React from "react";

export const ConditionalUser = ({isVIP}) =>{
    return<h2>{isVIP ? "Welcome Guest" : "Welcome User"}</h2>
}

