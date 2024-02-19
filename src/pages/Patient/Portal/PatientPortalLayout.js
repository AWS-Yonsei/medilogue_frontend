import "./PatientPortal.css"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import logo from "../../../components/logo.png";
import Nav_Search from "../../../components/nav_search.png"
import Nav_Change_Language from "../../../components/nav_change_language.png"
import Nav_Notice from "../../../components/nav_notice.png"
import Nav_Profile from "../../../components/avatar.png"
import Appointment from "../../../components/menu_appointment.png"
import Calendar from "../../../components/menu_calendar.png"
import Chatbot from "../../../components/menu_chatbot.png"
import Homepage from "../../../components/menu_homepage.png"
import Management from "../../../components/menu_management.png"
import Mypage from "../../../components/menu_mypage.png"
import Payments from "../../../components/menu_payments.png"
import Record from "../../../components/menu_record.png"
import Redbox from "../../../components/redbox.png"
import Bluebox from "../../../components/bluebox.png"
import Yellowbox from "../../../components/yellowbox.png"
import Body_Arrow from "../../../components/arrow-right.png"
import More from "../../../components/more.png"
import Greenlight from "../../../components/green_light.png"
import Orangelight from "../../../components/orange_light.png"

const PatientPortalLayout = () => {
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
            <div className="header">
                <div className="logos">
                    <img class="logo" src={logo}></img>
                </div>
                <div className="upper-nav">
                    <div className="nav_searchbox">
                        <img class="search_logo" src={Nav_Search} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="nav_search_bar"
                        />
                    </div>
                    <div className="nav_status">
                        <ToggleContainer className="nav_button" onClick={toggleHandler}>
                            <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
                            <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
                        </ToggleContainer>
                        {isOn === false ?
                            <div className='nav_off'>Off</div> :
                            <div className='nav_live'>Live</div>}
                    </div>
                    <div className="nav_language_box">
                        <div className="nav_language_select">
                            English
                        </div>
                        <img class="nav_language_button" src={Nav_Change_Language} />
                    </div>
                    <div className="nav_notice">
                        <img class="nav_notice_button" src={Nav_Notice} onClick={() => setModalIsOpen(true)} />
                        <Modal style="modal_notice" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                            알림창 띄워줄께
                        </Modal>
                    </div>
                    <div className="nav_login">
                        <img class="nav_avatar" src={Nav_Profile} />
                        <div className="nav_data">
                            <div className="nav_nickname">
                                User Name
                            </div>
                            <div className="nav_ID">
                                ID: 1234567
                            </div>
                        </div>
                        <img class="nav_profile_button" src={Nav_Change_Language} />
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
                            <h2 className="nav_submenu">Commerce</h2>
                        </div>
                        <div className="nav-box">
                            <img class="nav_logo" src={Management} />
                            <a href="/management" className="nav_data">
                                Management
                            </a>
                            <div className="nav_dash">
                                &gt;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="boxes">
                        <div className="red-box">
                            <img className="box-icon" src={Redbox}></img>
                            <div className="box-text">
                                의료 퀴즈
                            </div>
                            
                            <div className="box-to">
                                <img class="box-arrow" src={Body_Arrow} />
                            </div>
                        </div>
                        <div className="yellow-box">
                            <img className="box-icon" src={Yellowbox}></img>
                            <div className="box-text">
                                AI 건강분석
                            </div>
                            <div className="box-to">
                                <img class="box-arrow" src={Body_Arrow} />
                            </div>
                        </div>
                        <a href="/patient_manage" className="blue-box">
                            <img className="box-icon" src={Bluebox}></img>
                            <div className="box-text">
                                오늘의 미션
                            </div>
                            <div className="box-to">
                                <img class="box-arrow" src={Body_Arrow} />
                            </div>
                        </a>
                    </div>
                    <div className="charts">
                        <div className="chart-box-left">
                            <div className="placeholder"> Chart </div>
                        </div>
                        <div className="chart-box-right">
                            <div className="placeholder"> Chart </div>
                        </div>
                    </div>
                    <div className="tables">
                        <div className="table_container">
                            <div className="table_header">
                                <div className="table_name">
                                    XXX의 상담내역
                                </div>
                                <div className="table_sort shadow-sm">
                                    <div className="grow">Monthly</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f483ccf15f53e425f7baf14b1a21e9fe6ab072907e456f2395f979dd3c7e1c0e?"
                                        className="self-start w-4 aspect-square"
                                    />
                                </div>
                            </div>
                            <div className="table_main">
                                <div className="table_main_topbar">
                                    <div className="table_main_topbar_data">No.</div>
                                    <div className="table_main_topbar_data">환자 이름</div>
                                    <div className="table_main_topbar_data">ID</div>
                                    <div className="table_main_topbar_data">상담 일자</div>
                                    <div className="table_main_topbar_data">상태</div>
                                    <div className="table_main_topbar_data">상담 내용</div>
                                    <div className="table_main_topbar_data">Action</div>
                                </div>
                                <div className="body_table_data_divider" />
                                <div className="table_main_data_box">
                                    <div className="table_main_data">
                                        1
                                    </div>
                                    <div className="table_main_data">
                                        정강희
                                    </div>
                                    <div className="table_main_data">
                                        #12490
                                    </div>
                                    <div className="table_main_data">
                                        2024.01.02
                                    </div>
                                    
                                    <div className="table_main_data">
                                        <div className="table_main_data_status">
                                            <img src={Greenlight} className="table_main_data_status_light" />
                                            <div className="table_main_data_status_word">
                                                Complete
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table_main_data">
                                        <div className="table_main_data_button">확인</div>
                                    </div>
                                    <div className="table_main_data">
                                        <img src={More} className="" />
                                    </div>
                                </div>
                                <div className="body_table_data_divider" />
                                <div className="table_main_data_box">
                                    <div className="table_main_data">
                                        2
                                    </div>
                                    <div className="table_main_data">
                                        김하은
                                    </div>
                                    <div className="table_main_data">
                                        #12594
                                    </div>
                                    <div className="table_main_data">
                                        2024.01.05
                                    </div>
                                    
                                    <div className="table_main_data">
                                        <div className="table_main_data_status">
                                            <img src={Orangelight} className="table_main_data_status_light" />
                                            <div className="table_main_data_status_word">
                                                In Progress
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table_main_data">
                                        <div className="table_main_data_button">확인</div>
                                    </div>
                                    <div className="table_main_data">
                                        <img src={More} className="" />
                                    </div>
                                </div>
                                <div className="body_table_data_divider" />
                                <div className="table_main_data_box">
                                    <div className="table_main_data">
                                        3
                                    </div>
                                    <div className="table_main_data">
                                        강재현
                                    </div>
                                    <div className="table_main_data">
                                        #12306
                                    </div>
                                    <div className="table_main_data">
                                        2024.01.23
                                    </div>
                                    
                                    <div className="table_main_data">
                                        <div className="table_main_data_status">
                                            <img src={Orangelight} className="table_main_data_status_light" />
                                            <div className="table_main_data_status_word">
                                                In Progress
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table_main_data">
                                        <div className="table_main_data_button">확인</div>
                                    </div>
                                    <div className="table_main_data">
                                        <img src={More} className="" />
                                    </div>
                                </div>
                                <div className="body_table_data_divider" />
                                <div className="table_main_data_box">
                                    <div className="table_main_data">
                                        4
                                    </div>
                                    <div className="table_main_data">
                                        우지훈
                                    </div>
                                    <div className="table_main_data">
                                        #12455
                                    </div>
                                    <div className="table_main_data">
                                        2024.01.12
                                    </div>
                                    
                                    <div className="table_main_data">
                                        <div className="table_main_data_status">
                                            <img src={Greenlight} className="table_main_data_status_light" />
                                            <div className="table_main_data_status_word">
                                                Complete
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table_main_data">
                                        <div className="table_main_data_button">확인</div>
                                    </div>
                                    <div className="table_main_data">
                                        <img src={More} className="" />
                                    </div>
                                </div>
                                <div className="body_table_data_divider" />
                                <div className="table_main_data_box">
                                    <div className="table_main_data">
                                        5
                                    </div>
                                    <div className="table_main_data">
                                        김영서
                                    </div>
                                    <div className="table_main_data">
                                        #12412
                                    </div>
                                    <div className="table_main_data">
                                        2024.01.15
                                    </div>
                                    
                                    <div className="table_main_data">
                                        <div className="table_main_data_status">
                                            <img src={Greenlight} className="table_main_data_status_light" />
                                            <div className="table_main_data_status_word">
                                                Complete
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table_main_data">
                                        <div className="table_main_data_button">확인</div>
                                    </div>
                                    <div className="table_main_data">
                                        <img src={More} className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="bottom_button">
                            <Link to={'/patient_consult'}>내역 작성</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatientPortalLayout;






