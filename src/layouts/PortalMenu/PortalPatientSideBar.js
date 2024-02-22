import React, { useState } from 'react';
import "./PortalMenu.css";
import Appointment from "../../components/menu_appointment.png"
import Calendar from "../../components/menu_calendar.png"
import Chatbot from "../../components/menu_chatbot.png"
import Homepage from "../../components/menu_homepage.png"
import Management from "../../components/menu_management.png"
import Mypage from "../../components/menu_mypage.png"
import Payments from "../../components/menu_payments.png"
import Record from "../../components/menu_record.png"

const PortalPatientSideBar = () => {
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
                        <a href="/patient_analyze" className="nav_data">
                            AI Analyze
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
                        <a href="/calendar/2024-02-23" className="nav_data">
                            Calendar
                        </a>
                        <div className="nav_dash">
                            &gt;
                        </div>
                    </div>
                    <div className="nav-box">
                        <img class="nav_logo" src={Payments} />
                        <a href="/quiz" className="nav_data">
                            Quiz
                        </a>
                        <div className="nav_dash">
                            &gt;
                        </div>
                    </div>
                    <div className="nav-box">
                        <img class="nav_logo" src={Management} />
                        <a href="/mission_manage" className="nav_data">
                            mission
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
export default PortalPatientSideBar;