import React from 'react'
import logo from '../assets/logo.png'

function Others() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Other Activities</h1>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-lg sm:text-xl md:text-2xl mb-8">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-r">Sunday</th>
                        <th className="py-2 px-4 border-b border-r">Activity</th>
                        <th className="py-2 px-4 border-b">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b border-r">3rd Sunday</td>
                        <td className="py-2 px-4 border-b border-r">Ladies & Men Seminar</td>
                        <td className="py-2 px-4 border-b">After Service</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b border-r">4th Sunday</td>
                        <td className="py-2 px-4 border-b border-r">Youth Seminar</td>
                        <td className="py-2 px-4 border-b">After Service</td>
                    </tr>

                </tbody>
            </table>

            <section className="mb-8">
                <section className="mb-8 flex justify-end items-center ">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-800 border-l-4 border-violet-700
                         text-white p-6 rounded shadow  md:w-70 w-full mr-0 " >
                        <h2 className="text-2xl font-bold mb-2 text-center">Tithes and Offerings</h2>
                        <p className="text-lg text-center">You can give your tithes and offerings via our church till number:</p>
                        <div className="text-3xl font-bold text-center my-4">8045718</div>
                    </div>
                </section>
            </section>

        </div>
    );
}

export default Others

