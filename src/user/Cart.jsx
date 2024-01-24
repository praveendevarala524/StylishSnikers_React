import React from 'react'
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate = useNavigate();
    let isLoggedIn=true;
    if(!isLoggedIn){
      // return  <redirect to="/login" />;
      // navigate("/login");
      navigate(`/login`);
      
    }else{
      
    }

  return (
    <div>Cart</div>
  )
}
