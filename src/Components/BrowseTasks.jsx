import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTasks = () => {
    const freelancer = useLoaderData();
    console.log(freelancer)
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Browse Tasks
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {freelancer.map(task => (
                    <div key={task._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{task.name}</h2>
                        <p><strong>Username:</strong> {task.username}</p>
                        <p><strong>Email:</strong> {task.usermail}</p>
                        <p><strong>Category:</strong> {task.category}</p>
                        <p><strong>Budget:</strong> ${task.budget}</p>
                        <p><strong>Deadline:</strong> {task.dedline}</p>
                        <p className="text-sm mt-2 text-gray-600">{task.description}</p>

                        <Link to={`/taskdetails/${task._id}`} className="btn btn-primary mt-4 w-full">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseTasks;


