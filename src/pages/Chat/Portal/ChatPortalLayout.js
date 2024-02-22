import "./ChatPortal.css"
import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import logo from "../../../components/logo.png";
import doctor_imoction from "../../../components/doctor_imo.png";
import power_button from "../../../components/power_button.png";
import Appointment from "../../../components/menu_appointment.png";
import Calendar from "../../../components/menu_calendar.png";
import Chatbot from "../../../components/menu_chatbot.png";
import Homepage from "../../../components/menu_homepage.png";
import Mypage from "../../../components/menu_mypage.png";
import Payments from "../../../components/menu_payments.png";
import Record from "../../../components/menu_record.png";
import Filter from "../../../components/filter.png";
import Videocall from "../../../components/video_call.png";
import Nav_Profile from "../../../components/avatar.png";
import CloseButton from '../../../components/closebutton.png';
import VideoButton from '../../../components/video.png';
import MicrophoneButton from '../../../components/microphone.png';
import SettingButton from '../../../components/settings.png';
import OptionButton from '../../../components/option.png';
import Avatar from "../../../components/placeholder.jpg";
import { SocketContext } from "../socket";
import TalkRoom from "./TalkRoom.js";

const ChatPortalLayout = () => {
    const {
        name,
        callAccepted,
        myVideo,
        userVideo,
        callEnded,
        stream,
        call
    } = useContext(SocketContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentTypingId, setCurrentTypingId] = useState(null);
    const customStyles = {
        content: {
            background: 'rgba(255, 255, 255, 0.5)',
            width: '820px',
            height: '580px',
            padding: '0px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    };
    return (
        <>
            <div className="header">
                <div className="logos">
                    <img class="logo" src={logo}></img>
                </div>
                <div className="upper-nav">
                    <div className="upper-nav-box">
                        <img src={doctor_imoction} className="upper-nav-imoticon" />
                        <div className="upper-nav-name">혈액과 강재현</div>
                        <a href="/patient_portal" className="upper-nav-power-container">
                            <img src={power_button} className="upper-nav-power" />
                        </a>
                    </div>

                </div>
            </div>
            <div className="main">
                <div className="side-nav">
                    <div className="flex-column">
                        <div className="side-nav-image-box">
                            <img src={Nav_Profile} className="side-nav-image-avatar" />
                            <div className="side-nav-image-name">User Name</div>
                        </div>
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
                            <a href="/patient_portal" className="nav_data">
                                My Page
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Chatbot} />
                            <a href="/chat_portal" className="nav_data">
                                Chatbot
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Appointment} />
                            <a href="/quiz" className="nav_data">
                                Quiz
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Record} />
                            <a href="/record/user2" className="nav_data">
                                Record
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Calendar} />
                            <a href="/calendar/2024-02-23" className="nav_data">
                                Calendar
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
                            <a href="/chat_portal" className="nav_doctor_data">
                                내과 강재현
                            </a>

                        </div>
                        <div className="nav_doctor_box">
                            <img class="nav_doctor_logo" src={Filter} />
                            <a href="/chat_portal" className="nav_doctor_data">
                                안과 정강희
                            </a>
                        </div>
                        <div className="nav_doctor_box">
                            <img class="nav_doctor_logo" src={Filter} />
                            <a href="/chat_portal" className="nav_doctor_data">
                                외과 김하은
                            </a>
                        </div>
                        <div className="nav_bottom">
                            <img class="nav_video_logo" src={Videocall} />
                            <button className="nav_video_call" onClick={() => setModalIsOpen(true)}>
                                Video Call
                            </button>
                            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                <div className="modal_container">
                                    <div className="modal_topbar">
                                        <div className="modal_topbar_name"> XXX과 XXX의사 </div>
                                        <img src={CloseButton} className="modal_closebutton" onClick={() => setModalIsOpen(false)} />
                                    </div>
                                    <div className="modal_body">
                                        <div className="modal_body_profile_container">
                                            <div className="modal_body_profile_box">
                                                <div className="modal_body_profile_main">
                                                    <div>
                                                        <img src={Avatar} className="modal_body_profile_image" />
                                                    </div>
                                                    <div className="modal_body_profile_name">
                                                        User Name
                                                    </div>
                                                </div>
                                                <div className="modal_body_profile_bottom">
                                                    <button><img class="modal_body_button" src={MicrophoneButton} /> </button>
                                                    <button><img class="modal_body_button" src={VideoButton} /> </button>
                                                    <button><img class="modal_body_button" src={SettingButton} /> </button>
                                                    <button><img class="modal_body_button" src={OptionButton} /> </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal_body_bottom_button_box">
                                            <button><a href="/chat_room" className="modal_body_bottom_button_green">Join</a></button>
                                            <button><div className="modal_body_bottom_button_red" onClick={() => setModalIsOpen(false)}>Leave</div></button>
                                        </div>


                                    </div>
                                </div>

                            </Modal>

                        </div>
                    </div>
                </div>
                <div className="body">
                    <TalkRoom/>   
                </div>
            </div>
        </>
    );
}
export default ChatPortalLayout;