import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddTask = () => {
    const [deadline, setDeadline] = useState(new Date());


    const handleAddTaskButton = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const freelancerData = Object.fromEntries(formData.entries());


        freelancerData.dedline = deadline.toISOString().split("T")[0];



        fetch('https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(freelancerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully');
                    Swal.fire({
                        title: "Freelancer task added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                    setDeadline(new Date());


                }
            });
    };

    return (
        <div className='py-12'>
            <h1 className='text-6xl font-bold mb-4 text-center'>Add Task</h1>
            <p className='text-center text-xl mb-10'>
                This task is ideal for reliable freelancers who can deliver high-quality work within the given deadline.
                Please read the details carefully before placing your bid. It’s a great opportunity to showcase your skills!
            </p>

            <div className='mt-10 max-w-4xl mx-auto'>
                <form onSubmit={handleAddTaskButton}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                        <label className="label">User Name</label>
                        <input type="text" name="username" className="input w-full" placeholder="User Name" required />

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input type="email" name="usermail" className="input w-full" placeholder="User Email" required />
                    </fieldset>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Task Title</label>
                            <input type="text" name="name" className="input w-full" placeholder="Task Title" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Category</label>
                            <select name="category" className="select w-full" required>
                                <option value="" disabled selected>Select a category</option>
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
                            <input type="text" name="description" className="input w-full" placeholder="Description" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Deadline</label>
                            <DatePicker
                                selected={deadline}
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
                        <input type="text" name="budget" className="input w-full" placeholder="Budget" required />
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;
