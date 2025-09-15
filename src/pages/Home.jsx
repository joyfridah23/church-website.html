import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen mt-15 bg-gray-50 flex flex-col items-center justify-center">
            <header className="w-full py-8 bg-blue-900 text-white text-center shadow-lg flex flex-col items-center">
                <img src={logo} alt="Full Gospel Churches of Kenya Logo" className="h-24 w-auto mb-4 rounded-full shadow-lg bg-white" />
                <h1 className="text-4xl font-bold mb-2">Welcome to Full Gospel Churches of Kenya Machakos</h1>
                <p className="text-lg">A place to worship, connect, and grow in faith</p>
            </header>
            <main className="flex-1 w-full max-w-3xl px-2 sm:px-4 py-8">
                <section className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">you are all welcome</h2>

                </section>
                <section className="mb-8 text-center">
                    <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
                    <p className="text-gray-700 mb-2">We welcome everyone to join our ministries.</p>

                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Order of Our Services</h2>
                    <div className="mb-6 overflow-x-auto">
                        <h3 className="text-xl font-semibold mb-2 text-blue-900">Sunday Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-xs sm:text-sm md:text-base">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Time</th>
                                    <th className="py-2 px-4 border-b">Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">7:45 AM - 9:00 AM</td>
                                    <td className="py-2 px-4 border-b">1st service</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">9:00 AM - 10:00 AM</td>
                                    <td className="py-2 px-4 border-b">Prayer Session & Sunday School Session in Progress</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">10:00 AM - 1:00 PM</td>
                                    <td className="py-2 px-4 border-b">2nd service</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto">
                        <h3 className="text-xl font-semibold mb-2 text-blue-900">Mid-Week Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-xs sm:text-sm md:text-base">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Day</th>
                                    <th className="py-2 px-4 border-b">Time</th>
                                    <th className="py-2 px-4 border-b">Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">Wednesday</td>
                                    <td className="py-2 px-4 border-b">6:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Youth Bible Study</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">Thursday</td>
                                    <td className="py-2 px-4 border-b">7:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Home Fellowships</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">Friday</td>
                                    <td className="py-2 px-4 border-b">6:00 PM - 7:30 PM</td>
                                    <td className="py-2 px-4 border-b">Prayer (Church Hall)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">Saturday</td>
                                    <td className="py-2 px-4 border-b">4:00 PM - 6:00 PM</td>
                                    <td className="py-2 px-4 border-b">praise and worship</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <footer className="w-full py-4 bg-gray-800 text-white text-center">
                &copy; 2025 Full Gospel Churches of Kenya Machakos. All rights reserved.
            </footer>
        </div>
    );
}

// ...existing code...
