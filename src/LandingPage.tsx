import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <header>
                State Management Examples
            </header>
            <Link to ="./redux">Redux</Link>
            <Link to ="./recoil">Recoil</Link>
            <Link to ="./jotai">Jotai</Link>
            <Link to ="./zustand">Zustand</Link>
            <Link to ="./contextapi">ContextAPI</Link>
                

        </div>
    )
}