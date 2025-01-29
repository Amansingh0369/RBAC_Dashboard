import React, { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import UserManagement from "./UserManagement"
import ContentManagement from "./ContentManagement"
import DashboardOverview from "./DashboardOverview"

const fetchUserRole = async (selectedRole) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(selectedRole)
        }, 500)
    })
}

const Dashboard = () => {
    const [currentRole, setCurrentRole] = useState("Viewer")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const updateRole = async () => {
            setLoading(true)
            await fetchUserRole(currentRole)
            setLoading(false)
        }
        updateRole()
    }, [currentRole])

    return (
        <div className="flex h-screen bg-black">
            <Sidebar currentRole={currentRole} setCurrentRole={setCurrentRole} isSidebarOpen={isSidebarOpen} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} currentRole={currentRole} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
                    <div className="container mx-auto px-6 py-8">

                            <div className="space-y-8">
                                {currentRole === "Admin" && <UserManagement />}
                                {(currentRole === "Admin" || currentRole === "Editor") && <ContentManagement />}
                                <DashboardOverview />
                            </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard