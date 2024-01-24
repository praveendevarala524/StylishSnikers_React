import React from 'react'
import {useOutletContext} from 'react-router-dom'

export default function Dashboard() {
    let data=useOutletContext();
    console.log(data)
  return (
     <div className='mt-5'>
        <h1 className='display-6  text-start'>{data? data.description :"...loading"}</h1>
     </div>
  )
}
