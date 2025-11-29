import React, { useState } from 'react';
import { MessageSquare, Users, LogOut, User } from 'lucide-react';
import StartWhirlIcon from '../assets/icons/startwhirl.svg';
import Logo from '../assets/icons/Logo.svg';
import BG from '../assets/icons/BG.svg';

const Chat = () => {
    const [activeTab, setActiveTab] = useState('chat');

    return (
        <div className="flex h-screen w-full bg-white font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-[#F0F8FF] flex flex-col border-r border-blue-50/50">
                {/* Logo */}
                <div className="h-20 flex items-center px-8">
                    <div className="flex items-center gap-2">
                        <img src={Logo}
                            alt="logo"
                            className="w-10 h-10"
                        />
                        <span className="text-2xl font-black text-[#3B82F6] tracking-wide">HIRL</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="px-6 mt-6">
                    <div className="flex bg-[#D6EAF8] p-1.5 rounded-2xl">
                        <button
                            onClick={() => setActiveTab('chat')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'chat'
                                ? 'bg-[#5DADE2] text-white shadow-sm'
                                : 'text-[#5DADE2] hover:bg-blue-100/50'
                                }`}
                        >
                            <MessageSquare size={18} className={activeTab === 'chat' ? "text-[#F4D03F] fill-current" : ""} />
                            Chat
                        </button>
                        <button
                            onClick={() => setActiveTab('friends')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'friends'
                                ? 'bg-[#5DADE2] text-white shadow-sm'
                                : 'text-[#5DADE2] hover:bg-blue-100/50'
                                }`}
                        >
                            <Users size={18} />
                            Friends
                        </button>
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* User Profile */}
                <div className="mx-6 mb-6 p-3 bg-[#D6EAF8]/50 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white shadow-sm relative">
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#3498DB] truncate">AlferGwapo123</p>
                    </div>
                    <button className="p-2 text-[#5DADE2] hover:text-[#3498DB] bg-[#AED6F1] rounded-lg">
                        <LogOut size={18} className="rotate-180" />
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative bg-white">
                {/* Header */}
                <header className="h-20 flex items-center justify-between px-10">
                    <h1 className="text-[#3498DB] font-bold text-lg">New Chat</h1>
                    <button className="text-[#3498DB] p-2 hover:bg-blue-50 rounded-full transition-colors">
                        <User size={24} />
                    </button>
                </header>

                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center pb-32">
                    <div className="relative flex flex-col items-center">
                        {/* 3D Character Image */}
                        <div className="mt-75 relative z-10 mb-[-45px]">
                            <img
                                src={StartWhirlIcon}
                                alt="Start Whirl Character"
                                className="w-60 h-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Button */}
                        <button
                            className="relative z-20 bg-[#1F8AC0] text-white px-16 py-4 rounded-full font-bold text-xl shadow-[0_10px_20px_-5px_rgba(31,138,192,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(31,138,192,0.5)] hover:scale-105 transition-all transform border-b-4 border-[#156B96] active:border-b-0 active:translate-y-1 overflow-hidden">
                            <img src={BG} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
                            <span className="relative z-10">Start Whirl</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Chat;
