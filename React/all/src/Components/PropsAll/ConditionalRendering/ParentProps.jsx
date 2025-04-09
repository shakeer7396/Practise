
import React from "react";
import { ConditionalUser } from "./ConditionalRendering";

export const ParentConditionalProps = () =>{
    return <ConditionalUser isVIP={true} />
}