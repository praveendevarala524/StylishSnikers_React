import React from 'react'
import Header from './Header'
import { Outlet, useLoaderData } from "react-router-dom";
import { isLoggedIn } from '../Api';

export default function () {
let data=useLoaderData();    

    return (
        <div>
                    <Header  data={data} />
                    <Outlet/>
        </div>
    )
}
