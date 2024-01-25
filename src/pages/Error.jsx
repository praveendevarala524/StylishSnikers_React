import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    let error=useRouteError();
    // console.log(error)
  return (
    <div>Error</div>
  )
}
