import React, { useEffect, useState } from 'react'
import { useParams ,Outlet, useNavigate, NavLink, useLocation, useMatch, useLoaderData } from 'react-router-dom'
export default function Itemdetails() {
    let data=useLoaderData();
    let param = useParams();
    let ob = data.find((x) =>

    x.id === Number(param.id)
)
    let [item, setitem] = useState(ob);
    let [mainImage,setMainImage] = useState(ob.images[0]);
    let location = useLocation();
    const isDashboardActive = useMatch('dashboard');
    const navigate =useNavigate();
    
   
    // useEffect(() => {
    //     async function getData() {
    //         let response = await fetch('https://dummyjson.com/products');
    //         let data = await response.json();
    //         // console.log(data)
    //         console.log(data.products);
    //         let arr = data.products;
    //         console.log(arr);
    //         console.log(param.id);
    //         let ob = arr.find((x) =>

    //             x.id === Number(param.id)
    //         )
    //         console.log(ob);
    //         setitem(ob);
    //         setMainImage(ob.images[1])
    //         //   setimage(items[0].images[0])
    //         //   console.log(items[0].images[0])
    //     }
    //     getData();


    // }, [])
    const handlesubmit =() =>{
          let arrayinLocalStorage=JSON.parse(localStorage.getItem("arrayinLocalStorage"));
         
          arrayinLocalStorage.push(item);
          localStorage.setItem("arrayinLocalStorage",JSON.stringify(arrayinLocalStorage));
          console.log(localStorage.getItem("arrayinLocalStorage"));

    }
//   function changeImage(n){
//   setMainImage(n)
//   }

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
