import axios from "axios";
import React, { useEffect, useState } from "react";

const ADMIN_EMAIL = "brandcraftduo@gmail.com"; // your admin email

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("adminToken");
  const email = localStorage.getItem("adminEmail");

  if (!token || email !== ADMIN_EMAIL) {
    setError("Unauthorized: Only admin can access this page.");
    setLoading(false);
    return;
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://brandcraft-6yvg.onrender.com/api/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Make sure res.data is an array
      const usersArray = Array.isArray(res.data) ? res.data : res.data.users || [];
      setUsers(usersArray);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-slate-700 p-2">Name</th>
              <th className="border-b border-slate-700 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border-b border-slate-700 p-2">{user.name}</td>
                <td className="border-b border-slate-700 p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
