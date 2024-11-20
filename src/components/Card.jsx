
const Card = () => {
    return (
        <>
            <div
                className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[rgb(251,82,251)] group hover:scale-110 transition-transform duration-300 ease-out"
            >
                <div
                    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] group-hover:animate-juggle"
                >
                    CARD
                </div>
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
        </>
    )
}

export default Card