import React from 'react';
import logo from '-!svg-url-loader!../../img/logo.svg';

const Header = () => {
    return(
        <header className="bg-lblue-700 rounded-b-xl flex items-center justify-between">
            <img src={logo} className="h-24 pl-4 py-2 align-middle inline-block fill-current"></img>
            <div className="text-gray-300 py-2  align-middle rounded-md text-7xl font-medium inline-block"> 
            </div>
            <button className="mx-8 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-light text-l rounded-full shadow-2xl font-lib3">
                Sign In
            </button>            
        </header> 
    )
}

export default Header
