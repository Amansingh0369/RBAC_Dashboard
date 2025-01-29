import React, {useEffect, useState} from "react"
import axios from "axios"

const DashboardOverview = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://rbac-backend-d3m5.onrender.com/user");
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
            <h2 className="text-2xl font-semibold mb-6 text-white">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black p-6 rounded-lg shadow border border-gray-800">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Posts</h3>
                    <p className="text-3xl font-bold text-white">{data.post}</p>
                </div>
                <div className="bg-black p-6 rounded-lg shadow border border-gray-800">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Videos</h3>
                    <p className="text-3xl font-bold text-white">{data.video}</p>
                </div>
                <div className="bg-black p-6 rounded-lg shadow border border-gray-800">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">Active Users</h3>
                    <p className="text-3xl font-bold text-white">{data.active}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardOverview