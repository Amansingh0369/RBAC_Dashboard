import React from 'react';

const UserManagement = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="font-medium">Active Users</h3>
                    <p className="text-gray-600">There are 125 active users in the system</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Add New User
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
                        Manage Roles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;