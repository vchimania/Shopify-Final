import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import axios from 'axios';

const listProducts=()=>async(dispatch)=>{
try{
    
    dispatch({type:PRODUCT_LIST_REQUEST});  //object has a type
    const {data}=await axios.get("/api/products");//but when we get the data from the server i return the data a payload
    dispatch({type:PRODUCT_LIST_SUCCESS,payload:data}); //object has a type and a payload
}
catch(error){
    dispatch({type:PRODUCT_LIST_FAIL,payload:error.message}); 
}
}
export{listProducts}