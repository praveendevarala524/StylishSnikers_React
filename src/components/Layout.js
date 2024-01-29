import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet, useLoaderData } from "react-router-dom";
import { getItem } from '../Api';

export default function () {
let data=useLoaderData(); 
console.log(data)

let totalItems=data.reduce((x,y)=>x+y.noOfUnits,0);
console.log(totalItems)
let [products,setProducts]=useState(data)   ;
let [noOfUnits,setCartCount]=useState(totalItems);
useEffect(()=>{
       
        
setCartCount(noOfUnits)
 
//  console.log("I m rendered")

},[noOfUnits])
function handleSetProducts(arr){
    setProducts(arr)
 
}

    return (
        <div>
                    <Header  noOfUnits={noOfUnits} />
                    <Outlet context={[noOfUnits,setCartCount]}/>
        </div>
    )
}
