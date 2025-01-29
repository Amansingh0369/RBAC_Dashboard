import React from 'react';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, currentRole }) => {
    return (
        <div className="bg-white shadow-sm transition-all duration-300 sticky z-100 top-0">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <button
                            className="p-2 rounded-md hover:bg-gray-100"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <h1 className="ml-4 text-xl font-semibold">RBAC Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Current Role:</span>
                        <span className="font-semibold">{currentRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;