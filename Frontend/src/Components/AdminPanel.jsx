import axios from "axios";
import React, { useEffect, useState } from "react";

const ADMIN_EMAIL = "brandcraftduo@gmail.com";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Read token & email from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");

    if (!token || email !== ADMIN_EMAIL) {
      setError("Unauthorized: Only admin can access this page.");
      setLoading(false);
      return;
    }

    // Fetch users
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://brandcraft-6yvg.onrender.com/api/user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const usersArray = Array.isArray(res.data) ? res.data : res.data.users || [];
        setUsers(usersArray);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch messages
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          "https://brandcraft-6yvg.onrender.com/api/message",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const messagesArray = Array.isArray(res.data) ? res.data : res.data.message || [];
        setMessages(messagesArray);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch messages.");
      }
    };

    fetchUsers();
    fetchMessages();
  }, []);

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>

      {/* Users Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-800">
                <tr>
                  <th className="border-b border-slate-700 p-3">Name</th>
                  <th className="border-b border-slate-700 p-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-slate-700 transition">
                    <td className="border-b border-slate-700 p-3">{user.name}</td>
                    <td className="border-b border-slate-700 p-3">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Messages Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-800">
                <tr>
                  <th className="border-b border-slate-700 p-3">Name</th>
                  <th className="border-b border-slate-700 p-3">Email</th>
                  <th className="border-b border-slate-700 p-3">Message</th>
                  <th className="border-b border-slate-700 p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-slate-700 transition">
                    <td className="border-b border-slate-700 p-3">{msg.name}</td>
                    <td className="border-b border-slate-700 p-3">{msg.email}</td>
                    <td className="border-b border-slate-700 p-3">{msg.message}</td>
                    <td className="border-b border-slate-700 p-3">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminPanel;
