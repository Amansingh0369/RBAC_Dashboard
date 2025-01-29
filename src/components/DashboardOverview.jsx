import React from 'react';

const DashboardOverview = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <div className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium">Posts</h3>
                        <p className="text-2xl font-bold">234</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h3 className="font-medium">viedo</h3>
                        <p className="text-2xl font-bold">56</p>
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