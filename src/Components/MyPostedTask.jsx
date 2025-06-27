import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";

const MyPostedTask = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null); // ⭐ To store clicked task

    useEffect(() => {
        if (user?.email) {
            fetch(`https://b11a10-server-side-paul-96-shimu.vercel.app/freelancers/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Logged-in email:", user.email);
                    setTasks(data);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your task has been deleted.", "success");
                        setTasks((prev) => prev.filter((task) => task._id !== id));
                    });
            }
        });
    };

    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Posted Tasks</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Category</th>
                        <th>UsersMail</th>
                        <th>Budget</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task._id}>
                            <td>{index + 1}</td>
                            <td>{task.name}</td>
                            <td>{task.dedline}</td>
                            <td>{task.category}</td>
                            <td>{task.usermail}</td>
                            <td>{task.budget}</td>

                            <td className="space-x-2">
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="btn btn-sm btn-error text-white"
                                >
                                    Delete <MdDelete />
                                </button>

                                <Link to={`/updatedtask/${task._id}`}>
                                    <button className="btn btn-sm btn-primary text-white">
                                        Edit <FaEdit />
                                    </button>
                                </Link>

                                <button
                                    className="btn btn-sm btn-warning text-white"
                                    onClick={() => {
                                        setSelectedTask(task);
                                        setShowModal(true);
                                    }}
                                >
                                    Bid  <BiDetail />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && selectedTask && (
                <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg text-center relative">
                        <h2 className="text-2xl font-bold mb-4">Bid Count</h2>
                        <p className="text-xl">
                            This task has{" "}
                            <strong>{selectedTask.bidcount ?? 0}</strong> bids.
                        </p>
                        <button
                            className="btn mt-6 btn-sm"
                            onClick={() => {
                                setShowModal(false);
                                setSelectedTask(null);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPostedTask;
