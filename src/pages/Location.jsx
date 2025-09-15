import React from 'react'

function Location() {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundImage: "url('/fgck-background-image.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Our Location</h1>
            <p className="text-lg text-gray-700 text-center max-w-xl">
                We are located along Machakos Wote Road, behind Queens Hostel, about 200 meters from Machakos University.
            </p>
        </div>
    );
}

export default Location
