// src/pages/ViewMembers.js
import React, { useEffect, useState } from 'react';
import axios from '../api';
import MemberCard from '../components/MemberCard';
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('/members');
        setMembers(res.data);
      } catch (err) {
        console.error('Error fetching members:', err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-container">
      <h2 style={{ textAlign: 'center' }}>Team Members</h2>
      <div className="members-list">
        {members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
