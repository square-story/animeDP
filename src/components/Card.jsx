
const Card = () => {
    return (
        <>
            <div
                className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[rgb(251,82,251)] group hover:scale-110 transition-transform duration-300 ease-out"
            >
                <div className="absolute inset-0 z-[1]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://anime.kirwako.com/api/avatar?name=your-custom-seed&gender=male"
                        alt="Avatar"
                    />
                </div>
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
        </>
    );
};

export default Card;
