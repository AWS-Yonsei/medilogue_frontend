import "./PatientPortal.css"
import { Link } from "react-router-dom";
import React, { useState, PureComponent } from 'react';
import Redbox from "../../../components/redbox.png"
import Bluebox from "../../../components/bluebox.png"
import Yellowbox from "../../../components/yellowbox.png"
import Body_Arrow from "../../../components/arrow-right.png"
import More from "../../../components/more.png"
import Greenlight from "../../../components/green_light.png"
import Orangelight from "../../../components/orange_light.png"
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu";
import PortalPatientSideBar from "../../../layouts/PortalMenu/PortalPatientSideBar";
import ChartData1 from "../../../components/solution/chart2.png"
import ChartData2 from "../../../components/solution/chart3.png"
import { RadialBarChart, RadialBar,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PatientPortalLayout = () => {

    const data = [
        {
            name: '2023년 07월',
            FBS: 187
        },
        {
            name: '2023년 08월',
            FBS: 199
        },
        {
            name: '2023년 09월',
            FBS: 123
        },
        {
            name: '2023년 10월',
            FBS: 160
        },
        {
            name: '2023년 11월',
            FBS: 189
        },
        {
            name: '2023년 12월',
            FBS: 129
        },
        {
            name: '2024년 1월',
            FBS: 130
        },
    ];
    const data2 = [
        {
            name: '평균',
            avg: 53,
            fill: '#8884d8',
        },
        {
            name: '김영서님',
            avg: 60,
            fill: '#83a6ed',
        }
    ];

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
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
                        <a href="/patient_analyze" className="yellow-box">
                            <img className="box-icon" src={Yellowbox}></img>
                            <div className="box-text">
                                AI 건강분석
                            </div>
                            <div className="box-to">
                                <img class="box-arrow" src={Body_Arrow} />
                            </div>
                        </a>
                        <a href="/mission_manage" className="blue-box">
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
                            <div className="chart-box-title">공복 혈당(FBS)</div>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    width={400}
                                    height={250}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 50,
                                        left: 20,
                                        bottom: 10,
                                    }}
                                    barSize={20}
                                >
                                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Bar dataKey="FBS" fill="#3088C8" background={{ fill: '#eee' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart-box-right">
                        <div className="chart-box-title">미션 달성률</div>
                            <ResponsiveContainer width="100%" height="80%">
                                <RadialBarChart cx="50%" cy="40%" innerRadius="30%" outerRadius="100%" barSize={5} data={data2}>
                                    <RadialBar
                                        minAngle={3.6}
                                        label={{ position: 'insideTopRight', fill: '#000', offset: '3' }}
                                        background
                                        clockWise
                                        dataKey="avg"
                                    />
                                    <Legend iconSize={30} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                                </RadialBarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="tables">
                        <div className="table_container">
                            <div className="table_header">
                                <div className="table_name">
                                    김영서님의 상담내역
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
                                        정강희
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






