import "./ChatRoom.css"
import React, { useState, useCallback } from 'react';
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
import VideoPlayer from "./VideoPlayer";
import AWS from 'aws-sdk';

const ChatRoomLayout = () => {
    const [stream, setStream] = useState();
    const [media, setMedia] = useState();
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState();
    const [analyser, setAnalyser] = useState();
    const [audioUrl, setAudioUrl] = useState();

    const uploadS3 = async(sound) => {
        const REGION = process.env.REACT_APP_AWS_REGION
        const ACESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY
        const SECRET_ACESS_KEY_ID = process.env.REACT_APP_AWS_SECRET_KEY
        const BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME
        AWS.config.update({
            region: REGION,
            accessKeyId: ACESS_KEY_ID,
            secretAccessKey: SECRET_ACESS_KEY_ID,
        });
        const updateDate = new Date(sound.lastModifiedDate);
        console.log(updateDate);
        //나중에 지정 가능하도록 고쳐야함.
        const upload = new AWS.S3.ManagedUpload({
            params: {
                ACL: 'public-read',
                Bucket: BUCKET_NAME,
                Key: `input/${sound.name+".mp3"}`,
                Body: sound,
            }
        })

        await upload.promise()
        .then(
            console.log('업로드')
        )
    }

    const onRecAudio = () => {
        // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
        const analyser = audioCtx.createScriptProcessor(0, 1, 1);
        setAnalyser(analyser);
    
        function makeSound(stream) {
            // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
            const source = audioCtx.createMediaStreamSource(stream);
            setSource(source);
            
            // AudioBufferSourceNode 연결
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
        }
        
        // 마이크 사용 권한 획득 후 녹음 시작
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setStream(stream);
            setMedia(mediaRecorder);
            makeSound(stream);
        // 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
            analyser.onaudioprocess = function (e) {
                setOnRec(false);
            };
        });
    };
        // 사용자가 음성 녹음을 중지했을 때
    const offRecAudio = () => {
        // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
        media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setOnRec(true);
        };

        // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
        stream.getAudioTracks().forEach(function (track) {
        track.stop();
        });

        // 미디어 캡처 중지
        media.stop();
        // 메서드가 호출 된 노드 연결 해제
        analyser.disconnect();
        source.disconnect();
    };

    const onSubmitAudioFile = useCallback(() => {
        if (audioUrl) {
        console.log(URL.createObjectURL(audioUrl));
        }
        const sound = new File([audioUrl], "testsound", { lastModified: new Date().getTime(), type: "audio" });
        console.log(sound); // File 정보 출력
        uploadS3(sound);
        const url = URL.createObjectURL(sound);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'testsound.mp3';
        link.click();
    }, [audioUrl]);

    return (
        <div className="chatroom_container">
            <div className="chatroom_body">
                
                <div className="chatroom_face"> 
                    {/* <img src={Placeholder} className="chatroom_face_data" ></img> */}
                    <VideoPlayer className="chatroom_face_data"/>
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
                    <button className="chatroom_bottom_box" onClick={onRec ? onRecAudio : offRecAudio}>
                        <img src={Record} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Record</div>
                    </button>
                    <button className="chatroom_bottom_box" onClick={onSubmitAudioFile}>
                        <img src={Management} className="chatroom_bottom_icon"></img>
                        <div className="chatroom_bottom_text">Management</div>
                    </button>
                </div>
                <div className="chatroom_bottom_rightbox" onClick={onSubmitAudioFile}>
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






