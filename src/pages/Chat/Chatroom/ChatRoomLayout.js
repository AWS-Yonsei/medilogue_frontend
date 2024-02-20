import "./ChatRoom.css"
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import Unmute from "../../../components/unmute.png";
import Uncam from "../../../components/uncam.png";
import Security from "../../../components/Security.png";
import Participants from "../../../components/Participants.png";
import Chat from "../../../components/Chat.png";
import Sharescreen from "../../../components/Share Screen.png";
import Record from "../../../components/Record.png";
import Management from "../../../components/Management.png";
import Out from "../../../components/Call_end.png";
import Placeholder from "../../../components/placeholder.jpg";
import CloseButton from '../../../components/closebutton.png';

const ChatRoomLayout = () => {

    return (
        <div className="chatroom_container">
            <div className="chatroom_body">
                <div className="chatroom_face">
                    <img src={Placeholder} className="chatroom_face_data" ></img>
                </div>
                <div className="chatroom_chat">
                    <div className="chatroom_topbar">
                        <div className="chatroom_topbar_name">
                            Chatting Room
                        </div>
                        <button className="chatroom_topbar_close">
                            X    
                        </button>
                    </div>
                </div>
            </div>
            <div className="chatroom_bottom">
                <div className="chatroom_bottom_leftbox">
                    <button className="chatroom_bottom_box">
                        <img src={Unmute} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Unmute</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Uncam} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Start Video</div>
                    </button>
                </div>
                <div className="chatroom_bottom_centerbox">
                    <button className="chatroom_bottom_box">
                        <img src={Security} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Security</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Participants} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Participants</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Chat} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Chat</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Sharescreen} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Sharescreen</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Record} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Record</div>
                    </button>
                    <button className="chatroom_bottom_box">
                        <img src={Management} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Management</div>
                    </button>
                </div>
                <div className="chatroom_bottom_rightbox">
                    <button className="chatroom_bottom_box">
                        <a href="chat_portal">
                            <img src={Out} className="chatroom_bottom_icon_big"></img>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatRoomLayout;






