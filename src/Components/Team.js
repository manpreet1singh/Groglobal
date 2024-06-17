import React, { useEffect, useState } from 'react';
import './Team.css';
import {team} from './Assets.js'; // Make sure the path to the JSON file is correct

const ProfileCard = () => {
  const [profiles, setProfiles] = useState([]);
  console.log(team[1].image); 
  useEffect(() => {
    setProfiles(team);
  }, []);

  return (
    <div>
        <div className="ourteam"> Meet Our Team</div>
    <div className="profile-card-container">
      {profiles.map((profile) => (
        <div className="profile-card" key={profile.id}>
          <img src={profile.image} alt={profile.name} className="profile-image" />
          <div className="profile-details">
            <h2>{profile.role}</h2>
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <div className="social-icons">
              {profile.socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={social.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProfileCard;
