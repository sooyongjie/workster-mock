import React from 'react'
import Nav from './Nav'
import Employees from './Employees';
import Header from './Header'
function Admin() {
    return (
        <div className='container'>
            <Nav />
            <div className="content">
                <Header />
                <Employees />
            </div>
        </div>
    )
}

export default Admin