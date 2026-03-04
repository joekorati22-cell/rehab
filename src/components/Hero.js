import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);

    const hotspots = [
        {
            id: 'shoulder',
            position: { top: '30%', left: '40.5%' },
            title: 'Shoulder',
            text: 'Shoulder pain affects 1 in 3 adults regularly'
        },
        {
            id: 'back',
            position: { top: '42%', left: '41%' },
            title: 'Lower Back',
            text: '80% of adults suffer from lower back pain'
        },
        {
            id: 'knee',
            position: { bottom: '30.45%', left: '53%' },
            title: 'Knee',
            text: 'Knee pain is the leading cause of 1 in 4 adults'
        }
    ];

    const handleHotspotClick = (hotspotId) => {
        setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
    };

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Side - Image */}
                <div className="hero-image">
                    <img
                        src="https://images.pexels.com/photos/7592400/pexels-photo-7592400.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Physiotherapy"
                        className="runner-image"
                    />

                    {/* Hotspots */}
                    {hotspots.map((hotspot) => (
                        <div
                            key={hotspot.id}
                            className="hotspot"
                            style={hotspot.position}
                            onClick={() => handleHotspotClick(hotspot.id)}
                        >
                            <div className="hotspot-dot"></div>
                            {activeHotspot === hotspot.id && (
                                <div className="hotspot-tooltip">
                                    <h4>{hotspot.title}</h4>
                                    <p>{hotspot.text}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side - Content */}
                <div className="hero-content">
                    {/* Social Proof */}
                    <div className="social-proof">
                        <div className="avatars">
                            <img
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                                alt="User"
                            />
                            <img
                                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100"
                                alt="User"
                            />
                            <img
                                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100"
                                alt="User"
                            />
                        </div>
                        <div className="rating">
                            <span className="users">TRUSTED WORLDWIDE</span>
                        </div>
                        <div className="rating">
                            <span className="users">2.4M Users</span>
                            <span className="stars">⭐ 4.8</span>
                        </div>
                    </div>

                    {/* Service Tags */}
                    <div className="service-tags">
                        <span className="tag tag-orange">Gain Clarity</span>
                        <span className="tag tag-red">Manage Stress</span>
                        <span className="tag tag-blue">Self-Awareness</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="hero-title">
                        Your First Physiotherapy Consultation - <span className="italic">Absolutely Free</span>
                    </h1>

                    {/* Badge */}
                    <div className="badge">
                        <span className="badge-dot">●</span>
                        FOR LOWER BACK CARE
                    </div>

                    {/* Description */}
                    <p className="hero-description">
                        80% of adults suffer from lower back pain. <strong>Spinal decompression and core stabilization programs.</strong> At Rehab Care, we provide world-class clinical expertise.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <button className="btn-cta">
                            Book a call <span className="arrow">→</span>
                        </button>
                        <button className="btn-video">
                            <span className="play-icon">▶</span>
                            <div className="video-text">
                                <span className="video-label">Watch Video</span>
                                <span className="video-sublabel">LEARN OUR PROCESS</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="hero-bg-decoration"></div>
        </section>
    );
};

export default Hero;
