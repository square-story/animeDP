import Card from "../components/Card"
import HomeButtons from "../components/HomeButtons"

const MasterPage = () => {
    return (
        <div className="flex flex-col gap-10 justify-center h-screen w-full items-center bg-black text-white">
            <Card />
            <HomeButtons />
        </div>
    )
}

export default MasterPage