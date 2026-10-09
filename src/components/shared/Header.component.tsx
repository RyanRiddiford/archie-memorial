import { NavLink } from "react-router";
import './Header.component.css';

function Header() {
    return (
    <header>
      <h1>Archie's Memorial</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/about-archie">About Archie</NavLink>
        <NavLink to="/visitor-message">Leave A Message</NavLink>
      </nav>
    </header>
    );
};

export default Header;
