import { useState } from 'react';
import { MessageSquare, Users, LogOut, User, X, Menu } from 'lucide-react';
import StartWhirlIcon from '../assets/icons/startwhirl.svg';
import Logo from '../assets/icons/Logo.svg';
import BG from '../assets/icons/BG.svg';

const Chat = () => {
    const [activeTab, setActiveTab] = useState('chat');
    const [selectedChat, setSelectedChat] = useState<string | null>(null);
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
    const [showProfileSlider, setShowProfileSlider] = useState(false);
    const [profileTab, setProfileTab] = useState<'about' | 'media'>('about');
    const [showSidebar, setShowSidebar] = useState(false);

    // Sample data - replace with your actual data source
    const messages = [
        { id: 'alex', name: 'Alex', message: 'OMG, which one? Tell me it\'s got a power ballad...', time: '5 mins ago', unread: 5, avatar: 'gray', country: 'Philippines', bio: 'I\'m a chill guy.' },
        { id: 'jasmine', name: 'Jasmine', message: 'Hey! What\'s up? I just hit \'Random,\' so surprise me. 😊', time: '35 mins ago', unread: 0, avatar: 'gray', country: 'Philippines', bio: 'Music lover and adventure seeker.' },
        { id: 'maria', name: 'Maria', message: 'You\'ve connected with Jasmine (PHI). Take it easy...', time: '6 hours ago', unread: 1, avatar: 'gray', country: 'Philippines', bio: 'Creative soul exploring the world.' },
        { id: 'amara', name: 'Amara', message: 'Lo-fi is the best. Pizza is always the right answer, FYI. Hope...', time: '14 hours ago', unread: 0, avatar: 'gray', country: 'Philippines', bio: 'Foodie and travel enthusiast.' },
    ];

    const friends = [
        { id: 'friend1', name: 'Sarah', status: 'online', avatar: 'gray', country: 'USA', bio: 'I\'m a chill person who loves music and travel.' },
        { id: 'friend2', name: 'Mike', status: 'offline', avatar: 'gray', country: 'UK', bio: 'Tech enthusiast and coffee lover.' },
        { id: 'friend3', name: 'Emma', status: 'online', avatar: 'gray', country: 'Canada', bio: 'Art and design are my passions.' },
        { id: 'friend4', name: 'David', status: 'away', avatar: 'gray', country: 'Philippines', bio: 'I\'m a chill guy.' },
    ];

    const handleFriendClick = (friendId: string) => {
        setSelectedFriend(friendId);
        setShowProfileSlider(true);
    };

    const closeProfileSlider = () => {
        setShowProfileSlider(false);
        setSelectedFriend(null);
    };

    const handleChatSelect = (chatId: string) => {
        setSelectedChat(chatId);
        setShowSidebar(false); // Close sidebar on mobile when chat is selected
    };

    const totalUnread = messages.reduce((sum, msg) => sum + msg.unread, 0);

    return (
        <div className="flex h-screen w-full bg-white font-sans overflow-hidden relative">
            {/* Mobile Sidebar Overlay */}
            {showSidebar && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 w-72 bg-[#F0F8FF] flex flex-col border-r border-blue-50/50 z-50 transform transition-transform duration-300 ease-in-out ${
                showSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-8">
                    <div className="flex items-center gap-2">
                        <img src={Logo}
                            alt="logo"
                            className="w-10 h-10"
                        />
                        <span className="text-2xl font-black text-[#3B82F6] tracking-wide">HIRL</span>
                    </div>
                    <button 
                        onClick={() => setShowSidebar(false)}
                        className="lg:hidden p-2 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                        <X size={20} className="text-[#3498DB]" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-6">
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

                {/* Messages/Friends List */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 mt-6 hide-scrollbar">
                    {activeTab === 'chat' ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 w-full max-w-[320px] text-center border border-blue-200">
                                <p className="text-gray-700 font-semibold mb-4 text-sm sm:text-base">
                                    You've earned the right to connect with your Whirler.
                                </p>
                 
                                <button className="bg-[#5DADE2] text-white px-6 py-2 rounded-lg w-full mb-2 text-sm sm:text-base">
                                    Connect
                                </button>
                 
                                <button className="text-gray-400 text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>

                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-[#3498DB]">Messages</h2>
                                {totalUnread > 0 && (
                                    <span className="bg-yellow-400 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                        {totalUnread}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-2">
                                {messages.map((msg) => (
                                    <button
                                        key={msg.id}
                                        onClick={() => handleChatSelect(msg.id)}
                                        className={`w-full p-2 sm:p-3 rounded-xl transition-all text-left ${
                                            selectedChat === msg.id
                                                ? 'bg-[#5DADE2] text-white'
                                                : 'bg-white hover:bg-blue-50'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0"></div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className={`font-bold text-sm truncate ${
                                                        selectedChat === msg.id ? 'text-white' : 'text-[#3498DB]'
                                                    }`}>
                                                        {msg.name}
                                                    </p>
                                                    {msg.unread > 0 && selectedChat !== msg.id && (
                                                        <span className="bg-yellow-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                                                            {msg.unread}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className={`text-xs truncate ${
                                                    selectedChat === msg.id ? 'text-blue-100' : 'text-gray-600'
                                                }`}>
                                                    {msg.message}
                                                </p>
                                                <p className={`text-xs mt-1 ${
                                                    selectedChat === msg.id ? 'text-blue-200' : 'text-gray-400'
                                                }`}>
                                                    {msg.time}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-4">
                                </div>

                            </div>
                        </>
                    )}
                </div>

                {/* User Profile */}
                <div className="mx-4 sm:mx-6 mb-6 p-2 sm:p-3 bg-[#D6EAF8]/50 rounded-2xl flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white shadow-sm relative flex-shrink-0">
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-[#3498DB] truncate">AlferLoveJunar</p>
                    </div>
                    <button className="p-1.5 sm:p-2 text-[#5DADE2] hover:text-[#3498DB] bg-[#AED6F1] rounded-lg flex-shrink-0">
                        <LogOut size={16} className="sm:w-[18px] sm:h-[18px] rotate-180" />
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 flex flex-col relative bg-white ${selectedChat ? 'lg:mr-80' : ''} transition-all duration-300`}>
                {/* Header */}
                <header className="mt-2 sm:mt-5 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button 
                            onClick={() => setShowSidebar(true)}
                            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                            <Menu size={20} className="text-[#3498DB]" />
                        </button>
                        {selectedChat && (
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 flex-shrink-0"></div>
                        )}
                        <h1 className="text-[#3498DB] font-bold text-base sm:text-lg">
                            {activeTab === 'friends' 
                                ? 'Friends' 
                                : selectedChat 
                                    ? messages.find(m => m.id === selectedChat)?.name || 'Chat' 
                                    : 'New Chat'}
                        </h1>
                    </div>
                    <button className="text-[#3498DB] p-2 hover:bg-blue-50 rounded-full transition-colors">
                        <User size={20} className="sm:w-6 sm:h-6" />
                    </button>
                </header>

                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center pb-16 sm:pb-32 px-4 sm:px-6">
                    {selectedChat ? (
                        <div className="w-full max-w-3xl">
                            {/* Chat messages would go here */}
                            <div className="text-center text-gray-500 text-sm sm:text-base">
                                Chat messages will appear here
                            </div>
                        </div>
                    ) : (
                        <div className="relative flex flex-col items-center w-full">
                            {/* 3D Character Image */}
                            <div className="mt-70 relative z-10 mb-[-30px] sm:mb-[-45px]">
                                <img
                                    src={StartWhirlIcon}
                                    alt="Start Whirl Character"
                                    className="w-40 sm:w-48 md:w-60 h-auto object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Button */}
                            <button
                                className="relative z-20 bg-[#1F8AC0] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-[0_10px_20px_-5px_rgba(31,138,192,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(31,138,192,0.5)] hover:scale-105 transition-all transform border-b-4 border-[#156B96] active:border-b-0 active:translate-y-1 overflow-hidden">
                                <img src={BG} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
                                <span className="relative z-10">Start Whirl</span>
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Right Profile Panel */}
            {selectedChat && (
                <>
                    {/* Mobile Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                        onClick={() => setSelectedChat(null)}
                    ></div>
                    
                    <aside className="fixed lg:static top-0 right-0 h-full w-full sm:w-80 bg-white border-l border-gray-200 shadow-lg z-30 flex flex-col transform transition-transform duration-300">
                        {/* Mobile Header */}
                        <div className="lg:hidden h-16 flex items-center justify-between px-4 border-b border-gray-200">
                            <h2 className="text-lg font-bold text-[#3498DB]">Profile</h2>
                            <button 
                                onClick={() => setSelectedChat(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Profile Picture Placeholder */}
                        <div className="w-full h-40 sm:h-48 bg-gray-300 flex items-center justify-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-400"></div>
                        </div>

                        {/* Name and Country */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#3498DB]">
                                    {messages.find(m => m.id === selectedChat)?.name || ''}
                                </h3>
                                <span className="text-base sm:text-lg">🇵🇭</span>
                            </div>
                        </div>

                        {/* Profile Tabs */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setProfileTab('about')}
                                    className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
                                        profileTab === 'about'
                                            ? 'text-red-500 border-red-500'
                                            : 'text-gray-400 border-transparent'
                                    }`}
                                >
                                    About
                                </button>
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 hide-scrollbar">
                            {profileTab === 'about' ? (
                                <>
                                    {/* Bio Section */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-[#3498DB] mb-2">Bio:</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {messages.find(m => m.id === selectedChat)?.bio || 'No bio available.'}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    <p className="text-sm">No media shared yet</p>
                                </div>
                            )}
                        </div>
                    </aside>
                </>
            )}

            {/* Profile Slider */}
            {showProfileSlider && selectedFriend && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
                        onClick={closeProfileSlider}
                    ></div>
                    
                    {/* Slider Panel */}
                    <div className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                        showProfileSlider ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200">
                                <h2 className="text-lg font-bold text-[#3498DB]">Profile</h2>
                                <button 
                                    onClick={closeProfileSlider}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={20} className="text-gray-600" />
                                </button>
                            </div>

                            {/* Profile Content */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 hide-scrollbar">
                                {(() => {
                                    const friend = friends.find(f => f.id === selectedFriend);
                                    if (!friend) return null;
                                    
                                    return (
                                        <>
                                            {/* Profile Picture */}
                                            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4 flex items-center justify-center">
                                                <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                                            </div>

                                            {/* Name and Country */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-[#3498DB]">{friend.name}</h3>
                                                    <span className="text-sm text-gray-500">🇵🇭</span>
                                                </div>
                                                <button className="px-4 py-2 bg-[#5DADE2] text-white rounded-lg text-sm font-semibold hover:bg-[#3498DB] transition-colors">
                                                    Friends
                                                </button>
                                            </div>

                                            {/* Bio Section */}
                                            <div className="mb-6">
                                                <h4 className="text-sm font-bold text-[#3498DB] mb-2">Bio</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {friend.bio}
                                                </p>
                                            </div>

                                            {/* Status */}
                                            <div className="mb-6">
                                                <h4 className="text-sm font-bold text-[#3498DB] mb-2">Status</h4>
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full ${
                                                        friend.status === 'online' ? 'bg-green-500' :
                                                        friend.status === 'away' ? 'bg-yellow-400' :
                                                        'bg-gray-400'
                                                    }`}></div>
                                                    <p className="text-sm text-gray-700 capitalize">{friend.status}</p>
                                                </div>
                                            </div>

                                            {/* Country */}
                                            <div>
                                                <h4 className="text-sm font-bold text-[#3498DB] mb-2">Location</h4>
                                                <p className="text-sm text-gray-700">{friend.country}</p>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Chat;