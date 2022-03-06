import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
        <a className="navbar-brand" href="/">React App</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/people">People</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/starships">Starships</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/planets">Planets</a>
                </li>
            </ul>
        </div>
    </nav>);
    }

export default Navbar;