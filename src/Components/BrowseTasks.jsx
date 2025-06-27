import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTasks = () => {
    const freelancer = useLoaderData();
    console.log(freelancer)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6 placeholder-gray-100">Browse Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freelancer.map(task => (
                    <div key={task._id} className="border rounded p-4 shadow">

                        <h2 className="text-xl font-semibold">{task.name}</h2>
                        <p><strong>username:</strong> {task.username}</p>
                        <p><strong>usermail:</strong> {task.usermail}</p>
                        <p><strong>Category:</strong> {task.category}</p>
                        <p><strong>Budget:</strong> ${task.budget}</p>
                        <p><strong>Deadline:</strong> {task.dedline}</p>
                        <p className="text-sm mt-2">{task.description}</p>


                        <Link to={`/taskdetails/${task._id}`} className='btn btn-primary mt-4 w-full'>
                            See Details
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseTasks;


