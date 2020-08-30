import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

function Layout(props) {
    return (
        <div className="layout__container">
            {props.children}
            <Sidebar />
        </div>
    )
}

export default Layout;
