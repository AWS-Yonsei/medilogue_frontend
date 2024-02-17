import { Link } from "react-router-dom";
import "../pages/Home/Home.css"
import logo from "../components/logo.png";

const Menu = () => {
    return (
        <div className="navbar">
            <div className="logos">
                <img class="logo" src={logo}></img>
            </div>
            <ul className="navbar_list">
                <li className="list_menu">
                    <Link to={'/login'}>Sign In</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/chatportal'}>Chat</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/main/quiz'}>Home</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/about'}>About Us</Link>
                </li>
            </ul>
            <div className="navbar_login">
                <div className="login_button">
                    <Link className="login_word" to={'/login'}>Log In</Link>
                </div>
                <div className="register_button">
                    <Link className="register_word" to={'/login'}> Sign In </Link>
                </div>
            </div>
        </div>
    );
}
export default Menu;