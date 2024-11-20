import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../reducers/apiSlice";

const RandomImageGenerator = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.api)

    const animeList = [
        { value: "Attack_On_Titan", label: "Attack On Titan" },
        { value: "Death_Note", label: "Death Note" },
        { value: "Fullmetal_Alchemist_Brotherhood", label: "Fullmetal Alchemist Brotherhood" },
        { value: "Hunter_x_Hunter", label: "Hunter x Hunter" },
        { value: "Inazuma_Eleven", label: "Inazuma Eleven" },
        { value: "Kimetsu_no_Yaiba", label: "Kimetsu no Yaiba" },
        { value: "Naruto_Shippuuden", label: "Naruto Shippuuden" },
        { value: "One_Piece", label: "One Piece" },
        { value: "One_Punch_Man", label: "One Punch Man" },
        { value: "one_Piece_Crews", label: "one Piece Crews" }
    ];

    const handleGenerateClick = () => {
        const randomName = `user${Math.floor(Math.random() * 1000)}`;
        const randomGender = Math.random() > 0.5 ? 'male' : 'female';
        const randomAnime = animeList[Math.floor(Math.random() * animeList.length)].value;

        dispatch(fetchImage({ name: randomName, gender: randomGender, animeName: randomAnime }))
    }

    return (
        <>
            <button
                onClick={handleGenerateClick}
                className="group relative bg-neutral-800 h-20 w-40 border text-left px-4 py-2 text-gray-50 text-base font-bold rounded-lg overflow-hidden flex items-center justify-center hover:text-rose-300 hover:border-rose-300 duration-500"
            >
                {loading ? 'Loading' : <svg
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
                </svg>}
            </button>
        </>
    )
}

export default RandomImageGenerator