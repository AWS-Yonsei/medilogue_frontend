import "./MissionManage.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Checkbox from "../../../components/checkbox";
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
import Plus from "../../../components/plus.png"


const MissionLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [uncheck_1, check_1] = useState(false);
    const [uncheck_2, check_2] = useState(false);
    const [uncheck_3, check_3] = useState(false);
    const [uncheck_4, check_4] = useState(false);
    const [uncheck_5, check_5] = useState(false);
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

    const Progress_Box = styled.div`
    display: flex;
    position: relative;
    top: 80px;
    right: 60px;
    width: 70%;
    height: 2.1875rem;
    flex-shrink: 0;
    border-radius: 2.1875rem;
    background: #D9D9D9;
    `;
    const Percent_Bar = styled.div`
    width: ${({ width }) => `${width}%`};
    display: flex;
    float: inline-start;
    justify-content: center;
    height: 2.1875rem;
    flex-shrink: 0;
    border-radius: 2.1875rem;
    background: #FF9424;
    `;
    const Percent_Data = styled.div`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.50);
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.10);
    font-family: Krub;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    `;
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
                    <div className="body_title">
                        정강희 님의 오늘의 미션
                    </div>
                    <div className="body_button">
                        <div className="body_button_add_box">
                            <div className="body_button_add">
                                <img className="body_button_add_image" src={Plus}></img>
                            </div>
                        </div>
                        <button className="body_button_data">미션 등록하기</button>
                    </div>
                    <div className="body_table">
                        <button className="body_filter_box">
                            <div className="body_filter">
                                Weekly
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f61fdbef94675c9aacb5be42066e62f3955d19792cefbdd628a2fb68a54209?"
                                className=" ml-3 w-2 aspect-[2] fill-slate-400"
                            />
                        </button>
                        <div className="body_table_data_box">
                            <div className="body_table_topbar">
                                <div className="body_table_topbar_data1">No.</div>
                                <div className="body_table_topbar_data">오늘의 미션</div>
                                <div className="body_table_topbar_data">세부조건</div>
                                <div className="body_table_topbar_data1">달성 여부</div>
                            </div>
                            <div className="body_table_data">
                                <div className="body_table_data_num">
                                    1
                                </div>
                                <div className="body_table_data_mission">
                                    점심 30분 후 약 복용
                                </div>
                                <div className="body_table_data_detail">
                                    죽으면 됩니다.
                                </div>
                                <div className="body_table_data_check">
                                    <Checkbox checked={uncheck_1} onChange={check_1} />
                                </div>
                            </div>
                            <div className="body_table_data_divider" />
                            <div className="body_table_data">
                                <div className="body_table_data_num">
                                    2
                                </div>
                                <div className="body_table_data_mission">
                                    조깅
                                </div>
                                <div className="body_table_data_detail">
                                    조깅 하루 20분 - 40분
                                </div>
                                <div className="body_table_data_check">
                                    <Checkbox checked={uncheck_2} onChange={check_2} />
                                </div>
                            </div>
                            <div className="body_table_data_divider" />
                            <div className="body_table_data">
                                <div className="body_table_data_num">
                                    3
                                </div>
                                <div className="body_table_data_mission">
                                    식단 관리
                                </div>
                                <div className="body_table_data_detail">
                                    나트륨 2000m 이하 섭취
                                </div>
                                <div className="body_table_data_check">
                                    <Checkbox checked={uncheck_3} onChange={check_3} />
                                </div>
                            </div>
                            <div className="body_table_data_divider" />
                            <div className="body_table_data">
                                <div className="body_table_data_num">
                                    4
                                </div>
                                <div className="body_table_data_mission">
                                    식단 관리
                                </div>
                                <div className="body_table_data_detail">
                                    단백질 110g 섭취
                                </div>
                                <div className="body_table_data_check">
                                    <Checkbox checked={uncheck_4} onChange={check_4} />
                                </div>
                            </div>
                            <div className="body_table_data_divider" />
                            <div className="body_table_data">
                                <div className="body_table_data_num">
                                    5
                                </div>
                                <div className="body_table_data_mission">
                                    저녁 30분 후 약 복용
                                </div>
                                <div className="body_table_data_detail">

                                </div>
                                <div className="body_table_data_check">
                                    <Checkbox checked={uncheck_5} onChange={check_5} />
                                </div>
                            </div>
                            <div className="body_table_data_divider" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}



export default MissionLayout;


