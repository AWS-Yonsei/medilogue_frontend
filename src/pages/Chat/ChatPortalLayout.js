import "./ChatPortal.css"
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import logo from "../../components/logo.png";
import doctor_imoction from "../../components/doctor_imo.png";
import power_button from "../../components/power_button.png";
import Appointment from "../../components/menu_appointment.png";
import Calendar from "../../components/menu_calendar.png";
import Chatbot from "../../components/menu_chatbot.png";
import Homepage from "../../components/menu_homepage.png";
import Mypage from "../../components/menu_mypage.png";
import Payments from "../../components/menu_payments.png";
import Record from "../../components/menu_record.png";
import Filter from "../../components/filter.png";
import Videocall from "../../components/video_call.png";

const ChatPortalLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modal_notice = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const ToggleContainer = styled.div`
        position: relative;
        > .toggle-container {
            width: 50px;
            height: 25px;
            border-radius: 30px;
            background-color: rgb(233,233,234);}
        > .toggle--checked {
            background-color: rgb(0,200,102);
            transition : 0.5s
        }
        > .toggle-circle {
            position: absolute;
            top: 1px;
            left: 1px;
            width: 22px;
            height: 23px;
            border-radius: 50%;
            background-color: rgb(255,254,255);
            transition : 0.5s
        } >.toggle--checked {
            left: 27px;
            transition : 0.5s
        }`
        ;
    const [isOn, setisOn] = useState(false);
    const [typingMessage, setTypingMessage] = useState("");
    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn)
    };
    return (
        <>
            <div className="header">
                <div className="logos">
                    <img class="logo" src={logo}></img>
                </div>
                <div className="upper-nav">
                    <div className="upper-nav-box">
                        <img src={doctor_imoction} className="upper-nav-imoticon"/>
                        <div className="upper-nav-name">혈액과 강재현</div> 
                        <img src={power_button} className="upper-nav-power"/>
                    </div>
                   
                </div>
            </div>
            <div className="main">
                <div className="side-nav">
                    <div className="flex-column">
                        <h1 className="nav_menu">Menu</h1>
                        <div className="w-[100%] my-[1%] border-[1px] border-white"></div>
                        <div>
                            <h2 className="nav_submenu">Core</h2>
                        </div>

                        <div className="nav-box">
                            <img class="nav_logo" src={Homepage} />
                            <a href="/" className="nav_data">
                                Home Page
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Mypage} />
                            <a href="/mypage" className="nav_data">
                                My Page
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Chatbot} />
                            <a href="/chatbot" className="nav_data">
                                Chatbot
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Appointment} />
                            <a href="/appointment" className="nav_data">
                                Appointment
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Record} />
                            <a href="/record" className="nav_data">
                                Record
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Calendar} />
                            <a href="/calendar" className="nav_data">
                                Calendar
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Payments} />
                            <a href="/payments" className="nav_data">
                                Payments
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="w-[100%] my-[1%] border-[1px] border-white"></div>
                        <div>
                            <h2 className="nav_submenu">진료과</h2>
                        </div>
                        <div className="nav_doctor_box">
                            <img class="nav_doctor_logo" src={Filter} />
                            <a href="/management" className="nav_doctor_data">
                                혈액과 강재현
                            </a>
                            
                        </div>
                        <div className="nav_doctor_box">
                            <img class="nav_doctor_logo" src={Filter} />
                            <a href="/management" className="nav_doctor_data">
                                내과 정강희
                            </a>
                        </div>
                        <div className="nav_doctor_box">
                            <img class="nav_doctor_logo" src={Filter} />
                            <a href="/management" className="nav_doctor_data">
                                외과 김하은
                            </a>
                        </div>
                        <div className="nav_bottom">
                            <img class="nav_video_logo" src={Videocall} />
                            <div className="nav_video_call" onClick={() => setModalIsOpen(true)}>
                                Video Call
                            </div>
                            <Modal style="modal_notice" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                화상 회의 화면으로
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="chat_room_box">

                    </div>
                    <div className="chat_send_box">
                        <div className="chat_send_square">
                            <textarea className="chat_send_square_text" placeholder="Type your message" maxLength={400} ></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}



export default ChatPortalLayout;






