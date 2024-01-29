import React, { useEffect, useState } from 'react'
import { useParams ,Outlet, useNavigate, NavLink, useLocation, useMatch, useLoaderData, useOutletContext } from 'react-router-dom'
export default function Itemdetails() {
    let data=useLoaderData();
    let [noOfUnits,setCartCount]=useOutletContext();
    // console.log(data);
    let param = useParams();
    let ob = data.find((x) =>  x.id === Number(param.id) )
    // console.log(ob)
    let [item, setitem] = useState(ob);
    let [mainImage,setMainImage] = useState(ob.images[0]);
    const navigate =useNavigate();
        // let prevState=useLocation();
        // console.log(prevState)
    useEffect(() => {

     }, [])
   
    const handlesubmit =() =>{
            let arrayinLocalStorage=JSON.parse(localStorage.getItem("arrayinLocalStorage"));
            if(arrayinLocalStorage.some(x=>x.id===item.id)){
                        alert("item already present in Cart")
            }
            else{
            item.noOfUnits=1;
            arrayinLocalStorage.push(item);
            }
            localStorage.setItem("arrayinLocalStorage",JSON.stringify(arrayinLocalStorage));
            setCartCount(arrayinLocalStorage.reduce((x,y)=>x+y.noOfUnits,0))
            // console.table(JSON.parse(localStorage.getItem("arrayinLocalStorage")));
      }

    const changeImage =(n) => {
        setMainImage(n)
    }
       
    return (
        <div className='container py-5 mt-5'>
            <div className="row align-items-center">
                <div className="col-6">
                    {<img src={mainImage} className="img-fluid " alt="" /> }
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-2 d-flex flex-column justify-content-between">
                            { item.images.map(x => <img className="other-images " src={x} onClick={()=>changeImage(x)} alt="noimage" />)}
                        </div>
                        <div className="col-10 ">
                            <div className="card text-center position-relative">
                                <div className="card-header">
                                    <ul className="nav nav-pills card-header-pills">
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>   isActive   ? "nav-link active":"nav-link"} to="dashboard">Dashboard</NavLink>
                                            {/* <NavLink className={`nav-link ${location.pathname.includes('dashboard') ? 'active' : ''}`} to="dashboard" >Dashboard</NavLink> */}
                                            {/* <button className="nav-NavLink active" onClick={handlesubmit}>Description</button> */}

                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className={({isActive})=>isActive ? "nav-link active":"nav-link"} to="price">Price</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className={({isActive})=>isActive ? "nav-link active":"nav-link"} to="review">Reviews</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <Outlet  context={item}/>
                                <button onClick={handlesubmit}className="btn btn-primary btn-lg position-absolute start-0 bottom-0">Add to Cart</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
