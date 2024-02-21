import "./PatientAnalyze.css"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled from "styled-components";
import PortalMenu from "../../../layouts/PortalMenu/PortalMenu.js";
import PortalPatientSideBar from "../../../layouts/PortalMenu/PortalPatientSideBar.js";
import Arrow_right from "../../../components/arrow-right.png";
import SmileGreen from "../../../components/smile_green.png";
import SmileOrange from "../../../components/smile_orange.png";
import SmileRed from "../../../components/smile_red.png";
import Solution from "../../../data/solution.json";
import Solution1 from "../../../components/solution/1.jpg";
import Solution2 from "../../../components/solution/2.jpg";
import Solution3 from "../../../components/solution/3.jpg";
import Solution4 from "../../../components/solution/4.jpg";
import Solution5 from "../../../components/solution/5.jpg";

const PatientConsultLayout = () => {
    const suggestion_data = Solution;
    const [content, setContent] = useState("Zero");
    const handleClickButton = (e) => {
        const { name } = e.currentTarget;
        setContent(name);
    };
    const selectComponent = {
        Zero: <Data0 />,
        One: <Data1 />,
        Two: <Data2 />,
        Three: <Data3 />,
        Four: <Data4 />,
        Five: <Data5 />,
    };

    return (
        <>
            <PortalMenu>
            </PortalMenu>
            <div className="main_analyze">
                <PortalPatientSideBar>
                </PortalPatientSideBar>
                <div className="body">
                    <div className="body_container">
                        <div className="body_report">
                            <div className="body_container_name">분석결과</div>
                            <div className="body_report_top_box"> 
                                <div className="body_report_top_words">
                                    정강희 님은 <br/>
                                    지금 <div className="text_orange">주의</div> 단계입니다
                                </div>

                            </div>
                        </div>
                        <div className="body_improve">
                            <div className="body_container_name">개선방안</div>
                            <div className="body_improve_divider" />
                            <div className="body_improve_box">
                                <div className="body_improve_name">
                                    식사 미션
                                </div>
                                <div className="body_improve_subname">
                                    나만의 식사 습관 1개를 선택하세요.
                                </div>
                                <div className="body_suggestion_box">
                                    <img src={Solution4} className="body_suggestion_box_image" />
                                    <div className="body_suggestion_box_title">{suggestion_data[3].title}</div>
                                    <div className="body_suggestion_box_button_container">
                                        <button onClick={handleClickButton} name='One'>
                                            <img src={Arrow_right} className="body_suggestion_box_button" alt="Arrow-Right" />
                                        </button>
                                    </div>
                                </div>
                                <div className="body_suggestion_box">
                                    <img src={Solution5} className="body_suggestion_box_image" />
                                    <div className="body_suggestion_box_title">{suggestion_data[4].title}</div>
                                    <div className="body_suggestion_box_button_container">
                                        <button onClick={handleClickButton} name='Two'>
                                            <img src={Arrow_right} className="body_suggestion_box_button" alt="Arrow-Right" />
                                        </button>
                                    </div>
                                </div>

                                <div className="body_suggestion_box">
                                    <img src={Solution3} className="body_suggestion_box_image" />
                                    <div className="body_suggestion_box_title">{suggestion_data[2].title}</div>
                                    <div className="body_suggestion_box_button_container">
                                        <button onClick={handleClickButton} name='Three'>
                                            <img src={Arrow_right} className="body_suggestion_box_button" alt="Arrow-Right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="body_improve_divider" />
                            <div className="body_improve_box">
                                <div className="body_improve_name">
                                    행동 미션
                                </div>
                                <div className="body_improve_subname">
                                    나만의 식행동 습관 1개를 선택하세요.
                                </div>
                                <div className="body_suggestion_box">
                                    <img src={Solution1} className="body_suggestion_box_image" />
                                    <div className="body_suggestion_box_title">{suggestion_data[0].title}</div>
                                    <div className="body_suggestion_box_button_container">
                                        <button onClick={handleClickButton} name='Four'>
                                            <img src={Arrow_right} className="body_suggestion_box_button" alt="Arrow-Right" />
                                        </button>
                                    </div>
                                </div>
                                <div className="body_suggestion_box">
                                    <img src={Solution2} className="body_suggestion_box_image" />
                                    <div className="body_suggestion_box_title">{suggestion_data[1].title}</div>
                                    <div className="body_suggestion_box_button_container">
                                        <button onClick={handleClickButton} name='Five'>
                                            <img src={Arrow_right} className="body_suggestion_box_button" alt="Arrow-Right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body_improve_data">
                            {content && selectComponent[content]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default PatientConsultLayout;

const Data0 = () => {
    return (
        <>
            <div className="body_container_name">상세방안</div>
        </>
    );
}

const Data1 = () => {
    return (
        <>
            <div className="body_container_name">라면 먹지 않기</div>
            <div className="body_improve_data_box">
                <img src={Solution4} className="body_improve_data_image" />
                <div className="body_improve_divider" />
                <div className="body_improve_data_title">
                    간략 설명
                </div>
                <div className="body_improve_data_main">
                    밀가루, 팜유, 소금 등을 주원료로 하는 라면은 자칫 탄수화물, 포화지방, 나트륨을 과잉섭취하게 됩니다.
                </div>
                <div className="body_improve_data_title">
                    실천 방법
                </div>
                <div className="body_improve_data_main">
                    1. 면은 탄수화물입니다.<br />
                    밀가루가 주원료인 라면은 탄수화물 섭취에 치중될 수 있습니다.
                </div>
                <div className="body_improve_data_main">
                    2. 팜유는 포화지방입니다.<br />
                    라면은 보통 유탕면이며 면을 팜유로 튀기는데 이 팜유는 포화지방을 함유합니다.
                </div>
                <div className="body_improve_data_main">
                    3. 스프는 나트륨입니다.<br />
                    라면의 면과 국물을 내는 분말 스프에는 나트륨이 많이 함유되어 있습니다.
                </div>
            </div>
        </>
    );
};
const Data2 = () => {
    return (
        <>
            <div className="body_container_name">잡곡 섞어먹기</div>
            <div className="body_improve_data_box">
                <img src={Solution5} className="body_improve_data_image" />
                <div className="body_improve_divider" />
                <div className="body_improve_data_title">
                    간략 설명
                </div>
                <div className="body_improve_data_main">
                    잡곡은 필수아미노산, 무기질, 식이섬유가 풍부합니다. 현미, 배아미, 흑미, 보리, 조, 귀리, 율무, 수수, 통밀 등의 곡류와 백태, 서리태, 약콩, 적두, 녹두, 병아리콩 등의 콩류를 적당히 활용합니다. 선택이 어렵다면 혼합제품을 활용할 수 있습니다.
                </div>
                <div className="body_improve_data_title">
                    실천 방법
                </div>
                <div className="body_improve_data_main">
                    1. 적정량의 잡곡을 밥에 섞어 먹습니다. <br />
                    성인 기준 백미 70% 잡곡 30% 정도로 섞고, 소화가 어렵다면 잡곡의 비율을 줄입니다.
                </div>
                <div className="body_improve_data_main">
                    2. 가공된 잡곡이나 찰진잡곡 또는 발아잡곡은 조금 더 부드럽게 이용할 수 있습니다. <br />
                    (압맥(소화가 쉽게 가공한 납작보리), 할맥(반으로 자른 보리), 배아미(쌀눈이 붙어 있는 백미), 찰기가 있는 잡곡(찰현미, 찰보리, 차조, 차수수 등), 발아현미)
                </div>
                <div className="body_improve_data_main">
                    3. 빵, 샐러드, 반찬에 잡곡을 활용합니다. <br />
                    통곡물 빵을 고르고, 오트밀(귀리를 벗겨 가공)을 샐러드에 넣고, 미강가루(쌀겨의 가루)를 반찬 양념에 넣습니다.
                </div>
            </div>
        </>
    );
};
const Data3 = () => {
    return (
        <>
            <div className="body_container_name">밀가루 먹지 않기</div>
            <div className="body_improve_data_box">
                <img src={Solution3} className="body_improve_data_image" />
                <div className="body_improve_divider" />
                <div className="body_improve_data_title">
                    간략 설명
                </div>
                <div className="body_improve_data_main">
                    밀가루는 소화흡수가 빠른 탄수화물 식품입니다. 혈당조절 또는 복부비만 관리가 필요하다면 더욱이 밀가루 음식을 피하는 것이 중요합니다.
                </div>
                <div className="body_improve_data_title">
                    실천 방법
                </div>
                <div className="body_improve_data_main">
                    1. 밀가루 음식을 먹지 않습니다. <br />
                    밀가루 음식으로는 빵, 국수, 라면, 과자, 케이크 등이 있습니다.
                </div>
                <div className="body_improve_data_main">
                    2. 밀가루가 없는 음식을 먹습니다.<br />
                    통곡물, 과일, 채소, 지방이 적은 육류와 신선한 해산물, 유제품 등을 먹습니다.
                </div>
                <div className="body_improve_data_main">
                    3. 밀가루 음식을 대신할 음식을 찾습니다.<br />
                    면을 즐겼다면 실곤약을, 빵을 즐겼다면 단백질빵을 대체음식으로 먹습니다.
                </div>
            </div>
        </>
    );
};
const Data4 = () => {
    return (
        <>
            <div className="body_container_name">식후 가벼운 운동하기</div>
            <div className="body_improve_data_box">
                <img src={Solution1} className="body_improve_data_image" />
                <div className="body_improve_divider" />
                <div className="body_improve_data_title">
                    간략 설명
                </div>
                <div className="body_improve_data_main">
                    식후 가벼운 활동은 소화를 도울 뿐 아니라 혈당 상승을 막는데도 도움이 됩니다.
                </div>
                <div className="body_improve_data_title">
                    실천 방법
                </div>
                <div className="body_improve_data_main">
                    1. 식후 20~30분 정도 가벼운 활동은 부담 없이 합니다.
                </div>
                <div className="body_improve_data_main">
                    2. 식후 가벼운 활동은 혈당저하와 지방 연소에 도움이 됩니다. <br />
                    (산책하기, 제자리 걷기, 스트레칭 등)
                </div>
                <div className="body_improve_data_main">
                    3. 식후 격렬한 운동은 소화불량, 위장장애 등을 초래할 수 있으므로 식후 1시간 이후에 합니다. <br />
                    (달리기, 자전거타기, 수영, 댄스 등)
                </div>
            </div>
        </>
    );
};
const Data5 = () => {
    return (
        <>
            <div className="body_container_name">규칙적으로 식사하기</div>
            <div className="body_improve_data_box">
                <img src={Solution2} className="body_improve_data_image" />
                <div className="body_improve_divider" />
                <div className="body_improve_data_title">
                    간략 설명
                </div>
                <div className="body_improve_data_main">
                    남들과 같은 시간에 식사할 필요는 없지만 일정한 패턴으로 식사를 하면 무심코 먹거나 폭식을 하는 상황을 막을 수 있습니다. 이와 함께 다양한 식품을 먹는다면 영양적으로도 균형잡힌 식사를 할 수 있습니다.
                </div>
                <div className="body_improve_data_title">
                    실천 방법
                </div>
                <div className="body_improve_data_main">
                    1. 하루 먹을 식사량을 패턴에 맞게 배분하여 먹습니다.
                    불규칙적인 식사는 영양소나 양이 부족해서, 다음 식사 때 과식을 할 우려가 있습니다.
                </div>
                <div className="body_improve_data_main">
                    2. 되도록 다양한 식품을 골고루 먹습니다. <br />
                    곡류, 고기ㆍ생선ㆍ계란ㆍ콩류, 채소류, 과일류, 우유ㆍ유제품류, 유지ㆍ당류! 여러 식품을 먹는다는 것은 다양한 영양소를 섭취한다는 것입니다.
                </div>
                <div className="body_improve_data_main">
                    3. 하루 세 끼니 또는 두 끼니 사이에 중간 간식을 챙깁니다.<br />
                    규칙적인 식사가 부담된다면 아침, 점심, 저녁 나만의 식사 시간을 일정하게 가집니다.
                </div>
            </div>
        </>
    );
};
