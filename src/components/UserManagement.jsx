import React, {useEffect, useState} from "react"
import axios from "axios";

const UserManagement = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://rbac-backend-d3m5.onrender.com/Admin");
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading)
        return(
            <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-32 w-32 border-dotted border-l-4 border-white"></div>
            </div>
        )
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">User Management</h2>
            <div className="space-y-6">
                <div className="bg-black p-6 rounded-lg shadow border border-gray-800">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Active Users</h3>
                    <p className="text-gray-400">There are {data.active} active users in the system</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white hover:bg-gray-200 text-black font-medium py-2 px-4 rounded-lg transition duration-200">
                        Add New User
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 border border-gray-700">
                        Manage Roles
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserManagement