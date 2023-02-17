import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from "react";


export default function Header() {
    const { isAuthenticated, user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
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

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                console.log('Token:', token);
                return token;
            } catch (err) {
                console.log('Hay un error:', err);
            }
        };
        // getToken();
        const callApi = async () => {
            const token = await getToken();
            const response = await fetch('http://localhost:3000/events/public', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            console.log('la response', responseData);
        }
        callApi();
    }, [])
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