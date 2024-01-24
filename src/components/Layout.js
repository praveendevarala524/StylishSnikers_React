import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom";
export default function () {
    return (
        <div>
                    <Header />
                    <Outlet/>
        </div>
    )
}
