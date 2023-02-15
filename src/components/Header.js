import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


export default function Header() {
    const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
    const items = [{
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
    return (
        <header className="bg-white items-center flex px-8">
            <nav className="flex items-center w-full">
                <a href="/" className="mr-8">LOGO</a>
                <ul className="flex h-full items-center">
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
                <article className="ml-auto">{
                    isAuthenticated ?
                        <button onClick={() => logout()}>Logout</button> :
                        <button onClick={() => loginWithRedirect()}>Login</button>
                    }
                </article>
            </nav>
        </header>
    )
}