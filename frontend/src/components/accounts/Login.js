import React from 'react';

const Login = () => {
    return(
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-lblue-700 rounded-lg p-10 w-1/3">
                <h2 className="text-5xl font-bold mb-10 text-gray-200">Login To Your Portfolio</h2>
                <form className="space-y-8">
                    <div>
                        <label className="block mb-2 font-light text-xl text-gray-300">Email</label>
                        <input type="email" className="p-3 w-full outline-none bg-cgray-800 rounded"></input>
                    </div>
                    <div>
                        <label className="block mb-2 font-light text-xl text-gray-300">Password</label>
                        <input type="password" className="p-3 w-full outline-none bg-cgray-800 rounded"></input>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-light text-2xl rounded-full shadow-2xl">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login