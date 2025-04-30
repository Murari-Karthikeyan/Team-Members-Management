// src/pages/MemberDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`/members/${id}`);
        setMember(res.data);
      } catch (err) {
        setError('Failed to fetch member details.');
        console.error(err);
      }
    };
    fetchMember();
  }, [id]);

  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!member) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  const imageUrl = `http://localhost:5000/uploads/${member.image}`;

  return (
    <div className="member-details">
      <img src={imageUrl} alt={member.name} />
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
};

export default MemberDetails;
