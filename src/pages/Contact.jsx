import React from 'react';

function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center max-w-xl mb-4">
                We'd love to hear from you! For any inquiries, prayer requests, or information about our church, please reach out using the contact details below.
            </p>
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-md text-center">
                <p className="text-xl font-semibold mb-2">Phone:</p>
                <p className="text-blue-900 text-lg mb-4">0768 622 994</p>
                <p className="text-gray-700">You can call or text us for more information about our services, events, or to connect with a pastor.</p>
            </div>
        </div>
    );
}

export default Contact;
