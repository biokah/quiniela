import { NavLink } from "react-router-dom";


export default function Header() {
    const items = [{
        name: "Mi quiniela",
        url: "/"
    },
    {
        name: "Ranking",
        url: "/ranking"
    }, {
        name: "Reglas",
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
                <article className="ml-auto">User</article>
            </nav>
        </header>
    )
}