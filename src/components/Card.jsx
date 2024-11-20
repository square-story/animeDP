import { useSelector } from "react-redux";

const Card = () => {
    const { imageUrl, loading, error } = useSelector((state) => state.api);

    return (
        <>
            <div
                className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[rgb(0,0,0)] group hover:scale-110 transition-transform duration-300 ease-out"
            >
                <div className="absolute inset-0 z-[1] flex items-center justify-center">
                    {loading && (
                        <div
                            className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4"
                        >
                            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                        </div>

                    )}
                    {error && <p className="text-red-500">{error}</p>}
                    {imageUrl && !loading && (
                        <img
                            className="w-full h-full object-cover"
                            src={imageUrl}
                            alt="Avatar"
                        />
                    )}
                </div>
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
        </>
    );
};

export default Card;
