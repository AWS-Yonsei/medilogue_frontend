import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import "./PortalMenu.css";
import logo from "../../components/logo.png";
import Nav_Search from "../../components/nav_search.png"
import Nav_Change_Language from "../../components/nav_change_language.png"
import Nav_Notice from "../../components/nav_notice.png"
import Nav_Profile from "../../components/avatar.png"

const PortalMenu = () => {
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
    const [isOpen, Menu] = useState(false);
    const toggleMenu = () => {
        Menu(isOpen => !isOpen);
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
                        <button>
                            <img class="nav_profile_button" src={Nav_Change_Language} onClick={() => toggleMenu()} />
                            <div className={isOpen ? "show-menu" : "hide-menu"}>
                                <div className="nav_profile_container">
                                    <div className="nav_profile_image">
                                        <img class="nav_profile_avatar" src={Nav_Profile} />
                                        <div class="nav_profile_name">User Name</div>
                                        <div class="nav_profile_id">ID: 1234567</div>
                                    </div>
                                    <div className="nav_profile_divider1"/>
                                    <div className="nav_profile_holder">
                                        <div className="nav_profile_holder_header">환자 정보</div>
                                        <div className="nav_profile_holder_data">나이: 23살</div>
                                        <div className="nav_profile_holder_data">연결 보호자: 강재현</div>
                                    </div>
                                    <div className="nav_profile_divider"/>
                                    <div className="nav_profile_holder">
                                        <div className="nav_profile_holder_header">기본 정보</div>
                                        <div className="nav_profile_holder_data">키: 178cm</div>
                                        <div className="nav_profile_holder_data">몸무게: 52kg</div>
                                        <div className="nav_profile_holder_data">혈액형: O형</div>
                                    </div>
                                    <div className="nav_profile_divider"/>
                                    <div className="nav_profile_holder">
                                        <div className="nav_profile_holder_header">최근 진료정보</div>
                                        <div className="nav_profile_holder_data">방문병원: 강남성모병원</div>
                                        <div className="nav_profile_holder_data">담당교수: 강재현</div>
                                        <div className="nav_profile_holder_data">진단: 당뇨</div>
                                        <div className="nav_profile_holder_data">처방: 타이레놀</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PortalMenu;