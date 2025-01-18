import React from 'react'

interface CardProps {
  imageUrl: string
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card
