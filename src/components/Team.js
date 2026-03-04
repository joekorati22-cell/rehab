import React from 'react';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Dr. Mark Davis',
            role: 'Sports Medicine Specialist',
            experience: '15+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dr. Priya Sharma',
            role: 'Lead Physiotherapist',
            experience: '10+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dr. Leo Vance',
            role: 'Orthopedic Surgeon',
            experience: '18+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dr. Anya Sharma',
            role: 'Neurologist',
            experience: '12+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dr. James Wilson',
            role: 'Senior Physical Therapist',
            experience: '20+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dr. Sarah Miller',
            role: 'Pediatric Physiotherapist',
            experience: '8+ YEARS EXP.',
            image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <div className="team-header">
                    <div className="team-badge">● OUR SPECIALISTS</div>
                    <h2 className="team-title">Meet our dedicated and experienced team</h2>
                    <p className="team-subtitle">
                        Helping you regain strength, mobility, and confidence with personalized care from world-class experts.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-experience">{member.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
