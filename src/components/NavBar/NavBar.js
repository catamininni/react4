import './NavBar.css';
import Widget from '../Widget/Widget.js';
import{
    Link,
} from "react-router-dom";


function NavBar() {
    return(
        <nav className="topnav">
                <Widget/>
                <Link to='/'>Inicio</Link>
                <Link to="/category/Apple">Apple</Link>
                <Link to="/category/Otros">Otros</Link>
        </nav>
    );
}

export default NavBar;
