"use client"
import { useState, useEffect } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", address: "", email: "", phone: "" });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(`USER-${Date.now()}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ ...formData, userId }));
  };

  return (
    <form className="p-5 border rounded-lg" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" className="input input-bordered w-full" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="Address" className="input input-bordered w-full mt-2" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
      <input type="email" placeholder="Email" className="input input-bordered w-full mt-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Phone" className="input input-bordered w-full mt-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <button className="btn btn-primary mt-3" type="submit">Submit</button>
    </form>
  );
};

export default UserForm;