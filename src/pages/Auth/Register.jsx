import React from 'react'

export default function Register() {
    return (
        <div className='container mt-5 py-5'>
            <div className="row">
                <div className="col-lg-9 col-12 mx-auto">
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
