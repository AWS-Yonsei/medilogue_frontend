import "../pages/Login/Login.css"
import image_Left_Doctor from "../components/Left_Doctor.png";
import image_Right_Doctor from "../components/Right_Doctor.png";

const LoginLayout = () => {
    return (
        <>
            <div className="Back_Rectangle">
                <div className="Logo">My Logo</div>
            </div>
            <div className="Login-Form">
                <div className="Heading">Welcome to Medilogue </div>
                <div className="text-4xl Heading_Signin">Sign in</div>

                <div className="LoginContainer">
                    <br />
                    <div className="LoginText">Enter your username or email address </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Usernamee or Email address"
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className="LoginText">Enter your Password </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Password"
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className="ForgotText">Forgot Password </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            className={"inputButton"}
                            type="button"
                            value={"Sign in"} />
                    </div>
                    <br />
                    <div className="LoginText">OR </div>
                </div>



            </div>
            <div className="Right_Container">
                <img class="Right_Doctor" src={image_Right_Doctor}></img>
            </div>
            <div className="Left_Container">
                <img className="Left_Doctor" src={image_Left_Doctor}></img>
            </div>

        </>
    );
}
export default LoginLayout;