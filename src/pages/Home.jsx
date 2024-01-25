import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  let data=useLoaderData();
const [items, setitems] = useState(data)
const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    // Assuming you have the itemId you want to navigate to
    navigate(`/gallery/${itemId}`);
  };


  useEffect(() => {
      async function getData(){
        let response=await fetch('https://dummyjson.com/products');
        let data=await response.json();
        // console.log(data.products)
        setitems(data.products.slice(0,4));
      //   setimage(items[0].images[0])
      //   console.log(items[0].images[0])
      }
        getData();

  }, [])

  return (
    <div className="container mt-3 py-3">
      <div className="row align-items-center">
        <div className="col-6">
          <h1 className="display-1">Smart Phones</h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore, odio doloremque aspernatur explicabo illum.</p>
          <button className="btn btn-primary">Know More</button>
        </div>
        <div className="col-6">

           <img src={items[0].images[0]} alt="" />  

        </div>
      </div>
      <div className="row mt-2 py-2 border border-secondary align-items-center">
        <div className="row">
        {  items.map((x) =>  {
  
      return <div className='col-12 col-lg-3'>

        <div className="card">
          <img src={x.images[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{x.title}</h5>
            <p className="card-text">{x.description}</p>
            <Link to={`/gallery/${x.id}`} className="btn btn-primary">See More</Link>
              {/* <Link to=" " className="btn btn-primary">Go somewhere</Link> */}
              {/* <button className="btn btn-primary " onClick={() => handleItemClick(x.id)}>See More</button> */}
            {/* <Link to="/gallery/${x.id}">See More</Link> */}
          </div>
        </div>
      </div>
    })}
      </div>
      </div>
    </div>
  )
}
