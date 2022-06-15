import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import logo from '../assets/logo.svg'

const Layout: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>(window.location.pathname)
    const menuClick = () => {
        setTimeout(() => setCurrentPage(window.location.pathname), 0);
        console.log(currentPage)
    }
    return (
        <div className={"bg-white min-h-screen overflow-x-hidden flex flex-col"}>
            <header className={"w-screen h-96 gap-12 bg-sky-400 text-white flex flex-col"}>
                <nav className={`flex flex-row justify-between px-36 text-xl text-white py-8`}>
                    <img src={logo} className={"h-7"} alt={"Drewl.com"}/>
                    <span className={"flex gap-7 flex-row align-center"}>
                    <Link to={"/"}><p onClick={menuClick}
                                      className={`${currentPage === '/' ? "font-extrabold" : null}`}>Converter</p></Link>
                    <Link to={"/currencies"}><p onClick={menuClick}
                                                className={`${currentPage === '/currencies' ? "font-extrabold" : null}`}>Exchange rate</p></Link>
                </span>
                </nav>
                {currentPage === '/' ? (
                    <span className={"text-center"}>
                    <h1 className={"text-3xl font-extrabold"}>Currency Converter</h1>
                    <p>Check live foreign currency exchange rates</p>
                </span>
                ) : <span className={"text-center"}>
                    <h1 className={"text-3xl font-extrabold"}> Live Exchange Rates</h1>
                    <p>Check live foreign currency exchange rates</p>
                </span>}
            </header>
            <main className={"mb-14"}>
                <Outlet/>
            </main>
            <footer className={"text-center bg-slate-50 py-4 mt-auto text-slate-900 w-screen"}>Copyright © 2022 Drewl
                Task 2022. All
                rights reserved
            </footer>
        </div>
    );
};

export default Layout;