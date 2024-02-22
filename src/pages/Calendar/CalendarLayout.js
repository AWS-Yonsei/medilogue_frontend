import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css"
import { useNavigate } from "react-router-dom";
import PortalMenu from "../../layouts/PortalMenu/PortalMenu";
import PortalDoctorSideBar from "../../layouts/PortalMenu/PortalDoctorSideBar";
const API_URL = 'http://localhost:8080'

const CalendarLayout = ({ }) => {
    const [memos, setMemos] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showMemoModal, setShowMemoModal] = useState(false);
    const handleDateClick = (newDate) => {
        setSelectedDate(newDate);
        setShowMemoModal(false);
        //window.location.reload();
        navigate("/calendar/" + newDate);
    }
    const navigate = useNavigate();
    const [memoList, setMemoList] = useState([]);
    const [startTimeHour, setStartTimeHour] = useState('');
    const [startTimeMinute, setStartTimeMinute] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientID, setPatientID] = useState('');

    const getData = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
            const response = await axios.get(`${API_URL}/calendar/${formattedDate}`, { headers: { Authorization: `Bearer ${token}` } });
            const { schedules } = response.data;
            setMemoList(schedules);
            console.log(schedules);
            schedules.forEach(schedule => {
                const date = new Date(schedule.startTime).toISOString().split('T')[0];
                if (memos[date]) {
                    memos[date].push(schedule);
                } else {
                    memos[date] = [];
                }
            });
            console.log("memos", memos);
        }
        catch (error) {
            console.error('Error while fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
        const selectedDateString = selectedDate.toDateString();
        if (memos[selectedDateString]) {
            setMemoList(memos[selectedDateString]);
        } else {
            setMemoList([]);
        }
    }, []);

    const createSchedule = async () => {
        const token = localStorage.getItem('accessToken');
        const Time = `T${startTimeHour.padStart(2, '0')}:${startTimeMinute.padStart(2, '0')}:00Z`;
        const Day = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${(selectedDate.getDate()).toString().padStart(2, '0')}`
        const newMemo = {
            content: patientID,
            startTime: `${Day}${Time}`,
            attendee: patientName,
        };

        try {
            await axios.post('http://localhost:8080/calendar/create', newMemo, { headers: { Authorization: `Bearer ${token}` } });
        } catch (error) {
            console.error('Error while sending data:', error);
        }
        navigate("/calendar/" + selectedDate);
        window.location.reload();
    };

    const renderMemoList = () => {
        const dateString = new Date(selectedDate).toISOString().split('T')[0];
        const daySchedules = memos[dateString];
        if (!daySchedules) {
            return null;
        }
        return daySchedules.map((memo, index) => {
            let backgroundColorClass;
            if (index % 3 === 0) {
                backgroundColorClass = "bg-emerald-400 bg-opacity-30";
            } else if (index % 3 === 1) {
                backgroundColorClass = "bg-orange-50";
            } else if (index % 3 === 2) {
                backgroundColorClass = "bg-red-600 bg-opacity-20";
            }

            return (
                <div key={index} className={`gap-4 justify-between mt-8 `}>
                    <div className="time">
                        {new Date(memo.startTime).toISOString().split('T')[1].split('.')[0]}
                    </div>
                    <div className={` flex gap-3 justify-between text-base font-medium tracking-tight rounded text-stone-900 ${backgroundColorClass}`}>
                        <div className="bg-teal-600 rounded h-[76px] w-[5px]" />
                        <div className="flex_col1 my-auto">
                            <div className="text-black">{`환자 이름: ${memo.attendee}`}</div>
                            <div className="mt_4 text-black">{`진료 내용: ${memo.content}`}</div>
                        </div>
                    </div>
                </div>
            );

            return null;
        });
    };



    const handleAddMemoClick = () => {
        setShowMemoModal(true);
        console.log(selectedDate)
    };

    const tileContent = ({ date }) => {
        const dateString = date.toISOString().split('T')[0];
        //new Date(schedule.startTime).toISOString().split('T')[0];
        const memo = memos[dateString];
        if (memo) {
            return (
                <div className="memo-list">
                    {memo.map((time, index) => (
                        <div key={index} className="memo-item">
                            {index === 0 && <br />}
                            <div>{`진료: ${new Date(time.startTime).toISOString().split('T')[1].split(':')[0]}:${new Date(time.startTime).toISOString().split('T')[1].split(':')[1]}`}</div>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <PortalMenu>
            </PortalMenu>
            <div className="main">
                <PortalDoctorSideBar>
                </PortalDoctorSideBar>
                <div className="body">
                    <div className="body_calandar">
                        <Calendar
                            onClickDay={handleDateClick}
                            value={selectedDate}
                            formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
                            tileContent={tileContent}
                        />
                    </div>
                    <div className="body_selection">
                        <div className="body_selection_topbar">
                            <div className="body_selection_topbar_container">
                                <div className="body_selection_topbar_title">Selected Day</div>
                                <div className="body_selection_topbar_date">{selectedDate.toDateString()}</div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0b5a6d95d8c6adb712041e9c45ba2bfb0c62ae89354ae0b126fbfd881cdd10?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                                className="body_selection_topbar_alarm"
                            />
                        </div>
                        <div className="body_selection_main">
                            {renderMemoList()}
                            {!showMemoModal && (
                                <button onClick={handleAddMemoClick}>메모추가</button>
                            )}
                            {showMemoModal && (
                                <div className="modal">
                                    <label>진료 시간:</label>
                                    <div>
                                        <select value={startTimeHour} onChange={(e) => setStartTimeHour(e.target.value)}>
                                            {[...Array(25).keys()].map((hour) => (
                                                <option key={hour} value={hour.toString().padStart(2, '0')}>
                                                    {hour.toString().padStart(2, '0')}
                                                </option>
                                            ))}
                                        </select>
                                        시
                                        <select value={startTimeMinute} onChange={(e) => setStartTimeMinute(e.target.value)}>
                                            <option value="00">00</option>
                                            <option value="30">30</option>
                                        </select>
                                        분
                                    </div>
                                    <label>환자 이름:</label>
                                    <textarea rows="1" cols="5" value={patientName} onChange={(e) => setPatientName(e.target.value)} /><br />
                                    <label>진료 내용:</label>
                                    <textarea rows="1" cols="2" value={patientID} onChange={(e) => setPatientID(e.target.value)} /><br />
                                    <button onClick={createSchedule} >추가</button>
                                    <button onClick={() => setShowMemoModal(false)}>취소</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalendarLayout;