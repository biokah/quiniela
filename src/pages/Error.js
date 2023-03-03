import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="absolute top-1/3 left-1/2 center-element text-center">
            <p>Ups! Page not found!

                Take me back <Link className="font-bold" to="/">Home</Link>
                
            </p>

        </div>

    )
}