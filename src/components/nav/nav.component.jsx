import logo from "../../assets/logo1.png";
import "./nav.css";

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>

                <ul className="menu-items">
                    <li>
                        <a href="#">Featured</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Facilities</a>
                    </li>
                    <li>
                        <a href="#">Find Doctor</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <button className="btn">Book Now</button>
                </ul>

                <img className="logo" src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Nav;
