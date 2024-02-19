import React from 'react';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="shadow-md rounded-lg p-4">
            <div>
            <img src={imageSrc} alt={title} className="w-1/4 h-16 object-cover rounded-t-md mb-4" />
            </div>
            <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
        );
    };

export default Card;