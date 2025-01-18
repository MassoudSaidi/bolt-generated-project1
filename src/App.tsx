import React from 'react'
import { Camera } from 'lucide-react'
import Card from './components/Card'

function App() {
  const cardsData = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Forest',
      description: 'A beautiful forest landscape.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mountain',
      description: 'A stunning mountain range.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'City',
      description: 'A vibrant cityscape at night.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-bold text-gray-800 flex items-center">
            <Camera className="mr-2" />
            Photo Gallery
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="flex items-center justify-center bg-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore stunning photos from around the world.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Gallery
          </button>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
