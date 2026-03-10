import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="main-nav">
                    <Link to="/">Home</Link>

                </nav>
            </header>
            {children}
            <footer>
                <p>2026 Utvikling av interaktive nettsteder - Movieserch</p>
            </footer>
        </>
    )
}