import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { getItem, isLoggedIn } from '../Api';


export default function Header(props) {
    let data = props;
    console.log(data)
    const userLoggedIn = isLoggedIn();
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(data.data.reduce((x,y)=>x+y.noOfUnits,0));

    const handleLogout = () => {
        localStorage.setItem("isLoggedin", JSON.stringify(false));
        navigate('/login');
    };
 

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href="#">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutus" className="nav-link">Aboutus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="gallery" className="nav-link">Gallery</Link>
                        </li>
                        {/* <li className="nav-item">
            <Link className="nav-link" >Link</Link>
          </li> */}

                    </ul>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to="/cart">

                         <span className='position-relative me-4'>
                                <span class="position-absolute top-0 start-100 text-white    translate-middle p-1 bg-danger border border-light rounded-circle">
                                    {cartCount}
                                </span>
                            <i class="bi bi-cart fs-3 fw-bolder "></i>
                            </span>
                        </Link>
                        {userLoggedIn ? (<div>
                            <span>Welcome, User!</span>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                            {/* Add any other user-related information */}
                        </div>) : (<div >
                            <button className="btn btn-primary text-white me-md-2" type="button">
                                <Link to="login" className='link-light link-underline-opacity-0'>Login</Link>

                            </button>
                            <button className="btn btn-primary" type="button">
                                <Link to="register" className='link-light link-underline-opacity-0'>Register</Link>
                            </button>
                        </div>)}
                    </div>
                </div>
            </div>
        </nav>
    )


}
