import React, { useState } from 'react';
import { Navigate, useNavigate, useLoaderData } from 'react-router-dom';
import { getItem } from '../Api';

export default function Cart() {
  let data=useLoaderData();
  const [cartData, setCartData] = useState(data);
  const total = cartData.reduce((x, y) => x + y.price*y.noOfUnits, 0);
  console.log(cartData);

  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const removeFromCart = (itemId) => {
    // Remove the item from the cartData state
    const updatedCart = cartData.filter(item => item.id !== itemId);
    setCartData(updatedCart);
    // const updatedLocalStorage = getItem().filter(item => item.id !== itemId);
    localStorage.setItem("arrayinLocalStorage", JSON.stringify(updatedCart));
  };

  const handleNoOfUnits = (sign,id) =>{
    let ob=cartData.find(x=>x.id===Number(id));
        if(sign==='+'){
          ob.noOfUnits++;
        }
          else{
             if(ob.noOfUnits>1){
                ob.noOfUnits--;
             }
          }
          localStorage.setItem("arrayinLocalStorage",JSON.stringify(cartData));
          let newArray=JSON.parse(localStorage.getItem("arrayinLocalStorage"));
          setCartData(newArray)
        }
  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-10">
          {cartData.map(x => (
            <div key={x.id} className="card mb-3" style={{ height: "250px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={x.images[1]} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <p className="card-text">{x.description}</p>
                    <p className="card-text"><small className="text-body-secondary">Rs.{x.price}</small></p>
                    <div>
                      <button className="btn btn-danger" onClick={()=>{handleNoOfUnits('-',`${x.id}`)}}>-</button>
                      <span className="mx-2 fs-4 fw-medium">{x.noOfUnits}</span>
                      <button className="btn btn-primary" onClick={()=>{handleNoOfUnits('+',`${x.id}`)}}>+</button>
                    </div>
                    <button className="btn btn-danger mt-3" onClick={() => removeFromCart(x.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <h3 className="display-3">Total : {total}</h3>
        </div>
      </div>
    </div>
  );
}
