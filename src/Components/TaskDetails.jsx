import React, { useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router';
import { BiDetail } from "react-icons/bi";

const TaskDetails = () => {
    const freelancerUser = useLoaderData();


    const [bidsCount, setBidsCount] = useState(0);

    const handleBidClick = async () => {
        try {
            const response = await axios.patch(`https://b11a10-server-side-paul-96-shimu.vercel.app/bidcount/${freelancerUser._id}`);
            if (response.data.modifiedCount > 0) {
                setBidsCount(prev => prev + 1);
            }
        } catch (error) {
            console.error('Failed to update bid count:', error);
        }
    };

    return (

        <div className='mt-10'>
            <h1 className='text-4xl fot-bold mb-4'> All Task Name </h1>

            <h2 className='text-2xl font-semibold text-center mb-4'>
                You bid for {bidsCount} {bidsCount === 1 ? 'opportunity' : 'opportunities'}.
            </h2>
            <div className='max-w-3xl mx-auto py-12 px-4 bg-amber-600 mt-10 rounded-md '>


                <h2 className='text-3xl font-bold mb-4'>{freelancerUser.name}</h2>

                <p><strong>Category:</strong> {freelancerUser.category}</p>
                <p><strong>Description:</strong> {freelancerUser.description}</p>
                <p><strong>Budget:</strong> ${freelancerUser.budget}</p>
                <p><strong>Deadline:</strong> {freelancerUser.dedline}</p>
                <p><strong>Posted by:</strong> {freelancerUser.username} ({freelancerUser.usermail})</p>

                <button
                    onClick={handleBidClick}
                    className='mt-6 btn btn-primary'
                >
                    <BiDetail /> Bid
                </button>

            </div>
        </div>
    );
};

export default TaskDetails;

