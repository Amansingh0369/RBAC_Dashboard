import React from 'react';

const DashboardOverview = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium">System Status</h3>
                    <p className="text-gray-600">All systems are operating normally</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium">Users</h3>
                        <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium">Content</h3>
                        <p className="text-2xl font-bold">567</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium">Active</h3>
                        <p className="text-2xl font-bold">89%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;