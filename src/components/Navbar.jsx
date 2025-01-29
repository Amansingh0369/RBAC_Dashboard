import React from "react"

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, currentRole }) => {
    return (
        <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center ">
                        <button
                            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg className="h-6 w-6 block sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="ml-4 text-xl font-semibold text-white">RBAC Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm text-gray-400 mr-2">Current Role:</span>
                        <span className="text-sm font-medium text-black bg-white px-3 py-1 rounded-full">{currentRole}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar