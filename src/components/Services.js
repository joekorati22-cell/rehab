import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            category: 'Rehabilitation',
            title: 'Knee & Ankle Care',
            image: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 2,
            category: 'Sports',
            title: 'Shoulder & Elbow Rehab',
            image: 'https://images.pexels.com/photos/6975391/pexels-photo-6975391.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 3,
            category: 'Geriatric',
            title: 'Geriatric Physiotherapy',
            image: 'https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 4,
            category: 'Sports',
            title: 'Post-Operative Rehabilitation',
            image: 'https://images.pexels.com/photos/6975459/pexels-photo-6975459.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2>Specialized Treatments for <span className="italic">Your Recovery</span></h2>
                    <p>Evidence-based physiotherapy tailored to your unique needs, using state-of-the-art techniques.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-image">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                />
                                <div className="service-overlay">
                                    <span className="service-category">{service.category}</span>
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
