import React from 'react'
import { Navigate, redirect, useLoaderData } from 'react-router-dom';
import { getItem } from '../Api';


export default function Cart() {
  let data = useLoaderData();
  let total=data.reduce((x,y)=>x+y.price,0)
  console.log(data)
  let isLoggedIn = false;
  if (isLoggedIn) {
    // return  <redirect to="/login" />;
    return <Navigate to="/login" />


  } else {

  }

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-10">
          {data.map(x =><div class="card mb-3" style={{height:"200px"}} >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={x.images[1]} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{x.title}</h5>
                  <p class="card-text">{x.description}</p>
                  <p class="card-text"><small class="text-body-secondary">Rs.{x.price}</small></p>
                </div>
              </div>
            </div>
          </div>)} 

        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <h3 className="display-3">Total : {total}</h3>
        </div>
      </div>
    </div>

  )
}
