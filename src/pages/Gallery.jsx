import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Gallery() {
  let data=useLoaderData();
  console.table(data)
  let [isChecked,setIsChecked]=useState(false);
  let [param,setparam] = useSearchParams();
  console.log(param.get("category"));
//  let newType=new URLSearchParams(param);
//  console.log(newType.get("category"))
  const [items, setitems] = useState(param? data: items.filter(x=>x.category===param.get("category")));
  let [mainData,setMainData]=useState(data);

 
  useEffect(() => {
   
   
  
  }, [])

 const  handleChange = (key,value,e) =>{
  if(e.target.checked){
    setparam({[key]:value});
  
    setitems(mainData.filter(item=>item.category===value))

    // let items=param?items.filter(x=>x.category===param.id) : items;
    // console.log(items)
  }
  else{
    setparam({});
    // Reset the items to show all
    setitems(mainData)
    
  }
  }
 function checkBox() {
  console.log("I m laptop")
        if(param.get("category")==="laptops"){
             return "true";
        }
        else{
           return "false"
        }
 }
  return (
    <div className="container py-5 mt-5">
      <div className="row">
      <div className="col-3">
        <ul className="list-group">
          <li className="list-group-item">
            <input className="form-check-input me-1" checked={param.get("category")==="smartphones"? true: false}  onChange={(e)=>{
              
              handleChange("category","smartphones",e)}} type="checkbox" value="" id="firstCheckboxStretched"/>
              <label className="form-check-label stretched-link" for="firstCheckboxStretched">smartphones</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1"checked={param.get("category")==="laptops"? true: false} value="laptops" onChange={(e)=>{handleChange("category","laptops",e)}} type="checkbox"  id="secondCheckboxStretched"/>
              <label className="form-check-label stretched-link" for="secondCheckboxStretched">laptops</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1"checked={param.get("category")==="fragrances"? true: false}  onChange={(e)=>{handleChange("category","fragrances",e)}} type="checkbox" value="" id="thirdCheckboxStretched"/>
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
                  <Link to={`${x.id}`} state={param.get("category")} className="btn btn-primary">See More</Link>
                  {/* <Link to={`${x.id}`} className="btn btn-primary">See More</Link> */}
                </div>
              </div>
            </div>

          })}
        </div>
      </div>
    </div>
    </div>
  )
}
