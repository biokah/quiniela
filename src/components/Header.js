import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


export default function Header() {
    const { isAuthenticated, user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const [showNav, setShowNav] = useState(false)
    const items = [
        {
            name: "My Pool",
            url: "/"
        },
        {
            name: "Ranking",
            url: "/ranking"
        }, {
            name: "Rules",
            url: "/rules"
        }
    ]
     
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    
    return (
        <header className="bg-white items-center flex px-2 md:px-8">
            <nav className="flex items-center w-full relative">
                <a href="/" className="mr-2 md:mr-8">
                    <img className="logo" src={require("./../logo.png")} alt="" />
                </a>
                <ul className="md:flex h-full items-center hidden">
                    {
                        items.map(item => {
                            return (
                                <li key={item.name} className="list-none mx-2">
                                    <NavLink to={item.url} className="p-2 rounded-lg">{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex justify-center items-center md:hidden">
                    <span className="mr-3">My Pool</span>
                    <button onClick={toggleNav}>
                        <FiChevronDown />
                    </button>
                </div>
                {
                    showNav ? 
                    <ul className="absolute block md:hidden mobile-nav rounded bg-white border border-solid p-2">
                        {
                        items.map((item, index) => {
                            return (
                                <li key={item.name} className="list-none w-full flex items-center justify-center" onClick={toggleNav}>
                                    <NavLink to={item.url} className="px-3 py-1 w-full block">{item.name}</NavLink>
                                    {index === 0 ? <FiChevronDown /> : null }
                                </li>
                            )
                        })
                    }
                    </ul>
                    : null
                }
                
                <article className="ml-auto">{
                    isAuthenticated ?
                        <span>
                            <span style={{padding: 10}}>{user.name}</span>
                            <button
                                style={{padding: 10}}
                                onClick={() => logout()}
                                >Logout
                            </button>
                        </span> :
                        <button onClick={() => loginWithRedirect()}>Login</button>
                    }
                </article>
            </nav>
        </header>
    )
}