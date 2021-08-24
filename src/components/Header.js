import React from 'react'
import logo from '../images/jorge-logo.svg'
import Address from './Address'
import FullName from './FullName'

const Header = () => {
    return (
        <header className="mb-8">
            <hr className="mt-4 border-black border-t-8" />
            <hr className="mt-3 border-gray-300 border-t-2" />

            <div className="container mx-auto px-4">
                <div className="flex justify-between flex-col sm:flex-row">
                    <FullName />

                    <div className="mb-6">
                        <Address />
                        <div className="flex">
                            <p className="mr-6 sm:mr-2 md:mr-6 text-2xl sm:text-lg md:text-2xl text-gray-400">
                                webdesigner <br />
                                webdeveloper <br />
                                softwaredeveloper
                            </p>
                            <img src={logo} className="App-logo" alt="Jorge logo" />
                        </div>
                    </div>

                </div>
                <hr className="border-t-1 border-black" />
            </div>
        </header>
    )
}

export default Header
