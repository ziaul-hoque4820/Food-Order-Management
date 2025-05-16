import React from 'react'
import logo1 from './assets/logo.svg'
import userIcon from './assets/user-icon.svg'

function Header() {
    return (
        <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
            <div className="flex items-center ">
                <div className="text-primary mr-2">
                    <img src={logo1} />
                </div>
                <h1 className="text-2xl font-bold"><span className="text-primary">Dine</span>Out</h1>
            </div>
            <div className="flex items-center">
                <img src={userIcon} className="h-10" />
            </div>
        </nav>
    )
}

export default Header