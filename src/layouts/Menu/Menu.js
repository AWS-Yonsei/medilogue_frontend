import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../components/logo.png";

const Menu = () => {
    return (
        <div className="navbar">
            <div className="logo_menu">
                <img class="logo" src={logo}></img>
            </div>
            <ul className="navbar_list">
                <li className="list_menu">
                    <Link to={'/patient_portal'}>Patient</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/doctor_portal'}>Doctor</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/quiz'}>Quiz</Link>
                </li>
                <li className="list_menu">
                    <Link to={'/calendar/2024-02-23'}>Calendar</Link>
                </li>
            </ul>
            <div className="navbar_login">
                <div className="login_button">
                    <Link className="login_word" to={'/login'}>Log In</Link>
                </div>
            </div>
        </div>
    );
}
export default Menu;