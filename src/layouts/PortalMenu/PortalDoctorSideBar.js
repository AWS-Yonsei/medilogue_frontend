import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import "./PortalMenu.css";
import Appointment from "../../components/menu_appointment.png"
import Calendar from "../../components/menu_calendar.png"
import Chatbot from "../../components/menu_chatbot.png"
import Homepage from "../../components/menu_homepage.png"
import Management from "../../components/menu_management.png"
import Mypage from "../../components/menu_mypage.png"
import Payments from "../../components/menu_payments.png"
import Record from "../../components/menu_record.png"

const PortalDoctorSideBar = () => {
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
    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn)
    };
    return (
        <>
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
                        <a href="/doctor_portal" className="nav_data">
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
                        <img class="nav_logo" src={Management} />
                        <a href="/patient_manage" className="nav_data">
                            Management
                        </a>
                        <div className="nav_dash">
                            &gt;
                        </div>
                    </div>
                    <div className="nav-box">
                        <img class="nav_logo" src={Record} />
                        <a href="/patient_manage" className="nav_data">
                            Patients Record
                        </a>
                        <div className="nav_dash">
                            &gt;
                        </div>
                    </div>
                    <div className="nav-box">
                        <img class="nav_logo" src={Calendar} />
                        <a href="/calendar/2024-02-24" className="nav_data">
                            Calendar
                        </a>
                        <div className="nav_dash">
                            &gt;
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
export default PortalDoctorSideBar;