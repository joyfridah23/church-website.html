import React from 'react'
import logo from '../assets/logo.png'

function Activities() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Activities</h1>
            <p className="text-lg text-gray-700 text-center max-w-xl mb-4">
                This page can be used to display special events, programs, or recurring activities organized by the church.
            </p>
            {/* Add your activities table or content here as needed */}
        </div>
    );
}

export default Activities
