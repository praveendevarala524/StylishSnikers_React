import React, { useState } from 'react'

export default function Register() {
  let [user,setUser]=useState({fname:"",lname:""})
  function handleChange(e) {
    
    if(e.target.name==="fname"){
      setUser((prev)=>{
         console.log(prev)
        return   {  fname:e.target.value,lname:prev.lname}
      
      })
    
    }else{
      setUser((prev)=>
      { 
        console.log(prev);
       return  {fname:prev.fname,lname:e.target.value}
      }
     )
    }
  }
    return (
      
        <div className='container mt-5 py-5'>
          <div className="row">
            <h1 className="display-1 text-center">
              welcome {user.fname}  {user.lname}
            </h1>
          </div>
            <div className="row">
                <div className="col-lg-9 col-12 mx-auto">
        <form>
        <div className="mb-3">
          <label for="Fname" className="form-label">Fname</label>
          <input type="email" className="form-control" id="Fname" onChange={(e)=>handleChange(e)} value={user.fname}  name='fname'  aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleLname" className="form-label">Lname</label>
          <input type="email" name="lname" className="form-control" id="exampleLname" onChange={(e)=>handleChange(e)} value={user.lname} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
       
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
         
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
       <div className="d-flex">
       <div className="mx-2 my-2 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Male</label>
        </div>
        <div className="mx-6 my-2  form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Female</label>
        </div>
       </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>
      )
}
