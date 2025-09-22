import React from 'react'

function Others() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundImage: "url('/fgck-background-image.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Other Activities</h1>
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
                        <td className="py-2 px-4 border-b">Ladies & Men Seminar</td>
                        <td className="py-2 px-4 border-b">After Service</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">4th Sunday</td>
                        <td className="py-2 px-4 border-b">Youth Seminar</td>
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

