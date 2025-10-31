import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        {link && (
          <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">
            Learn more
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;