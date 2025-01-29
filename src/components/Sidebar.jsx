import React from 'react';

const Sidebar = ({ currentRole, setCurrentRole }) => {
    const roles = ['Admin', 'Editor', 'Viewer'];

    return (
        <div className="w-24  sm:w-64 bg-white shadow-sm h-screen p-2 sm:p-4 transition-all duration-300 sticky top-16">
            <div className="space-y-2">
                {roles.map((role) => (
                    <button
                        key={role}
                        className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                            currentRole === role
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setCurrentRole(role)}
                    >
                        {role}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;