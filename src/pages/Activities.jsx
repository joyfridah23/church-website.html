import React from 'react'

function Activities() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Others</h1>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-xs sm:text-sm md:text-base mb-8">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Sunday</th>
                        <th className="py-2 px-4 border-b">Activity</th>
                        <th className="py-2 px-4 border-b">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">3rd Sunday</td>
                        <td className="py-2 px-4 border-b">Ladies & Men Seminar (Held after the main service on the 3rd Sunday of every month)</td>
                        <td className="py-2 px-4 border-b">After Service</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">4th Sunday</td>
                        <td className="py-2 px-4 border-b">Youth Seminar (Held after the main service on the 4th Sunday of every month)</td>
                        <td className="py-2 px-4 border-b">After Service</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Activities
