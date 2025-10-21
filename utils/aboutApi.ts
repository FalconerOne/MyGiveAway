"use client";
import React, { useState, useEffect } from "react";
import { getTeamData } from "@/utils/aboutApi";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

const TeamEditor: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamData();
      setTeam(data);
    };
    fetchData();
  }, []);

  const handleAdd = () => {
    if (!newMember.name.trim() || !newMember.role.trim()) return;
    setTeam([...team, { id: team.length + 1, ...newMember }]);
    setNewMember({ name: "", role: "", image: "" });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">👥 Team Members</h2>

      {/* Add Form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          className="px-3 py-2 rounded bg-gray-800 text-white flex-1"
        />
        <input
          type="text"
          placeholder="Role"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          className="px-3 py-2 rounded bg-gray-800 text-white flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Add
        </button>
      </div>

      {/* Display List */}
      <div className="space-y-3">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
          >
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamEditor;
