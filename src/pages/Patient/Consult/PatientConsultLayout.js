import "./PatientConsult.css"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu.js";
import Modal from 'react-modal';
import Change_Patient from "../../../components/nav_change_language.png"
import Avatar_one from "../../../components/avatar1.png"
import Avatar_two from "../../../components/avatar2.png"
import PortalPatientSideBar from "../../../layouts/PortalMenu/PortalPatientSideBar.js";

const PatientConsultLayout = () => {

    return (
        <>
            <PortalMenu>
            </PortalMenu>
            <div className="main">
                <PortalPatientSideBar>
                </PortalPatientSideBar>
                <div className="body">
                    <div className="body_title_box">
                        <div className="body_title">
                            상담내역
                        </div>
                        <div className="body_subtitle">
                            작성 및 수정
                        </div>
                    </div>
                    <div className="body_manage_container">
                        <div className="manage_box">
                            <div className="manage_box_header">
                                <div className="doctor_patient_name">
                                    XXX 환자와 XXX 의사
                                </div>
                                <img class="doctor_patient_choose" src={Change_Patient} />
                                <div className="manage_box_calandar">
                                    <div className="manage_box_container">
                                        <div className="manage_box_title">
                                            📆 Date:
                                        </div>
                                        <div className="manage_box_data">
                                            2024. 01. 23.
                                        </div>
                                    </div>
                                    <div className="manage_box_container">
                                        <div className="manage_box_title">
                                            ⏰ Time:
                                        </div>
                                        <div className="manage_box_data">
                                            43min
                                        </div>
                                    </div>
                                    <div className="manage_box_container">
                                        <div className="manage_box_title">
                                            💡 Language:
                                        </div>
                                        <div className="manage_box_data">
                                            Korean / English
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="manage_box_divider" />
                            <div className="manage_box_body">
                                <div className="manage_box_chat">
                                    <img src={Avatar_two} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 1</div>
                                            <div className="manage_box_chat_data_timestamp">00:38</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 당뇨병은 혈당 조절에 문제가 생겨 발생하는 대표적인 만성질환입니다. 여러 가지 이유로 발생할 수 있지만, 현재 상황에서는 당뇨의 원인을 좀 더 자세히 파악해봐야 할 것 같습니다. 우선은 생활습관의 변화와 함께 식이요법을 통해 혈당을 조절하는 노력이 필요합니다. 적절한 운동과 식이 조절은 중요한데, 이에 대해 상담해 드리도록 하겠습니다.</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_one} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 2</div>
                                            <div className="manage_box_chat_data_timestamp">00:39</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 어떤 음식을 먹어야 하고, 어떤 운동이 좋은지 알려주시겠어요?</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_two} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 2</div>
                                            <div className="manage_box_chat_data_timestamp">00:39</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 당뇨병은 혈당 조절에 문제가 생겨 발생하는 대표적인 만성질환입니다. 여러 가지 이유로 발생할 수 있지만, 현재 상황에서는 당뇨의 원인을 좀 더 자세히 파악해봐야 할 것 같습니다. 우선은 생활습관의 변화와 함께 식이요법을 통해 혈당을 조절하는 노력이 필요합니다. 적절한 운동과 식이 조절은 중요한데, 이에 대해 상담해 드리도록 하겠습니다.</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_one} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 1</div>
                                            <div className="manage_box_chat_data_timestamp">00:41</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 어떤 음식을 먹어야 하고, 어떤 운동이 좋은지 알려주시겠어요?</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_two} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 2</div>
                                            <div className="manage_box_chat_data_timestamp">00:39</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 당뇨병은 혈당 조절에 문제가 생겨 발생하는 대표적인 만성질환입니다. 여러 가지 이유로 발생할 수 있지만, 현재 상황에서는 당뇨의 원인을 좀 더 자세히 파악해봐야 할 것 같습니다. 우선은 생활습관의 변화와 함께 식이요법을 통해 혈당을 조절하는 노력이 필요합니다. 적절한 운동과 식이 조절은 중요한데, 이에 대해 상담해 드리도록 하겠습니다.</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_one} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 1</div>
                                            <div className="manage_box_chat_data_timestamp">00:41</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 어떤 음식을 먹어야 하고, 어떤 운동이 좋은지 알려주시겠어요?</div>
                                    </div>
                                </div>
                                <div className="manage_box_chat">
                                    <img src={Avatar_two} className="manage_box_image" />
                                    <div className="manage_box_chat_data">
                                        <div className="manage_box_chat_header">
                                            <div className="manage_box_chat_data_name">참가자 2</div>
                                            <div className="manage_box_chat_data_timestamp">00:39</div>
                                        </div>
                                        <div className="manage_box_chat_data_chat"> 당뇨병은 혈당 조절에 문제가 생겨 발생하는 대표적인 만성질환입니다. 여러 가지 이유로 발생할 수 있지만, 현재 상황에서는 당뇨의 원인을 좀 더 자세히 파악해봐야 할 것 같습니다. 우선은 생활습관의 변화와 함께 식이요법을 통해 혈당을 조절하는 노력이 필요합니다. 적절한 운동과 식이 조절은 중요한데, 이에 대해 상담해 드리도록 하겠습니다.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatientConsultLayout;






