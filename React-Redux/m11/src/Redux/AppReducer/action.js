import * as types from "./actionTypes";
import axios from "axios";


export const personDetails=(payload,alert)=>(dispatch)=>{
    return axios.post("http://localhost:6060/details",payload)
    .then((r)=>{dispatch({type:types.PERSON_DETAILS})
    alert.success("Person details added successfully")
    return types.PERSON_DETAILS
    })
}