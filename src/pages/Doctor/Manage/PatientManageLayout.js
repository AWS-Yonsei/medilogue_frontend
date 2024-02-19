import "./PatientManage.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import Etc from "../../../components/medi_placeholder.png";
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu";
import PortalDoctorSideBar from "../../../layouts/PortalMenu/PortalDoctorSideBar";

const PatientManageLayout = () => {
    let width = 0;
    const max_data = 100;
    const Progress_Box = styled.div`
    display: flex;
    width: 100%;
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
            <PortalMenu>
            </PortalMenu>
            <div className="main">
                <PortalDoctorSideBar>
                </PortalDoctorSideBar>
                <div className="body">
                    <div className="body_title">
                        관리중인 환자 진도
                    </div>
                    <div className="body_table_container">
                        <div className="body_table">
                            <div class="patient_box">
                                <img class="patient_image" src={Etc}></img>
                                <div className="patient_data_box">
                                    <div className="patient_name">
                                        정강희 님:
                                    </div>
                                    <Progress_Box>
                                        <Percent_Bar width={70}>
                                            <div className="patient_bar_data" width={70}>70%</div>
                                        </Percent_Bar>
                                    </Progress_Box>
                                </div>
                                <div className="patient_button_box">
                                    <a href="/mission_manage" className="patient_button">
                                        <div className="patient_button_data"> 미션관리 </div>
                                    </a>
                                    <div className="patient_button">
                                        <div className="patient_button_data"> 환자관리 </div>
                                    </div>
                                </div>
                            </div>
                            <div class="patient_box">
                                <img class="patient_image" src={Etc}></img>
                                <div className="patient_data_box">
                                    <div className="patient_name">
                                        강재현 님:
                                    </div>
                                    <Progress_Box>
                                        <Percent_Bar width={50}>
                                            <div className="patient_bar_data">50%</div>
                                        </Percent_Bar>
                                    </Progress_Box>
                                </div>


                                <div className="patient_button_box">
                                    <a href="/mission_manage" className="patient_button">
                                        <div className="patient_button_data"> 미션관리 </div>
                                    </a>
                                    <div className="patient_button">
                                        <div className="patient_button_data"> 환자관리 </div>
                                    </div>
                                </div>
                            </div>
                            <div class="patient_box">
                                <img class="patient_image" src={Etc}></img>
                                <div className="patient_data_box">
                                    <div className="patient_bar_box">
                                        <div className="patient_name">
                                            우지훈 님:
                                        </div>
                                        <div className="patient_bar_complete">Complete!</div>
                                    </div>
                                    <Progress_Box>
                                        <Percent_Bar width={100}>
                                            <div className="patient_bar_data">100%</div>
                                        </Percent_Bar>
                                    </Progress_Box>
                                </div>
                                <div className="patient_button_box">
                                    <a href="/mission_manage" className="patient_button">
                                        <div className="patient_button_data"> 미션관리 </div>
                                    </a>
                                    <div className="patient_button">
                                        <div className="patient_button_data"> 환자관리 </div>
                                    </div>
                                </div>
                            </div>
                            <div class="patient_box">

                            </div>
                            <div class="patient_box">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}



export default PatientManageLayout;






