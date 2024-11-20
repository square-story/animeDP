import Card from "../components/Card"
import HomeButtons from "../components/HomeButtons"
import './MasterPage.css'

const MasterPage = () => {
    return (
        <div className="pg-com flex flex-col gap-10 justify-center h-screen w-full items-center bg-black text-white">
            <Card />
            <HomeButtons />
        </div>
    )
}

export default MasterPage