import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';

export default function Gallery() {
  let data=useLoaderData();
  console.table(data)
  let [param,setparam] = useSearchParams()
  const [items, setitems] = useState(data);
  let [mainData,setMainData]=useState(data);

 
  useEffect(() => {
   
   
  
  }, [])

 const  handleChange = (key,value,e) =>{
  if(e.target.checked){
    setparam({[key]:value});
  
    setitems(mainData.filter(item=>item.category===value))

    // let items=param?items.filter(x=>x.category===param.id) : items;
    console.log(items)
  }
  else{
    setparam({});
    // Reset the items to show all
    setitems(mainData)
    
  }
  }
 
  return (
    <div className="row">
      <div className="col-3">
        <ul className="list-group">
          <li className="list-group-item">
            <input className="form-check-input me-1"  onChange={(e)=>{
              
              handleChange("category","smartphones",e)}} type="checkbox" value="" id="firstCheckboxStretched"/>
              <label className="form-check-label stretched-link" for="firstCheckboxStretched">smartphones</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1"  onChange={(e)=>{handleChange("category","laptops",e)}} type="checkbox" value="" id="secondCheckboxStretched"/>
              <label className="form-check-label stretched-link" for="secondCheckboxStretched">laptops</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" onChange={(e)=>{handleChange("category","fragrances",e)}} type="checkbox" value="" id="thirdCheckboxStretched"/>
              <label className="form-check-label stretched-link" for="thirdCheckboxStretched">fragrances</label>
          </li>
        </ul>
      </div>
      <div className="col-9">

        <div className="row">
          { items.map((x) => {
            return <div className='col-12 col-lg-3'>

              <div className="card">
                <img src={x.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text">{x.description}</p>
                  <Link to={`${x.id}`} className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}
