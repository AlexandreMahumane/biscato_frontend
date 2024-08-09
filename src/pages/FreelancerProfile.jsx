import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../components/footer/';

import { Header } from '../components/header';






export const FreelancerProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const freelancerId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/freelancer/${freelancerId}`);
        setProfile(response.data);
        setShowOptions(true); // Mostra opções após carregar o perfil
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, [freelancerId]);

  const handleOptionClick = (option) => {
    if (option === 'feedback') {
      navigate('/feedback'); // Redireciona para a página de feedback
    } else if (option === 'history') {
      navigate('/dashboard'); // Redireciona para o dashboard
    }
  };

  if (!profile) return <div className="text-center text-gray-700">Loading...</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{profile.name}</h2>
          <p className="text-gray-600 mb-2"><strong>Category:</strong> {profile.category}</p>
          <p className="text-gray-600 mb-2"><strong>Location:</strong> {profile.location}</p>
          <p className="text-gray-600 mb-4"><strong>Bio:</strong> {profile.bio}</p>
          {showOptions ? (
            <div className="flex justify-around">
              <button
                onClick={() => handleOptionClick('feedback')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Give Feedback
              </button>
              <button
                onClick={() => handleOptionClick('history')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                View History
              </button>
            </div>
          ) : (
            <p className="text-green-700 mt-4">Profile loaded successfully.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

 export default FreelancerProfile
