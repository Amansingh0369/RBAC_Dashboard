import React from 'react';

const ContentManagement = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Content Management</h2>
            <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-md">
                    <h3 className="font-medium">Recent Updates</h3>
                    <p className="text-gray-600">15 content pieces were updated in the last 24 hours</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Create Content
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
                        Review Queue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement;