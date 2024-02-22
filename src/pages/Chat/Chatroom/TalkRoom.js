import React, { useState, useEffect } from "react";
import Camera from "../../../components/camera.png";
import Send from "../../../components/send.png";
import Clock from "react-live-clock";
import "../Portal/TalkRoom.css";

const TalkRoom = () => {
    const [messages, setMessages] = useState([]);
    const [currentTypingId, setCurrentTypingId] = useState(null);
    const handleSendMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, isUser: true }
        ]);
    };
    const handleEndTyping = (id) => {
        setMessages((prevMessages) =>
            prevMessages.map((msg) =>
                msg.id === id ? { ...msg, isTyping: false } : msg
            )
        );
        setCurrentTypingId(null);
    };
    useEffect(() => {
        if (currentTypingId === null) {
            const nextTypingMessage = messages.find(
                (msg) => !msg.isUser && msg.isTyping
            );
            if (nextTypingMessage) {
                setCurrentTypingId(nextTypingMessage.id);
            }
        }
    }, [messages, currentTypingId]);

    return (
        <>
            <div className="chat_room_box">

                <MessageList
                    messages={messages}
                    currentTypingId={currentTypingId}
                    onEndTyping={handleEndTyping}
                />
                <MessageForm onSendMessage={handleSendMessage} />

            </div>
        </>
    );
};

const MessageList = ({ messages, currentTypingId, onEndTyping }) => (
    <div className="chat_list">
        <Clock format={'YYYY.MM.DD'} ticking={false} timezone={"Asia/Seoul"} className="time_data" />
        <div className="ai-message">
            <div className="ai-text">
                You can send message here!
            </div>
            <Clock format={'HH:mm'} ticking={false} timezone={"Asia/Seoul"} className="ai-time" />
        </div>
        <div className="user-message">
            <div className="user-text">
                I can chat here!
            </div>
            <Clock format={'HH:mm'} ticking={false} timezone={"Asia/Seoul"} className="ai-time" />
        </div>
        {messages.map((message, index) => (
            <Message
                key={index}
                {...message}
                onEndTyping={onEndTyping}
                currentTypingId={currentTypingId}
            />
        ))}
    </div>
);

const Message = ({
    text,
    isUser,
    isTyping,
    id,
    onEndTyping,
    currentTypingId
}) => {
    return (
        <>
            <div className={isUser ? "user-message" : "ai-message"}>
                {isTyping && currentTypingId === id ? (
                    <>
                        <div className="ai-text">
                            {text}
                        </div>
                        <Clock format={'HH:mm'} ticking={false} timezone={"Asia/Seoul"} className="ai-time" />
                    </>
                ) : (
                    <>
                        <div className={isUser ? "user-text" : "ai-text"}>
                            {text}
                        </div>
                        <Clock format={'HH:mm'} ticking={false} timezone={"Asia/Seoul"} className={isUser ? "user-time" : "ai-time"} />
                    </>
                )}
            </div>
        </>
    );
};

const MessageForm = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage(message);
        setMessage("");
    };

    return (
        <div className="chat_send_square_container">
            <form onSubmit={handleSubmit} className="chat_send_square">
                <input
                    type="text"
                    value={message}
                    placeholder="Type your message"
                    onChange={(event) => setMessage(event.target.value)}
                    className="chat_send_square_text"
                />
                <div className="chat_send_square_button_box">
                    <button type="submit" className="send-button">
                        <img class="chat_send_square_logo" src={Camera} />
                    </button>
                    <button type="submit" className="send-button">
                        <img class="chat_send_square_logo" src={Send} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TalkRoom;
