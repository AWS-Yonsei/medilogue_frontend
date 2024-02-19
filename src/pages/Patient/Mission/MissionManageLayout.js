import "./MissionManage.css"
import React, { useState } from 'react';
import Checkbox from "../../../components/checkbox";
import Plus from "../../../components/plus.png";
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu";
import PortalPatientSideBar from "../../../layouts/PortalMenu/PortalPatientSideBar";
import Check from "../../../components/check.png"

const MissionLayout = () => {
    const [uncheck_1, check_1] = useState(false);
    const [uncheck_2, check_2] = useState(false);
    const [uncheck_3, check_3] = useState(false);
    const [uncheck_4, check_4] = useState(false);
    const [uncheck_5, check_5] = useState(false);
    return (
        <>
            <PortalMenu>
            </PortalMenu>
            <div className="main">
                <PortalPatientSideBar>
                </PortalPatientSideBar>
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


