"use client"
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  interface User {
    name: string;
    phone: string;
  }

  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("user");
    if (savedData) {
      setUserData([JSON.parse(savedData)]);
    }
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <LineChart width={600} height={300} data={userData}>
        <Line type="monotone" dataKey="phone" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Dashboard;