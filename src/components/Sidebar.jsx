import React from "react"

const Sidebar = ({ currentRole, setCurrentRole, isSidebarOpen }) => {
    const roles = ["Admin", "Editor", "Viewer"]

    return (
        <div
            className={`bg-gray-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
            <nav>
                <div className="text-white text-xl font-semibold px-4 mb-6">Role Selector</div>
                {roles.map((role) => (
                    <button
                        key={role}
                        className={`block py-2.5 px-4 rounded transition duration-200 w-full text-left ${
                            currentRole === role ? "bg-white text-black" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={() => setCurrentRole(role)}
                    >
                        {role}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar