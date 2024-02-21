import "./Login.css"
import logo from "../../components/logo_navy.png";
import image_Left_Doctor from "../../components/Left_Doctor.png";
import image_Right_Doctor from "../../components/Right_Doctor.png";
import QRCode from "../../components/bi_qr-code-scan.png"
import UserService from "../../utils/api/user.js"
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const LoginLayout = () => {
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChangeUid  = (e) => {
        const uid = e.target.value;
        setUid(uid);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        //form.current.validateAll();
        const userData = {
            uid: uid,
            password: password
        };

        axios.post(API_URL+"/login", userData)
            .then(() => {
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="Back_Rectangle">
                <img src={logo} className="logo_main" alt="logo"/>
            </div>
            <div className="Login-Form">
                <div className="Heading">Welcome to Medilogue </div>
                <div className="text-4xl Heading_Signin">Sign in</div>

                <form onSubmit={handleLogin} className="LoginContainer">
                    <br />
                    <div className="LoginText">Enter your username or email address </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            type="text"
                            name="uid"
                            value={uid}
                            onChange={onChangeUid}
                            placeholder="Input your user id"
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className="LoginText">Enter your Password </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Password"
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className="ForgotText">Forgot Password </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            className={"inputButton"}
                            type="submit"
                            value={"Sign in"} />
                    </div>
                    <br />
                    <div className="OrText">OR </div>
                    <br />
                    <div className="QRContainer">
                        <div className="QRText">Scan QR Code</div>
                        <img class="QRCode" src={QRCode}></img>
                    </div>
                </form>

            </div>
            <div className="Right_Container">
                <img class="Right_Doctor" src={image_Right_Doctor} alt="RightDoctor"></img>
            </div>
            <div className="Left_Container">
                <img className="Left_Doctor" src={image_Left_Doctor} alt="LeftDoctor"></img>
            </div>

        </>
    );
}
export default LoginLayout;
