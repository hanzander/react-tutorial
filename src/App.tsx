import React, { useState } from 'react'
import Profile from './Profile'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const profile = {
    name: "Han Zander Villanueva",
    image: "/han.jpg",
  };

  const handleNameClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="clickable-name" onClick={handleNameClick}>
          Han Zander Villanueva
        </h1>
        <div className="profile-container">
          <Profile
            name={profile.name}
            image={profile.image}
          />
        </div>
      </header>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="modal-body">
              <h2>About Me</h2>
              <p>i love designing stuff, drawing, making every single thing aesthetically pleasing to the human eye.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
