"use client";
import { useEffect, useState } from "react";

const link = "https://travel-guides-backend.onrender.com";
const API_URL = process.env.NEXT_PUBLIC_API_URL || link;;
// const res = await fetch(`${API_URL}/api/guides`);
// const data = await res.json();

export default function TestCRUD() {
  const [guides, setGuides] = useState([]);
  const [title, setTitle] = useState("");

  // GET all guides
  const fetchGuides = async () => {
    const res = await fetch(`${API_URL}/api/guides`);
    const data = await res.json();
    setGuides(data);
  };

  // POST new guide
  const addGuide = async () => {
    await fetch(`${API_URL}/api/guides`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        content: "Contenido demo",
        is_premium: false,
      }),
    });
    setTitle("");
    fetchGuides();
  };

  // PUT (update first guide title)
  const updateGuide = async (id) => {
    await fetch(`${API_URL}/api/guides/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title || "Updated title" }),
    });
    fetchGuides();
  };

  // DELETE guide
  const deleteGuide = async (id) => {
    await fetch(`${API_URL}/api/guides/${id}`, { method: "DELETE" });
    fetchGuides();
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test CRUD</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nuevo título"
        />
        <button className="bg-blue-500 text-white px-4" onClick={addGuide}>
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {guides.map((g) => (
          <li key={g.id} className="border p-2 flex justify-between items-center">
            <span>{g.title}</span>
            <div className="space-x-2">
              <button className="bg-yellow-400 px-2" onClick={() => updateGuide(g.id)}>
                Update
              </button>
              <button className="bg-red-500 text-white px-2" onClick={() => deleteGuide(g.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
