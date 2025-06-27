import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const UpdatedTask = () => {
    const [setDeadline] = useState(new Date());

    const { username, usermail, name, category, description, dedline, budget, _id } = useLoaderData()

    const handleUpdatedTaskButton = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const UpdatedfreelancerData = Object.fromEntries(formData.entries());
        console.log(UpdatedfreelancerData);

        fetch(`https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedfreelancerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    Swal.fire({
                        title: "Freelancer task Updated successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                    setDeadline(new Date());

                }
            })

    }
    return (
        <div className='py-12'>
            <h1 className='text-6xl font-bold mb-4 text-center'>Updated Task</h1>


            <div className='mt-10 max-w-4xl mx-auto'>
                <form onSubmit={handleUpdatedTaskButton}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                        <label className="label">User Name</label>
                        <input type="text" name="username" defaultValue={username} className="input w-full" placeholder="User Name" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input type="email" name="usermail" defaultValue={usermail} className="input w-full" placeholder="User Email" required />
                    </fieldset>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Task Title</label>
                            <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Task Title" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Category</label>
                            <select name="category" defaultValue={category} className="select w-full" required>
                                <option value="" disabled>Select a category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Design">Design</option>
                                <option value="Writing">Writing</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Content">Content Writing</option>
                                <option value="Digital">Digital Marketing</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Description</label>
                            <input type="text" name="description" defaultValue={description} className="input w-full" placeholder="Description" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Deadline</label>
                            <DatePicker
                                selected={dedline}
                                onChange={(date) => setDeadline(date)}
                                minDate={new Date()}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select deadline"
                                className="input input-bordered w-full"
                                popperPlacement="bottom-start"
                                popperClassName="z-50"
                            />
                        </fieldset>
                    </div>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-6 mb-6">
                        <label className="label">Budget</label>
                        <input type="text" name="budget" defaultValue={budget} className="input w-full" placeholder="Budget" required />
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Updated Task" />
                </form>
            </div>
        </div>
    );
};

export default UpdatedTask;