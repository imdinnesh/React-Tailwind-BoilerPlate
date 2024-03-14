import React, { useState } from 'react';
import { FaCopy, FaCheck, FaTimes } from 'react-icons/fa';

function Lobby() {
    const [username, setUsername] = useState('johndoe');
    const [roomId, setRoomId] = useState('h6mkr6tPRpaOL1Evy2B82');
    const [showTick, setShowTick] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // New state for login component

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleRoomIdChange = (e) => {
        setRoomId(e.target.value);
    };

    const handleCreateRoom = () => {
        // Logic to create a new room
        console.log('Creating a new room...');
    };

    const handleJoinRoom = () => {
        setShowLogin(true); // Show the login component
    };

    const handleCopyRoomId = () => {
        navigator.clipboard.writeText(roomId);
        setShowTick(true);
        setTimeout(() => setShowTick(false), 2000);
    };

    const handleCloseLogin = () => {
        setShowLogin(false); // Hide the login component
    };

    const handleJoinWithUsername = () => {
        // Logic to join the room with the provided username and room ID
        console.log('Joining room:', roomId, 'with username:', username);
        setShowLogin(false); // Hide the login component
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Scribble</h1>
                <p className="text-gray-600 mb-6">Draw on the same canvas with your friends in real-time.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-6 flex">
                    <div className="w-full mr-2">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="roomId">
                            Room ID
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="roomId"
                            type="text"
                            value={roomId}
                            onChange={handleRoomIdChange}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative"
                        onClick={handleCopyRoomId}
                    >
                        {showTick ? <FaCheck className="text-green-500" /> : <FaCopy />}
                    </button>
                </div>
                <div className="flex justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleCreateRoom}
                    >
                        Create a Room
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleJoinRoom}
                    >
                        Join a Room
                    </button>
                </div>
            </div>

            {/* Login component */}
            {showLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseLogin}
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Join Room</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="loginUsername">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="loginUsername"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="loginRoomId">
                                Room ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="loginRoomId"
                                type="text"
                                value={roomId}
                                onChange={handleRoomIdChange}
                            />
                        </div>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleJoinWithUsername}
                        >
                            Join
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lobby;