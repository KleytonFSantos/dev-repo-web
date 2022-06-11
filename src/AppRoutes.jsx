import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import useAuth from "./hooks/UseAuth";

const Private = ({ children })=> {
    const { authenticated, loading } = useAuth();
    
    if(loading) {
        return <div>Loading...</div>;
    }
    
    if(!authenticated) {
        return <Navigate to="/login" /> 
    } else {
        return children;
    }
};


const AppRoutes = () => {
    return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Private> <MainPage /> </Private >} />
                    <Route exact path="/login" element={<LoginPage />} />
                </Routes>
            </Fragment>
    );
}

export default AppRoutes;