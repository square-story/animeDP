const AnimeCategory = () => {
    const category = [
        {
            value: "Attack_On_Titan",
            label: "Attack On Titan"
        },
        {
            value: "Death_Note",
            label: "Death Note"
        },
        {
            value: "Fullmetal_Alchemist_Brotherhood",
            label: "Fullmetal Alchemist Brotherhood"
        },
        {
            value: "Hunter_x_Hunter",
            label: "Hunter x Hunter"
        },
        {
            value: "Inazuma_Eleven",
            label: "Inazuma Eleven"
        },
        {
            value: "Kimetsu_no_Yaiba",
            label: "Kimetsu no Yaiba"
        },
        {
            value: "Naruto_Shippuuden",
            label: "Naruto Shippuuden"
        },
        {
            value: "One_Piece",
            label: "One Piece"
        },
        {
            value: "One_Punch_Man",
            label: "One Punch Man"
        },
        {
            value: "one_Piece_Crews",
            label: "one Piece Crews"
        }
    ]

    return (
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
                {category.map(item => {
                    return (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default AnimeCategory