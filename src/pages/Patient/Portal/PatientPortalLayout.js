import "./PatientPortal.css"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Redbox from "../../../components/redbox.png"
import Bluebox from "../../../components/bluebox.png"
import Yellowbox from "../../../components/yellowbox.png"
import Body_Arrow from "../../../components/arrow-right.png"
import More from "../../../components/more.png"
import Greenlight from "../../../components/green_light.png"
import Orangelight from "../../../components/orange_light.png"
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu";
import PortalPatientSideBar from "../../../layouts/PortalMenu/PortalPatientSideBar";

const PatientPortalLayout = () => {
   
    return (
        <>
            <PortalMenu>
            </PortalMenu>
            <div className="main">
                <PortalPatientSideBar>
                </PortalPatientSideBar>
                <div className="body">
                    <div className="boxes">
                        <a href="/quiz" className="red-box">
                            <img className="box-icon" src={Redbox}></img>
                            <div className="box-text">
                                의료 퀴즈
                            </div>
                            <div className="box-to">
                                <img class="box-arrow" src={Body_Arrow} />
                            </div>
                        </a>
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
                                        <Link to={'/patient_consult'} className="table_main_data_button">확인</Link>
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
                                        <Link to={'/patient_consult'} className="table_main_data_button">확인</Link>
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
                                        <Link to={'/patient_consult'} className="table_main_data_button">확인</Link>
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
                                        <Link to={'/patient_consult'} className="table_main_data_button">확인</Link>
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
                                        <Link to={'/patient_consult'} className="table_main_data_button">확인</Link>
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






