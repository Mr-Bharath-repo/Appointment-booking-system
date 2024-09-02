'use client'

import React, { useState } from 'react';

const RoomComponent = ({ initialRooms = ['Room 101', 'Room 102', 'Room 206'] }) => {
    const [rooms, setRooms] = useState<string[]>(initialRooms);
    const [newRoom, setNewRoom] = useState<string>('');

    const addRoom = () => {
        if (newRoom.trim()) {
            setRooms([...rooms, newRoom.trim()]);
            setNewRoom('');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoom(e.target.value);
    };

    return (
        <div className="room-container">
            <div className="room-list">
                {rooms.map((room, index) => (
                    <div key={index} className="room">
                        {room}
                    </div>
                ))}
            </div>
            <br/>
           
            <div className="room-addition">
                <input
                    type="text"
                    value={newRoom}
                    onChange={handleInputChange}
                    placeholder="Add new room"
                />
                <button onClick={addRoom}>Add Room</button>
            </div>
        </div>
    );
};

export default RoomComponent;
