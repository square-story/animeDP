/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import SelectionComponent from "./SelectionComponent";

const GenerateButton = () => {
    const [showSelection, setShowSelection] = useState(false);
    const handleGenerateClick = () => {
        setShowSelection(true);

    };

    const handleCloseSelection = () => {
        setShowSelection(false);
    };

    return (
        <>
            <button
                onClick={handleGenerateClick}
                className="group relative bg-neutral-800 h-20 w-40 border text-left px-4 py-2 text-gray-50 text-base font-bold rounded-lg overflow-hidden flex items-center justify-center hover:text-rose-300 hover:border-rose-300 duration-500"
            >
                <svg
                    width="28"
                    height="28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    clipRule="evenodd"
                    className="group-hover:stroke-rose-300 transition-all duration-500"
                >
                    <path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z" />
                </svg>
            </button>
            <button onClick={handleGenerateClick} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                Generate
            </button>
            {showSelection && <SelectionComponent onClose={handleCloseSelection} />}
        </>
    )
}

export default GenerateButton