import React from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom';
import { action, isLoggedIn } from '../../Api';


export default function Login() {


  let actiondata=useActionData();
console.log(actiondata);
 // Move useNavigate hook here

  return (
      <div className='container mt-5 py-5'>
        <div className="row">
          {actiondata? <h1 className='text-center'>{actiondata.message}</h1>:""}
            <div className="col-lg-9 col-12 mx-auto">
                <Form  method='post'>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </Form>
        </div>
      </div>
    </div>
  )
}
