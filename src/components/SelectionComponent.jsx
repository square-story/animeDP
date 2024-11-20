/* eslint-disable react/prop-types */
const SelectionComponent = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-neutral-800 p-6 rounded-lg border text-gray-50 w-80 shadow-lg overflow-hidden">
                {/* Glowing effects */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-violet-500 rounded-full blur-lg opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-300 rounded-full blur-lg opacity-50"></div>

                <h2 className="text-xl font-bold mb-4 text-gray-50">Select Options</h2>

                <form>
                    {/* Gender Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Gender
                        </label>
                        <select
                            className="w-full p-2 border border-gray-700 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-violet-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* Anime Category Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Anime Category
                        </label>
                        <select
                            className="w-full p-2 border border-gray-700 rounded-md bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            <option value="action">Action</option>
                            <option value="romance">Romance</option>
                            <option value="comedy">Comedy</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>

                    {/* Submit and Close Buttons */}
                    <div className="flex justify-between space-x-2 mt-6">
                        <button
                            type="button"
                            className="relative bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition duration-300"
                            onClick={onClose}
                        >
                            <span className="absolute inset-0 blur-sm bg-rose-500 opacity-50 rounded-md"></span>
                            Close
                        </button>
                        <button
                            type="submit"
                            className="relative bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600 transition duration-300"
                        >
                            <span className="absolute inset-0 blur-sm bg-violet-500 opacity-50 rounded-md"></span>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default SelectionComponent;