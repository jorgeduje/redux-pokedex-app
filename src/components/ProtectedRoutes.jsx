import React from 'react';
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

export const ProtectedRoutes = () => {

    const isLogged = useSelector( store => store.rootReducer.isLogged)

    if( isLogged ){

        return <Outlet />

    }else{

        return <Navigate to="/"/>

    }


};




