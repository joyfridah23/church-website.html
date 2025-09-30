import React from 'react'
import logo from '../assets/logo.png'

function Location() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Our Location</h1>
            <p className="text-lg text-gray-700 text-center max-w-xl bg-white p-4 rounded shadow">
                We are located along Machakos-Wote Road, about 200 meters from Machakos University,
                behind Queens Hostel.
            </p>
        </div>
    );
}

export default Location;
