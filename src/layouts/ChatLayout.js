import "../pages/ChatBot/ChatPortal.css"
import logo from "../components/logo.png";
import Nav from 'react-bootstrap/Nav';
import Redbox from "../components/redbox.png"
import Bluebox from "../components/bluebox.png"
import Yellowbox from "../components/yellowbox.png"

const ChatLayout = () => {
    return (
        <>
            <div className="header">
                <div className="logos">
                    <img class="logo" src={logo}></img>
                </div>
                <div className="upper-nav">
                    <h1> hello!</h1>
                </div>
            </div>
            <div className="main">
                <div className="side-nav">
                    <div className="flex-column">
                        <h1 className="pl-6 pr-6 text-4xl">Menu</h1>
                        <div className="w-[100%] my-[1%] border-[1px] border-white"></div>
                        <div>
                            <h2 className="p-6 text-4xl">Core</h2>
                        </div>

                        <div className="nav-box">
                            <a href="/" className="pr-6 text-2xl">
                                Home Page
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/mypage" className="pr-6 text-2xl">
                                My Page
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/chatbot" className="pr-6 text-2xl">
                                Chatbot
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/appointment" className="pr-6 text-2xl">
                                Appointment
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/record" className="pr-6 text-2xl">
                                Record
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/calendar" className="pr-6 text-2xl">
                                Calendar
                            </a>
                        </div>
                        <div className="nav-box">
                            <a href="/payments" className="pr-6 text-2xl">
                                Payments
                            </a>
                        </div>
                        <div className="w-[100%] my-[1%] border-[1px] border-white"></div>
                        <div>
                            <h2 className="p-6 text-4xl">Commerce</h2>
                        </div>
                        <div className="nav-box">
                            <a href="/management" className="pr-6 text-2xl">
                                Management
                            </a>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="boxes">
                        <div className="red-box">
                            <img src={Redbox}></img>
                        </div>
                        <div className="yellow-box">
                            <img src={Yellowbox}></img>
                        </div>
                        <div className="blue-box">
                            <img src={Bluebox}></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ChatLayout;






