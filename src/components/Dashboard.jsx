import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import DashboardOverview from './DashboardOverview';

const fetchUserRole = async (selectedRole) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(selectedRole);
        }, 500);
    });
};

const Dashboard = () => {
    const [currentRole, setCurrentRole] = useState('Viewer');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const updateRole = async () => {
            setLoading(true);
            await fetchUserRole(currentRole);
            setLoading(false);
        };
        updateRole();
    }, [currentRole]);

    return (
        <div>
            <Navbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                currentRole={currentRole}
            />

            <div className="flex transition-all duration-300">
                {isSidebarOpen && (
                    <Sidebar currentRole={currentRole} setCurrentRole={setCurrentRole} />
                )}

                <div className="flex-1 p-8">
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        <div className="space-y-6">
                            {currentRole === 'Admin' && <UserManagement />}
                            {(currentRole === 'Admin' || currentRole === 'Editor') && <ContentManagement />}
                            <DashboardOverview />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;