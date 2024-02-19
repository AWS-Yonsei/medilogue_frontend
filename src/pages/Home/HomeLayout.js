import Menu from "../../layouts/Menu/Menu.js"
import { Link } from "react-router-dom";

import image_Left_Doctor from "../../components/Left_Doctor.png";
import image_Right_Doctor from "../../components/Right_Doctor.png";
import bottomshowleft from "../../components/bottom_left.png";
import bottomshowcenter from "../../components/bottom_center.png";
import bottomshowright from "../../components/bottom_right.png";
import bottomshowleftsymbol from "../../components/bottom_left_symbol.png";
import bottomshowcentersymbol from "../../components/bottom_center_symbol.png";
import bottomshowrightsymbol from "../../components/bottom_right_symbol.png";
import "./Home.css"

const HomeLayout = () => {
    return (
        <>
            <Menu></Menu>
            <div className="Main">
                <div className="Right_Doc">
                    <img class="Right_Doctor_image" src={image_Right_Doctor}></img>
                </div>
                <div className="Left_Doc">
                    <img className="Left_Doctor_image" src={image_Left_Doctor}></img>
                </div>
                <div className="Docs">
                    <div className="Welcome">Welcome</div>
                    <div className="Welcome_Medi">
                        Take care of everything <br></br>just in one step on
                    </div>
                    <div className="Welcome_Medilogue">
                        Medilogue
                    </div>
                    <div className="Welcome_etc">
                        Let Medilog helps you be healthy!
                    </div>
                    <div className="Welcome_buttons">
                        <div className="Welcome_startbutton">
                            <Link className="Welcome_startbuttonsdocs" to={'/login'}>Start Now</Link>
                        </div>
                        <div className="Welcome_learnbutton">
                            <Link className="Welcome_learnbuttonsdocs" to={'/login'}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main_Bottom">
                <div className="Bottom_docs">
                    <div className="Bottom_docs_medilogue">
                        Medilogue
                    </div>
                    <div className="Bottom_docs_words">
                        Activity
                    </div>
                </div>
                <div className="Bottom_show">
                    <div className="Bottom_show_box">
                        <img class="Bottom_show_img" src={bottomshowleft}></img>
                        <div className="Bottom_show_frame">
                            <img class="Bottom_show_symbol" src={bottomshowleftsymbol}></img>
                            <div className="Bottom_show_cap">
                                의료상담
                            </div>
                            <div className="Bottom_show_cap_underline" />
                            <div className="Bottom_show_docs">
                                전문가에게 상담받고, 자신의 상황을 정확하게 파악하세요!
                            </div>
                            <div className="Bottom_show_tail">
                                Read more
                            </div>
                        </div>
                    </div>
                    <div className="Bottom_show_box">
                        <img class="Bottom_show_img" src={bottomshowcenter}></img>
                        <div className="Bottom_show_frame">
                            <img class="Bottom_show_symbol" src={bottomshowcentersymbol}></img>
                            <div className="Bottom_show_cap">
                                진단내역
                            </div>
                            <div className="Bottom_show_cap_underline" />
                            <div className="Bottom_show_docs">
                                지금까지 받아온 진료기록을 살펴보시고 건강의 상태를 확인하세요!
                            </div>
                            <div className="Bottom_show_tail">
                                Read more
                            </div>
                        </div>
                    </div>
                    <div className="Bottom_show_box">
                        <img class="Bottom_show_img" src={bottomshowright}></img>
                        <div className="Bottom_show_frame">
                            <img class="Bottom_show_symbol" src={bottomshowrightsymbol}></img>
                            <div className="Bottom_show_cap">
                                의료사 소개
                            </div>
                            <div className="Bottom_show_cap_underline" />
                            <div className="Bottom_show_docs">
                                국내 최고의 의료사들이 편리한 서비스를 위해 대기중입니다!
                            </div>
                            <div className="Bottom_show_tail">
                                Read more
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Bottom_tail">
                    <div className="Bottom_tail_docs">
                        Using Medilogue is the best choice
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeLayout;