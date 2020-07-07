import React from 'react';
import logo from "../../static/assets/Images/logo.png";

export default function topBar() {
    return(
        <div className="top_bar_wrapper">
            <div className="logo-wrapper">
                <img className="image" src={logo} />
            </div>
            <div className="value-assesment-title">
                <h2>Value Assesment</h2>
            </div>
        </div>
    )
}