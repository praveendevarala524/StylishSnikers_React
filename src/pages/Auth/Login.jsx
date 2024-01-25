import React from 'react'
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../Api';

export default function Login() {
  const navigate = useNavigate(); // Move useNavigate hook here

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your login logic here
    // ...

    // After successful login, update local storage or state
    localStorage.setItem("isLoggedin", JSON.stringify(true));

    // Redirect to a different route
    navigate('/cart'); // Replace with the route you want to navigate to
  };
  return (
      <div className='container mt-5 py-5'>
        <div className="row">
            <div className="col-lg-9 col-12 mx-auto">
                <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>
  )
}
