import { Outlet, NavLink } from "react-router-dom"

function Layout() {
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Kellatöökoda</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/">Esileht</NavLink></li>
                            <li><NavLink to="/news">Uudised</NavLink></li>
                            <li><NavLink to="/contact">Kontakt</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer>jalus</footer>
        </div>
    )
}

export default Layout