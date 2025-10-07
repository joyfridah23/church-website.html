import React from 'react'
import logo from '../assets/logo.png'
import backgroundImage from '../assets/fgck background image.avif'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen mt-15 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className="w-full py-8 bg-blue-900 text-white text-center shadow-lg flex flex-col items-center">
                <img src={logo} alt="Full Gospel Churches of Kenya Logo" className="h-24 w-auto mb-4 rounded-full shadow-lg bg-white" />
                <h1 className="text-4xl font-bold mb-2">Welcome to Full Gospel Churches of Kenya Machakos</h1>
                <p className="text-lg">A place to worship, connect, and grow in faith</p>
            </header>
            <main className="flex-1 w-full max-w-3xl px-2 sm:px-4 py-8">

                <section className="mb-8 text-center">
                    <p className="text-white text-4xl font-bold mb-16">We welcome everyone to join our ministries.</p>
                    <p className="text-white text-4xl font-bold mb-16">We love visitors.</p>


                    <h2 className="text-2xl font-bold mb-6 text-center text-4xl text-white underline">Order of Our Services</h2>
                    <div className="mb-6 overflow-x-auto">
                        <h3 className="text-4xl font-bold mb-2 text-white">Sunday Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-lg sm:text-xl md:text-2xl mb-8">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-r">Time</th>
                                    <th className="py-2 px-4 border-b border-r">Activity</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">7:45 AM - 9:00 AM</td>
                                    <td className="py-2 px-4 border-b border-r">1st Service</td>

                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">9:00 AM - 10:00 AM</td>
                                    <td className="py-2 px-4 border-b border-r">Prayer Session & Sunday School Session in Progress</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">10:00 AM - 1:00 PM</td>
                                    <td className="py-2 px-4 border-b border-r">2nd Service</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto">
                        <h3 className="text-4xl font-bold mb-2 text-white">Mid-Week Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-lg sm:text-xl md:text-2xl mb-8">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-r">Day</th>
                                    <th className="py-2 px-4 border-b border-r">Time</th>
                                    <th className="py-2 px-4 border-b">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">    Wednesday</td>
                                    <td className="py-2 px-4 border-b border-r">6:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Bible Study (Church Hall)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Thursday</td>
                                    <td className="py-2 px-4 border-b border-r">7:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Home Fellowships</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Friday</td>
                                    <td className="py-2 px-4 border-b border-r">6:00 PM - 7:30 PM</td>
                                    <td className="py-2 px-4 border-b">Evening Prayers (Church Hall)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Saturday</td>
                                    <td className="py-2 px-4 border-b border-r">4:00 PM - 6:00 PM</td>
                                    <td className="py-2 px-4 border-b">Praise and Worship Practice</td>
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
